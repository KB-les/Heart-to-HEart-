# 29 — Build Order

> Instead of "Build Heart to Heart," we say:
> Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4 → Sprint 5 → Sprint 6.
> Every sprint has clear tasks and acceptance criteria.

---

## 1. Sprint Overview

| Sprint | Name | Focus | Deliverable |
|--------|------|-------|-------------|
| 0 | Foundation | Setup, base components | App skeleton runs |
| 1 | Welcome & Navigation | Splash, Welcome, Progress Tree | Journey starts |
| 2 | Player Setup | Single/remote mode, names | Worship setup works |
| 3 | Icebreaker | 3 questions, turn-based | Getting-to-know works |
| 4 | Bible Character | 10 characters, clues | Character game works |
| 5 | Heart or Action | 10 scenarios, choices | Reflection activity works |
| 6 | Discussion & Ending | Tabs, cards, summary | Full journey completes |

---

## 2. Sprint 0 — Foundation

### Goal
Set up the app skeleton with all base components.

### Tasks
- [ ] Verify Next.js 14 project runs (`npm run dev`)
- [ ] Verify Tailwind theme configured (colors, fonts, shadows)
- [ ] Verify `BackgroundParticles` renders ambient background
- [ ] Verify `Button` component (all variants, sizes, sounds)
- [ ] Verify `Card` component (all variants)
- [ ] Verify `SoundContext` (all effects, mute)
- [ ] Verify `PeerContext` (connection lifecycle)
- [ ] Run `npm run build` — must pass

### Acceptance Criteria
- [ ] App loads with ambient background
- [ ] All button variants render correctly
- [ ] All sounds play (or mute works)
- [ ] Build passes with no errors

---

## 3. Sprint 1 — Welcome & Navigation

### Goal
Splash screen, Welcome screen, and the Progress Tree navigation.

### Tasks
- [ ] Create Splash Screen (auto-transitions after ~2.5s)
- [ ] Verify Welcome Screen (hero, tagline, Start button)
- [ ] Verify `ProgressTree` (7 stages, current/passed/future)
- [ ] Verify `JourneyHeader` (logo, progress, players, mute)
- [ ] Verify page transitions (framer-motion, direction-aware)
- [ ] Verify localStorage persistence (names, mute)

### Acceptance Criteria
- [ ] Splash → Welcome transitions
- [ ] Start Worship → Player Setup
- [ ] Progress Tree shows current chapter
- [ ] Mute toggle works and persists
- [ ] Header shows after Welcome

---

## 4. Sprint 2 — Player Setup

### Goal
Mode selection, player names, and remote WebRTC connection.

### Tasks
- [ ] Verify mode selector (One Device / Two Devices)
- [ ] Verify player name inputs (host editable, guest disabled)
- [ ] Verify remote panel (create room, join, waiting, connected)
- [ ] Verify copy share link
- [ ] Verify names sync via `SYNC_PLAYERS`
- [ ] Verify start session gate (single OR connected)

### Acceptance Criteria
- [ ] Single mode works without connection
- [ ] Remote: host creates room, guest joins
- [ ] Names sync host → guest
- [ ] Copy link works
- [ ] Start Session disabled until ready

---

## 5. Sprint 3 — Icebreaker

### Goal
Three questions (colour, animal, nature) with turn-based logic.

### Tasks
- [ ] Verify stage flow (1 colour → 2 animal → 3 nature → 4 summary)
- [ ] Verify turn logic (single: pass; remote: auto)
- [ ] Verify feeling picker (max 2)
- [ ] Verify summary (side-by-side choices + reflection)
- [ ] Verify `SYNC_ICEBREAKER` sync
- [ ] Extract `TurnBadge`, `FeelingPicker`, `ReflectionQuestions` to shared components

### Acceptance Criteria
- [ ] 3 questions flow correctly
- [ ] Turn-based logic works (single + remote)
- [ ] Cannot advance without valid selection
- [ ] Summary + reflection shown
- [ ] Remote sync works

---

## 6. Sprint 4 — Bible Character

### Goal
Guess-the-Character activity with 10 characters.

### Tasks
- [ ] Verify clue reveal (progressive, 1-3)
- [ ] Verify answer reveal (celebration)
- [ ] Verify revealed content (timeline, scriptures, fact, questions)
- [ ] Verify replay + next character
- [ ] Verify `SYNC_CHARACTER` sync
- [ ] Extract `ClueCard`, `TimelineMilestone`, `DiscussionQuestionsList` to shared components

### Acceptance Criteria
- [ ] Clues reveal progressively
- [ ] Answer reveal celebrates
- [ ] All character content shows
- [ ] Replay resets clues
- [ ] Last character proceeds to Heart or Action

---

## 7. Sprint 5 — Heart or Action

### Goal
Heart-or-Action reflection activity with 10 scenarios.

### Tasks
- [ ] Verify scenario display (category, text)
- [ ] Verify 3 choices (Heart/Action/Both)
- [ ] Verify revealed content (principle, explanation, questions)
- [ ] Verify next scenario
- [ ] Verify `SYNC_HEART_ACTION` sync
- [ ] Extract `ChoiceCard` to shared component

### Acceptance Criteria
- [ ] 3 choices work
- [ ] Selection reveals principle + discussion
- [ ] No "right" answer pressure
- [ ] Last scenario proceeds to Main Discussion

---

## 8. Sprint 6 — Discussion & Ending

### Goal
Main Discussion (tabs, cards) and Ending (summary).

### Tasks
- [ ] Verify 3 tabs (James/Psalm/Ecclesiastes)
- [ ] Verify VerseCard (expand/collapse)
- [ ] Verify discussion card carousel
- [ ] Verify `SYNC_DISCUSSION` sync
- [ ] Verify Ending (tree growth, summary, finish/restart)
- [ ] Verify completed characters tracking

### Acceptance Criteria
- [ ] 3 tabs work
- [ ] VerseCard expands/collapses
- [ ] Card carousel works
- [ ] Ending shows theme, scriptures, characters
- [ ] Finish/restart returns to Welcome
- [ ] Full journey completes without errors

---

## 9. Sprint 7 — Polish & Refactor (v1.0 completion)

### Goal
Extract shared components, fix prop plumbing, accessibility, testing.

### Tasks
- [ ] Extract all inline components to `src/components/ui/` (per docs/09)
- [ ] Fix `onScenarioCompleted` prop plumbing (unused in HeartOrActionScreen)
- [ ] Add `Badge`, `SectionLabel`, `WaitingBanner`, `StatusPill` components
- [ ] Add `ChoiceCard`, `DiscussionQuestionsList`, `ClueCard`, `TimelineMilestone`
- [ ] Add `TurnBadge`, `FeelingPicker`, `ReflectionQuestions`
- [ ] Verify mobile responsiveness
- [ ] Test remote sync end-to-end
- [ ] Add `prefers-reduced-motion` support
- [ ] Add `aria` labels
- [ ] Run `npm run build` — must pass

### Acceptance Criteria
- [ ] No inline duplicate components
- [ ] Prop plumbing fixed
- [ ] Works on mobile + desktop
- [ ] Remote sync tested end-to-end
- [ ] Build passes with no errors

---

## 10. Sprint 8 — Engine Refactor (v1.1)

### Goal
Theme-agnostic engine with JSON content.

### Tasks
- [ ] Create `WorshipExperience` type (per docs/27)
- [ ] Create `src/data/experiences/` with `types.ts`, `index.ts`
- [ ] Convert Patience content to `patience.json` (per docs/27)
- [ ] Refactor screens to receive experience via props
- [ ] Create Experience Selection screen
- [ ] Create service layer (`ThemeService`, `PlayerService`, etc.)
- [ ] Implement `ExperienceService` loading from JSON

### Acceptance Criteria
- [ ] Patience content loads from JSON
- [ ] Screens are experience-agnostic
- [ ] Experience selection works
- [ ] Adding a new experience requires no React code changes

---

## 11. Sprint 9 — Second Experience (v2.0 start)

### Goal
Prove the engine by adding a second experience.

### Tasks
- [ ] Create `love.json` content
- [ ] Register in experience registry
- [ ] Add to Experience Selection screen
- [ ] Test full journey with Love experience
- [ ] Verify no code changes needed beyond JSON

### Acceptance Criteria
- [ ] Love experience runs through the engine
- [ ] No React component changes required
- [ ] Both experiences selectable

---

## 12. Definition of Done (per sprint)

| Sprint | Done When |
|--------|-----------|
| 0 | App skeleton runs, build passes |
| 1 | Welcome + navigation work |
| 2 | Player setup works (single + remote) |
| 3 | Icebreaker works (single + remote) |
| 4 | Character game works |
| 5 | Heart or Action works |
| 6 | Full journey completes |
| 7 | All shared components extracted, build passes |
| 8 | Engine is experience-agnostic, JSON content works |
| 9 | Second experience proves the engine |

---

## 13. Build Rules

1. **One sprint at a time.** Never skip ahead.
2. **Acceptance criteria before starting a sprint.** The "done" is defined first.
3. **Build passes after every sprint.**
4. **No new features outside the sprint.** If it's not in the sprint, it's not built.
5. **Constitution check.** Every sprint's output must align with the Project Constitution (docs/00).
6. **Ask before changing architecture.** The engine is sacred.