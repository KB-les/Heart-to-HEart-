# 11 — Sound Guide

> Every sound documented. When to play. When NOT to play. Volume levels.
> Sound is a subtle layer of the experience — it should soothe, never startle.

---

## 1. Sound Philosophy

- **Subtle.** Sounds are quiet, gentle, and unobtrusive.
- **Meaningful.** Every sound has a purpose (feedback, celebration, atmosphere).
- **Optional.** Mute must work globally and instantly.
- **Synthesized.** v1 uses Web Audio API synthesis (no audio files). Future: ambient nature loops.

---

## 2. Sound Effects (v1 — Synthesized)

### 2.1 Effect Catalog

| Effect | Description | Synthesis | Volume |
|--------|-------------|-----------|--------|
| `click` | Soft button press | Sine 440→880 Hz, 0.05s | 0.08 gain |
| `pageTurn` | Gentle page flip | White noise, bandpass 1200 Hz, 0.1s | 0.04 gain |
| `reveal` | Soft ascending chime | 3 notes: 440, 554.37, 659.25 Hz | 0.08 gain |
| `celebrate` | Warm 4-note arpeggio | 523.25, 659.25, 783.99, 1046.5 Hz | 0.08 gain |
| `gentleChime` | Reserved (ambient) | Same as reveal | 0.08 gain |

### 2.2 When to Play

| Interaction | Sound |
|-------------|-------|
| Any button press | `click` |
| Clue reveal (Bible Character) | `pageTurn` |
| Answer reveal (Bible Character) | `celebrate` |
| Choice selection (Heart/Action/Both) | `reveal` |
| Tab change (Main Discussion) | `click` |
| Mute toggle | `click` |
| Page transition | (silent) |

### 2.3 When NOT to Play

| Situation | Why |
|-----------|-----|
| On page load | Startles the user |
| On every keystroke | Annoying |
| On hover | Feels noisy |
| On error | Adds stress |
| When muted | Obvious |
| On ambient loops | Should be silent or nature-based |

---

## 3. Ambient Sounds (Future)

### 3.1 Ambient Sound Options

| Sound | Mood | Use |
|-------|------|-----|
| Birds | Morning, fresh | Welcome, Icebreaker |
| Wind | Calm, open | Bible Character Game |
| Rain | Cozy, peaceful | Main Discussion |
| Ocean | Vast, serene | Ending |
| Gentle Chime | Sacred, quiet | Prayer (future) |

### 3.2 Ambient Rules
- **Default: off.** Users opt in.
- **Loop:** Continuous, very low volume.
- **Fade:** Fade in/out over 2-3s when toggled.
- **Mute:** Global mute overrides ambient.
- **One at a time.** Only one ambient sound plays.

---

## 4. Volume Levels

| Layer | Target Volume | Notes |
|-------|---------------|-------|
| Sound effects | 0.04-0.08 gain | Quiet, tactile |
| Ambient | 0.02-0.05 gain | Barely audible, atmospheric |
| Mute | 0 | Instant silence |

---

## 5. Audio Implementation

### 5.1 Current (v1)
- Web Audio API synthesis
- `SoundContext` provides `playSound(effect)`
- Mute state in `localStorage` (`h2h_muted`)
- AudioContext created on demand (respects browser autoplay policy)

### 5.2 Future (v2+)
- Pre-recorded ambient loops (birds, wind, rain, ocean)
- Audio files in `public/sounds/`
- Crossfade between ambient sounds
- Volume slider in Settings

---

## 6. Sound Rules

1. **Never startle.** No loud, sudden, or harsh sounds.
2. **Never annoy.** No repeated sounds on rapid clicks (debounce).
3. **Never play on hover.** Only on click/tap.
4. **Always respect mute.** Global mute silences everything.
5. **Always fail silently.** If AudioContext is blocked, do nothing (no errors).
6. **Keep it subtle.** Sound is a layer, not a feature.

---

## 7. Sound-Motion Coupling

| Sound | Motion |
|-------|--------|
| `click` | Button press animation |
| `pageTurn` | Clue slide-in |
| `celebrate` | Answer pop-in |
| `reveal` | Choice selection glow |

Sound and motion always work together — never one without the other.

---

## 8. Implementation Status

| Feature | Status |
|---------|--------|
| `click` effect | ✅ Exists |
| `pageTurn` effect | ✅ Exists |
| `reveal` effect | ✅ Exists |
| `celebrate` effect | ✅ Exists |
| `gentleChime` effect | ✅ Exists (reserved) |
| Mute toggle | ✅ Exists |
| Ambient sounds | 🔲 Future |
| Volume slider | 🔲 Future |