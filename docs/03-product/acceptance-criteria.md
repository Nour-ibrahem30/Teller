# Acceptance Criteria

## Purpose

This document specifies the acceptance criteria for user stories, defining the conditions that must be met for each feature to be considered complete.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## Acceptance Criteria Format

```
AC-XXX: [Criterion title]
Given: [Context/precondition]
When: [Action taken]
Then: [Expected result]
```

---

## Homepage Acceptance Criteria

### AC-001: Homepage Value Proposition

**Traces to:** US-001

**AC-001.1: Value proposition visibility**
- Given: A visitor arrives on the homepage
- When: The page loads
- Then: The value proposition is visible within the initial viewport without scrolling

**AC-001.2: Brand clarity**
- Given: A visitor views the homepage for 5 seconds
- When: They are asked what Teller does
- Then: They can articulate that Teller is a storytelling/branding company

**AC-001.3: Primary CTA visibility**
- Given: A visitor views the homepage
- When: They want to contact Teller
- Then: A contact CTA is visible without scrolling

---

## Navigation Acceptance Criteria

### AC-002: Primary Navigation

**Traces to:** US-009, FR-001

**AC-002.1: Navigation accessibility**
- Given: A visitor is on any page
- When: They look for navigation
- Then: The primary navigation is visible in the header

**AC-002.2: Navigation completeness**
- Given: A visitor views the navigation
- When: They check available links
- Then: Links to Home, About, Services, Work, and Contact are present

**AC-002.3: Current page indication**
- Given: A visitor is on a specific page
- When: They view the navigation
- Then: The current page/section is visually indicated

---

### AC-003: Mobile Navigation

**Traces to:** US-010, FR-002

**AC-003.1: Mobile menu toggle**
- Given: A visitor is on a mobile device (viewport < 768px)
- When: They view the header
- Then: A hamburger menu icon is visible

**AC-003.2: Menu opening**
- Given: A visitor taps the hamburger menu
- When: The tap is registered
- Then: The navigation menu opens with a visible animation

**AC-003.3: Menu closing**
- Given: The mobile menu is open
- When: A visitor taps a navigation link
- Then: The menu closes and the page navigates

**AC-003.4: Touch target size**
- Given: A visitor is using touch navigation
- When: They tap menu items
- Then: Touch targets are at least 44x44 pixels

---

## Services Acceptance Criteria

### AC-004: Services Display

**Traces to:** US-003, US-004, FR-005

**AC-004.1: All services visible**
- Given: A visitor navigates to the services section
- When: The page loads
- Then: All 5 Teller services are displayed

**AC-004.2: Service descriptions**
- Given: A visitor views a service
- When: They read the service information
- Then: A clear description of the service is present

**AC-004.3: Service navigation**
- Given: A visitor is viewing services
- When: They want to learn more about a specific service
- Then: They can access detailed information (via click/scroll)

---

## Contact Acceptance Criteria

### AC-005: Contact Form

**Traces to:** US-007, FR-008

**AC-005.1: Form accessibility**
- Given: A visitor wants to contact Teller
- When: They navigate to the contact section
- Then: A contact form is visible and accessible

**AC-005.2: Required field validation**
- Given: A visitor attempts to submit the form
- When: Required fields (name, email, message) are empty
- Then: Validation errors are displayed for empty required fields

**AC-005.3: Email validation**
- Given: A visitor enters an invalid email address
- When: They attempt to submit the form
- Then: An error message indicates the email format is invalid

**AC-005.4: Successful submission**
- Given: A visitor completes all required fields correctly
- When: They submit the form
- Then: A confirmation message is displayed

**AC-005.5: Spam protection**
- Given: A bot attempts to submit the form
- When: Spam protection is triggered
- Then: The submission is blocked or flagged

---

## About Section Acceptance Criteria

### AC-006: About Content

**Traces to:** US-002, FR-006

**AC-006.1: Brand story presence**
- Given: A visitor navigates to the About section
- When: The page loads
- Then: The Teller brand story is displayed

**AC-006.2: Mission and vision visibility**
- Given: A visitor views the About section
- When: They scan the content
- Then: Mission and vision statements are present

---

## Work/Portfolio Acceptance Criteria

### AC-007: Case Studies

**Traces to:** US-005, FR-007

**AC-007.1: Case study listing**
- Given: A visitor navigates to the Work section
- When: The page loads
- Then: Available case studies are listed

**AC-007.2: Case study detail**
- Given: A visitor selects a case study
- When: The detail view loads
- Then: Challenge, approach, and results are presented

**Note:** Dependent on case study content availability

---

## Accessibility Acceptance Criteria

### AC-008: Keyboard Navigation

**Traces to:** US-011, NFR-003

**AC-008.1: Focus visibility**
- Given: A user navigates using keyboard
- When: They tab through interactive elements
- Then: A visible focus indicator is present on each element

**AC-008.2: Tab order**
- Given: A user tabs through the page
- When: They move through elements
- Then: The tab order follows logical reading order

**AC-008.3: Keyboard functionality**
- Given: A user is using keyboard only
- When: They interact with buttons, links, and forms
- Then: All interactions work without requiring a mouse

---

### AC-009: Screen Reader

**Traces to:** US-011, NFR-004

**AC-009.1: Image alt text**
- Given: A screen reader user encounters an image
- When: The screen reader reads the image
- Then: Descriptive alt text is announced

**AC-009.2: Form labels**
- Given: A screen reader user encounters a form
- When: They navigate to form fields
- Then: Each field's label is announced

**AC-009.3: Heading structure**
- Given: A screen reader user navigates by headings
- When: They list page headings
- Then: Headings are hierarchical and descriptive

---

### AC-010: Reduced Motion

**Traces to:** US-012, NFR-005

**AC-010.1: Motion preference respected**
- Given: A user has prefers-reduced-motion enabled
- When: They browse the site
- Then: Animations are reduced or eliminated

---

## Performance Acceptance Criteria

### AC-011: Page Load Performance

**Traces to:** NFR-001

**AC-011.1: LCP target**
- Given: A user loads any page on a 4G connection
- When: The page renders
- Then: Largest Contentful Paint occurs in under 2.5 seconds

**AC-011.2: Mobile performance**
- Given: The site is tested with Lighthouse
- When: Mobile performance is scored
- Then: The score is 80 or higher

---

## Responsive Design Acceptance Criteria

### AC-012: Mobile Responsiveness

**Traces to:** US-010, NFR-006

**AC-012.1: No horizontal scroll**
- Given: A user views the site on a 320px wide viewport
- When: They browse any page
- Then: No horizontal scrollbar appears

**AC-012.2: Readable text**
- Given: A user views the site on mobile
- When: They read content
- Then: Text is readable without zooming (min 16px)

**AC-012.3: Functional forms**
- Given: A user completes a form on mobile
- When: They interact with form fields
- Then: Fields are usable and appropriately sized

---

## Related Documents

- [User Stories](user-stories.md)
- [Functional Requirements](functional-requirements.md)
- [Testing Strategy](../08-quality/testing-strategy.md)

---

## Next Actions

1. [ ] Validate acceptance criteria with stakeholders
2. [ ] Map criteria to test cases
3. [ ] Prioritize based on user story priority
4. [ ] Create automated test coverage plan
