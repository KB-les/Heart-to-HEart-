# 07 — Development Roadmap

> Heart to Heart is not a one-off app. It's a platform that grows with a family for years.
> This roadmap shows the journey from v1 (Patience) to a full Family Worship Builder.

---

## 1. Version Overview

| Version | Name | Focus |
|---------|------|-------|
| v1.0 | Patience | Single theme, polished experience |
| v1.1 | Engine Refactor | Extract reusable components, theme package system |
| v2.0 | Theme Library | Multiple themes (Love, Faith, Hope, Self-control) |
| v3.0 | Family Worship Builder | Create & share custom worship experiences |

---

## 2. v1.0 — Patience (Current)

**Goal:** A polished, complete worship experience around the theme of Patience.

### 2.1 What Exists
- ✅ 7-chapter journey (Welcome → Setup → Icebreaker → Characters → Heart/Action → Discussion → Ending)
- ✅ Remote WebRTC sync (host/guest, room codes, share links)
- ✅ Sound effects (synthesized via Web Audio API)
- ✅ Player names + mute persistence (localStorage)
- ✅ Ambient background (leaves, clouds, glows)
- ✅ 10 Bible characters
- ✅ 10 Heart-or-Action scenarios
- ✅ Patience discussion content (James 5:7-11, Psalm 37:7, Ecclesiastes 7:8)

### 2.2 To Polish (v1.0 completion)
- [ ] Extract inline components into shared library (see docs/06)
- [ ] Fix prop plumbing: `onScenarioCompleted` in HeartOrActionScreen is unused
- [ ] Add `Badge`, `SectionLabel`, `WaitingBanner`, `StatusPill` components
- [ ] Add `DiscussionQuestionsList` shared component (replaces 3 inline copies)
- [ ] Add `ChoiceCard` shared component (replaces repeated selection patterns)
- [ ] Add `ClueCard` + `TimelineMilestone` shared components
- [ ] Add `TurnBadge`, `FeelingPicker`, `ReflectionQuestions` shared components
- [ ] Verify responsive behavior on mobile
- [ ] Test remote sync end-to-end
- [ ] Add `prefers-reduced-motion` support
- [ ] Add `aria` labels for accessibility

### 2.3 Acceptance Criteria
- [ ] Full journey completes without errors
- [ ] Remote mode: host + guest stay in sync across all chapters
- [ ] All sounds play correctly (or mute works)
- [ ] Works on mobile + desktop
- [ ] No console errors

---

## 3. v1.1 — Engine Refactor

**Goal:** Turn the app into a reusable **Family Worship Engine**.

### 3.1 Theme Package System
Design a `WorshipTheme` type that encapsulates all theme content:

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

### 3.2 Theme Registry
```typescript
// src/data/themes/index.ts
export const THEMES: Record<string, WorshipTheme> = {
  patience: patienceTheme,
  // love: loveTheme,      // v2.0
  // faith: faithTheme,    // v2.0
  // hope: hopeTheme,      // v2.0
};
```

### 3.3 Screen Refactor
- Screens receive `theme: WorshipTheme` via props instead of importing data directly
- `page.tsx` loads theme from registry based on selection
- All screens become theme-agnostic

### 3.4 Component Extraction
- Move all inline components to `src/components/ui/` (see docs/06 checklist)
- Ensure all components are theme-agnostic

### 3.5 Theme Selection Screen (new)
- Add a "Choose Worship Theme" screen between Welcome and Player Setup
- Shows available themes as cards (title, subtitle, icon)
- v1.1: only "Patience" available (single card, auto-select or tap to continue)

---

## 4. v2.0 — Theme Library

**Goal:** Multiple worship themes, each a complete experience.

### 4.1 Theme Content Needed

| Theme | Key Passage | Characters | Focus |
|-------|-------------|-----------|-------|
| Patience (done) | James 5:7-11 | Joseph, David, Abraham, Ruth, Esther, Moses, Daniel, Samuel, Peter, Paul | Endurance |
| Love | 1 Corinthians 13 | Ruth, David, Jonathan, Mary, Peter, John | Loyal love |
| Faith | Hebrews 11 | Abraham, Moses, Rahab, Gideon, Daniel, Esther | Trust in Jehovah |
| Hope | Romans 15:13 | Job, Jeremiah, Paul, Peter, John | Future hope |
| Self-control | Galatians 5:22-23 | Joseph, Daniel, Esther, Paul, Peter | Discipline |

### 4.2 Content Creation Process
1. Define theme title + subtitle
2. Select key passage + additional scriptures
3. Write farmer illustration (metaphor for the theme)
4. Write 4 main discussion cards
5. Select 8-10 Bible characters with clues, timeline, scriptures, facts, questions
6. Write 10 Heart-or-Action scenarios
7. Write closing reflection

### 4.3 Theme Selection UI
- Grid of theme cards on the selection screen
- Each card: icon, title, subtitle, "Start" button
- Selected theme loads into the engine

---

## 5. v3.0 — Family Worship Builder

**Goal:** Let families create and share their own worship experiences.

### 5.1 Features
- **Builder UI:** Form-based interface to create a theme package
  - Enter theme title, subtitle
  - Add key passage + scriptures
  - Add characters (from a library or custom)
  - Add discussion cards
  - Add scenarios
- **Export/Import:** Save theme as JSON, share with others
- **Theme Library:** Browse community-created themes
- **Custom Characters:** Add your own Bible character entries

### 5.2 Architecture
- Theme packages become JSON files (or localStorage entries)
- Engine loads any valid theme package
- No backend required (client-side only)

### 5.3 Future: Sharing
- Export theme as a shareable link (URL-encoded JSON)
- Import via URL param: `?theme=<encoded-json>`
- Optional: community gallery (requires backend — future)

---

## 6. Long-Term Vision

### 6.1 Platform Features (Backlog)
- Ambient nature sound loops (birds, wind, rain, ocean)
- Printable / shareable session summary
- Progress history across sessions
- Optional audio narration
- Multiple device types (tablet, TV)
- Offline PWA support
- Multiple languages

### 6.2 Community Potential
- Families share their favorite worship themes
- A growing library of Bible-based experiences
- Heart to Heart becomes a trusted tool for family worship worldwide

---

## 7. Development Priorities

### 7.1 Now (v1.0 polish)
1. Extract shared components
2. Fix prop plumbing
3. Test remote sync
4. Mobile responsiveness
5. Accessibility

### 7.2 Next (v1.1)
1. Theme package type + registry
2. Refactor screens to be theme-agnostic
3. Theme selection screen
4. Move Patience content into a theme package

### 7.3 Later (v2.0+)
1. Create Love theme
2. Create Faith theme
3. Create Hope theme
4. Create Self-control theme
5. Builder UI

---

## 8. Definition of Done (per version)

| Version | Done When |
|---------|-----------|
| v1.0 | Patience experience is polished, tested, and bug-free |
| v1.1 | Engine is theme-agnostic; adding a new theme requires only content, not code |
| v2.0 | 5 themes available; theme selection screen works |
| v3.0 | Users can create, export, and import custom themes |