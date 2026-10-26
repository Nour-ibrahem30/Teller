# Motion Guidelines

## Purpose

This document establishes guidelines for animation and motion design on the Teller website, ensuring motion serves purpose while maintaining accessibility and performance.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## Motion Philosophy

### Core Principle

> Motion should serve meaning, not decoration. Every animation must have a purpose that justifies its presence.

### Guiding Questions

Before adding motion, ask:
1. What is the purpose of this animation?
2. Does it help the user understand something?
3. Does it guide attention appropriately?
4. Can the experience work without it?
5. Does it respect accessibility and performance?

---

## Motion Principles

### 1. Purposeful

Motion should serve one of these purposes:

| Purpose | Example |
|---------|---------|
| **Feedback** | Button hover states, form submission |
| **Orientation** | Page transitions, scroll position |
| **Guidance** | Drawing attention to important elements |
| **Personality** | Subtle brand expression |
| **Continuity** | Smooth content transitions |

### 2. Subtle

- Avoid dramatic movements
- Keep durations short
- Use easing for natural feel
- Don't distract from content

### 3. Respectful

- Honor `prefers-reduced-motion`
- Don't rely on motion for information
- Ensure content works without animation
- Consider motion-sensitive users

### 4. Performant

- Don't impact page load
- Use GPU-accelerated properties
- Lazy-load heavy animations
- Test on low-end devices

---

## Timing & Easing

### Duration Guidelines

| Type | Duration | Use Case |
|------|----------|----------|
| Micro | 100-200ms | Hover states, focus |
| Standard | 200-400ms | Transitions, reveals |
| Deliberate | 400-600ms | Complex transitions |
| Slow | 600ms+ | Rarely, with purpose |

### Easing Functions

| Easing | Use Case |
|--------|----------|
| `ease-out` | Elements entering view |
| `ease-in` | Elements exiting view |
| `ease-in-out` | State changes |
| `linear` | Continuous motion (rare) |

### CSS Custom Properties

```css
:root {
  /* Durations */
  --motion-micro: 150ms;
  --motion-fast: 200ms;
  --motion-normal: 300ms;
  --motion-slow: 500ms;
  
  /* Easing */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

---

## Approved Motion Patterns

### ✅ Recommended Uses

#### Button Hover/Focus

```css
.button {
  transition: background-color var(--motion-fast) var(--ease-default),
              transform var(--motion-fast) var(--ease-default);
}

.button:hover {
  background-color: var(--color-accent-dark);
}

.button:active {
  transform: scale(0.98);
}
```

#### Content Fade-In

```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--motion-normal) var(--ease-out),
              transform var(--motion-normal) var(--ease-out);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Mobile Menu

```css
.mobile-menu {
  transform: translateX(100%);
  transition: transform var(--motion-normal) var(--ease-out);
}

.mobile-menu.open {
  transform: translateX(0);
}
```

#### Form Focus States

```css
.input {
  border-color: var(--color-border);
  transition: border-color var(--motion-fast) var(--ease-default),
              box-shadow var(--motion-fast) var(--ease-default);
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(26, 123, 126, 0.2);
}
```

---

## Restricted Motion Patterns

### ❌ Avoid

| Pattern | Reason |
|---------|--------|
| Auto-playing video | Disruptive, performance |
| Continuous animation | Distracting, accessibility |
| Motion-dependent content | Accessibility |
| Parallax scrolling | Performance, accessibility |
| Page shake/bounce | Distracting |
| Flashing content | Accessibility (seizure risk) |
| Very slow animations | Frustrating |

---

## Accessibility

### Reduced Motion Support

**Required:** All motion must be disabled or reduced when user prefers.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Alternative Approaches

| With Motion | With Reduced Motion |
|-------------|---------------------|
| Fade + slide in | Instant appear |
| Slide transition | Cut transition |
| Animated progress | Static progress |

### No Motion Dependencies

- Never rely on motion to convey meaning
- Provide non-animated alternatives
- Test with motion disabled

---

## Performance Guidelines

### Performant Properties

Use properties that can be GPU-accelerated:

```css
/* Good - GPU accelerated */
transform: translateX(100px);
transform: scale(1.1);
opacity: 0.5;

/* Avoid - triggers layout */
width: 200px;
height: 200px;
margin: 20px;
padding: 10px;
```

### Performance Checklist

- [ ] Use `transform` and `opacity` primarily
- [ ] Avoid animating layout properties
- [ ] Use `will-change` sparingly
- [ ] Test on mobile devices
- [ ] Measure with performance tools

---

## Implementation Guidance

### Using GSAP (If Approved)

```javascript
// Example: Fade in elements on scroll
gsap.from('.fade-element', {
  scrollTrigger: {
    trigger: '.fade-element',
    start: 'top 80%'
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Using Framer Motion (If Approved)

```jsx
// Example: Page transition
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  {content}
</motion.div>
```

### CSS-Only Approach

For simpler needs, CSS is often sufficient and more performant.

---

## Motion Inventory

### Planned Animations

| Element | Animation | Priority |
|---------|-----------|----------|
| Page load | Fade in hero | P1 |
| Navigation | Hover states | P1 |
| Mobile menu | Slide in | P1 |
| Buttons | Hover/active | P1 |
| Forms | Focus states | P1 |
| Scroll reveals | Fade in content | P2 |
| Page transitions | Fade | P3 |

---

## Related Documents

- [Creative Direction](creative-direction.md)
- [Design System](design-system.md)
- [Accessibility](../04-ux/accessibility.md)
- [Performance Budget](../08-quality/performance-budget.md)

---

## Next Actions

1. [ ] CEO to validate motion approach
2. [ ] Determine animation library needs
3. [ ] Create motion prototypes
4. [ ] Test reduced motion behavior
5. [ ] Performance test animations
