import './styles/main.css';
import { Game } from './game/Game';
import { TOWERS } from './game/data';
import type { TowerKind } from './game/types';

const appRoot = document.querySelector<HTMLElement>('#app')!;
const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas')!;
const boot = document.querySelector<HTMLElement>('#boot-screen')!;
const howto = document.querySelector<HTMLElement>('#howto-screen')!;
const hud = document.querySelector<HTMLElement>('#hud')!;
const endScreen = document.querySelector<HTMLElement>('#end-screen')!;
const toastEl = document.querySelector<HTMLElement>('#toast')!;
const towerButtons = document.querySelector<HTMLElement>('#tower-buttons')!;

const creditsEl = document.querySelector('#stat-credits')!;
const livesEl = document.querySelector('#stat-lives')!;
const waveEl = document.querySelector('#stat-wave')!;
const interestEl = document.querySelector('#stat-interest')!;

let toastTimer = 0;

function showToast(msg: string): void {
  toastEl.textContent = msg;
  toastEl.classList.remove('hidden');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.add('hidden'), 2200);
}

function syncModalClass(): void {
  const open =
    !boot.classList.contains('hidden') ||
    !howto.classList.contains('hidden') ||
    !endScreen.classList.contains('hidden');
  appRoot.classList.toggle('modal-open', open);
}

function closeHowto(): void {
  howto.classList.add('hidden');
  syncModalClass();
}

const game = new Game(canvas, {
  onHud: (s) => {
    creditsEl.textContent = String(s.credits);
    livesEl.textContent = String(s.lives);
    waveEl.textContent = `${Math.min(s.wave, s.totalWaves)} / ${s.totalWaves}`;
    interestEl.textContent = `${Math.round(s.interest * 100)}%`;
    towerButtons.querySelectorAll<HTMLButtonElement>('.tower-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.kind === s.selectedKind);
    });
  },
  onToast: showToast,
  onEnd: (won) => {
    endScreen.classList.remove('hidden');
    syncModalClass();
    document.querySelector('#end-brand')!.textContent = won ? 'SECTOR CLEAR' : 'CORE BREACHED';
    document.querySelector('#end-title')!.textContent = won
      ? 'You held the grid'
      : 'The lattice fell';
    document.querySelector('#end-lede')!.textContent = won
      ? 'All pulse waves neutralized. Nice work, operator.'
      : 'Rebuild your relays and try another breach cycle.';
  },
});

for (const def of TOWERS) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tower-btn';
  btn.dataset.kind = def.kind;
  btn.innerHTML = `<span class="name">${def.name}</span><span class="meta">${def.cost} · ${def.description}</span>`;
  btn.addEventListener('click', () => {
    game.setSelectedKind(def.kind as TowerKind);
  });
  towerButtons.appendChild(btn);
}
towerButtons.querySelector<HTMLButtonElement>('.tower-btn')?.classList.add('active');

syncModalClass();

document.querySelector('#btn-start')!.addEventListener('click', () => {
  boot.classList.add('hidden');
  howto.classList.add('hidden');
  hud.classList.remove('hidden');
  syncModalClass();
  game.start();
  showToast('Place relays, then call the first wave');
});

document.querySelector('#btn-howto')!.addEventListener('click', (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  howto.classList.remove('hidden');
  syncModalClass();
});

const howtoClose = document.querySelector<HTMLButtonElement>('#btn-howto-close')!;
howtoClose.addEventListener('click', (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  closeHowto();
});
howto.addEventListener('pointerdown', (ev) => {
  if (ev.target === howto) closeHowto();
});

document.querySelector('#btn-sell')!.addEventListener('click', () => game.sellSelected());
document.querySelector('#btn-next-wave')!.addEventListener('click', () => game.callNextWave());

document.querySelector('#btn-restart')!.addEventListener('click', () => {
  endScreen.classList.add('hidden');
  syncModalClass();
  game.restart();
  showToast('New breach cycle ready');
});

window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && !howto.classList.contains('hidden')) {
    closeHowto();
    return;
  }
  const map: Record<string, TowerKind> = {
    '1': 'beam',
    '2': 'salvo',
    '3': 'slow',
    '4': 'aura',
  };
  if (map[ev.key]) game.setSelectedKind(map[ev.key]);
  if (ev.key === ' ') {
    ev.preventDefault();
    game.callNextWave();
  }
});
