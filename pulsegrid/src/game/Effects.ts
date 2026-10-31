import * as THREE from 'three';

interface BeamFx {
  line: THREE.Line;
  life: number;
}

interface BurstFx {
  mesh: THREE.Mesh;
  life: number;
  max: number;
}

export class Effects {
  private beams: BeamFx[] = [];
  private bursts: BurstFx[] = [];

  constructor(private scene: THREE.Scene) {}

  beam(from: THREE.Vector3, to: THREE.Vector3, color: number): void {
    const geo = new THREE.BufferGeometry().setFromPoints([
      from.clone().setY(0.55),
      to.clone().setY(0.45),
    ]);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.95,
    });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.beams.push({ line, life: 0.12 });
  }

  burst(at: THREE.Vector3, color: number): void {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 }),
    );
    mesh.position.copy(at);
    mesh.position.y = 0.5;
    this.scene.add(mesh);
    this.bursts.push({ mesh, life: 0.28, max: 0.28 });
  }

  update(dt: number): void {
    for (let i = this.beams.length - 1; i >= 0; i--) {
      const b = this.beams[i];
      b.life -= dt;
      const mat = b.line.material as THREE.LineBasicMaterial;
      mat.opacity = Math.max(0, b.life / 0.12);
      if (b.life <= 0) {
        this.scene.remove(b.line);
        b.line.geometry.dispose();
        mat.dispose();
        this.beams.splice(i, 1);
      }
    }
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i];
      b.life -= dt;
      const t = 1 - b.life / b.max;
      b.mesh.scale.setScalar(1 + t * 2.2);
      (b.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - t);
      if (b.life <= 0) {
        this.scene.remove(b.mesh);
        b.mesh.geometry.dispose();
        (b.mesh.material as THREE.Material).dispose();
        this.bursts.splice(i, 1);
      }
    }
  }

  clear(): void {
    for (const b of this.beams) {
      this.scene.remove(b.line);
      b.line.geometry.dispose();
      (b.line.material as THREE.Material).dispose();
    }
    for (const b of this.bursts) {
      this.scene.remove(b.mesh);
      b.mesh.geometry.dispose();
      (b.mesh.material as THREE.Material).dispose();
    }
    this.beams = [];
    this.bursts = [];
  }
}
