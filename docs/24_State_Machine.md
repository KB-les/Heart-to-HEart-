# 24 — State Machine

> Every state. Every transition. Documented for debugging and development.
> This is the single source of truth for how the app moves between states.

---

## 1. Top-Level Journey State Machine

```
┌─────────────┐
│   Welcome   │ (Scene 1)
└──────┬──────┘
       │ Start Worship
       ▼
┌─────────────┐
│ Player Setup│ (Scene 2)
└──────┬──────┘
       │ Start Session
       ▼
┌─────────────┐
│  Icebreaker │ (Scene 3)
└──────┬──────┘
       │ Proceed
       ▼
┌─────────────┐
│   Bible     │ (Scene 4)
│ Characters  │
└──────┬──────┘
       │ Proceed
       ▼
┌─────────────┐
│ Heart or    │ (Scene 5)
│   Action    │
└──────┬──────┘
       │ Proceed
       ▼
┌─────────────┐
│   Main      │ (Scene 6)
│ Discussion  │
└──────┬──────┘
       │ Complete
       ▼
┌─────────────┐
│   Ending    │ (Scene 7)
└──────┬──────┘
       │ Finish / Restart
       ▼
┌─────────────┐
│   Welcome   │ (back to start)
└─────────────┘
```

### 1.1 Transitions

| From | To | Trigger | Guard |
|------|-----|---------|-------|
| Welcome | Player Setup | Start Worship | None |
| Player Setup | Icebreaker | Start Session | Single mode OR connected |
| Icebreaker | Bible Characters | Proceed | Stage 4 reached |
| Bible Characters | Heart or Action | Proceed | Last character done |
| Heart or Action | Main Discussion | Proceed | Last scenario done |
| Main Discussion | Ending | Complete | None |
| Ending | Welcome | Finish / Restart | None |
| Any | Any (back) | Progress Tree click | Host only (remote) |

---

## 2. Remote Connection State Machine

```
                    ┌─────────────────────────────┐
                    │                             │
                    ▼                             │
┌──────────────┐  createRoom()  ┌──────────────┐  │
│ disconnected │───────────────→│  generating  │  │
└──────┬───────┘                └──────┬───────┘  │
       │                              │ peer open │
       │ joinRoom(code)               ▼           │
       │                    ┌──────────────┐      │
       │                    │   waiting    │      │
       │                    └──────┬───────┘      │
       │                           │ guest joins  │
       ▼                           ▼              │
┌──────────────┐  conn open  ┌──────────────┐     │
│  connecting  │────────────→│  connected   │─────┘
└──────┬───────┘             └──────┬───────┘
       │                            │ leaveRoom / close
       │                            ▼
       │                    ┌──────────────┐
       └───────────────────→│ disconnected │
                            └──────────────┘
```

### 2.1 States

| State | Meaning | UI |
|--------|---------|-----|
| `disconnected` | No connection | Show create/join options |
| `generating` | Host creating peer | Spinner |
| `waiting` | Host waiting for guest | Show room code |
| `connecting` | Guest connecting | Spinner |
| `connected` | Both connected | Green "Partner Connected" |
| `error` | Connection failed | Error message |

### 2.2 Transitions

| From | To | Trigger |
|------|-----|---------|
| disconnected | generating | `createRoom()` |
| disconnected | connecting | `joinRoom(code)` |
| generating | waiting | Peer `open` event |
| connecting | connected | Connection `open` event |
| waiting | connected | Guest connects |
| connected | disconnected | `leaveRoom()` or connection `close` |
| any | error | Peer/connection `error` event |
| error | disconnected | `leaveRoom()` |

---

## 3. Icebreaker State Machine

### 3.1 Stage + Turn States

```
stage 1 (Colour) ──P1 submits──→ stage 1 (P2) ──P2 submits──→ stage 2 (P1)
stage 2 (P1) ──P1 submits──→ stage 2 (P2) ──P2 submits──→ stage 3 (P1)
stage 3 (P1) ──P1 submits──→ stage 3 (P2) ──P2 submits──→ stage 4 (Summary)
```

### 3.2 State Variables

| Variable | Type | Values |
|----------|------|--------|
| `stage` | `1 \| 2 \| 3 \| 4` | Question number (4 = summary) |
| `activePlayer` | `1 \| 2` | Whose turn |
| `p1` | `PlayerChoice` | Player 1 choices |
| `p2` | `PlayerChoice` | Player 2 choices |

### 3.3 Transitions

| From | To | Trigger | Guard |
|------|-----|---------|-------|
| (stage, P1) | (stage, P2) | Submit | Choice + 2 feelings selected |
| (stage, P2) | (stage+1, P1) | Submit | stage < 3 |
| (stage 3, P2) | (4, —) | Submit | All questions done |

### 3.4 Turn Logic

| Mode | Rule |
|------|------|
| Single | P1 answers → pass to P2 → P2 answers → next question |
| Remote | `activePlayer` synced. Host = P1, Guest = P2. Only active player's controls enabled |

---

## 4. Bible Character Activity State Machine

### 4.1 Per-Character States

```
characterIndex = 0, revealedClues = 1, isAnswerRevealed = false
    ↓
[Reveal Next Clue] → revealedClues++ (max = clues.length)
    ↓
[Reveal Answer] → isAnswerRevealed = true
    ↓
[Next Character] → characterIndex++, reset (revealedClues = 1, isAnswerRevealed = false)
    ↓
(last character) → [Proceed to Heart or Action]
```

### 4.2 State Variables

| Variable | Type | Values |
|----------|------|--------|
| `characterIndex` | `number` | 0 to characters.length - 1 |
| `revealedClues` | `number` | 1 to clues.length |
| `isAnswerRevealed` | `boolean` | false → true |
| `userGuessInput` | `string` | Optional guess |

### 4.3 Transitions

| From | To | Trigger | Guard |
|------|-----|---------|-------|
| (idx, clues, false) | (idx, clues+1, false) | Reveal Next Clue | clues < clues.length |
| (idx, clues, false) | (idx, clues, true) | Reveal Answer | None |
| (idx, clues, true) | (idx+1, 1, false) | Next Character | idx < length - 1 |
| (last, clues, true) | (next activity) | Proceed | idx = length - 1 |
| (idx, clues, true) | (idx, 1, false) | Replay Clues | None |

---

## 5. Heart or Action State Machine

### 5.1 Per-Scenario States

```
currentIndex = 0, selectedChoice = null
    ↓
[Heart] / [Action] / [Both] → selectedChoice = choice
    ↓
[Next Scenario] → currentIndex++, selectedChoice = null
    ↓
(last scenario) → [Proceed to Main Discussion]
```

### 5.2 State Variables

| Variable | Type | Values |
|----------|------|--------|
| `currentIndex` | `number` | 0 to scenarios.length - 1 |
| `selectedChoice` | `"Heart" \| "Action" \| "Both" \| null` | User's selection |

### 5.3 Transitions

| From | To | Trigger | Guard |
|------|-----|---------|-------|
| (idx, null) | (idx, choice) | Select choice | None |
| (idx, choice) | (idx+1, null) | Next Scenario | idx < length - 1 |
| (last, choice) | (next activity) | Proceed | idx = length - 1 |

---

## 6. Main Discussion State Machine

### 6.1 Tab + Card States

```
activeTab = "james", activeCardIndex = 0
    ↓
[Tab change] → activeTab = "psalm" | "ecclesiastes"
    ↓
[Next Card] → activeCardIndex++ (max = cards.length - 1)
    ↓
[Previous Card] → activeCardIndex-- (min = 0)
    ↓
[Complete] → next activity
```

### 6.2 State Variables

| Variable | Type | Values |
|----------|------|--------|
| `activeTab` | `"james" \| "psalm" \| "ecclesiastes"` | Current scripture tab |
| `activeCardIndex` | `number` | 0 to cards.length - 1 |

### 6.3 Transitions

| From | To | Trigger | Guard |
|------|-----|---------|-------|
| (tab, idx) | (newTab, idx) | Tab change | None |
| (tab, idx) | (tab, idx+1) | Next Card | idx < length - 1 |
| (tab, idx) | (tab, idx-1) | Previous Card | idx > 0 |
| (tab, idx) | (tab, i) | Dot click | 0 ≤ i < length |
| (any) | (next activity) | Complete | None |

---

## 7. Activity Flow States (Generic)

Every activity follows:

```
idle
  ↓ (mount)
intro
  ↓ (Begin)
interacting
  ↓ (complete interaction)
discussing
  ↓ (Continue)
reflecting
  ↓ (Finish)
complete
  ↓ (Next Activity)
```

### 7.1 Transitions

| From | To | Trigger |
|------|-----|---------|
| idle | intro | Activity mounts |
| intro | interacting | User taps "Begin" |
| interacting | discussing | User completes interaction |
| discussing | reflecting | User taps "Continue" |
| reflecting | complete | User taps "Finish" |
| complete | next | User taps "Next Activity" |

---

## 8. Sound State Machine

```
unmuted
  ↓ (toggleMute)
muted
  ↓ (toggleMute)
unmuted
```

| State | Behavior |
|-------|----------|
| `unmuted` | `playSound(effect)` synthesizes audio |
| `muted` | `playSound(effect)` is a no-op |

**Persistence:** `h2h_muted` in localStorage.

---

## 9. Sync Message Handling

### 9.1 Host → Guest Flow
```
Host action
    ↓
Host broadcasts SyncMessage
    ↓
Guest receives lastMessage
    ↓
Guest updates local state
```

### 9.2 Message Types & Handlers

| Message | Handler |
|---------|---------|
| `SYNC_STEP` | Update currentStep |
| `SYNC_PLAYERS` | Update player names |
| `SYNC_ICEBREAKER` | Update stage, activePlayer, choices |
| `SYNC_CHARACTER` | Update characterIndex, revealedClues, isAnswerRevealed |
| `SYNC_HEART_ACTION` | Update currentIndex, selectedChoice |
| `SYNC_DISCUSSION` | Update activeTab, activeCardIndex |

---

## 10. State Machine Rules

1. **Every state change has a trigger.** No implicit transitions.
2. **Every transition has a guard** where needed (e.g., can't advance without selection).
3. **State is explicit.** No hidden state — all state variables are documented.
4. **Remote sync mirrors state.** Host state changes broadcast to guest.
5. **No dead ends.** Every state has a valid exit.
6. **No auto-advance.** Users always trigger transitions.