import * as THREE from 'three';
import type { TrafficSpawner } from './TrafficSpawner';
import { CONFIG } from '../config';

const MAX_PARTICLES = 800;
const PARTICLE_LIFETIME = 0.8;
const EMIT_RATE = 0.025;
const PLAYER_EMIT_RATE = 0.018;

interface Particle {
  alive: boolean;
  age: number;
  vx: number;
  vy: number;
  vz: number;
}

/**
 * Small exhaust / heat-haze particles trailing behind each active traffic vehicle.
 * Uses a point cloud for minimal draw-call overhead.
 */
export class VehicleExhaustSystem {
  readonly group = new THREE.Group();
  private readonly particles: Particle[] = [];
  private readonly positions: Float32Array;
  private readonly alphas: Float32Array;
  private readonly geo: THREE.BufferGeometry;
  private spawnAcc = 0;
  private playerSpawnAcc = 0;

  constructor() {
    this.group.name = 'VehicleExhaust';

    this.positions = new Float32Array(MAX_PARTICLES * 3);
    this.alphas = new Float32Array(MAX_PARTICLES);

    for (let i = 0; i < MAX_PARTICLES; i++) {
      this.particles.push({ alive: false, age: 0, vx: 0, vy: 0, vz: 0 });
      this.positions[i * 3 + 1] = -100;
    }

    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alphas, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(0xcccccc) },
        uSize: { value: 8.0 },
      },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        uniform float uSize;
        void main() {
          vAlpha = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * (120.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        uniform vec3 uColor;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float a = vAlpha * (1.0 - d * d) * 0.45;
          gl_FragColor = vec4(uColor, a);
        }
      `,
    });

    const points = new THREE.Points(this.geo, mat);
    points.frustumCulled = false;
    this.group.add(points);
  }

  reset(): void {
    this.spawnAcc = 0;
    this.playerSpawnAcc = 0;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      this.particles[i].alive = false;
      this.positions[i * 3 + 1] = -100;
      this.alphas[i] = 0;
    }
    (this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
  }

  private nextSlot = 0;
  private spawn(x: number, y: number, z: number): void {
    const start = this.nextSlot;
    for (let tries = 0; tries < MAX_PARTICLES; tries++) {
      const idx = (start + tries) % MAX_PARTICLES;
      const p = this.particles[idx];
      if (!p.alive || p.age > PARTICLE_LIFETIME * 0.8) {
        p.alive = true;
        p.age = 0;
        p.vx = (Math.random() - 0.5) * 1.2;
        p.vy = 0.3 + Math.random() * 0.8;
        p.vz = -(1.5 + Math.random() * 2.0);
        this.positions[idx * 3] = x + (Math.random() - 0.5) * 0.2;
        this.positions[idx * 3 + 1] = y;
        this.positions[idx * 3 + 2] = z;
        this.nextSlot = (idx + 1) % MAX_PARTICLES;
        return;
      }
    }
  }

  update(delta: number, scrollDz: number, traffic: TrafficSpawner, playerX?: number, playerZ?: number): void {
    this.spawnAcc += delta;
    const shouldSpawn = this.spawnAcc >= EMIT_RATE;
    if (shouldSpawn) this.spawnAcc -= EMIT_RATE;

    if (shouldSpawn) {
      traffic.forEachPoolWindSlot((_i, active, _slip, cx, cz) => {
        if (!active) return;
        const rearZ = cz - CONFIG.TAXI_DIMENSIONS.length / 2 - 0.1;
        const y = CONFIG.TAXI_DIMENSIONS.height * 0.3;
        this.spawn(cx - 0.3, y, rearZ);
        this.spawn(cx + 0.3, y, rearZ);
      });
    }

    if (playerX !== undefined && playerZ !== undefined) {
      this.playerSpawnAcc += delta;
      if (this.playerSpawnAcc >= PLAYER_EMIT_RATE) {
        this.playerSpawnAcc -= PLAYER_EMIT_RATE;
        const rearZ = playerZ - CONFIG.TAXI_DIMENSIONS.length / 2 - 0.1;
        const y = CONFIG.TAXI_DIMENSIONS.height * 0.3;
        this.spawn(playerX - 0.3, y, rearZ);
        this.spawn(playerX + 0.3, y, rearZ);
      }
    }

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = this.particles[i];
      if (!p.alive) continue;
      p.age += delta;
      if (p.age >= PARTICLE_LIFETIME) {
        p.alive = false;
        this.positions[i * 3 + 1] = -100;
        this.alphas[i] = 0;
        continue;
      }

      const t = p.age / PARTICLE_LIFETIME;
      this.positions[i * 3] += p.vx * delta;
      this.positions[i * 3 + 1] += p.vy * delta;
      this.positions[i * 3 + 2] += p.vz * delta - scrollDz;

      p.vx *= 0.96;
      p.vy *= 0.94;
      p.vz *= 0.95;

      this.alphas[i] = (1 - t) * (1 - t);
    }

    (this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
  }
}
