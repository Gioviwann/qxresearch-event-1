/** Lightweight WebAudio beeps — no external assets required. */
export class Sfx {
  private ctx: AudioContext | null = null;

  private ensure(): AudioContext {
    if (!this.ctx) this.ctx = new AudioContext();
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }

  private tone(freq: number, dur: number, type: OscillatorType, gain = 0.04): void {
    const ctx = this.ensure();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = gain;
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  }

  place(): void {
    this.tone(440, 0.08, 'triangle', 0.05);
    this.tone(660, 0.1, 'sine', 0.03);
  }

  shoot(): void {
    this.tone(880, 0.04, 'square', 0.025);
  }

  hit(): void {
    this.tone(220, 0.05, 'sawtooth', 0.02);
  }

  leak(): void {
    this.tone(140, 0.25, 'sawtooth', 0.05);
  }

  win(): void {
    this.tone(523, 0.12, 'sine', 0.05);
    setTimeout(() => this.tone(659, 0.12, 'sine', 0.05), 100);
    setTimeout(() => this.tone(784, 0.2, 'sine', 0.05), 200);
  }

  lose(): void {
    this.tone(200, 0.2, 'triangle', 0.05);
    setTimeout(() => this.tone(140, 0.35, 'triangle', 0.05), 150);
  }

  wave(): void {
    this.tone(320, 0.08, 'sine', 0.04);
    this.tone(480, 0.12, 'sine', 0.03);
  }
}
