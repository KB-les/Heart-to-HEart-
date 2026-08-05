# 23 — Data Model

> Every object. Every property. Every relationship.
> This becomes the foundation for: Database → React → TypeScript → Future Backend.
> Without this, the architecture isn't complete.

---

## 1. Entity Relationship Overview

```
WorshipExperience 1───1 Journey 1───* JourneyScene 1───1 Activity
       │
       ├──1──* BibleCharacter
       ├──1──* HeartOrActionScenario
       ├──1──* DiscussionCard
       ├──1──* AdditionalScripture
       └──1──1 ClosingReflection

Player 1───* Session 1───* CompletedCharacter
Player 1───* Session 1───1 JourneyProgress
```

---

## 2. Core Entities

### 2.1 Player

```typescript
interface Player {
  id: string;
  name: string;
  avatar: string;              // emoji
  role: "host" | "guest" | null;
  // Icebreaker choices (per session)
  color?: ColorOption;
  colorFeelings?: FeelingOption[];
  animal?: AnimalOption;
  animalFeelings?: FeelingOption[];
  nature?: NatureOption;
  natureFeelings?: FeelingOption[];
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique identifier |
| `name` | string | ✅ | Display name |
| `avatar` | string | ✅ | Emoji avatar |
| `role` | "host" \| "guest" \| null | ✅ | Remote sync role |
| `color` | ColorOption | ❌ | Icebreaker choice |
| `colorFeelings` | FeelingOption[] | ❌ | Max 2 |
| `animal` | AnimalOption | ❌ | Icebreaker choice |
| `animalFeelings` | FeelingOption[] | ❌ | Max 2 |
| `nature` | NatureOption | ❌ | Icebreaker choice |
| `natureFeelings` | FeelingOption[] | ❌ | Max 2 |

---

### 2.2 WorshipExperience

```typescript
interface WorshipExperience {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  journey: Journey;
  keyPassage: KeyPassage;
  farmerIllustration: FarmerIllustration;
  mainDiscussionCards: DiscussionCard[];
  additionalScriptures: AdditionalScripture[];
  characters: BibleCharacter[];
  heartOrActionScenarios: HeartOrActionScenario[];
  closingReflection: ClosingReflection;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique identifier (kebab-case) |
| `title` | string | ✅ | Question format |
| `subtitle` | string | ✅ | Gentle hint |
| `icon` | string | ✅ | Emoji for card |
| `journey` | Journey | ✅ | Narrative arc |
| `keyPassage` | KeyPassage | ✅ | Main scripture |
| `farmerIllustration` | FarmerIllustration | ✅ | Theme metaphor |
| `mainDiscussionCards` | DiscussionCard[] | ✅ | 4 cards |
| `additionalScriptures` | AdditionalScripture[] | ✅ | 2 scriptures |
| `characters` | BibleCharacter[] | ✅ | 8-10 characters |
| `heartOrActionScenarios` | HeartOrActionScenario[] | ✅ | 10 scenarios |
| `closingReflection` | ClosingReflection | ✅ | Warm blessing |

---

### 2.3 Journey

```typescript
interface Journey {
  id: string;
  title: string;                   // e.g., "From Seed to Harvest"
  scenes: JourneyScene[];
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique identifier |
| `title` | string | ✅ | Narrative title |
| `scenes` | JourneyScene[] | ✅ | 7 scenes |

---

### 2.4 JourneyScene

```typescript
interface JourneyScene {
  id: string;
  title: string;                   // e.g., "Morning", "Waiting"
  icon: string;                    // emoji
  description: string;             // what this scene represents
  activityId: string;              // which activity plays here
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique identifier |
| `title` | string | ✅ | Scene name |
| `icon` | string | ✅ | Emoji |
| `description` | string | ✅ | Scene meaning |
| `activityId` | string | ✅ | References Activity |

---

### 2.5 Activity

```typescript
interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  subtitle?: string;
  artwork?: Artwork;
  instructions: string;
  interaction: Interaction;
  discussion: DiscussionSection;
  scripture?: ScriptureSection;
  reflection?: ReflectionSection;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique identifier |
| `type` | ActivityType | ✅ | Activity kind |
| `title` | string | ✅ | Display title |
| `subtitle` | string | ❌ | Optional subtitle |
| `artwork` | Artwork | ❌ | Optional illustration |
| `instructions` | string | ✅ | How to play |
| `interaction` | Interaction | ✅ | Type-specific |
| `discussion` | DiscussionSection | ✅ | Questions |
| `scripture` | ScriptureSection | ❌ | Optional scripture |
| `reflection` | ReflectionSection | ❌ | Optional reflection |

---

## 3. Content Entities

### 3.1 BibleCharacter

```typescript
interface BibleCharacter {
  id: string;
  name: string;
  title: string;
  avatar: string;
  themeColor: string;
  era: string;
  clues: CharacterClue[];
  summary: string;
  timeline: TimelineMilestone[];
  keyScriptures: ScriptureRef[];
  interestingFact: string;
  qualities: string[];
  discussionQuestions: string[];
  reflection: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | kebab-case |
| `name` | string | ✅ | Character name |
| `title` | string | ✅ | Role description |
| `avatar` | string | ✅ | Emoji |
| `themeColor` | string | ✅ | Tailwind gradient |
| `era` | string | ✅ | Historical period |
| `clues` | CharacterClue[] | ✅ | 3 clues |
| `summary` | string | ✅ | Faith-focused |
| `timeline` | TimelineMilestone[] | ✅ | 3 milestones |
| `keyScriptures` | ScriptureRef[] | ✅ | 2 scriptures |
| `interestingFact` | string | ✅ | Delightful fact |
| `qualities` | string[] | ✅ | 2-3 qualities |
| `discussionQuestions` | string[] | ✅ | 3 questions |
| `reflection` | string | ✅ | Closing thought |

---

### 3.2 CharacterClue

```typescript
interface CharacterClue {
  number: number;
  text: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `number` | number | ✅ | 1-3 |
| `text` | string | ✅ | First person hint |

---

### 3.3 TimelineMilestone

```typescript
interface TimelineMilestone {
  period: string;
  event: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `period` | string | ✅ | Life stage label |
| `event` | string | ✅ | Description |

---

### 3.4 HeartOrActionScenario

```typescript
interface HeartOrActionScenario {
  id: string;
  category: string;
  scenario: string;
  biblePrinciple: {
    reference: string;
    text: string;
  };
  explanation: string;
  discussionQuestions: string[];
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | kebab-case |
| `category` | string | ✅ | Scenario category |
| `scenario` | string | ✅ | Relatable situation |
| `biblePrinciple` | object | ✅ | Reference + text |
| `explanation` | string | ✅ | Connection |
| `discussionQuestions` | string[] | ✅ | 2 questions |

---

### 3.5 DiscussionCard

```typescript
interface DiscussionCard {
  id: string;
  question: string;
  subtext?: string;
  scriptureAnchor?: string;
  reflectionPrompt: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique |
| `question` | string | ✅ | Open-ended |
| `subtext` | string | ❌ | Optional hint |
| `scriptureAnchor` | string | ❌ | Reference |
| `reflectionPrompt` | string | ✅ | Personal prompt |

---

### 3.6 AdditionalScripture

```typescript
interface AdditionalScripture {
  id: string;
  reference: string;
  text: string;
  illustrationTitle: string;
  illustrationIcon: string;
  illustrationDescription: string;
  discussionPoints: string[];
  practicalApplication: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique |
| `reference` | string | ✅ | Book/verse |
| `text` | string | ✅ | NWT text |
| `illustrationTitle` | string | ✅ | Metaphor title |
| `illustrationIcon` | string | ✅ | Emoji |
| `illustrationDescription` | string | ✅ | Metaphor |
| `discussionPoints` | string[] | ✅ | 2 points |
| `practicalApplication` | string | ✅ | Doable action |

---

### 3.7 KeyPassage

```typescript
interface KeyPassage {
  reference: string;
  translationNotice: string;
  text: string;
  promptMessage: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `reference` | string | ✅ | Book/verse |
| `translationNotice` | string | ✅ | "New World Translation" |
| `text` | string | ✅ | Full passage |
| `promptMessage` | string | ✅ | Reading prompt |

---

### 3.8 FarmerIllustration

```typescript
interface FarmerIllustration {
  title: string;
  icon: string;
  description: string;
  lesson: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `title` | string | ✅ | Metaphor title |
| `icon` | string | ✅ | Emoji |
| `description` | string | ✅ | Scene description |
| `lesson` | string | ✅ | Theme connection |

---

### 3.9 ClosingReflection

```typescript
interface ClosingReflection {
  message: string;
  blessing: string;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `message` | string | ✅ | Thank you message |
| `blessing` | string | ✅ | Warm blessing |

---

## 4. Option Entities

### 4.1 ColorOption

```typescript
interface ColorOption {
  name: string;
  hex: string;
  gradientFrom: string;
  gradientTo: string;
  border: string;
  label: string;
}
```

### 4.2 AnimalOption

```typescript
interface AnimalOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  reflection: string;
  scriptureSnippet?: string;
}
```

### 4.3 NatureOption

```typescript
interface NatureOption {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
  bgGradient: string;
  description: string;
  reflection: string;
}
```

### 4.4 FeelingOption

```typescript
type FeelingOption =
  | "Peaceful" | "Joyful" | "Hopeful" | "Inspired"
  | "Calm" | "Safe" | "Loved" | "Excited";
```

---

## 5. Session & Progress Entities

### 5.1 Session

```typescript
interface Session {
  id: string;
  experienceId: string;
  date: string;
  player1: Player;
  player2: Player;
  mode: "single" | "remote";
  completedCharacters: string[];
  completed: boolean;
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ | Unique |
| `experienceId` | string | ✅ | References experience |
| `date` | string | ✅ | ISO date |
| `player1` | Player | ✅ | Host/Player 1 |
| `player2` | Player | ✅ | Guest/Player 2 |
| `mode` | "single" \| "remote" | ✅ | Worship mode |
| `completedCharacters` | string[] | ✅ | Character names |
| `completed` | boolean | ✅ | Session done |

### 5.2 JourneyProgress

```typescript
interface JourneyProgress {
  sessionId: string;
  currentSceneIndex: number;
  completedScenes: string[];
}
```

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `sessionId` | string | ✅ | References session |
| `currentSceneIndex` | number | ✅ | Current position |
| `completedScenes` | string[] | ✅ | Scene IDs done |

---

## 6. Sync Entities

### 6.1 SyncMessage

```typescript
interface SyncMessage {
  type:
    | "SYNC_STEP"
    | "SYNC_PLAYERS"
    | "SYNC_ICEBREAKER"
    | "SYNC_CHARACTER"
    | "SYNC_HEART_ACTION"
    | "SYNC_DISCUSSION";
  payload: any;
}
```

### 6.2 Sync Payloads

| Type | Payload Shape |
|------|---------------|
| `SYNC_STEP` | `{ step: number }` |
| `SYNC_PLAYERS` | `{ p1: string, p2: string }` |
| `SYNC_ICEBREAKER` | `{ p1: PlayerChoice, p2: PlayerChoice, stage: number, activePlayer: 1 \| 2 }` |
| `SYNC_CHARACTER` | `{ characterIndex: number, revealedClues: number, isAnswerRevealed: boolean }` |
| `SYNC_HEART_ACTION` | `{ currentIndex: number, selectedChoice: "Heart" \| "Action" \| "Both" \| null }` |
| `SYNC_DISCUSSION` | `{ activeTab: "james" \| "psalm" \| "ecclesiastes", activeCardIndex: number }` |

---

## 7. Persistence Entities (localStorage)

| Key | Value Shape | Written |
|-----|-------------|---------|
| `h2h_p1` | `string` (name) | On name update |
| `h2h_p2` | `string` (name) | On name update |
| `h2h_muted` | `"true" \| "false"` | On mute toggle |
| `h2h_sessions` | `Session[]` (future) | On session complete |
| `h2h_garden` | `GardenState` (future) | On session complete |

---

## 8. Relationship Rules

1. **WorshipExperience owns** its Journey, Characters, Scenarios, Cards, Scriptures.
2. **Journey owns** its Scenes.
3. **JourneyScene references** one Activity by `activityId`.
4. **Player is session-scoped** — choices reset each session.
5. **Session references** one Experience.
6. **Session owns** two Players.
7. **Session tracks** completed characters.
8. **SyncMessage is transient** — not persisted.

---

## 9. Data Flow

```
WorshipExperience (static data)
    ↓
Experience Registry (index.ts)
    ↓
page.tsx (loads experience)
    ↓
Session (runtime state)
    ↓
JourneyProgress (current scene)
    ↓
Activity (renders content)
    ↓
Player choices (session state)
    ↓
[if remote] SyncMessage (WebRTC)
```

---

## 10. Future: Database Mapping

When a backend is added (Supabase/Firebase), the mapping is:

| TypeScript Entity | Database Table |
|-------------------|----------------|
| WorshipExperience | `experiences` |
| Journey | `journeys` |
| JourneyScene | `journey_scenes` |
| BibleCharacter | `characters` |
| HeartOrActionScenario | `scenarios` |
| DiscussionCard | `discussion_cards` |
| AdditionalScripture | `additional_scriptures` |
| Player | `players` |
| Session | `sessions` |
| SessionCharacter | `session_characters` (join table) |
| JourneyProgress | `journey_progress` |