# 07 — Worship Engine

> This is where Heart to Heart becomes different.
> Every worship session follows the same sacred arc: Opening → Prepare → Discover → Discuss → Reflect → Pray → Remember.
> The app becomes an engine, not a collection of pages.

---

## 1. The Worship Arc

Every worship session follows this universal structure:

```
Opening
  ↓
Prepare
  ↓
Discover
  ↓
Discuss
  ↓
Reflect
  ↓
Pray
  ↓
Remember
```

### 1.1 What Each Phase Means

| Phase | Purpose | Current Chapter |
|-------|---------|-----------------|
| **Opening** | Set the tone, invite in | Welcome |
| **Prepare** | Get ready, connect (or set up remote) | Player Setup |
| **Discover** | Warm up, get to know each other | Icebreaker |
| **Discover** | Explore Bible characters | Bible Character Activity |
| **Discuss** | Reflect on heart/action scenarios | Heart or Action |
| **Discuss** | Deep dive into scripture | Main Discussion |
| **Reflect** | Summarize, close warmly | Ending |
| **Pray** | (Future) guided prayer | Future |
| **Remember** | (Future) takeaway / summary | Future |

---

## 2. The Three-Layer Architecture

This is the core architectural insight that makes Heart to Heart a platform:

```
Worship Experience (the theme)
    ↓
Journey (the narrative arc)
    ↓
Activities (the scenes)
```

### 2.1 The Layers Explained

| Layer | What It Is | Example (Patience) |
|-------|-----------|---------------------|
| **Worship Experience** | The complete theme package | "Patience" |
| **Journey** | The narrative arc that tells a story | Morning → Waiting → Learning → Growing → Harvest |
| **Activities** | The scenes within the journey | Icebreaker, Guess the Character, Heart or Action, Discussion |

### 2.2 Why This Matters

Without the Journey layer, a theme is just a list of activities:

```
Patience
├── Icebreaker
├── Characters
├── Heart or Action
└── Discussion
```

With the Journey layer, a theme tells a story:

```
Patience
└── Journey: "From Seed to Harvest"
    ├── Scene 1: Morning (Welcome)
    ├── Scene 2: Planting (Icebreaker)
    ├── Scene 3: Waiting (Bible Characters)
    ├── Scene 4: Growing (Heart or Action)
    ├── Scene 5: Harvest (Main Discussion)
    └── Scene 6: Celebration (Ending)
```

**Love** could have a different journey. **Faith** another. **Hope** another.
The activities become scenes inside the journey — the user feels like they're moving through a story, not navigating software.

---

## 3. The Engine vs. The Content

### 3.1 The Engine (code)
- The journey flow
- The activity system (docs/06)
- The remote sync (WebRTC)
- The sound system
- The progress system
- The UI components

### 3.2 The Content (data)
- The Worship Experience (theme)
- The Journey (narrative arc)
- The scriptures
- The characters
- The scenarios
- The discussion cards
- The reflection

**The engine never changes. The content is just data.**

---

## 4. Worship Experience Package Structure

```typescript
interface WorshipExperience {
  id: string;
  title: string;
  subtitle: string;
  icon: string;                    // emoji for experience card
  journey: Journey;                // the narrative arc
  keyPassage: {
    reference: string;
    translationNotice: string;
    text: string;
    promptMessage: string;
  };
  farmerIllustration: {
    title: string;
    icon: string;
    description: string;
    lesson: string;
  };
  mainDiscussionCards: DiscussionCard[];
  additionalScriptures: AdditionalScripture[];
  characters: BibleCharacter[];
  heartOrActionScenarios: HeartOrActionScenario[];
  closingReflection: {
    message: string;
    blessing: string;
  };
}
```

### 4.1 The Journey Structure

```typescript
interface Journey {
  id: string;
  title: string;                   // e.g., "From Seed to Harvest"
  scenes: JourneyScene[];          // the narrative arc
}

interface JourneyScene {
  id: string;
  title: string;                   // e.g., "Morning", "Waiting", "Harvest"
  icon: string;                    // emoji
  description: string;             // what this scene represents
  activityId: string;              // which activity plays in this scene
}
```

---

## 5. The Journey Flow (Engine)

```
Scene 1: Welcome (Morning)
  ↓ (Start Worship)
Scene 2: Player Setup (Preparing)
  ↓ (Start Session)
Scene 3: Icebreaker (Planting)
  ↓ (Proceed)
Scene 4: Bible Character Activity (Waiting)
  ↓ (Proceed)
Scene 5: Heart or Action (Growing)
  ↓ (Proceed)
Scene 6: Main Discussion (Harvest)
  ↓ (Complete)
Scene 7: Ending (Celebration)
  ↓ (Finish / Restart)
Back to Scene 1
```

### 5.1 Engine Responsibilities
- Track current scene
- Render the correct activity
- Handle navigation (forward/backward)
- Sync state in remote mode
- Track completed characters
- Pass Worship Experience content to activities

---

## 6. Screen-to-Content Mapping

| Screen | Content Source | Experience-Agnostic? |
|--------|---------------|----------------------|
| WelcomeScreen | Static (no experience content) | ✅ Yes |
| PlayerSetupScreen | Static (no experience content) | ✅ Yes |
| IcebreakerScreen | `icebreaker.ts` (static options) | 🔲 Refactor to experience |
| BibleCharacterScreen | `bibleCharacters.ts` | 🔲 Refactor to experience |
| HeartOrActionScreen | `heartOrAction.ts` | 🔲 Refactor to experience |
| MainDiscussionScreen | `mainDiscussion.ts` (Patience) | 🔲 Refactor to experience |
| EndingScreen | Static + completed characters | ✅ Yes |

**v1.1 goal:** All screens receive Worship Experience content via props. No screen imports content directly.

---

## 7. Remote Sync in the Engine

### 7.1 What Syncs
| Message | Payload | Screen |
|---------|---------|--------|
| `SYNC_STEP` | `{ step }` | Navigation |
| `SYNC_PLAYERS` | `{ p1, p2 }` | Player Setup |
| `SYNC_ICEBREAKER` | `{ p1, p2, stage, activePlayer }` | Icebreaker |
| `SYNC_CHARACTER` | `{ characterIndex, revealedClues, isAnswerRevealed }` | Bible Activity |
| `SYNC_HEART_ACTION` | `{ currentIndex, selectedChoice }` | Heart or Action |
| `SYNC_DISCUSSION` | `{ activeTab, activeCardIndex }` | Discussion |

### 7.2 Sync Rules
- Host controls navigation
- Guest receives synced state
- Both see the same content
- Turn-based activities sync the active player

---

## 8. The Engine's Future Phases

### 8.1 Phase 1 (v1.0) — Current
- 7-scene journey
- Patience experience hardcoded
- Remote sync works

### 8.2 Phase 2 (v1.1) — Experience-Agnostic
- `WorshipExperience` type defined
- Experience registry created
- Screens receive experience via props
- Experience selection screen added
- Patience content moved into an experience package

### 8.3 Phase 3 (v2.0) — Experience Library
- Multiple experiences available
- Experience selection UI
- Each experience is a complete journey

### 8.4 Phase 4 (v3.0) — Worship Designer
- Users create experiences via a form
- No code required
- The engine generates the experience

---

## 9. The Worship Designer (Future)

### 9.1 The Vision
In six months, creating a new worship on "Pure Motives" requires no code:

```
Experience: Pure Motives
Journey: "The Heart's Garden"
Opening scripture: Matthew 5:8
Icebreaker: Choose one
Bible characters: Joseph, Jonathan, Jesus
Main discussion: 3 scriptures
Reflection: 2 questions
Closing thought: [text]

→ Click "Generate Worship"
→ The engine creates the entire experience
```

### 9.2 How It Works
1. User fills in a form (experience title, journey, scriptures, characters, questions)
2. The form produces a `WorshipExperience` data object
3. The engine loads the experience and renders the journey
4. The experience can be saved, exported, or shared

### 9.3 Why This Matters
- **Unlimited content.** Any family can create their own worship.
- **No code required.** The engine does all the work.
- **Community potential.** Experiences can be shared between families.

---

## 10. Engine Rules

1. **The engine is sacred.** Core architecture changes require approval (docs/20).
2. **Content is data.** Never hardcode experience content in components.
3. **Screens are dumb.** They render what they're given.
4. **The engine is reusable.** Any experience, any journey, any activity, any time.
5. **Worship first.** The engine serves the worship experience, never the reverse.

---

## 11. Current Implementation Status

| Engine Component | Status |
|------------------|--------|
| 7-scene journey | ✅ Exists |
| Remote sync | ✅ Exists |
| Sound system | ✅ Exists |
| Progress tree | ✅ Exists |
| Journey layer | 🔲 To create (v1.1) |
| WorshipExperience type | 🔲 To create (v1.1) |
| Experience registry | 🔲 To create (v1.1) |
| Experience selection screen | 🔲 To create (v1.1) |
| Experience-agnostic screens | 🔲 To create (v1.1) |
| Worship Designer | 🔲 To create (v3.0) |