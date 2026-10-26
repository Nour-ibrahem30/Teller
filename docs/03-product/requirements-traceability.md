# Requirements Traceability Matrix

## Purpose

This document maps relationships between business requirements, functional requirements, user stories, and acceptance criteria, ensuring complete coverage and enabling impact analysis.

**Status:** Draft — Framework Established  
**Last Updated:** 2026-10-26

---

## Traceability Overview

```
Business Objectives
        ↓
Business Requirements (BR-###)
        ↓
Functional Requirements (FR-###) ←→ Non-Functional Requirements (NFR-###)
        ↓
User Stories (US-###)
        ↓
Acceptance Criteria (AC-###)
        ↓
Test Cases
```

---

## Business Objectives to Requirements

| Objective | Business Requirements |
|-----------|----------------------|
| OBJ-01: Establish Credibility | BR-001, BR-006, BR-009 |
| OBJ-02: Generate Leads | BR-004, BR-008 |
| OBJ-03: Showcase Expertise | BR-003, BR-005 |
| OBJ-04: Educate Market | (TBD - Blog) |
| OBJ-05: Support Sales | BR-003, BR-005 |
| OBJ-06: Thought Leadership | BR-008, (TBD - Blog) |

---

## Business Requirements to Functional Requirements

| Business Req | Functional Requirements | User Stories |
|--------------|------------------------|--------------|
| BR-001: Professional Presentation | FR-001, FR-003, FR-004, FR-010 | US-001, US-009 |
| BR-002: Arabic Support | FR-011 | US-010 |
| BR-003: Service Information | FR-005 | US-003, US-004 |
| BR-004: Contact Capability | FR-008, FR-009 | US-007, US-008 |
| BR-005: Portfolio/Work | FR-007 | US-005 |
| BR-006: Brand Story | FR-006 | US-002 |
| BR-007: Responsive Design | FR-002 | US-010 |
| BR-008: Search Visibility | (NFR-008) | — |
| BR-009: Trust Elements | FR-004 (testimonials) | US-006 |
| BR-010: Analytics | (NFR-002) | — |

---

## Functional Requirements to Acceptance Criteria

| Functional Req | User Stories | Acceptance Criteria |
|----------------|--------------|---------------------|
| FR-001: Primary Navigation | US-009 | AC-002 |
| FR-002: Mobile Navigation | US-010 | AC-003 |
| FR-003: Footer Navigation | US-009 | — |
| FR-004: Homepage | US-001 | AC-001 |
| FR-005: Services Display | US-003, US-004 | AC-004 |
| FR-006: About Section | US-002 | AC-006 |
| FR-007: Work/Portfolio | US-005 | AC-007 |
| FR-008: Contact Form | US-007 | AC-005 |
| FR-009: Contact Info | US-007 | AC-005 |
| FR-010: Image Display | — | AC-011 (performance) |
| FR-011: Arabic Text | US-010 | — |

---

## Non-Functional Requirements to Acceptance Criteria

| NFR | Acceptance Criteria |
|-----|---------------------|
| NFR-001: Page Load | AC-011 |
| NFR-002: Mobile Performance | AC-011, AC-012 |
| NFR-003: WCAG Compliance | AC-008, AC-009 |
| NFR-004: Screen Reader | AC-009 |
| NFR-005: Motion Sensitivity | AC-010 |
| NFR-006: Device Support | AC-012 |
| NFR-007: Browser Support | — |
| NFR-008: SEO | — |

---

## Full Traceability Matrix

| BR | FR | NFR | US | AC | Priority | Status |
|----|----|----|----|----|----------|--------|
| BR-001 | FR-001, FR-004 | — | US-001, US-009 | AC-001, AC-002 | P1 | PROPOSED |
| BR-002 | FR-011 | — | US-010 | — | P1 | PROPOSED |
| BR-003 | FR-005 | — | US-003, US-004 | AC-004 | P1 | PROPOSED |
| BR-004 | FR-008, FR-009 | — | US-007, US-008 | AC-005 | P1 | PROPOSED |
| BR-005 | FR-007 | — | US-005 | AC-007 | P1 | PROPOSED |
| BR-006 | FR-006 | — | US-002 | AC-006 | P1 | PROPOSED |
| BR-007 | FR-002 | NFR-006 | US-010 | AC-003, AC-012 | P1 | PROPOSED |
| BR-008 | — | NFR-008 | — | — | P2 | PROPOSED |
| BR-009 | FR-004 | — | US-006 | — | P2 | PROPOSED |
| BR-010 | — | NFR-002 | — | — | P2 | PROPOSED |

---

## Coverage Analysis

### Requirements with Full Coverage

| Requirement | Has FR/NFR | Has US | Has AC |
|-------------|------------|--------|--------|
| BR-001 | ✅ | ✅ | ✅ |
| BR-002 | ✅ | ✅ | 🔶 |
| BR-003 | ✅ | ✅ | ✅ |
| BR-004 | ✅ | ✅ | ✅ |
| BR-005 | ✅ | ✅ | ✅ |
| BR-006 | ✅ | ✅ | ✅ |
| BR-007 | ✅ | ✅ | ✅ |
| BR-008 | ✅ (NFR) | ⬜ | ⬜ |
| BR-009 | 🔶 | ✅ | ⬜ |
| BR-010 | ✅ (NFR) | ⬜ | ⬜ |

### Gaps Identified

| Gap | Action Needed |
|-----|---------------|
| BR-002 missing AC | Create Arabic text display AC |
| BR-008 missing US | SEO is technical, may not need US |
| BR-009 missing AC | Create testimonial display AC |
| BR-010 missing coverage | Analytics is technical, may not need US/AC |

---

## Impact Analysis Guide

When a requirement changes, use this matrix to identify:

1. **Upstream impact:** What business objective is affected?
2. **Downstream impact:** What functional requirements, user stories, and acceptance criteria need updating?
3. **Test impact:** What test cases need to be revised?

---

## Related Documents

- [Business Requirements](../02-business/business-requirements.md)
- [Functional Requirements](functional-requirements.md)
- [Non-Functional Requirements](non-functional-requirements.md)
- [User Stories](user-stories.md)
- [Acceptance Criteria](acceptance-criteria.md)

---

## Next Actions

1. [ ] Fill coverage gaps
2. [ ] Validate matrix with team
3. [ ] Link to test cases (when testing phase begins)
4. [ ] Update as requirements change
