import * as THREE from 'three';
import { CONFIG } from '../config';

/** Flat trapezoid on XZ: narrow edge at z=0, wide at z=depth (+Z forward along road). */
function createBeamTrapezoidGeometry(
  nearW: number,
  farW: number,
  depth: number
): THREE.BufferGeometry {
  const y = 0;
  const pos = new Float32Array([
    -nearW / 2,
    y,
    0,
    nearW / 2,
    y,
    0,
    farW / 2,
    y,
    depth,
    -farW / 2,
    y,
    depth,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex([0, 1, 2, 0, 2, 3]);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Two trapezoid “beams” on the asphalt (MeshBasic, no PointLight).
 * Shown after player slipstreams off this car.
 * @param zF — front bumper +Z (half-length) in root local space
 */
export function addTrafficHeadlightFx(
  root: THREE.Group,
  W: number,
  _H: number,
  zF: number
): THREE.Group {
  const headlightGroup = new THREE.Group();
  headlightGroup.name = 'HeadlightFx';
  headlightGroup.visible = false;
  headlightGroup.renderOrder = 8;

  const warm = CONFIG.PALETTE.HEADLIGHT;
  const nearW = W * CONFIG.TRAFFIC_HEADLIGHT_BEAM_NEAR_FRAC;
  const farW = W * CONFIG.TRAFFIC_HEADLIGHT_BEAM_FAR_FRAC;
  const farSoft = W * CONFIG.TRAFFIC_HEADLIGHT_BEAM_FAR_SOFT_FRAC;
  const depth = CONFIG.TRAFFIC_HEADLIGHT_BEAM_DEPTH;
  const depthSoft = CONFIG.TRAFFIC_HEADLIGHT_BEAM_SOFT_DEPTH;
  const beamY = CONFIG.TRAFFIC_HEADLIGHT_BEAM_Y;
  const z0 = zF + 0.04;

  const makeMat = (opacity: number, additive: boolean) =>
    new THREE.MeshBasicMaterial({
      color: warm,
      transparent: true,
      opacity,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

  const matCore = makeMat(CONFIG.TRAFFIC_HEADLIGHT_BEAM_OPACITY, false);
  const matSoft = makeMat(CONFIG.TRAFFIC_HEADLIGHT_BEAM_SOFT_OPACITY, true);

  const xOff = W * 0.24;

  for (const side of [-1, 1] as const) {
    const gx = side * xOff;

    const softGeo = createBeamTrapezoidGeometry(nearW * 1.05, farSoft, depthSoft);
    const soft = new THREE.Mesh(softGeo, matSoft);
    soft.position.set(gx, beamY, z0);
    soft.frustumCulled = false;
    soft.renderOrder = 8;
    headlightGroup.add(soft);

    const coreGeo = createBeamTrapezoidGeometry(nearW, farW, depth);
    const core = new THREE.Mesh(coreGeo, matCore);
    core.position.set(gx, beamY + 0.002, z0);
    core.frustumCulled = false;
    core.renderOrder = 9;
    headlightGroup.add(core);
  }

  root.add(headlightGroup);
  return headlightGroup;
}
