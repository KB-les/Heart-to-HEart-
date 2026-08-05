# 16 — Progress System

> Not XP. Not Levels.
> Visual. Peaceful. Meaningful.
> Progress is shown as a growing tree — from seed to flourishing garden.

---

## 1. Progress Philosophy

- **No gamification.** No XP, no levels, no streaks, no badges.
- **Visual metaphor.** Progress is a tree growing — seed → sprout → flower → fruit → garden.
- **Peaceful.** Progress is shown gently, never as a score.
- **Meaningful.** Progress reflects spiritual growth, not achievement.

---

## 2. The Tree Metaphor

### 2.1 Growth Stages

| Stage | Visual | Chapter | Meaning |
|-------|--------|---------|---------|
| Seed | 🌱 | 1. Welcome | Beginning |
| Sprout | 🌿 | 2. Player Setup | Preparing |
| Flowering | 🌸 | 3. Icebreaker | Getting to know each other |
| Leafy | 📜 | 4. Bible Game | Discovering |
| Fruitful | 💛 | 5. Heart/Action | Reflecting |
| Full | 📖 | 6. Discussion | Discussing deeply |
| Mature | 🌳 | 7. Ending | Growing together |

### 2.2 The Garden (Future)
- After multiple sessions, the tree becomes a garden
- Each completed theme adds a flower or fruit to the garden
- The garden represents the family's spiritual journey over time

---

## 3. Progress Tree Component

### 3.1 Current Implementation
- `ProgressTree` component in the header
- 7 stages with emoji icons
- States: current (highlighted), passed (completed), future (muted)
- Clickable (host only in remote mode)
- Hover tooltips show stage labels

### 3.2 Visual States

| State | Style |
|-------|-------|
| Current | `bg-forest-700 text-cream-50 ring-2 ring-gold-400` |
| Passed | `bg-emerald-100 text-forest-800 border border-emerald-300` |
| Future | `bg-cream-100 text-forest-500/40 border border-cream-200` |

---

## 4. Session Progress

### 4.1 Within a Session
- Progress Tree shows current chapter
- Each screen shows its own internal progress (e.g., "1 / 10" characters)
- No percentage bars, no "50% complete" — just gentle indicators

### 4.2 Session Completion
- Ending screen shows "Today's Spiritual Gems" summary
- Lists: theme, scriptures read, characters explored
- No score, no rating — just a warm summary

---

## 5. Long-Term Progress (Future)

### 5.1 The Garden
- Each completed worship session adds to a personal garden
- Different themes add different flowers/fruits
- The garden grows over time, representing spiritual growth

### 5.2 Session History
- Record of past sessions (theme, date, characters)
- Stored in localStorage (no backend)
- Viewable in a "Spiritual Gems" section

### 5.3 Data Model (Future)
```typescript
interface SessionRecord {
  id: string;
  themeId: string;
  date: string;
  player1Name: string;
  player2Name: string;
  charactersDiscussed: string[];
  completed: boolean;
}
```

---

## 6. Progress Rules

1. **Never show scores.** No XP, no levels, no percentages.
2. **Never create pressure.** No streaks, no "you missed a day."
3. **Always be visual.** Progress is shown through the tree/garden metaphor.
4. **Always be gentle.** Progress indicators are subtle, not prominent.
5. **Never compare.** No leaderboards, no "you're behind."

---

## 7. Implementation Status

| Feature | Status |
|---------|--------|
| Progress Tree (7 stages) | ✅ Exists |
| Session summary (Ending) | ✅ Exists |
| Completed characters tracking | ✅ Exists |
| The Garden (long-term) | 🔲 Future |
| Session history | 🔲 Future |
| Spiritual Gems section | 🔲 Future |