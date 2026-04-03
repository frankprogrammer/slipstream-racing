import { CONFIG } from '../config';
import { SynthwaveMusic } from './SynthwaveMusic';

/**
 * Game world: +X is left on screen, +Z is forward into the screen.
 * Web Audio spatial panning assumes +X is to the listener's right — negate X for correct L/R.
 */
function audioSpaceX(gameX: number): number {
  return -gameX;
}

/**
 * Procedural Web Audio (Step 32): engine + wind loops, draft tone, one-shot slingshot / milestones / crash.
 * Step 33: music bus + chain-reactive synth bed (`SynthwaveMusic`).
 * Unlocks after first pointer (browser autoplay policy). No external files — skin `manifest.audio` can be wired later.
 */
export type GameAudioUpdate = {
  playing: boolean;
  scrollPerFrame: number;
  inDraft: boolean;
  draftMeter: number;
  burstActive: boolean;
  chain: number;
  /** AudioListener world position (player car center) — used for 3D traffic engines only. */
  listenerX: number;
  listenerY: number;
  listenerZ: number;
};

/** Player engine: stereo, non-spatial (no PannerNode). */
type RacecarPlayerSlot = {
  src: AudioBufferSourceNode;
  gain: GainNode;
  smoothedRate: number;
};

/** Traffic engine: 3D positional. */
type RacecarTrafficSlot = {
  src: AudioBufferSourceNode;
  gain: GainNode;
  panner: PannerNode;
  smoothedRate: number;
};

export class GameAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfxBus: GainNode | null = null;
  private musicBus: GainNode | null = null;
  private music: SynthwaveMusic | null = null;
  private loopsBuilt = false;
  private bgMusicEl: HTMLAudioElement | null = null;
  private bgMusicSource: MediaElementAudioSourceNode | null = null;
  private bgMusicGain: GainNode | null = null;
  private appFocused = true;

  private engineOsc: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineGain: GainNode | null = null;

  private windSrc: AudioBufferSourceNode | null = null;
  private windFilter: BiquadFilterNode | null = null;
  private windGain: GainNode | null = null;

  private draftOsc: OscillatorNode | null = null;
  private draftGain: GainNode | null = null;

  /** Decoded racecar1.mp3 buffer (shared by all engine sources). */
  private racecarBuf: AudioBuffer | null = null;
  private racecarPlayer: RacecarPlayerSlot | null = null;
  private racecarTraffic: RacecarTrafficSlot[] = [];
  private racecarLoaded = false;

  /** Call once from a user gesture so AudioContext can start (autoplay unlock). */
  unlock(): void {
    if (!CONFIG.AUDIO_ENABLED && !CONFIG.AUDIO_BG_MUSIC_ENABLED) return;

    if (CONFIG.AUDIO_BG_MUSIC_ENABLED && !this.bgMusicEl) {
      const el = document.createElement('audio');
      el.src = `${import.meta.env.BASE_URL}${CONFIG.AUDIO_BG_MUSIC_FILE}`;
      el.loop = true;
      el.preload = 'auto';
      el.volume = CONFIG.AUDIO_BG_MUSIC_VOLUME;
      this.bgMusicEl = el;
    }

    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return;

    if (!this.ctx) {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = CONFIG.AUDIO_MASTER;
      this.master.connect(this.ctx.destination);
      this.sfxBus = this.ctx.createGain();
      this.sfxBus.gain.value = 1;
      this.sfxBus.connect(this.master);
      this.musicBus = this.ctx.createGain();
      this.musicBus.gain.value = CONFIG.AUDIO_MUSIC_ENABLED
        ? CONFIG.AUDIO_MUSIC_MASTER
        : 0;
      this.musicBus.connect(this.master);
      this.buildLoops();
    }

    if (this.ctx && this.master && this.bgMusicEl && !this.bgMusicSource) {
      this.bgMusicSource = this.ctx.createMediaElementSource(this.bgMusicEl);
      this.bgMusicGain = this.ctx.createGain();
      this.bgMusicGain.gain.value = CONFIG.AUDIO_BG_MUSIC_ENABLED
        ? CONFIG.AUDIO_BG_MUSIC_VOLUME
        : 0;
      this.bgMusicSource.connect(this.bgMusicGain);
      this.bgMusicGain.connect(this.master);
      // iOS Safari may ignore element.volume; keep media at full and control via GainNode.
      this.bgMusicEl.volume = 1;
      this.bgMusicEl.muted = false;
    }

    if (CONFIG.AUDIO_RACECAR_ENABLED && this.ctx && !this.racecarLoaded) {
      this.racecarLoaded = true;
      void this.loadRacecarBuffer();
    }

    this.applyFocusState();
  }

  private async loadRacecarBuffer(): Promise<void> {
    if (!this.ctx) return;
    try {
      const url = `${import.meta.env.BASE_URL}${CONFIG.AUDIO_RACECAR_FILE}`;
      const resp = await fetch(url);
      const ab = await resp.arrayBuffer();
      this.racecarBuf = await this.ctx.decodeAudioData(ab);
      this.buildRacecarSources();
    } catch (err) {
      console.warn('GameAudio: failed to load racecar engine', err);
    }
  }

  private buildRacecarSources(): void {
    if (!this.ctx || !this.master || !this.racecarBuf) return;
    const ctx = this.ctx;
    const buf = this.racecarBuf;

    const makePanner = (): PannerNode => {
      const p = ctx.createPanner();
      p.panningModel = 'HRTF';
      p.distanceModel = 'inverse';
      p.refDistance = CONFIG.AUDIO_RACECAR_REF_DISTANCE;
      p.maxDistance = CONFIG.AUDIO_RACECAR_MAX_DISTANCE;
      p.rolloffFactor = CONFIG.AUDIO_RACECAR_ROLLOFF;
      p.coneInnerAngle = 360;
      p.coneOuterAngle = 360;
      return p;
    };

    const makePlayerSlot = (vol: number): RacecarPlayerSlot => {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.playbackRate.value = 1;
      const gain = ctx.createGain();
      gain.gain.value = vol;
      src.connect(gain);
      gain.connect(this.master!);
      src.start(0);
      return { src, gain, smoothedRate: 1 };
    };

    const makeTrafficSlot = (vol: number): RacecarTrafficSlot => {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.playbackRate.value = 1;
      const gain = ctx.createGain();
      gain.gain.value = vol;
      const panner = makePanner();
      src.connect(gain);
      gain.connect(panner);
      panner.connect(this.master!);
      src.start(0);
      return { src, gain, panner, smoothedRate: 1 };
    };

    this.racecarPlayer = makePlayerSlot(CONFIG.AUDIO_RACECAR_PLAYER_VOLUME);

    for (let i = 0; i < CONFIG.VEHICLE_POOL_SIZE; i++) {
      this.racecarTraffic.push(makeTrafficSlot(0));
    }
  }

  private racecarPlaybackRate(scrollPerFrame: number): number {
    const base = CONFIG.BASE_SCROLL_SPEED;
    const max = CONFIG.MAX_SCROLL_SPEED;
    const span = Math.max(1e-6, max - base);
    const s = Math.max(0, Math.min(1, (scrollPerFrame - base) / span));
    const lo = CONFIG.AUDIO_RACECAR_PLAYBACK_RATE_AT_MIN;
    const hi = CONFIG.AUDIO_RACECAR_PLAYBACK_RATE_AT_MAX;
    if (s <= 0.5) return lo + (1 - lo) * (s / 0.5);
    return 1 + (hi - 1) * ((s - 0.5) / 0.5);
  }

  /**
   * Set traffic engine source positions & gains. Call each frame from main.ts.
   * @param slots — one call per pool slot: `(index, active, x, y, z, speedMul)`.
   */
  updateTrafficEnginePositions(
    playing: boolean,
    cb: (
      visitSlot: (
        index: number,
        active: boolean,
        x: number,
        y: number,
        z: number,
        speedMul: number,
      ) => void,
    ) => void,
    delta: number,
  ): void {
    if (!this.racecarTraffic.length) return;
    if (!playing) {
      for (const slot of this.racecarTraffic) slot.gain.gain.value = 0;
      return;
    }
    const smooth = Math.min(1, CONFIG.AUDIO_RACECAR_PLAYBACK_RATE_SMOOTH * delta);
    const vol = CONFIG.AUDIO_RACECAR_TRAFFIC_VOLUME;
    const baseRate = this.racecarPlaybackRate(CONFIG.VEHICLE_TRAFFIC_FORWARD_SPEED);
    cb((index, active, x, y, z, speedMul) => {
      if (index >= this.racecarTraffic.length) return;
      const slot = this.racecarTraffic[index]!;
      if (!active) {
        slot.gain.gain.value = 0;
        return;
      }
      slot.gain.gain.value = vol;
      slot.panner.positionX.value = audioSpaceX(x);
      slot.panner.positionY.value = y;
      slot.panner.positionZ.value = z;
      const target = baseRate * Math.max(0.5, speedMul);
      slot.smoothedRate += (target - slot.smoothedRate) * smooth;
      slot.src.playbackRate.value = slot.smoothedRate;
    });
  }

  setAppFocused(focused: boolean): void {
    this.appFocused = focused;
    this.applyFocusState();
  }

  private applyFocusState(): void {
    if (this.ctx) {
      if (this.appFocused) {
        void this.ctx.resume();
      } else {
        void this.ctx.suspend();
      }
    }
    if (this.bgMusicEl) {
      if (this.appFocused && CONFIG.AUDIO_BG_MUSIC_ENABLED) {
        void this.bgMusicEl.play().catch(() => {});
      } else {
        this.bgMusicEl.pause();
      }
    }
  }

  private buildLoops(): void {
    if (!this.ctx || !this.sfxBus || !this.musicBus || this.loopsBuilt) return;
    this.loopsBuilt = true;
    const ctx = this.ctx;
    const out = this.sfxBus;

    this.engineOsc = ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = CONFIG.AUDIO_ENGINE_HZ_MIN;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = CONFIG.AUDIO_ENGINE_FILTER_HZ;
    this.engineFilter.Q.value = 0.7;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineOsc.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(out);

    const noiseBuf = this.makeNoiseBuffer(CONFIG.AUDIO_WIND_NOISE_SEC);
    this.windSrc = ctx.createBufferSource();
    this.windSrc.buffer = noiseBuf;
    this.windSrc.loop = true;
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.value = CONFIG.AUDIO_WIND_FILTER_HZ;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    this.windSrc.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(out);

    this.draftOsc = ctx.createOscillator();
    this.draftOsc.type = 'sine';
    this.draftOsc.frequency.value = CONFIG.AUDIO_DRAFT_HZ;
    this.draftGain = ctx.createGain();
    this.draftGain.gain.value = 0;
    this.draftOsc.connect(this.draftGain);
    this.draftGain.connect(out);

    this.engineOsc.start(0);
    this.draftOsc.start(0);
    this.windSrc.start(0);

    this.music = new SynthwaveMusic(ctx, this.musicBus);
    this.music.build();
  }

  private makeNoiseBuffer(durationSec: number): AudioBuffer {
    const ctx = this.ctx!;
    const len = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  /**
   * Positional racecar loops are independent of `AUDIO_ENABLED` (procedural SFX).
   * Must run every frame so gains mute on game over even when procedural audio is off.
   */
  private updateRacecarEngines(delta: number, u: GameAudioUpdate): void {
    if (!CONFIG.AUDIO_RACECAR_ENABLED || !this.ctx) return;

    const listener = this.ctx.listener;
    const lx = audioSpaceX(u.listenerX);
    if (listener.positionX) {
      listener.positionX.value = lx;
      listener.positionY.value = u.listenerY;
      listener.positionZ.value = u.listenerZ;
    } else {
      listener.setPosition(lx, u.listenerY, u.listenerZ);
    }

    if (!this.racecarPlayer) return;

    if (u.playing) {
      const rate = this.racecarPlaybackRate(u.scrollPerFrame);
      const sm = Math.min(1, CONFIG.AUDIO_RACECAR_PLAYBACK_RATE_SMOOTH * delta);
      this.racecarPlayer.smoothedRate +=
        (rate - this.racecarPlayer.smoothedRate) * sm;
      this.racecarPlayer.src.playbackRate.value =
        this.racecarPlayer.smoothedRate;
      this.racecarPlayer.gain.gain.value = CONFIG.AUDIO_RACECAR_PLAYER_VOLUME;
    } else {
      this.racecarPlayer.gain.gain.value = 0;
    }
  }

  update(delta: number, u: GameAudioUpdate): void {
    if (this.bgMusicGain) {
      this.bgMusicGain.gain.value = CONFIG.AUDIO_BG_MUSIC_ENABLED
        ? CONFIG.AUDIO_BG_MUSIC_VOLUME
        : 0;
    }

    this.updateRacecarEngines(delta, u);

    if (!CONFIG.AUDIO_ENABLED) {
      if (this.bgMusicEl) {
        if (!this.bgMusicSource) {
          this.bgMusicEl.volume = CONFIG.AUDIO_BG_MUSIC_VOLUME;
          this.bgMusicEl.muted = !CONFIG.AUDIO_BG_MUSIC_ENABLED;
        }
      }
      return;
    }
    if (this.bgMusicEl) {
      if (!this.bgMusicSource) {
        this.bgMusicEl.volume = CONFIG.AUDIO_BG_MUSIC_VOLUME;
        this.bgMusicEl.muted = !CONFIG.AUDIO_BG_MUSIC_ENABLED;
      }
    }
    this.music?.update(delta, u.playing, u.chain);
    if (this.musicBus) {
      this.musicBus.gain.value = CONFIG.AUDIO_MUSIC_ENABLED
        ? CONFIG.AUDIO_MUSIC_MASTER
        : 0;
    }

    if (
      !this.ctx ||
      !this.engineGain ||
      !this.windGain ||
      !this.draftGain ||
      !this.engineOsc
    ) {
      return;
    }

    const base = CONFIG.BASE_SCROLL_SPEED;
    const max = CONFIG.MAX_SCROLL_SPEED;
    const span = Math.max(1e-6, max - base);
    const t = Math.max(
      0,
      Math.min(1, (u.scrollPerFrame - base) / span)
    );

    const now = this.ctx.currentTime;
    if (CONFIG.AUDIO_ENGINE_ENABLED) {
      let hz =
        CONFIG.AUDIO_ENGINE_HZ_MIN +
        t * (CONFIG.AUDIO_ENGINE_HZ_MAX - CONFIG.AUDIO_ENGINE_HZ_MIN);
      if (u.burstActive) hz += CONFIG.AUDIO_ENGINE_BURST_HZ_ADD;
      this.engineOsc.frequency.setTargetAtTime(hz, now, 0.07);
    }

    const targetEngine =
      u.playing && CONFIG.AUDIO_ENGINE_ENABLED
        ? CONFIG.AUDIO_ENGINE_GAIN *
          (CONFIG.AUDIO_ENGINE_GAIN_MIN_MIX +
            (1 - CONFIG.AUDIO_ENGINE_GAIN_MIN_MIX) * t) *
          (u.burstActive ? CONFIG.AUDIO_ENGINE_BURST_GAIN_MUL : 1)
        : 0;
    const targetWind =
      u.playing
        ? CONFIG.AUDIO_WIND_GAIN *
          (CONFIG.AUDIO_WIND_MIN_MIX +
            (1 - CONFIG.AUDIO_WIND_MIN_MIX) * t)
        : 0;
    const targetDraft =
      u.playing && u.inDraft
        ? CONFIG.AUDIO_DRAFT_GAIN *
          (CONFIG.AUDIO_DRAFT_MIN_MIX +
            (1 - CONFIG.AUDIO_DRAFT_MIN_MIX) * u.draftMeter)
        : 0;

    const k = Math.min(1, CONFIG.AUDIO_LOOP_SMOOTH * delta);
    this.engineGain.gain.value += (targetEngine - this.engineGain.gain.value) * k;
    this.windGain.gain.value += (targetWind - this.windGain.gain.value) * k;
    this.draftGain.gain.value += (targetDraft - this.draftGain.gain.value) * k;
  }

  playSlingshot(): void {
    if (!CONFIG.AUDIO_ENABLED) return;
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const dur = CONFIG.AUDIO_SLINGSHOT_DURATION;
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) {
      const fade = 1 - i / n;
      data[i] = (Math.random() * 2 - 1) * fade;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(CONFIG.AUDIO_SLINGSHOT_BP_HZ_START, t0);
    bp.frequency.exponentialRampToValueAtTime(
      CONFIG.AUDIO_SLINGSHOT_BP_HZ_END,
      t0 + dur
    );
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(CONFIG.AUDIO_SLINGSHOT_GAIN, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.sfxBus);
    src.start(t0);
    src.stop(t0 + dur + 0.04);
  }

  playMilestone(chain: number): void {
    if (!CONFIG.AUDIO_ENABLED) return;
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const peak = CONFIG.AUDIO_MILESTONE_GAIN;

    const blip = (freq: number, start: number, len: number): void => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      const og = ctx.createGain();
      const t = ctx.currentTime + start;
      og.gain.setValueAtTime(0, t);
      og.gain.linearRampToValueAtTime(peak, t + 0.012);
      og.gain.exponentialRampToValueAtTime(0.0001, t + len);
      o.connect(og);
      og.connect(this.sfxBus!);
      o.start(t);
      o.stop(t + len + 0.06);
    };

    if (chain === 5) {
      blip(523.25, 0, 0.2);
    } else if (chain === 10) {
      blip(659.25, 0, 0.22);
      blip(987.77, 0, 0.22);
    } else if (chain === 15) {
      blip(523.25, 0, 0.09);
      blip(659.25, 0.08, 0.09);
      blip(783.99, 0.16, 0.09);
      blip(1046.5, 0.24, 0.14);
    } else if (chain >= 20) {
      blip(587.33, 0, 0.28);
      blip(739.99, 0, 0.28);
      blip(880, 0, 0.28);
      blip(1174.66, 0, 0.3);
    }
  }

  playCrash(): void {
    if (!CONFIG.AUDIO_ENABLED) return;
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const dur = CONFIG.AUDIO_CRASH_DURATION;
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) {
      const fade = (1 - i / n) ** 0.45;
      data[i] = (Math.random() * 2 - 1) * fade;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = CONFIG.AUDIO_CRASH_LP_HZ;
    const g = ctx.createGain();
    g.gain.setValueAtTime(CONFIG.AUDIO_CRASH_GAIN, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(lp);
    lp.connect(g);
    g.connect(this.sfxBus);
    src.start(t0);
    src.stop(t0 + dur + 0.03);
  }
}
