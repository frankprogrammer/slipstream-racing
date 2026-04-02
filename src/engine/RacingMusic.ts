/**
 * Procedural racing music — tempo, drum intensity, and melodic layers
 * all scale with the current speed parameter (0..1).
 *
 * 4-section chord progression (Em → C → G → Am), each 8 beats long,
 * creating a 32-beat cycle before repeating.
 *
 * No external audio files; everything is synthesized via Web Audio.
 */
export class RacingMusic {
  private readonly ctx: AudioContext;
  private readonly mix: GainNode;

  private playingInternal = false;
  private hasStarted = false;
  private curMix = 0;
  private speedT = 0;

  // Tempo state
  private readonly BPM_MIN = 110;
  private readonly BPM_MAX = 160;
  private beatAccSec = 0;
  private eighthAccSec = 0;
  private sixteenthAccSec = 0;
  private beatCount = 0;

  // Section tracking: 4 sections × 8 beats = 32-beat loop
  private section = 0;
  private readonly BEATS_PER_SECTION = 8;
  private readonly NUM_SECTIONS = 4;

  // Noise buffers (reused)
  private hatNoise!: AudioBuffer;
  private snareNoise!: AudioBuffer;

  // Drums
  private kickOsc!: OscillatorNode;
  private kickAmp!: GainNode;
  private hatBus!: GainNode;
  private snareBus!: GainNode;

  // Bass sequencer — 8 eighth-notes per section
  private bassOsc!: OscillatorNode;
  private bassFilter!: BiquadFilterNode;
  private bassGain!: GainNode;
  private readonly bassPatterns = [
    [82.41, 82.41, 98.0, 82.41, 61.74, 82.41, 98.0, 110.0],       // Em
    [65.41, 65.41, 82.41, 98.0, 65.41, 82.41, 98.0, 130.81],       // C
    [98.0, 98.0, 123.47, 98.0, 73.42, 98.0, 123.47, 146.83],       // G
    [110.0, 110.0, 130.81, 110.0, 82.41, 110.0, 130.81, 82.41],    // Am
  ];
  private bassStep = 0;

  // Arpeggio — 8 sixteenth-notes per section
  private arpOsc!: OscillatorNode;
  private arpFilter!: BiquadFilterNode;
  private arpGain!: GainNode;
  private readonly arpPatterns = [
    [329.63, 392.0, 493.88, 659.25, 493.88, 392.0, 659.25, 783.99],  // Em
    [261.63, 329.63, 392.0, 523.25, 392.0, 329.63, 523.25, 659.25],  // C
    [392.0, 493.88, 587.33, 783.99, 587.33, 493.88, 783.99, 987.77], // G
    [440.0, 523.25, 659.25, 880.0, 659.25, 523.25, 880.0, 659.25],   // Am
  ];
  private arpStep = 0;

  // Lead melody — one note per beat, 32 notes spanning all sections
  private leadOsc!: OscillatorNode;
  private leadFilter!: BiquadFilterNode;
  private leadGain!: GainNode;
  private readonly leadMelody = [
    659.25, 587.33, 493.88, 392.0, 329.63, 392.0, 493.88, 659.25,    // Em: ascending arc
    523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 493.88,   // C: peak and descend
    783.99, 739.99, 659.25, 587.33, 493.88, 587.33, 783.99, 880.0,    // G: soaring
    880.0, 783.99, 659.25, 523.25, 440.0, 493.88, 587.33, 659.25,     // Am: resolution
  ];
  private leadStep = 0;

  // Atmosphere pad — chord tones morph per section
  private padGain!: GainNode;
  private padFilter!: BiquadFilterNode;
  private padOsc1!: OscillatorNode;
  private padOsc2!: OscillatorNode;
  private readonly padChords: [number, number][] = [
    [164.81, 246.94],  // Em: E3 + B3
    [130.81, 196.0],   // C:  C3 + G3
    [196.0, 293.66],   // G:  G3 + D4
    [220.0, 329.63],   // Am: A3 + E4
  ];

  constructor(ctx: AudioContext, musicBus: AudioNode) {
    this.ctx = ctx;
    this.mix = ctx.createGain();
    this.mix.gain.value = 0;
    this.mix.connect(musicBus);
  }

  build(): void {
    const ctx = this.ctx;
    const mix = this.mix;

    // Pre-bake noise buffers
    const hatLen = Math.floor(ctx.sampleRate * 0.035);
    this.hatNoise = ctx.createBuffer(1, hatLen, ctx.sampleRate);
    const hd = this.hatNoise.getChannelData(0);
    for (let i = 0; i < hatLen; i++) hd[i] = (Math.random() * 2 - 1) * ((1 - i / hatLen) ** 1.5);

    const snareLen = Math.floor(ctx.sampleRate * 0.08);
    this.snareNoise = ctx.createBuffer(1, snareLen, ctx.sampleRate);
    const sd = this.snareNoise.getChannelData(0);
    for (let i = 0; i < snareLen; i++) sd[i] = (Math.random() * 2 - 1) * ((1 - i / snareLen) ** 0.8);

    // ── Kick ──
    this.kickOsc = ctx.createOscillator();
    this.kickOsc.type = 'sine';
    this.kickOsc.frequency.value = 60;
    this.kickAmp = ctx.createGain();
    this.kickAmp.gain.value = 0.0001;
    this.kickOsc.connect(this.kickAmp).connect(mix);
    this.kickOsc.start(0);

    // ── Hi-hat bus ──
    this.hatBus = ctx.createGain();
    this.hatBus.gain.value = 0;
    this.hatBus.connect(mix);

    // ── Snare bus ──
    this.snareBus = ctx.createGain();
    this.snareBus.gain.value = 0;
    this.snareBus.connect(mix);

    // ── Bass sequencer ──
    this.bassOsc = ctx.createOscillator();
    this.bassOsc.type = 'sawtooth';
    this.bassOsc.frequency.value = this.bassPatterns[0][0];
    this.bassFilter = ctx.createBiquadFilter();
    this.bassFilter.type = 'lowpass';
    this.bassFilter.frequency.value = 200;
    this.bassFilter.Q.value = 1.5;
    this.bassGain = ctx.createGain();
    this.bassGain.gain.value = 0.18;
    this.bassOsc.connect(this.bassFilter).connect(this.bassGain).connect(mix);
    this.bassOsc.start(0);

    // ── Arpeggio layer ──
    this.arpOsc = ctx.createOscillator();
    this.arpOsc.type = 'triangle';
    this.arpOsc.frequency.value = this.arpPatterns[0][0];
    this.arpFilter = ctx.createBiquadFilter();
    this.arpFilter.type = 'lowpass';
    this.arpFilter.frequency.value = 600;
    this.arpFilter.Q.value = 2;
    this.arpGain = ctx.createGain();
    this.arpGain.gain.value = 0;
    this.arpOsc.connect(this.arpFilter).connect(this.arpGain).connect(mix);
    this.arpOsc.start(0);

    // ── Lead melody ──
    this.leadOsc = ctx.createOscillator();
    this.leadOsc.type = 'sine';
    this.leadOsc.frequency.value = this.leadMelody[0];
    this.leadFilter = ctx.createBiquadFilter();
    this.leadFilter.type = 'lowpass';
    this.leadFilter.frequency.value = 800;
    this.leadFilter.Q.value = 1.5;
    this.leadGain = ctx.createGain();
    this.leadGain.gain.value = 0;
    this.leadOsc.connect(this.leadFilter).connect(this.leadGain).connect(mix);
    this.leadOsc.start(0);

    // ── Atmosphere pad ──
    this.padFilter = ctx.createBiquadFilter();
    this.padFilter.type = 'lowpass';
    this.padFilter.frequency.value = 300;
    this.padFilter.Q.value = 0.7;
    this.padGain = ctx.createGain();
    this.padGain.gain.value = 0.06;
    this.padFilter.connect(this.padGain).connect(mix);

    this.padOsc1 = ctx.createOscillator();
    this.padOsc1.type = 'sine';
    this.padOsc1.frequency.value = this.padChords[0][0];
    this.padOsc1.connect(this.padFilter);
    this.padOsc1.start(0);

    this.padOsc2 = ctx.createOscillator();
    this.padOsc2.type = 'sine';
    this.padOsc2.frequency.value = this.padChords[0][1];
    const pad2Gain = ctx.createGain();
    pad2Gain.gain.value = 0.7;
    this.padOsc2.connect(pad2Gain).connect(this.padFilter);
    this.padOsc2.start(0);
  }

  update(delta: number, playing: boolean, speedT: number): void {
    if (playing) this.hasStarted = true;
    this.playingInternal = this.hasStarted;
    this.speedT = playing ? Math.max(0, Math.min(1, speedT)) : 0;

    const k = Math.min(1, 12 * delta);
    const targetMix = this.hasStarted ? 1 : 0;
    this.curMix += (targetMix - this.curMix) * k;
    this.mix.gain.value = this.curMix;

    const bpm = this.BPM_MIN + this.speedT * (this.BPM_MAX - this.BPM_MIN);
    const beatSec = 60 / bpm;
    const eighthSec = beatSec / 2;
    const sixteenthSec = beatSec / 4;

    this.beatAccSec += delta;
    this.eighthAccSec += delta;
    this.sixteenthAccSec += delta;

    const now = this.ctx.currentTime;

    // ── Beat (kick + lead + section tracking) ──
    if (this.beatAccSec >= beatSec) {
      this.beatAccSec -= beatSec;
      this.beatCount++;
      this.triggerKick();

      // Lead melody advances every beat
      this.leadStep = (this.leadStep + 1) % this.leadMelody.length;
      this.leadOsc.frequency.setTargetAtTime(this.leadMelody[this.leadStep], now, 0.03);

      // Section changes every BEATS_PER_SECTION beats
      const totalBeats = this.BEATS_PER_SECTION * this.NUM_SECTIONS;
      const newSection = Math.floor((this.beatCount % totalBeats) / this.BEATS_PER_SECTION);
      if (newSection !== this.section) {
        this.section = newSection;
        this.bassStep = 0;
        this.arpStep = 0;
        this.padOsc1.frequency.setTargetAtTime(this.padChords[this.section][0], now, 0.3);
        this.padOsc2.frequency.setTargetAtTime(this.padChords[this.section][1], now, 0.3);
      }
    }

    // ── Eighth notes (hat + bass + snare) ──
    if (this.eighthAccSec >= eighthSec) {
      this.eighthAccSec -= eighthSec;
      this.triggerHat();

      const bp = this.bassPatterns[this.section];
      this.bassStep = (this.bassStep + 1) % bp.length;
      this.bassOsc.frequency.setTargetAtTime(bp[this.bassStep], now, 0.02);

      if (this.beatCount % 2 === 0) {
        this.triggerSnare();
      }
    }

    // ── Sixteenth notes (arp) ──
    if (this.sixteenthAccSec >= sixteenthSec) {
      this.sixteenthAccSec -= sixteenthSec;
      const ap = this.arpPatterns[this.section];
      this.arpStep = (this.arpStep + 1) % ap.length;
      this.arpOsc.frequency.setTargetAtTime(ap[this.arpStep], now, 0.01);
    }

    // ── Layer volumes based on speedT ──
    const s = this.speedT;
    const cm = this.curMix;

    const hatTarget = (0.15 + s * 0.25) * cm;
    this.hatBus.gain.value += (hatTarget - this.hatBus.gain.value) * k;

    const snareTarget = Math.max(0, (s - 0.25) / 0.75) * 0.3 * cm;
    this.snareBus.gain.value += (snareTarget - this.snareBus.gain.value) * k;

    const bassFilterHz = 200 + s * 400;
    this.bassFilter.frequency.setTargetAtTime(bassFilterHz, now, 0.1);
    const bassTarget = (0.14 + s * 0.08) * cm;
    this.bassGain.gain.value += (bassTarget - this.bassGain.gain.value) * k;

    const arpAmount = Math.max(0, (s - 0.4) / 0.6);
    const arpFilterHz = 600 + arpAmount * 2000;
    this.arpFilter.frequency.setTargetAtTime(arpFilterHz, now, 0.1);
    const arpTarget = arpAmount * 0.08 * cm;
    this.arpGain.gain.value += (arpTarget - this.arpGain.gain.value) * k;

    // Lead: fades in above speedT 0.3, fully present at 0.8+
    const leadAmount = Math.max(0, (s - 0.3) / 0.5);
    const leadFilterHz = 800 + leadAmount * 2500;
    this.leadFilter.frequency.setTargetAtTime(leadFilterHz, now, 0.1);
    const leadTarget = leadAmount * 0.07 * cm;
    this.leadGain.gain.value += (leadTarget - this.leadGain.gain.value) * k;

    const padFilterHz = 300 + s * 600;
    this.padFilter.frequency.setTargetAtTime(padFilterHz, now, 0.15);
    const padTarget = (0.04 + s * 0.04) * cm;
    this.padGain.gain.value += (padTarget - this.padGain.gain.value) * k;
  }

  private triggerKick(): void {
    if (!this.playingInternal) return;
    const t = this.ctx.currentTime;
    const peak = 0.25 + this.speedT * 0.15;

    this.kickOsc.frequency.cancelScheduledValues(t);
    this.kickOsc.frequency.setValueAtTime(80, t);
    this.kickOsc.frequency.exponentialRampToValueAtTime(30, t + 0.07);

    this.kickAmp.gain.cancelScheduledValues(t);
    this.kickAmp.gain.setValueAtTime(peak, t);
    this.kickAmp.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
  }

  private triggerHat(): void {
    if (!this.playingInternal) return;
    const t0 = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.hatNoise;
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 7000;
    const g = this.ctx.createGain();
    g.gain.value = 0.12 + this.speedT * 0.08;
    src.connect(hp).connect(g).connect(this.hatBus);
    src.start(t0);
    src.stop(t0 + 0.04);
  }

  private triggerSnare(): void {
    if (!this.playingInternal || this.speedT < 0.25) return;
    const t0 = this.ctx.currentTime;

    const nSrc = this.ctx.createBufferSource();
    nSrc.buffer = this.snareNoise;
    const nHp = this.ctx.createBiquadFilter();
    nHp.type = 'highpass';
    nHp.frequency.value = 2000;
    const nG = this.ctx.createGain();
    nG.gain.setValueAtTime(0.2, t0);
    nG.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.08);
    nSrc.connect(nHp).connect(nG).connect(this.snareBus);
    nSrc.start(t0);
    nSrc.stop(t0 + 0.08);

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, t0);
    osc.frequency.exponentialRampToValueAtTime(80, t0 + 0.04);
    const og = this.ctx.createGain();
    og.gain.setValueAtTime(0.18, t0);
    og.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.05);
    osc.connect(og).connect(this.snareBus);
    osc.start(t0);
    osc.stop(t0 + 0.06);
  }
}
