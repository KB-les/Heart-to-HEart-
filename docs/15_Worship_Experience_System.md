# 15 — Worship Experience System

> Every worship experience is just data.
> The engine stays the same. Only the content changes.
> This is what makes Heart to Heart a platform, not a single app.

---

## 1. What is a Worship Experience?

A **Worship Experience** is a complete worship session package. It contains all the content needed to run a full journey through the Worship Engine (docs/07).

```
Worship Experience
├── Patience
│   ├── Journey: "From Seed to Harvest"
│   ├── Opening Verse: James 5:7
│   ├── Activities (scenes)
│   ├── Characters
│   ├── Discussion Cards
│   ├── Reflection
│   ├── Prayer
│   └── Summary
```

---

## 2. The Three-Layer Structure

```
Worship Experience (the theme)
    ↓
Journey (the narrative arc)
    ↓
Activities (the scenes)
```

### 2.1 Example: Patience Experience

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

### 2.2 Example: Love Experience (future)

```
Love
└── Journey: "The Bond of Unity"
    ├── Scene 1: Dawn (Welcome)
    ├── Scene 2: Meeting (Icebreaker)
    ├── Scene 3: Loyalty (Bible Characters)
    ├── Scene 4: Sacrifice (Heart or Action)
    ├── Scene 5: Unity (Main Discussion)
    └── Scene 6: Celebration (Ending)
```

---

## 3. Worship Experience Data Model

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

### 3.1 Journey Structure

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

## 4. Experience Registry

```typescript
// src/data/experiences/index.ts
export const EXPERIENCES: Record<string, WorshipExperience> = {
  patience: patienceExperience,
  // love: loveExperience,          // v2.0
  // faith: faithExperience,        // v2.0
  // hope: hopeExperience,          // v2.0
  // humility: humilityExperience,  // v2.0
  // joy: joyExperience,            // v2.0
  // pureMotives: pureMotivesExperience, // v2.0
};

export const getExperience = (id: string): WorshipExperience =>
  EXPERIENCES[id] ?? EXPERIENCES.patience;
```

---

## 5. Experience Content Requirements

### 5.1 Every Experience Needs

| Content | Quantity | Source |
|---------|----------|--------|
| Experience title | 1 | Question format (e.g., "Why Does Jehovah Value Patience?") |
| Experience subtitle | 1 | Gentle hint |
| Journey | 1 | Narrative arc with scenes |
| Key passage | 1 | Main scripture |
| Farmer illustration | 1 | Metaphor for the experience |
| Main discussion cards | 4 | Progressive questions |
| Additional scriptures | 2 | Supporting passages |
| Bible characters | 8-10 | Faith-focused characters |
| Heart-or-Action scenarios | 10 | Relatable situations |
| Closing reflection | 1 | Warm blessing |

### 5.2 Content Creation Process
1. Define experience title + subtitle
2. Design the Journey (narrative arc + scenes)
3. Select key passage + additional scriptures
4. Write farmer illustration (metaphor)
5. Write 4 main discussion cards
6. Select 8-10 Bible characters (with full data)
7. Write 10 Heart-or-Action scenarios
8. Write closing reflection

---

## 6. Experience Library (v2.0)

### 6.1 Planned Experiences

| Experience | Key Passage | Journey | Focus | Icon |
|------------|-------------|---------|-------|------|
| Patience | James 5:7-11 | From Seed to Harvest | Endurance | 🌱 |
| Love | 1 Corinthians 13 | The Bond of Unity | Loyal love | 💛 |
| Faith | Hebrews 11 | The Path of Trust | Trust in Jehovah | ⛰️ |
| Hope | Romans 15:13 | The Dawn of Promise | Future hope | 🌅 |
| Humility | Philippians 2:3-4 | The Servant's Way | Meekness | 🕊️ |
| Joy | Philippians 4:4 | The Song of the Heart | Rejoicing | 🌞 |
| Pure Motives | Matthew 5:8 | The Heart's Garden | Heart condition | 💎 |

### 6.2 Experience Selection UI
- Grid of experience cards
- Each card: icon, title, subtitle, "Start" button
- Available experiences are selectable; future ones show "Coming Soon"

---

## 7. Experience File Structure

```
src/data/experiences/
├── index.ts              → Experience registry
├── types.ts              → WorshipExperience interface
├── patience.ts           → Patience experience
├── love.ts               → Love experience (future)
├── faith.ts              → Faith experience (future)
├── hope.ts               → Hope experience (future)
├── humility.ts           → Humility experience (future)
├── joy.ts                → Joy experience (future)
└── pureMotives.ts        → Pure Motives experience (future)
```

---

## 8. Experience Rules

1. **Content is data.** Experiences are pure data — no logic, no components.
2. **Consistent structure.** Every experience has all required fields.
3. **Scripture-accurate.** All scriptures are NWT with references.
4. **Warm tone.** Follow the Content Guide (docs/13).
5. **Experience-connected.** All content relates to the experience.
6. **Journey-driven.** Every experience has a narrative arc.
7. **Reusable.** Any experience works with the same engine.

---

## 9. Adding a New Experience

1. Create a new experience file (e.g., `src/data/experiences/love.ts`)
2. Follow the `WorshipExperience` interface
3. Design the Journey (narrative arc + scenes)
4. Write all required content (see §5)
5. Register it in the experience registry (`index.ts`)
6. Add it to the experience selection screen
7. Test the full journey with the new experience

**No engine changes needed.** The engine is experience-agnostic.

---

## 10. Experience Status

| Experience | Status |
|------------|--------|
| Patience | ✅ Content exists (needs refactor into experience package) |
| Love | 🔲 v2.0 |
| Faith | 🔲 v2.0 |
| Hope | 🔲 v2.0 |
| Humility | 🔲 v2.0 |
| Joy | 🔲 v2.0 |
| Pure Motives | 🔲 v2.0 |