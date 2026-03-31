/**
 * SLIPSTREAM — Grand Prix / Formula 1 configuration
 *
 * All tunable gameplay values in one file.
 * Engine code should not hardcode tunables duplicated here.
 */

export interface TrafficPhase {
  startTime: number;
  spawnRate: number;
  lanes: number[];
  speedVariance: number;
  laneChange?: boolean;
}

export interface CameraFovPhase {
  /** How long this phase holds its FOV and height (ms). */
  holdMs: number;
  /** FOV during this phase. */
  fov: number;
  /**
   * Camera world Y (chase height) during this phase — same timeline as FOV.
   * Omit to use `CAMERA_HEIGHT` for that phase.
   */
  height?: number;
  /**
   * Blend time into the next phase (ms). If omitted, uses 0 (hard cut).
   * On the **last** phase, this is the blend back to the **first** phase when looping.
   */
  transitionMs?: number;
}

export function hexToCss(hex: number): string {
  return `#${hex.toString(16).padStart(6, "0")}`;
}

export function rgbaFromHex(hex: number, alpha: number): string {
  const r = (hex >> 16) & 255;
  const g = (hex >> 8) & 255;
  const b = hex & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * Formula 1 / broadcast — single source for engine materials, particles, and UI.
 * Do not hardcode colors elsewhere; reference `CONFIG.PALETTE` or these keys.
 */
export const GAME_PALETTE = {
  /** Primary accent — podium / DRS / slipstream outline / milestones. */
  NEON_PINK: 0xe10600,
  /** Telemetry cyan — draft meter, chain fill, wind particles. */
  NEON_BLUE: 0xfde047,
  /** Racing blue — liveries, accents. */
  NEON_PURPLE: 0x3671c6,
  /** Papaya / warning accent. */
  NEON_ORANGE: 0xff8700,
  /** Asphalt / tire wall read. */
  ROAD_DARK: 0x5c5c62,
  TRAFFIC_BODY_COMPACT: 0x2a2a32,
  TRAFFIC_BODY_TRUCK: 0x1c1c24,
  TRAFFIC_BODY_RACING_BLUE: 0x3671c6,
  SKY: 0x7ec8ff,
  TAXI_BODY: 0xeeeff2,
  TAXI_ROOF_LIGHT: 0x00d2be,
  TAIL_LIGHT: 0xc40000,
  HEADLIGHT: 0xfff8f0,
  LANE_MARKING: 0xffffff,
  UI_TEXT: 0xf8fafc,
  /** Muted stats / secondary copy. */
  UI_DIM: 0x9ca3af,
  /** App chrome behind canvas. */
  UI_BG_APP: 0x15151e,
  /** Solid black for outlines / strokes. */
  UI_OUTLINE: 0x000000,
  /** Draft bar track (dark carbon behind fill). */
  DRAFT_BAR_TRACK: 0x0f1a26,
  /** Slipstream wake particles (same family as telemetry cyan). */
  SLIPSTREAM_WIND: 0x00d2be,
  SLIPSTREAM_OUTLINE: 0xe10600,
  /** Roof lamp while drafting. */
  TAXI_ROOF_DRAFT_AMBER: 0xffaa00,
  SLINGSHOT_TRAIL_LEFT: 0xe10600,
  SLINGSHOT_TRAIL_RIGHT: 0xe10600,
  /** Dev FPS overlay (telemetry-style). */
  FPS_TELEMETRY: 0x22c55e,
  /** Score sprite glow (primary). */
  HUD_SCORE_GLOW: 0xe10600,
  /** Screen flash / milestone tints — primary at low alpha in CSS. */
  SCREEN_FLASH_TINT: 0xe10600,
  /** Scene lights (match outdoor track). */
  AMBIENT_LIGHT: 0xffffff,
  DIRECTIONAL_LIGHT: 0xfff5e6,
  HEMISPHERE_SKY: 0x87c8ff,
  HEMISPHERE_GROUND: 0x6a6a62,
  /** Extra livery slots for enemy variety. */
  METALLIC_SILVER: 0xd1d5db,
  CARBON_BLACK: 0x1a1a1e,
  NIGHT_NAVY: 0x1e3a5f,
  BRITISH_GREEN: 0x008f6b,
  BORDEAUX: 0x6b1c3a,
  SAFETY_YELLOW: 0xfde047,
} as const;

const TRAFFIC_LIVERY_VARIANTS = [
  {
    red: GAME_PALETTE.NEON_PINK,
    white: GAME_PALETTE.TAXI_BODY,
    blue: GAME_PALETTE.NEON_PURPLE,
  },
  {
    red: GAME_PALETTE.NEON_BLUE,
    white: GAME_PALETTE.CARBON_BLACK,
    blue: GAME_PALETTE.NEON_PINK,
  },
  {
    red: GAME_PALETTE.NEON_ORANGE,
    white: GAME_PALETTE.UI_TEXT,
    blue: GAME_PALETTE.NEON_PURPLE,
  },
  {
    red: GAME_PALETTE.NEON_PURPLE,
    white: GAME_PALETTE.METALLIC_SILVER,
    blue: GAME_PALETTE.NEON_ORANGE,
  },
  {
    red: GAME_PALETTE.TRAFFIC_BODY_COMPACT,
    white: GAME_PALETTE.TAXI_BODY,
    blue: GAME_PALETTE.NEON_BLUE,
  },
  {
    red: GAME_PALETTE.NEON_PINK,
    white: GAME_PALETTE.TRAFFIC_BODY_COMPACT,
    blue: GAME_PALETTE.NEON_BLUE,
  },
  {
    red: GAME_PALETTE.TRAFFIC_BODY_TRUCK,
    white: GAME_PALETTE.UI_TEXT,
    blue: GAME_PALETTE.NEON_PINK,
  },
  {
    red: GAME_PALETTE.NEON_BLUE,
    white: GAME_PALETTE.NEON_PINK,
    blue: GAME_PALETTE.NEON_PURPLE,
  },
  {
    red: GAME_PALETTE.NEON_ORANGE,
    white: GAME_PALETTE.CARBON_BLACK,
    blue: GAME_PALETTE.NEON_BLUE,
  },
  {
    red: GAME_PALETTE.NEON_PURPLE,
    white: GAME_PALETTE.CARBON_BLACK,
    blue: GAME_PALETTE.NEON_ORANGE,
  },
  {
    red: GAME_PALETTE.BRITISH_GREEN,
    white: GAME_PALETTE.CARBON_BLACK,
    blue: GAME_PALETTE.NEON_ORANGE,
  },
  {
    red: GAME_PALETTE.METALLIC_SILVER,
    white: GAME_PALETTE.NIGHT_NAVY,
    blue: GAME_PALETTE.NEON_PINK,
  },
  {
    red: GAME_PALETTE.NIGHT_NAVY,
    white: GAME_PALETTE.UI_TEXT,
    blue: GAME_PALETTE.NEON_BLUE,
  },
  {
    red: GAME_PALETTE.BORDEAUX,
    white: GAME_PALETTE.TAXI_BODY,
    blue: GAME_PALETTE.NEON_PURPLE,
  },
  {
    red: GAME_PALETTE.CARBON_BLACK,
    white: GAME_PALETTE.SAFETY_YELLOW,
    blue: GAME_PALETTE.NEON_PINK,
  },
  {
    red: GAME_PALETTE.NEON_PURPLE,
    white: GAME_PALETTE.NEON_ORANGE,
    blue: GAME_PALETTE.CARBON_BLACK,
  },
  {
    red: GAME_PALETTE.NEON_BLUE,
    white: GAME_PALETTE.METALLIC_SILVER,
    blue: GAME_PALETTE.BRITISH_GREEN,
  },
  {
    red: GAME_PALETTE.NEON_ORANGE,
    white: GAME_PALETTE.BORDEAUX,
    blue: GAME_PALETTE.NEON_BLUE,
  },
  {
    red: GAME_PALETTE.TAXI_BODY,
    white: GAME_PALETTE.NIGHT_NAVY,
    blue: GAME_PALETTE.NEON_PINK,
  },
  {
    red: GAME_PALETTE.TRAFFIC_BODY_RACING_BLUE,
    white: GAME_PALETTE.UI_DIM,
    blue: GAME_PALETTE.NEON_ORANGE,
  },
] as const;

export const CONFIG = {
  // ── Canvas ──
  GAME_WIDTH: 390,
  GAME_HEIGHT: 844,

  // ── Camera (road-centered: fixed X=0, chase down centerline) ──
  CAMERA_HEIGHT: 16.0,
  CAMERA_DISTANCE: 10.5,
  /** Aim at a point this far ahead on the road (small = steeper look-down at the taxi). */
  CAMERA_LOOK_AHEAD: 7.5,
  /**
   * World Y of look-at target. Negative = below horizon, pitches camera down (required to see the taxi).
   */
  CAMERA_LOOK_AT_Y: 1,
  /** Screen Y of taxi rear: 0 = bottom, 1 = top (NDC). Solved by dolly (distance) only. */
  CAMERA_FRAMING_BOTTOM_PCT: 0.15,
  /** How fast to converge distance so rear hits CAMERA_FRAMING_BOTTOM_PCT (NDC error → Δdistance). */
  CAMERA_FRAMING_DISTANCE_GAIN: 0.65,
  CAMERA_ANGLE: -45,
  CAMERA_FOV_BASE: 55,
  CAMERA_FOV_MAX: 75,
  /** Per-frame lerp toward phase target FOV and chase height. */
  CAMERA_FOV_LERP: 0.02,
  /**
   * Time-phased FOV + chase height (replaces chain-driven FOV/height).
   * Each phase holds, then transitions (last phase transitions back to the first — timeline loops).
   */
  CAMERA_FOV_PHASES: [
    { holdMs: 30000, fov: 55, height: 16.0, transitionMs: 5000 },
    { holdMs: 30000, fov: 65, height: 3.0, transitionMs: 5000 },
  ] as const satisfies readonly CameraFovPhase[],
  CAMERA_SHAKE_INTENSITY: 0.03,
  CAMERA_SHAKE_DECAY: 0.9,

  // ── Lanes ──
  LANE_COUNT: 3,
  LANE_WIDTH: 2.5,
  LANE_SWITCH_DURATION: 150,

  // ── Road ──
  ROAD_SEGMENT_LENGTH: 20,
  ROAD_VISIBLE_SEGMENTS: 8,
  /** Lanes, collision, traffic — playable corridor width (world units). */
  ROAD_WIDTH: 10,
  /**
   * World X span of the imported road mesh after scale (visual only).
   * Match `ROAD_SEGMENT_LENGTH` for a square 20×20 segment; keep `ROAD_WIDTH` smaller so lanes stay centered.
   */
  ROAD_SEGMENT_VISUAL_WIDTH: 20,
  /**
   * Reserved for a dedicated road mesh; RoadManager does not draw it — only `ROAD_ENVIRONMENTS` are rendered.
   */
  ROAD_SEGMENT_GLB: null,
  /** Authoring width across the road (Blender units); 0 = use bounding box. */
  ROAD_SEGMENT_GLB_WIDTH: 20,
  /** Authoring length along the road (Z); 0 = use bounding box. */
  ROAD_SEGMENT_GLB_DEPTH: 20,
  /**
   * Roadside / environment GLBs in `public/` (filenames only). Each row is one environment phase.
   * For `ROAD_ENV_SEGMENTS_PER_PHASE` consecutive segment spawns, one variant per row is picked (deterministic hash).
   * Phases cycle: row 0 → row 1 → … → row 0. Empty array disables environment meshes.
   * Place each file’s **origin on the road surface** in Blender — Y is pivot-based (not bbox-bottom snapped).
   */
  ROAD_ENVIRONMENTS: [
    ["env1-1.glb", "env1-2.glb"],
    ["env2-1.glb", "env2-2.glb"],
    ["env3-1.glb", "env3-2.glb"],
  ] as readonly (readonly string[])[],
  /** How many recycled road segments before advancing to the next environment phase. */
  ROAD_ENV_SEGMENTS_PER_PHASE: 20,
  /**
   * Environment GLB scale refs (Blender units). Use `0` for both so each file is fit from its **bounding box**
   * to `ROAD_SEGMENT_VISUAL_WIDTH` × `ROAD_SEGMENT_LENGTH` — fixes seams when env2/env3 aren’t the same size as env1.
   * Non-zero = fixed authoring size (all variants must match that width/depth or they won’t span one segment).
   */
  ROAD_ENV_GLB_WIDTH: 0,
  /** 0 = bbox Z (recommended for consistent segment linking across phases). */
  ROAD_ENV_GLB_DEPTH: 0,
  /** World units per asphalt texture tile (repeat on road plane). */
  ROAD_ASPHALT_TILE_WORLD: 2.75,
  /** Dashed lane divider along segment +Z. */
  ROAD_LANE_DASH_LENGTH: 2.5,
  ROAD_LANE_DASH_GAP: 2.0,
  ROAD_LANE_MARKING_WIDTH: 0.12,
  /** Solid white edge lines inset from road width (world units). */
  ROAD_LANE_EDGE_INSET: 0.38,
  /** Lane marking emissive intensity (readability on asphalt). */
  ROAD_LANE_MARKING_EMISSIVE: 0.18,
  /** Daytime track — soft aerial haze; fog color matches `PALETTE.SKY` in main.ts. */
  FOG_NEAR: 25,
  FOG_FAR: 120,

  // ── Speed (scrollPerFrame units; see main.ts `effectiveBaseScroll`) ──
  /** Starting base scroll at run start (before time ramp / slingshot bonus). */
  BASE_SCROLL_SPEED: 0.2,
  /** Hard cap on base scroll (time ramp + slingshot bonus included). */
  MAX_SCROLL_SPEED: 0.75,
  /**
   * Linear ramp over run time: adds up to `(MAX − BASE)` by `runTimeMs × this`.
   * Example: BASE 0.15, MAX 0.8 → headroom 0.65; at 0.00005/ms, full ramp ≈ 13s.
   */
  SPEED_RAMP_RATE: 0.00001,
  SLINGSHOT_SPEED_BURST: 0.05,
  SLINGSHOT_BURST_DURATION: 750,
  /** Added to base scroll on each successful slipstream release (same units as BASE_SCROLL_SPEED). */
  SLINGSHOT_BASE_SPEED_INCREMENT: 0.005,

  // ── Slipstream ──
  SLIPSTREAM_ZONE_WIDTH: 2.0,
  SLIPSTREAM_ZONE_DEPTH: 10,
  /** Per-frame @ 60Hz base fill; actual fill × (current scrollPerFrame / BASE_SCROLL_SPEED). */
  DRAFT_FILL_RATE: 0.05,
  /** Horizontal draft fill bar on taxi hood (local +X width, inset from front bumper toward −Z). */
  DRAFT_BAR_WIDTH: 1.55,
  DRAFT_BAR_DEPTH: 0.1,
  DRAFT_BAR_OFFSET_Y: 0.035,
  DRAFT_BAR_INSET_FROM_FRONT: 0.38,
  /** Tail light color multiplier while player is in that vehicle's slipstream (HDR-friendly). */
  DRAFT_TAIL_BRIGHTNESS_MUL: 4.0,

  /** Points per traffic pool slot; fills the slipstream box behind each active vehicle. */
  SLIPSTREAM_WIND_PARTICLES_PER_VEHICLE: 0,
  SLIPSTREAM_WIND_POINT_SIZE: 0.165,
  SLIPSTREAM_WIND_OPACITY: 0.5,
  /** Slipstream wake tint — see `PALETTE.SLIPSTREAM_WIND`. */
  SLIPSTREAM_WIND_COLOR: GAME_PALETTE.SLIPSTREAM_WIND,
  /** Base Y and ± spread for wind points above the road. */
  SLIPSTREAM_WIND_Y: 0.52,
  SLIPSTREAM_WIND_Y_SPREAD: 0.38,
  /** Wake flow toward screen bottom (−Z world), units/sec (vehicle-relative). */
  SLIPSTREAM_WIND_DOWN_SPEED: 6.5,
  /** Lateral jitter along the side strips only (units/sec scale). */
  SLIPSTREAM_WIND_TURBULENCE: 1.1,
  /** Inset from slipstream X edges for side columns. */
  SLIPSTREAM_WIND_X_INSET: 0.1,
  /** Width of each left/right spawn column inside the zone. */
  SLIPSTREAM_WIND_SIDE_STRIP_WIDTH: 0.24,
  /** Road-projected glow outline for each traffic slipstream zone. */
  SLIPSTREAM_ZONE_OUTLINE_ENABLED: true,
  SLIPSTREAM_ZONE_OUTLINE_COLOR: GAME_PALETTE.SLIPSTREAM_OUTLINE,
  /** World Y lift above asphalt to avoid z-fighting. */
  SLIPSTREAM_ZONE_OUTLINE_Y: 0.05,
  /** Core line thickness in world units. */
  SLIPSTREAM_ZONE_OUTLINE_THICKNESS: 0.06,
  /** Glow line thickness multiplier over core. */
  SLIPSTREAM_ZONE_OUTLINE_GLOW_SCALE: 2.15,
  SLIPSTREAM_ZONE_OUTLINE_OPACITY: 0.8,
  SLIPSTREAM_ZONE_OUTLINE_GLOW_OPACITY: 0.28,
  /** Side-outline dashed animation speed in world units/sec (front -> back). */
  SLIPSTREAM_ZONE_OUTLINE_DASH_SPEED: 8.5,
  /** Number of animated dashes per side edge. */
  SLIPSTREAM_ZONE_OUTLINE_DASHES_PER_SIDE: 10,
  /** Filled portion of each dash cycle (0..1). */
  SLIPSTREAM_ZONE_OUTLINE_DASH_DUTY: 0.58,

  // ── Chain ──
  CHAIN_TIMEOUT: 3000,
  CHAIN_MILESTONES: [5, 10, 15, 20] as readonly number[],
  CHAIN_SCORE_BASE: 50,

  // ── Traffic ──
  TRAFFIC_PHASES: [
    { startTime: 0, spawnRate: 2000, lanes: [1], speedVariance: 0 },
    { startTime: 20000, spawnRate: 1200, lanes: [0, 1, 2], speedVariance: 0.2 },
    {
      startTime: 60000,
      spawnRate: 800,
      lanes: [0, 1, 2],
      speedVariance: 0.4,
      laneChange: true,
    },
    {
      startTime: 120000,
      spawnRate: 500,
      lanes: [0, 1, 2],
      speedVariance: 0.6,
      laneChange: true,
    },
  ] as readonly TrafficPhase[],
  /** Single pooled mesh type (playerCar.glb clones); kept for design-doc parity. */
  VEHICLE_TYPES: 1,
  VEHICLE_LANE_CHANGE_TELEGRAPH: 1500,
  /**
   * World +Z speed (same units as BASE_SCROLL_SPEED). Traffic moves forward with the road flow
   * but slower than the player; net approach = BASE_SCROLL_SPEED − this (× speed variance).
   */
  VEHICLE_TRAFFIC_FORWARD_SPEED: 0.15,
  /** Floor for net −Δz so traffic never drifts the wrong way if variance is high. */
  VEHICLE_TRAFFIC_MIN_APPROACH: 0.02,
  VEHICLE_POOL_SIZE: 20,
  /**
   * World +Z ahead of player for new spawns. Higher = farther up the road / nearer screen top (horizon).
   */
  TRAFFIC_SPAWN_AHEAD_Z: 70,
  /** Extra random +Z spread (0..this) on each spawn. */
  TRAFFIC_SPAWN_AHEAD_Z_JITTER: 12,
  /**
   * Added to min center-Z spacing vs other traffic (same + adjacent lanes): hz₁ + hz₂ + slipstream depth + this.
   */
  /** Min gap (world Z) between body+slipstream footprints when spawning / separating. */
  TRAFFIC_SPAWN_MIN_Z_BUFFER: 6,
  /**
   * Headlight beam trapezoids (XZ on road, no Three.js lights).
   * Widths scale × vehicle width; depth is world units along +Z from bumper.
   */
  TRAFFIC_HEADLIGHT_BEAM_NEAR_FRAC: 0.14,
  TRAFFIC_HEADLIGHT_BEAM_FAR_FRAC: 0.48,
  TRAFFIC_HEADLIGHT_BEAM_FAR_SOFT_FRAC: 0.62,
  TRAFFIC_HEADLIGHT_BEAM_DEPTH: 2.35,
  TRAFFIC_HEADLIGHT_BEAM_SOFT_DEPTH: 2.55,
  TRAFFIC_HEADLIGHT_BEAM_Y: 0.08,
  TRAFFIC_HEADLIGHT_BEAM_OPACITY: 0.18,
  TRAFFIC_HEADLIGHT_BEAM_SOFT_OPACITY: 0.088,
  /** Max XZ distance to match slipstream snapshot → pool car (cars move between frames). */
  TRAFFIC_HEADLIGHT_MATCH_MAX_DIST: 12,
  /**
   * Flow rails: deterministic lane rhythm bursts for "learnable flow-state" moments.
   * Rails override random lane picks for a short sequence, then return to normal traffic.
   */
  FLOW_RAILS_ENABLED: true,
  /** Do not start rails before this run time (ms). */
  FLOW_RAILS_START_MS: 10000,
  /** Normal spawns between rail sequences. */
  FLOW_RAILS_GAP_SPAWNS: 8,
  /** Spawn-rate multiplier while rail is active (<1 = denser rhythm). */
  FLOW_RAILS_SPAWN_RATE_SCALE: 0.8,
  /** Reduce speed randomness during rail for cleaner, more readable patterns. */
  FLOW_RAILS_SPEED_VARIANCE_SCALE: 0.35,
  /** Lane sequences; each row is one rail pattern (cycled in order). */
  FLOW_RAILS_PATTERNS: [
    [1, 0, 1, 2, 1, 0],
    [0, 1, 2, 1, 0, 1],
    [1, 2, 1, 0, 1, 2],
    [0, 1, 2, 1, 0, 1],
    [2, 1, 0, 1, 2, 1],
  ] as readonly (readonly number[])[],

  // ── Player Taxi ──
  TAXI_BODY_ROLL: -5,
  TAXI_ROLL_DURATION: 300,
  TAXI_WHEEL_TURN: 5,
  TAXI_POSITION_Z: 0,
  /**
   * Run start: taxi begins at TAXI_POSITION_Z + this (toward camera, below frame) and tweens in.
   */
  TAXI_INTRO_START_Z_OFFSET: -8,
  TAXI_INTRO_DURATION_MS: 400,
  PLAYER_CAR_GLB: "playerCar.glb",
  /** Vertical offset after fit-to-dimensions (model-specific trim). */
  PLAYER_CAR_Y_OFFSET: 0,
  TAXI_DIMENSIONS: { width: 1.8, height: 0.8, length: 3.5 },
  /** glTF material names for traffic liveries (Blender export). */
  TRAFFIC_MATERIAL_RED: "red",
  TRAFFIC_MATERIAL_WHITE: "white",
  TRAFFIC_MATERIAL_BLUE: "blue",
  /** Which named material gets draft tail-light brighten. */
  TRAFFIC_DRAFT_TAIL_MATERIAL_NAME: "red",
  /** Strip PBR maps so hex liveries read clearly on clones. */
  TRAFFIC_LIVERY_IGNORE_TEXTURES: true,
  /** Random traffic liveries — `{ red, white, blue }` from `GAME_PALETTE`. */
  TRAFFIC_LIVERY_VARIANTS,
  /** Gap under draft bar plane to chain sprite (chassis local Y). */
  TAXI_WORLD_HUD_CHAIN_BELOW_DRAFT_GAP: 0.65,
  /** Local −Z offset from rear bumper for score + chain (behind taxi). */
  TAXI_WORLD_HUD_SCORE_BEHIND_Z: 0.55,
  /** Score sprite height as fraction of taxi body height (chassis local Y). */
  TAXI_WORLD_HUD_SCORE_Y_FRAC: 0.52,
  TAXI_WORLD_HUD_CHAIN_SCALE_X: 2.0,
  TAXI_WORLD_HUD_CHAIN_SCALE_Y: 0.85,
  TAXI_WORLD_HUD_SCORE_SCALE_X: 4.0,
  TAXI_WORLD_HUD_SCORE_SCALE_Y: 1.05,
  /**
   * Collision AABB half-length (Z) × this vs full taxi length/2 — only traffic collision uses it;
   * slipstream still uses full bounds. 0.9 ≈ 10% shorter front+back (forgiving).
   */
  TAXI_COLLISION_Z_HALF_SCALE: 0.9,
  /** Roof lamp while drafting (空車 off). */
  TAXI_ROOF_LIGHT_DRAFT: GAME_PALETTE.TAXI_ROOF_DRAFT_AMBER,
  /** ×10 milestone: neon pink flash window (CLAUDE.md). */
  TAXI_ROOF_LIGHT_M10_FLASH_MS: 2000,
  TAXI_ROOF_LIGHT_M10_PULSE_HZ: 5,
  /** ×20: pink/blue alternation rate while chain ≥ 20. */
  TAXI_ROOF_LIGHT_M20_STROBE_HZ: 7,
  /** Draft amber pulse: passed as `sin(nowMs * scale)`. */
  TAXI_ROOF_LIGHT_DRAFT_PULSE_SCALE: 0.007,

  // ── Scoring ──
  DISTANCE_SCORE_RATE: 1,
  DISTANCE_SCORE_INTERVAL: 5,

  // ── Visual Juice ──
  SCREEN_FLASH_DURATION: 100,
  /** ×10 "PERFECT" moment: full-screen tint hold + milestone copy. */
  PERFECT_FLASH_DURATION_MS: 280,
  PERFECT_MILESTONE_HOLD_MS: 1200,
  CHAIN_POP_SCALE: 1.3,
  CHAIN_POP_DURATION: 200,

  // ── Audio (Phase 4 step 32 — procedural Web Audio; tunable) ──
  /** Global audio kill switch (loops, one-shots, and music). */
  AUDIO_ENABLED: false,
  /** Master gain before destination (0–1). */
  AUDIO_MASTER: 0.38,
  /** When false, the taxi engine loop is silent (wind, draft, music, one-shots unchanged). */
  AUDIO_ENGINE_ENABLED: false,
  /** Engine loop loudness when at max scroll (relative). */
  AUDIO_ENGINE_GAIN: 0.2,
  /** Minimum engine mix at min scroll (keeps idle rumble). */
  AUDIO_ENGINE_GAIN_MIN_MIX: 0.38,
  AUDIO_ENGINE_HZ_MIN: 78,
  AUDIO_ENGINE_HZ_MAX: 152,
  AUDIO_ENGINE_FILTER_HZ: 380,
  AUDIO_ENGINE_BURST_HZ_ADD: 22,
  AUDIO_ENGINE_BURST_GAIN_MUL: 1.28,
  AUDIO_WIND_GAIN: 0.065,
  AUDIO_WIND_MIN_MIX: 0.55,
  AUDIO_WIND_FILTER_HZ: 820,
  /** Noise buffer length for wind loop (seconds). */
  AUDIO_WIND_NOISE_SEC: 2,
  AUDIO_DRAFT_GAIN: 0.1,
  AUDIO_DRAFT_MIN_MIX: 0.22,
  AUDIO_DRAFT_HZ: 288,
  /** Gain smoothing toward targets (higher = snappier). */
  AUDIO_LOOP_SMOOTH: 10,
  AUDIO_SLINGSHOT_GAIN: 0.42,
  AUDIO_SLINGSHOT_DURATION: 0.2,
  AUDIO_SLINGSHOT_BP_HZ_START: 420,
  AUDIO_SLINGSHOT_BP_HZ_END: 2600,
  AUDIO_MILESTONE_GAIN: 0.22,
  AUDIO_CRASH_GAIN: 0.48,
  AUDIO_CRASH_DURATION: 0.38,
  AUDIO_CRASH_LP_HZ: 420,

  // ── Music (Phase 4 step 33 — procedural synthwave + chain layers) ──
  /** When false, music bus is silent (SFX unchanged). */
  AUDIO_MUSIC_ENABLED: false,
  /** Gain into master for music bus (SFX use separate bus). Was ~0.14 — too quiet vs engine. */
  AUDIO_MUSIC_MASTER: 0.78,
  AUDIO_MUSIC_BPM: 82,
  /** Layer crossfade smoothing (higher = faster). */
  AUDIO_MUSIC_LAYER_SMOOTH: 8,
  /** Fade play/pause on the music mix (higher = reach full level faster). */
  AUDIO_MUSIC_PLAY_FADE_SMOOTH: 28,

  // ── Background music (external audio file) ──
  /** Loop an external track from `public/` without resetting on retry. */
  AUDIO_BG_MUSIC_ENABLED: true,
  AUDIO_BG_MUSIC_FILE: "thousandsuns.mp3",
  /** 0–1. Requested: 50%. */
  AUDIO_BG_MUSIC_VOLUME: 0.25,
  /** Inner mix trim (post-gain) before music bus. */
  AUDIO_MUSIC_MIX_INNER: 1.0,
  AUDIO_MUSIC_BASS_HZ: 65.41,
  AUDIO_MUSIC_BASS_GAIN: 0.22,
  AUDIO_MUSIC_PAD_ROOT_HZ: 130.81,
  AUDIO_MUSIC_PAD_FIFTH_HZ: 196.0,
  AUDIO_MUSIC_PAD_GAIN: 0.1,
  AUDIO_MUSIC_LAYER1_HZ: 392.0,
  AUDIO_MUSIC_LAYER1_MAX: 0.1,
  AUDIO_MUSIC_LAYER2_HZ: 440.0,
  AUDIO_MUSIC_LAYER2_MAX: 0.09,
  AUDIO_MUSIC_LAYER3_HZ: 987.77,
  AUDIO_MUSIC_LAYER3_MAX: 0.08,
  AUDIO_MUSIC_LAYER4_BP_HZ: 2400,
  AUDIO_MUSIC_LAYER4_MAX: 0.055,
  AUDIO_MUSIC_KICK_HZ: 58,
  AUDIO_MUSIC_KICK_PEAK: 0.38,
  AUDIO_MUSIC_HAT_GAIN: 0.12,
  /** Hat layer scales with chain (× this × layer ramp). */
  AUDIO_MUSIC_HAT_LAYER_MAX: 0.45,

  /** ACESFilmic exposure (direct render, no bloom). */
  TONE_MAPPING_EXPOSURE: 1.05,

  // ── Particles ──
  SPEED_LINES_COUNT: 30,
  SPEED_LINES_BASE_ALPHA: 0.3,
  SPEED_LINES_MAX_ALPHA: 0.8,
  /** Neon streaks behind taxi on slingshot (CLAUDE: 3–4). */
  SLINGSHOT_TRAIL_STREAK_COUNT: 4,
  SLINGSHOT_TRAIL_DURATION_MS: 500,
  /** Thin box: width (X), height (Y), length along −Z behind the taxi. */
  SLINGSHOT_TRAIL_LENGTH: 2.0,
  SLINGSHOT_TRAIL_WIDTH: 0.14,
  SLINGSHOT_TRAIL_BOX_HEIGHT: 0.1,
  /** World Y of streak center (above asphalt; was too low when forced to 0.06). */
  SLINGSHOT_TRAIL_SURFACE_Y: 1.12,
  /** Push streak center behind rear bumper (world Z). */
  SLINGSHOT_TRAIL_BACK_OFFSET_Z: 0.85,
  /** World-Z motion vs road scroll (1 = same as traffic). */
  SLINGSHOT_TRAIL_SCROLL_SCALE: 1.05,

  /** Successful slipstream: point burst from rear bumper toward screen bottom (−Z). */
  SLIPSTREAM_ACTIVATE_BURST_COUNT: 56,
  SLIPSTREAM_ACTIVATE_BURST_POINT_SIZE: 0.14,
  SLIPSTREAM_ACTIVATE_BURST_OPACITY: 0.78,
  SLIPSTREAM_ACTIVATE_BURST_COLOR: GAME_PALETTE.SLIPSTREAM_WIND,
  /** Rear bumper anchor — matches `PlayerTaxi.getRearWorldPosition` Y fraction. */
  SLIPSTREAM_ACTIVATE_BURST_EMIT_Y_FRAC: 0.35,
  SLIPSTREAM_ACTIVATE_BURST_EMIT_Z_INSET: 0.02,
  SLIPSTREAM_ACTIVATE_BURST_SPREAD_X: 0.32,
  SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y: 0.14,
  /** Initial speed along −Z (world units / second). */
  SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN: 24,
  SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX: 42,
  /** Lateral velocity as fraction of |vz|. */
  SLIPSTREAM_ACTIVATE_BURST_LATERAL_SCALE: 0.32,
  /** Extra −Y per unit speed (screen-down pull in chase view). */
  SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y: -0.2,
  SLIPSTREAM_ACTIVATE_BURST_Y_JITTER: 1.5,
  SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN: 0.26,
  SLIPSTREAM_ACTIVATE_BURST_LIFE_MAX: 0.52,
  /** Per-second velocity retention (exponential; 0.92 ≈ visible stream ~0.4–0.6s). */
  SLIPSTREAM_ACTIVATE_BURST_DRAG: 0.9,
  SLIPSTREAM_ACTIVATE_BURST_GRAVITY: 2.2,

  /** Alias for `GAME_PALETTE` — use in engine + UI. */
  PALETTE: GAME_PALETTE,

  // ── Touch / pointer (lane input) ──
  /** Half-screen tap ignores touches within this many px of horizontal center. */
  TOUCH_CENTER_DEAD_ZONE_PX: 20,
  /** Pointermove lane-steering only after finger moves this far from pointerdown (avoids double input with tap). */
  TOUCH_DRAG_SLOP_PX: 16,

  // ── Swipe Input (legacy; lane uses touch zones — kept for reference) ──
  SWIPE_THRESHOLD: 30,
  SWIPE_MAX_TIME: 300,

  // ── Scene lighting (daytime / outdoor track — MeshStandard fill; colors: `PALETTE`) ──
  AMBIENT_LIGHT_INTENSITY: 0.55,
  DIRECTIONAL_LIGHT_INTENSITY: 1.35,
  DIRECTIONAL_LIGHT_POSITION: [12, 28, 10] as const,
  HEMISPHERE_LIGHT_INTENSITY: 0.65,
} as const;
