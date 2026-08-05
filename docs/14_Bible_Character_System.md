# 14 — Bible Character System

> Every Bible character gets the same rich structure: Name, Era, Artwork, Biography, Timeline, Scriptures, Qualities, Discussion Questions, Fun Fact, Reflection.
> This system ensures every character feels complete and consistent.

---

## 1. Character Data Model

```typescript
interface BibleCharacter {
  id: string;
  name: string;
  title: string;
  avatar: string;              // emoji
  themeColor: string;          // tailwind gradient classes
  era: string;                 // e.g., "Patriarchal Age"
  clues: CharacterClue[];      // 3 progressive clues
  summary: string;             // 1-2 sentences on their faith
  timeline: TimelineMilestone[]; // 3 milestones
  keyScriptures: ScriptureRef[]; // 2 scriptures
  interestingFact: string;     // 1 delightful fact
  qualities: string[];         // faith qualities they exemplify
  discussionQuestions: string[]; // 3 open-ended questions
  reflection: string;          // closing reflection
}
```

---

## 2. Character Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique identifier (kebab-case) | `"joseph"` |
| `name` | Character's name | `"Joseph"` |
| `title` | Role/description | `"Son of Jacob & Overseer of Egypt"` |
| `avatar` | Emoji representation | `"🌾"` |
| `themeColor` | Tailwind gradient for accents | `"from-amber-600 to-yellow-700"` |
| `era` | Historical period | `"Patriarchal Age"` |
| `clues` | 3 progressive hints (first person) | See below |
| `summary` | Faith-focused overview | See below |
| `timeline` | 3 life milestones | See below |
| `keyScriptures` | 2 supporting scriptures | See below |
| `interestingFact` | Delightful, memorable fact | See below |
| `qualities` | Faith qualities they exemplify | `["Endurance", "Forgiveness"]` |
| `discussionQuestions` | 3 open-ended questions | See below |
| `reflection` | Closing thought | See below |

---

## 3. Clue Writing System

### 3.1 Clue Progression
| Clue | Purpose | Example (Joseph) |
|------|---------|------------------|
| Clue 1 | Broad context (setting, role) | "I was given a special, long garment by my loving father, which made my brothers jealous." |
| Clue 2 | Key event | "I was sold by my brothers into slavery and taken far away into Egypt." |
| Clue 3 | Almost revealing | "Jehovah blessed me to interpret dreams for Pharaoh, leading me to become prime minister of Egypt." |

### 3.2 Clue Rules
- Written in **first person** ("I was...", "I did...")
- Progressive: general → specific
- No name mentioned in clues
- 3 clues per character (consistent)

---

## 4. Summary Writing

### 4.1 Structure
- 1-2 sentences
- Focus on **faith qualities**, not just biography
- Connect to the theme (e.g., patience)

### 4.2 Example
> "Joseph's life is a masterclass in faith, endurance, and forgiveness. Despite enduring injustice, betrayal, and imprisonment, he recognized Jehovah's guiding hand and saved his family from famine."

---

## 5. Timeline Milestones

### 5.1 Structure
- 3 milestones per character
- Each: `period` (label) + `event` (description)

### 5.2 Example (Joseph)
| Period | Event |
|--------|-------|
| Young Boy in Canaan | Received prophetic dreams of sheaves bowing down. |
| Slave & Prisoner in Egypt | Remained morally clean with Potiphar's wife & interpreted dreams in prison. |
| Ruler under Pharaoh | Stored grain for 7 years of famine & reconciled joyfully with his brothers. |

---

## 6. Key Scriptures

### 6.1 Structure
- 2 scriptures per character
- Each: `reference` + `snippet` (short quote)

### 6.2 Rules
- Use NWT
- Choose verses that highlight the character's faith
- Snippet should be 1-2 sentences

---

## 7. Interesting Fact

### 7.1 Purpose
- A surprising, delightful, memorable fact
- Shows Jehovah's care or the character's humanity

### 7.2 Example
> "Joseph lived to be 110 years old and insisted that his bones be carried up out of Egypt when Israel eventually left for the Promised Land (Hebrews 11:22)."

---

## 8. Qualities

### 8.1 Purpose
- Faith qualities the character exemplifies
- Used for the Ending summary and future features

### 8.2 Example (Joseph)
```typescript
qualities: ["Endurance", "Forgiveness", "Trust in Jehovah"]
```

---

## 9. Discussion Questions

### 9.1 Rules
- Open-ended (not yes/no)
- Personal (connect to user's life)
- Encouraging (never judgmental)
- Practical (lead to application)

### 9.2 Example (Joseph)
1. "How did Joseph keep a positive, peaceful heart when he was treated unfairly in Egypt?"
2. "In what ways can we imitate Joseph's quick willingness to forgive when someone hurts us?"
3. "How does Joseph's story build your trust in Jehovah during difficult wait times?"

---

## 10. Reflection

### 10.1 Purpose
- A closing thought that ties the character to the theme
- 1-2 sentences, warm and encouraging

### 10.2 Example
> "Joseph's life reminds us that Jehovah can turn even the darkest circumstances into something beautiful — if we trust Him and wait patiently."

---

## 11. Current Character Set (v1 — Patience)

| Character | Avatar | Era | Key Quality |
|-----------|--------|-----|-------------|
| Joseph | 🌾 | Patriarchal Age | Endurance & Forgiveness |
| David | 👑 | Kingdom Age | Devotion & Humility |
| Abraham | ⛺ | Patriarchal Age | Faith & Obedience |
| Ruth | 🌾 | Judges Period | Loyal Love |
| Esther | ✨ | Persian Empire | Courage |
| Moses | 📜 | Exodus | Meekness & Patience |
| Daniel | 🦁 | Babylonian Exile | Integrity & Prayer |
| Samuel | 🕯️ | Judges Period | Faithful Service |
| Peter | ⛵ | First Century | Warmth & Zeal |
| Paul | ✉️ | First Century | Perseverance |

---

## 12. Adding a New Character

To add a character:
1. Create the character object following the `BibleCharacter` interface
2. Write 3 progressive clues (first person)
3. Write a faith-focused summary
4. Add 3 timeline milestones
5. Add 2 key scriptures (NWT)
6. Write 1 interesting fact
7. List 2-3 faith qualities
8. Write 3 open-ended discussion questions
9. Write a closing reflection
10. Add to the theme's character array

---

## 13. Character Rules

1. **Accurate to scripture.** Never invent facts.
2. **Faith-focused.** Emphasize qualities, not just biography.
3. **Consistent structure.** Every character has all fields.
4. **Warm tone.** Follow the Content Guide (docs/13).
5. **Theme-connected.** Characters should relate to the theme.
6. **First-person clues.** Clues are always in first person.