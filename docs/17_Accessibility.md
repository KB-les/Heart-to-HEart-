# 17 — Accessibility

> Heart to Heart should be usable by everyone — regardless of ability.
> Accessibility is not a feature. It's a baseline.

---

## 1. Accessibility Principles

1. **Inclusive.** Works for all users, including those with visual, motor, cognitive, or hearing differences.
2. **Peaceful.** Accessibility features never break the warm aesthetic.
3. **Optional but available.** Features like reduced motion and large text are user-controlled.
4. **Tested.** Every release is checked against WCAG AA standards.

---

## 2. Visual Accessibility

### 2.1 Color & Contrast
- **Text contrast:** WCAG AA (4.5:1 for body text, 3:1 for large text)
- **Never rely on color alone** to convey meaning (always pair with icons/text)
- **High contrast mode** (future): stronger contrast for all elements

### 2.2 Text Size
- **Large text mode** (future): scales all text up
- **Responsive typography:** text scales with viewport
- **No fixed font sizes** that prevent browser zoom

### 2.3 Reduced Motion
- **`prefers-reduced-motion` support** (future): disable non-essential animations
- Essential animations (page transitions) become simple fades
- Ambient animations (leaves, clouds) are disabled
- No flashing, no strobe, no rapid pulsing (already a rule)

---

## 3. Motor Accessibility

### 3.1 Keyboard Navigation
- **All interactive elements** are keyboard-focusable
- **Visible focus states** (ring on focus)
- **Logical tab order** (top to bottom, left to right)
- **No keyboard traps** (users can always tab out)

### 3.2 Touch Targets
- **Minimum 44×44px** touch targets
- **Adequate spacing** between interactive elements
- **No hover-dependent actions** (must work on touch)

### 3.3 Timing
- **No time limits** on any interaction
- **No auto-advancing** without user action

---

## 4. Hearing Accessibility

### 4.1 Sound
- **All sounds are optional** (mute toggle)
- **No critical information** is conveyed by sound alone
- **Visual feedback** accompanies all sound feedback

### 4.2 Captions (future)
- If audio narration is added, provide captions/transcripts

---

## 5. Cognitive Accessibility

### 5.1 Language
- **Simple, clear language** (see Content Guide docs/13)
- **Short sentences** and paragraphs
- **No jargon** or complex vocabulary

### 5.2 Navigation
- **Clear, consistent navigation** (Progress Tree)
- **One primary action per screen**
- **No confusing patterns** or hidden interactions

### 5.3 Focus
- **No pressure** (no timers, no scores)
- **Gentle pacing** (users go at their own speed)
- **Clear instructions** on every screen

---

## 6. Screen Reader Support

### 6.1 Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<button>` for buttons, `<a>` for links
- Use `<label>` for form inputs
- Use `<nav>` for navigation

### 6.2 ARIA
- `aria-label` on icon-only buttons
- `aria-live` for dynamic content (connection status, turn changes)
- `aria-expanded` for expandable sections
- `role="status"` for status messages

### 6.3 Alt Text
- All meaningful images have descriptive alt text
- Decorative images have `alt=""` (empty)

---

## 7. Offline & Performance

### 7.1 Offline Mode (future)
- PWA support: app works offline after first load
- Content is cached locally
- Remote sync requires connection, but single mode works offline

### 7.2 Performance
- Fast load times (client-rendered, but optimized)
- Smooth 60fps animations
- No layout shift on load

---

## 8. Accessibility Checklist

Before shipping any release:

- [ ] All text meets WCAG AA contrast
- [ ] All interactive elements are keyboard-focusable
- [ ] All interactive elements have visible focus states
- [ ] All touch targets are ≥ 44×44px
- [ ] No information conveyed by color alone
- [ ] No information conveyed by sound alone
- [ ] All images have alt text
- [ ] All icon-only buttons have aria-labels
- [ ] Heading hierarchy is logical
- [ ] No time limits on interactions
- [ ] Reduced motion is supported (future)
- [ ] Large text mode works (future)
- [ ] High contrast mode works (future)
- [ ] App works offline (future)

---

## 9. Implementation Status

| Feature | Status |
|---------|--------|
| Visible focus states | ✅ Partially (ring on inputs) |
| Touch targets ≥ 44px | ✅ Mostly (buttons are large) |
| Semantic HTML | ✅ Mostly |
| No time limits | ✅ Yes |
| Simple language | ✅ Yes |
| Reduced motion | 🔲 Future |
| Large text mode | 🔲 Future |
| High contrast mode | 🔲 Future |
| Offline PWA | 🔲 Future |
| Full ARIA support | 🔲 To improve |