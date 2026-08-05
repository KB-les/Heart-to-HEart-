# 25 — API Specification

> Even without a backend today, we document our service interfaces now.
> This makes adding Supabase, Firebase, or another backend tomorrow much easier.
> Every service is defined as a TypeScript interface — the implementation can be local, remote, or hybrid.

---

## 1. Service Architecture

```
┌─────────────────────────────────────────────┐
│              UI Components                  │
├─────────────────────────────────────────────┤
│              Service Layer                  │
│  (ThemeService, PlayerService, SyncService, │
│   StorageService, AudioService,             │
│   AnimationService, SessionService)         │
├─────────────────────────────────────────────┤
│           Implementation Layer              │
│  (LocalStorage, WebRTC, Web Audio,          │
│   Future: Supabase/Firebase)                │
└─────────────────────────────────────────────┘
```

The UI never talks to storage or network directly. It talks to services. This is what makes swapping implementations trivial.

---

## 2. ThemeService

**Purpose:** Load and manage Worship Experiences.

```typescript
interface ThemeService {
  getExperiences(): WorshipExperience[];
  getExperience(id: string): WorshipExperience;
  getJourney(experienceId: string): Journey;
  getScene(experienceId: string, sceneId: string): JourneyScene;
  getCharacters(experienceId: string): BibleCharacter[];
  getScenarios(experienceId: string): HeartOrActionScenario[];
  getDiscussionCards(experienceId: string): DiscussionCard[];
}
```

### 2.1 Implementation (current)
```typescript
// Local: reads from EXPERIENCES registry
const ThemeServiceLocal: ThemeService = {
  getExperiences: () => Object.values(EXPERIENCES),
  getExperience: (id) => EXPERIENCES[id] ?? EXPERIENCES.patience,
  // ...
};
```

### 2.2 Future (backend)
```typescript
// Remote: fetches from API
const ThemeServiceRemote: ThemeService = {
  getExperiences: async () => (await fetch("/api/experiences")).json(),
  // ...
};
```

---

## 3. PlayerService

**Purpose:** Manage player state and persistence.

```typescript
interface PlayerService {
  getPlayer1(): Player;
  getPlayer2(): Player;
  setPlayer1Name(name: string): void;
  setPlayer2Name(name: string): void;
  getPlayerChoices(playerId: string): PlayerChoice;
  setPlayerChoices(playerId: string, choices: PlayerChoice): void;
  resetPlayers(): void;
}
```

### 3.1 Implementation (current)
```typescript
// Local: uses localStorage
const PlayerServiceLocal: PlayerService = {
  getPlayer1: () => ({ name: localStorage.getItem("h2h_p1") ?? "Karabelo", avatar: "🌿" }),
  setPlayer1Name: (name) => localStorage.setItem("h2h_p1", name),
  // ...
};
```

---

## 4. SyncService

**Purpose:** Manage remote peer-to-peer synchronization.

```typescript
interface SyncService {
  createRoom(): Promise<string>;           // returns room code
  joinRoom(code: string): Promise<void>;
  leaveRoom(): void;
  broadcast(message: SyncMessage): void;
  onMessage(callback: (message: SyncMessage) => void): void;
  getStatus(): PeerStatus;
  getRole(): "host" | "guest" | null;
  getRoomCode(): string;
}
```

### 4.1 Implementation (current)
```typescript
// Local: uses PeerJS (WebRTC)
const SyncServicePeerJS: SyncService = {
  createRoom: async () => { /* PeerJS host logic */ },
  joinRoom: async (code) => { /* PeerJS guest logic */ },
  // ...
};
```

### 4.2 Future (backend relay)
```typescript
// Remote: uses WebSocket or Firebase Realtime Database
const SyncServiceRemote: SyncService = {
  createRoom: async () => { /* create room in DB */ },
  // ...
};
```

---

## 5. StorageService

**Purpose:** Abstract all persistence.

```typescript
interface StorageService {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  // Typed helpers
  getPlayerNames(): { p1: string; p2: string };
  setPlayerNames(p1: string, p2: string): void;
  getMuted(): boolean;
  setMuted(muted: boolean): void;
  getSessions(): Session[];
  saveSession(session: Session): void;
  getGarden(): GardenState;
  saveGarden(garden: GardenState): void;
}
```

### 5.1 Implementation (current)
```typescript
// Local: uses localStorage
const StorageServiceLocal: StorageService = {
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value),
  // ...
};
```

### 5.2 Future (cloud)
```typescript
// Remote: uses Supabase/Firebase
const StorageServiceCloud: StorageService = {
  getItem: async (key) => (await supabase.from("kv").select("value").eq("key", key)).data?.[0]?.value,
  // ...
};
```

---

## 6. AudioService

**Purpose:** Manage sound effects and ambient audio.

```typescript
interface AudioService {
  playSound(effect: SoundEffect): void;
  setMuted(muted: boolean): void;
  isMuted(): boolean;
  setAmbient(sound: AmbientSound | null): void;
  getAmbient(): AmbientSound | null;
}
```

### 6.1 Implementation (current)
```typescript
// Local: uses Web Audio API synthesis
const AudioServiceWebAudio: AudioService = {
  playSound: (effect) => { /* synthesize */ },
  // ...
};
```

### 6.2 Future (audio files)
```typescript
// Local: uses <audio> elements with pre-recorded files
const AudioServiceFiles: AudioService = {
  playSound: (effect) => { /* play mp3 */ },
  // ...
};
```

---

## 7. AnimationService

**Purpose:** Centralize animation configuration.

```typescript
interface AnimationService {
  getPageTransition(direction: number): Variants;
  getCardEntrance(): Variants;
  getRevealAnimation(delay: number): Variants;
  getAmbientConfig(): AmbientConfig;
  isReducedMotion(): boolean;
}
```

### 7.1 Implementation (current)
```typescript
// Local: framer-motion variants
const AnimationServiceFramer: AnimationService = {
  getPageTransition: (direction) => ({
    initial: { opacity: 0, x: direction > 0 ? 60 : -60, scale: 0.98, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, x: direction > 0 ? -60 : 60, scale: 0.97, filter: "blur(4px)" },
  }),
  // ...
};
```

---

## 8. SessionService

**Purpose:** Manage the current worship session.

```typescript
interface SessionService {
  startSession(experienceId: string, mode: "single" | "remote"): Session;
  getCurrentSession(): Session | null;
  getCurrentScene(): JourneyScene;
  advanceScene(): void;
  goToScene(index: number): void;
  completeCharacter(name: string): void;
  completeSession(): void;
  getProgress(): JourneyProgress;
}
```

### 8.1 Implementation (current)
```typescript
// Local: React state in page.tsx
const SessionServiceLocal: SessionService = {
  startSession: (experienceId, mode) => ({ /* ... */ }),
  // ...
};
```

---

## 9. Service Dependency Graph

```
UI Components
    ↓
┌─────────────────────────────┐
│  SessionService             │
│  ├── ThemeService           │
│  ├── PlayerService          │
│  ├── SyncService            │
│  ├── StorageService         │
│  ├── AudioService           │
│  └── AnimationService       │
└─────────────────────────────┘
```

---

## 10. Future Backend API (REST)

When a backend is added, the REST endpoints would be:

### 10.1 Experiences
```
GET    /api/experiences              → List all experiences
GET    /api/experiences/:id          → Get one experience
POST   /api/experiences              → Create experience (Worship Designer)
PUT    /api/experiences/:id          → Update experience
DELETE /api/experiences/:id          → Delete experience
```

### 10.2 Sessions
```
POST   /api/sessions                 → Create session
GET    /api/sessions/:id             → Get session
PUT    /api/sessions/:id             → Update session
POST   /api/sessions/:id/complete    → Mark complete
```

### 10.3 Players
```
GET    /api/players/:id              → Get player
PUT    /api/players/:id              → Update player
```

### 10.4 Garden
```
GET    /api/garden/:familyId         → Get garden state
PUT    /api/garden/:familyId         → Update garden
```

---

## 11. Service Rules

1. **UI never talks to storage/network directly.** Always through services.
2. **Services are interfaces.** Implementations can be swapped.
3. **Services are stateless** (except SessionService which holds session state).
4. **Services return typed data.** No raw `any`.
5. **Services are testable.** Mock implementations for tests.
6. **Future-proof.** Adding a backend only requires new implementations, not UI changes.

---

## 12. Implementation Status

| Service | Status |
|---------|--------|
| ThemeService | 🔲 To create (v1.1) |
| PlayerService | 🔲 To create (v1.1) |
| SyncService | ✅ Exists (PeerContext) |
| StorageService | 🔲 To create (v1.1) |
| AudioService | ✅ Exists (SoundContext) |
| AnimationService | 🔲 To create (v1.1) |
| SessionService | 🔲 To create (v1.1) |