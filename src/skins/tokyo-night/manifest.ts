import { GAME_PALETTE, hexToCss } from '../../config';

/**
 * Skin manifest (procedural F1 / track reskin — engine uses `CONFIG.PALETTE`; this mirrors it for art swaps).
 */
export const SKIN_MANIFEST = {
  name: 'Track Day (F1)',

  // ── Color Palette (derived from `GAME_PALETTE` — single source of truth) ──
  palette: {
    neonPrimary: hexToCss(GAME_PALETTE.NEON_PINK),
    neonSecondary: hexToCss(GAME_PALETTE.NEON_BLUE),
    neonAccent: hexToCss(GAME_PALETTE.NEON_PURPLE),
    neonWarm: hexToCss(GAME_PALETTE.NEON_ORANGE),
    road: hexToCss(GAME_PALETTE.ROAD_DARK),
    sky: hexToCss(GAME_PALETTE.SKY),
    taxiBody: hexToCss(GAME_PALETTE.TAXI_BODY),
    taxiRoof: hexToCss(GAME_PALETTE.TAXI_ROOF_LIGHT),
    uiText: hexToCss(GAME_PALETTE.UI_TEXT),
    uiDim: hexToCss(GAME_PALETTE.UI_DIM),
  },

  // ── 3D Models (null = procedural mesh in engine until swapped) ──
  models: {
    playerTaxi: null,          // null: PlayerTaxi low-poly stack; else e.g. 'models/taxi.glb'
    vehicleA: null,            // null: TrafficVehicleVisuals compact; else GLB
    vehicleB: null,            // null: TrafficVehicleVisuals truck; else GLB
    neonSign: null,            // 'models/neon-sign.glb'
    lampPost: null,            // 'models/lamp-post.glb'
    barrier: null,             // 'models/road-barrier.glb'
    vendingMachine: null,      // 'models/vending-machine.glb'
  },

  // ── Textures ──
  textures: {
    roadSurface: null,         // 'textures/road-asphalt.png' (256x256 tiling)
    neonSignAtlas: null,       // 'textures/neon-signs.png' (512x512 atlas)
    rainDrop: null,            // 'textures/rain-particle.png' (32x32 sprite)
    speedLine: null,           // 'textures/speed-line.png' (4x64 sprite)
    skybox: null,              // 'textures/tokyo-night-sky.png' or gradient
  },

  // ── Audio ──
  audio: {
    engineHum: null,           // 'audio/taxi-engine.ogg'
    windLoop: null,            // 'audio/wind.ogg'
    draftLockOn: null,         // 'audio/draft-lock.ogg'
    slingshotRelease: null,    // 'audio/slingshot.ogg'
    crash: null,               // 'audio/crash.ogg'
    milestone5: null,          // 'audio/ding.ogg'
    milestone10: null,         // 'audio/chord.ogg'
    milestone15: null,         // 'audio/arpeggio.ogg'
    milestone20: null,         // 'audio/euphoric.ogg'
    bgMusic: null,             // 'audio/synthwave-lofi.ogg'
    rainAmbience: null,        // 'audio/rain-ambient.ogg'
  },

  // ── Vehicle Dimensions (for prototype box geometry) ──
  vehicleSizes: {
    taxi: { width: 1.8, height: 0.8, length: 3.5 },
    compactA: { width: 1.6, height: 0.7, length: 3.0 },
    truckB: { width: 2.0, height: 1.2, length: 4.5 },
  },

  // ── Rendering (engine: direct render — no bloom) ──
  postProcessing: {
    toneMappingExposure: 1.05,
  },

  // ── Neon accent colors (reference; matches `GAME_PALETTE`) ──
  neonSignColors: [
    GAME_PALETTE.NEON_PINK,
    GAME_PALETTE.NEON_BLUE,
    GAME_PALETTE.NEON_PURPLE,
    GAME_PALETTE.NEON_ORANGE,
    GAME_PALETTE.LANE_MARKING,
    GAME_PALETTE.UI_BG_APP,
  ],
};
