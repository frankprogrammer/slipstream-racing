import * as THREE from "three";
import {
  CONFIG,
  displaySpeedKmhFromScroll,
  formatRaceCountdownMs,
  hexToCss,
  rgbaFromHex,
} from "./config";
import { GameState } from "./engine/GameState";
import { LaneSystem } from "./engine/LaneSystem";
import { RoadManager } from "./engine/RoadManager";
import { PlayerTaxi } from "./engine/PlayerTaxi";
import { TrafficSpawner, type TrafficCollisionBounds } from "./engine/TrafficSpawner";
import { CollisionSystem } from "./engine/CollisionSystem";
import { CameraController } from "./engine/CameraController";
import { SlipstreamWindSystem } from "./engine/SlipstreamWindSystem";
import { SlingshotTrailSystem } from "./engine/SlingshotTrailSystem";
import { SlipstreamActivateBurst } from "./engine/SlipstreamActivateBurst";
import { OvertakeSlipstreamActivateBurstPool } from "./engine/OvertakeSlipstreamActivateBurstPool";
import { SlipstreamZone } from "./engine/SlipstreamZone";
import { ChainManager } from "./engine/ChainManager";
import { computeRunScore } from "./engine/ScoreManager";
import {
  GameOverScreen,
  type GameOverReason,
} from "./ui/GameOverScreen";
import { HUD } from "./ui/HUD";
import { GameAudio } from "./engine/GameAudio";
import { tryEnterFullscreenOnce } from "./mobileFullscreen";

function easeInCubic(t: number): number {
  return t ** 3;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

/**
 * Slipstream: Grand Prix — Main entry
 *
 * Phase 2+: slipstream, chain, score, HUD, game over. Direct render (no bloom) — daytime F1 look.
 */

function applyF1CssVariables(): void {
  const p = CONFIG.PALETTE;
  const r = document.documentElement;
  r.style.setProperty("--f1-primary", hexToCss(p.NEON_PINK));
  /** Same telemetry cyan as screen-space hood draft bar fill (super mode). */
  r.style.setProperty("--f1-cyan", hexToCss(p.SLIPSTREAM_WIND));
  r.style.setProperty(
    "--f1-countdown-glow",
    rgbaFromHex(p.SLIPSTREAM_WIND, 0.55),
  );
  r.style.setProperty("--f1-blue", hexToCss(p.NEON_PURPLE));
  r.style.setProperty("--f1-warm", hexToCss(p.NEON_ORANGE));
  r.style.setProperty("--f1-ui-text", hexToCss(p.UI_TEXT));
  r.style.setProperty("--f1-ui-dim", hexToCss(p.UI_DIM));
  r.style.setProperty("--f1-bg-app", hexToCss(p.UI_BG_APP));
  r.style.setProperty("--f1-gameover-scrim", rgbaFromHex(p.UI_BG_APP, 0.92));
  r.style.setProperty(
    "--f1-flash-tint",
    rgbaFromHex(p.SCREEN_FLASH_TINT, 0.22),
  );
  r.style.setProperty(
    "--f1-flash-perfect",
    rgbaFromHex(p.SCREEN_FLASH_TINT, 0.4),
  );
  r.style.setProperty("--f1-retry-hover", rgbaFromHex(p.NEON_PINK, 0.12));
  r.style.setProperty("--f1-retry-glow", rgbaFromHex(p.NEON_PINK, 0.35));
  r.style.setProperty("--f1-milestone-glow", rgbaFromHex(p.NEON_PINK, 0.55));
  r.style.setProperty(
    "--f1-milestone-cyan",
    rgbaFromHex(p.SLIPSTREAM_WIND, 0.2),
  );
  r.style.setProperty("--f1-perfect-glow-1", rgbaFromHex(p.NEON_PINK, 0.9));
  r.style.setProperty("--f1-perfect-glow-2", rgbaFromHex(p.NEON_PINK, 0.45));
  r.style.setProperty(
    "--f1-perfect-cyan",
    rgbaFromHex(p.SLIPSTREAM_WIND, 0.25),
  );
  r.style.setProperty(
    "--f1-perfect-inset",
    rgbaFromHex(p.SLIPSTREAM_WIND, 0.1),
  );
  r.style.setProperty("--f1-race-timer-color", hexToCss(p.UI_TEXT));
}
applyF1CssVariables();

const container = document.getElementById("game-container")!;
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = CONFIG.TONE_MAPPING_EXPOSURE;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.prepend(renderer.domElement);

const scene = new THREE.Scene();
const skyFogColorBase = new THREE.Color(CONFIG.PALETTE.SKY);
const skyFogColorSuper = new THREE.Color(CONFIG.PALETTE.SUPER_SLIPSTREAM_SKY);
const sceneSkyColor = skyFogColorBase.clone();
scene.background = sceneSkyColor;
scene.fog = new THREE.Fog(
  sceneSkyColor.getHex(),
  CONFIG.FOG_NEAR,
  CONFIG.FOG_FAR,
);
/** 0 = base sky/fog, 1 = super-slipstream red. */
let skyFogBlend = 0;

function applySkyFogFromBlend(): void {
  sceneSkyColor.lerpColors(skyFogColorBase, skyFogColorSuper, skyFogBlend);
  const fog = scene.fog;
  if (fog instanceof THREE.Fog) {
    fog.color.copy(sceneSkyColor);
  }
}

const camera = new THREE.PerspectiveCamera(
  CONFIG.CAMERA_FOV_BASE,
  window.innerWidth / window.innerHeight,
  0.1,
  200,
);

const ambientLight = new THREE.AmbientLight(
  CONFIG.PALETTE.AMBIENT_LIGHT,
  CONFIG.AMBIENT_LIGHT_INTENSITY,
);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(
  CONFIG.PALETTE.HEMISPHERE_SKY,
  CONFIG.PALETTE.HEMISPHERE_GROUND,
  CONFIG.HEMISPHERE_LIGHT_INTENSITY,
);
hemiLight.position.set(0, 40, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(
  CONFIG.PALETTE.DIRECTIONAL_LIGHT,
  CONFIG.DIRECTIONAL_LIGHT_INTENSITY,
);
dirLight.position.set(
  CONFIG.DIRECTIONAL_LIGHT_POSITION[0],
  CONFIG.DIRECTIONAL_LIGHT_POSITION[1],
  CONFIG.DIRECTIONAL_LIGHT_POSITION[2],
);
dirLight.castShadow = false;
scene.add(dirLight);

function syncRendererToViewport(): void {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

window.addEventListener("resize", syncRendererToViewport);
window.visualViewport?.addEventListener("resize", syncRendererToViewport);

const gameState = new GameState();
const laneSystem = new LaneSystem(container);
let playerTaxi!: PlayerTaxi;
let roadManager: RoadManager | undefined;
let trafficSpawner!: TrafficSpawner;
const collisionSystem = new CollisionSystem();
const cameraController = new CameraController(camera);
const slipstreamZone = new SlipstreamZone();
const chainManager = new ChainManager();
const hud = new HUD();
const gameOverScreen = new GameOverScreen();
const slipstreamWind = new SlipstreamWindSystem();
const slingshotTrail = new SlingshotTrailSystem();
const slipstreamActivateBurst = new SlipstreamActivateBurst();
const overtakeSlipstreamActivateBurst = new OvertakeSlipstreamActivateBurstPool();
const gameAudio = new GameAudio();
const touchHintLeftWorld = new THREE.Vector3();
const touchHintRightWorld = new THREE.Vector3();

function onUserGestureAudio(): void {
  tryEnterFullscreenOnce(container);
  gameAudio.unlock();
}

container.addEventListener("pointerdown", onUserGestureAudio);
/** iOS Safari: `touchstart` is the most reliable gesture for Web Audio + media unlock. */
container.addEventListener("touchstart", onUserGestureAudio, { passive: true });

let appFocused = document.visibilityState === "visible";
let needsDeltaReset = false;
gameAudio.setAppFocused(appFocused);

function refreshAppFocus(): void {
  const focused = document.visibilityState === "visible";
  if (focused === appFocused) return;
  appFocused = focused;
  gameAudio.setAppFocused(appFocused);
  if (appFocused) {
    // Drop stale elapsed time on next frame so gameplay doesn't jump on resume.
    needsDeltaReset = true;
    /** Tab / app resume: context often stays suspended until next tap — try resume anyway. */
    gameAudio.resumeAudioGraph();
  }
}

document.addEventListener("visibilitychange", refreshAppFocus);
window.addEventListener("focus", refreshAppFocus);
window.addEventListener("blur", refreshAppFocus);
/** bfcache restore — same suspended-audio issue as tab switch. */
window.addEventListener("pageshow", (ev) => {
  if (ev.persisted) {
    gameAudio.setAppFocused(document.visibilityState === "visible");
    gameAudio.resumeAudioGraph();
  }
});

let runTimeMs = 0;
let distanceUnits = 0;
/** Successful slipstream (slingshot) count this run — used for score + game-over stats. */
let slipstreamsActivated = 0;
/** Player world X when the current draft started (entered slipstream) — “+N sec” float spawn X. */
let slipstreamBonusSpawnWorldX: number | null = null;
/** Reused for slipstream zone label world position when spawning the “+N sec” screen float. */
const slipstreamBonusLabelWorld = new THREE.Vector3();
let prevSlipInZone = false;
let burstRemainMs = 0;
/** Extra base scroll from successful slipstreams this run (before burst). */
let slingshotBaseBonus = 0;
/** Charge/fuel meter (can exceed 1 internally while super is being extended). */
let superSlipstreamMeter = 0;
/** Active super-slipstream boost window (ms). */
let superSlipstreamRemainMs = 0;
/** Remaining race time (ms); at 0 → game over. */
let raceRemainMs: number = CONFIG.RACE_COUNTDOWN_START_MS;
/** False until intro Z tween finishes; blocks scroll, input, and collision. */
let runGameplayReady = false;
/** Accumulated real-time (ms) for intro tween — uses `delta`, not wall clock, so the first frame is always t≈0. */
let introElapsedMs = 0;
/** Avoid re-fitting scale every frame when only the timer string changes (reduces jitter). */
let prevSpeedHudVisible = false;
/** Full-screen 3–2–1–GO! before intro; gameplay frozen while true. */
let preRaceCountdownActive = false;
let preRaceStep = 0;
let preRaceStepAccMs = 0;
/** Set immediately before `transition("gameover")` — read in `onChange` for UI + audio. */
let pendingGameOverReason: GameOverReason | null = null;
/** In slipstream while hood bar is not drawable (projection); used to reset travel when bar reappears. */
let draftBarProjMissMs = 0;
/** True while crash tumble animation is playing before game over. */
let crashAnimActive = false;
let crashAnimElapsedMs = 0;
let crashAnimStartScrollPerFrame: number = CONFIG.BASE_SCROLL_SPEED;
const crashLinearVel = new THREE.Vector3();
const crashAngularVel = new THREE.Vector3();
let crashTargetGroup: THREE.Group | null = null;
const crashTargetLinearVel = new THREE.Vector3();
const crashTargetAngularVel = new THREE.Vector3();
const crashCameraPos = new THREE.Vector3();
const crashCameraQuat = new THREE.Quaternion();
const crashHalfExtents = new THREE.Vector3(
  CONFIG.TAXI_DIMENSIONS.width * 0.5,
  CONFIG.TAXI_DIMENSIONS.height * 0.5,
  CONFIG.TAXI_DIMENSIONS.length * 0.5,
);
const crashAxisX = new THREE.Vector3();
const crashAxisY = new THREE.Vector3();
const crashAxisZ = new THREE.Vector3();

const PRE_RACE_COUNTDOWN_LABELS = ["3", "2", "1", "GO!"] as const;

function resetGame(): void {
  gameState.reset();
  laneSystem.reset();
  laneSystem.enabled = false;
  runGameplayReady = false;
  introElapsedMs = 0;
  pendingGameOverReason = null;
  runTimeMs = 0;
  distanceUnits = 0;
  slipstreamsActivated = 0;
  burstRemainMs = 0;
  slingshotBaseBonus = 0;
  superSlipstreamMeter = 0;
  superSlipstreamRemainMs = 0;
  skyFogBlend = 0;
  applySkyFogFromBlend();
  raceRemainMs = CONFIG.RACE_COUNTDOWN_START_MS;
  roadManager?.reset();
  trafficSpawner.reset();
  slipstreamWind.reset();
  playerTaxi.reset();
  slingshotTrail.reset();
  slipstreamActivateBurst.reset();
  overtakeSlipstreamActivateBurst.reset();
  slipstreamZone.reset();
  chainManager.reset();
  slipstreamBonusSpawnWorldX = null;
  prevSlipInZone = false;
  draftBarProjMissMs = 0;
  crashAnimActive = false;
  crashAnimElapsedMs = 0;
  crashAnimStartScrollPerFrame = CONFIG.BASE_SCROLL_SPEED;
  crashLinearVel.set(0, 0, 0);
  crashAngularVel.set(0, 0, 0);
  crashTargetGroup = null;
  crashTargetLinearVel.set(0, 0, 0);
  crashTargetAngularVel.set(0, 0, 0);
  crashCameraPos.set(0, 0, 0);
  crashCameraQuat.identity();
  hud.reset();
  prevSpeedHudVisible = false;
  const nowMs = performance.now();
  const x = laneSystem.getLaneX(nowMs);
  const roll = laneSystem.getBodyRollRad(nowMs);
  const steer = laneSystem.getWheelSteerRad(nowMs);
  playerTaxi.applyLaneVisuals(x, roll, steer);
  // Frame the camera at the gameplay start position, not the intro offset position.
  // This allows the taxi to actually travel up from off-screen during the intro tween.
  const introZ = playerTaxi.group.position.z;
  playerTaxi.group.position.z = CONFIG.TAXI_POSITION_Z;
  cameraController.snap(playerTaxi);
  playerTaxi.group.position.z = introZ;
  gameOverScreen.hide();
  preRaceCountdownActive = true;
  preRaceStep = 0;
  preRaceStepAccMs = 0;
  if (preRaceCountdownEl) {
    preRaceCountdownEl.textContent = PRE_RACE_COUNTDOWN_LABELS[0]!;
    preRaceCountdownEl.classList.add("visible");
    preRaceCountdownEl.setAttribute("aria-hidden", "false");
  }
}

function beginCrashAnimation(
  initialScrollPerFrame: number,
  hit: TrafficCollisionBounds | null,
): void {
  if (crashAnimActive) return;
  crashAnimActive = true;
  crashAnimElapsedMs = 0;
  crashAnimStartScrollPerFrame = initialScrollPerFrame;
  laneSystem.enabled = false;
  crashCameraPos.copy(camera.position);
  crashCameraQuat.copy(camera.quaternion);

  // Push away from the center and tumble end-over-end.
  const side = playerTaxi.group.position.x >= 0 ? -1 : 1;
  crashLinearVel.set(
    side * CONFIG.CRASH_TUMBLE_LATERAL_SPEED,
    CONFIG.CRASH_TUMBLE_UP_SPEED,
    -CONFIG.CRASH_TUMBLE_FORWARD_SPEED,
  );
  const spinFlip = Math.random() < 0.5 ? -1 : 1;
  crashAngularVel.set(
    CONFIG.CRASH_TUMBLE_SPIN_X * spinFlip,
    CONFIG.CRASH_TUMBLE_SPIN_Y * side,
    CONFIG.CRASH_TUMBLE_SPIN_Z * side,
  );

  crashTargetGroup = hit
    ? trafficSpawner.getPoolCarGroup(hit.slotIndex)
    : null;
  if (crashTargetGroup) {
    const away =
      Math.sign(crashTargetGroup.position.x - playerTaxi.group.position.x) ||
      (Math.random() < 0.5 ? -1 : 1);
    crashTargetLinearVel.set(
      away * CONFIG.CRASH_TUMBLE_LATERAL_SPEED * 0.7,
      CONFIG.CRASH_TUMBLE_UP_SPEED * 0.75,
      -CONFIG.CRASH_TUMBLE_FORWARD_SPEED * 0.6,
    );
    crashTargetAngularVel.set(
      -CONFIG.CRASH_TUMBLE_SPIN_X * 0.75,
      CONFIG.CRASH_TUMBLE_SPIN_Y * away * 1.15,
      -CONFIG.CRASH_TUMBLE_SPIN_Z * away * 0.9,
    );
  }
}

function updateCrashBody(
  group: THREE.Group,
  linearVel: THREE.Vector3,
  angularVel: THREE.Vector3,
  delta: number,
): void {
  group.position.addScaledVector(linearVel, delta);
  linearVel.y -= CONFIG.CRASH_TUMBLE_GRAVITY * delta;
  const linDrag = Math.pow(CONFIG.CRASH_TUMBLE_LINEAR_DRAG_PER_60FPS, delta * 60);
  linearVel.multiplyScalar(linDrag);

  const angDrag = Math.pow(CONFIG.CRASH_TUMBLE_ANGULAR_DRAG_PER_60FPS, delta * 60);
  angularVel.multiplyScalar(angDrag);
  group.rotation.x += angularVel.x * delta;
  group.rotation.y += angularVel.y * delta;
  group.rotation.z += angularVel.z * delta;

  crashAxisX.set(1, 0, 0).applyQuaternion(group.quaternion);
  crashAxisY.set(0, 1, 0).applyQuaternion(group.quaternion);
  crashAxisZ.set(0, 0, 1).applyQuaternion(group.quaternion);
  const rotatedHalfHeight =
    Math.abs(crashAxisX.y) * crashHalfExtents.x +
    Math.abs(crashAxisY.y) * crashHalfExtents.y +
    Math.abs(crashAxisZ.y) * crashHalfExtents.z;
  const minCenterY = Math.max(
    CONFIG.CRASH_TUMBLE_MIN_CENTER_Y,
    rotatedHalfHeight + CONFIG.CRASH_TUMBLE_GROUND_CLEARANCE_Y,
  );
  if (group.position.y < minCenterY) {
    group.position.y = minCenterY;
    if (linearVel.y < 0) {
      linearVel.y = -linearVel.y * CONFIG.CRASH_TUMBLE_GROUND_BOUNCE;
    }
  }
}

function updateCrashAnimation(delta: number, nowMs: number): boolean {
  crashAnimElapsedMs += delta * 1000;
  const t = THREE.MathUtils.clamp(
    crashAnimElapsedMs / CONFIG.CRASH_TUMBLE_DURATION_MS,
    0,
    1,
  );
  const scrollPerFrame =
    crashAnimStartScrollPerFrame * (1 - easeOutCubic(t));
  const scrollDz = scrollPerFrame * 60 * delta;

  roadManager?.update(scrollDz);

  updateCrashBody(playerTaxi.group, crashLinearVel, crashAngularVel, delta);
  if (crashTargetGroup) {
    updateCrashBody(
      crashTargetGroup,
      crashTargetLinearVel,
      crashTargetAngularVel,
      delta,
    );
  }

  slipstreamActivateBurst.setBurstWindowActive(false);
  slingshotTrail.setBoostActive(false);
  slingshotTrail.update(delta, scrollDz, playerTaxi);
  camera.position.copy(crashCameraPos);
  camera.quaternion.copy(crashCameraQuat);
  camera.updateMatrixWorld(true);
  playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);
  playerTaxi.worldHud.setSpeedKmh(displaySpeedKmhFromScroll(scrollPerFrame));

  return crashAnimElapsedMs >= CONFIG.CRASH_TUMBLE_DURATION_MS;
}

gameOverScreen.onRetry(() => {
  resetGame();
});

gameState.onChange((state) => {
  if (state === "gameover") {
    preRaceCountdownActive = false;
    if (preRaceCountdownEl) {
      preRaceCountdownEl.classList.remove("visible");
      preRaceCountdownEl.textContent = "";
      preRaceCountdownEl.setAttribute("aria-hidden", "true");
    }
    laneSystem.enabled = false;
    const reason = pendingGameOverReason ?? "crash";
    pendingGameOverReason = null;
    if (reason === "crash") {
      gameAudio.playCrash();
    }
    const score = computeRunScore(
      distanceUnits,
      runTimeMs,
      slipstreamsActivated,
    );
    gameOverScreen.show(
      score,
      distanceUnits,
      runTimeMs,
      slipstreamsActivated,
      reason,
    );
  }
});

const clock = new THREE.Clock();

const showFps = false;
let fpsEl: HTMLElement | null = null;
let fpsAcc = 0;
let fpsFrames = 0;
if (showFps) {
  fpsEl = document.createElement("div");
  fpsEl.style.cssText = [
    "position:absolute",
    "left:8px",
    "bottom:8px",
    "z-index:100",
    "font:12px monospace",
    `color:${hexToCss(CONFIG.PALETTE.FPS_TELEMETRY)}`,
    `background:${rgbaFromHex(CONFIG.PALETTE.UI_BG_APP, 0.55)}`,
    "padding:4px 8px",
    "pointer-events:none",
  ].join(";");
  container.appendChild(fpsEl);
}

const speedHudEl = document.getElementById("speed-hud");
const speedTextWrapEl = document.getElementById("speed-text-wrap");
const speedTextEl = document.getElementById("speed-text");
const preRaceCountdownEl = document.getElementById("pre-race-countdown");

function fitSpeedHudText(): void {
  if (!speedTextWrapEl || !speedTextEl) return;
  speedTextEl.style.transform = "scale(1)";
  const maxW = speedTextWrapEl.clientWidth;
  if (maxW <= 0) return;
  const w = speedTextEl.scrollWidth;
  if (w <= maxW) return;
  speedTextEl.style.transform = `scale(${maxW / w})`;
}

window.addEventListener("resize", () => {
  if (speedHudEl?.style.opacity === "1") {
    requestAnimationFrame(() => fitSpeedHudText());
  }
});

function animate(): void {
  requestAnimationFrame(animate);
  if (!appFocused) return;
  if (needsDeltaReset) {
    clock.getDelta();
    needsDeltaReset = false;
  }
  const delta = clock.getDelta();
  const nowMs = performance.now();

  let scrollForAudio: number = CONFIG.BASE_SCROLL_SPEED;
  let slipInZone = false;
  let slipMeter = 0;
  let audioBurst = false;

  if (gameState.isPlaying) {
    if (preRaceCountdownActive) {
      const stepMs = CONFIG.PRE_RACE_COUNTDOWN_STEP_MS;
      preRaceStepAccMs += delta * 1000;
      while (
        preRaceStepAccMs >= stepMs &&
        preRaceStep < PRE_RACE_COUNTDOWN_LABELS.length
      ) {
        preRaceStepAccMs -= stepMs;
        preRaceStep += 1;
        if (preRaceStep < PRE_RACE_COUNTDOWN_LABELS.length && preRaceCountdownEl) {
          preRaceCountdownEl.textContent =
            PRE_RACE_COUNTDOWN_LABELS[preRaceStep]!;
        }
      }
      if (preRaceStep >= PRE_RACE_COUNTDOWN_LABELS.length) {
        preRaceCountdownActive = false;
        if (preRaceCountdownEl) {
          preRaceCountdownEl.classList.remove("visible");
          preRaceCountdownEl.textContent = "";
          preRaceCountdownEl.setAttribute("aria-hidden", "true");
        }
        introElapsedMs = 0;
      }

      const zIntro =
        CONFIG.TAXI_POSITION_Z + CONFIG.TAXI_INTRO_START_Z_OFFSET;
      playerTaxi.group.position.z = zIntro;

      const laneX = laneSystem.getLaneX(nowMs);
      const roll = laneSystem.getBodyRollRad(nowMs);
      const steer = laneSystem.getWheelSteerRad(nowMs);
      playerTaxi.applyLaneVisuals(laneX, roll, steer);
      slingshotTrail.setBoostActive(false);
      slingshotTrail.update(delta, 0, playerTaxi);
      playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);

      scrollForAudio = CONFIG.BASE_SCROLL_SPEED;
      playerTaxi.worldHud.setSpeedKmh(
        displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED),
      );
    } else if (!runGameplayReady) {
      const dur = CONFIG.TAXI_INTRO_DURATION_MS;
      introElapsedMs += delta * 1000;
      const t = Math.min(1, introElapsedMs / dur);
      const e = easeInCubic(t);
      const z0 = CONFIG.TAXI_POSITION_Z + CONFIG.TAXI_INTRO_START_Z_OFFSET;
      const z1 = CONFIG.TAXI_POSITION_Z;
      playerTaxi.group.position.z = z0 + (z1 - z0) * e;
      if (t >= 1) {
        runGameplayReady = true;
        laneSystem.enabled = true;
        playerTaxi.group.position.z = z1;
      }

      const laneX = laneSystem.getLaneX(nowMs);
      const roll = laneSystem.getBodyRollRad(nowMs);
      const steer = laneSystem.getWheelSteerRad(nowMs);
      playerTaxi.applyLaneVisuals(laneX, roll, steer);
      slingshotTrail.setBoostActive(false);
      slingshotTrail.update(delta, 0, playerTaxi);
      playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);

      scrollForAudio = CONFIG.BASE_SCROLL_SPEED;
      playerTaxi.worldHud.setSpeedKmh(
        displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED),
      );
    } else {
      if (crashAnimActive) {
        const done = updateCrashAnimation(delta, nowMs);
        scrollForAudio = CONFIG.BASE_SCROLL_SPEED;
        slipInZone = false;
        slipMeter = 0;
        audioBurst = false;
        prevSlipInZone = false;
        if (done) {
          crashAnimActive = false;
          pendingGameOverReason = "crash";
          gameState.transition("gameover");
        }
      } else {
      runTimeMs += delta * 1000;
      burstRemainMs = Math.max(0, burstRemainMs - delta * 1000);
      if (superSlipstreamRemainMs > 0) {
        superSlipstreamRemainMs = Math.max(
          0,
          superSlipstreamRemainMs - delta * 1000,
        );
        superSlipstreamMeter =
          superSlipstreamRemainMs / CONFIG.SUPER_SLIPSTREAM_DURATION_MS;
      }

      raceRemainMs = Math.max(0, raceRemainMs - delta * 1000);
      if (raceRemainMs <= 0) {
        pendingGameOverReason = "timeout";
        gameState.transition("gameover");
      }

      if (!gameState.isPlaying) {
        scrollForAudio = CONFIG.BASE_SCROLL_SPEED;
        slipInZone = false;
        slipMeter = 0;
        audioBurst = false;
      } else {
      const base = CONFIG.BASE_SCROLL_SPEED;
      const maxScroll = CONFIG.MAX_SCROLL_SPEED;
      const headroom = Math.max(0, maxScroll - base);
      slingshotBaseBonus = Math.max(
        0,
        slingshotBaseBonus - CONFIG.BASE_SPEED_BONUS_DECAY_PER_SECOND * delta,
      );
      slingshotBaseBonus = Math.min(slingshotBaseBonus, headroom);
      const baseScroll = Math.min(base + slingshotBaseBonus, maxScroll);
      const superSlipstreamBoost =
        superSlipstreamRemainMs > 0 ? CONFIG.SUPER_SLIPSTREAM_SPEED_BOOST : 0;
      const scrollPerFrame = baseScroll + superSlipstreamBoost;
      const scrollDz = scrollPerFrame * 60 * delta;

      roadManager?.update(scrollDz);
      trafficSpawner.update(
        delta,
        runTimeMs,
        scrollPerFrame,
        laneSystem.laneIndex,
        superSlipstreamRemainMs > 0,
      );
      const laneX = laneSystem.getLaneX(nowMs);
      const roll = laneSystem.getBodyRollRad(nowMs);
      const steer = laneSystem.getWheelSteerRad(nowMs);
      playerTaxi.applyLaneVisuals(laneX, roll, steer);
      const slip = slipstreamZone.update(
        delta,
        scrollPerFrame,
        playerTaxi,
        trafficSpawner,
      );
      chainManager.tick(nowMs, slip.inZone);

      if (slip.inZone && !prevSlipInZone) {
        slipstreamBonusSpawnWorldX = playerTaxi.group.position.x;
      }
      if (!slip.inZone && prevSlipInZone && !slip.slingshotFired) {
        slipstreamBonusSpawnWorldX = null;
      }

      if (slip.slingshotFired) {
        const wasSuperActive = superSlipstreamRemainMs > 0;
        raceRemainMs += wasSuperActive
          ? CONFIG.RACE_SLIPSTREAM_TIME_BONUS_MS_SUPER
          : CONFIG.RACE_SLIPSTREAM_TIME_BONUS_MS_NORMAL;
        slipstreamsActivated += 1;
        slingshotBaseBonus += CONFIG.SLINGSHOT_BASE_SPEED_INCREMENT;
        slingshotBaseBonus = Math.min(slingshotBaseBonus, headroom);
        const superDuration = CONFIG.SUPER_SLIPSTREAM_DURATION_MS;
        const superAddMs =
          CONFIG.SUPER_SLIPSTREAM_METER_PER_SLINGSHOT * superDuration;
        if (superSlipstreamRemainMs > 0) {
          superSlipstreamRemainMs += superAddMs;
          superSlipstreamMeter = superSlipstreamRemainMs / superDuration;
        } else {
          superSlipstreamMeter += CONFIG.SUPER_SLIPSTREAM_METER_PER_SLINGSHOT;
          if (superSlipstreamMeter >= 1) {
            // Activation starts with a full meter and then drains over time.
            superSlipstreamRemainMs = superSlipstreamMeter * superDuration;
          }
        }
        const superActivatedThisFrame =
          !wasSuperActive && superSlipstreamRemainMs > 0;
        burstRemainMs = CONFIG.SLINGSHOT_BURST_DURATION;
        cameraController.triggerSlipstreamShake(
          superActivatedThisFrame
            ? CONFIG.SUPER_SLIPSTREAM_CAMERA_SHAKE_INTENSITY_MUL
            : 1,
        );
        slipstreamActivateBurst.burst();
        gameAudio.playSlingshot();
        const milestone = chainManager.onSlingshot(nowMs);
        if (milestone !== null) {
          playerTaxi.onChainMilestone(milestone, nowMs);
          gameAudio.playMilestone(milestone);
        }
        if (milestone === 10) {
          hud.flashScreenPerfect();
        }

        const slipTarget = slip.slingshotTarget;
        let bonusLabelWorld: THREE.Vector3 | null = null;
        if (
          slipTarget &&
          trafficSpawner.getSlipstreamTimeBonusWorldPosition(
            slipTarget.slotIndex,
            slipstreamBonusLabelWorld,
          )
        ) {
          bonusLabelWorld = slipstreamBonusLabelWorld;
        }

        const bonusSpawnX =
          slipstreamBonusSpawnWorldX ?? playerTaxi.group.position.x;
        slipstreamBonusSpawnWorldX = null;
        hud.spawnRaceTimeBonusFloat(
          wasSuperActive ? 2 : 1,
          camera,
          container,
          speedHudEl,
          playerTaxi,
          bonusSpawnX,
          bonusLabelWorld,
        );
        trafficSpawner.markSlipstreamConsumed(slipTarget);
      }

      playerTaxi.tickRoofLight(nowMs, slip.inZone, chainManager.chain);

      distanceUnits += scrollDz;

      playerTaxi.worldHud.setSpeedKmh(
        displaySpeedKmhFromScroll(scrollPerFrame),
      );

      cameraController.update(
        playerTaxi,
        delta,
        superSlipstreamRemainMs > 0,
      );

      const hit = collisionSystem.checkHit(playerTaxi, trafficSpawner);
      if (hit) {
        beginCrashAnimation(scrollPerFrame, hit);
      }

      slipstreamActivateBurst.setBurstWindowActive(burstRemainMs > 0);
      slingshotTrail.setBoostActive(superSlipstreamRemainMs > 0);
      slingshotTrail.update(delta, scrollDz, playerTaxi);

      scrollForAudio = scrollPerFrame;
      slipInZone = slip.inZone;
      slipMeter = slip.meterDisplay;
      audioBurst = burstRemainMs > 0;
      prevSlipInZone = slip.inZone;
      }
      }
    }
  } else {
    slipstreamActivateBurst.setBurstWindowActive(false);
    slingshotTrail.setBoostActive(false);
    slingshotTrail.update(delta, 0, playerTaxi);
    cameraController.update(playerTaxi, delta, false);
    playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);
  }

  const telemetrySuper =
    gameState.isPlaying && runGameplayReady && superSlipstreamRemainMs > 0;

  hud.updateSuperSlipstreamMeter(
    superSlipstreamMeter,
    superSlipstreamRemainMs > 0,
    gameState.isPlaying && runGameplayReady,
  );

  hud.updateRaceTimeBonusFloats();

  const draftBarVisible =
    gameState.isPlaying &&
    runGameplayReady &&
    !preRaceCountdownActive &&
    slipInZone;

  let draftDisplayed = hud.updateDraftBarScreen(
    slipMeter,
    draftBarVisible,
    telemetrySuper,
    camera,
    container,
    playerTaxi,
  );

  if (draftBarVisible && !draftDisplayed) {
    draftBarProjMissMs += delta * 1000;
  } else if (!draftBarVisible) {
    draftBarProjMissMs = 0;
  } else {
    if (
      draftBarProjMissMs >= CONFIG.DRAFT_BAR_RESET_TRAVEL_AFTER_HIDDEN_MS
    ) {
      slipstreamZone.resetDraftTravelBaseline();
      slipMeter = 0;
      draftDisplayed = hud.updateDraftBarScreen(
        slipMeter,
        draftBarVisible,
        telemetrySuper,
        camera,
        container,
        playerTaxi,
      );
    }
    draftBarProjMissMs = 0;
  }

  if (speedHudEl && speedTextEl) {
    const visible = gameState.isPlaying && runGameplayReady;
    if (!visible) {
      speedHudEl.style.opacity = "0";
    } else {
      speedTextEl.textContent = formatRaceCountdownMs(raceRemainMs);
      speedHudEl.style.opacity = "1";
      speedTextEl.style.color = hexToCss(CONFIG.PALETTE.UI_TEXT);
      if (!prevSpeedHudVisible) {
        requestAnimationFrame(() => fitSpeedHudText());
      }
    }
    prevSpeedHudVisible = visible;
  }

  slipstreamWind.update(
    delta,
    gameState.isPlaying && runGameplayReady,
    trafficSpawner,
  );
  slipstreamActivateBurst.update(delta);
  overtakeSlipstreamActivateBurst.update(
    delta,
    gameState.isPlaying && runGameplayReady,
    trafficSpawner,
  );

  gameAudio.update(delta, {
    playing: gameState.isPlaying && runGameplayReady,
    scrollPerFrame: scrollForAudio,
    inDraft: slipInZone,
    draftMeter: slipMeter,
    burstActive: audioBurst,
    chain: chainManager.chain,
    listenerX: playerTaxi.group.position.x,
    listenerY: playerTaxi.group.position.y,
    listenerZ: playerTaxi.group.position.z,
  });

  gameAudio.updateTrafficEnginePositions(
    gameState.isPlaying && runGameplayReady,
    (visit) => {
      trafficSpawner.forEachPoolSlot((i, active, cx, cy, cz, speedMul) => {
        visit(i, active, cx, cy, cz, speedMul);
      });
    },
    delta,
  );

  const hintZ =
    playerTaxi.group.position.z - CONFIG.TAXI_DIMENSIONS.length * 0.5;
  const hintY = 0.28;
  touchHintLeftWorld.set(-CONFIG.LANE_WIDTH, hintY, hintZ);
  touchHintRightWorld.set(CONFIG.LANE_WIDTH, hintY, hintZ);
  hud.updateTouchHints(
    runTimeMs,
    gameState.isPlaying && runGameplayReady,
    camera,
    container,
    touchHintLeftWorld,
    touchHintRightWorld,
  );

  if (showFps && fpsEl) {
    fpsAcc += delta;
    fpsFrames += 1;
    if (fpsAcc >= 0.5) {
      const fps = Math.round(fpsFrames / fpsAcc);
      fpsEl.textContent = `${fps} fps`;
      fpsAcc = 0;
      fpsFrames = 0;
    }
  }

  const superSkyFogActive =
    gameState.isPlaying &&
    runGameplayReady &&
    superSlipstreamRemainMs > 0;
  const targetSkyFogBlend = superSkyFogActive ? 1 : 0;
  const skyBr = CONFIG.SUPER_SLIPSTREAM_SKY_BLEND_RATE;
  skyFogBlend += (targetSkyFogBlend - skyFogBlend) * Math.min(1, delta * skyBr);
  applySkyFogFromBlend();

  renderer.render(scene, camera);
}

void (async () => {
  playerTaxi = await PlayerTaxi.create();
  roadManager = await RoadManager.create(CONFIG.TAXI_POSITION_Z);
  trafficSpawner = await TrafficSpawner.create();
  overtakeSlipstreamActivateBurst.attachToTraffic(trafficSpawner);
  scene.add(roadManager.group);
  scene.add(trafficSpawner.group);
  scene.add(slipstreamWind.group);
  scene.add(playerTaxi.group);
  scene.add(slingshotTrail.group);
  playerTaxi.group.add(slipstreamActivateBurst.anchor);
  resetGame();
  // First `getDelta()` after load would otherwise equal time since `new Clock()` (async gap) and
  // would instantly complete the intro tween and skew runTime on frame 1.
  clock.getDelta();
  animate();
})();

if (showFps) {
  console.log("Slipstream: Grand Prix — FPS overlay enabled.");
}
