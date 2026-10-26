# Design Handoff

## Purpose

This document establishes the process and requirements for handing off designs to development.

**Status:** Draft — Process Definition  
**Last Updated:** 2026-10-26

---

## Handoff Philosophy

### Principles

1. **Complete** — Designers deliver comprehensive specs
2. **Accessible** — Developers can access everything needed
3. **Clear** — No ambiguity in implementation details
4. **Collaborative** — Questions are encouraged

---

## Handoff Deliverables

### Required for Each Page/Component

| Deliverable | Format | Purpose |
|-------------|--------|---------|
| Design files | Figma/XD | Source of truth |
| States | All states designed | Complete behavior |
| Responsive | All breakpoints | Adaptive design |
| Specifications | Annotated | Implementation details |
| Assets | Exported | Production-ready files |

---

## Design File Requirements

### Page Designs

For each page, provide:

- [ ] Desktop design (1440px)
- [ ] Tablet design (768px)
- [ ] Mobile design (375px)
- [ ] All interactive states annotated
- [ ] Real content (not lorem ipsum)

### Component Designs

For each component, provide:

- [ ] All variants
- [ ] All states (default, hover, focus, active, disabled)
- [ ] All sizes (if applicable)
- [ ] Responsive behavior notes
- [ ] RTL version

---

## Specification Requirements

### Spacing Specifications

Document:
- Margins between sections
- Padding within components
- Gutters in grids
- Vertical rhythm

**Use design tokens where possible.**

### Typography Specifications

Document:
- Font family
- Font weight
- Font size
- Line height
- Letter spacing
- Text transform

### Color Specifications

Document:
- Background colors
- Text colors
- Border colors
- Shadow values

**Use design tokens where possible.**

### Interaction Specifications

Document:
- Transition timing
- Animation behavior
- Hover states
- Focus states

---

## Asset Export Guidelines

### Image Export

| Asset Type | Format | Sizes |
|------------|--------|-------|
| Photos | WebP + JPG fallback | 1x, 2x |
| Icons | SVG | Vector |
| Logos | SVG | Vector |
| Illustrations | SVG or PNG | As needed |

### Naming Convention

```
[type]-[name]-[variant]-[size].[ext]

Examples:
- icon-menu-default.svg
- hero-background-mobile.webp
- logo-teller-dark.svg
```

### Export Folder Structure

```
exports/
├── images/
│   ├── hero/
│   ├── services/
│   └── work/
├── icons/
├── logos/
└── illustrations/
```

---

## Handoff Process

### Step 1: Design Completion

Designer confirms:
- [ ] All pages designed
- [ ] All states complete
- [ ] All breakpoints covered
- [ ] Design review passed

### Step 2: Specification Documentation

Designer documents:
- [ ] Spacing annotated
- [ ] Typography documented
- [ ] Colors documented
- [ ] Interactions specified

### Step 3: Asset Preparation

Designer exports:
- [ ] All images optimized
- [ ] All icons as SVG
- [ ] Naming convention followed
- [ ] Organized folder structure

### Step 4: Handoff Meeting

Designer and developer:
- [ ] Walk through designs
- [ ] Discuss technical challenges
- [ ] Identify questions
- [ ] Agree on timeline

### Step 5: Development Support

Designer provides:
- [ ] Ongoing clarification
- [ ] Quick design decisions
- [ ] Implementation review
- [ ] Iteration support

---

## Tools

### Design Tools

| Tool | Purpose |
|------|---------|
| Figma | Primary design tool (recommended) |
| Adobe XD | Alternative |

### Handoff Features

Utilize built-in features:
- Inspect mode for specifications
- Comments for annotations
- Shared libraries for components
- Prototyping for interactions

---

## Communication

### Questions Process

1. Developer posts question in project channel
2. Tag designer for visibility
3. Designer responds with clarification
4. Document decision if significant

### Design Updates

When designs change after handoff:
1. Designer notifies developer
2. Clearly mark what changed
3. Update design files
4. Re-export affected assets

---

## Quality Checklist

### Before Handoff

- [ ] All designs match requirements
- [ ] All states are designed
- [ ] Accessibility reviewed
- [ ] RTL reviewed
- [ ] Assets exported
- [ ] Specifications documented

### During Development

- [ ] Regular design reviews
- [ ] Questions addressed promptly
- [ ] Updates communicated

### Before Launch

- [ ] Final design review
- [ ] Cross-browser check
- [ ] Device testing
- [ ] Accessibility audit

---

## Related Documents

- [Design System](design-system.md)
- [Component Inventory](component-inventory.md)
- [Frontend Architecture](../07-architecture/frontend-architecture.md)

---

## Next Actions

1. [ ] Confirm design tool (Figma recommended)
2. [ ] Set up shared design libraries
3. [ ] Establish communication channels
4. [ ] Schedule handoff meetings
