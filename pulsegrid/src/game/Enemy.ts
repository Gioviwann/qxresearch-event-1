import * as THREE from 'three';
import { ENEMIES } from './data';
import type { EnemyDef } from './types';

export class Enemy {
  readonly mesh: THREE.Group;
  readonly def: EnemyDef;
  hp: number;
  maxHp: number;
  speed: number;
  baseSpeed: number;
  reward: number;
  progress = 0;
  alive = true;
  slowTimer = 0;
  private path: { x: number; z: number }[];
  private hpBar: THREE.Mesh;

  constructor(enemyId: string, path: { x: number; z: number }[]) {
    this.def = ENEMIES[enemyId];
    this.path = path;
    this.hp = this.def.hp;
    this.maxHp = this.def.hp;
    this.speed = this.def.speed;
    this.baseSpeed = this.def.speed;
    this.reward = this.def.reward;

    this.mesh = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.38 * this.def.scale, 0),
      new THREE.MeshStandardMaterial({
        color: this.def.color,
        emissive: this.def.color,
        emissiveIntensity: 0.55,
        metalness: 0.35,
        roughness: 0.35,
      }),
    );
    body.castShadow = true;
    this.mesh.add(body);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.48 * this.def.scale, 0.03, 8, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }),
    );
    ring.rotation.x = Math.PI / 2;
    this.mesh.add(ring);

    this.hpBar = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 0.06),
      new THREE.MeshBasicMaterial({ color: 0x3de6d4, depthTest: false }),
    );
    this.hpBar.position.y = 0.85 * this.def.scale;
    this.mesh.add(this.hpBar);

    this.snapToProgress();
  }

  get position(): THREE.Vector3 {
    return this.mesh.position;
  }

  applySlow(factor: number, duration: number): void {
    this.speed = this.baseSpeed * factor;
    this.slowTimer = Math.max(this.slowTimer, duration);
  }

  takeDamage(amount: number): void {
    if (!this.alive) return;
    this.hp -= amount;
    const ratio = Math.max(0, this.hp / this.maxHp);
    this.hpBar.scale.x = ratio;
    (this.hpBar.material as THREE.MeshBasicMaterial).color.set(
      ratio > 0.45 ? 0x3de6d4 : ratio > 0.2 ? 0xf0b429 : 0xff6b5a,
    );
    if (this.hp <= 0) {
      this.alive = false;
    }
  }

  update(dt: number): 'ok' | 'dead' | 'leaked' {
    if (!this.alive) return 'dead';
    if (this.slowTimer > 0) {
      this.slowTimer -= dt;
      if (this.slowTimer <= 0) this.speed = this.baseSpeed;
    }

    const totalLen = this.pathLength();
    this.progress += (this.speed * dt) / totalLen;
    if (this.progress >= 1) {
      this.alive = false;
      return 'leaked';
    }
    this.snapToProgress();
    this.mesh.rotation.y += dt * 1.8;
    return 'ok';
  }

  private pathLength(): number {
    let len = 0;
    for (let i = 0; i < this.path.length - 1; i++) {
      const a = this.path[i];
      const b = this.path[i + 1];
      len += Math.hypot(b.x - a.x, b.z - a.z);
    }
    return Math.max(len, 0.001);
  }

  private snapToProgress(): void {
    const targetDist = this.progress * this.pathLength();
    let walked = 0;
    for (let i = 0; i < this.path.length - 1; i++) {
      const a = this.path[i];
      const b = this.path[i + 1];
      const seg = Math.hypot(b.x - a.x, b.z - a.z);
      if (walked + seg >= targetDist) {
        const t = (targetDist - walked) / seg;
        this.mesh.position.set(
          a.x + (b.x - a.x) * t,
          0.45 * this.def.scale,
          a.z + (b.z - a.z) * t,
        );
        return;
      }
      walked += seg;
    }
    const last = this.path[this.path.length - 1];
    this.mesh.position.set(last.x, 0.45 * this.def.scale, last.z);
  }

  dispose(): void {
    this.mesh.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        const mat = obj.material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat.dispose();
      }
    });
  }
}
