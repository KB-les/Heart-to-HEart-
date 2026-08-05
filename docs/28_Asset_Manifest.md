# 28 — Asset Manifest

> The exact inventory of every asset in the project.
> Nothing is guessed. Every sound, illustration, and background is listed with its status.

---

## 1. Asset Categories

| Category | Location | Status |
|----------|----------|--------|
| Sounds | `public/sounds/` | 🔲 Future (currently synthesized) |
| Illustrations | `public/illustrations/` | 🔲 Future (currently emoji) |
| Backgrounds | `public/backgrounds/` | 🔲 Future (currently CSS gradients) |

---

## 2. Sound Assets

### 2.1 Current (Synthesized via Web Audio API)

| Effect | Synthesis | Status |
|--------|-----------|--------|
| `click` | Sine 440→880 Hz, 0.05s | ✅ Exists |
| `pageTurn` | White noise, bandpass 1200 Hz, 0.1s | ✅ Exists |
| `reveal` | 3-note chime (440, 554.37, 659.25 Hz) | ✅ Exists |
| `celebrate` | 4-note arpeggio (523.25, 659.25, 783.99, 1046.5 Hz) | ✅ Exists |
| `gentleChime` | Same as reveal (reserved) | ✅ Exists |

### 2.2 Future (Audio Files)

```
public/sounds/
├── click.mp3            → Button press
├── page-turn.mp3        → Clue reveal
├── reveal.mp3           → Choice selection
├── celebrate.mp3        → Answer reveal
├── gentle-chime.mp3     → Ambient chime
├── birds.mp3            → Ambient: morning birds
├── wind.mp3             → Ambient: calm wind
├── rain.mp3             → Ambient: gentle rain
├── ocean.mp3            → Ambient: ocean waves
└── prayer-bell.mp3      → Ambient: prayer bell (future)
```

| File | Purpose | Status |
|------|---------|--------|
| `click.mp3` | Button press | 🔲 To create |
| `page-turn.mp3` | Clue reveal | 🔲 To create |
| `reveal.mp3` | Choice selection | 🔲 To create |
| `celebrate.mp3` | Answer reveal | 🔲 To create |
| `gentle-chime.mp3` | Ambient chime | 🔲 To create |
| `birds.mp3` | Ambient: morning | 🔲 To create |
| `wind.mp3` | Ambient: calm | 🔲 To create |
| `rain.mp3` | Ambient: cozy | 🔲 To create |
| `ocean.mp3` | Ambient: serene | 🔲 To create |
| `prayer-bell.mp3` | Ambient: prayer | 🔲 To create |

---

## 3. Illustration Assets

### 3.1 Current (Emoji-based)

| Use | Emoji | Status |
|-----|-------|--------|
| Player 1 avatar | 🌿 | ✅ Exists |
| Player 2 avatar | 🌸 | ✅ Exists |
| Bible characters | 🌾 👑 ⛺ ✨ 📜 🦁 🕯️ ⛵ ✉️ | ✅ Exists |
| Nature options | 🌲 🏔️ 🌊 🌺 ✨ 🌧️ 🌅 | ✅ Exists |
| Animals | 🕊️ 🐑 🦅 🦌 🐬 🦁 🦋 🦉 | ✅ Exists |
| Experience icons | 🌱 💛 ⛰️ 🌅 🕊️ 🌞 💎 | ✅ Exists |
| Journey scenes | 🌅 🌿 🌱 ⏳ 🌿 🌾 🌳 | ✅ Exists |

### 3.2 Future (Illustration Files)

```
public/illustrations/
├── characters/
│   ├── joseph.webp
│   ├── david.webp
│   ├── abraham.webp
│   ├── ruth.webp
│   ├── esther.webp
│   ├── moses.webp
│   ├── daniel.webp
│   ├── samuel.webp
│   ├── peter.webp
│   └── paul.webp
├── scenes/
│   ├── sunrise.webp
│   ├── field.webp
│   ├── sea.webp
│   ├── desert.webp
│   └── garden.webp
├── experiences/
│   ├── patience.webp
│   ├── love.webp
│   ├── faith.webp
│   ├── hope.webp
│   ├── humility.webp
│   ├── joy.webp
│   └── pure-motives.webp
└── farmer.webp
```

### 3.3 Character Illustrations

| File | Character | Status |
|------|-----------|--------|
| `joseph.webp` | Joseph | 🔲 To create |
| `david.webp` | David | 🔲 To create |
| `abraham.webp` | Abraham | 🔲 To create |
| `ruth.webp` | Ruth | 🔲 To create |
| `esther.webp` | Esther | 🔲 To create |
| `moses.webp` | Moses | 🔲 To create |
| `daniel.webp` | Daniel | 🔲 To create |
| `samuel.webp` | Samuel | 🔲 To create |
| `peter.webp` | Peter | 🔲 To create |
| `paul.webp` | Paul | 🔲 To create |

### 3.4 Scene Illustrations

| File | Scene | Status |
|------|-------|--------|
| `sunrise.webp` | Golden sunrise | 🔲 To create |
| `field.webp` | Wheat field | 🔲 To create |
| `sea.webp` | Calm sea | 🔲 To create |
| `desert.webp` | Desert dunes | 🔲 To create |
| `garden.webp` | Peaceful garden | 🔲 To create |

### 3.5 Experience Illustrations

| File | Experience | Status |
|------|------------|--------|
| `patience.webp` | Patience (farmer) | 🔲 To create |
| `love.webp` | Love | 🔲 To create |
| `faith.webp` | Faith | 🔲 To create |
| `hope.webp` | Hope | 🔲 To create |
| `humility.webp` | Humility | 🔲 To create |
| `joy.webp` | Joy | 🔲 To create |
| `pure-motives.webp` | Pure Motives | 🔲 To create |

### 3.6 Key Illustration

| File | Purpose | Status |
|------|---------|--------|
| `farmer.webp` | Farmer illustration (Main Discussion) | 🔲 To create |

---

## 4. Background Assets

### 4.1 Current (CSS Gradients)

| Background | Implementation | Status |
|------------|----------------|--------|
| Sunrise glow | CSS radial gradient | ✅ Exists |
| Sky glow | CSS radial gradient | ✅ Exists |
| Forest glow | CSS radial gradient | ✅ Exists |
| Sunray shimmer | CSS repeating gradient | ✅ Exists |
| Floating leaves | Emoji 🍃 | ✅ Exists |
| Drifting clouds | Emoji ☁️ | ✅ Exists |

### 4.2 Future (Image Files)

```
public/backgrounds/
├── forest.jpg
├── galilee.jpg
├── egypt.jpg
└── vineyard.jpg
```

| File | Scene | Status |
|------|-------|--------|
| `forest.jpg` | Forest setting | 🔲 To create |
| `galilee.jpg` | Sea of Galilee | 🔲 To create |
| `egypt.jpg` | Egypt setting | 🔲 To create |
| `vineyard.jpg` | Vineyard setting | 🔲 To create |

---

## 5. Asset Naming Conventions

| Asset | Convention | Example |
|-------|-----------|---------|
| Sound files | kebab-case | `page-turn.mp3` |
| Character illustrations | kebab-case | `joseph.webp` |
| Scene illustrations | kebab-case | `sunrise.webp` |
| Experience illustrations | kebab-case | `patience.webp` |
| Background images | kebab-case | `forest.jpg` |

---

## 6. Asset Rules

1. **All illustrations** follow the Warm Storybook style (docs/12).
2. **All sounds** are subtle and gentle (docs/11).
3. **All assets** are named in kebab-case.
4. **No random AI styles.** Consistency is sacred.
5. **No unused assets.** Every asset has a purpose.
6. **Optimized.** Images are webp, sounds are mp3.

---

## 7. Asset Status Summary

| Category | Total | Exists | To Create |
|----------|-------|--------|-----------|
| Sound effects (synthesized) | 5 | 5 | 0 |
| Sound files (future) | 10 | 0 | 10 |
| Character illustrations | 10 | 0 | 10 |
| Scene illustrations | 5 | 0 | 5 |
| Experience illustrations | 7 | 0 | 7 |
| Key illustration (farmer) | 1 | 0 | 1 |
| Background images | 4 | 0 | 4 |
| **Total** | **42** | **5** | **37** |