# 04 — UI Style Guide

> Nothing is guessed. Every visual element is defined here so the app feels like one cohesive, handcrafted storybook.

---

## 1. Design Philosophy

**"Peaceful Storybook"** — The app should feel like a beautifully illustrated children's Bible storybook come to life: warm, soft, gentle, and inviting. No harsh edges, no neon, no corporate flatness.

Three pillars:
1. **Warmth** — cream, gold, and forest tones
2. **Softness** — rounded corners, gentle shadows, blurred glows
3. **Life** — subtle motion everywhere (floating leaves, pulsing glows, drifting clouds)

---

## 2. Color System

### 2.1 Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream-50` | `#FDFBF7` | Page background |
| `cream-100` | `#F7F3E9` | Card background, soft sections |
| `cream-200` | `#EFE6D5` | Borders, dividers |
| `cream-300` | `#E5D7C0` | Muted borders |
| `forest-50` | `#EAF3ED` | Light forest tint |
| `forest-100` | `#CDE2D4` | Badge backgrounds |
| `forest-500` | `#4E8752` | Mid green |
| `forest-700` | `#2D5A40` | Primary buttons, headings |
| `forest-800` | `#1E3A2B` | Dark buttons, dark cards |
| `forest-900` | `#14291E` | Darkest text |
| `gold-100` | `#FEF7DF` | Gold tint backgrounds |
| `gold-300` | `#F4D068` | Accents, rings, highlights |
| `gold-400` | `#E5C158` | Gold button base |
| `gold-500` | `#D4AF37` | Gold button hover |
| `gold-600` | `#B89225` | Gold text on light |
| `skyCustom-50` | `#F0F9FF` | Sky tint |
| `skyCustom-100` | `#E0F2FE` | Sky badge bg |
| `skyCustom-300` | `#8ECAE6` | Sky accents |
| `skyCustom-500` | `#0284C7` | Sky buttons, Action choice |
| `softBrown-100` | `#F5EFEA` | Parchment tint |
| `softBrown-300` | `#D9C3B0` | Parchment border |
| `softBrown-500` | `#8B6B4D` | Parchment text |
| `softBrown-700` | `#6B4E3D` | Parchment dark |

### 2.2 Semantic Colors

| Meaning | Color |
|---------|-------|
| Success / Connected | `emerald-100` bg, `emerald-600` dot |
| Warning / Waiting | `amber-50` bg, `amber-600` icon |
| Error | `rose-700` text |
| Heart choice | `rose-500` |
| Action choice | `skyCustom-500` |
| Both choice | `forest-800` + `gold-300` |

### 2.3 Gradients

| Use | Gradient |
|-----|----------|
| Primary button | `from-forest-800 to-forest-700` |
| Gold button | `from-gold-400 via-gold-500 to-amber-500` |
| Heart emblem | `from-forest-800 via-forest-700 to-emerald-600` |
| Parchment card | `from-[#FAF6EE] to-[#F3ECE0]` |
| Gold card | `from-gold-100/80 via-white/90 to-gold-50/90` |
| Celebration card | `from-gold-100 via-amber-50 to-emerald-50` |
| Scenario text box | `from-cream-100/90 to-white` |

---

## 3. Typography

### 3.1 Font Families
- **Serif (display/headings):** Georgia, Cambria, serif
- **Sans (body/UI):** system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)

### 3.2 Type Scale

| Element | Font | Size | Weight | Style |
|---------|------|------|--------|-------|
| Hero title (Welcome) | serif | `text-4xl` → `text-6xl` | bold | `tracking-tight` |
| Chapter title | serif | `text-3xl` → `text-4xl` | bold | — |
| Card heading | serif | `text-2xl` → `text-3xl` | bold | — |
| Sub-heading | serif | `text-xl` → `text-2xl` | bold | — |
| Section label | sans | `text-xs` | bold | `uppercase tracking-wider` |
| Body | sans | `text-sm` → `text-base` | normal | `leading-relaxed` |
| Scripture text | serif | `text-base` → `text-lg` | normal | `italic leading-relaxed` |
| Scenario text | serif | `text-xl` → `text-2xl` | medium | `italic` |
| Small print | sans | `text-[10px]` → `text-xs` | medium | — |

### 3.3 Rules
- Headings: serif, bold, `text-forest-900`
- Body: sans, `text-forest-700/800`
- Scripture quotes: serif, italic, with `&ldquo;` `&rdquo;`
- Labels/badges: uppercase, `tracking-wider`, `text-xs` or smaller

---

## 4. Buttons

### 4.1 Variants

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| `primary` | `from-forest-800 to-forest-700` | `cream-50` | `forest-600/30` | darken gradient |
| `secondary` | `white/90` | `forest-900` | `cream-300` | solid white |
| `gold` | `from-gold-400 via-gold-500 to-amber-500` | `forest-950` | `gold-300` | brighten gradient |
| `outline` | transparent | `forest-800` | `forest-700/30` (2px) | `forest-800/5` bg |
| `ghost` | transparent | `forest-800` | none | `forest-800/5` bg |

### 4.2 Sizes

| Size | Padding | Text | Radius |
|------|---------|------|--------|
| `sm` | `px-3.5 py-1.5` | `text-xs` | `rounded-2xl` |
| `md` | `px-5 py-2.5` | `text-sm` | `rounded-2xl` |
| `lg` | `px-8 py-4` | `text-base sm:text-lg` | `rounded-3xl` |

### 4.3 Motion
- **Hover:** `scale: 1.03`, `y: -2`, colored glow shadow
- **Tap:** `scale: 0.96`
- **Transition:** spring (`stiffness: 400, damping: 20`)
- **Sound:** `click` on press (unless disabled)

### 4.4 Disabled State
- `opacity-40`, `cursor-not-allowed`, no hover/tap motion, no sound

### 4.5 Icon Usage
- Buttons may contain icons (lucide-react) with `gap-1.5` to `gap-3` depending on size
- Icons inherit button text color

---

## 5. Cards

### 5.1 Variants

| Variant | Background | Border | Shadow |
|---------|-----------|--------|--------|
| `glass` | `white/80 backdrop-blur-xl` | `white/60` | `shadow-card` |
| `parchment` | `from-[#FAF6EE] to-[#F3ECE0]` | `gold-300/40` | `shadow-card` |
| `cream` | `cream-100/90` | `cream-200` | `shadow-soft` |
| `gold` | `from-gold-100/80 via-white/90 to-gold-50/90` | `gold-300/50` | `shadow-glow` |

### 5.2 Base
- `rounded-3xl`, `p-6 sm:p-8`
- Entrance animation: `opacity 0→1`, `y: 15→0`, `duration 0.4`, ease `[0.16, 1, 0.3, 1]`

### 5.3 Inner Sections
- Section dividers: `border-t border-cream-200` or `border-gold-300/40`
- Inner boxes: `rounded-2xl`, `bg-white/90`, `border-cream-300`
- Dark discussion cards: `bg-forest-800 text-cream-50`, `rounded-3xl`, `shadow-lg`

---

## 6. Badges & Pills

| Type | Style |
|------|-------|
| Step badge | `bg-gold-100 text-forest-900 border border-gold-300`, `rounded-full`, `text-xs font-semibold`, icon + text |
| Counter pill | `bg-forest-800 text-cream-50`, `rounded-full`, `text-xs font-bold` |
| Category pill | `bg-gold-200/60 text-forest-800 border border-gold-300`, `rounded-full` |
| Status pill | `bg-emerald-100 text-forest-800 border border-emerald-300` |
| Role pill | `bg-forest-800 text-gold-300`, `rounded-full`, `text-[10px] font-bold` |

---

## 7. Inputs

### 7.1 Text Input
- `px-4 py-3 rounded-2xl bg-white border border-cream-300`
- Focus: `ring-2 ring-forest-700/50`, no outline
- Placeholder: `text-forest-600/60`
- Disabled: `opacity-75 cursor-not-allowed bg-cream-100/50`

### 7.2 Room Code Input
- `font-mono font-bold uppercase tracking-widest text-center`
- `maxLength={4}`

---

## 8. Choice / Selection Cards

### 8.1 Selected State
- `border-2` in theme color
- `ring-4` in light theme color
- `shadow-md` or `shadow-xl`
- Checkmark or glow indicator

### 8.2 Unselected State
- `bg-white/70` or `bg-white/80`
- `border-transparent` or `border-cream-300`
- `shadow-sm`
- Hover: `bg-white`, slight lift (`scale 1.03-1.06`, `y: -2 to -3`)

### 8.3 Disabled (not your turn)
- `opacity-60 cursor-not-allowed`
- No hover/tap motion

---

## 9. Icons

- **Library:** lucide-react (stroke icons)
- **Style:** `w-4 h-4` (small), `w-5 h-5` (medium), `w-6 h-6` (large)
- **Emoji:** used for playful elements (avatars, animals, nature, characters)
- **Rules:**
  - Icons align with text color
  - Decorative icons may use `fill-*` for emphasis (e.g., heart)
  - Never use icons alone for critical actions — always pair with text

---

## 10. Animations & Motion

### 10.1 Page Transitions (Chapter changes)
- Enter: `opacity 0→1`, `x: ±60→0`, `scale 0.98→1`, `blur 4px→0`
- Exit: `opacity 1→0`, `x: 0→∓60`, `scale →0.97`, `blur →4px`
- Duration: `0.45s`, ease `[0.16, 1, 0.3, 1]`
- Direction based on forward/backward navigation

### 10.2 Card Entrance
- `opacity 0→1`, `y: 15→0`, `duration 0.4`

### 10.3 Reveal Animations
- Clues: `opacity 0→1`, `x: -20→0`, `scale 0.98→1`, staggered `delay: idx * 0.1`
- Answer reveal: `scale 0→1` with bounce (`[0, 1.2, 1]`)
- Expandable sections: `height 0→auto`, `opacity 0→1`, `duration 0.35-0.4`

### 10.4 Ambient Motion
- Sunrise glow: `scale [1, 1.25, 1]`, `opacity [0.4, 0.7, 0.4]`, `rotate [0, 45, 0]`, 8s loop
- Heart pulse: `animate-pulse`
- Floating leaves: `y 0→105vh`, `x drift`, `rotate 0→360`, 18-24s loop
- Clouds: `x -15%→115%`, 50-70s loop
- Tree sway: `scale [0.95, 1.05, 0.95]`, `rotate [-2, 2, -2]`, 8s loop

### 10.5 Sound-Motion Coupling
- Every button press → `click` sound
- Clue reveal → `pageTurn`
- Answer reveal → `celebrate`
- Choice selection → `reveal`

---

## 11. Layout & Spacing

### 11.1 Page Structure
- Max width: `max-w-6xl` (main), `max-w-4xl` (content), `max-w-2xl` (narrow)
- Horizontal padding: `px-4`
- Vertical rhythm: `space-y-6` to `space-y-8`
- Centered content with `mx-auto`

### 11.2 Header (sticky)
- `sticky top-0 z-40`, `bg-cream-50/80 backdrop-blur-md`, `border-b border-cream-200/60`
- Contains: logo, ProgressTree, player names, mute toggle

### 11.3 Grids
- 2-col: `grid-cols-1 sm:grid-cols-2` (choices, summaries)
- 3-col: `grid-cols-1 sm:grid-cols-3` (timeline, choice buttons)
- 4-col: `grid-cols-2 sm:grid-cols-4` (colour/animal/nature options)

---

## 12. Background Atmosphere

### 12.1 Ambient Glows
- Top-left: warm gold radial glow (sunrise)
- Top-right: soft sky blue radial glow
- Bottom: forest green elliptical glow
- All: `blur-3xl`, animated opacity/scale, `pointer-events-none`

### 12.2 Floating Elements
- 5 leaves (🍃) at varying left positions, delays, durations
- 3 clouds (☁️) drifting at different speeds/heights
- Subtle sunray shimmer lines (repeating-linear-gradient, very low opacity)

### 12.3 Z-Index
- Background: `z-0`, `fixed inset-0`
- Main content: `relative z-10`
- Header: `z-40`
- Tooltips: `z-50`

---

## 13. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Single column, smaller text, `px-4` |
| sm (640px) | 2-col grids activate |
| md (768px) | Player names visible in header |
| lg (1024px) | Full 3-4 col grids, larger hero |

---

## 14. Accessibility

- Focus states: visible `ring` on interactive elements
- Contrast: `forest-900` on `cream-50` (high contrast); gold buttons use `forest-950` text
- Touch targets: buttons ≥ 40px height
- Reduced motion: respect `prefers-reduced-motion` where feasible (future)
- All icons paired with text labels