# 26 — Screen Bible

> Every single screen gets its own page.
> Purpose, wireframe, components, animations, sounds, background, buttons, states, navigation, acceptance criteria.
> Once this exists, the app can be built screen-by-screen with almost no ambiguity.

---

## Screen Index

| # | Screen | Scene | Status |
|---|--------|-------|--------|
| 1 | Splash Screen | — | 🔲 To create |
| 2 | Welcome | Morning | ✅ Exists |
| 3 | Experience Selection | — | 🔲 To create (v1.1) |
| 4 | Player Setup | Preparing | ✅ Exists |
| 5 | Icebreaker | Planting | ✅ Exists |
| 6 | Guess the Character | Waiting | ✅ Exists |
| 7 | Heart or Action | Growing | ✅ Exists |
| 8 | Main Discussion | Harvest | ✅ Exists |
| 9 | Ending / Summary | Celebration | ✅ Exists |

---

## Screen 1 — Splash Screen

### Purpose
A brief, beautiful opening moment that sets the tone before the app loads. Shows the Heart to Heart emblem and tagline.

### Wireframe
```
┌─────────────────────────────┐
│                             │
│        (sunrise glow)       │
│                             │
│          💛 (heart)         │
│                             │
│     Heart to Heart          │
│  Growing closer to Jehovah  │
│                             │
│        (loading...)         │
│                             │
└─────────────────────────────┘
```

### Components Used
- `BackgroundParticles` (ambient)
- Heart emblem (motion.div)
- Title (serif, bold)

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Sunrise glow | scale/opacity loop | 8s |
| Heart | fade + scale in | 1s |
| Title | fade in | 0.6s (delay 0.3s) |
| Tagline | fade in | 0.6s (delay 0.5s) |

### Sounds
- None (silent — ambient only)

### Background
- `BackgroundParticles` (leaves, clouds, glows)

### Buttons
- None (auto-transitions after ~2.5s)

### States
| State | Behavior |
|-------|----------|
| Loading | Show splash, then transition to Welcome |
| Error | (none — no data loading) |

### Navigation
- Auto → Welcome (after ~2.5s)

### Acceptance Criteria
- [ ] Splash shows for ~2.5s
- [ ] Heart emblem animates in
- [ ] Auto-transitions to Welcome
- [ ] No console errors

---

## Screen 2 — Welcome

### Purpose
Set the tone; invite the user in. The "Morning" scene of the journey.

### Wireframe
```
┌─────────────────────────────┐
│                             │
│     (animated sunrise)      │
│        💛 (heart)           │
│                             │
│  [Family Worship Experience]│
│                             │
│      Heart to Heart         │
│  "Growing closer to         │
│   Jehovah together."        │
│                             │
│  A peaceful, joyful space   │
│  for meaningful Bible       │
│  discussions and fun.       │
│                             │
│     [Start Worship →]       │
│                             │
│  Built with love for        │
│  family worship 💛          │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass variant)
- `Button` (gold, lg)
- `BackgroundParticles`
- lucide icons: `Heart`, `Sparkles`, `ArrowRight`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Sunrise glow | scale/opacity/rotate loop | 8s |
| Heart emblem | fade + rise | 1s |
| Rotating dashed ring | rotate 360° | 25s |
| Badge | fade + rise | 0.6s (delay 0.2s) |
| Title | fade + rise | 0.6s (delay 0.2s) |
| Tagline | fade + rise | 0.6s (delay 0.2s) |
| Intro paragraph | fade in | 0.6s (delay 0.4s) |
| Start button | fade + scale | 0.5s (delay 0.5s) |

### Sounds
- Start button: `click`

### Background
- `BackgroundParticles` (ambient)
- Animated sunrise glow behind emblem

### Buttons
| Button | Variant | Size | Action |
|--------|---------|------|--------|
| Start Worship | gold | lg | → Player Setup |

### States
| State | Behavior |
|-------|----------|
| Initial | All elements animate in |
| Ready | Start button enabled |

### Navigation
- Start Worship → Player Setup (forward)

### Acceptance Criteria
- [ ] All elements animate in sequence
- [ ] Start Worship plays `click` sound
- [ ] Transitions to Player Setup
- [ ] Responsive on mobile + desktop

---

## Screen 3 — Experience Selection

### Purpose
Let the user choose which Worship Experience to run (Patience, Love, Faith...). Appears between Welcome and Player Setup.

### Wireframe
```
┌─────────────────────────────┐
│  [Step · Choose Experience] │
│                             │
│  Which worship would you    │
│  like to enjoy today?       │
│                             │
│  ┌─────────┐ ┌─────────┐   │
│  │  🌱     │ │  💛     │   │
│  │ Patience│ │ Love    │   │
│  │ ...     │ │ Coming  │   │
│  │ [Start] │ │ Soon    │   │
│  └─────────┘ └─────────┘   │
│  ┌─────────┐ ┌─────────┐   │
│  │  ⛰️     │ │  🌅     │   │
│  │ Faith   │ │ Hope    │   │
│  │ Coming  │ │ Coming  │   │
│  │ Soon    │ │ Soon    │   │
│  └─────────┘ └─────────┘   │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass)
- `Button` (gold, sm)
- Experience cards (grid)

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Cards | fade + rise (staggered) | 0.4s each |
| Hover | scale 1.03, y -2 | 0.2s |

### Sounds
- Card select: `click`

### Background
- `BackgroundParticles`

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| Start (per experience) | gold | Select experience → Player Setup |
| Coming Soon (disabled) | secondary | None |

### States
| State | Behavior |
|-------|----------|
| Loading | Show available experiences |
| Selected | Highlight selected experience |
| Coming Soon | Disabled card |

### Navigation
- Select experience → Player Setup

### Acceptance Criteria
- [ ] Available experiences shown as cards
- [ ] Coming Soon experiences disabled
- [ ] Selecting an experience loads it into the engine
- [ ] Responsive grid

---

## Screen 4 — Player Setup

### Purpose
Choose mode (single/remote), set names, connect remotely. The "Preparing" scene.

### Wireframe
```
┌─────────────────────────────┐
│  [Step 1 · Worship Setup]   │
│  How are you worshipping    │
│  today?                     │
│                             │
│  [One Device] [Two Devices] │
│                             │
│  ┌───────────────────────┐  │
│  │ (Remote panel if      │  │
│  │  two devices)         │  │
│  │  [Create Room Code]   │  │
│  │  [Join with code]     │  │
│  │  Room: LOVE           │  │
│  │  [Copy WhatsApp Link] │  │
│  │  Waiting for partner  │  │
│  └───────────────────────┘  │
│                             │
│  Player 1 (Host)            │
│  [🌿 Karabelo________]      │
│                             │
│  Player 2 (Partner)         │
│  [🌸 Yolanda________]       │
│                             │
│  [Start Session →]          │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass)
- `Button` (gold, primary, secondary)
- `Badge` (role, status)
- lucide icons: `Users`, `ArrowRight`, `Wifi`, `Copy`, `Check`, `Smartphone`, `Globe`, `AlertCircle`, `Shield`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Mode cards | fade + rise | 0.4s |
| Remote panel | height 0→auto | 0.4s |
| Connected dot | ping | infinite |

### Sounds
- Mode select: `click`
- Create room: `click`
- Join: `click`
- Copy link: `click`
- Start session: `click`

### Background
- `BackgroundParticles`

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| One Device | toggle | Set single mode |
| Two Devices | toggle | Set remote mode |
| Create Room Code | gold | Create room |
| Join | primary | Join room |
| Copy WhatsApp Link | gold | Copy share link |
| Disconnect | text | Leave room |
| Start Session | gold | → Icebreaker |

### States
| State | Behavior |
|-------|----------|
| Single mode | Names editable, Start enabled |
| Remote (disconnected) | Show create/join options |
| Remote (waiting) | Show room code + copy link |
| Remote (connecting) | Spinner |
| Remote (connected) | Green "Partner Connected" |
| Remote (error) | Error message |
| Guest | Names disabled (host controls) |

### Navigation
- Start Session → Icebreaker (forward)

### Acceptance Criteria
- [ ] Single mode works without connection
- [ ] Remote mode: host creates room, guest joins
- [ ] Names sync between host and guest
- [ ] Copy link works
- [ ] Start disabled until ready

---

## Screen 5 — Icebreaker

### Purpose
Warm, low-pressure getting-to-know-you. The "Planting" scene.

### Wireframe
```
┌─────────────────────────────┐
│  [Step 2 · Getting to Know] │
│  Let's get to know each     │
│  other                      │
│                             │
│  [1. Colour] [2. Animal]    │
│  [3. Nature]                │
│                             │
│  Turn: Karabelo 🌿          │
│                             │
│  What is your favourite     │
│  Colour?                    │
│                             │
│  (8 colour circles)         │
│                             │
│  Choose TWO feelings:       │
│  [Peaceful] [Joyful] ...    │
│                             │
│  [Save & Pass to Yolanda →] │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass, parchment)
- `Button` (gold, secondary)
- `TurnBadge`
- `FeelingPicker`
- `ReflectionQuestions`
- lucide icons: `Sparkles`, `ArrowRight`, `Check`, `MessageCircle`, `Info`, `Clock`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Stage pills | fade | 0.3s |
| Colour circles | pop in | 0.3s |
| Selected circle | ring + checkmark pop | 0.3s |
| Feeling picker | height 0→auto | 0.4s |
| Stage transition | x: ±40 | 0.35s |

### Sounds
- Select option: `reveal`
- Toggle feeling: `click`
- Save & Pass: `click`

### Background
- `BackgroundParticles`

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| Save & Pass / Submit | gold | Advance turn/stage |
| Continue to Question 2/3 | gold | Advance stage |

### States
| State | Behavior |
|-------|----------|
| Stage 1 (Colour) | Pick colour + 2 feelings |
| Stage 2 (Animal) | Pick animal + 2 feelings |
| Stage 3 (Nature) | Pick nature + 2 feelings |
| Stage 4 (Summary) | Show both players' choices + reflection |
| Remote (not your turn) | Controls disabled, waiting banner |

### Navigation
- Proceed → Guess the Character (forward)

### Acceptance Criteria
- [ ] 3 questions flow correctly
- [ ] Turn-based logic works (single + remote)
- [ ] Summary shows both players' choices
- [ ] Reflection questions shown
- [ ] Cannot advance without valid selection

---

## Screen 6 — Guess the Character

### Purpose
Discover faithful Bible figures through clues. The "Waiting" scene.

### Wireframe
```
┌─────────────────────────────┐
│  [Step 3 · Guess the        │
│   Bible Character]  [1/10]  │
│                             │
│  Who am I?                  │
│                             │
│  ┌───────────────────────┐  │
│  │ 📜 Parchment Scroll #1│  │
│  │ Clue 1 of 3           │  │
│  │                       │  │
│  │ ① "I was given a      │  │
│  │    special garment..."│  │
│  │                       │  │
│  │ [Take a guess...]     │  │
│  │ [Reveal Next Clue]    │  │
│  │ [Reveal Answer]       │  │
│  └───────────────────────┘  │
│                             │
│  (After reveal: celebration │
│   card, timeline,           │
│   scriptures, fact,         │
│   discussion questions)     │
│                             │
│  [Replay] [Next Character→] │
└─────────────────────────────┘
```

### Components Used
- `Card` (parchment)
- `Button` (gold, secondary, outline)
- `ClueCard`
- `TimelineMilestone`
- `ScriptureQuote`
- `DiscussionQuestionsList`
- lucide icons: `Sparkles`, `Eye`, `CheckCircle2`, `ChevronRight`, `BookOpen`, `Calendar`, `HelpCircle`, `Award`, `ArrowRight`, `RotateCcw`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Clue reveal | slide in from left | 0.4s (staggered) |
| Answer reveal | scale [0, 1.2, 1] | 0.6s |
| Celebration card | fade + scale | 0.5s |

### Sounds
- Reveal clue: `pageTurn`
- Reveal answer: `celebrate`
- Next character: `click`
- Replay: `click`

### Background
- `BackgroundParticles`

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| Reveal Next Clue | secondary | Show next clue |
| Reveal Answer | gold | Show answer |
| Replay Clues | outline | Reset clues |
| Next Character | gold | Next character / proceed |

### States
| State | Behavior |
|-------|----------|
| Clues hidden | Show revealed clues only |
| Answer hidden | Show clue controls |
| Answer revealed | Show celebration + content |
| Last character | "Proceed to Heart or Action" |

### Navigation
- Proceed → Heart or Action (forward)

### Acceptance Criteria
- [ ] Clues reveal progressively
- [ ] Answer reveal celebrates
- [ ] All character content shows (timeline, scriptures, fact, questions)
- [ ] Replay resets clues
- [ ] Last character proceeds

---

## Screen 7 — Heart or Action

### Purpose
Reflect on whether a scenario reflects a heart motive, an action, or both. The "Growing" scene.

### Wireframe
```
┌─────────────────────────────┐
│  [Step 4 · Heart or Action] │
│  [1/10]                     │
│                             │
│  Heart, Action, or Both?    │
│                             │
│  ┌───────────────────────┐  │
│  │ Scenario #1           │  │
│  │ Motives & Praise      │  │
│  │                       │  │
│  │ "A brother comments   │  │
│  │  at every meeting..." │  │
│  └───────────────────────┘  │
│                             │
│  [💛 Heart] [⚡ Action]     │
│  [🧩 Both]                 │
│                             │
│  (After selection:          │
│   Bible principle,          │
│   explanation,              │
│   discussion questions)     │
│                             │
│  [Next Scenario →]          │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass)
- `Button` (gold)
- `ChoiceCard`
- `DiscussionQuestionsList`
- lucide icons: `Heart`, `Zap`, `Layers`, `Sparkles`, `BookOpen`, `ArrowRight`, `HelpCircle`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Scenario text | fade in | 0.4s |
| Choice select | ring + glow | 0.3s |
| Revealed content | height 0→auto | 0.4s |

### Sounds
- Select choice: `reveal`
- Next scenario: `click`

### Background
- `BackgroundParticles`

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| Heart | choice | Select Heart |
| Action | choice | Select Action |
| Both | choice | Select Both |
| Next Scenario | gold | Next / proceed |

### States
| State | Behavior |
|-------|----------|
| No selection | Show scenario + 3 choices |
| Selection made | Show principle + discussion |
| Last scenario | "Proceed to Main Discussion" |

### Navigation
- Proceed → Main Discussion (forward)

### Acceptance Criteria
- [ ] 3 choices work
- [ ] Selection reveals principle + discussion
- [ ] No "right" answer pressure
- [ ] Last scenario proceeds

---

## Screen 8 — Main Discussion

### Purpose
Deep dive into the experience's key scripture. The "Harvest" scene.

### Wireframe
```
┌─────────────────────────────┐
│  [Step 5 · Main Discussion] │
│                             │
│  Why Does Jehovah Value     │
│  Patience?                  │
│                             │
│  ┌───────────────────────┐  │
│  │ 🌱🌧️ Farmer          │  │
│  │ The Farmer Waiting    │  │
│  │ for Rain              │  │
│  └───────────────────────┘  │
│                             │
│  [James 5:7-11] [Psalm 37:7]│
│  [Ecclesiastes 7:8]         │
│                             │
│  ┌───────────────────────┐  │
│  │ 📖 James 5:7-11       │  │
│  │ [View Scripture Text] │  │
│  └───────────────────────┘  │
│                             │
│  Discussion Cards:          │
│  ┌───────────────────────┐  │
│  │ Card 1 of 4           │  │
│  │ "What does the farmer │  │
│  │  teach us about       │  │
│  │  patience?"           │  │
│  │ [Prev] [••••] [Next]  │  │
│  └───────────────────────┘  │
│                             │
│  [Complete Worship →]       │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass)
- `VerseCard`
- `Button` (gold, secondary)
- `DiscussionCard`
- lucide icons: `Sparkles`, `BookOpen`, `MessageCircle`, `HelpCircle`, `Lightbulb`, `ArrowRight`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Tab change | fade | 0.3s |
| Card transition | x: ±20 | 0.35s |
| Verse expand | height 0→auto | 0.35s |

### Sounds
- Tab change: `click`
- Card nav: `click`
- Verse toggle: `click`

### Background
- `BackgroundParticles`

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| Tab (James/Psalm/Eccl) | toggle | Switch scripture |
| View Scripture Text | gold/secondary | Expand passage |
| Previous Card | secondary | Previous discussion card |
| Next Card | gold | Next discussion card |
| Complete Worship | gold | → Ending |

### States
| State | Behavior |
|-------|----------|
| Tab: James | VerseCard + 4 discussion cards |
| Tab: Psalm | VerseCard + discussion points |
| Tab: Ecclesiastes | VerseCard + discussion points |
| Verse expanded | Show full passage |

### Navigation
- Complete → Ending (forward)

### Acceptance Criteria
- [ ] 3 tabs work
- [ ] VerseCard expands/collapses
- [ ] Discussion card carousel works
- [ ] Remote syncs tab + card index

---

## Screen 9 — Ending / Summary

### Purpose
Reflect, summarize, and close warmly. The "Celebration" scene.

### Wireframe
```
┌─────────────────────────────┐
│                             │
│        🌳 (tree)            │
│        ✨ (sparkles)        │
│                             │
│  Spiritual Growth & Unity   │
│                             │
│  ┌───────────────────────┐  │
│  │ Worship Complete       │  │
│  │ Karabelo & Yolanda     │  │
│  │                       │  │
│  │ Thank you for spending │  │
│  │ time in Jehovah's Word │  │
│  │ together.              │  │
│  │                       │  │
│  │ Today's Spiritual Gems │  │
│  │ Theme: Patience        │  │
│  │ Scriptures: James...   │  │
│  │ Characters: [Joseph]   │  │
│  │  [David] [Abraham]     │  │
│  │                       │  │
│  │ [Finish Worship]       │  │
│  │ [Start Fresh Session]  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

### Components Used
- `Card` (glass)
- `Button` (gold, secondary)
- lucide icons: `Sparkles`, `Heart`, `CheckCircle2`, `RotateCcw`

### Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Tree growth | scale 0.2→1, fade | 1.5s |
| Tree sway | scale/rotate loop | 8s |
| Sparkles | opacity/y loop | 3-4s |
| Card | fade + rise | 0.4s |

### Sounds
- Finish: `click`
- Restart: `click`

### Background
- `BackgroundParticles`
- Sunset glow

### Buttons
| Button | Variant | Action |
|--------|---------|--------|
| Finish Worship Session | gold | → Welcome |
| Start Fresh Session | secondary | → Welcome |

### States
| State | Behavior |
|-------|----------|
| Initial | Tree grows in |
| Ready | Both buttons enabled |

### Navigation
- Finish / Restart → Welcome (back to start)

### Acceptance Criteria
- [ ] Tree grows in beautifully
- [ ] Summary shows theme, scriptures, characters
- [ ] Both buttons return to Welcome
- [ ] No score, no rating — just a warm summary

---

## Screen Documentation Rules

1. **Every screen** gets its own section in this document.
2. **Every element** is specified — nothing is guessed.
3. **Every animation** references the Animation Guide (docs/10).
4. **Every sound** references the Sound Guide (docs/11).
5. **Every component** references the Component Library (docs/09).
6. **Acceptance criteria** must be testable.
7. **New screens** are added here before they are built.