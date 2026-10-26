# User Flows

## Purpose

This document details the specific task flows users take to accomplish goals on the Teller website.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## Flow 1: Submit Contact Inquiry

### Overview

| Attribute | Value |
|-----------|-------|
| Goal | Submit contact form inquiry |
| Entry Points | Contact page, any CTA |
| Success | Form submitted, confirmation shown |
| Failure | Validation errors, technical failure |

### Flow Diagram

```
┌─────────────────┐
│    Entry        │ ← CTA click / Direct navigation
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Contact Page   │
│  Loads         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Completes │
│  Form Fields    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Clicks    │
│  Submit         │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌───────┐ ┌────────────┐
│ Valid │ │  Invalid   │
└───┬───┘ └─────┬──────┘
    │           │
    ▼           ▼
┌───────────┐ ┌──────────────┐
│ Processing│ │ Error Display│
└─────┬─────┘ │ User Corrects│
      │       └───────┬──────┘
      │               │ (Loop back)
      ▼               │
┌─────────────────┐   │
│  Success        │ ←─┘
│  Confirmation   │
└─────────────────┘
```

### Detailed Steps

| Step | User Action | System Response |
|------|-------------|-----------------|
| 1 | Navigate to contact | Display contact page |
| 2 | Fill name field | — |
| 3 | Fill email field | Optional: inline validation |
| 4 | Fill message field | — |
| 5 | Click submit | Validate all fields |
| 6a | If valid | Show loading, submit data |
| 6b | If invalid | Show error messages |
| 7 | — | Display confirmation |

### Error States

| Error | Message | Resolution |
|-------|---------|------------|
| Name empty | "Please enter your name" | User fills field |
| Email empty | "Please enter your email" | User fills field |
| Email invalid | "Please enter a valid email" | User corrects |
| Message empty | "Please enter a message" | User fills field |
| Submission failed | "Something went wrong. Please try again." | Retry or alternative contact |

---

## Flow 2: Explore Services

### Overview

| Attribute | Value |
|-----------|-------|
| Goal | Understand available services |
| Entry Points | Nav, Homepage |
| Success | User understands services |
| Conversion | CTA to contact |

### Flow Diagram

```
┌─────────────────┐
│    Entry        │ ← Nav click / Homepage card
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Services Page  │
│  Overview       │
└────────┬────────┘
         │
    ┌────┼────┬────┐
    │    │    │    │ (Multiple paths)
    ▼    ▼    ▼    ▼
┌──────────────────────┐
│  Scroll / Navigate   │
│  to specific service │
└──────────┬───────────┘
           │
           ▼
┌─────────────────┐
│  Read Service   │
│  Details        │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌──────────┐
│ CTA    │ │ Continue │
│ Click  │ │ Exploring│
└────┬───┘ └────┬─────┘
     │          │
     ▼          │ (Loop)
┌────────────┐  │
│ Contact    │  │
│ Page       │◄─┘
└────────────┘
```

### Navigation Patterns

| From | To | Trigger |
|------|------|---------|
| Homepage | Services | Nav link or card click |
| Services overview | Service detail | Scroll or link click |
| Service detail | Contact | CTA button |
| Service detail | Case study | "See example" link |

---

## Flow 3: View Case Study

### Overview

| Attribute | Value |
|-----------|-------|
| Goal | Evaluate Teller's work quality |
| Entry Points | Work page, Service page, Homepage |
| Success | User views and understands case study |
| Conversion | CTA to contact |

### Flow Diagram

```
┌─────────────────┐
│    Entry        │ ← Work page / Related link
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Work Page      │
│  Case Grid      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Selects   │
│  Case Study     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Case Study     │
│  Detail Page    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Reads:    │
│  • Challenge    │
│  • Approach     │
│  • Results      │
└────────┬────────┘
         │
    ┌────┴────┬────────┐
    │         │        │
    ▼         ▼        ▼
┌────────┐ ┌────────┐ ┌──────┐
│ Contact│ │ Related│ │ Back │
│ CTA    │ │ Cases  │ │to Grid│
└────────┘ └────────┘ └──────┘
```

---

## Flow 4: Mobile Navigation

### Overview

| Attribute | Value |
|-----------|-------|
| Goal | Navigate site on mobile device |
| Entry Points | Any page |
| Success | User finds desired content |

### Flow Diagram

```
┌─────────────────┐
│  Any Page       │
│  (Mobile)       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Taps      │
│  Hamburger Icon │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Menu Opens     │
│  (Slide/Overlay)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Taps      │
│  Nav Item       │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌────────────┐
│ Page   │ │ Close icon │
│ Loads  │ │ tapped     │
└────────┘ └─────┬──────┘
                 │
                 ▼
          ┌─────────────┐
          │ Menu Closes │
          │ Stay on Page│
          └─────────────┘
```

### Mobile-Specific Behaviors

| Action | Response |
|--------|----------|
| Tap hamburger | Menu opens with animation |
| Tap nav link | Navigate to page, menu closes |
| Tap close icon | Menu closes |
| Tap outside menu | Menu closes |
| Swipe | Menu closes (optional) |

---

## Flow 5: First-Time Visitor Journey

### Overview

| Attribute | Value |
|-----------|-------|
| Goal | Understand Teller and decide on next action |
| Entry Points | Homepage (typical) |
| Success | Visitor converts or plans to return |

### Flow Diagram

```
┌─────────────────┐
│  Lands on       │
│  Homepage       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Reads Hero     │
│  Value Prop     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Scrolls or     │
│  Clicks Nav     │
└────────┬────────┘
         │
    ┌────┴────┬────────┐
    │         │        │
    ▼         ▼        ▼
┌────────┐ ┌────────┐ ┌──────┐
│Services│ │ About  │ │ Work │
└────┬───┘ └────┬───┘ └───┬──┘
     │          │         │
     └────┬─────┴─────────┘
          │
          ▼ (After exploring)
     ┌────┴────┐
     │         │
     ▼         ▼
┌────────┐ ┌───────────┐
│Contact │ │ Leave     │
│ (Goal) │ │ (May      │
└────────┘ │ Return)   │
           └───────────┘
```

---

## Flow Metrics

### Key Metrics to Track

| Flow | Metric | Target |
|------|--------|--------|
| Contact submission | Completion rate | >70% |
| Contact submission | Drop-off points | Identify issues |
| Service exploration | Pages per session | >2 |
| Case study viewing | Time on page | >2 min |
| Mobile navigation | Menu interaction rate | Monitor |

---

## Related Documents

- [User Journeys](user-journeys.md)
- [Page Requirements](page-requirements.md)
- [Functional Requirements](../03-product/functional-requirements.md)
- [Analytics Plan](../08-quality/analytics-plan.md)

---

## Next Actions

1. [ ] Validate flows with stakeholders
2. [ ] Map flows to analytics events
3. [ ] Identify potential friction points
4. [ ] Create flow-based test scenarios
5. [ ] Review against accessibility requirements
