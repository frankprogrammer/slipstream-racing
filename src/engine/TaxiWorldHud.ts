import * as THREE from 'three';
import { CONFIG, hexToCss, rgbaFromHex } from '../config';

/**
 * Score + chain as canvas sprites parented to the taxi chassis (roll with body).
 * Score floats behind the car; chain sits just below the slipstream meter on the hood.
 */
export class TaxiWorldHud {
  readonly chainSprite: THREE.Sprite;
  readonly scoreSprite: THREE.Sprite;

  private readonly chainCanvas: HTMLCanvasElement;
  private readonly scoreCanvas: HTMLCanvasElement;
  private readonly chainTex: THREE.CanvasTexture;
  private readonly scoreTex: THREE.CanvasTexture;
  private readonly chainBaseScale = new THREE.Vector3();
  private readonly scoreBaseScale = new THREE.Vector3();
  private lastChain = 1;
  private chainPopGen = 0;

  constructor(
    chassisGroup: THREE.Group,
    layout: {
      scoreY: number;
      scoreZ: number;
      draftBarY: number;
      draftBarZ: number;
    }
  ) {
    const { scoreY, scoreZ, draftBarY, draftBarZ } = layout;

    this.chainCanvas = document.createElement('canvas');
    this.chainCanvas.width = 256;
    this.chainCanvas.height = 128;
    this.chainTex = new THREE.CanvasTexture(this.chainCanvas);
    this.chainTex.colorSpace = THREE.SRGBColorSpace;
    this.chainTex.minFilter = THREE.LinearFilter;
    this.chainTex.magFilter = THREE.LinearFilter;

    this.scoreCanvas = document.createElement('canvas');
    this.scoreCanvas.width = 512;
    this.scoreCanvas.height = 160;
    this.scoreTex = new THREE.CanvasTexture(this.scoreCanvas);
    this.scoreTex.colorSpace = THREE.SRGBColorSpace;
    this.scoreTex.minFilter = THREE.LinearFilter;
    this.scoreTex.magFilter = THREE.LinearFilter;

    /** Must ignore depth or the lower chain quad sits inside / behind trunk meshes. */
    const chainMat = new THREE.SpriteMaterial({
      map: this.chainTex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });
    const scoreMat = new THREE.SpriteMaterial({
      map: this.scoreTex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    this.chainSprite = new THREE.Sprite(chainMat);
    this.chainSprite.center.set(0.5, 0.5);
    this.chainSprite.renderOrder = 100;

    this.scoreSprite = new THREE.Sprite(scoreMat);
    this.scoreSprite.center.set(0.5, 0.5);
    this.scoreSprite.renderOrder = 99;

    this.chainBaseScale.set(
      CONFIG.TAXI_WORLD_HUD_CHAIN_SCALE_X,
      CONFIG.TAXI_WORLD_HUD_CHAIN_SCALE_Y,
      1
    );
    this.scoreBaseScale.set(
      CONFIG.TAXI_WORLD_HUD_SCORE_SCALE_X,
      CONFIG.TAXI_WORLD_HUD_SCORE_SCALE_Y,
      1
    );
    this.chainSprite.scale.copy(this.chainBaseScale);
    this.scoreSprite.scale.copy(this.scoreBaseScale);

    this.scoreSprite.position.set(0, scoreY, scoreZ);

    const gap = CONFIG.TAXI_WORLD_HUD_CHAIN_BELOW_DRAFT_GAP;
    const dBar = CONFIG.DRAFT_BAR_DEPTH;
    const chainY =
      draftBarY -
      dBar * 0.5 -
      gap -
      this.chainBaseScale.y * 0.5;
    this.chainSprite.position.set(0, chainY, draftBarZ);

    chassisGroup.add(this.scoreSprite);
    chassisGroup.add(this.chainSprite);

    this.drawChain(1);
    this.drawScore(0);
  }

  setScore(score: number): void {
    this.drawScore(score);
  }

  setChain(chain: number): void {
    const grew = chain > this.lastChain;
    const isMilestone10 = grew && chain > 1 && chain % 10 === 0;
    this.lastChain = chain;
    this.drawChain(chain, isMilestone10);

    if (grew && chain > 1) {
      this.chainPopGen += 1;
      const gen = this.chainPopGen;
      const popScale = 1.6 + Math.min(chain, 25) * 0.05;

      if (isMilestone10) {
        this.applyChainScale(3.2);
        setTimeout(() => {
          if (this.chainPopGen !== gen) return;
          this.applyChainScale(1.6);
          setTimeout(() => {
            if (this.chainPopGen !== gen) return;
            this.applyChainScale(2.6);
            this.drawChain(chain);
            setTimeout(() => {
              if (this.chainPopGen !== gen) return;
              this.applyChainScale(1.3);
              setTimeout(() => {
                if (this.chainPopGen !== gen) return;
                this.chainSprite.scale.copy(this.chainBaseScale);
              }, 150);
            }, 140);
          }, 130);
        }, 100);
      } else {
        this.applyChainScale(popScale);
        setTimeout(() => {
          if (this.chainPopGen !== gen) return;
          this.chainSprite.scale.copy(this.chainBaseScale);
        }, CONFIG.CHAIN_POP_DURATION);
      }
    } else if (chain === 1) {
      this.chainPopGen += 1;
      this.chainSprite.scale.copy(this.chainBaseScale);
    }
  }

  private applyChainScale(s: number): void {
    this.chainSprite.scale.set(
      this.chainBaseScale.x * s,
      this.chainBaseScale.y * s,
      1
    );
  }

  reset(): void {
    this.chainPopGen += 1;
    this.lastChain = 1;
    this.chainSprite.scale.copy(this.chainBaseScale);
    this.drawChain(1);
    this.drawScore(0);
  }

  private drawChain(chain: number, milestoneFlash = false): void {
    const ctx = this.chainCanvas.getContext('2d')!;
    const w = this.chainCanvas.width;
    const h = this.chainCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const outline = hexToCss(CONFIG.PALETTE.UI_OUTLINE);
    const fill = milestoneFlash ? '#ffffff' : this.chainColor(chain);
    const dim = chain > 1 ? 1 : 0.55;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${Math.round(h * 0.5)}px "Exo 2", system-ui, sans-serif`;
    ctx.globalAlpha = dim;
    ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(5, Math.round(h * 0.12));
    ctx.strokeStyle = outline;
    ctx.fillStyle = fill;

    if (chain >= 5) {
      const glowT = Math.min(1, (chain - 5) / 15);
      ctx.shadowColor = fill;
      ctx.shadowBlur = 8 + glowT * 24;
    }
    if (milestoneFlash) {
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 40;
    }

    ctx.strokeText(`×${chain}`, w / 2, h / 2);
    ctx.fillText(`×${chain}`, w / 2, h / 2);
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    this.chainTex.needsUpdate = true;
  }

  /** Yellow → orange → red gradient as chain grows. */
  private chainColor(chain: number): string {
    if (chain <= 1) return hexToCss(CONFIG.PALETTE.NEON_BLUE);
    const t = Math.min(1, (chain - 1) / 19);
    let r: number, g: number, b: number;
    if (t <= 0.5) {
      const u = t * 2;
      r = Math.round(253 + (255 - 253) * u);
      g = Math.round(224 + (135 - 224) * u);
      b = Math.round(71 * (1 - u));
    } else {
      const u = (t - 0.5) * 2;
      r = Math.round(255 + (225 - 255) * u);
      g = Math.round(135 * (1 - u));
      b = 0;
    }
    return `rgb(${r},${g},${b})`;
  }

  private drawScore(score: number): void {
    const ctx = this.scoreCanvas.getContext('2d')!;
    const w = this.scoreCanvas.width;
    const h = this.scoreCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const text = score.toLocaleString();
    const ui = hexToCss(CONFIG.PALETTE.UI_TEXT);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `800 ${Math.round(h * 0.34)}px "Exo 2", system-ui, sans-serif`;
    ctx.fillStyle = ui;
    ctx.shadowColor = rgbaFromHex(CONFIG.PALETTE.HUD_SCORE_GLOW, 0.35);
    ctx.shadowBlur = 22;
    ctx.fillText(text, w / 2, h / 2);
    ctx.shadowBlur = 0;

    this.scoreTex.needsUpdate = true;
  }

  dispose(): void {
    this.chainPopGen += 1;
    this.chainTex.dispose();
    this.scoreTex.dispose();
    (this.chainSprite.material as THREE.SpriteMaterial).dispose();
    (this.scoreSprite.material as THREE.SpriteMaterial).dispose();
  }
}
