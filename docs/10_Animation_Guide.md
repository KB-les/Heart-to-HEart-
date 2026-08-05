# 10 — Animation Guide

> Every animation documented. Nothing guessed.
> All motion is gentle, purposeful, and serves the peaceful storybook aesthetic.

---

## 1. Animation Principles

1. **Gentle.** No jarring, no flashing, no strobe.
2. **Purposeful.** Every animation has a reason (guide attention, reveal content, create atmosphere).
3. **Consistent.** Same patterns everywhere.
4. **Fast enough to feel responsive, slow enough to feel calm.** 0.3-0.6s for interactive, 1-8s for ambient.
5. **Respect reduced motion.** (Future: `prefers-reduced-motion` support)

---

## 2. Motion Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 0.2s | Micro-interactions (hover, tap) |
| `duration-base` | 0.35s | Card transitions, reveals |
| `duration-slow` | 0.45-0.6s | Page transitions, entrances |
| `ease-standard` | `[0.16, 1, 0.3, 1]` | Default easing (smooth, natural) |
| `ease-spring` | `stiffness: 400, damping: 20` | Buttons, playful elements |
| `ease-linear` | `linear` | Ambient loops (leaves, clouds) |

---

## 3. Interactive Animations

### 3.1 Button

| State | Animation | Duration | Easing |
|-------|-----------|----------|--------|
| Hover | `scale: 1.03`, `y: -2`, glow shadow | 0.2s | spring |
| Tap | `scale: 0.96` | 0.2s | spring |
| Disabled | No motion, `opacity-40` | — | — |

**Sound:** `click` on press

### 3.2 Choice Card (selectable option)

| State | Animation | Duration | Easing |
|-------|-----------|----------|--------|
| Hover | `scale: 1.03-1.06`, `y: -2 to -3` | 0.2s | spring |
| Tap | `scale: 0.94-0.97` | 0.2s | spring |
| Selected | `ring-4` + glow + checkmark pop | 0.3s | spring |
| Disabled | `opacity-60`, no motion | — | — |

**Sound:** `reveal` on selection

### 3.3 Card Entrance

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| Opacity | 0 | 1 | 0.4s | `[0.16, 1, 0.3, 1]` |
| Y | 15px | 0 | 0.4s | `[0.16, 1, 0.3, 1]` |

### 3.4 Page Transition (Chapter change)

| Property | Enter | Exit | Duration | Easing |
|----------|-------|------|----------|--------|
| Opacity | 0 → 1 | 1 → 0 | 0.45s | `[0.16, 1, 0.3, 1]` |
| X | ±60 → 0 | 0 → ∓60 | 0.45s | `[0.16, 1, 0.3, 1]` |
| Scale | 0.98 → 1 | 1 → 0.97 | 0.45s | `[0.16, 1, 0.3, 1]` |
| Blur | 4px → 0 | 0 → 4px | 0.45s | `[0.16, 1, 0.3, 1]` |

**Direction:** Forward = +X, Backward = -X

---

## 4. Reveal Animations

### 4.1 Clue Reveal (Bible Character)

| Property | From | To | Duration | Delay |
|----------|------|----|----------|-------|
| Opacity | 0 | 1 | 0.4s | `idx * 0.1` |
| X | -20px | 0 | 0.4s | `idx * 0.1` |
| Scale | 0.98 | 1 | 0.4s | `idx * 0.1` |

**Sound:** `pageTurn`

### 4.2 Answer Reveal (Bible Character)

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| Scale | 0 | [0, 1.2, 1] | 0.6s | spring |

**Sound:** `celebrate`

### 4.3 Expandable Section (VerseCard, FeelingPicker)

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| Height | 0 | auto | 0.35-0.4s | `easeInOut` |
| Opacity | 0 | 1 | 0.35-0.4s | `easeInOut` |

---

## 5. Ambient Animations

### 5.1 Sunrise Glow (Welcome)

| Property | Keyframes | Duration | Loop |
|----------|-----------|----------|------|
| Scale | [1, 1.25, 1] | 8s | infinite |
| Opacity | [0.4, 0.7, 0.4] | 8s | infinite |
| Rotate | [0, 45, 0] | 8s | infinite |

### 5.2 Heart Pulse

| Property | Keyframes | Duration | Loop |
|----------|-----------|----------|------|
| Scale | [1, 1.1, 1] | 2s | infinite (Tailwind `animate-pulse`) |

### 5.3 Floating Leaves

| Property | Keyframes | Duration | Loop |
|----------|-----------|----------|------|
| Y | 0 → 105vh | 18-24s | infinite |
| X | [0, 30, -20, 35] | 18-24s | infinite |
| Rotate | [0, 120, 260, 360] | 18-24s | infinite |
| Opacity | [0, 0.55, 0.55, 0] | 18-24s | infinite |

**Stagger:** 5 leaves at different left positions, delays (0, 5, 9, 3, 14s)

### 5.4 Drifting Clouds

| Property | Keyframes | Duration | Loop |
|----------|-----------|----------|------|
| X | -15% → 115% | 50-70s | infinite |

**Stagger:** 3 clouds at different heights, delays (0, 22, 10s)

### 5.5 Tree Sway (Ending)

| Property | Keyframes | Duration | Loop |
|----------|-----------|----------|------|
| Scale | [0.95, 1.05, 0.95] | 8s | infinite |
| Rotate | [-2, 2, -2] | 8s | infinite |

### 5.6 Tree Growth (Ending entrance)

| Property | From | To | Duration | Easing |
|----------|------|----|----------|--------|
| Scale | 0.2 | 1 | 1.5s | `[0.16, 1, 0.3, 1]` |
| Opacity | 0 | 1 | 1.5s | `[0.16, 1, 0.3, 1]` |
| Y | 40px | 0 | 1.5s | `[0.16, 1, 0.3, 1]` |

### 5.7 Ambient Glows (Background)

| Element | Animation | Duration | Loop |
|---------|-----------|----------|------|
| Top-left gold | scale [1, 1.18, 1], opacity [0.30, 0.50, 0.30] | 11s | infinite |
| Top-right sky | scale [1, 1.12, 1], opacity [0.20, 0.38, 0.20] | 15s | infinite |
| Bottom forest | opacity [0.15, 0.30, 0.15] | 9s | infinite |
| Sunray shimmer | opacity [0, 0.06, 0], rotate [0, 3, 0] | 20s | infinite |

---

## 6. Animation Sound Coupling

| Animation | Sound |
|-----------|-------|
| Button press | `click` |
| Clue reveal | `pageTurn` |
| Answer reveal | `celebrate` |
| Choice selection | `reveal` |
| Tab change | `click` |
| Page transition | (silent — ambient only) |

---

## 7. Animation Rules

1. **Never flash.** No opacity 0→1→0 rapidly, no strobe.
2. **Never bounce excessively.** One bounce max (e.g., answer reveal `[0, 1.2, 1]`).
3. **Never animate layout properties** (width, height, top, left) — use transform (scale, translate) for performance.
4. **Never block interaction.** Animations should not prevent clicks.
5. **Always use framer-motion** for interactive animations (not CSS keyframes).
6. **Respect reduced motion** (future): disable non-essential animations.

---

## 8. Performance Notes

- Use `transform` and `opacity` only (GPU-accelerated).
- Use `will-change` sparingly (only for continuously animating elements).
- Ambient animations: keep count low (5 leaves, 3 clouds, 4 glows).
- Page transitions: use `AnimatePresence mode="wait"` to avoid overlap.