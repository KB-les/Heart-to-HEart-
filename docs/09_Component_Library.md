# 06 — Component Library

> Imagine LEGO. Instead of building everything from scratch each time, we build reusable blocks. Every future worship theme reuses them.

---

## 1. Component Philosophy

- **One component, one job.** Each block does one thing well.
- **Theme-agnostic.** Components never hardcode theme content — they receive it via props.
- **Composable.** Screens are assembled from blocks, like LEGO.
- **Consistent.** Every block follows the UI Style Guide (docs/04).

---

## 2. Core UI Primitives

### 2.1 `Button`
**Purpose:** Primary interactive element.
**Props:**
```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  soundEffect?: "click" | "pageTurn" | "celebrate";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```
**Behavior:** Plays sound on press, spring hover/tap motion, disabled state.
**Location:** `src/components/ui/Button.tsx` ✅ exists

### 2.2 `Card`
**Purpose:** Content container.
**Props:**
```typescript
interface CardProps {
  variant?: "glass" | "parchment" | "cream" | "gold";
  children: React.ReactNode;
  className?: string;
}
```
**Behavior:** Entrance animation (fade + rise), variant styling.
**Location:** `src/components/ui/Card.tsx` ✅ exists

### 2.3 `Badge`
**Purpose:** Small status/label pill.
**Props:**
```typescript
interface BadgeProps {
  variant?: "gold" | "forest" | "emerald" | "outline";
  icon?: React.ReactNode;
  children: React.ReactNode;
}
```
**Status:** 🔲 To create (currently inline styles repeated across screens)

### 2.4 `SectionLabel`
**Purpose:** Uppercase tracking-wider label above sections.
**Props:**
```typescript
interface SectionLabelProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}
```
**Status:** 🔲 To create (currently inline)

---

## 3. Feedback & Status Components

### 3.1 `TurnBadge`
**Purpose:** Shows whose turn it is in turn-based screens.
**Props:**
```typescript
interface TurnBadgeProps {
  name: string;
  icon: string;
  isMyTurn?: boolean;
  isRemote?: boolean;
}
```
**Behavior:** "Turn: [name] (Your Turn!)" or "Turn: [name] (Waiting...)" in remote mode.
**Location:** Currently defined inside `IcebreakerScreen.tsx` — 🔲 extract to shared component

### 3.2 `WaitingBanner`
**Purpose:** Shows a waiting state (e.g., waiting for partner).
**Props:**
```typescript
interface WaitingBannerProps {
  message: string;
  icon?: React.ReactNode;
}
```
**Status:** 🔲 To create (currently inline in IcebreakerScreen)

### 3.3 `StatusPill`
**Purpose:** Connection/status indicator (connected, waiting, error).
**Props:**
```typescript
interface StatusPillProps {
  status: "connected" | "waiting" | "error" | "info";
  children: React.ReactNode;
}
```
**Status:** 🔲 To create

---

## 4. Content Display Components

### 4.1 `VerseCard`
**Purpose:** Displays a scripture passage with expandable text.
**Props:**
```typescript
interface VerseCardProps {
  reference: string;
  passageText: string;
  translationNotice?: string;
  promptMessage?: string;
  illustrationTitle?: string;
  illustrationIcon?: string;
  illustrationDescription?: string;
}
```
**Behavior:** Expandable scripture text, optional illustration banner, "View Scripture Text" toggle.
**Location:** `src/components/ui/VerseCard.tsx` ✅ exists

### 4.2 `ScriptureQuote`
**Purpose:** Inline scripture quote with reference.
**Props:**
```typescript
interface ScriptureQuoteProps {
  reference: string;
  text: string;
  variant?: "light" | "dark";
}
```
**Status:** 🔲 To create (currently inline in BibleCharacterScreen)

### 4.3 `DiscussionCard`
**Purpose:** A single discussion question card.
**Props:**
```typescript
interface DiscussionCardProps {
  question: string;
  subtext?: string;
  scriptureAnchor?: string;
  reflectionPrompt: string;
  index: number;
}
```
**Status:** 🔲 To create (currently inline in MainDiscussionScreen)

### 4.4 `DiscussionQuestionsList`
**Purpose:** Dark forest card with numbered discussion questions.
**Props:**
```typescript
interface DiscussionQuestionsListProps {
  title?: string;
  questions: string[];
}
```
**Status:** 🔲 To create (currently repeated in BibleCharacterScreen, HeartOrActionScreen, MainDiscussionScreen)

### 4.5 `ReflectionQuestions`
**Purpose:** "Conversation starters" bullet list.
**Props:**
```typescript
interface ReflectionQuestionsProps {
  questions: string[];
}
```
**Location:** Currently defined inside `IcebreakerScreen.tsx` — 🔲 extract to shared component

---

## 5. Game-Specific Components

### 5.1 `ProgressTree`
**Purpose:** Visual chapter progress indicator with clickable steps.
**Props:**
```typescript
interface ProgressTreeProps {
  currentStep: number;
  totalSteps?: number;
  onSelectStep?: (step: number) => void;
}
```
**Behavior:** 7 stages with emoji icons, current/passed/future states, hover tooltips.
**Location:** `src/components/ui/ProgressTree.tsx` ✅ exists

### 5.2 `JourneyHeader`
**Purpose:** Sticky header with logo, progress, players, mute.
**Props:**
```typescript
interface JourneyHeaderProps {
  currentStep: number;
  player1Name: string;
  player2Name: string;
  onSelectStep?: (step: number) => void;
}
```
**Location:** `src/components/ui/JourneyHeader.tsx` ✅ exists

### 5.3 `ClueCard`
**Purpose:** A single Bible character clue.
**Props:**
```typescript
interface ClueCardProps {
  number: number;
  text: string;
  index: number;
}
```
**Status:** 🔲 To create (currently inline in BibleCharacterScreen)

### 5.4 `TimelineMilestone`
**Purpose:** A single life-journey milestone card.
**Props:**
```typescript
interface TimelineMilestoneProps {
  period: string;
  event: string;
}
```
**Status:** 🔲 To create

### 5.5 `ChoiceCard`
**Purpose:** A selectable option card (colour, animal, nature, heart/action).
**Props:**
```typescript
interface ChoiceCardProps {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  selectedClassName?: string;
}
```
**Status:** 🔲 To create (currently repeated patterns across screens)

### 5.6 `FeelingPicker`
**Purpose:** "Choose TWO feelings" chip selector.
**Props:**
```typescript
interface FeelingPickerProps {
  selected: FeelingOption[];
  onToggle: (feeling: FeelingOption) => void;
  disabled?: boolean;
}
```
**Location:** Currently defined inside `IcebreakerScreen.tsx` — 🔲 extract to shared component

---

## 6. Screen Components

### 6.1 Screens (Chapter containers)
| Screen | File | Status |
|--------|------|--------|
| WelcomeScreen | `src/components/screens/WelcomeScreen.tsx` | ✅ exists |
| PlayerSetupScreen | `src/components/screens/PlayerSetupScreen.tsx` | ✅ exists |
| IcebreakerScreen | `src/components/screens/IcebreakerScreen.tsx` | ✅ exists |
| BibleCharacterScreen | `src/components/screens/BibleCharacterScreen.tsx` | ✅ exists |
| HeartOrActionScreen | `src/components/screens/HeartOrActionScreen.tsx` | ✅ exists |
| MainDiscussionScreen | `src/components/screens/MainDiscussionScreen.tsx` | ✅ exists |
| EndingScreen | `src/components/screens/EndingScreen.tsx` | ✅ exists |

### 6.2 Screen Pattern
Every screen follows this pattern:
```
Screen
├── Header (badge + title + subtitle)
├── Main Card (variant: glass/parchment/gold)
│   ├── Content sections
│   └── Action buttons
└── (optional) Footer
```

---

## 7. Context Providers

### 7.1 `PeerProvider` / `usePeer`
**Purpose:** WebRTC remote sync.
**API:**
```typescript
interface PeerContextType {
  mode: "off" | "host" | "guest";
  status: "disconnected" | "generating" | "waiting" | "connecting" | "connected" | "error";
  roomCode: string;
  myRole: "host" | "guest" | null;
  createRoom: () => void;
  joinRoom: (code: string) => void;
  leaveRoom: () => void;
  broadcast: (msg: SyncMessage) => void;
  lastMessage: SyncMessage | null;
  errorMessage: string | null;
}
```
**Location:** `src/context/PeerContext.tsx` ✅ exists

### 7.2 `SoundProvider` / `useSound`
**Purpose:** Synthesized sound effects + mute state.
**API:**
```typescript
interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (effect: SoundEffect) => void;
  ambientSound: SoundEffect | null;
  setAmbientSound: (effect: SoundEffect | null) => void;
}
```
**Location:** `src/context/SoundContext.tsx` ✅ exists

---

## 8. Data Layer (Content Packages)

### 8.1 Current Data Files
| File | Content |
|------|---------|
| `src/data/players.ts` | Player defaults + feeling options |
| `src/data/icebreaker.ts` | Colour/animal/nature options |
| `src/data/bibleCharacters.ts` | 10 Bible characters |
| `src/data/heartOrAction.ts` | 10 scenarios |
| `src/data/mainDiscussion.ts` | Patience theme content |

### 8.2 Future: Theme Package Structure
```typescript
interface WorshipTheme {
  id: string;
  title: string;
  subtitle: string;
  keyPassage: VerseContent;
  farmerIllustration: Illustration;
  mainDiscussionCards: DiscussionCard[];
  additionalScriptures: AdditionalScripture[];
  characters: BibleCharacter[];
  heartOrActionScenarios: HeartOrActionScenario[];
  closingReflection: Reflection;
}
```
**Status:** 🔲 To design in Phase 2 (after blueprint approval)

---

## 9. Component Inventory Checklist

### ✅ Existing (reusable as-is)
- [x] Button
- [x] Card
- [x] VerseCard
- [x] ProgressTree
- [x] JourneyHeader
- [x] BackgroundParticles
- [x] PeerProvider / usePeer
- [x] SoundProvider / useSound

### 🔲 To Extract (currently inline, should be shared)
- [ ] TurnBadge (from IcebreakerScreen)
- [ ] FeelingPicker (from IcebreakerScreen)
- [ ] ReflectionQuestions (from IcebreakerScreen)
- [ ] DiscussionQuestionsList (from BibleCharacterScreen / HeartOrActionScreen / MainDiscussionScreen)
- [ ] ClueCard (from BibleCharacterScreen)
- [ ] TimelineMilestone (from BibleCharacterScreen)

### 🔲 To Create (new)
- [ ] Badge
- [ ] SectionLabel
- [ ] WaitingBanner
- [ ] StatusPill
- [ ] ScriptureQuote
- [ ] DiscussionCard
- [ ] ChoiceCard
- [ ] ThemePackage type + loader

---

## 10. Component Rules

1. **All components** must be `"use client"` (this is a client-rendered app).
2. **All components** must accept `className` for extension.
3. **All interactive components** must play sounds via `useSound()`.
4. **No component** should import theme content directly — content comes via props.
5. **No component** should be longer than ~300 lines. If it is, extract sub-components.
6. **All components** must follow the UI Style Guide (docs/04).