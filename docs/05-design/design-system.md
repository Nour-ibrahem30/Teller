# Design System

## Purpose

This document establishes the design system for the Teller website—the shared language of components, patterns, and tokens that ensure consistency across all pages.

**Status:** Draft — Provisional (Awaiting Official Brand Guidelines)  
**Last Updated:** 2026-10-26

---

## ⚠️ Important Notice

This design system is **provisional** pending official Teller brand guidelines. All color codes, typography specifications, and design tokens are approximations based on observed materials.

**Do not treat these as final values.**

---

## Design System Philosophy

### Principles

1. **Consistency** — Same problem, same solution
2. **Flexibility** — Support variation within constraints
3. **Accessibility** — Inclusive by default
4. **Scalability** — Support future growth
5. **RTL-native** — Arabic is the primary direction

---

## Design Tokens

### Provisional Tokens

**⚠️ Replace with official brand values when available**

#### Color Tokens

```css
/* Primary colors */
--color-primary: #1A7B7E;        /* Teal (observed) */
--color-secondary: #F5E6D3;      /* Cream (observed) */
--color-accent: #E07B4A;         /* Orange (observed) */
--color-background-alt: #8B6F5C; /* Warm brown (observed) */

/* Text colors */
--color-text-primary: #2D2D2D;   /* Dark text */
--color-text-secondary: #5A5A5A; /* Secondary text */
--color-text-inverse: #F5E6D3;   /* Light text on dark */

/* Semantic colors */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;

/* Backgrounds */
--color-background: #FFFFFF;
--color-surface: #FAFAFA;
```

#### Spacing Tokens

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-8: 3rem;     /* 48px */
--space-10: 4rem;    /* 64px */
--space-12: 6rem;    /* 96px */
--space-16: 8rem;    /* 128px */
```

#### Typography Tokens

**TBD — Awaiting official font specifications**

```css
/* Font families */
--font-primary: TBD;        /* Arabic primary */
--font-secondary: TBD;      /* English secondary */
--font-mono: 'IBM Plex Mono', monospace;

/* Font sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Line heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

#### Border Radius Tokens

```css
--radius-none: 0;
--radius-sm: 0.125rem;  /* 2px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 1rem;      /* 16px */
--radius-full: 9999px;
```

#### Shadow Tokens

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

#### Transition Tokens

```css
--transition-fast: 150ms;
--transition-normal: 300ms;
--transition-slow: 500ms;
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## Layout System

### Grid

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile | 4 | 16px | 16px |
| Tablet | 8 | 24px | 32px |
| Desktop | 12 | 24px | 64px |

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
```

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1440px;
```

---

## Component Patterns

### Button Patterns

| Variant | Use Case |
|---------|----------|
| Primary | Main actions (Contact, Submit) |
| Secondary | Secondary actions |
| Ghost | Tertiary actions |
| Link | Inline links styled as buttons |

### Form Patterns

- Floating labels or top labels (TBD)
- Inline validation
- Clear error states
- RTL-compatible layout

### Card Patterns

- Service cards
- Case study cards
- Testimonial cards
- All with consistent padding, borders, shadows

---

## Documentation Requirements

When design system is finalized, document:

1. **Component specifications** — Dimensions, states, behavior
2. **Usage guidelines** — When to use, when not to use
3. **Code examples** — HTML/CSS/React examples
4. **Accessibility notes** — Per-component accessibility
5. **RTL considerations** — Directional variations

---

## Related Documents

- [Visual Identity](../01-brand/visual-identity.md)
- [Color System](color-system.md)
- [Typography](typography.md)
- [Component Inventory](component-inventory.md)
- [Design Handoff](design-handoff.md)

---

## Next Actions

1. [ ] Obtain official brand guidelines
2. [ ] Finalize color tokens
3. [ ] Confirm typography specifications
4. [ ] Build component library
5. [ ] Document usage guidelines
