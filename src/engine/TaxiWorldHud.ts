import * as THREE from "three";
import {
  CONFIG,
  displaySpeedKmhFromScroll,
  hexToCss,
  rgbaFromHex,
} from "../config";

/**
 * Speed (km/h) as a canvas sprite parented to the taxi chassis (roll with body).
 */
export class TaxiWorldHud {
  readonly speedSprite: THREE.Sprite;

  private readonly speedCanvas: HTMLCanvasElement;
  private readonly speedTex: THREE.CanvasTexture;
  private readonly speedBaseScale = new THREE.Vector3();

  constructor(
    chassisGroup: THREE.Group,
    layout: {
      scoreY: number;
      scoreZ: number;
    },
  ) {
    const { scoreY, scoreZ } = layout;

    this.speedCanvas = document.createElement("canvas");
    this.speedCanvas.width = 512;
    this.speedCanvas.height = 160;
    this.speedTex = new THREE.CanvasTexture(this.speedCanvas);
    this.speedTex.colorSpace = THREE.SRGBColorSpace;
    this.speedTex.minFilter = THREE.LinearFilter;
    this.speedTex.magFilter = THREE.LinearFilter;

    const speedMat = new THREE.SpriteMaterial({
      map: this.speedTex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    this.speedSprite = new THREE.Sprite(speedMat);
    this.speedSprite.center.set(0.5, 0.5);
    this.speedSprite.renderOrder = 99;

    this.speedBaseScale.set(
      CONFIG.TAXI_WORLD_HUD_SCORE_SCALE_X,
      CONFIG.TAXI_WORLD_HUD_SCORE_SCALE_Y,
      1,
    );
    this.speedSprite.scale.copy(this.speedBaseScale);

    this.speedSprite.position.set(0, scoreY, scoreZ);

    chassisGroup.add(this.speedSprite);

    this.drawSpeedKmh(displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED));
  }

  setSpeedKmh(kmhRounded: number): void {
    this.drawSpeedKmh(kmhRounded);
  }

  reset(): void {
    this.drawSpeedKmh(displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED));
  }

  private drawSpeedKmh(kmhRounded: number): void {
    const ctx = this.speedCanvas.getContext("2d")!;
    const w = this.speedCanvas.width;
    const h = this.speedCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const numStr = `${kmhRounded}`;
    const unitStr = "km/h";
    const speedPx = Math.round(h * 0.34);
    const unitPx = Math.round(speedPx * 0.5);
    const family = `"Exo 2", system-ui, sans-serif`;
    const ui = hexToCss(CONFIG.PALETTE.UI_TEXT);
    const y = h / 2;
    const gap = Math.max(4, Math.round(speedPx * 0.14));

    ctx.textBaseline = "middle";
    ctx.fillStyle = ui;
    ctx.shadowColor = rgbaFromHex(CONFIG.PALETTE.HUD_SCORE_GLOW, 0.35);
    ctx.shadowBlur = 22;

    ctx.font = `800 ${speedPx}px ${family}`;
    const numW = ctx.measureText(numStr).width;
    const centerX = w / 2;

    ctx.textAlign = "center";
    ctx.fillText(numStr, centerX, y);

    ctx.font = `800 ${unitPx}px ${family}`;
    ctx.textAlign = "left";
    ctx.fillText(unitStr, centerX + numW * 0.5 + gap, y);

    ctx.shadowBlur = 0;

    this.speedTex.needsUpdate = true;
  }

  dispose(): void {
    this.speedTex.dispose();
    (this.speedSprite.material as THREE.SpriteMaterial).dispose();
  }
}
