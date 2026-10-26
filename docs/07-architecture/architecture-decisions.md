# Architecture Decision Records (ADRs)

## Purpose

This document records significant technical decisions using the Architecture Decision Record format.

**Status:** Active  
**Last Updated:** 2026-10-26

---

## ADR Format

```
## ADR-XXX: [Title]

### Status
[Proposed | Accepted | Deprecated | Superseded]

### Context
[What is the issue that we're seeing that is motivating this decision?]

### Decision
[What is the change that we're proposing?]

### Consequences
[What becomes easier or more difficult to do because of this change?]
```

---

## ADR-001: Static Site Generation Approach

### Status
PROPOSED — Pending requirements confirmation

### Context
The Teller website is primarily a brochure site with static content. We need to choose a rendering strategy that optimizes for performance, SEO, and developer experience.

### Decision
We propose using Static Site Generation (SSG) as the primary rendering approach. Pages will be pre-rendered at build time and served from a CDN.

### Consequences

**Positive:**
- Excellent performance (pre-rendered, CDN-cached)
- Strong SEO (full HTML content)
- Low hosting costs
- Minimal server maintenance
- High security (no server logic)

**Negative:**
- Content changes require rebuild/deploy
- Not suitable for highly dynamic content
- Build times increase with content volume

**Mitigations:**
- Use incremental static regeneration (ISR) if content updates frequently
- Implement CI/CD for fast deployments

---

## ADR-002: TypeScript for Type Safety

### Status
PROPOSED

### Context
We need to decide between JavaScript and TypeScript for the frontend codebase.

### Decision
We propose using TypeScript for the entire frontend codebase.

### Consequences

**Positive:**
- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring
- Better maintainability

**Negative:**
- Additional learning curve (minimal if team knows TS)
- Slightly more verbose code
- Build step required

---

## ADR-003: Tailwind CSS for Styling

### Status
PROPOSED

### Context
We need a CSS approach that supports rapid development, RTL layouts, and consistent design implementation.

### Decision
We propose using Tailwind CSS as the primary styling solution.

### Consequences

**Positive:**
- Excellent RTL support (rtl: variant, logical properties)
- Fast development with utility classes
- Consistent spacing and design tokens
- Small production bundle (purging)
- Design system enforcement

**Negative:**
- Learning curve for utility-first approach
- Verbose class strings in markup
- Requires build process

---

## ADR-004: No Custom Backend

### Status
PROPOSED — Pending requirements confirmation

### Context
We need to decide whether to build a custom backend or use third-party services for dynamic functionality.

### Decision
We propose NOT building a custom backend. Contact form will use either:
1. Serverless function (API route)
2. Third-party form service (Formspree, Netlify Forms)

### Consequences

**Positive:**
- Reduced complexity
- Lower costs
- Faster development
- Less maintenance
- Better security (no attack surface)

**Negative:**
- Limited customization
- Dependent on third-party services
- May need backend later if requirements change

**Mitigations:**
- Choose services with good migration paths
- Document service dependencies

---

## ADR-005: Arabic-First Design System

### Status
ACCEPTED

### Context
The primary audience speaks Arabic, and the site must work excellently in RTL mode.

### Decision
We will design and develop with Arabic (RTL) as the primary direction:
- Default `dir="rtl"` on HTML
- Use logical CSS properties
- Test Arabic first, then verify English (if added)

### Consequences

**Positive:**
- Excellent Arabic experience (not an afterthought)
- Proper RTL implementation from start
- Cultural authenticity

**Negative:**
- May require extra consideration for English content
- Some third-party components may need RTL fixes

---

## Pending Decisions

| ID | Decision | Status | Blocking |
|----|----------|--------|----------|
| ADR-006 | CMS selection | Waiting on requirements | Content workflow |
| ADR-007 | Animation library | Waiting on design | Motion implementation |
| ADR-008 | Hosting provider | Waiting on final stack | Deployment |
| ADR-009 | Form handling approach | Waiting on requirements | Contact feature |

---

## Decision Log Summary

| ADR | Decision | Status |
|-----|----------|--------|
| ADR-001 | Static Site Generation | PROPOSED |
| ADR-002 | TypeScript | PROPOSED |
| ADR-003 | Tailwind CSS | PROPOSED |
| ADR-004 | No Custom Backend | PROPOSED |
| ADR-005 | Arabic-First Design | ACCEPTED |

---

## Related Documents

- [Architecture Overview](architecture-overview.md)
- [Tech Stack Evaluation](tech-stack-evaluation.md)
- [Decision Log](../00-project/decision-log.md)

---

## Next Actions

1. [ ] Review proposed ADRs with team
2. [ ] Confirm requirements for pending decisions
3. [ ] Document new decisions as they're made
