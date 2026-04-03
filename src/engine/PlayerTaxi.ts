import * as THREE from "three";
import { CONFIG } from "../config";
import {
  cloneMeshMaterialsUnique,
  fitCarToDimensions,
  loadPlayerCarGltf,
} from "./playerCarGlb";
import { TaxiWorldHud } from "./TaxiWorldHud";

/**
 * Player car represented by `public/playerCar.glb`.
 * Collision / slipstream keep using CONFIG.TAXI_DIMENSIONS AABB.
 */
export class PlayerTaxi {
  readonly group = new THREE.Group();
  readonly worldHud: TaxiWorldHud;

  private readonly chassisGroup: THREE.Group;
  /** World position for screen-space draft bar overlay (same placement as former 3D bar). */
  private readonly draftBarAnchor = new THREE.Object3D();
  private readonly dims = CONFIG.TAXI_DIMENSIONS;

  private constructor() {
    this.group.name = "PlayerTaxi";

    this.chassisGroup = new THREE.Group();
    this.chassisGroup.name = "PlayerCarRoot";
    this.group.add(this.chassisGroup);

    const { height: H, length: L } = this.dims;
    const zFront = L / 2;
    const zBack = -L / 2;

    this.draftBarAnchor.name = "DraftBarScreenAnchor";
    const barY = H + CONFIG.DRAFT_BAR_OFFSET_Y;
    const barZ = zFront - CONFIG.DRAFT_BAR_INSET_FROM_FRONT;
    this.draftBarAnchor.position.set(0, barY, barZ);
    this.chassisGroup.add(this.draftBarAnchor);

    const scoreZ = zBack - CONFIG.TAXI_WORLD_HUD_SCORE_BEHIND_Z;
    const scoreY = H * CONFIG.TAXI_WORLD_HUD_SCORE_Y_FRAC;
    this.worldHud = new TaxiWorldHud(this.chassisGroup, {
      scoreY,
      scoreZ,
    });

    this.reset();
  }

  static async create(): Promise<PlayerTaxi> {
    const taxi = new PlayerTaxi();
    await taxi.loadModel();
    return taxi;
  }

  private async loadModel(): Promise<void> {
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
      this.chassisGroup.add(model);
    } catch (err) {
      console.warn(`PlayerTaxi: failed to load ${CONFIG.PLAYER_CAR_GLB}`, err);
    }
  }

  reset(): void {
    this.group.position.set(
      0,
      0,
      CONFIG.TAXI_POSITION_Z + CONFIG.TAXI_INTRO_START_Z_OFFSET,
    );
    this.group.rotation.set(0, 0, 0);
    this.chassisGroup.rotation.set(0, 0, 0);
    this.worldHud.reset();
  }

  applyLaneVisuals(laneX: number, rollRad: number, wheelSteerRad = 0): void {
    this.group.position.x = laneX;
    this.chassisGroup.rotation.z = rollRad;
    void wheelSteerRad;
  }

  /**
   * Call when `ChainManager.onSlingshot` returns a milestone (×5, ×10, …).
   * Drives ×10 pink flash window; ×20 uses `chain` in `tickRoofLight`.
   */
  onChainMilestone(milestone: number, nowMs: number): void {
    void milestone;
    void nowMs;
  }

  /**
   * Roof lamp: ×20 strobe → ×10 flash → draft pulse → vacant green (CLAUDE.md).
   */
  tickRoofLight(nowMs: number, isDrafting: boolean, chain: number): void {
    void nowMs;
    void isDrafting;
    void chain;
  }

  /** Center of the hood draft bar in world space — project to screen for the HTML overlay. */
  getDraftBarAnchorWorld(out: THREE.Vector3): void {
    this.draftBarAnchor.getWorldPosition(out);
  }

  /**
   * Left/right world points at car width (chassis local ±width/2 at hood bar Y/Z).
   * Project to screen to match draft bar width to on-screen car width.
   */
  getDraftMeterSpanWorld(outLeft: THREE.Vector3, outRight: THREE.Vector3): void {
    const { width, height: H, length: L } = this.dims;
    const zFront = L / 2;
    const barY = H + CONFIG.DRAFT_BAR_OFFSET_Y;
    const barZ = zFront - CONFIG.DRAFT_BAR_INSET_FROM_FRONT;
    const hx = width * 0.5;
    outLeft.set(-hx, barY, barZ);
    outRight.set(hx, barY, barZ);
    this.chassisGroup.localToWorld(outLeft);
    this.chassisGroup.localToWorld(outRight);
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

  /** Front bumper area — HUD “+N sec” float spawn (world space). */
  getFrontBonusWorldPosition(out: THREE.Vector3): void {
    const { height, length } = this.dims;
    out.set(0, height * 0.4, length * 0.5 - 0.2);
    this.group.localToWorld(out);
  }

  /** World positions for left/right taillights (source points for boost beams). */
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
