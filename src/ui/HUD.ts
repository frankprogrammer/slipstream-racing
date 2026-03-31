import * as THREE from 'three';
import { CONFIG, rgbaFromHex } from '../config';

/**
 * HUD — HTML/CSS overlay: milestone copy + screen flash only.
 * Score and chain render on the taxi (`TaxiWorldHud`).
 */
export class HUD {
  private milestoneEl: HTMLElement;
  private flashEl: HTMLElement;
  private touchHintLeftEl: HTMLElement;
  private touchHintRightEl: HTMLElement;
  private milestoneTimer = 0;
  private milestoneClassTimer = 0;
  private perfectFlashTimer = 0;
  private readonly tmpProj = new THREE.Vector3();

  constructor() {
    this.milestoneEl = document.getElementById('milestone-text')!;
    this.flashEl = document.getElementById('screen-flash')!;
    const container = document.getElementById('game-container')!;
    this.touchHintLeftEl = this.buildTouchHint('left');
    this.touchHintRightEl = this.buildTouchHint('right');
    container.append(this.touchHintLeftEl, this.touchHintRightEl);
  }

  private buildTouchHint(direction: 'left' | 'right'): HTMLElement {
    const el = document.createElement('div');
    const arrow = direction === 'left' ? '\u27a1' : '\u2b05';
    el.textContent = arrow;
    el.style.cssText = [
      'position:absolute',
      'left:0',
      'top:0',
      'width:72px',
      'height:72px',
      'border-radius:9999px',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'font-family:Orbitron, system-ui, sans-serif',
      'font-size:34px',
      'font-weight:900',
      'line-height:1',
      `color:#${CONFIG.PALETTE.UI_TEXT.toString(16).padStart(6, '0')}`,
      `border:4px solid #${CONFIG.PALETTE.NEON_ORANGE.toString(16).padStart(6, '0')}`,
      `background:rgba(${(CONFIG.PALETTE.ROAD_DARK >> 16) & 255},${(CONFIG.PALETTE.ROAD_DARK >> 8) & 255},${CONFIG.PALETTE.ROAD_DARK & 255},0.82)`,
      `box-shadow:0 0 0 2px ${rgbaFromHex(CONFIG.PALETTE.UI_TEXT, 0.18)},0 0 18px #${CONFIG.PALETTE.NEON_ORANGE.toString(16).padStart(6, '0')},0 0 34px #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, '0')}`,
      `text-shadow:0 0 6px #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, '0')},0 0 14px #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, '0')}`,
      'pointer-events:none',
      'opacity:0',
      'z-index:120',
      'transition:opacity 120ms linear',
      'transform:translate(-50%, -50%)',
    ].join(';');
    return el;
  }

  /**
   * @param isPerfect — ×10: larger "PERFECT" treatment + longer hold (step 28).
   */
  showMilestone(text: string, isPerfect = false): void {
    window.clearTimeout(this.milestoneTimer);
    window.clearTimeout(this.milestoneClassTimer);
    this.milestoneEl.textContent = text;
    this.milestoneEl.classList.toggle('perfect', isPerfect);
    this.milestoneEl.style.opacity = '1';
    const hold = isPerfect
      ? CONFIG.PERFECT_MILESTONE_HOLD_MS
      : 1000;
    this.milestoneTimer = window.setTimeout(() => {
      this.milestoneEl.style.opacity = '0';
      this.milestoneClassTimer = window.setTimeout(() => {
        this.milestoneEl.classList.remove('perfect');
      }, 380);
    }, hold);
  }

  /**
   * Anchor milestone popup to a world-space point projected into the game container.
   * Keep this in the animation loop so popup stays attached as camera/FOV changes.
   */
  updateMilestoneAnchor(
    camera: THREE.PerspectiveCamera,
    container: HTMLElement,
    worldPoint: THREE.Vector3
  ): void {
    const rect = container.getBoundingClientRect();
    this.tmpProj.copy(worldPoint).project(camera);
    if (
      !Number.isFinite(this.tmpProj.x) ||
      !Number.isFinite(this.tmpProj.y) ||
      !Number.isFinite(this.tmpProj.z)
    ) {
      return;
    }
    const left = rect.width * 0.5;
    const top = (-this.tmpProj.y * 0.5 + 0.5) * rect.height;
    this.milestoneEl.style.left = `${left.toFixed(1)}px`;
    this.milestoneEl.style.top = `${top.toFixed(1)}px`;
  }

  /** Default pink flash (other milestones / juice). */
  flashScreen(): void {
    this.flashEl.classList.remove('perfect-hit');
    this.flashEl.style.opacity = '1';
    window.setTimeout(() => {
      this.flashEl.style.opacity = '0';
    }, CONFIG.SCREEN_FLASH_DURATION);
  }

  /** Stronger, longer tint for ×10 PERFECT. */
  flashScreenPerfect(): void {
    window.clearTimeout(this.perfectFlashTimer);
    this.flashEl.classList.add('perfect-hit');
    this.flashEl.style.opacity = '1';
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        this.flashEl.style.opacity = '0';
      });
    });
    this.perfectFlashTimer = window.setTimeout(() => {
      this.flashEl.classList.remove('perfect-hit');
    }, CONFIG.PERFECT_FLASH_DURATION_MS + 180);
  }

  /**
   * First 5s onboarding hint: left/right lane touch circles alternate on/off.
   */
  updateTouchHints(
    runTimeMs: number,
    show: boolean,
    camera: THREE.PerspectiveCamera,
    container: HTMLElement,
    leftWorldPoint: THREE.Vector3,
    rightWorldPoint: THREE.Vector3
  ): void {
    const activeWindowMs = 5000;
    if (!show || runTimeMs >= activeWindowMs) {
      this.touchHintLeftEl.style.opacity = '0';
      this.touchHintRightEl.style.opacity = '0';
      return;
    }

    const rect = container.getBoundingClientRect();
    const left = this.tmpProj.copy(leftWorldPoint).project(camera);
    const leftPx = (left.x * 0.5 + 0.5) * rect.width;
    const leftPy = (-left.y * 0.5 + 0.5) * rect.height;
    this.touchHintLeftEl.style.left = `${leftPx.toFixed(1)}px`;
    this.touchHintLeftEl.style.top = `${leftPy.toFixed(1)}px`;

    const right = this.tmpProj.copy(rightWorldPoint).project(camera);
    const rightPx = (right.x * 0.5 + 0.5) * rect.width;
    const rightPy = (-right.y * 0.5 + 0.5) * rect.height;
    this.touchHintRightEl.style.left = `${rightPx.toFixed(1)}px`;
    this.touchHintRightEl.style.top = `${rightPy.toFixed(1)}px`;

    const step = Math.floor(runTimeMs / 380) % 2;
    this.touchHintLeftEl.style.opacity = step === 0 ? '1' : '0';
    this.touchHintRightEl.style.opacity = step === 1 ? '1' : '0';
  }

  reset(): void {
    window.clearTimeout(this.milestoneTimer);
    window.clearTimeout(this.milestoneClassTimer);
    window.clearTimeout(this.perfectFlashTimer);
    this.milestoneEl.classList.remove('perfect');
    this.milestoneEl.style.opacity = '0';
    this.flashEl.classList.remove('perfect-hit');
    this.flashEl.style.opacity = '0';
    this.touchHintLeftEl.style.opacity = '0';
    this.touchHintRightEl.style.opacity = '0';
  }
}
