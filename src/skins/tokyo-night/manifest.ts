/**
 * Skin manifest (procedural F1 / track reskin — engine uses `CONFIG`; this is reference for art swaps).
 */
export const SKIN_MANIFEST = {
  name: 'Track Day (F1)',

  // ── Color Palette ──
  palette: {
    neonPrimary: '#E10600',    // F1 red
    neonSecondary: '#00D2BE',  // broadcast cyan
    neonAccent: '#3671C6',   // racing blue
    neonWarm: '#FF8700',       // papaya / accent
    road: '#5C5C62',
    sky: '#7EC8FF',
    taxiBody: '#EEEFF2',
    taxiRoof: '#00D2BE',
    uiText: '#F8FAFC',
    uiDim: '#9CA3AF',
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

  // ── Neon accent colors (reference; palette / UI) ──
  neonSignColors: [
    0xe10600, 0x00d2be, 0x3671c6, 0xff8700, 0xffffff, 0x15151e,
  ],
};
