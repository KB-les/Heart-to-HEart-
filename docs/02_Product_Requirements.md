# 02 — Product Requirements Document (PRD)

> This is the Bible of the project. Every screen, animation, button, feature, and sound is specified here. Nothing is left to chance.

---

## 1. Product Overview

**Product Name:** Heart to Heart
**Tagline:** Growing closer to Jehovah together.
**Type:** Client-side web application (Next.js 14 / React 18 / TypeScript)
**Platform:** Desktop & mobile browsers (responsive)
**Connection:** Optional WebRTC peer-to-peer sync via PeerJS

---

## 2. Core Concepts

### 2.1 The Journey
A worship session is a **7-chapter journey**. Each chapter is a screen. The user progresses linearly, but can revisit any chapter via a progress tree.

### 2.2 The Theme (Content Package)
Each journey is built around a **worship theme** (e.g., Patience). The theme is a content package that supplies:
- Theme title & subtitle
- Key passage (opening scripture)
- Farmer illustration (theme metaphor)
- Main discussion cards
- Additional scriptures
- Bible characters
- Heart-or-Action scenarios
- Closing reflection

### 2.3 Modes
- **Single mode:** Both partners on one device, in person.
- **Remote mode:** Two devices, connected via WebRTC. Host creates a room; guest joins with a code.

---

## 3. The 7 Chapters (Screens)

### Chapter 1 — Welcome
**Purpose:** Set the tone; invite the user in.
**Elements:**
- Animated sunrise / heart emblem
- Tagline: "Growing closer to Jehovah together."
- Short intro paragraph
- "Start Worship" button (gold, large)
- Footer: "Built with love for family worship"

**Behavior:**
- Clicking Start → advance to Chapter 2.
- No remote sync needed here.

---

### Chapter 2 — Player Setup
**Purpose:** Choose mode, set names, (optionally) connect remotely.
**Elements:**
- Mode selector: "One Device" vs "Two Devices" (toggle cards)
- Player 1 name input (host / Karabelo)
- Player 2 name input (partner / Yolanda)
- Remote panel (only in remote mode):
  - Host: "Create Room Code" button → generates 4-letter code
  - Guest: input for 4-letter code + "Join" button
  - Waiting state: shows room code + "Copy WhatsApp Link"
  - Connected state: green "Partner Connected" + Disconnect
- Player avatars (emoji: 🌿 and 🌸)
- "Start Session" button

**Behavior:**
- Host controls names; guest's inputs are disabled (synced from host).
- Names persist to localStorage.
- In remote mode, the Continue button is disabled until connected.
- Continue → Chapter 3.

---

### Chapter 3 — Icebreaker
**Purpose:** Warm, low-pressure getting-to-know-you.
**Elements:**
- 3 questions, in order:
  1. Favourite Colour (8 options, gradient circles)
  2. Favourite Animal (8 options, emoji cards)
  3. Favourite Place in Nature (7 options, gradient cards)
- Each question: pick 1 option + pick 2 feelings from a list
- Turn-based (single mode: pass to partner; remote mode: automatic)
- Stage 4: side-by-side summary + reflection questions

**Behavior:**
- Turn indicator shows whose turn it is.
- Cannot advance until a valid choice + 2 feelings are selected.
- Remote: state syncs over WebRTC; the active player's controls are enabled.

---

### Chapter 4 — Bible Character Game
**Purpose:** Discover faithful Bible figures through clues.
**Elements:**
- Character counter (e.g., "1 / 10")
- Clue cards revealed one at a time
- "Reveal Next Clue" button (secondary)
- "Reveal Answer" button (gold)
- Optional guess input
- After reveal:
  - Celebration card (avatar, name, title, summary)
  - Life Journey timeline (3 milestones)
  - Key Scriptures (2)
  - Interesting Gem (1)
  - Discussion Questions (3)
  - "Replay Clues" (outline) & "Next Character" (gold)

**Behavior:**
- Starts with 1 clue revealed.
- Next character resets clues to 1.
- Last character → "Proceed to Heart or Action" button.

---

### Chapter 5 — Heart or Action
**Purpose:** Reflect on whether a scenario reflects a heart motive, an action, or both.
**Elements:**
- Scenario counter (e.g., "1 / 10")
- Category badge (e.g., "Motives & Praise")
- Scenario text (large, serif, italic)
- 3 choice buttons: Heart / Action / Both
- After selection:
  - Highlighted choice banner
  - Bible Principle card (reference + text)
  - Explanation
  - Discussion Questions (2)
  - "Next Scenario" button

**Behavior:**
- No "right" answer — it's a discussion opener.
- Selecting a choice reveals the principle + discussion.
- Last scenario → "Proceed to Main Discussion."

---

### Chapter 6 — Main Discussion
**Purpose:** Deep dive into the theme's key scripture.
**Elements:**
- Theme title & subtitle
- Farmer illustration card (icon, title, description, lesson)
- Navigation tabs: James 5:7-11 (main), Psalm 37:7, Ecclesiastes 7:8
- VerseCard (expandable scripture text)
- 4 discussion cards (carousel with Previous/Next + dot indicators)
- "Complete Worship & View Spiritual Gems" button

**Behavior:**
- Tabs switch scripture passages.
- Carousel preserves position.
- Remote: tab & card index sync.

---

### Chapter 7 — Ending
**Purpose:** Reflect, summarize, and close warmly.
**Elements:**
- Animated growing tree
- "Worship Complete" message with player names
- "Today's Spiritual Gems" summary card:
  - Worship Theme
  - Scriptures Read
  - Characters Explored (up to 5 chips)
- Buttons: "Finish Worship Session" (gold) & "Start Fresh Session" (secondary)

**Behavior:**
- Finish → returns to Chapter 1 (Welcome).
- Restart → returns to Chapter 1.

---

## 4. Remote Sync (WebRTC)

### 4.1 Message Types
| Type | Payload | Used By |
|------|---------|---------|
| `SYNC_STEP` | `{ step }` | Navigation |
| `SYNC_PLAYERS` | `{ p1, p2 }` | Player names |
| `SYNC_ICEBREAKER` | `{ p1, p2, stage, activePlayer }` | Icebreaker |
| `SYNC_CHARACTER` | `{ characterIndex, revealedClues, isAnswerRevealed }` | Bible game |
| `SYNC_HEART_ACTION` | `{ currentIndex, selectedChoice }` | Heart or Action |
| `SYNC_DISCUSSION` | `{ activeTab, activeCardIndex }` | Main discussion |

### 4.2 Roles
- **Host:** Full control. Can navigate, edit names, progress.
- **Guest:** Receives synced state. Controls are disabled for host-only actions.

### 4.3 Room Codes
- 4 characters from `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` (no ambiguous chars).
- Prefix: `h2h-worship-`
- Guest IDs: `h2h-worship-guest-<random>`

### 4.4 Share Link
Format: `?room=CODE&p1=Player1&p2=Player2`
The host copies a WhatsApp-ready link.

---

## 5. Sound Design

### 5.1 Effects (Web Audio API synthesized)
| Effect | Description |
|--------|-------------|
| `click` | Short sine blip (440→880 Hz) |
| `pageTurn` | Bandpass-filtered white noise sweep |
| `reveal` | Gentle ascending chime |
| `celebrate` | 4-note ascending arpeggio |
| `gentleChime` | 3-note soft chime |

### 5.2 Ambient
- Currently synthesized (no audio files). Future: nature ambient loops (birds, wind, rain, ocean).

### 5.3 Mute
- Global mute toggle in header.
- Persists to localStorage (`h2h_muted`).

---

## 6. Persistence (localStorage)

| Key | Value |
|-----|-------|
| `h2h_p1` | Player 1 name |
| `h2h_p2` | Player 2 name |
| `h2h_muted` | "true" / "false" |

---

## 7. Visual Design System

### 7.1 Colors (Tailwind theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `cream-50` | `#FDFBF7` | Page background |
| `cream-100` | `#F7F3E9` | Card backgrounds |
| `cream-200` | `#EFE6D5` | Borders |
| `cream-300` | `#E5D7C0` | Borders, muted |
| `forest-700` | `#2D5A40` | Primary buttons, headings |
| `forest-800` | `#1E3A2B` | Primary buttons, dark text |
| `forest-900` | `#14291E` | Darkest text |
| `gold-300` | `#F4D068` | Accents, highlights |
| `gold-400` | `#E5C158` | Gold button |
| `gold-500` | `#D4AF37` | Gold button hover |
| `gold-600` | `#B89225` | Gold text |
| `skyCustom-500` | `#0284C7` | Sky accents |
| `softBrown-500` | `#8B6B4D` | Parchment tone |

### 7.2 Typography
- **Serif (headings):** Georgia, Cambria, serif
- **Sans (body):** system font stack
- Headings: serif, bold, `tracking-tight`
- Body: sans, readable, `leading-relaxed`

### 7.3 Shadows
- `soft`: `0 10px 30px -10px rgba(30,58,43,0.08)`
- `card`: layered soft shadow
- `glow`: `0 0 25px rgba(212,175,55,0.25)`

---

## 8. Non-Functional Requirements

- **Performance:** Smooth 60fps animations (framer-motion).
- **Responsive:** Works on mobile (primary) and desktop.
- **Accessibility:** Sufficient contrast, focus states, `aria` labels where needed.
- **Offline:** No backend required; works without a server (static hosting).
- **Browser:** Modern evergreen browsers (Chrome, Firefox, Safari, Edge).

---

## 9. Future Features (Backlog)

- Theme/package selection screen (pick Patience, Love, Faith...)
- Multiple worship themes as content packages
- Ambient nature sound loops
- Printable / shareable summary
- Progress history across sessions
- Custom character sets per theme
- Optional audio narration