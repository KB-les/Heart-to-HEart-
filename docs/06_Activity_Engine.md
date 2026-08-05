# 06 — Activity Engine

> Instead of hard-coding activities, everything becomes reusable.
> Every activity inherits the same structure: Title → Artwork → Instructions → Interaction → Discussion → Scripture → Reflection → Continue.
> Activities are the building blocks of a Worship Experience — they are not "games."

---

## 1. The Activity Pattern

Every activity in Heart to Heart follows the same universal flow:

```
Activity
  ↓
Title
  ↓
Artwork
  ↓
Instructions
  ↓
Interaction
  ↓
Discussion
  ↓
Scripture
  ↓
Reflection
  ↓
Continue
```

This means **Icebreaker**, **Guess the Character**, **Heart or Action**, and future activities (Reflection, Prayer, Reading) all inherit the same engine. Adding a new activity type is just defining a new interaction layer.

---

## 2. Activity Types

### 2.1 Current Activities

| Activity | Interaction | Discussion | Scripture |
|----------|-------------|------------|-----------|
| Icebreaker | Pick options + feelings | Reflection on choices | Optional snippets |
| Guess the Character | Reveal clues, guess | Character discussion | Key scriptures |
| Heart or Action | Classify scenario | Principle discussion | Bible principle |

### 2.2 Future Activities (backlog)

| Activity | Interaction | Notes |
|----------|-------------|-------|
| Reflection | Guided reflection prompts | Future |
| Prayer | Build a prayer together | Future |
| Scripture Reading | Guided reading with prompts | Future |
| Scripture Match | Match verse to situation | Future |
| Quality Sort | Sort qualities by importance | Future |
| Story Retell | Retell a Bible story in own words | Future |

---

## 3. Activity Engine Architecture

### 3.1 Core Interface

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
  onComplete: () => void;
}
```

### 3.2 Activity Types

```typescript
type ActivityType =
  | "icebreaker"
  | "guess-character"
  | "heart-or-action"
  | "reflection"           // future
  | "prayer"               // future
  | "scripture-reading"    // future
  | "scripture-match"      // future
  | "quality-sort"         // future
  | "story-retell";        // future
```

### 3.3 Interaction Layer

Each activity type defines its own interaction component:

```typescript
interface Interaction {
  type: ActivityType;
  // Type-specific props
  options?: Option[];
  clues?: Clue[];
  scenarios?: Scenario[];
  // ...
}
```

---

## 4. Activity Flow States

Every activity goes through these states:

```
idle
  ↓
intro (title + artwork + instructions)
  ↓
interacting (user completes the interaction)
  ↓
discussing (discussion questions revealed)
  ↓
reflecting (reflection prompt)
  ↓
complete (continue button)
```

### 4.1 State Transitions

| From | To | Trigger |
|------|-----|---------|
| idle | intro | Activity mounts |
| intro | interacting | User taps "Begin" |
| interacting | discussing | User completes interaction |
| discussing | reflecting | User taps "Continue" |
| reflecting | complete | User taps "Finish" |
| complete | next | User taps "Next Activity" |

---

## 5. Activity Components

### 5.1 ActivityContainer
**Purpose:** Wraps any activity with consistent layout.
```
ActivityContainer
├── Header (title, subtitle, progress)
├── Artwork (optional illustration)
├── Instructions
├── Interaction (type-specific)
├── Discussion (revealed after interaction)
├── Scripture (optional)
├── Reflection (optional)
└── Footer (continue/next buttons)
```

### 5.2 Interaction Components (per type)

| Type | Component | Behavior |
|------|-----------|----------|
| icebreaker | `IcebreakerInteraction` | Pick options + feelings, turn-based |
| guess-character | `CharacterInteraction` | Reveal clues, guess input |
| heart-or-action | `HeartOrActionInteraction` | Classify scenario |

### 5.3 Shared Sub-Components

| Component | Used By |
|-----------|---------|
| `ChoiceCard` | All interactions (selectable options) |
| `FeelingPicker` | Icebreaker |
| `ClueCard` | Guess-character |
| `DiscussionQuestionsList` | All activities |
| `ScriptureQuote` | All activities |
| `ReflectionPrompt` | All activities |

---

## 6. Activity Data Model

### 6.1 Icebreaker Activity
```typescript
interface IcebreakerActivity {
  type: "icebreaker";
  questions: IcebreakerQuestion[];
}

interface IcebreakerQuestion {
  id: string;
  prompt: string;
  options: Option[];
  feelings: FeelingOption[];
  reflection: string;
}
```

### 6.2 Guess Character Activity
```typescript
interface CharacterActivity {
  type: "guess-character";
  characters: BibleCharacter[];
}
```

### 6.3 Heart or Action Activity
```typescript
interface HeartOrActionActivity {
  type: "heart-or-action";
  scenarios: HeartOrActionScenario[];
}
```

---

## 7. Activity Progression

### 7.1 Within an Activity
- Activities have internal steps (e.g., 3 icebreaker questions, 10 characters, 10 scenarios)
- Progress indicator shows "Step X of Y"
- Each step follows the same flow: interact → discuss → continue

### 7.2 Between Activities
- Activities are sequenced by the **Journey** (docs/07)
- A Journey is a narrative arc (e.g., Morning → Waiting → Learning → Growing → Harvest)
- Each activity is a **scene** within the Journey
- Each activity reports completion to the Journey

---

## 8. Activity Rules

1. **No scores.** Activities never grade the user.
2. **No timers.** Users go at their own pace.
3. **Progressive reveal.** Information reveals gradually.
4. **Discussion is the reward.** Every interaction leads to conversation.
5. **Scripture anchors.** Every activity connects to scripture.
6. **Reusable.** Any activity can be used in any Worship Experience.
7. **Experience-agnostic.** Activities receive content via props, never import it.

---

## 9. Adding a New Activity Type

To add a new activity type (e.g., "Reflection"):

1. Define the `ActivityType` union member
2. Define the interaction data interface
3. Create the interaction component
4. Register it in the activity renderer
5. Add it to a Worship Experience

No changes to the core engine needed — it's plug-and-play.

---

## 10. Current Implementation Status

| Component | Status |
|-----------|--------|
| Icebreaker interaction | ✅ Exists (inline in IcebreakerScreen) |
| Character interaction | ✅ Exists (inline in BibleCharacterScreen) |
| Heart-or-Action interaction | ✅ Exists (inline in HeartOrActionScreen) |
| ActivityContainer | 🔲 To create |
| ChoiceCard | 🔲 To create |
| DiscussionQuestionsList | 🔲 To create |
| Activity renderer | 🔲 To create (v1.1) |