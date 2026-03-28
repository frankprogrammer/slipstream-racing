/**
 * SLIPSTREAM: TOKYO NIGHT — Game Configuration
 *
 * All tunable gameplay values in one file.
 * Change the game's feel by editing ONLY this file.
 * Engine code should never hardcode any of these values.
 */

export interface TrafficPhase {
  startTime: number;
  spawnRate: number;
  lanes: number[];
  speedVariance: number;
  laneChange?: boolean;
}

export const CONFIG = {
  // ── Canvas ──
  GAME_WIDTH: 390,
  GAME_HEIGHT: 844,

  // ── Camera (road-centered: fixed X=0, chase down centerline) ──
  CAMERA_HEIGHT: 22.0,
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
  CAMERA_FOV_MAX: 65,
  CAMERA_FOV_LERP: 0.02,
  CAMERA_SHAKE_INTENSITY: 0.03,
  CAMERA_SHAKE_DECAY: 0.9,

  // ── Lanes ──
  LANE_COUNT: 3,
  LANE_WIDTH: 2.5,
  LANE_SWITCH_DURATION: 150,

  // ── Road ──
  ROAD_SEGMENT_LENGTH: 20,
  ROAD_VISIBLE_SEGMENTS: 8,
  ROAD_WIDTH: 10,
  PROP_DENSITY: 0.6,
  FOG_NEAR: 15,
  FOG_FAR: 60,
  FOG_COLOR: 0x08050e,

  // ── Speed ──
  BASE_SCROLL_SPEED: 0.15,
  MAX_SCROLL_SPEED: 0.4,
  SPEED_RAMP_RATE: 0.00005,
  SLINGSHOT_SPEED_BURST: 0.1,
  SLINGSHOT_BURST_DURATION: 500,

  // ── Slipstream ──
  SLIPSTREAM_ZONE_WIDTH: 2.0,
  SLIPSTREAM_ZONE_DEPTH: 3.5,
  DRAFT_FILL_RATE: 0.02,

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
  VEHICLE_TYPES: 2,
  VEHICLE_LANE_CHANGE_TELEGRAPH: 1500,
  /**
   * World +Z speed (same units as BASE_SCROLL_SPEED). Traffic moves forward with the road flow
   * but slower than the player; net approach = BASE_SCROLL_SPEED − this (× speed variance).
   */
  VEHICLE_TRAFFIC_FORWARD_SPEED: 0.07,
  /** Floor for net −Δz so traffic never drifts the wrong way if variance is high. */
  VEHICLE_TRAFFIC_MIN_APPROACH: 0.02,
  VEHICLE_POOL_SIZE: 20,

  // ── Player Taxi ──
  TAXI_BODY_ROLL: 5,
  TAXI_ROLL_DURATION: 200,
  TAXI_WHEEL_TURN: 15,
  TAXI_POSITION_Z: 0,
  TAXI_DIMENSIONS: { width: 1.8, height: 0.8, length: 3.5 },

  // ── Scoring ──
  DISTANCE_SCORE_RATE: 1,
  DISTANCE_SCORE_INTERVAL: 5,

  // ── Visual Juice ──
  SCREEN_FLASH_DURATION: 100,
  CHAIN_POP_SCALE: 1.3,
  CHAIN_POP_DURATION: 200,

  // ── Post-Processing ──
  BLOOM_INTENSITY: 0.45,
  BLOOM_THRESHOLD: 0.2,
  BLOOM_RADIUS: 0.4,
  BLOOM_RESOLUTION_SCALE: 0.5,

  // ── Particles ──
  SPEED_LINES_COUNT: 30,
  SPEED_LINES_BASE_ALPHA: 0.3,
  SPEED_LINES_MAX_ALPHA: 0.8,
  RAIN_PARTICLE_COUNT: 100,
  RAIN_SPEED: 0.3,
  RAIN_SPREAD: 15,
  SLINGSHOT_PARTICLE_COUNT: 20,

  // ── Palette (Tokyo Night) ──
  PALETTE: {
    NEON_PINK: 0xff2d7b,
    NEON_BLUE: 0x00e5ff,
    NEON_PURPLE: 0xb44dff,
    NEON_ORANGE: 0xff6b2d,
    ROAD_DARK: 0x291f3f,
    TRAFFIC_BODY_COMPACT: 0x575766,
    TRAFFIC_BODY_TRUCK: 0x424254,
    SKY: 0x08050e,
    TAXI_BODY: 0xe8b84d,
    TAXI_ROOF_LIGHT: 0x00ff88,
    TAIL_LIGHT: 0xff3333,
    HEADLIGHT: 0xffeedd,
    LANE_MARKING: 0xffffff,
    UI_TEXT: 0xf0e8ff,
  },

  // ── Swipe Input ──
  SWIPE_THRESHOLD: 30,
  SWIPE_MAX_TIME: 300,

  // ── Scene lighting (MeshStandard vehicles need readable fill) ──
  AMBIENT_LIGHT_COLOR: 0x8899bb,
  AMBIENT_LIGHT_INTENSITY: 0.825,
  DIRECTIONAL_LIGHT_COLOR: 0xffeedd,
  DIRECTIONAL_LIGHT_INTENSITY: 0.75,
  DIRECTIONAL_LIGHT_POSITION: [8, 18, 6] as const,
  HEMISPHERE_LIGHT_SKY: 0x6688cc,
  HEMISPHERE_LIGHT_GROUND: 0x1a1428,
  HEMISPHERE_LIGHT_INTENSITY: 0.42,
} as const;
