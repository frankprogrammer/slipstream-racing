import * as THREE from "three";
import { CONFIG } from "../config";
import {
  cloneMeshMaterialsUnique,
  fitCarToDimensions,
  loadPlayerCarGltf,
} from "./playerCarGlb";
import { TaxiWorldHud } from "./TaxiWorldHud";
import { buildProceduralCar, type CarId, type BodyColorId, type WheelStyleId, type WingColorId } from "./ProceduralCars";
import type { Loadout } from "./UnlockManager";

/**
 * Player car — either `public/playerCar.glb` (legacy) or a procedural model from the market.
 * Collision / slipstream keep using CONFIG.TAXI_DIMENSIONS AABB.
 */
export class PlayerTaxi {
  readonly group = new THREE.Group();
  readonly worldHud: TaxiWorldHud;

  private readonly chassisGroup: THREE.Group;
  private readonly draftBarGroup: THREE.Group;
  private readonly draftFill: THREE.Mesh;
  private readonly dims = CONFIG.TAXI_DIMENSIONS;
  private currentModelRoot: THREE.Object3D | null = null;

  // Turbo exhaust particle system
  private turboParticles: THREE.Points | null = null;
  private turboVels: Float32Array | null = null;
  private turboAges: Float32Array | null = null;
  private readonly turboN = 120;
  private turboIntensity = 0;
  private turboTarget = 0;
  private milestoneFlashTimer = 0;

  private constructor() {
    this.group.name = "PlayerTaxi";

    this.chassisGroup = new THREE.Group();
    this.chassisGroup.name = "PlayerCarRoot";
    this.group.add(this.chassisGroup);

    const { height: H, length: L } = this.dims;
    const zFront = L / 2;
    const zBack = -L / 2;

    const wBar = CONFIG.DRAFT_BAR_WIDTH;
    const dBar = CONFIG.DRAFT_BAR_DEPTH;
    this.draftBarGroup = new THREE.Group();
    this.draftBarGroup.name = "DraftMeterBar";
    this.draftBarGroup.visible = false;
    const barY = H + CONFIG.DRAFT_BAR_OFFSET_Y;
    const barZ = zFront - CONFIG.DRAFT_BAR_INSET_FROM_FRONT;
    this.draftBarGroup.position.set(0, barY, barZ);

    const trackMat = new THREE.MeshBasicMaterial({
      color: CONFIG.PALETTE.DRAFT_BAR_TRACK,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      depthWrite: true,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    const track = new THREE.Mesh(new THREE.PlaneGeometry(wBar, dBar), trackMat);
    track.rotation.x = -Math.PI / 2;
    this.draftBarGroup.add(track);

    const fillMat = new THREE.MeshBasicMaterial({
      color: CONFIG.PALETTE.NEON_BLUE,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    const fillParent = new THREE.Group();
    fillParent.position.set(-wBar / 2, 0, 0);
    this.draftBarGroup.add(fillParent);
    const fillGeo = new THREE.PlaneGeometry(wBar, dBar);
    fillGeo.translate(wBar / 2, 0, 0);
    this.draftFill = new THREE.Mesh(fillGeo, fillMat);
    this.draftFill.rotation.x = -Math.PI / 2;
    this.draftFill.position.y = 0.004;
    fillParent.add(this.draftFill);

    this.draftBarGroup.scale.set(-1, 1, 1);
    this.chassisGroup.add(this.draftBarGroup);

    const scoreZ = zBack - CONFIG.TAXI_WORLD_HUD_SCORE_BEHIND_Z;
    const scoreY = H * CONFIG.TAXI_WORLD_HUD_SCORE_Y_FRAC;
    this.worldHud = new TaxiWorldHud(this.chassisGroup, {
      scoreY,
      scoreZ,
      draftBarY: barY,
      draftBarZ: barZ,
    });
    this.worldHud.scoreSprite.visible = false;
    this.worldHud.chainSprite.visible = false;

    this.reset();
  }

  static async create(loadout?: Loadout): Promise<PlayerTaxi> {
    const taxi = new PlayerTaxi();
    if (loadout) {
      taxi.applyLoadout(loadout);
    } else {
      await taxi.loadGlbModel();
    }
    return taxi;
  }

  private async loadGlbModel(): Promise<void> {
    try {
      const gltf = await loadPlayerCarGltf();
      const model = gltf.scene.clone(true);
      cloneMeshMaterialsUnique(model);
      fitCarToDimensions(
        model,
        CONFIG.TAXI_DIMENSIONS,
        CONFIG.PLAYER_CAR_Y_OFFSET,
      );
      model.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.castShadow = false;
          obj.receiveShadow = false;
        }
      });
      this.setModelRoot(model);
    } catch (err) {
      console.warn(`PlayerTaxi: failed to load ${CONFIG.PLAYER_CAR_GLB}`, err);
    }
  }

  applyLoadout(loadout: Loadout): void {
    const model = buildProceduralCar(
      loadout.carId as CarId,
      loadout.bodyColorId as BodyColorId,
      loadout.wheelStyleId as WheelStyleId,
      loadout.wingColorId as WingColorId,
    );
    this.setModelRoot(model);
  }

  private setModelRoot(model: THREE.Object3D): void {
    if (this.currentModelRoot) {
      this.chassisGroup.remove(this.currentModelRoot);
    }
    this.currentModelRoot = model;
    this.chassisGroup.add(model);
    this.initTurbo();
  }

  private initTurbo(): void {
    if (this.turboParticles) this.chassisGroup.remove(this.turboParticles);

    const N = this.turboN;
    const pos = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    this.turboVels = new Float32Array(N * 3);
    this.turboAges = new Float32Array(N).fill(99);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));

    const mat = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      sizeAttenuation: true,
    });

    this.turboParticles = new THREE.Points(geo, mat);
    this.turboParticles.frustumCulled = false;
    this.turboParticles.renderOrder = 80;
    this.chassisGroup.add(this.turboParticles);
  }

  reset(): void {
    this.group.position.set(
      0,
      0,
      CONFIG.TAXI_POSITION_Z + CONFIG.TAXI_INTRO_START_Z_OFFSET,
    );
    this.group.rotation.set(0, 0, 0);
    this.chassisGroup.rotation.set(0, 0, 0);
    this.setDraftMeter(0, false);
    this.worldHud.reset();
  }

  applyLaneVisuals(laneX: number, rollRad: number, wheelSteerRad = 0): void {
    this.group.position.x = laneX;
    this.chassisGroup.rotation.z = rollRad;
    void wheelSteerRad;
  }

  onChainMilestone(_milestone: number, _nowMs: number): void {
    this.milestoneFlashTimer = 0.5;
  }

  tickRoofLight(_nowMs: number, isDrafting: boolean, chain: number): void {
    if (!this.turboParticles || !this.turboVels || !this.turboAges) return;
    const dt = 1 / 60;
    const N = this.turboN;
    const L = this.dims.length;
    const H = this.dims.height;

    // Two exhaust points (left/right near rear)
    const exL = -0.18;
    const exR = 0.18;
    const exY = H * 0.18;
    const exZ = -L / 2 - 0.05;

    if (chain <= 1 && !isDrafting) {
      this.turboTarget = 0;
    } else if (isDrafting && chain <= 1) {
      this.turboTarget = 0.25;
    } else {
      this.turboTarget = Math.min(1, 0.15 + chain * 0.08);
    }
    if (this.milestoneFlashTimer > 0) {
      this.milestoneFlashTimer -= dt;
      this.turboTarget = 1;
    }
    this.turboIntensity += (this.turboTarget - this.turboIntensity) * 0.12;

    const geo = this.turboParticles.geometry;
    const posA = geo.getAttribute('position') as THREE.BufferAttribute;
    const colA = geo.getAttribute('color') as THREE.BufferAttribute;
    const vels = this.turboVels;
    const ages = this.turboAges;

    const spawnPerFrame = this.turboIntensity * N * 3 * dt;
    const speed = 6 + chain * 1.5;

    for (let i = 0; i < N; i++) {
      const life = 0.2 + 0.25 * (1 - this.turboIntensity * 0.5);
      ages[i] += dt;

      if (ages[i] > life && Math.random() < spawnPerFrame / N) {
        const side = Math.random() > 0.5;
        const ox = side ? exL : exR;
        posA.setXYZ(i,
          ox + (Math.random() - 0.5) * 0.06,
          exY + (Math.random() - 0.5) * 0.04,
          exZ,
        );
        // Shoot straight back with slight spread
        vels[i * 3] = (Math.random() - 0.5) * 0.8;
        vels[i * 3 + 1] = (Math.random() - 0.3) * 0.5;
        vels[i * 3 + 2] = -(speed + Math.random() * speed * 0.5);
        ages[i] = 0;
      }

      if (ages[i] < life) {
        const t = ages[i] / life;

        posA.setXYZ(i,
          posA.getX(i) + vels[i * 3] * dt,
          posA.getY(i) + vels[i * 3 + 1] * dt,
          posA.getZ(i) + vels[i * 3 + 2] * dt,
        );

        // Hot core → orange → red → dark  (flame gradient over lifetime)
        const fade = (1 - t * t) * this.turboIntensity;
        let cr: number, cg: number, cb: number;
        if (t < 0.15) {
          // White-hot core
          cr = 1; cg = 0.95; cb = 0.8;
        } else if (t < 0.4) {
          // Bright yellow-orange
          const u = (t - 0.15) / 0.25;
          cr = 1; cg = 0.95 - u * 0.55; cb = 0.8 - u * 0.8;
        } else if (t < 0.7) {
          // Orange to red
          const u = (t - 0.4) / 0.3;
          cr = 1; cg = 0.4 - u * 0.3; cb = 0;
        } else {
          // Dim red embers
          const u = (t - 0.7) / 0.3;
          cr = 1 - u * 0.6; cg = 0.1 * (1 - u); cb = 0;
        }

        colA.setXYZ(i, cr * fade, cg * fade, cb * fade);
      } else {
        colA.setXYZ(i, 0, 0, 0);
        posA.setXYZ(i, 0, -10, 0);
      }
    }

    posA.needsUpdate = true;
    colA.needsUpdate = true;

    // Scale particle size with intensity
    (this.turboParticles.material as THREE.PointsMaterial).size =
      0.06 + this.turboIntensity * 0.08;
  }

  setDraftMeter(fill01: number, visible: boolean): void {
    const t = Math.max(0, Math.min(1, fill01));
    this.draftBarGroup.visible = visible;
    this.draftFill.scale.set(t, 1, 1);
  }

  getCollisionBounds(): { cx: number; cz: number; hx: number; hz: number } {
    const { width, length } = this.dims;
    return {
      cx: this.group.position.x,
      cz: this.group.position.z,
      hx: width / 2,
      hz: length / 2,
    };
  }

  getRearWorldPosition(out: THREE.Vector3): void {
    const { height, length } = this.dims;
    out.set(0, height * 0.35, -length / 2 - 0.02);
    this.group.localToWorld(out);
  }

  getTailLightsWorldPositions(
    outLeft: THREE.Vector3,
    outRight: THREE.Vector3,
  ): void {
    const { height, length } = this.dims;
    const y = height * 0.28;
    const z = -length / 2 + 2.02;
    outLeft.set(-0.42, y, z);
    outRight.set(0.42, y, z);
    this.group.localToWorld(outLeft);
    this.group.localToWorld(outRight);
  }
}
