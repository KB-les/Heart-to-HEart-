# 08 — AI Rules

> These rules govern how AI (Antigravity, Cline, or any future assistant) works on this project.
> They exist to protect the product's soul — its peacefulness, its spiritual focus, and its quality.

---

## 1. The Golden Rules

### 1.1 Never...
- ❌ **Never use flashing animations.** No strobe, no rapid blinking, no seizure-inducing motion.
- ❌ **Never turn discussion into competition.** No scores, no timers, no winners, no losers, no leaderboards.
- ❌ **Never replace Bible reading.** The app guides users to open their Bibles / JW Library. It never substitutes for the actual Word.
- ❌ **Never add gamification pressure.** No streaks, no achievements, no "level up" mechanics.
- ❌ **Never use dark or harsh color schemes.** The palette is warm, light, and peaceful.
- ❌ **Never add popups, modals, or interruptions** that break the flow of worship.
- ❌ **Never add ads, tracking, or analytics** without explicit user approval.
- ❌ **Never invent features** not in the docs. If unclear, ask.

### 1.2 Always...
- ✅ **Always encourage conversation.** Every feature should lead to dialogue, not isolation.
- ✅ **Always prefer beauty over complexity.** A simple, beautiful solution beats a complex, clever one.
- ✅ **Always keep the spiritual focus.** Every screen should point toward Jehovah and His Word.
- ✅ **Always use gentle, warm language.** No corporate jargon, no hype, no pressure.
- ✅ **Always respect the user's pace.** Nothing auto-advances without user action.
- ✅ **Always follow the UI Style Guide** (docs/04) for visual consistency.
- ✅ **Always follow the Component Library** (docs/06) for code structure.
- ✅ **Always test before declaring done.** Verify the build works, no console errors.

---

## 2. Code Rules

### 2.1 Architecture
- **Next.js 14 App Router** with `"use client"` components (this is a client-rendered app).
- **TypeScript** — all props and state typed. No `any` unless absolutely necessary.
- **Tailwind CSS** — use the custom theme tokens (cream, forest, gold, skyCustom, softBrown). Never hardcode hex values in components.
- **framer-motion** for all animations. Never use CSS `@keyframes` for interactive elements (use framer-motion for control).

### 2.2 Component Rules
- One component, one job.
- Components are **theme-agnostic** — content comes via props, never imported directly.
- All components accept `className` for extension.
- All interactive components use `useSound()` for feedback.
- No component over ~300 lines. Extract sub-components.
- Follow the Component Library (docs/06).

### 2.3 State Management
- Use React Context for global state (Peer, Sound).
- Use local state (`useState`) for screen-specific state.
- Use `useCallback` for functions passed to context providers.
- Persist only what's needed (names, mute) to localStorage.

### 2.4 Remote Sync
- All sync messages follow the `SyncMessage` schema (docs/05 §10).
- Host controls navigation; guest receives synced state.
- Never send large payloads — only state deltas.

---

## 3. Content Rules

### 3.1 Scripture
- Always use the **New World Translation (NWT)** for scripture text.
- Always include the reference (book, chapter, verse).
- Scripture is presented as a guide — users are encouraged to open their own Bibles.
- Never paraphrase scripture in a way that changes meaning.

### 3.2 Language & Tone
- **Warm, gentle, encouraging.** Like a kind friend, not a teacher.
- **Simple, clear language.** Reading level should be accessible to all.
- **No hype.** No "amazing!", "incredible!", "unbelievable!" — just sincere warmth.
- **No pressure.** Never guilt-trip users into doing more.
- **Inclusive.** Language works for couples, families, and individuals.

### 3.3 Discussion Questions
- Open-ended (not yes/no).
- Personal and reflective (not doctrinal quizzes).
- Encouraging (never judgmental).
- Practical (lead to real-life application).

### 3.4 Bible Characters
- Accurate to scripture.
- Focus on faith qualities, not just biography.
- Include discussion questions that connect the character's life to the user's life.

---

## 4. Design Rules

### 4.1 Motion
- All animations: gentle, smooth, 0.3-0.6s duration.
- No flashing, no strobe, no rapid pulsing.
- Respect `prefers-reduced-motion` (future: add support).
- Ambient motion (leaves, clouds) is slow and subtle.

### 4.2 Color
- Follow the palette in docs/04 §2.
- Never use pure black or pure white for large areas.
- Text contrast must meet WCAG AA (4.5:1 for body text).

### 4.3 Typography
- Serif for headings, sans for body.
- Scripture in serif italic.
- Labels in uppercase tracking-wider.

### 4.4 Sound
- All sounds synthesized via Web Audio API (no audio files in v1).
- Sounds are subtle, not jarring.
- Mute must work globally.

---

## 5. Process Rules

### 5.1 Before Coding
1. Read the relevant docs (PRD, User Flow, Game Mechanics, UI Style Guide, Component Library).
2. If anything is unclear, **ask before coding**.
3. Plan the implementation (components to create/modify, data changes).

### 5.2 While Coding
1. Follow the Component Library structure.
2. Follow the UI Style Guide.
3. Keep components small and reusable.
4. Type everything.

### 5.3 After Coding
1. Run the build (`npm run build`) — must pass with no errors.
2. Check for console errors.
3. Verify the feature works as specified in the docs.
4. If tests exist, run them.

### 5.4 When Adding a New Theme
1. Create a new theme package file (e.g., `src/data/themes/love.ts`).
2. Follow the `WorshipTheme` interface.
3. Register it in the theme registry.
4. Add it to the theme selection screen.
5. Follow the Content Guide (docs/09) for all written content.

---

## 6. Anti-Patterns to Avoid

| Anti-pattern | Why | Instead |
|--------------|-----|---------|
| Adding a timer | Creates pressure | Let users go at their own pace |
| Adding a score | Creates competition | Conversation is the reward |
| Adding confetti on every action | Feels cheap | Reserve celebration for meaningful moments |
| Using dark mode | Breaks the warm aesthetic | Keep the light, warm palette |
| Auto-advancing screens | Rushes the user | Always require user action |
| Adding a "streak" counter | Creates guilt | Encourage, don't pressure |
| Using complex animations | Feels busy | Simple, gentle motion |
| Adding popups | Interrupts worship | Inline content only |

---

## 7. The Product's Soul

> **Heart to Heart is not a game. It's a worship companion.**
>
> Every line of code, every pixel, every sound should serve one purpose:
> helping a couple or family feel closer to Jehovah and to each other.
>
> If a feature doesn't serve that purpose, it doesn't belong.
> If a design choice doesn't feel peaceful, it's wrong.
> If a word doesn't feel warm, rewrite it.

---

## 8. Quick Reference

| Question | Answer |
|----------|--------|
| What's the app's purpose? | Family worship, growing closer to Jehovah |
| What's the design style? | Peaceful Storybook (warm, soft, gentle) |
| What's the tech stack? | Next.js 14, React 18, TypeScript, Tailwind, framer-motion, PeerJS |
| What's the content source? | New World Translation (NWT) |
| What's the reward system? | Deeper conversation (no scores) |
| What's the remote sync? | WebRTC via PeerJS (host/guest) |
| What's the roadmap? | v1.0 Patience → v1.1 Engine → v2.0 Themes → v3.0 Builder |
| What if I'm unsure? | Ask before coding |