import * as THREE from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CONFIG } from '../config';

function hash01(n: number): number {
  const t = Math.sin(n * 12.9898) * 43758.5453123;
  return t - Math.floor(t);
}

/** Union of all mesh geometry bounds (world space); ignores lights/cameras/empties that inflate scene bbox. */
function setBoxFromMeshes(root: THREE.Object3D, target: THREE.Box3): boolean {
  root.updateMatrixWorld(true);
  let has = false;
  root.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh) || !obj.geometry) return;
    const geom = obj.geometry;
    if (!geom.boundingBox) geom.computeBoundingBox();
    const local = geom.boundingBox;
    if (!local) return;
    const b = local.clone();
    b.applyMatrix4(obj.matrixWorld);
    if (!has) {
      target.copy(b);
      has = true;
    } else {
      target.union(b);
    }
  });
  return has;
}

/**
 * Scale GLB to world width × length on XZ; center segment on XZ using bbox center.
 * @param meshBoundsOnly — use mesh union for bbox (recommended for env GLBs so helpers don’t break scale).
 * @param verticalAlign — `bboxBottom`: snap lowest Y to 0 (road). `pivot`: keep scene root at y=0 (env; height varies per asset).
 */
function fitGltfToSegmentFootprint(
  gltf: GLTF,
  widthWorld: number,
  lengthWorld: number,
  widthRefAuthoring: number,
  depthRefAuthoring: number,
  wrapperName: string,
  meshBoundsOnly: boolean,
  verticalAlign: 'pivot' | 'bboxBottom'
): THREE.Group {
  const wrapper = new THREE.Group();
  const node = gltf.scene.clone(true);
  wrapper.add(node);

  node.updateMatrixWorld(true);
  const box = new THREE.Box3();
  if (!(meshBoundsOnly && setBoxFromMeshes(node, box))) {
    box.setFromObject(node);
  }

  const size = new THREE.Vector3();
  box.getSize(size);
  if (size.x < 1e-4 || size.z < 1e-4) {
    console.warn(`RoadManager: ${wrapperName} GLB has very small bounds; skipping scale fit`);
    return wrapper;
  }

  const widthRef =
    widthRefAuthoring > 0 ? widthRefAuthoring : size.x;
  const depthRef =
    depthRefAuthoring > 0 ? depthRefAuthoring : size.z;
  if (widthRef < 1e-4 || depthRef < 1e-4) {
    console.warn(`RoadManager: ${wrapperName} width/depth refs invalid; skipping scale fit`);
    return wrapper;
  }

  const sx = widthWorld / widthRef;
  const sz = lengthWorld / depthRef;
  const sy = (sx + sz) * 0.5;
  node.scale.set(sx, sy, sz);
  node.updateMatrixWorld(true);

  const box2 = new THREE.Box3().setFromObject(node);
  const center = new THREE.Vector3();
  box2.getCenter(center);
  node.position.x -= center.x;
  node.position.z -= center.z;
  if (verticalAlign === 'bboxBottom') {
    node.position.y -= box2.min.y;
  }
  node.updateMatrixWorld(true);

  wrapper.name = wrapperName;
  return wrapper;
}

function fitEnvGltfToSegment(gltf: GLTF): THREE.Group {
  return fitGltfToSegmentFootprint(
    gltf,
    CONFIG.ROAD_SEGMENT_VISUAL_WIDTH,
    CONFIG.ROAD_SEGMENT_LENGTH,
    CONFIG.ROAD_ENV_GLB_WIDTH,
    CONFIG.ROAD_ENV_GLB_DEPTH,
    'RoadEnvGLB',
    true,
    'pivot'
  );
}

function publicAssetUrl(file: string): string {
  return `${import.meta.env.BASE_URL}${file}`;
}

type MarkerPose = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
};

type RoadPieceTemplate = {
  root: THREE.Group;
  startMarker: MarkerPose | null;
  endMarker: MarkerPose | null;
};

type RoadPiecePick = {
  kind: 'env' | 'curve';
  file: string | null;
};

type RoadSegmentSlot = {
  root: THREE.Group;
  segmentIndex: number;
  envHolder: THREE.Group | null;
  pieceTemplate: RoadPieceTemplate | null;
  pieceKind: 'env' | 'curve';
};

export type RoadFrameSample = {
  centerX: number;
  centerZ: number;
  rightX: number;
  rightZ: number;
  yaw: number;
};

function pickVariant(variants: readonly string[], seed: number): string | null {
  if (!variants.length) return null;
  const pick = Math.floor(hash01(seed) * variants.length) % variants.length;
  return variants[pick] ?? null;
}

function pickRoadPiece(segmentIndex: number): RoadPiecePick {
  const phases = CONFIG.ROAD_ENVIRONMENTS;
  const curves = CONFIG.ROAD_ENV_CURVE_SEGMENTS;
  const K = Math.max(1, CONFIG.ROAD_ENV_SEGMENTS_PER_PHASE);
  const C = Math.max(0, CONFIG.ROAD_ENV_CURVE_CONNECTIONS_PER_PHASE);
  if (!phases.length || K <= 0) return { kind: 'env', file: null };
  const blockLen = K + C;
  const phase = Math.floor(segmentIndex / blockLen) % phases.length;
  const local = segmentIndex % blockLen;

  if (local < K || C <= 0) {
    return {
      kind: 'env',
      file: pickVariant(phases[phase] ?? [], segmentIndex * 7919 + phase * 17),
    };
  }

  return {
    kind: 'curve',
    file: pickVariant(curves[phase] ?? [], segmentIndex * 9157 + phase * 23),
  };
}

function readMarkerPose(root: THREE.Object3D, namePrefix: string): MarkerPose | null {
  let found: THREE.Object3D | undefined;
  root.traverse((obj) => {
    if (found) return;
    if (obj.name.startsWith(namePrefix)) found = obj;
  });
  if (!found) return null;
  const marker = found;
  marker.updateMatrixWorld(true);
  const p = new THREE.Vector3();
  const q = new THREE.Quaternion();
  marker.getWorldPosition(p);
  marker.getWorldQuaternion(q);
  return { position: p, quaternion: q };
}

async function loadRoadPieceTemplates(
  loader: GLTFLoader
): Promise<Map<string, RoadPieceTemplate>> {
  const map = new Map<string, RoadPieceTemplate>();
  if (!CONFIG.ROAD_ENVIRONMENTS.length) return map;

  const unique = new Set<string>();
  for (const row of CONFIG.ROAD_ENVIRONMENTS) {
    for (const f of row) unique.add(f);
  }
  for (const row of CONFIG.ROAD_ENV_CURVE_SEGMENTS) {
    for (const f of row) unique.add(f);
  }

  await Promise.all(
    [...unique].map(async (file) => {
      try {
        const gltf = await loader.loadAsync(publicAssetUrl(file));
        const fitted = fitEnvGltfToSegment(gltf);
        fitted.updateMatrixWorld(true);
        map.set(file, {
          root: fitted,
          startMarker: readMarkerPose(fitted, 'Marker_Start'),
          endMarker: readMarkerPose(fitted, 'Marker_End'),
        });
      } catch (e) {
        console.warn(`RoadManager: failed to load road GLB "${file}"`, e);
      }
    })
  );
  return map;
}

/**
 * RoadManager — Infinite corridor from recycling segment roots.
 * Draws only `CONFIG.ROAD_ENVIRONMENTS` GLBs (no procedural plane, lane lines, or `ROAD_SEGMENT_GLB`).
 */
export class RoadManager {
  readonly group = new THREE.Group();

  private readonly segments: RoadSegmentSlot[] = [];

  private readonly playerZ: number;
  private readonly recycleBehind = 40;
  private nextSegmentIndex: number;
  private readonly roadPieceTemplates: Map<string, RoadPieceTemplate> | null;
  private readonly tmpStart = new THREE.Vector3();
  private readonly tmpEnd = new THREE.Vector3();

  private constructor(playerZ: number, roadPieceTemplates: Map<string, RoadPieceTemplate>) {
    this.playerZ = playerZ;
    this.group.name = 'RoadGroup';
    this.roadPieceTemplates = roadPieceTemplates.size > 0 ? roadPieceTemplates : null;
    this.nextSegmentIndex = CONFIG.ROAD_VISIBLE_SEGMENTS;

    this.buildSegments();
  }

  static async create(playerZ: number): Promise<RoadManager> {
    const loader = new GLTFLoader();
    const roadPieceTemplates = await loadRoadPieceTemplates(loader);
    return new RoadManager(playerZ, roadPieceTemplates);
  }

  private makeEnvHolder(): THREE.Group | null {
    if (!this.roadPieceTemplates) return null;
    const g = new THREE.Group();
    g.name = 'RoadEnvHolder';
    return g;
  }

  private applyRoadPieceToSegment(seg: RoadSegmentSlot): void {
    seg.pieceTemplate = null;
    seg.pieceKind = 'env';
    if (!seg.envHolder || !this.roadPieceTemplates) return;
    while (seg.envHolder.children.length > 0) {
      seg.envHolder.remove(seg.envHolder.children[0]!);
    }
    const selected = pickRoadPiece(seg.segmentIndex);
    seg.pieceKind = selected.kind;
    const file = selected?.file ?? null;
    if (!file) return;
    const tmpl = this.roadPieceTemplates.get(file);
    if (!tmpl) return;
    seg.envHolder.add(tmpl.root.clone(true));
    seg.pieceTemplate = tmpl;
  }

  private pushSegment(root: THREE.Group, segmentIndex: number): void {
    const envHolder = this.makeEnvHolder();
    if (envHolder) {
      root.add(envHolder);
    }
    this.group.add(root);
    const seg: RoadSegmentSlot = {
      root,
      segmentIndex,
      envHolder,
      pieceTemplate: null,
      pieceKind: 'env',
    };
    this.segments.push(seg);
  }

  private placeFirstSegment(seg: RoadSegmentSlot, zCenter: number): void {
    seg.root.position.set(0, 0, zCenter);
    seg.root.quaternion.identity();
  }

  private getStartMarkerPoseOrFallback(tmpl: RoadPieceTemplate | null): MarkerPose {
    if (tmpl?.startMarker) return tmpl.startMarker;
    return {
      position: new THREE.Vector3(0, 0, -CONFIG.ROAD_SEGMENT_LENGTH * 0.5),
      quaternion: new THREE.Quaternion(),
    };
  }

  private getEndMarkerPoseOrFallback(tmpl: RoadPieceTemplate | null): MarkerPose {
    if (tmpl?.endMarker) return tmpl.endMarker;
    return {
      position: new THREE.Vector3(0, 0, CONFIG.ROAD_SEGMENT_LENGTH * 0.5),
      quaternion: new THREE.Quaternion(),
    };
  }

  private placeAfterPrevious(seg: RoadSegmentSlot, prev: RoadSegmentSlot): void {
    const prevEnd = this.getEndMarkerPoseOrFallback(prev.pieceTemplate);
    const nextStart = this.getStartMarkerPoseOrFallback(seg.pieceTemplate);

    // Solve so: world(nextStart) == world(prevEnd), and next start tangent matches prev end tangent.
    const rootQ = prev.root.quaternion
      .clone()
      .multiply(prevEnd.quaternion)
      .multiply(nextStart.quaternion.clone().invert());
    const startWorldOffset = nextStart.position.clone().applyQuaternion(rootQ);
    const prevEndPos = prevEnd.position
      .clone()
      .applyQuaternion(prev.root.quaternion)
      .add(prev.root.position);
    seg.root.quaternion.copy(rootQ);
    seg.root.position.copy(prevEndPos.sub(startWorldOffset));
  }

  /** Segment roots + `ROAD_ENVIRONMENTS` clones only (no separate road mesh). */
  private buildSegments(): void {
    const L = CONFIG.ROAD_SEGMENT_LENGTH;
    const N = CONFIG.ROAD_VISIBLE_SEGMENTS;
    const firstCenter = this.playerZ - this.recycleBehind + L * 0.5;

    for (let i = 0; i < N; i++) {
      const root = new THREE.Group();
      this.pushSegment(root, i);
      const seg = this.segments[i]!;
      this.applyRoadPieceToSegment(seg);
      if (i === 0) {
        this.placeFirstSegment(seg, firstCenter);
      } else {
        this.placeAfterPrevious(seg, this.segments[i - 1]!);
      }
    }
  }

  reset(): void {
    const L = CONFIG.ROAD_SEGMENT_LENGTH;
    const N = CONFIG.ROAD_VISIBLE_SEGMENTS;
    const firstCenter = this.playerZ - this.recycleBehind + L * 0.5;
    this.nextSegmentIndex = N;

    for (let i = 0; i < N; i++) {
      const s = this.segments[i]!;
      s.segmentIndex = i;
      this.applyRoadPieceToSegment(s);
      if (i === 0) {
        this.placeFirstSegment(s, firstCenter);
      } else {
        this.placeAfterPrevious(s, this.segments[i - 1]!);
      }
    }
  }

  /**
   * Scroll road toward -Z (world moves past the player).
   * dz is positive distance to subtract from segment z each frame.
   */
  update(dz: number): void {
    if (dz <= 0) return;

    for (const s of this.segments) {
      s.root.position.z -= dz;
    }

    while (
      this.segments.length > 0 &&
      this.segments[0]!.root.position.z < this.playerZ - this.recycleBehind
    ) {
      const recycled = this.segments.shift()!;
      recycled.segmentIndex = this.nextSegmentIndex++;
      this.applyRoadPieceToSegment(recycled);
      const prev = this.segments[this.segments.length - 1];
      if (prev) {
        this.placeAfterPrevious(recycled, prev);
      }
      this.segments.push(recycled);
    }
  }

  private getSegmentStartEndXZ(seg: RoadSegmentSlot, startOut: THREE.Vector3, endOut: THREE.Vector3): void {
    const tmpl = seg.pieceTemplate;
    const startMarker = tmpl?.startMarker;
    const endMarker = tmpl?.endMarker;
    if (startMarker && endMarker) {
      startOut
        .copy(startMarker.position)
        .applyQuaternion(seg.root.quaternion)
        .add(seg.root.position);
      endOut
        .copy(endMarker.position)
        .applyQuaternion(seg.root.quaternion)
        .add(seg.root.position);
      return;
    }

    const half = CONFIG.ROAD_SEGMENT_LENGTH * 0.5;
    startOut
      .set(0, 0, -half)
      .applyQuaternion(seg.root.quaternion)
      .add(seg.root.position);
    endOut
      .set(0, 0, half)
      .applyQuaternion(seg.root.quaternion)
      .add(seg.root.position);
  }

  private sampleAlongSegment(seg: RoadSegmentSlot, t: number): RoadFrameSample {
    const u = THREE.MathUtils.clamp(t, 0, 1);
    this.getSegmentStartEndXZ(seg, this.tmpStart, this.tmpEnd);
    const dx = this.tmpEnd.x - this.tmpStart.x;
    const dz = this.tmpEnd.z - this.tmpStart.z;
    const chordLen = Math.hypot(dx, dz);
    const chordTx = chordLen > 1e-5 ? dx / chordLen : 0;
    const chordTz = chordLen > 1e-5 ? dz / chordLen : 1;
    const startMarker = this.getStartMarkerPoseOrFallback(seg.pieceTemplate);
    const endMarker = this.getEndMarkerPoseOrFallback(seg.pieceTemplate);
    const startTangent = new THREE.Vector3(0, 0, 1)
      .applyQuaternion(seg.root.quaternion.clone().multiply(startMarker.quaternion))
      .setY(0)
      .normalize();
    const endTangent = new THREE.Vector3(0, 0, 1)
      .applyQuaternion(seg.root.quaternion.clone().multiply(endMarker.quaternion))
      .setY(0)
      .normalize();
    const tx0 = Number.isFinite(startTangent.x) ? startTangent.x : chordTx;
    const tz0 = Number.isFinite(startTangent.z) ? startTangent.z : chordTz;

    if (seg.pieceKind !== 'curve' || chordLen <= 1e-5) {
      const cx = THREE.MathUtils.lerp(this.tmpStart.x, this.tmpEnd.x, u);
      const cz = THREE.MathUtils.lerp(this.tmpStart.z, this.tmpEnd.z, u);
      return {
        centerX: cx,
        centerZ: cz,
        rightX: chordTz,
        rightZ: -chordTx,
        yaw: Math.atan2(chordTx, chordTz),
      };
    }

    const ex = endTangent.x;
    const ez = endTangent.z;
    const dot = THREE.MathUtils.clamp(tx0 * ex + tz0 * ez, -1, 1);
    const cross = tx0 * ez - tz0 * ex;
    const delta = Math.atan2(cross, dot);

    // If markers/tangents don't define a meaningful turn, use linear fallback.
    if (Math.abs(delta) < THREE.MathUtils.degToRad(1)) {
      const cx = THREE.MathUtils.lerp(this.tmpStart.x, this.tmpEnd.x, u);
      const cz = THREE.MathUtils.lerp(this.tmpStart.z, this.tmpEnd.z, u);
      return {
        centerX: cx,
        centerZ: cz,
        rightX: tz0,
        rightZ: -tx0,
        yaw: Math.atan2(tx0, tz0),
      };
    }

    const radius = chordLen / (2 * Math.sin(Math.abs(delta) * 0.5));
    if (!Number.isFinite(radius) || radius < 1e-5) {
      const cx = THREE.MathUtils.lerp(this.tmpStart.x, this.tmpEnd.x, u);
      const cz = THREE.MathUtils.lerp(this.tmpStart.z, this.tmpEnd.z, u);
      return {
        centerX: cx,
        centerZ: cz,
        rightX: tz0,
        rightZ: -tx0,
        yaw: Math.atan2(tx0, tz0),
      };
    }

    const leftNx = -tz0;
    const leftNz = tx0;
    const sign = Math.sign(delta);
    const centerX = this.tmpStart.x + leftNx * radius * sign;
    const centerZ = this.tmpStart.z + leftNz * radius * sign;
    const rad0x = this.tmpStart.x - centerX;
    const rad0z = this.tmpStart.z - centerZ;
    const a = delta * u;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    const radUx = rad0x * ca - rad0z * sa;
    const radUz = rad0x * sa + rad0z * ca;
    const cx = centerX + radUx;
    const cz = centerZ + radUz;
    const yaw = Math.atan2(tx0, tz0) + a;
    const tx = Math.sin(yaw);
    const tz = Math.cos(yaw);
    return {
      centerX: cx,
      centerZ: cz,
      rightX: tz,
      rightZ: -tx,
      yaw,
    };
  }

  sampleFrameAtZ(z: number): RoadFrameSample | null {
    if (this.segments.length === 0) return null;
    let best: RoadSegmentSlot | null = null;
    let bestDist = Infinity;
    let bestT = 0.5;

    for (const seg of this.segments) {
      this.getSegmentStartEndXZ(seg, this.tmpStart, this.tmpEnd);
      const z0 = this.tmpStart.z;
      const z1 = this.tmpEnd.z;
      const minZ = Math.min(z0, z1);
      const maxZ = Math.max(z0, z1);
      let dist = 0;
      if (z < minZ) dist = minZ - z;
      else if (z > maxZ) dist = z - maxZ;
      const denom = z1 - z0;
      let t = 0.5;
      if (Math.abs(denom) > 1e-5) {
        t = THREE.MathUtils.clamp((z - z0) / denom, 0, 1);
      }
      if (dist < bestDist) {
        bestDist = dist;
        best = seg;
        bestT = t;
        if (dist <= 1e-5) break;
      }
    }

    if (!best) return null;
    return this.sampleAlongSegment(best, bestT);
  }
}
