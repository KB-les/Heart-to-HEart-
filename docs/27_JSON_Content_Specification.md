# 27 — JSON Content Specification

> Every worship experience lives inside JSON.
> Pure Motives, Love, Faith, Hope — all can be added without changing React code.
> This is the contract that makes the app a true engine.

---

## 1. The Vision

No worship content is hardcoded in React components. Every experience is a JSON object that the engine loads and renders.

```
{
  "theme": "Patience",
  "journey": { ... },
  "activities": [ ... ],
  "characters": [ ... ],
  "scenarios": [ ... ],
  "discussion": { ... }
}
```

Adding a new experience = adding a new JSON file. No code changes.

---

## 2. The Complete JSON Schema

### 2.1 WorshipExperience (root)

```json
{
  "id": "patience",
  "title": "Why Does Jehovah Value Patience?",
  "subtitle": "Learning from creation, scriptures, and Jehovah's own quiet endurance.",
  "icon": "🌱",
  "journey": {
    "id": "from-seed-to-harvest",
    "title": "From Seed to Harvest",
    "scenes": [
      {
        "id": "morning",
        "title": "Morning",
        "icon": "🌅",
        "description": "Beginning our journey together",
        "activityId": "welcome"
      },
      {
        "id": "preparing",
        "title": "Preparing",
        "icon": "🌿",
        "description": "Getting ready to worship",
        "activityId": "player-setup"
      },
      {
        "id": "planting",
        "title": "Planting",
        "icon": "🌱",
        "description": "Getting to know each other",
        "activityId": "icebreaker"
      },
      {
        "id": "waiting",
        "title": "Waiting",
        "icon": "⏳",
        "description": "Learning from faithful servants",
        "activityId": "guess-character"
      },
      {
        "id": "growing",
        "title": "Growing",
        "icon": "🌿",
        "description": "Reflecting on heart and action",
        "activityId": "heart-or-action"
      },
      {
        "id": "harvest",
        "title": "Harvest",
        "icon": "🌾",
        "description": "Discussing Jehovah's patience",
        "activityId": "main-discussion"
      },
      {
        "id": "celebration",
        "title": "Celebration",
        "icon": "🌳",
        "description": "Reflecting on our growth",
        "activityId": "ending"
      }
    ]
  },
  "keyPassage": {
    "reference": "James 5:7-11",
    "translationNotice": "New World Translation (NWT)",
    "text": "Be patient then, brothers...",
    "promptMessage": "Let's open our Bibles or JW Library app and read this passage together."
  },
  "farmerIllustration": {
    "title": "The Farmer Waiting for Rain",
    "icon": "🌱🌧️",
    "description": "A peaceful farmer plants seed in soft soil...",
    "lesson": "Patience is not passive waiting; it is active trust while Jehovah brings things to fruitfulness in His time."
  },
  "mainDiscussionCards": [
    {
      "id": "farmer-lesson",
      "question": "What does the farmer teach us about patience?",
      "subtext": "Think about the work done before and during the wait.",
      "scriptureAnchor": "James 5:7",
      "reflectionPrompt": "Farmers plant seeds and then trust nature's cycle. What spiritual 'seeds' are we waiting on Jehovah to bless in our lives?"
    }
  ],
  "additionalScriptures": [
    {
      "id": "psalm-37-7",
      "reference": "Psalm 37:7",
      "text": "Keep silent before Jehovah and wait expectantly for him...",
      "illustrationTitle": "The Quiet Harbour",
      "illustrationIcon": "⛵🌅",
      "illustrationDescription": "A boat anchored safely in a calm harbor...",
      "discussionPoints": [
        "What does it mean to 'keep silent before Jehovah' when we feel anxious or eager?",
        "How does waiting expectantly prevent us from feeling frustrated by world events or others?"
      ],
      "practicalApplication": "When feeling impatient, take a quiet moment in prayer together, entrusting the situation into Jehovah's hands."
    }
  ],
  "characters": [
    {
      "id": "joseph",
      "name": "Joseph",
      "title": "Son of Jacob & Overseer of Egypt",
      "avatar": "🌾",
      "themeColor": "from-amber-600 to-yellow-700",
      "era": "Patriarchal Age",
      "clues": [
        { "number": 1, "text": "I was given a special, long garment by my loving father, which made my brothers jealous." },
        { "number": 2, "text": "I was sold by my brothers into slavery and taken far away into Egypt." },
        { "number": 3, "text": "Jehovah blessed me to interpret dreams for Pharaoh, leading me to become prime minister of Egypt." }
      ],
      "summary": "Joseph's life is a masterclass in faith, endurance, and forgiveness...",
      "timeline": [
        { "period": "Young Boy in Canaan", "event": "Received prophetic dreams of sheaves bowing down." },
        { "period": "Slave & Prisoner in Egypt", "event": "Remained morally clean with Potiphar's wife & interpreted dreams in prison." },
        { "period": "Ruler under Pharaoh", "event": "Stored grain for 7 years of famine & reconciled joyfully with his brothers." }
      ],
      "keyScriptures": [
        { "reference": "Genesis 45:5", "snippet": "Do not be distressed... because it was to preserve life that God sent me ahead of you." },
        { "reference": "Genesis 50:20", "snippet": "You meant to harm me, but God intended it for good to accomplish what is now being done." }
      ],
      "interestingFact": "Joseph lived to be 110 years old and insisted that his bones be carried up out of Egypt...",
      "qualities": ["Endurance", "Forgiveness", "Trust in Jehovah"],
      "discussionQuestions": [
        "How did Joseph keep a positive, peaceful heart when he was treated unfairly in Egypt?",
        "In what ways can we imitate Joseph's quick willingness to forgive when someone hurts us?",
        "How does Joseph's story build your trust in Jehovah during difficult wait times?"
      ],
      "reflection": "Joseph's life reminds us that Jehovah can turn even the darkest circumstances into something beautiful — if we trust Him and wait patiently."
    }
  ],
  "heartOrActionScenarios": [
    {
      "id": "commenting-praise",
      "category": "Motives & Praise",
      "scenario": "A brother comments at every meeting because he enjoys receiving praise from others.",
      "biblePrinciple": {
        "reference": "1 Samuel 16:7",
        "text": "For God sees not as man sees, for man sees what appears to the eyes, but Jehovah sees into the heart."
      },
      "explanation": "While commenting at meetings is a commendable action, Jehovah looks closely at the motive in our hearts...",
      "discussionQuestions": [
        "Why are both clean motives (Heart) and active participation (Action) valuable to Jehovah?",
        "How can we examine our own hearts before preparing comments to make sure our motive is love?"
      ]
    }
  ],
  "closingReflection": {
    "message": "Thank you for spending time in Jehovah's Word together.",
    "blessing": "May Jehovah bless your warm discussions and strengthen your unity as you meditate on His qualities throughout the week."
  }
}
```

---

## 3. JSON File Structure

```
src/data/experiences/
├── index.ts              → Registry (imports all JSON)
├── types.ts              → TypeScript interfaces
├── patience.json         → Patience experience
├── love.json             → Love experience (future)
├── faith.json            → Faith experience (future)
├── hope.json             → Hope experience (future)
├── humility.json         → Humility experience (future)
├── joy.json              → Joy experience (future)
└── pureMotives.json      → Pure Motives experience (future)
```

---

## 4. Validation Rules

### 4.1 Required Fields (per entity)

| Entity | Required Fields |
|--------|----------------|
| WorshipExperience | `id`, `title`, `subtitle`, `icon`, `journey`, `keyPassage`, `farmerIllustration`, `mainDiscussionCards`, `additionalScriptures`, `characters`, `heartOrActionScenarios`, `closingReflection` |
| Journey | `id`, `title`, `scenes` (7) |
| JourneyScene | `id`, `title`, `icon`, `description`, `activityId` |
| BibleCharacter | `id`, `name`, `title`, `avatar`, `themeColor`, `era`, `clues` (3), `summary`, `timeline` (3), `keyScriptures` (2), `interestingFact`, `qualities`, `discussionQuestions` (3), `reflection` |
| HeartOrActionScenario | `id`, `category`, `scenario`, `biblePrinciple`, `explanation`, `discussionQuestions` (2) |
| DiscussionCard | `id`, `question`, `reflectionPrompt` |
| AdditionalScripture | `id`, `reference`, `text`, `illustrationTitle`, `illustrationIcon`, `illustrationDescription`, `discussionPoints`, `practicalApplication` |

### 4.2 Validation Rules

1. **IDs are unique** across the experience.
2. **Scriptures are NWT** with references.
3. **Clues are first-person** and progressive.
4. **Questions are open-ended** (no yes/no).
5. **No scores or timers** in any content.
6. **All text is warm and simple** (per Content Guide docs/13).

---

## 5. TypeScript Types (matching JSON)

```typescript
// src/data/experiences/types.ts
export interface WorshipExperience {
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

export interface Journey {
  id: string;
  title: string;
  scenes: JourneyScene[];
}

export interface JourneyScene {
  id: string;
  title: string;
  icon: string;
  description: string;
  activityId: string;
}

export interface BibleCharacter {
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

export interface HeartOrActionScenario {
  id: string;
  category: string;
  scenario: string;
  biblePrinciple: { reference: string; text: string };
  explanation: string;
  discussionQuestions: string[];
}

export interface DiscussionCard {
  id: string;
  question: string;
  subtext?: string;
  scriptureAnchor?: string;
  reflectionPrompt: string;
}

export interface AdditionalScripture {
  id: string;
  reference: string;
  text: string;
  illustrationTitle: string;
  illustrationIcon: string;
  illustrationDescription: string;
  discussionPoints: string[];
  practicalApplication: string;
}

export interface KeyPassage {
  reference: string;
  translationNotice: string;
  text: string;
  promptMessage: string;
}

export interface FarmerIllustration {
  title: string;
  icon: string;
  description: string;
  lesson: string;
}

export interface ClosingReflection {
  message: string;
  blessing: string;
}
```

---

## 6. Loading JSON in the Engine

```typescript
// src/data/experiences/index.ts
import patience from "./patience.json";
import type { WorshipExperience } from "./types";

export const EXPERIENCES: Record<string, WorshipExperience> = {
  patience: patience as WorshipExperience,
  // love: love as WorshipExperience,  // v2.0
  // faith: faith as WorshipExperience, // v2.0
};

export const getExperience = (id: string): WorshipExperience =>
  EXPERIENCES[id] ?? EXPERIENCES.patience;
```

---

## 7. Adding a New Experience (No Code)

1. Create `src/data/experiences/love.json`
2. Fill in all required fields (per §4)
3. Register in `index.ts` (one line)
4. Add to Experience Selection screen (one entry)

**No React component changes needed.** The engine renders any valid JSON experience.

---

## 8. JSON Rules

1. **No logic in JSON.** JSON is data only — no functions, no conditions.
2. **No hardcoded values in components.** All content comes from JSON.
3. **Valid JSON.** Must parse without errors.
4. **Validated.** Must pass the validation rules in §4.
5. **Versioned.** Schema changes are documented and backward-compatible.