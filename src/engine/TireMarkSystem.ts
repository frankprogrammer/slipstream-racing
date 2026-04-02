import * as THREE from 'three';
import type { TrafficSpawner } from './TrafficSpawner';
import { CONFIG } from '../config';

const MAX_MARKS = 600;
const MARK_LIFETIME = 3.0;
const MARK_WIDTH = 0.06;
const MARK_LENGTH = 0.8;
const MARK_Y = 0.02;
const TIRE_OFFSET_X = 0.55;
const PLAYER_SPAWN_INTERVAL = 0.03;

interface TireMark {
  age: number;
  alive: boolean;
}

/**
 * Fading tire marks on the road surface behind traffic vehicles.
 * Uses instanced quads for performance.
 */
export class TireMarkSystem {
  readonly group = new THREE.Group();
  private readonly mesh: THREE.InstancedMesh;
  private readonly marks: TireMark[] = [];
  private readonly dummy = new THREE.Object3D();
  private readonly color = new THREE.Color(0x1a1a1a);
  private nextSlot = 0;
  private spawnAcc = 0;
  private readonly spawnInterval = 0.04;
  private playerSpawnAcc = 0;

  constructor() {
    this.group.name = 'TireMarks';
    const geo = new THREE.PlaneGeometry(MARK_WIDTH, MARK_LENGTH);
    geo.rotateX(-Math.PI / 2);

    const mat = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, MAX_MARKS);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;

    this.dummy.scale.set(0, 0, 0);
    this.dummy.updateMatrix();
    for (let i = 0; i < MAX_MARKS; i++) {
      this.mesh.setMatrixAt(i, this.dummy.matrix);
      this.marks.push({ age: MARK_LIFETIME + 1, alive: false });
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.mesh);
  }

  reset(): void {
    this.nextSlot = 0;
    this.spawnAcc = 0;
    this.playerSpawnAcc = 0;
    this.dummy.scale.set(0, 0, 0);
    this.dummy.updateMatrix();
    for (let i = 0; i < MAX_MARKS; i++) {
      this.mesh.setMatrixAt(i, this.dummy.matrix);
      this.marks[i].age = MARK_LIFETIME + 1;
      this.marks[i].alive = false;
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  private spawn(x: number, z: number): void {
    const slot = this.nextSlot;
    this.nextSlot = (this.nextSlot + 1) % MAX_MARKS;
    const m = this.marks[slot];
    m.age = 0;
    m.alive = true;

    this.dummy.position.set(x, MARK_Y, z);
    this.dummy.scale.set(1, 1, 1);
    this.dummy.rotation.set(0, 0, 0);
    this.dummy.updateMatrix();
    this.mesh.setMatrixAt(slot, this.dummy.matrix);
  }

  update(delta: number, scrollDz: number, traffic: TrafficSpawner, playerX?: number, playerZ?: number): void {
    this.spawnAcc += delta;
    const shouldSpawn = this.spawnAcc >= this.spawnInterval;
    if (shouldSpawn) this.spawnAcc -= this.spawnInterval;

    if (shouldSpawn) {
      traffic.forEachPoolWindSlot((_i, active, _slip, cx, cz) => {
        if (!active) return;
        const hw = CONFIG.TAXI_DIMENSIONS.width / 2;
        const rearZ = cz - CONFIG.TAXI_DIMENSIONS.length / 2;
        this.spawn(cx - hw * TIRE_OFFSET_X, rearZ);
        this.spawn(cx + hw * TIRE_OFFSET_X, rearZ);
      });
    }

    if (playerX !== undefined && playerZ !== undefined) {
      this.playerSpawnAcc += delta;
      if (this.playerSpawnAcc >= PLAYER_SPAWN_INTERVAL) {
        this.playerSpawnAcc -= PLAYER_SPAWN_INTERVAL;
        const hw = CONFIG.TAXI_DIMENSIONS.width / 2;
        const rearZ = playerZ - CONFIG.TAXI_DIMENSIONS.length / 2;
        this.spawn(playerX - hw * TIRE_OFFSET_X, rearZ);
        this.spawn(playerX + hw * TIRE_OFFSET_X, rearZ);
      }
    }

    let dirty = false;
    for (let i = 0; i < MAX_MARKS; i++) {
      const m = this.marks[i];
      if (!m.alive) continue;
      m.age += delta;

      this.mesh.getMatrixAt(i, this.dummy.matrix);
      this.dummy.matrix.decompose(this.dummy.position, this.dummy.quaternion, this.dummy.scale);
      this.dummy.position.z -= scrollDz;

      if (m.age >= MARK_LIFETIME) {
        m.alive = false;
        this.dummy.scale.set(0, 0, 0);
      } else {
        const fade = 1 - m.age / MARK_LIFETIME;
        this.dummy.scale.set(1, 1, fade);
      }
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
      dirty = true;
    }
    if (dirty) this.mesh.instanceMatrix.needsUpdate = true;
  }
}
