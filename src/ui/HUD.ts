import * as THREE from "three";
import { CONFIG, hexToCss, rgbaFromHex } from "../config";
import type { PlayerTaxi } from "../engine/PlayerTaxi";

/**
 * HUD — HTML/CSS overlay: screen flash + touch hints + super meter.
 * Speed and race timer are separate DOM; speed behind car is `TaxiWorldHud`.
 */
const TOUCH_HINT_BUTTON_PX = 72;

function easeInCubic(t: number): number {
  return t * t * t;
}

type RaceTimeBonusFloat = {
  el: HTMLElement;
  startMs: number;
  durationMs: number;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
};

export class HUD {
  private flashEl: HTMLElement;
  private touchHintLeftEl: HTMLElement;
  private touchHintRightEl: HTMLElement;
  private superSlipstreamWrapEl: HTMLElement;
  private superSlipstreamFillEl: HTMLElement;
  private perfectFlashTimer = 0;
  private readonly tmpProj = new THREE.Vector3();
  private readonly tmpWorld = new THREE.Vector3();
  private readonly raceTimeBonusFloats: RaceTimeBonusFloat[] = [];

  constructor() {
    this.flashEl = document.getElementById("screen-flash")!;
    const container = document.getElementById("game-container")!;
    this.touchHintLeftEl = this.buildTouchHint("left");
    this.touchHintRightEl = this.buildTouchHint("right");
    const superMeter = this.buildSuperSlipstreamMeter();
    this.superSlipstreamWrapEl = superMeter.wrap;
    this.superSlipstreamFillEl = superMeter.fill;
    container.append(
      this.touchHintLeftEl,
      this.touchHintRightEl,
      this.superSlipstreamWrapEl,
    );
  }

  private buildTouchHint(direction: "left" | "right"): HTMLElement {
    const el = document.createElement("div");
    const arrow = direction === "left" ? "\u2b05" : "\u27a1";
    el.textContent = arrow;
    el.style.cssText = [
      "position:absolute",
      "left:0",
      "top:0",
      `width:${TOUCH_HINT_BUTTON_PX}px`,
      `height:${TOUCH_HINT_BUTTON_PX}px`,
      "border-radius:9999px",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "font-family:Orbitron, system-ui, sans-serif",
      "font-size:34px",
      "font-weight:900",
      "line-height:1",
      `color:#${CONFIG.PALETTE.UI_TEXT.toString(16).padStart(6, "0")}`,
      `border:4px solid #${CONFIG.PALETTE.NEON_ORANGE.toString(16).padStart(6, "0")}`,
      `background:rgba(${(CONFIG.PALETTE.ROAD_DARK >> 16) & 255},${(CONFIG.PALETTE.ROAD_DARK >> 8) & 255},${CONFIG.PALETTE.ROAD_DARK & 255},0.82)`,
      `box-shadow:0 0 0 2px ${rgbaFromHex(CONFIG.PALETTE.UI_TEXT, 0.18)},0 0 18px #${CONFIG.PALETTE.NEON_ORANGE.toString(16).padStart(6, "0")},0 0 34px #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, "0")}`,
      `text-shadow:0 0 6px #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, "0")},0 0 14px #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, "0")}`,
      "pointer-events:none",
      "opacity:0",
      "z-index:120",
      "transition:opacity 120ms linear",
      "transform:translate(-50%, -50%)",
    ].join(";");
    return el;
  }

  private buildSuperSlipstreamMeter(): {
    wrap: HTMLElement;
    fill: HTMLElement;
  } {
    const wrap = document.createElement("div");
    wrap.style.cssText = [
      "position:absolute",
      "left:50%",
      "bottom:8vh",
      "transform:translateX(-50%)",
      "width:75vw",
      "height:36px",
      "border-radius:9999px",
      `border:2px solid ${rgbaFromHex(CONFIG.PALETTE.UI_TEXT, 0.5)}`,
      `background:${rgbaFromHex(CONFIG.PALETTE.UI_BG_APP, 0.62)}`,
      "box-shadow:0 0 0 2px rgba(0,0,0,0.2), inset 0 0 10px rgba(0,0,0,0.3)",
      "pointer-events:none",
      "overflow:hidden",
      "opacity:0",
      "z-index:121",
      "transition:opacity 140ms linear",
    ].join(";");

    const fill = document.createElement("div");
    fill.style.cssText = [
      "width:0%",
      "height:100%",
      `background:linear-gradient(90deg, #${CONFIG.PALETTE.NEON_BLUE.toString(16).padStart(6, "0")} 0%, #${CONFIG.PALETTE.NEON_PINK.toString(16).padStart(6, "0")} 100%)`,
      "box-shadow:0 0 12px rgba(255,255,255,0.18), inset 0 0 12px rgba(255,255,255,0.24)",
      "transition:width 130ms linear, filter 90ms linear",
      "filter:brightness(1)",
    ].join(";");
    wrap.append(fill);
    return { wrap, fill };
  }

  /** Default pink flash (other milestones / juice). */
  flashScreen(): void {
    this.flashEl.classList.remove("perfect-hit");
    this.flashEl.style.opacity = "1";
    window.setTimeout(() => {
      this.flashEl.style.opacity = "0";
    }, CONFIG.SCREEN_FLASH_DURATION);
  }

  /** Stronger, longer tint for ×10 PERFECT. */
  flashScreenPerfect(): void {
    window.clearTimeout(this.perfectFlashTimer);
    this.flashEl.classList.add("perfect-hit");
    this.flashEl.style.opacity = "1";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        this.flashEl.style.opacity = "0";
      });
    });
    this.perfectFlashTimer = window.setTimeout(() => {
      this.flashEl.classList.remove("perfect-hit");
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
    rightWorldPoint: THREE.Vector3,
  ): void {
    const activeWindowMs = 5000;
    if (!show || runTimeMs >= activeWindowMs) {
      this.touchHintLeftEl.style.opacity = "0";
      this.touchHintRightEl.style.opacity = "0";
      return;
    }

    const rect = container.getBoundingClientRect();
    const half = TOUCH_HINT_BUTTON_PX * 0.5;
    const leftPx = half;
    const rightPx = rect.width - half;

    const left = this.tmpProj.copy(leftWorldPoint).project(camera);
    const leftPy = (-left.y * 0.5 + 0.5) * rect.height;
    const right = this.tmpProj.copy(rightWorldPoint).project(camera);
    const rightPy = (-right.y * 0.5 + 0.5) * rect.height;
    const midPy = (leftPy + rightPy) * 0.5;

    this.touchHintLeftEl.style.left = `${leftPx.toFixed(1)}px`;
    this.touchHintLeftEl.style.top = `${midPy.toFixed(1)}px`;
    this.touchHintRightEl.style.left = `${rightPx.toFixed(1)}px`;
    this.touchHintRightEl.style.top = `${midPy.toFixed(1)}px`;

    const step = Math.floor(runTimeMs / 380) % 2;
    this.touchHintLeftEl.style.opacity = step === 0 ? "1" : "0";
    this.touchHintRightEl.style.opacity = step === 1 ? "1" : "0";
  }

  updateSuperSlipstreamMeter(
    meter01: number,
    active: boolean,
    visible: boolean,
  ): void {
    const meter = THREE.MathUtils.clamp(meter01, 0, 1);
    this.superSlipstreamFillEl.style.width = `${(meter * 100).toFixed(1)}%`;
    this.superSlipstreamFillEl.style.filter = active
      ? "brightness(1.35) saturate(1.2)"
      : "brightness(1)";
    this.superSlipstreamWrapEl.style.opacity = visible ? "1" : "0";
  }

  /**
   * Spawns “+1 sec” / “+2 sec” at the on-screen X from `spawnWorldX` (player world X when draft
   * started), with Y at `RACE_TIME_BONUS_FLOAT_START_Y_FRAC` from the top; tweens toward the timer.
   */
  spawnRaceTimeBonusFloat(
    seconds: 1 | 2,
    camera: THREE.PerspectiveCamera,
    container: HTMLElement,
    timerHudEl: HTMLElement | null,
    telemetrySuperActive: boolean,
    playerTaxi: PlayerTaxi,
    spawnWorldX: number,
  ): void {
    const rect = container.getBoundingClientRect();
    playerTaxi.getFrontBonusWorldPosition(this.tmpWorld);
    this.tmpWorld.x = spawnWorldX;
    const ndc = this.tmpProj.copy(this.tmpWorld).project(camera);
    let x0 = rect.width * 0.5;
    if (
      Number.isFinite(ndc.x) &&
      Number.isFinite(ndc.y) &&
      Number.isFinite(ndc.z)
    ) {
      x0 = (ndc.x * 0.5 + 0.5) * rect.width;
    }
    const y0 = rect.height * CONFIG.RACE_TIME_BONUS_FLOAT_START_Y_FRAC;

    let x1 = rect.width * 0.5;
    let y1 = 36;
    if (timerHudEl) {
      const cr = container.getBoundingClientRect();
      const hr = timerHudEl.getBoundingClientRect();
      x1 = hr.left + hr.width * 0.5 - cr.left;
      y1 = hr.top + hr.height * 0.5 - cr.top;
    }

    const el = document.createElement("div");
    el.textContent = seconds === 2 ? "+2 sec" : "+1 sec";
    el.style.cssText = [
      "position:absolute",
      "left:0",
      "top:0",
      "display:inline-block",
      "white-space:nowrap",
      "pointer-events:none",
      "z-index:125",
      'font-family:"Exo 2",system-ui,sans-serif',
      "font-weight:800",
      "font-size:37.125px",
      "letter-spacing:0.12em",
      "transform:translate(-50%,-50%)",
      "will-change:left,top,opacity",
    ].join(";");
    this.applyTelemetryFloatStyle(el, telemetrySuperActive);
    if (seconds === 2) {
      el.style.fontSize = "40.5px";
    }
    container.appendChild(el);

    this.raceTimeBonusFloats.push({
      el,
      startMs: performance.now(),
      durationMs: CONFIG.RACE_TIME_BONUS_FLOAT_DURATION_MS,
      x0,
      y0,
      x1,
      y1,
    });
  }

  private applyTelemetryFloatStyle(el: HTMLElement, telemetrySuperActive: boolean): void {
    const c = telemetrySuperActive
      ? CONFIG.PALETTE.SLIPSTREAM_WIND
      : CONFIG.PALETTE.RACE_TELEMETRY_RED;
    el.style.color = hexToCss(c);
  }

  updateRaceTimeBonusFloats(telemetrySuperActive: boolean): void {
    const now = performance.now();
    for (let i = this.raceTimeBonusFloats.length - 1; i >= 0; i--) {
      const f = this.raceTimeBonusFloats[i]!;
      const t = (now - f.startMs) / f.durationMs;
      if (t >= 1) {
        f.el.remove();
        this.raceTimeBonusFloats.splice(i, 1);
        continue;
      }
      const e = easeInCubic(t);
      const x = f.x0 + (f.x1 - f.x0) * e;
      const y = f.y0 + (f.y1 - f.y0) * e;
      f.el.style.left = `${x.toFixed(2)}px`;
      f.el.style.top = `${y.toFixed(2)}px`;
      this.applyTelemetryFloatStyle(f.el, telemetrySuperActive);
      const fadeStart = CONFIG.RACE_TIME_BONUS_FLOAT_FADE_START;
      f.el.style.opacity =
        t < fadeStart ? "1" : `${Math.max(0, 1 - (t - fadeStart) / (1 - fadeStart))}`;
    }
  }

  reset(): void {
    for (const f of this.raceTimeBonusFloats) {
      f.el.remove();
    }
    this.raceTimeBonusFloats.length = 0;
    window.clearTimeout(this.perfectFlashTimer);
    this.flashEl.classList.remove("perfect-hit");
    this.flashEl.style.opacity = "0";
    this.touchHintLeftEl.style.opacity = "0";
    this.touchHintRightEl.style.opacity = "0";
    this.superSlipstreamWrapEl.style.opacity = "0";
    this.superSlipstreamFillEl.style.width = "0%";
    this.superSlipstreamFillEl.style.filter = "brightness(1)";
  }
}
