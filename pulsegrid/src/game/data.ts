import type { EnemyDef, TowerDef, WaveSpec, Vec2 } from './types';

/** 16x12 playfield. Path cells are walkable breach lane. */
export const GRID_W = 16;
export const GRID_H = 12;
export const CELL = 1.15;

export const TOWERS: TowerDef[] = [
  {
    kind: 'beam',
    name: 'Lance',
    cost: 40,
    range: 2.8,
    damage: 14,
    fireRate: 3.2,
    color: 0x3de6d4,
    description: 'Single-target sustained beam',
  },
  {
    kind: 'salvo',
    name: 'Seeker',
    cost: 65,
    range: 3.4,
    damage: 28,
    fireRate: 1.1,
    color: 0xff6b5a,
    description: 'Homing pulse rockets',
  },
  {
    kind: 'slow',
    name: 'Drag',
    cost: 50,
    range: 2.6,
    damage: 4,
    fireRate: 4.5,
    color: 0x6ea8fe,
    description: 'Drains speed in cone',
  },
  {
    kind: 'aura',
    name: 'Amp',
    cost: 80,
    range: 2.2,
    damage: 0,
    fireRate: 0,
    color: 0xf0b429,
    description: 'Boosts nearby relay damage',
  },
];

export const ENEMIES: Record<string, EnemyDef> = {
  spark: {
    id: 'spark',
    name: 'Spark',
    hp: 45,
    speed: 1.55,
    reward: 8,
    color: 0x7dffb3,
    scale: 0.55,
  },
  runner: {
    id: 'runner',
    name: 'Runner',
    hp: 70,
    speed: 2.35,
    reward: 12,
    color: 0xffd166,
    scale: 0.5,
  },
  husk: {
    id: 'husk',
    name: 'Husk',
    hp: 160,
    speed: 1.05,
    reward: 18,
    color: 0xb0c4de,
    scale: 0.75,
  },
  braid: {
    id: 'braid',
    name: 'Braid',
    hp: 110,
    speed: 1.7,
    reward: 16,
    color: 0xc77dff,
    scale: 0.62,
  },
  titan: {
    id: 'titan',
    name: 'Titan',
    hp: 520,
    speed: 0.75,
    reward: 55,
    color: 0xff6b5a,
    scale: 1.05,
  },
};

/** Classic serpentine lane across the lattice. */
export const PATH: Vec2[] = [
  { x: 0, y: 2 },
  { x: 12, y: 2 },
  { x: 12, y: 5 },
  { x: 3, y: 5 },
  { x: 3, y: 8 },
  { x: 14, y: 8 },
  { x: 14, y: 10 },
  { x: 15, y: 10 },
];

export function buildWaves(): WaveSpec[] {
  const waves: WaveSpec[] = [];
  for (let i = 0; i < 20; i++) {
    const n = i + 1;
    const groups: WaveSpec['groups'] = [
      { enemy: 'spark', count: 6 + Math.floor(n * 1.2), spacing: 0.55 },
    ];
    if (n >= 3) groups.push({ enemy: 'runner', count: 3 + Math.floor(n * 0.7), spacing: 0.4 });
    if (n >= 5) groups.push({ enemy: 'husk', count: 2 + Math.floor(n * 0.35), spacing: 0.85 });
    if (n >= 8) groups.push({ enemy: 'braid', count: 2 + Math.floor(n * 0.4), spacing: 0.6 });
    if (n === 10 || n === 15 || n === 20) {
      groups.push({ enemy: 'titan', count: n === 20 ? 3 : 1, spacing: 1.4 });
    }
    waves.push({ delay: n === 1 ? 0.4 : 1.0, groups });
  }
  return waves;
}

export function pathWorldPoints(): { x: number; z: number }[] {
  const pts: { x: number; z: number }[] = [];
  for (let i = 0; i < PATH.length - 1; i++) {
    const a = PATH[i];
    const b = PATH[i + 1];
    const steps = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      const gx = a.x + (b.x - a.x) * t;
      const gy = a.y + (b.y - a.y) * t;
      pts.push(cellToWorld(gx, gy));
    }
  }
  const last = PATH[PATH.length - 1];
  pts.push(cellToWorld(last.x, last.y));
  return pts;
}

export function cellToWorld(gx: number, gy: number): { x: number; z: number } {
  return {
    x: (gx - (GRID_W - 1) / 2) * CELL,
    z: (gy - (GRID_H - 1) / 2) * CELL,
  };
}

export function worldToCell(x: number, z: number): Vec2 {
  return {
    x: Math.round(x / CELL + (GRID_W - 1) / 2),
    y: Math.round(z / CELL + (GRID_H - 1) / 2),
  };
}

export function isPathCell(x: number, y: number): boolean {
  const set = pathCellSet();
  return set.has(`${x},${y}`);
}

let _pathSet: Set<string> | null = null;
export function pathCellSet(): Set<string> {
  if (_pathSet) return _pathSet;
  const set = new Set<string>();
  for (let i = 0; i < PATH.length - 1; i++) {
    const a = PATH[i];
    const b = PATH[i + 1];
    const dx = Math.sign(b.x - a.x);
    const dy = Math.sign(b.y - a.y);
    let x = a.x;
    let y = a.y;
    set.add(`${x},${y}`);
    while (x !== b.x || y !== b.y) {
      x += dx;
      y += dy;
      set.add(`${x},${y}`);
    }
  }
  _pathSet = set;
  return set;
}
