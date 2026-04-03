import * as THREE from "three";
import {
  CONFIG,
  displaySpeedKmhFromScroll,
  hexToCss,
  rgbaFromHex,
} from "../config";

/**
 * Speed + chain as canvas sprites parented to the taxi chassis (roll with body).
 * Speed (km/h) floats behind the car; chain sits just below the slipstream meter on the hood.
 */
export class TaxiWorldHud {
  readonly chainSprite: THREE.Sprite;
  readonly speedSprite: THREE.Sprite;

  private readonly chainCanvas: HTMLCanvasElement;
  private readonly speedCanvas: HTMLCanvasElement;
  private readonly chainTex: THREE.CanvasTexture;
  private readonly speedTex: THREE.CanvasTexture;
  private readonly chainBaseScale = new THREE.Vector3();
  private readonly speedBaseScale = new THREE.Vector3();
  private lastChain = 1;
  private chainPopTimer = 0;

  constructor(
    chassisGroup: THREE.Group,
    layout: {
      scoreY: number;
      scoreZ: number;
      draftBarY: number;
      draftBarZ: number;
    },
  ) {
    const { scoreY, scoreZ, draftBarY, draftBarZ } = layout;

    this.chainCanvas = document.createElement("canvas");
    this.chainCanvas.width = 256;
    this.chainCanvas.height = 128;
    this.chainTex = new THREE.CanvasTexture(this.chainCanvas);
    this.chainTex.colorSpace = THREE.SRGBColorSpace;
    this.chainTex.minFilter = THREE.LinearFilter;
    this.chainTex.magFilter = THREE.LinearFilter;

    this.speedCanvas = document.createElement("canvas");
    this.speedCanvas.width = 512;
    this.speedCanvas.height = 160;
    this.speedTex = new THREE.CanvasTexture(this.speedCanvas);
    this.speedTex.colorSpace = THREE.SRGBColorSpace;
    this.speedTex.minFilter = THREE.LinearFilter;
    this.speedTex.magFilter = THREE.LinearFilter;

    /** Must ignore depth or the lower chain quad sits inside / behind trunk meshes. */
    const chainMat = new THREE.SpriteMaterial({
      map: this.chainTex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });
    const speedMat = new THREE.SpriteMaterial({
      map: this.speedTex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    this.chainSprite = new THREE.Sprite(chainMat);
    this.chainSprite.center.set(0.5, 0.5);
    this.chainSprite.renderOrder = 100;

    this.speedSprite = new THREE.Sprite(speedMat);
    this.speedSprite.center.set(0.5, 0.5);
    this.speedSprite.renderOrder = 99;

    this.chainBaseScale.set(
      CONFIG.TAXI_WORLD_HUD_CHAIN_SCALE_X,
      CONFIG.TAXI_WORLD_HUD_CHAIN_SCALE_Y,
      1,
    );
    this.speedBaseScale.set(
      CONFIG.TAXI_WORLD_HUD_SCORE_SCALE_X,
      CONFIG.TAXI_WORLD_HUD_SCORE_SCALE_Y,
      1,
    );
    this.chainSprite.scale.copy(this.chainBaseScale);
    this.speedSprite.scale.copy(this.speedBaseScale);

    this.speedSprite.position.set(0, scoreY, scoreZ);

    const gap = CONFIG.TAXI_WORLD_HUD_CHAIN_BELOW_DRAFT_GAP;
    const dBar = CONFIG.DRAFT_BAR_DEPTH;
    const chainY = draftBarY - dBar * 0.5 - gap - this.chainBaseScale.y * 0.5;
    this.chainSprite.position.set(0, chainY, draftBarZ);

    chassisGroup.add(this.speedSprite);
    chassisGroup.add(this.chainSprite);

    this.drawChain(1);
    this.drawSpeedKmh(displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED));
  }

  setSpeedKmh(kmhRounded: number): void {
    this.drawSpeedKmh(kmhRounded);
  }

  setChain(chain: number): void {
    const grew = chain > this.lastChain;
    this.lastChain = chain;
    this.drawChain(chain);

    if (grew && chain > 1) {
      window.clearTimeout(this.chainPopTimer);
      this.chainSprite.scale.set(
        this.chainBaseScale.x * CONFIG.CHAIN_POP_SCALE,
        this.chainBaseScale.y * CONFIG.CHAIN_POP_SCALE,
        1,
      );
      this.chainPopTimer = window.setTimeout(() => {
        this.chainSprite.scale.copy(this.chainBaseScale);
      }, CONFIG.CHAIN_POP_DURATION);
    } else if (chain === 1) {
      this.chainSprite.scale.copy(this.chainBaseScale);
    }
  }

  reset(): void {
    window.clearTimeout(this.chainPopTimer);
    this.lastChain = 1;
    this.chainSprite.scale.copy(this.chainBaseScale);
    this.drawChain(1);
    this.drawSpeedKmh(displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED));
  }

  private drawChain(chain: number): void {
    const ctx = this.chainCanvas.getContext("2d")!;
    const w = this.chainCanvas.width;
    const h = this.chainCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const outline = hexToCss(CONFIG.PALETTE.UI_OUTLINE);
    const fill = hexToCss(CONFIG.PALETTE.NEON_BLUE);
    const dim = chain > 1 ? 1 : 0.55;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `700 ${Math.round(h * 0.5)}px "Exo 2", system-ui, sans-serif`;
    ctx.globalAlpha = dim;
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(5, Math.round(h * 0.12));
    ctx.strokeStyle = outline;
    ctx.fillStyle = fill;
    ctx.strokeText(`×${chain}`, w / 2, h / 2);
    ctx.fillText(`×${chain}`, w / 2, h / 2);
    ctx.globalAlpha = 1;

    this.chainTex.needsUpdate = true;
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
    window.clearTimeout(this.chainPopTimer);
    this.chainTex.dispose();
    this.speedTex.dispose();
    (this.chainSprite.material as THREE.SpriteMaterial).dispose();
    (this.speedSprite.material as THREE.SpriteMaterial).dispose();
  }
}
