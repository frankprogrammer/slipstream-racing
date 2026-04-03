import * as THREE from "three";
import { CONFIG, hexToCss, rgbaFromHex } from "./config";
import { GameState } from "./engine/GameState";
import { LaneSystem } from "./engine/LaneSystem";
import { RoadManager } from "./engine/RoadManager";
import { PlayerTaxi } from "./engine/PlayerTaxi";
import { TrafficSpawner } from "./engine/TrafficSpawner";
import { CollisionSystem, type CollisionHit } from "./engine/CollisionSystem";
import { CameraController } from "./engine/CameraController";
import { SlipstreamWindSystem } from "./engine/SlipstreamWindSystem";
import { SlingshotTrailSystem } from "./engine/SlingshotTrailSystem";
import { SlipstreamActivateBurst } from "./engine/SlipstreamActivateBurst";
import { SlipstreamZone } from "./engine/SlipstreamZone";
import { ChainManager } from "./engine/ChainManager";
import { ScoreManager } from "./engine/ScoreManager";
import { GameOverScreen } from "./ui/GameOverScreen";
import { HUD } from "./ui/HUD";
import { GameAudio } from "./engine/GameAudio";
import { TireMarkSystem } from "./engine/TireMarkSystem";
import { VehicleExhaustSystem } from "./engine/VehicleExhaustSystem";
import {
  loadPlayerCarGltf,
  cloneMeshMaterialsUnique,
  fitCarToDimensions,
  applyLiveryColors,
} from "./engine/playerCarGlb";

function easeInCubic(t: number): number {
  return t ** 3;
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
  r.style.setProperty("--f1-cyan", hexToCss(p.NEON_BLUE));
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
  r.style.setProperty("--f1-milestone-cyan", rgbaFromHex(p.NEON_BLUE, 0.2));
  r.style.setProperty("--f1-perfect-glow-1", rgbaFromHex(p.NEON_PINK, 0.9));
  r.style.setProperty("--f1-perfect-glow-2", rgbaFromHex(p.NEON_PINK, 0.45));
  r.style.setProperty("--f1-perfect-cyan", rgbaFromHex(p.NEON_BLUE, 0.25));
  r.style.setProperty("--f1-perfect-inset", rgbaFromHex(p.NEON_BLUE, 0.1));
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
scene.background = new THREE.Color(CONFIG.PALETTE.SKY);
scene.fog = new THREE.Fog(CONFIG.PALETTE.SKY, CONFIG.FOG_NEAR, CONFIG.FOG_FAR);

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

window.addEventListener("resize", () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});

const gameState = new GameState();
const laneSystem = new LaneSystem(container);
let playerTaxi!: PlayerTaxi;
let roadManager: RoadManager | undefined;
let trafficSpawner!: TrafficSpawner;
const collisionSystem = new CollisionSystem();
const cameraController = new CameraController(camera);
const slipstreamZone = new SlipstreamZone();
const chainManager = new ChainManager();
const scoreManager = new ScoreManager();
const hud = new HUD();
const gameOverScreen = new GameOverScreen();
const slipstreamWind = new SlipstreamWindSystem();
const slingshotTrail = new SlingshotTrailSystem();
const slipstreamActivateBurst = new SlipstreamActivateBurst();
const gameAudio = new GameAudio();
const tireMarks = new TireMarkSystem();
const vehicleExhaust = new VehicleExhaustSystem();
const trafficAudioBuf: number[] = [];
const milestoneAnchorWorld = new THREE.Vector3();
const touchHintLeftWorld = new THREE.Vector3();
const touchHintRightWorld = new THREE.Vector3();

container.addEventListener("pointerdown", () => gameAudio.unlock(), {
  once: true,
});

laneSystem.onSwitch(() => gameAudio.playLaneSwitch());

const soundToggle = document.getElementById("sound-toggle")!;
const soundIconOn = document.getElementById("sound-icon-on")!;
const soundIconOff = document.getElementById("sound-icon-off")!;
const musicToggle = document.getElementById("music-toggle")!;
const musicIconOn = document.getElementById("music-icon-on")!;
const musicIconOff = document.getElementById("music-icon-off")!;

function syncMusicVisual(muted: boolean): void {
  musicToggle.classList.toggle("muted", muted);
  musicIconOn.style.display = muted ? "none" : "";
  musicIconOff.style.display = muted ? "" : "none";
}

soundToggle.addEventListener("click", () => {
  const muted = !gameAudio.isMuted();
  gameAudio.setMuted(muted);
  soundToggle.classList.toggle("muted", muted);
  soundIconOn.style.display = muted ? "none" : "";
  soundIconOff.style.display = muted ? "" : "none";
  if (muted) {
    syncMusicVisual(true);
  } else {
    syncMusicVisual(gameAudio.isMusicMuted());
  }
});

musicToggle.addEventListener("click", () => {
  if (gameAudio.isMuted()) return;
  const muted = !gameAudio.isMusicMuted();
  gameAudio.setMusicMuted(muted);
  syncMusicVisual(muted);
});

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
  }
}

document.addEventListener("visibilitychange", refreshAppFocus);
window.addEventListener("focus", refreshAppFocus);
window.addEventListener("blur", refreshAppFocus);

let runTimeMs = 0;
let distanceUnits = 0;
let burstRemainMs = 0;
/** Extra base scroll from successful slipstreams this run (before burst). */
let slingshotBaseBonus = 0;
/** False until intro Z tween finishes; blocks scroll, input, and collision. */
let runGameplayReady = false;
/** Accumulated real-time (ms) for intro tween — uses `delta`, not wall clock, so the first frame is always t≈0. */
let introElapsedMs = 0;

const LIGHTS_PHASE_MS = 280;
const LIGHTS_GREEN_SHOW_MS = 350;
let startLightsActive = false;
let startLightsElapsedMs = 0;
const startLightsContainer = document.getElementById("start-lights")!;
const startLightEls = [
  document.getElementById("light-0")!,
  document.getElementById("light-1")!,
  document.getElementById("light-2")!,
];

const FLYBY_BASE_DELAY = 100;
const FLYBY_STAGGER = 300;
const FLYBY_DURATION = 1200;

interface FlybySlot {
  enabled: boolean;
  dir: number;
  triggerMs: number;
  elapsedMs: number;
  animating: boolean;
  soundPlayed: boolean;
}
const flybySlots: FlybySlot[] = [
  { enabled: false, dir: -1, triggerMs: 0, elapsedMs: 0, animating: false, soundPlayed: false },
  { enabled: false, dir: 1, triggerMs: 0, elapsedMs: 0, animating: false, soundPlayed: false },
];
let flybyGroups: THREE.Group[] = [];
let flybyPending = false;
let flybyWaitMs = 0;

const CRASH_SPIN_MS = 1400;
const POST_CRASH_SLIDE_MS = 2200;
let crashActive = false;
let crashElapsedMs = 0;
let crashSpinDir = 1;
let crashLateralDir = 1;
let crashStartX = 0;
let crashStartZ = 0;
let crashHitCarGroup: THREE.Group | null = null;
let crashHitCarStartX = 0;
let crashHitCarStartZ = 0;
let crashScrollSpeed = 0;
let postCrashSlide = false;
let postCrashSlideMs = 0;

// Dramatic crash variation: 0 = front tumble, 1 = barrel roll, 2 = big lateral spin
let crashType = 0;
let crashShakeIntensity = 0;
let crashShakeDecay = 0;

/* ── Crash spark / debris particles ─────────────────────────────── */
const SPARK_COUNT = 60;
const SPARK_LIFETIME = 1.2;
const sparkPositions = new Float32Array(SPARK_COUNT * 3);
const sparkColors = new Float32Array(SPARK_COUNT * 3);
const sparkVelocities: THREE.Vector3[] = [];
const sparkLifetimes = new Float32Array(SPARK_COUNT);
const sparkSizes = new Float32Array(SPARK_COUNT);

for (let i = 0; i < SPARK_COUNT; i++) {
  sparkVelocities.push(new THREE.Vector3());
  sparkLifetimes[i] = 0;
  sparkSizes[i] = 0;
}

const sparkGeometry = new THREE.BufferGeometry();
sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
sparkGeometry.setAttribute("color", new THREE.BufferAttribute(sparkColors, 3));
sparkGeometry.setAttribute("size", new THREE.BufferAttribute(sparkSizes, 1));

const sparkMaterial = new THREE.PointsMaterial({
  size: 0.12,
  vertexColors: true,
  transparent: true,
  opacity: 0.9,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true,
});
const sparkPoints = new THREE.Points(sparkGeometry, sparkMaterial);
sparkPoints.frustumCulled = false;
scene.add(sparkPoints);

function spawnCrashSparks(cx: number, cy: number, cz: number): void {
  const orangeR = [1.0, 1.0, 0.95, 0.9];
  const orangeG = [0.7, 0.5, 0.3, 0.2];
  const orangeB = [0.0, 0.0, 0.05, 0.1];

  for (let i = 0; i < SPARK_COUNT; i++) {
    const i3 = i * 3;
    sparkPositions[i3] = cx + (Math.random() - 0.5) * 0.3;
    sparkPositions[i3 + 1] = cy + Math.random() * 0.2;
    sparkPositions[i3 + 2] = cz + (Math.random() - 0.5) * 0.3;

    const speed = 2 + Math.random() * 6;
    const angle = Math.random() * Math.PI * 2;
    const upAngle = Math.random() * Math.PI * 0.5;
    sparkVelocities[i].set(
      Math.cos(angle) * Math.cos(upAngle) * speed,
      Math.sin(upAngle) * speed * 0.8 + Math.random() * 2,
      Math.sin(angle) * Math.cos(upAngle) * speed,
    );

    sparkLifetimes[i] = SPARK_LIFETIME * (0.5 + Math.random() * 0.5);
    sparkSizes[i] = 0.06 + Math.random() * 0.14;

    const ci = Math.floor(Math.random() * orangeR.length);
    sparkColors[i3] = orangeR[ci];
    sparkColors[i3 + 1] = orangeG[ci];
    sparkColors[i3 + 2] = orangeB[ci];
  }

  sparkGeometry.attributes.position.needsUpdate = true;
  sparkGeometry.attributes.color.needsUpdate = true;
  sparkGeometry.attributes.size.needsUpdate = true;
}

function updateCrashSparks(dt: number): void {
  let anyAlive = false;
  for (let i = 0; i < SPARK_COUNT; i++) {
    if (sparkLifetimes[i] <= 0) continue;
    sparkLifetimes[i] -= dt;
    anyAlive = true;

    const i3 = i * 3;
    const v = sparkVelocities[i];
    v.y -= 9.8 * dt;
    sparkPositions[i3] += v.x * dt;
    sparkPositions[i3 + 1] += v.y * dt;
    sparkPositions[i3 + 2] += v.z * dt;

    if (sparkPositions[i3 + 1] < 0) {
      sparkPositions[i3 + 1] = 0;
      v.y *= -0.3;
      v.x *= 0.7;
      v.z *= 0.7;
    }

    const life01 = Math.max(0, sparkLifetimes[i] / SPARK_LIFETIME);
    sparkSizes[i] = (0.06 + Math.random() * 0.04) * life01;
  }

  if (anyAlive) {
    sparkGeometry.attributes.position.needsUpdate = true;
    sparkGeometry.attributes.size.needsUpdate = true;
  }
}

function resetCrashSparks(): void {
  for (let i = 0; i < SPARK_COUNT; i++) {
    sparkLifetimes[i] = 0;
    sparkSizes[i] = 0;
    const i3 = i * 3;
    sparkPositions[i3] = 0;
    sparkPositions[i3 + 1] = -10;
    sparkPositions[i3 + 2] = 0;
  }
  sparkGeometry.attributes.position.needsUpdate = true;
  sparkGeometry.attributes.size.needsUpdate = true;
}

function resetGame(): void {
  if (crashHitCarGroup) {
    crashHitCarGroup.rotation.set(0, 0, 0);
    crashHitCarGroup.position.y = 0;
    crashHitCarGroup = null;
  }
  crashActive = false;
  crashElapsedMs = 0;
  postCrashSlide = false;
  postCrashSlideMs = 0;
  crashScrollSpeed = 0;
  crashShakeIntensity = 0;
  crashShakeDecay = 0;
  resetCrashSparks();
  flybyPending = true;
  flybyWaitMs = 0;
  for (const g of flybyGroups) g.visible = false;
  const pattern = Math.random();
  if (pattern < 0.33) {
    flybySlots[0].enabled = true;  flybySlots[0].dir = -1;
    flybySlots[0].triggerMs = FLYBY_BASE_DELAY;
    flybySlots[1].enabled = false;
  } else if (pattern < 0.66) {
    flybySlots[0].enabled = true;  flybySlots[0].dir = 1;
    flybySlots[0].triggerMs = FLYBY_BASE_DELAY;
    flybySlots[1].enabled = false;
  } else {
    flybySlots[0].enabled = true;  flybySlots[0].dir = -1;
    flybySlots[0].triggerMs = FLYBY_BASE_DELAY;
    flybySlots[1].enabled = true;  flybySlots[1].dir = 1;
    flybySlots[1].triggerMs = FLYBY_BASE_DELAY + FLYBY_STAGGER;
  }
  for (const s of flybySlots) {
    s.elapsedMs = 0; s.animating = false; s.soundPlayed = false;
  }
  startLightsActive = false;
  startLightsElapsedMs = 0;
  startLightsContainer.classList.remove("visible");
  for (const el of startLightEls) el.classList.remove("red", "green");
  gameState.reset();
  laneSystem.reset();
  laneSystem.enabled = false;
  runGameplayReady = false;
  introElapsedMs = 0;
  runTimeMs = 0;
  distanceUnits = 0;
  burstRemainMs = 0;
  slingshotBaseBonus = 0;
  roadManager?.reset();
  trafficSpawner.reset();
  slipstreamWind.reset();
  tireMarks.reset();
  vehicleExhaust.reset();
  playerTaxi.reset();
  slingshotTrail.reset();
  slipstreamActivateBurst.reset();
  slipstreamZone.reset();
  chainManager.reset();
  scoreManager.reset();
  hud.reset();
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
}

gameOverScreen.onRetry(() => {
  resetGame();
});

gameState.onChange((state) => {
  if (state === "gameover") {
    laneSystem.enabled = false;
    playerTaxi.setDraftMeter(0, false);
    const score = scoreManager.currentScore;
    gameOverScreen.show(score, chainManager.maxChainThisRun, distanceUnits);
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
    if (!runGameplayReady) {
      const dur = CONFIG.TAXI_INTRO_DURATION_MS;
      introElapsedMs += delta * 1000;
      const t = Math.min(1, introElapsedMs / dur);
      const e = easeInCubic(t);
      const z0 = CONFIG.TAXI_POSITION_Z + CONFIG.TAXI_INTRO_START_Z_OFFSET;
      const z1 = CONFIG.TAXI_POSITION_Z;
      playerTaxi.group.position.z = z0 + (z1 - z0) * e;
      if (t >= 1) {
        runGameplayReady = true;
        playerTaxi.group.position.z = z1;
        startLightsActive = true;
        startLightsElapsedMs = 0;
        startLightsContainer.classList.add("visible");
        for (const el of startLightEls) {
          el.classList.remove("red", "green");
        }
      }

      const laneX = laneSystem.getLaneX(nowMs);
      const roll = laneSystem.getBodyRollRad(nowMs);
      const steer = laneSystem.getWheelSteerRad(nowMs);
      playerTaxi.applyLaneVisuals(laneX, roll, steer);
      milestoneAnchorWorld.set(laneX, 1.1, playerTaxi.group.position.z + 2.2);
      hud.updateMilestoneAnchor(camera, container, milestoneAnchorWorld);

      slingshotTrail.setBoostActive(false);
      slingshotTrail.update(delta, 0, playerTaxi);
      playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);

      scrollForAudio = CONFIG.BASE_SCROLL_SPEED;
    } else {
      if (startLightsActive) {
        startLightsElapsedMs += delta * 1000;
        const totalRedMs = LIGHTS_PHASE_MS * 3;
        for (let i = 0; i < 3; i++) {
          if (startLightsElapsedMs >= LIGHTS_PHASE_MS * (i + 1)) {
            if (!startLightEls[i].classList.contains("red") && !startLightEls[i].classList.contains("green")) {
              startLightEls[i].classList.add("red");
              gameAudio.playLightRed();
            }
          }
        }
        if (startLightsElapsedMs >= totalRedMs && !startLightEls[0].classList.contains("green")) {
          for (const el of startLightEls) {
            el.classList.remove("red");
            el.classList.add("green");
          }
          gameAudio.playLightGreen();
        }
        if (startLightsElapsedMs >= totalRedMs + LIGHTS_GREEN_SHOW_MS) {
          startLightsActive = false;
          startLightsContainer.classList.remove("visible");
          laneSystem.enabled = true;
        }
      }

      runTimeMs += delta * 1000;
      burstRemainMs = Math.max(0, burstRemainMs - delta * 1000);

      const base = CONFIG.BASE_SCROLL_SPEED;
      const maxScroll = CONFIG.MAX_SCROLL_SPEED;
      const headroom = Math.max(0, maxScroll - base);
      slingshotBaseBonus = Math.max(
        0,
        slingshotBaseBonus - CONFIG.BASE_SPEED_BONUS_DECAY_PER_SECOND * delta,
      );
      slingshotBaseBonus = Math.min(slingshotBaseBonus, headroom);
      const baseScroll = Math.min(base + slingshotBaseBonus, maxScroll);
      // Slingshot now contributes only to persistent base bonus; no temporary speed burst.
      let scrollPerFrame = baseScroll;
      if (crashActive) {
        const spinT = Math.min(1, crashElapsedMs / CRASH_SPIN_MS);
        scrollPerFrame = crashScrollSpeed * (1 - spinT * 0.5);
      }
      const scrollDz = scrollPerFrame * 60 * delta;

      const segPasses = roadManager?.update(scrollDz) ?? 0;
      if (segPasses > 0 && !crashActive) {
        const span = Math.max(1e-6, CONFIG.MAX_SCROLL_SPEED - CONFIG.BASE_SCROLL_SPEED);
        const speedT = Math.max(0, Math.min(1, (scrollPerFrame - CONFIG.BASE_SCROLL_SPEED) / span));
        gameAudio.playWhoosh(speedT);
      }
      trafficSpawner.update(delta, runTimeMs, scrollPerFrame);
      const pX = playerTaxi.group.position.x;
      const pZ = playerTaxi.group.position.z;
      tireMarks.update(delta, scrollDz, trafficSpawner, pX, pZ);
      vehicleExhaust.update(delta, scrollDz, trafficSpawner, pX, pZ);
      const laneX = laneSystem.getLaneX(nowMs);
      const roll = laneSystem.getBodyRollRad(nowMs);
      const steer = laneSystem.getWheelSteerRad(nowMs);
      playerTaxi.applyLaneVisuals(laneX, roll, steer);
      milestoneAnchorWorld.set(laneX, 1.1, CONFIG.TAXI_POSITION_Z + 2.2);
      hud.updateMilestoneAnchor(camera, container, milestoneAnchorWorld);

      const slip = slipstreamZone.update(
        delta,
        scrollPerFrame,
        playerTaxi,
        trafficSpawner,
      );
      chainManager.tick(nowMs, slip.inZone);

      if (slip.slingshotFired) {
        trafficSpawner.markSlipstreamConsumed(slip.slingshotTarget);
        slingshotBaseBonus += CONFIG.SLINGSHOT_BASE_SPEED_INCREMENT;
        slingshotBaseBonus = Math.min(slingshotBaseBonus, headroom);
        burstRemainMs = CONFIG.SLINGSHOT_BURST_DURATION;
        slipstreamActivateBurst.burst();
        gameAudio.playSlingshot();
        const milestone = chainManager.onSlingshot(nowMs);
        if (milestone !== null) {
          playerTaxi.onChainMilestone(milestone, nowMs);
          gameAudio.playMilestone(milestone);
        }
        scoreManager.addSlingshotBonus(chainManager.chain);
        gameAudio.playChainUp(chainManager.chain);
      }

      playerTaxi.tickRoofLight(nowMs, slip.inZone, chainManager.chain);

      scoreManager.addDistance(scrollDz, chainManager.chain);
      distanceUnits += scrollDz;

      playerTaxi.worldHud.setScore(scoreManager.currentScore);
      playerTaxi.worldHud.setChain(chainManager.chain);
      playerTaxi.setDraftMeter(slip.meterDisplay, slip.inZone);

      cameraController.update(playerTaxi, scrollPerFrame);

      if (flybyPending) {
        flybyWaitMs += delta * 1000;
        let anyActive = false;
        for (let i = 0; i < flybySlots.length; i++) {
          const s = flybySlots[i];
          const g = flybyGroups[i];
          if (!s.enabled || !g) continue;
          anyActive = true;

          if (!s.animating && flybyWaitMs >= s.triggerMs) {
            s.animating = true;
            s.elapsedMs = 0;
          }
          if (!s.soundPlayed && s.animating) {
            s.soundPlayed = true;
            gameAudio.playFlyby();
          }
          if (s.animating) {
            s.elapsedMs += delta * 1000;
            const ft = Math.min(1, s.elapsedMs / FLYBY_DURATION);
            const startZ = CONFIG.TAXI_POSITION_Z - 25;
            const endZ = CONFIG.TAXI_POSITION_Z + 80;
            const curZ = startZ + (endZ - startZ) * ft;
            g.visible = true;
            g.position.set(s.dir * 3.0, 0, curZ);
            g.rotation.set(0, 0, 0);

            const hw = CONFIG.TAXI_DIMENSIONS.width / 2;
            const rearZ = curZ - CONFIG.TAXI_DIMENSIONS.length / 2;
            tireMarks.spawn(g.position.x - hw * 0.55, rearZ);
            tireMarks.spawn(g.position.x + hw * 0.55, rearZ);
            const exY = CONFIG.TAXI_DIMENSIONS.height * 0.3;
            vehicleExhaust.spawn(g.position.x - 0.3, exY, rearZ - 0.1);
            vehicleExhaust.spawn(g.position.x + 0.3, exY, rearZ - 0.1);

            if (ft >= 1) {
              s.animating = false;
              s.enabled = false;
              g.visible = false;
            }
          }
        }
        if (!anyActive) flybyPending = false;
      }

      if (!crashActive && !startLightsActive) {
        const hit: CollisionHit | null = collisionSystem.check(playerTaxi, trafficSpawner);
        if (hit) {
          crashActive = true;
          crashElapsedMs = 0;
          crashStartX = playerTaxi.group.position.x;
          crashStartZ = playerTaxi.group.position.z;
          crashLateralDir = hit.hitX > playerTaxi.group.position.x ? -1 : 1;
          crashSpinDir = crashLateralDir;
          crashHitCarGroup = trafficSpawner.getHitCarGroup(hit.hitX, hit.hitZ);
          crashHitCarStartX = hit.hitX;
          crashHitCarStartZ = hit.hitZ;
          crashScrollSpeed = scrollPerFrame;
          crashType = Math.floor(Math.random() * 3);
          crashShakeIntensity = 1.0;
          crashShakeDecay = 0;
          spawnCrashSparks(
            (playerTaxi.group.position.x + hit.hitX) / 2,
            0.4,
            (playerTaxi.group.position.z + hit.hitZ) / 2,
          );
          laneSystem.enabled = false;
          gameAudio.playCrash();
        }
      }

      slipstreamActivateBurst.setBurstWindowActive(burstRemainMs > 0);
      slingshotTrail.setBoostActive(burstRemainMs > 0);
      slingshotTrail.update(delta, scrollDz, playerTaxi);

      scrollForAudio = scrollPerFrame;
      slipInZone = slip.inZone;
      slipMeter = slip.meterDisplay;
      audioBurst = burstRemainMs > 0;
    }
  } else {
    slipstreamActivateBurst.setBurstWindowActive(false);
    slingshotTrail.setBoostActive(false);

    const idleScroll = CONFIG.BASE_SCROLL_SPEED * 0.3;
    let gameoverScroll = idleScroll;

    if (postCrashSlide) {
      postCrashSlideMs += delta * 1000;
      const slideT = Math.min(1, postCrashSlideMs / POST_CRASH_SLIDE_MS);
      const decay = (1 - slideT) ** 2;
      gameoverScroll = idleScroll + (crashScrollSpeed * 0.5 - idleScroll) * decay;

      const settle = 1 - slideT;
      const settleEase = settle * settle;

      // Settle from wherever the crash type left the car
      if (crashType === 0) {
        playerTaxi.group.rotation.x = -Math.PI * 1.1 * settleEase + (1 - settleEase) * -0.08;
        playerTaxi.group.rotation.y = crashSpinDir * (Math.PI * 0.5 + slideT * 0.4);
        playerTaxi.group.rotation.z = crashLateralDir * 0.4 * settleEase;
      } else if (crashType === 1) {
        playerTaxi.group.rotation.z = crashLateralDir * Math.PI * 1.5 * settleEase;
        playerTaxi.group.rotation.y = crashSpinDir * (Math.PI * 0.6 + slideT * 0.3);
        playerTaxi.group.rotation.x = -0.3 * settleEase;
      } else {
        playerTaxi.group.rotation.y = crashSpinDir * (Math.PI * 1.8 + slideT * 0.2);
        playerTaxi.group.rotation.z = crashLateralDir * 0.6 * settleEase;
        playerTaxi.group.rotation.x = -0.25 * settleEase;
      }
      playerTaxi.group.position.x = crashStartX + crashLateralDir * (3.0 + slideT * 1.5);
      playerTaxi.group.position.y = settleEase * 0.15;

      if (crashHitCarGroup) {
        const oppDir = -crashLateralDir;
        crashHitCarGroup.rotation.y = oppDir * (Math.PI * 0.9 + slideT * 0.2);
        crashHitCarGroup.rotation.z = oppDir * 0.45 * settleEase;
        crashHitCarGroup.rotation.x = 0.35 * settleEase;
        crashHitCarGroup.position.x = crashHitCarStartX + oppDir * (3.0 + slideT * 1.0);
        crashHitCarGroup.position.y = settleEase * 0.1;
      }

      if (slideT >= 1) {
        postCrashSlide = false;
        if (crashHitCarGroup) {
          crashHitCarGroup.rotation.set(0, 0, 0);
          crashHitCarGroup.position.y = 0;
          crashHitCarGroup = null;
        }
      }
    }

    const gameoverDz = gameoverScroll * 60 * delta;
    const idlePasses = roadManager?.update(gameoverDz) ?? 0;
    if (idlePasses > 0) {
      gameAudio.playWhoosh(0);
    }
    trafficSpawner.update(delta, runTimeMs, gameoverScroll);
    const pX = playerTaxi.group.position.x;
    const pZ = playerTaxi.group.position.z;
    tireMarks.update(delta, gameoverDz, trafficSpawner, pX, pZ);
    vehicleExhaust.update(delta, gameoverDz, trafficSpawner, pX, pZ);

    slingshotTrail.update(delta, 0, playerTaxi);
    cameraController.update(playerTaxi, CONFIG.BASE_SCROLL_SPEED);
    playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);
    const laneX = laneSystem.getLaneX(nowMs);
    milestoneAnchorWorld.set(laneX, 1.1, CONFIG.TAXI_POSITION_Z + 2.2);
    hud.updateMilestoneAnchor(camera, container, milestoneAnchorWorld);
  }

  if (speedHudEl && speedTextEl) {
    const visible = gameState.isPlaying && runGameplayReady;
    if (!visible) {
      speedHudEl.style.opacity = "0";
    } else {
      // Treat 1 world unit as 1 meter for display (km/h).
      const speedMps = scrollForAudio * 60;
      const speedKmh = speedMps * 3.6 * 2;
      speedTextEl.textContent = `${Math.round(speedKmh)} KM/H`;
      speedHudEl.style.opacity = "1";
      requestAnimationFrame(() => fitSpeedHudText());
    }
  }

  slipstreamWind.update(
    delta,
    gameState.isPlaying && runGameplayReady,
    trafficSpawner,
  );
  slipstreamActivateBurst.update(delta);

  gameAudio.update(delta, {
    playing: gameState.isPlaying && runGameplayReady,
    scrollPerFrame: scrollForAudio,
    inDraft: slipInZone,
    draftMeter: slipMeter,
    burstActive: audioBurst,
    chain: chainManager.chain,
  });

  trafficAudioBuf.length = 0;
  trafficSpawner.forEachPoolWindSlot((_si, active, _sa, cx, cz) => {
    if (active) { trafficAudioBuf.push(cx, cz); }
  });
  gameAudio.updateTrafficEngines(
    delta,
    gameState.isPlaying && runGameplayReady,
    playerTaxi.group.position.x,
    playerTaxi.group.position.z,
    trafficAudioBuf,
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

  if (crashActive) {
    crashElapsedMs += delta * 1000;
    const t = Math.min(1, crashElapsedMs / CRASH_SPIN_MS);
    const easeOut = 1 - (1 - t) * (1 - t);
    const bounce = Math.sin(easeOut * Math.PI);

    if (crashType === 0) {
      // Front tumble: car flips forward over its nose
      playerTaxi.group.rotation.x = easeOut * -Math.PI * 1.1;
      playerTaxi.group.rotation.y = crashSpinDir * easeOut * Math.PI * 0.5;
      playerTaxi.group.rotation.z = crashLateralDir * easeOut * 0.4;
      playerTaxi.group.position.y = bounce * 2.2;
      playerTaxi.group.position.x = crashStartX + crashLateralDir * easeOut * 3.0;
    } else if (crashType === 1) {
      // Barrel roll: car rolls sideways in the air
      playerTaxi.group.rotation.z = crashLateralDir * easeOut * Math.PI * 1.5;
      playerTaxi.group.rotation.y = crashSpinDir * easeOut * Math.PI * 0.6;
      playerTaxi.group.rotation.x = easeOut * -0.3;
      playerTaxi.group.position.y = bounce * 2.5;
      playerTaxi.group.position.x = crashStartX + crashLateralDir * easeOut * 3.5;
    } else {
      // Big lateral spin: violent yaw + lift
      playerTaxi.group.rotation.y = crashSpinDir * easeOut * Math.PI * 1.8;
      playerTaxi.group.rotation.z = crashLateralDir * easeOut * 0.6;
      playerTaxi.group.rotation.x = easeOut * -0.25;
      playerTaxi.group.position.y = bounce * 1.5;
      playerTaxi.group.position.x = crashStartX + crashLateralDir * easeOut * 4.0;
    }

    if (crashHitCarGroup) {
      const oppDir = -crashLateralDir;
      const hitBounce = Math.sin(easeOut * Math.PI * 0.8);
      crashHitCarGroup.rotation.y = oppDir * easeOut * Math.PI * 0.9;
      crashHitCarGroup.rotation.z = oppDir * easeOut * 0.45;
      crashHitCarGroup.rotation.x = easeOut * 0.35;
      crashHitCarGroup.position.x = crashHitCarStartX + oppDir * easeOut * 3.0;
      crashHitCarGroup.position.y = hitBounce * 1.2;
    }

    // Camera shake decays over time
    crashShakeDecay += delta * 1000;
    crashShakeIntensity = Math.max(0, 1 - crashShakeDecay / CRASH_SPIN_MS);

    if (t >= 1) {
      crashActive = false;
      postCrashSlide = true;
      postCrashSlideMs = 0;
      crashShakeIntensity = 0;
      gameState.transition("gameover");
    }
  }

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

  // Camera shake on crash impact
  if (crashShakeIntensity > 0) {
    const shakeAmt = crashShakeIntensity * crashShakeIntensity;
    camera.position.x += (Math.random() - 0.5) * shakeAmt * 0.6;
    camera.position.y += (Math.random() - 0.5) * shakeAmt * 0.4;
    camera.rotation.z += (Math.random() - 0.5) * shakeAmt * 0.03;
  }

  // Update crash spark particles
  updateCrashSparks(delta);

  renderer.render(scene, camera);
}

void (async () => {
  playerTaxi = await PlayerTaxi.create();
  roadManager = await RoadManager.create(CONFIG.TAXI_POSITION_Z);
  trafficSpawner = await TrafficSpawner.create();

  const flybyGltf = await loadPlayerCarGltf();
  for (let fi = 0; fi < 2; fi++) {
    const g = new THREE.Group();
    const car = flybyGltf.scene.clone(true);
    cloneMeshMaterialsUnique(car);
    fitCarToDimensions(car, CONFIG.TAXI_DIMENSIONS, 0);
    const livIdx = fi < CONFIG.TRAFFIC_LIVERY_VARIANTS.length ? fi : 0;
    applyLiveryColors(car, CONFIG.TRAFFIC_LIVERY_VARIANTS[livIdx]!);
    g.add(car);
    g.visible = false;
    flybyGroups.push(g);
  }

  scene.add(roadManager.group);
  scene.add(tireMarks.group);
  scene.add(trafficSpawner.group);
  scene.add(vehicleExhaust.group);
  scene.add(slipstreamWind.group);
  for (const fg of flybyGroups) scene.add(fg);
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
