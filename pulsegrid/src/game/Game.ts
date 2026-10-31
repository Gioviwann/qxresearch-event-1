import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {
  CELL,
  GRID_H,
  GRID_W,
  TOWERS,
  buildWaves,
  cellToWorld,
  isPathCell,
  pathWorldPoints,
  worldToCell,
} from './data';
import { Enemy } from './Enemy';
import { Effects } from './Effects';
import { Tower, ampBonusAt } from './Tower';
import type { TowerKind } from './types';
import { Sfx } from '../audio/sfx';

export interface HudState {
  credits: number;
  lives: number;
  wave: number;
  totalWaves: number;
  interest: number;
  selectedKind: TowerKind;
}

type SpawnJob = { enemy: string; at: number };

export class Game {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;

  private towers: Tower[] = [];
  private enemies: Enemy[] = [];
  private effects: Effects;
  private sfx = new Sfx();
  private pathPts = pathWorldPoints();
  private waves = buildWaves();
  private spawnQueue: SpawnJob[] = [];
  private waveIndex = 0;
  private waveActive = false;
  private elapsed = 0;
  private credits = 220;
  private lives = 20;
  private interest = 0.02;
  private selectedKind: TowerKind = 'beam';
  private selectedTower: Tower | null = null;
  private hoverMesh: THREE.Mesh;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private groundPlane: THREE.Mesh;
  private running = false;
  private ended = false;
  private clock = new THREE.Clock();
  private onHud: (s: HudState) => void;
  private onToast: (msg: string) => void;
  private onEnd: (won: boolean) => void;
  private anim = 0;

  constructor(
    canvas: HTMLCanvasElement,
    handlers: {
      onHud: (s: HudState) => void;
      onToast: (msg: string) => void;
      onEnd: (won: boolean) => void;
    },
  ) {
    this.onHud = handlers.onHud;
    this.onToast = handlers.onToast;
    this.onEnd = handlers.onEnd;

    this.camera = new THREE.PerspectiveCamera(48, 1, 0.1, 200);
    this.camera.position.set(0, 16.5, 14.5);
    this.camera.lookAt(0, 0, 0.5);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.scene.background = new THREE.Color(0x05080f);
    this.scene.fog = new THREE.FogExp2(0x05080f, 0.024);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.4, 0.72);
    this.composer.addPass(bloom);

    this.effects = new Effects(this.scene);
    this.buildArena();

    this.hoverMesh = new THREE.Mesh(
      new THREE.BoxGeometry(CELL * 0.92, 0.08, CELL * 0.92),
      new THREE.MeshBasicMaterial({ color: 0x3de6d4, transparent: true, opacity: 0.35 }),
    );
    this.hoverMesh.visible = false;
    this.scene.add(this.hoverMesh);

    this.groundPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(GRID_W * CELL + 4, GRID_H * CELL + 4),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    this.groundPlane.rotation.x = -Math.PI / 2;
    this.scene.add(this.groundPlane);

    window.addEventListener('resize', this.onResize);
    canvas.addEventListener('pointermove', this.onPointerMove);
    canvas.addEventListener('pointerdown', this.onPointerDown);
    this.onResize();
  }

  start(): void {
    this.running = true;
    this.ended = false;
    this.clock.start();
    this.pushHud();
    this.loop();
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.anim);
  }

  setSelectedKind(kind: TowerKind): void {
    this.selectedKind = kind;
    if (this.selectedTower) {
      this.selectedTower.showRange(false);
      this.selectedTower = null;
    }
    this.pushHud();
  }

  sellSelected(): void {
    if (!this.selectedTower) {
      this.onToast('Select a relay first');
      return;
    }
    const value = this.selectedTower.sellValue;
    this.credits += value;
    this.scene.remove(this.selectedTower.mesh);
    this.towers = this.towers.filter((t) => t !== this.selectedTower);
    this.selectedTower = null;
    this.onToast(`Sold for ${value} credits`);
    this.pushHud();
  }

  callNextWave(): void {
    if (this.ended || this.waveActive || this.spawnQueue.length) {
      this.onToast('Wave already in progress');
      return;
    }
    if (this.waveIndex >= this.waves.length) {
      this.finish(true);
      return;
    }
    this.queueWave(this.waveIndex);
    this.waveIndex += 1;
    this.waveActive = true;
    this.sfx.wave();
    this.onToast(`Wave ${this.waveIndex} inbound`);
    this.pushHud();
  }

  restart(): void {
    for (const e of this.enemies) {
      this.scene.remove(e.mesh);
      e.dispose();
    }
    for (const t of this.towers) this.scene.remove(t.mesh);
    this.effects.clear();
    this.enemies = [];
    this.towers = [];
    this.spawnQueue = [];
    this.waveIndex = 0;
    this.waveActive = false;
    this.credits = 220;
    this.lives = 20;
    this.interest = 0.02;
    this.selectedTower = null;
    this.ended = false;
    this.elapsed = 0;
    this.pushHud();
  }

  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    this.renderer.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer.dispose();
  }

  private buildArena(): void {
    const hemi = new THREE.HemisphereLight(0x9ecbff, 0x0a1020, 0.55);
    this.scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffffff, 1.15);
    key.position.set(8, 16, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 40;
    key.shadow.camera.left = -14;
    key.shadow.camera.right = 14;
    key.shadow.camera.top = 14;
    key.shadow.camera.bottom = -14;
    this.scene.add(key);
    const rim = new THREE.PointLight(0x3de6d4, 1.4, 40);
    rim.position.set(-6, 6, -4);
    this.scene.add(rim);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(GRID_W * CELL + 2.5, GRID_H * CELL + 2.5),
      new THREE.MeshStandardMaterial({
        color: 0x0b1422,
        metalness: 0.55,
        roughness: 0.65,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const grid = new THREE.GridHelper(
      Math.max(GRID_W, GRID_H) * CELL,
      Math.max(GRID_W, GRID_H),
      0x1f3a4d,
      0x132433,
    );
    grid.position.y = 0.01;
    this.scene.add(grid);

    for (let y = 0; y < GRID_H; y++) {
      for (let x = 0; x < GRID_W; x++) {
        if (!isPathCell(x, y)) continue;
        const { x: wx, z: wz } = cellToWorld(x, y);
        const tile = new THREE.Mesh(
          new THREE.BoxGeometry(CELL * 0.95, 0.06, CELL * 0.95),
          new THREE.MeshStandardMaterial({
            color: 0x123447,
            emissive: 0x0a6a7a,
            emissiveIntensity: 0.35,
            metalness: 0.4,
            roughness: 0.4,
          }),
        );
        tile.position.set(wx, 0.03, wz);
        tile.receiveShadow = true;
        this.scene.add(tile);
      }
    }

    // Core node at path end
    const end = this.pathPts[this.pathPts.length - 1];
    const core = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.55, 0),
      new THREE.MeshStandardMaterial({
        color: 0x3de6d4,
        emissive: 0x3de6d4,
        emissiveIntensity: 0.9,
        metalness: 0.3,
        roughness: 0.2,
      }),
    );
    core.position.set(end.x, 0.7, end.z);
    this.scene.add(core);

    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(GRID_W * CELL + 2.8, 0.4, GRID_H * CELL + 2.8),
      new THREE.MeshStandardMaterial({ color: 0x101826, metalness: 0.7, roughness: 0.4 }),
    );
    frame.position.y = -0.22;
    this.scene.add(frame);
  }

  private loop = (): void => {
    if (!this.running) return;
    this.anim = requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += dt;
    this.updateSpawns();
    this.updateEnemies(dt);
    this.updateTowers(dt);
    this.effects.update(dt);

    // gentle camera sway
    this.camera.position.x = Math.sin(this.elapsed * 0.15) * 0.35;
    this.camera.lookAt(0, 0, 0.5);

    this.composer.render();
  };

  private updateSpawns(): void {
    if (!this.spawnQueue.length) return;
    const now = this.elapsed;
    while (this.spawnQueue.length && this.spawnQueue[0].at <= now) {
      const job = this.spawnQueue.shift()!;
      const enemy = new Enemy(job.enemy, this.pathPts);
      // scale HP with wave progression
      const scale = 1 + Math.max(0, this.waveIndex - 1) * 0.12;
      enemy.hp *= scale;
      enemy.maxHp *= scale;
      this.enemies.push(enemy);
      this.scene.add(enemy.mesh);
    }
  }

  private updateEnemies(dt: number): void {
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      const status = e.update(dt);
      if (status === 'dead') {
        this.credits += e.reward;
        this.effects.burst(e.position, e.def.color);
        this.sfx.hit();
        this.scene.remove(e.mesh);
        e.dispose();
        this.enemies.splice(i, 1);
        this.pushHud();
      } else if (status === 'leaked') {
        this.lives -= 1;
        this.sfx.leak();
        this.scene.remove(e.mesh);
        e.dispose();
        this.enemies.splice(i, 1);
        this.onToast(`Core integrity ${this.lives}`);
        this.pushHud();
        if (this.lives <= 0) this.finish(false);
      }
    }

    if (
      this.waveActive &&
      !this.spawnQueue.length &&
      this.enemies.length === 0 &&
      !this.ended
    ) {
      this.waveActive = false;
      const interestGain = Math.floor(this.credits * this.interest);
      this.credits += interestGain;
      if (this.waveIndex % 4 === 0) this.interest = Math.min(0.08, this.interest + 0.005);
      this.onToast(`Wave cleared · +${interestGain} interest`);
      this.pushHud();
      if (this.waveIndex >= this.waves.length) this.finish(true);
    }
  }

  private updateTowers(dt: number): void {
    for (const tower of this.towers) {
      const bonus = ampBonusAt(this.towers, tower.mesh.position.x, tower.mesh.position.z);
      const shot = tower.update(dt, this.enemies, bonus);
      if (shot.target && shot.kind !== 'none') {
        const color = tower.def.color;
        this.effects.beam(tower.mesh.position, shot.target.position, color);
        if (shot.kind === 'salvo') this.effects.burst(shot.target.position, color);
        this.sfx.shoot();
      }
    }
  }

  private queueWave(index: number): void {
    const wave = this.waves[index];
    let t = this.elapsed + wave.delay;
    for (const group of wave.groups) {
      for (let i = 0; i < group.count; i++) {
        this.spawnQueue.push({ enemy: group.enemy, at: t });
        t += group.spacing;
      }
      t += 0.35;
    }
    this.spawnQueue.sort((a, b) => a.at - b.at);
  }

  private finish(won: boolean): void {
    if (this.ended) return;
    this.ended = true;
    this.waveActive = false;
    this.spawnQueue = [];
    if (won) this.sfx.win();
    else this.sfx.lose();
    this.onEnd(won);
  }

  private onResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
  };

  private onPointerMove = (ev: PointerEvent): void => {
    if (!this.running || this.ended) return;
    this.setPointer(ev);
    const hit = this.pickCell();
    if (!hit) {
      this.hoverMesh.visible = false;
      return;
    }
    const blocked = isPathCell(hit.x, hit.y) || this.towerAt(hit.x, hit.y);
    const { x, z } = cellToWorld(hit.x, hit.y);
    this.hoverMesh.position.set(x, 0.06, z);
    this.hoverMesh.visible = true;
    (this.hoverMesh.material as THREE.MeshBasicMaterial).color.set(
      blocked ? 0xff6b5a : 0x3de6d4,
    );
  };

  private onPointerDown = (ev: PointerEvent): void => {
    if (!this.running || this.ended || ev.button !== 0) return;
    this.setPointer(ev);
    const hit = this.pickCell();
    if (!hit) return;

    const existing = this.towerAt(hit.x, hit.y);
    if (existing) {
      if (this.selectedTower) this.selectedTower.showRange(false);
      this.selectedTower = existing;
      existing.showRange(true);
      if (this.credits >= existing.upgradeCost && existing.level < 8) {
        this.credits -= existing.upgradeCost;
        existing.upgrade();
        this.sfx.place();
        this.onToast(`${existing.def.name} → Lv ${existing.level}`);
        this.pushHud();
      } else if (existing.level >= 8) {
        this.onToast('Relay at max level');
      } else {
        this.onToast(`Need ${existing.upgradeCost} to upgrade`);
      }
      return;
    }

    if (isPathCell(hit.x, hit.y)) {
      this.onToast('Cannot build on the breach lane');
      return;
    }
    if (hit.x < 0 || hit.y < 0 || hit.x >= GRID_W || hit.y >= GRID_H) return;

    const def = TOWERS.find((t) => t.kind === this.selectedKind)!;
    if (this.credits < def.cost) {
      this.onToast('Not enough credits');
      return;
    }
    const { x, z } = cellToWorld(hit.x, hit.y);
    const tower = new Tower(this.selectedKind, hit.x, hit.y, x, z);
    this.towers.push(tower);
    this.scene.add(tower.mesh);
    this.credits -= def.cost;
    this.sfx.place();
    if (this.selectedTower) this.selectedTower.showRange(false);
    this.selectedTower = tower;
    tower.showRange(true);
    this.pushHud();
  };

  private setPointer(ev: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private pickCell(): { x: number; y: number } | null {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObject(this.groundPlane);
    if (!hits.length) return null;
    const p = hits[0].point;
    return worldToCell(p.x, p.z);
  }

  private towerAt(x: number, y: number): Tower | undefined {
    return this.towers.find((t) => t.cellX === x && t.cellY === y);
  }

  private pushHud(): void {
    this.onHud({
      credits: this.credits,
      lives: this.lives,
      wave: Math.min(this.waveIndex + (this.waveActive ? 0 : 1), this.waves.length),
      totalWaves: this.waves.length,
      interest: this.interest,
      selectedKind: this.selectedKind,
    });
  }
}
