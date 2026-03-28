import * as THREE from 'three';
import { CONFIG } from '../config';

/**
 * PlayerTaxi — Gray-box prototype: body, roof light, wheels, head/tail lights.
 */
export class PlayerTaxi {
  readonly group = new THREE.Group();

  private readonly body: THREE.Mesh;
  private readonly roofLight: THREE.Mesh;
  private readonly roofLightMat: THREE.MeshBasicMaterial;
  private readonly draftBarGroup: THREE.Group;
  private readonly draftFillParent: THREE.Group;
  private readonly draftFill: THREE.Mesh;
  private readonly dims = CONFIG.TAXI_DIMENSIONS;

  constructor() {
    this.group.name = 'PlayerTaxi';

    const bodyMat = new THREE.MeshStandardMaterial({
      color: CONFIG.PALETTE.TAXI_BODY,
      roughness: 0.6,
      metalness: 0.1,
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
    this.roofLightMat = new THREE.MeshBasicMaterial({ color: CONFIG.PALETTE.TAXI_ROOF_LIGHT });

    const { width, height, length } = this.dims;
    const bodyGeo = new THREE.BoxGeometry(width, height, length);
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = height / 2;
    this.group.add(this.body);

    const roofGeo = new THREE.BoxGeometry(0.4, 0.2, 0.6);
    this.roofLight = new THREE.Mesh(roofGeo, this.roofLightMat);
    this.roofLight.position.set(0, height + 0.1, -0.2);
    this.group.add(this.roofLight);

    const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.18, 12);
    wheelGeo.rotateZ(Math.PI / 2);
    const positions: [number, number, number][] = [
      [width / 2 - 0.1, 0.2, length / 2 - 0.4],
      [-width / 2 + 0.1, 0.2, length / 2 - 0.4],
      [width / 2 - 0.1, 0.2, -length / 2 + 0.4],
      [-width / 2 + 0.1, 0.2, -length / 2 + 0.4],
    ];
    for (const [x, y, z] of positions) {
      const w = new THREE.Mesh(wheelGeo, darkMat);
      w.position.set(x, y, z);
      this.group.add(w);
    }

    const headGeo = new THREE.PlaneGeometry(0.35, 0.14);
    const headMat = new THREE.MeshBasicMaterial({ color: CONFIG.PALETTE.HEADLIGHT });
    const headL = new THREE.Mesh(headGeo, headMat);
    headL.position.set(-0.35, height * 0.35, length / 2 + 0.01);
    this.group.add(headL);
    const headR = headL.clone();
    headR.position.x = 0.35;
    this.group.add(headR);

    const tailGeo = new THREE.PlaneGeometry(0.3, 0.12);
    const tailMat = new THREE.MeshBasicMaterial({ color: CONFIG.PALETTE.TAIL_LIGHT });
    const tailL = new THREE.Mesh(tailGeo, tailMat);
    tailL.rotation.y = Math.PI;
    tailL.position.set(-0.45, height * 0.35, -length / 2 - 0.01);
    this.group.add(tailL);
    const tailR = tailL.clone();
    tailR.position.x = 0.45;
    this.group.add(tailR);

    const w = CONFIG.DRAFT_BAR_WIDTH;
    const d = CONFIG.DRAFT_BAR_DEPTH;
    this.draftBarGroup = new THREE.Group();
    this.draftBarGroup.name = 'DraftMeterBar';
    this.draftBarGroup.visible = false;
    const barY = height + CONFIG.DRAFT_BAR_OFFSET_Y;
    const barZ = length / 2 - CONFIG.DRAFT_BAR_INSET_FROM_FRONT;
    this.draftBarGroup.position.set(0, barY, barZ);

    const trackMat = new THREE.MeshBasicMaterial({
      color: 0x0a1a28,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      depthWrite: true,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    const track = new THREE.Mesh(new THREE.PlaneGeometry(w, d), trackMat);
    track.rotation.x = -Math.PI / 2;
    this.draftBarGroup.add(track);

    const fillMat = new THREE.MeshBasicMaterial({
      color: CONFIG.PALETTE.NEON_BLUE,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    // Pivot at left edge of track: parent at −W/2, geometry 0…W in local X so scale.x = t fills L→R.
    this.draftFillParent = new THREE.Group();
    this.draftFillParent.position.set(-w / 2, 0, 0);
    this.draftBarGroup.add(this.draftFillParent);
    const fillGeo = new THREE.PlaneGeometry(w, d);
    fillGeo.translate(w / 2, 0, 0);
    this.draftFill = new THREE.Mesh(fillGeo, fillMat);
    this.draftFill.rotation.x = -Math.PI / 2;
    this.draftFill.position.y = 0.004;
    this.draftFillParent.add(this.draftFill);

    // Flip bar on X so fill grows screen-left → screen-right (camera view inverts car +X vs screen).
    this.draftBarGroup.scale.set(-1, 1, 1);

    this.group.add(this.draftBarGroup);

    this.reset();
  }

  reset(): void {
    this.group.position.set(0, 0, CONFIG.TAXI_POSITION_Z);
    this.group.rotation.set(0, 0, 0);
    this.setDrafting(false);
    this.setDraftMeter(0, false);
  }

  applyLaneVisuals(laneX: number, rollRad: number): void {
    this.group.position.x = laneX;
    this.body.rotation.z = rollRad;
  }

  setDrafting(isDrafting: boolean): void {
    this.roofLightMat.color.setHex(
      isDrafting ? 0xffaa00 : CONFIG.PALETTE.TAXI_ROOF_LIGHT
    );
  }

  /** Horizontal fill bar on hood; visible only while in a slipstream zone. */
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

  /** World position of rear bumper center (for camera framing). */
  getRearWorldPosition(out: THREE.Vector3): void {
    const { height, length } = this.dims;
    out.set(0, height * 0.35, -length / 2 - 0.02);
    this.group.localToWorld(out);
  }
}
