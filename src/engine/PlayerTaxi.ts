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
  private readonly draftBarGroup: THREE.Group;
  private readonly draftFill: THREE.Mesh;
  private readonly dims = CONFIG.TAXI_DIMENSIONS;

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
    this.setDraftMeter(0, false);
    this.worldHud.reset();
  }

  applyLaneVisuals(
    laneX: number,
    rollRad: number,
    wheelSteerRad = 0,
    yawRad = 0,
  ): void {
    this.group.position.x = laneX;
    this.group.rotation.y = yawRad;
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
