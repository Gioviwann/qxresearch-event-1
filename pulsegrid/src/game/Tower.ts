import * as THREE from 'three';
import { CELL, TOWERS } from './data';
import type { TowerKind } from './types';
import type { Enemy } from './Enemy';

export class Tower {
  readonly kind: TowerKind;
  readonly mesh: THREE.Group;
  readonly cellX: number;
  readonly cellY: number;
  level = 1;
  cooldown = 0;
  private rangeRing: THREE.Mesh;
  private core: THREE.Mesh;

  constructor(kind: TowerKind, cellX: number, cellY: number, worldX: number, worldZ: number) {
    this.kind = kind;
    this.cellX = cellX;
    this.cellY = cellY;
    const def = this.def;

    this.mesh = new THREE.Group();
    this.mesh.position.set(worldX, 0, worldZ);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.44, 0.22, 8),
      new THREE.MeshStandardMaterial({
        color: 0x1a2438,
        metalness: 0.6,
        roughness: 0.4,
      }),
    );
    base.position.y = 0.11;
    base.castShadow = true;
    this.mesh.add(base);

    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.14, 0.55, 6),
      new THREE.MeshStandardMaterial({
        color: def.color,
        emissive: def.color,
        emissiveIntensity: 0.45,
        metalness: 0.35,
        roughness: 0.3,
      }),
    );
    stem.position.y = 0.45;
    stem.castShadow = true;
    this.mesh.add(stem);

    this.core = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.34, 0),
      new THREE.MeshStandardMaterial({
        color: def.color,
        emissive: def.color,
        emissiveIntensity: 1.05,
        metalness: 0.2,
        roughness: 0.2,
      }),
    );
    this.core.position.y = 0.88;
    this.mesh.add(this.core);

    this.rangeRing = new THREE.Mesh(
      new THREE.RingGeometry(def.range - 0.05, def.range, 48),
      new THREE.MeshBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    this.rangeRing.rotation.x = -Math.PI / 2;
    this.rangeRing.position.y = 0.03;
    this.rangeRing.visible = false;
    this.mesh.add(this.rangeRing);
  }

  get def() {
    return TOWERS.find((t) => t.kind === this.kind)!;
  }

  get range(): number {
    return this.def.range * (1 + (this.level - 1) * 0.08) * CELL;
  }

  get damage(): number {
    return this.def.damage * (1 + (this.level - 1) * 0.35);
  }

  get fireRate(): number {
    return this.def.fireRate * (1 + (this.level - 1) * 0.08);
  }

  get upgradeCost(): number {
    return Math.floor(this.def.cost * (0.65 + this.level * 0.45));
  }

  get sellValue(): number {
    let spent = this.def.cost;
    for (let i = 1; i < this.level; i++) {
      spent += Math.floor(this.def.cost * (0.65 + i * 0.45));
    }
    return Math.floor(spent * 0.6);
  }

  showRange(show: boolean): void {
    this.rangeRing.visible = show;
    const r = this.range / CELL;
    this.rangeRing.geometry.dispose();
    this.rangeRing.geometry = new THREE.RingGeometry(r - 0.05, r, 48);
  }

  upgrade(): void {
    if (this.level >= 8) return;
    this.level += 1;
    this.core.scale.setScalar(1 + (this.level - 1) * 0.08);
    (this.core.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.7 + this.level * 0.05;
  }

  update(dt: number, enemies: Enemy[], ampBonus: number): { target?: Enemy; kind: 'beam' | 'salvo' | 'slow' | 'none' } {
    if (this.kind === 'aura') return { kind: 'none' };
    this.cooldown -= dt;
    this.core.rotation.y += dt * (1.2 + this.level * 0.15);
    if (this.cooldown > 0) return { kind: 'none' };

    const target = this.findTarget(enemies);
    if (!target) return { kind: 'none' };

    this.cooldown = 1 / this.fireRate;
    const dmg = this.damage * (1 + ampBonus);

    if (this.kind === 'slow') {
      target.applySlow(0.55, 1.1);
      target.takeDamage(dmg);
      return { target, kind: 'slow' };
    }
    if (this.kind === 'salvo') {
      target.takeDamage(dmg);
      return { target, kind: 'salvo' };
    }
    target.takeDamage(dmg);
    return { target, kind: 'beam' };
  }

  private findTarget(enemies: Enemy[]): Enemy | null {
    let best: Enemy | null = null;
    let bestProg = -1;
    for (const e of enemies) {
      if (!e.alive) continue;
      const dx = e.position.x - this.mesh.position.x;
      const dz = e.position.z - this.mesh.position.z;
      if (Math.hypot(dx, dz) <= this.range && e.progress > bestProg) {
        bestProg = e.progress;
        best = e;
      }
    }
    return best;
  }
}

export function ampBonusAt(towers: Tower[], x: number, z: number): number {
  let bonus = 0;
  for (const t of towers) {
    if (t.kind !== 'aura') continue;
    const dx = t.mesh.position.x - x;
    const dz = t.mesh.position.z - z;
    if (Math.hypot(dx, dz) <= t.range) {
      bonus += 0.18 + t.level * 0.04;
    }
  }
  return bonus;
}
