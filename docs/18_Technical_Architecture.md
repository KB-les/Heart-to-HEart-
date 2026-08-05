# 18 — Technical Architecture

> The technical blueprint. Everything modular, everything reusable, everything documented.

---

## 1. Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 14 (App Router) | Application framework |
| UI | React 18 | Component rendering |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first styling |
| Animation | framer-motion | Motion & transitions |
| Icons | lucide-react | Icon library |
| Remote sync | PeerJS (WebRTC) | Peer-to-peer connection |
| Class utils | clsx + tailwind-merge | Conditional classes |
| Persistence | localStorage | Client-side storage |

---

## 2. Architecture Layers

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│  (Screens, Components, UI blocks)   │
├─────────────────────────────────────┤
│         State Management            │
│  (React Context: Peer, Sound)       │
├─────────────────────────────────────┤
│            Data Layer               │
│  (Theme packages, content data)     │
├─────────────────────────────────────┤
│         Infrastructure              │
│  (WebRTC, Web Audio, localStorage)  │
└─────────────────────────────────────┘
```

---

## 3. Data Flow

### 3.1 Content Flow
```
Theme Package (data)
    ↓
Theme Registry (index.ts)
    ↓
page.tsx (loads theme)
    ↓
Screen Components (receive theme via props)
    ↓
UI Components (render content)
```

### 3.2 State Flow
```
User Interaction
    ↓
Screen Component (local state)
    ↓
[if remote] PeerContext.broadcast()
    ↓
Partner receives lastMessage
    ↓
Partner's screen updates
```

### 3.3 Sound Flow
```
User Interaction
    ↓
Component calls useSound().playSound(effect)
    ↓
SoundContext synthesizes via Web Audio API
    ↓
[if muted] → silent
```

---

## 4. Module Structure

### 4.1 Current
```
src/
├── app/          → Layout, page, globals
├── components/
│   ├── screens/  → Chapter containers
│   └── ui/       → Reusable blocks
├── context/      → Peer, Sound
└── data/         → Content data
```

### 4.2 Future (v1.1+)
```
src/
├── app/          → Layout, page, globals
├── components/
│   ├── screens/  → Chapter containers
│   ├── ui/       → Reusable blocks
│   └── activities/ → Activity components
├── context/      → Peer, Sound
├── data/
│   └── themes/   → Theme packages
├── hooks/        → Custom hooks
├── lib/          → Utilities
└── types/        → Shared types
```

---

## 5. Key Technical Decisions

### 5.1 Client-Side Rendering
- All components use `"use client"`
- The app is a client-rendered SPA experience
- No server-side data fetching needed

### 5.2 WebRTC via PeerJS
- PeerJS provides a simple WebRTC wrapper
- Host creates a peer with a room-code-based ID
- Guest connects to the host's peer ID
- Messages are JSON-serialized `SyncMessage` objects

### 5.3 Web Audio API
- All sounds synthesized in-browser (no audio files)
- AudioContext created on demand (respects autoplay policy)
- Mute state persisted to localStorage

### 5.4 localStorage
- Player names persist across sessions
- Mute preference persists
- Future: session history, garden state

---

## 6. Remote Sync Protocol

### 6.1 Message Schema
```typescript
interface SyncMessage {
  type:
    | "SYNC_STEP"
    | "SYNC_PLAYERS"
    | "SYNC_ICEBREAKER"
    | "SYNC_CHARACTER"
    | "SYNC_HEART_ACTION"
    | "SYNC_DISCUSSION";
  payload: any;
}
```

### 6.2 Connection Lifecycle
```
disconnected → generating → waiting → connected
disconnected → connecting → connected
connected → disconnected (on leave/close)
any → error (on failure)
```

### 6.3 Room Codes
- 4 chars from `ABCDEFGHJKLMNPQRSTUVWXYZ23456789`
- Host ID: `h2h-worship-CODE`
- Guest ID: `h2h-worship-guest-<random>`

---

## 7. Performance Considerations

- **GPU-accelerated animations** (transform + opacity only)
- **Lazy-load PeerJS** (dynamic import on demand)
- **Minimal re-renders** (useCallback, memo where needed)
- **Low ambient animation count** (5 leaves, 3 clouds, 4 glows)
- **No heavy libraries** (no charting, no 3D, no video)

---

## 8. Security & Privacy

- **No backend** — all data stays on-device
- **No accounts** — no personal data collected
- **WebRTC** — peer-to-peer, no server relay of content
- **localStorage only** — names and preferences
- **No analytics, no tracking, no ads**

---

## 9. Future Architecture (v2+)

### 9.1 PWA
- Service worker for offline support
- App manifest for installability
- Cached content for offline worship

### 9.2 Theme Import/Export
- Themes as JSON
- Export: download JSON file
- Import: load JSON file or URL param

### 9.3 Future Database (optional)
- If community sharing is added:
  - Backend API for theme gallery
  - User-generated themes
  - Moderation

---

## 10. Technical Rules

1. **TypeScript everywhere.** No `any` unless absolutely necessary.
2. **No hardcoded content in components.** Content comes via props.
3. **No duplicate components.** Extract and reuse.
4. **No heavy dependencies.** Only add what's needed.
5. **No server-side logic.** This is a client-rendered app.
6. **No breaking changes without approval.** Core architecture changes require review (docs/20).

---

## 11. Implementation Status

| Component | Status |
|-----------|--------|
| Next.js 14 App Router | ✅ Exists |
| React 18 + TypeScript | ✅ Exists |
| Tailwind CSS | ✅ Exists |
| framer-motion | ✅ Exists |
| PeerJS remote sync | ✅ Exists |
| Web Audio sounds | ✅ Exists |
| localStorage persistence | ✅ Exists |
| Theme package system | 🔲 v1.1 |
| PWA / offline | 🔲 Future |
| Theme import/export | 🔲 Future |