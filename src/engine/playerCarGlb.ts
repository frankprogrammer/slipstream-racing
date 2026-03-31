import * as THREE from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CONFIG } from '../config';

function publicAssetUrl(file: string): string {
  return `${import.meta.env.BASE_URL}${file}`;
}

let gltfPromise: Promise<GLTF> | null = null;

/** Single cached load of `PLAYER_CAR_GLB` for player + traffic clones. */
export function loadPlayerCarGltf(): Promise<GLTF> {
  if (!gltfPromise) {
    const loader = new GLTFLoader();
    gltfPromise = loader.loadAsync(publicAssetUrl(CONFIG.PLAYER_CAR_GLB));
  }
  return gltfPromise;
}

export type CarDims = { width: number; height: number; length: number };

/**
 * After `scene.clone(true)`, meshes still share `Material` instances with the cached glTF
 * (and with other clones). Clone each mesh's material(s) so instances can be colored independently.
 */
export function cloneMeshMaterialsUnique(root: THREE.Object3D): void {
  root.traverse(obj => {
    if (!(obj instanceof THREE.Mesh)) return;
    if (Array.isArray(obj.material)) {
      obj.material = obj.material.map(m => m.clone());
    } else {
      obj.material = obj.material.clone();
    }
  });
}

/**
 * Uniform scale to fit inside `dims`, center X/Z on origin, sit bottom on y=0 (+ yOffset).
 */
export function fitCarToDimensions(
  modelRoot: THREE.Object3D,
  dims: CarDims,
  yOffset: number
): void {
  modelRoot.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(modelRoot);
  const size = new THREE.Vector3();
  box.getSize(size);
  if (size.x < 1e-4 || size.y < 1e-4 || size.z < 1e-4) return;

  const sx = dims.width / size.x;
  const sy = dims.height / size.y;
  const sz = dims.length / size.z;
  const s = Math.min(sx, sy, sz);
  modelRoot.scale.setScalar(s);
  modelRoot.updateMatrixWorld(true);

  const fitted = new THREE.Box3().setFromObject(modelRoot);
  const fittedCenter = new THREE.Vector3();
  fitted.getCenter(fittedCenter);
  modelRoot.position.x -= fittedCenter.x;
  modelRoot.position.z -= fittedCenter.z;
  modelRoot.position.y -= fitted.min.y;
  modelRoot.position.y += yOffset;
}

export type LiveryTriplet = { red: number; white: number; blue: number };

/** Apply hex colors to materials named red / white / blue (glTF material names). */
export function applyLiveryColors(
  root: THREE.Object3D,
  livery: LiveryTriplet
): void {
  const map: Record<string, number> = {
    [CONFIG.TRAFFIC_MATERIAL_RED]: livery.red,
    [CONFIG.TRAFFIC_MATERIAL_WHITE]: livery.white,
    [CONFIG.TRAFFIC_MATERIAL_BLUE]: livery.blue,
  };

  root.traverse(obj => {
    if (!(obj instanceof THREE.Mesh)) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const mat of mats) {
      const hex = map[mat.name];
      if (hex === undefined) continue;
      if (mat instanceof THREE.MeshStandardMaterial) {
        mat.color.setHex(hex);
        if (CONFIG.TRAFFIC_LIVERY_IGNORE_TEXTURES) {
          mat.map = null;
          mat.emissiveMap = null;
          mat.roughnessMap = null;
          mat.metalnessMap = null;
          mat.normalMap = null;
        }
        mat.needsUpdate = true;
      } else if (mat instanceof THREE.MeshBasicMaterial) {
        mat.color.setHex(hex);
        if (CONFIG.TRAFFIC_LIVERY_IGNORE_TEXTURES) {
          mat.map = null;
        }
        mat.needsUpdate = true;
      }
    }
  });
}

/** First material on the tree whose `name` matches (for draft tail highlight). */
export function findMaterialByName(
  root: THREE.Object3D,
  name: string
): THREE.MeshStandardMaterial | THREE.MeshBasicMaterial | null {
  let found: THREE.MeshStandardMaterial | THREE.MeshBasicMaterial | null = null;
  root.traverse(obj => {
    if (found || !(obj instanceof THREE.Mesh)) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of mats) {
      if (
        m.name === name &&
        (m instanceof THREE.MeshStandardMaterial || m instanceof THREE.MeshBasicMaterial)
      ) {
        found = m;
        return;
      }
    }
  });
  return found;
}

export function pickRandomLivery(): LiveryTriplet {
  const v = CONFIG.TRAFFIC_LIVERY_VARIANTS;
  return v[Math.floor(Math.random() * v.length)]!;
}
