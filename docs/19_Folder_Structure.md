# 19 — Folder Structure

> Not chaos. A clear, organized structure that scales with the platform.

---

## 1. Current Structure

```
Heart-to-Heart/
│
├── docs/                          → Product specifications
│   ├── 01_Vision.md
│   ├── 02_Product_Requirements.md
│   ├── 03_User_Personas.md
│   ├── 04_User_Flow.md
│   ├── 05_Information_Architecture.md
│   ├── 06_Activity_Engine.md
│   ├── 07_Worship_Engine.md
│   ├── 08_UI_Design_System.md
│   ├── 09_Component_Library.md
│   ├── 10_Animation_Guide.md
│   ├── 11_Sound_Guide.md
│   ├── 12_Illustration_Guide.md
│   ├── 13_Content_Guide.md
│   ├── 14_Bible_Character_System.md
│   ├── 15_Worship_Experience_System.md
│   ├── 16_Progress_System.md
│   ├── 17_Accessibility.md
│   ├── 18_Technical_Architecture.md
│   ├── 19_Folder_Structure.md
│   ├── 20_AI_Developer_Rules.md
│   ├── 21_Roadmap.md
│   ├── 22_Future_Vision.md
│   ├── 23_Data_Model.md
│   ├── 24_State_Machine.md
│   └── 25_API_Specification.md
│
├── src/
│   ├── app/                       → Next.js app router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── screens/               → Scene containers
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── PlayerSetupScreen.tsx
│   │   │   ├── IcebreakerScreen.tsx
│   │   │   ├── BibleCharacterScreen.tsx
│   │   │   ├── HeartOrActionScreen.tsx
│   │   │   ├── MainDiscussionScreen.tsx
│   │   │   └── EndingScreen.tsx
│   │   └── ui/                    → Reusable blocks
│   │       ├── BackgroundParticles.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── JourneyHeader.tsx
│   │       ├── ProgressTree.tsx
│   │       └── VerseCard.tsx
│   ├── context/                   → Global state
│   │   ├── PeerContext.tsx
│   │   └── SoundContext.tsx
│   └── data/                      → Content data
│       ├── bibleCharacters.ts
│       ├── heartOrAction.ts
│       ├── icebreaker.ts
│       ├── mainDiscussion.ts
│       └── players.ts
│
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 2. Future Structure (v1.1+)

```
Heart-to-Heart/
│
├── docs/                          → Product specifications (25 docs)
│
├── public/                        → Static assets
│   ├── illustrations/             → (future) art assets
│   │   ├── characters/
│   │   ├── scenes/
│   │   └── experiences/
│   └── sounds/                    → (future) ambient audio
│       ├── birds.mp3
│       ├── wind.mp3
│       ├── rain.mp3
│       └── ocean.mp3
│
├── src/
│   ├── app/                       → Next.js app router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── screens/               → Scene containers
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── ExperienceSelectScreen.tsx  → (new)
│   │   │   ├── PlayerSetupScreen.tsx
│   │   │   ├── IcebreakerScreen.tsx
│   │   │   ├── BibleCharacterScreen.tsx
│   │   │   ├── HeartOrActionScreen.tsx
│   │   │   ├── MainDiscussionScreen.tsx
│   │   │   └── EndingScreen.tsx
│   │   ├── ui/                    → Reusable blocks
│   │   │   ├── Badge.tsx              → (new)
│   │   │   ├── BackgroundParticles.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ChoiceCard.tsx         → (new)
│   │   │   ├── DiscussionQuestionsList.tsx → (new)
│   │   │   ├── JourneyHeader.tsx
│   │   │   ├── ProgressTree.tsx
│   │   │   ├── SectionLabel.tsx       → (new)
│   │   │   ├── StatusPill.tsx         → (new)
│   │   │   ├── TurnBadge.tsx          → (new)
│   │   │   ├── VerseCard.tsx
│   │   │   └── WaitingBanner.tsx      → (new)
│   │   └── activities/            → (future) activity components
│   │       ├── IcebreakerActivity.tsx
│   │       ├── CharacterActivity.tsx
│   │       └── HeartOrActionActivity.tsx
│   ├── context/                   → Global state
│   │   ├── PeerContext.tsx
│   │   └── SoundContext.tsx
│   ├── data/
│   │   ├── experiences/           → Worship Experience packages
│   │   │   ├── index.ts           → Experience registry
│   │   │   ├── types.ts           → WorshipExperience interface
│   │   │   └── patience.ts        → Patience experience
│   │   ├── icebreaker.ts          → Static icebreaker options
│   │   └── players.ts             → Player defaults
│   ├── services/                  → (future) service layer
│   │   ├── ThemeService.ts
│   │   ├── PlayerService.ts
│   │   ├── SyncService.ts
│   │   ├── StorageService.ts
│   │   ├── AudioService.ts
│   │   ├── AnimationService.ts
│   │   └── SessionService.ts
│   ├── hooks/                     → (future) custom hooks
│   │   └── useLocalStorage.ts
│   ├── lib/                       → (future) utilities
│   │   └── utils.ts
│   └── types/                     → (future) shared types
│       └── index.ts
│
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 3. Folder Purpose

| Folder | Purpose |
|--------|---------|
| `docs/` | Product specifications (the brain) |
| `public/` | Static assets (illustrations, sounds) |
| `src/app/` | Next.js app router (layout, page) |
| `src/components/screens/` | Scene containers (one per scene) |
| `src/components/ui/` | Reusable UI blocks (LEGO pieces) |
| `src/components/activities/` | Activity components (future) |
| `src/context/` | Global state providers |
| `src/data/` | Content data (experiences, options) |
| `src/services/` | Service layer (future) |
| `src/hooks/` | Custom React hooks (future) |
| `src/lib/` | Utility functions (future) |
| `src/types/` | Shared TypeScript types (future) |

---

## 4. Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `Button.tsx`, `VerseCard.tsx` |
| Screens | PascalCase + "Screen" | `WelcomeScreen.tsx` |
| Contexts | PascalCase + "Context" | `PeerContext.tsx` |
| Data files | camelCase | `bibleCharacters.ts` |
| Experience files | camelCase | `patience.ts` |
| Services | PascalCase + "Service" | `ThemeService.ts` |
| Hooks | camelCase + "use" | `useLocalStorage.ts` |
| Utilities | camelCase | `utils.ts` |
| Types | PascalCase | `WorshipExperience.ts` |

---

## 5. File Organization Rules

1. **One component per file.** No multiple components in one file (except tiny sub-components).
2. **Screens are containers.** They compose UI blocks, not define them.
3. **UI blocks are reusable.** No screen-specific logic in UI components.
4. **Data is separate.** Content never lives in components.
5. **Services abstract infrastructure.** UI never talks to storage/network directly.
6. **Types are shared.** Shared types live in `src/types/` (future).
7. **No circular imports.** Components import from UI, not vice versa.

---

## 6. Migration Path (v1.0 → v1.1)

1. Create `src/data/experiences/` with `types.ts`, `index.ts`, `patience.ts`
2. Move Patience content from `mainDiscussion.ts`, `bibleCharacters.ts`, `heartOrAction.ts` into `patience.ts`
3. Create new UI components (`Badge`, `ChoiceCard`, etc.)
4. Extract inline components from screens into `src/components/ui/`
5. Refactor screens to receive experience via props
6. Add `ExperienceSelectScreen.tsx`
7. Create `src/services/` with service interfaces
8. Create `src/hooks/`, `src/lib/`, `src/types/` as needed