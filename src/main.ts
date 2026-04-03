import * as THREE from "three";
import {
  CONFIG,
  displaySpeedKmhFromScroll,
  hexToCss,
  rgbaFromHex,
} from "./config";
import { GameState } from "./engine/GameState";
import { LaneSystem } from "./engine/LaneSystem";
import { RoadManager } from "./engine/RoadManager";
import { PlayerTaxi } from "./engine/PlayerTaxi";
import { TrafficSpawner } from "./engine/TrafficSpawner";
import { CollisionSystem } from "./engine/CollisionSystem";
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
const milestoneAnchorWorld = new THREE.Vector3();
const touchHintLeftWorld = new THREE.Vector3();
const touchHintRightWorld = new THREE.Vector3();

container.addEventListener("pointerdown", () => gameAudio.unlock(), {
  once: true,
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
/** Charge/fuel meter (can exceed 1 internally while super is being extended). */
let superSlipstreamMeter = 0;
/** Active super-slipstream boost window (ms). */
let superSlipstreamRemainMs = 0;
/** False until intro Z tween finishes; blocks scroll, input, and collision. */
let runGameplayReady = false;
/** Accumulated real-time (ms) for intro tween — uses `delta`, not wall clock, so the first frame is always t≈0. */
let introElapsedMs = 0;

function resetGame(): void {
  gameState.reset();
  laneSystem.reset();
  laneSystem.enabled = false;
  runGameplayReady = false;
  introElapsedMs = 0;
  runTimeMs = 0;
  distanceUnits = 0;
  burstRemainMs = 0;
  slingshotBaseBonus = 0;
  superSlipstreamMeter = 0;
  superSlipstreamRemainMs = 0;
  roadManager?.reset();
  trafficSpawner.reset();
  slipstreamWind.reset();
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
    gameAudio.playCrash();
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
        laneSystem.enabled = true;
        playerTaxi.group.position.z = z1;
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
      playerTaxi.worldHud.setSpeedKmh(
        displaySpeedKmhFromScroll(CONFIG.BASE_SCROLL_SPEED),
      );
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
      trafficSpawner.update(delta, runTimeMs, scrollPerFrame);
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
        const wasSuperActive = superSlipstreamRemainMs > 0;
        trafficSpawner.markSlipstreamConsumed(slip.slingshotTarget);
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
        scoreManager.addSlingshotBonus(chainManager.chain);
        hud.showMilestone(`×${chainManager.chain}`, milestone === 10);
        if (milestone === 10) {
          hud.flashScreenPerfect();
        }
      }

      playerTaxi.tickRoofLight(nowMs, slip.inZone, chainManager.chain);

      scoreManager.addDistance(scrollDz, chainManager.chain);
      distanceUnits += scrollDz;

      playerTaxi.worldHud.setSpeedKmh(
        displaySpeedKmhFromScroll(scrollPerFrame),
      );
      playerTaxi.worldHud.setChain(chainManager.chain);
      playerTaxi.setDraftMeter(slip.meterDisplay, slip.inZone);

      cameraController.update(playerTaxi, scrollPerFrame, delta);

      if (collisionSystem.check(playerTaxi, trafficSpawner)) {
        gameState.transition("gameover");
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
    slingshotTrail.update(delta, 0, playerTaxi);
    cameraController.update(playerTaxi, CONFIG.BASE_SCROLL_SPEED, delta);
    playerTaxi.tickRoofLight(nowMs, false, chainManager.chain);
    const laneX = laneSystem.getLaneX(nowMs);
    milestoneAnchorWorld.set(laneX, 1.1, CONFIG.TAXI_POSITION_Z + 2.2);
    hud.updateMilestoneAnchor(camera, container, milestoneAnchorWorld);
  }

  hud.updateSuperSlipstreamMeter(
    superSlipstreamMeter,
    superSlipstreamRemainMs > 0,
    gameState.isPlaying && runGameplayReady,
  );

  if (speedHudEl && speedTextEl) {
    const visible = gameState.isPlaying && runGameplayReady;
    if (!visible) {
      speedHudEl.style.opacity = "0";
    } else {
      speedTextEl.textContent = `${displaySpeedKmhFromScroll(scrollForAudio)} km/h`;
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

  renderer.render(scene, camera);
}

void (async () => {
  playerTaxi = await PlayerTaxi.create();
  roadManager = await RoadManager.create(CONFIG.TAXI_POSITION_Z);
  trafficSpawner = await TrafficSpawner.create();
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
