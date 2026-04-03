import * as THREE from "three";
import { CONFIG, hexToCss } from "../config";

const CANVAS_W = 512;
const CANVAS_H = 128;

/**
 * World-space billboard for overtake racer names — `SpriteMaterial.fog` so scene fog applies.
 */
export function createTrafficRacerNameSprite(): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;

  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    fog: true,
    sizeAttenuation: true,
  });

  const sprite = new THREE.Sprite(mat);
  sprite.visible = false;
  sprite.center.set(0.5, 1);
  sprite.renderOrder = 4;
  sprite.scale.set(
    CONFIG.TRAFFIC_RACER_NAME_SPRITE_WORLD_WIDTH,
    CONFIG.TRAFFIC_RACER_NAME_SPRITE_WORLD_HEIGHT,
    1,
  );
  return sprite;
}

export function updateTrafficRacerNameSprite(
  sprite: THREE.Sprite,
  name: string,
): void {
  const mat = sprite.material as THREE.SpriteMaterial;
  const tex = mat.map as THREE.CanvasTexture;
  const canvas = tex.image as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

  let fontSize = 52;
  const face =
    'system-ui, "Segoe UI", "Helvetica Neue", Arial, sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = hexToCss(CONFIG.PALETTE.UI_TEXT);
  ctx.shadowColor = "rgba(0,0,0,0.9)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 2;

  for (;;) {
    ctx.font = `800 ${fontSize}px ${face}`;
    if (ctx.measureText(name).width <= CANVAS_W - 36 || fontSize <= 20) break;
    fontSize -= 2;
  }

  ctx.fillText(name, CANVAS_W / 2, CANVAS_H - 10);
  tex.needsUpdate = true;
}
