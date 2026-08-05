# 05 — Information Architecture

> The blueprint of the app's structure. This defines what exists, how it's organized, and how users navigate.

---

## 1. High-Level Structure

```
Heart to Heart
│
├── Home (Welcome)
│
├── Start Worship
│   ├── Choose Theme
│   ├── Player Setup
│   ├── The Journey (7 chapters)
│   └── Summary / Ending
│
├── Themes (Library)
│   ├── Patience
│   ├── Love (future)
│   ├── Faith (future)
│   ├── Humility (future)
│   ├── Joy (future)
│   └── Pure Motives (future)
│
├── Spiritual Gems (future)
│
├── Settings
│   ├── Sound / Mute
│   ├── Names
│   └── Accessibility
│
└── About
```

---

## 2. Current App Structure (v1.0)

### 2.1 Screens (7 chapters)
```
Chapter 1: Welcome
Chapter 2: Player Setup
Chapter 3: Icebreaker
Chapter 4: Bible Character Game
Chapter 5: Heart or Action
Chapter 6: Main Discussion
Chapter 7: Ending / Summary
```

### 2.2 Navigation Model
- **Linear progression** — chapters flow in order
- **Progress Tree** — allows jumping back to any completed chapter
- **Host control** — in remote mode, only the host navigates

---

## 3. Future Structure (v1.1+)

### 3.1 Theme Selection
```
Home
  └── Start Worship
        └── Choose Theme (new screen)
              ├── Patience
              ├── Love
              ├── Faith
              └── ...
```

### 3.2 Theme Library
```
Home
  └── Themes
        ├── Patience (available)
        ├── Love (coming soon)
        ├── Faith (coming soon)
        └── ...
```

### 3.3 Settings
```
Home
  └── Settings
        ├── Sound
        │     ├── Mute toggle
        │     └── Ambient sound selection
        ├── Names
        │     ├── Player 1 name
        │     └── Player 2 name
        └── Accessibility
              ├── Reduced motion
              ├── Large text
              └── High contrast
```

---

## 4. Content Hierarchy

### 4.1 Theme Package (the content unit)
```
WorshipTheme
├── id
├── title
├── subtitle
├── keyPassage (scripture)
├── farmerIllustration (metaphor)
├── mainDiscussionCards (4)
├── additionalScriptures (2)
├── characters (8-10)
├── heartOrActionScenarios (10)
└── closingReflection
```

### 4.2 Bible Character (the content entity)
```
BibleCharacter
├── id
├── name
├── title
├── avatar (emoji)
├── themeColor
├── clues (3)
├── summary
├── timeline (3 milestones)
├── keyScriptures (2)
├── interestingFact
└── discussionQuestions (3)
```

### 4.3 Heart or Action Scenario
```
HeartOrActionScenario
├── id
├── category
├── scenario
├── biblePrinciple (reference + text)
├── explanation
└── discussionQuestions (2)
```

---

## 5. Navigation Rules

| Rule | Description |
|------|-------------|
| Linear forward | Chapters progress in order |
| Backward allowed | Progress Tree lets users revisit |
| Host controls | In remote mode, only host navigates |
| No dead ends | Every screen has a clear next action |
| No traps | Users can always return to Home/Welcome |

---

## 6. State Management

### 6.1 Global State (Context)
| Context | Holds |
|---------|-------|
| PeerContext | Connection status, room code, role, sync messages |
| SoundContext | Mute state, ambient sound |

### 6.2 Local State (per screen)
| Screen | Holds |
|--------|-------|
| page.tsx | Current step, player names, completed characters |
| PlayerSetup | Mode, names, room code input |
| Icebreaker | Stage, active player, choices |
| BibleCharacter | Character index, revealed clues, answer state |
| HeartOrAction | Scenario index, selected choice |
| MainDiscussion | Active tab, card index |

### 6.3 Persistence (localStorage)
| Key | Value |
|-----|-------|
| `h2h_p1` | Player 1 name |
| `h2h_p2` | Player 2 name |
| `h2h_muted` | "true"/"false" |

---

## 7. URL Structure

### 7.1 Current
```
/                          → Home (Welcome)
/?room=CODE&p1=NAME&p2=NAME → Auto-fill remote setup
```

### 7.2 Future
```
/                          → Home
/?theme=patience           → Start with specific theme
/?theme=love               → Start with Love theme
```

---

## 8. Content Organization (Data Files)

```
src/data/
├── players.ts              → Player defaults, feeling options
├── icebreaker.ts           → Colour/animal/nature options
├── bibleCharacters.ts      → 10 Bible characters
├── heartOrAction.ts        → 10 scenarios
├── mainDiscussion.ts       → Patience theme content
└── themes/                 → (future) theme packages
    ├── index.ts            → Theme registry
    ├── patience.ts         → Patience theme
    ├── love.ts             → Love theme (future)
    └── ...
```

---

## 9. Component Organization

```
src/components/
├── screens/                → Chapter containers
│   ├── WelcomeScreen.tsx
│   ├── PlayerSetupScreen.tsx
│   ├── IcebreakerScreen.tsx
│   ├── BibleCharacterScreen.tsx
│   ├── HeartOrActionScreen.tsx
│   ├── MainDiscussionScreen.tsx
│   └── EndingScreen.tsx
├── ui/                     → Reusable blocks
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── VerseCard.tsx
│   ├── ProgressTree.tsx
│   ├── JourneyHeader.tsx
│   └── BackgroundParticles.tsx
└── activities/             → (future) reusable activity components
```

---

## 10. Information Architecture Principles

1. **One primary action per screen.** Users always know what to do next.
2. **Progressive disclosure.** Information reveals gradually, never dumps.
3. **No dead ends.** Every screen leads somewhere.
4. **Consistent patterns.** Same components, same behavior everywhere.
5. **Content is data.** Themes, characters, scenarios are all data — not code.
6. **Simple over clever.** If navigation needs explaining, it's too complex.