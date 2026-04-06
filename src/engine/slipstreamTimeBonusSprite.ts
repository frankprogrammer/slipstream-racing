import * as THREE from "three";
import { CONFIG, hexToCss } from "../config";

const CANVAS_W = 320;
const CANVAS_H = 128;
const LABEL_NORMAL = "+1 sec";
const LABEL_SUPER = "+2 sec";

export type SlipstreamTimeBonusLabel = "normal" | "super";

export function createSlipstreamTimeBonusSprite(): THREE.Sprite {
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
  sprite.center.set(0.5, 0.5);
  sprite.renderOrder = 3;
  sprite.scale.set(1.5, 0.525, 1);

  updateSlipstreamTimeBonusSprite(sprite, "normal");
  return sprite;
}

export function updateSlipstreamTimeBonusSprite(
  sprite: THREE.Sprite,
  label: SlipstreamTimeBonusLabel,
): void {
  const mat = sprite.material as THREE.SpriteMaterial;
  const tex = mat.map as THREE.CanvasTexture;
  const canvas = tex.image as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = '800 72px "Exo 2", system-ui, sans-serif';
  ctx.fillStyle = hexToCss(CONFIG.PALETTE.UI_TEXT);
  ctx.shadowColor = "rgba(0,0,0,0.85)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 2;
  ctx.fillText(label === "super" ? LABEL_SUPER : LABEL_NORMAL, CANVAS_W / 2, CANVAS_H / 2);
  tex.needsUpdate = true;
}
