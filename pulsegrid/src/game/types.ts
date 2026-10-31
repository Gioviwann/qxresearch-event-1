export type Vec2 = { x: number; y: number };

export type TowerKind = 'beam' | 'salvo' | 'slow' | 'aura';

export interface TowerDef {
  kind: TowerKind;
  name: string;
  cost: number;
  range: number;
  damage: number;
  fireRate: number;
  color: number;
  description: string;
}

export interface EnemyDef {
  id: string;
  name: string;
  hp: number;
  speed: number;
  reward: number;
  color: number;
  scale: number;
}

export interface WaveSpec {
  delay: number;
  groups: Array<{ enemy: string; count: number; spacing: number }>;
}
