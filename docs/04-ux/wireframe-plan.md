# Wireframe Plan

## Purpose

This document outlines the approach, scope, and schedule for wireframing the Teller website.

**Status:** Draft — Pre-Wireframe Phase  
**Last Updated:** 2026-10-26

---

## Wireframe Approach

### Philosophy

**Low to mid-fidelity first:** Focus on layout, hierarchy, and functionality before visual design. Wireframes should answer "where does content go?" not "what does it look like?"

### Fidelity Levels

| Level | Purpose | Tools |
|-------|---------|-------|
| Low (sketches) | Rapid exploration, layout options | Paper, whiteboard, basic digital |
| Mid (grayscale) | Detailed layout, content placement | Figma, Adobe XD |
| High (styled) | Design refinement (beyond wireframe) | Figma, Adobe XD |

**Recommended:** Start with low-fidelity for rapid iteration, move to mid-fidelity for approval.

---

## Wireframe Scope

### Pages to Wireframe

| Page | Priority | Mobile | Desktop | Status |
|------|----------|--------|---------|--------|
| Homepage | P1 | ✅ Required | ✅ Required | TBD |
| About | P1 | ✅ Required | ✅ Required | TBD |
| Services | P1 | ✅ Required | ✅ Required | TBD |
| Work (grid) | P1 | ✅ Required | ✅ Required | TBD |
| Case Study | P1 | ✅ Required | ✅ Required | TBD |
| Contact | P1 | ✅ Required | ✅ Required | TBD |

### Components to Define

| Component | Priority |
|-----------|----------|
| Header / Navigation | P1 |
| Mobile menu | P1 |
| Footer | P1 |
| Service card | P1 |
| Case study card | P1 |
| CTA sections | P1 |
| Testimonial block | P2 |
| Contact form | P1 |

---

## Wireframe Requirements

### Per-Wireframe Deliverables

Each page wireframe should include:

1. **Content blocks** — Where does content go?
2. **Hierarchy** — What's most important?
3. **Navigation** — How do users move?
4. **CTAs** — Where are conversion points?
5. **Responsive notes** — How does it adapt?

### RTL Considerations

- Wireframes should be created in RTL orientation
- Content flow right-to-left
- Navigation alignment
- Reading order annotations

### Annotations

Wireframes should include annotations for:
- Content types (headline, body, image, etc.)
- Interactive elements (links, buttons, forms)
- Responsive behavior notes
- Accessibility considerations

---

## Wireframe Process

### Phase 1: Low-Fidelity Exploration

**Objective:** Explore layout options, establish structure

| Activity | Duration | Output |
|----------|----------|--------|
| Homepage sketches | 1-2 days | 3-5 layout options |
| Key page sketches | 1-2 days | 2-3 options per page |
| Review & select | 1 day | Chosen directions |

### Phase 2: Mid-Fidelity Development

**Objective:** Detailed layouts for review and approval

| Activity | Duration | Output |
|----------|----------|--------|
| Homepage wireframe | 1-2 days | Mobile + Desktop |
| Core pages | 3-4 days | All P1 pages |
| Components | 1-2 days | Reusable components |
| Review & iterate | 2-3 days | Refined wireframes |

### Phase 3: Approval & Handoff

**Objective:** Finalize wireframes for design phase

| Activity | Duration | Output |
|----------|----------|--------|
| Stakeholder review | 2-3 days | Feedback collected |
| Final revisions | 1-2 days | Approved wireframes |
| Design handoff | 1 day | Documented wireframes |

---

## Wireframe Review Process

### Review Criteria

| Criterion | Question |
|-----------|----------|
| Content | Is all required content represented? |
| Hierarchy | Is the information priority clear? |
| Flow | Can users complete key tasks? |
| Responsive | Does the layout work at all sizes? |
| Accessibility | Are there obvious accessibility issues? |
| Feasibility | Is this technically implementable? |

### Reviewers

| Reviewer | Focus |
|----------|-------|
| CEO/Stakeholder | Content, priorities, brand |
| Project Lead | Scope, feasibility |
| Designer | Design preparation |
| Developer | Technical feasibility |

### Feedback Process

1. Present wireframes with context
2. Collect specific, actionable feedback
3. Document decisions
4. Iterate as needed
5. Obtain approval before proceeding

---

## Wireframe Dependencies

### Required Before Wireframing

| Dependency | Status |
|------------|--------|
| Sitemap approval | Draft (needs validation) |
| Page requirements | Draft |
| Content inventory | TBD |
| User journeys | Draft |
| Brand direction | Partial |

### Blocking Issues

| Issue | Impact | Resolution |
|-------|--------|------------|
| CEO discovery incomplete | Content uncertainty | Create flexible templates |
| Case study content unknown | Work page structure | Design for variable content |
| Blog decision pending | Scope uncertainty | Defer or create optional wireframes |

---

## Tools & Formats

### Recommended Tools

| Tool | Purpose | Recommendation |
|------|---------|----------------|
| Figma | Primary wireframing | ✅ Recommended |
| Adobe XD | Alternative | Option |
| Sketch | Alternative | Option |
| Paper/Whiteboard | Low-fidelity sketches | ✅ For exploration |

### File Organization

```
wireframes/
├── 01-low-fidelity/
│   ├── sketches/
│   └── explorations/
├── 02-mid-fidelity/
│   ├── pages/
│   └── components/
└── 03-approved/
    ├── final-wireframes/
    └── documentation/
```

### Naming Convention

`[page]-[device]-[version].[ext]`

Examples:
- `homepage-mobile-v1.fig`
- `contact-desktop-v2.fig`

---

## Timeline Estimate

### Prerequisites

- Sitemap and page requirements approved
- Basic content direction known
- Design resources available

### PROPOSED Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Low-fidelity | 3-5 days | Page requirements |
| Mid-fidelity | 5-8 days | Low-fidelity approval |
| Review & approval | 3-5 days | Stakeholder availability |
| **Total** | **~2-3 weeks** | — |

---

## Related Documents

- [Sitemap](sitemap.md)
- [Page Requirements](page-requirements.md)
- [UX Strategy](ux-strategy.md)
- [Responsive Strategy](responsive-strategy.md)
- [Design System](../05-design/design-system.md)

---

## Next Actions

1. [ ] Validate sitemap and page requirements
2. [ ] Confirm wireframe tools and team
3. [ ] Begin low-fidelity exploration
4. [ ] Schedule wireframe reviews
5. [ ] Document decisions throughout
