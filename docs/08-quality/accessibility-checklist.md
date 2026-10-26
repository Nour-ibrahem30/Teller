# Accessibility Checklist

## Purpose

This document provides a practical checklist for verifying accessibility compliance before launch.

**Status:** Draft — WCAG 2.1 AA Target  
**Last Updated:** 2026-10-26

---

## ⚠️ Important Note

This checklist covers common issues but **does not guarantee full WCAG compliance**. Full accessibility validation requires:
- Manual testing with assistive technologies
- Expert accessibility review
- Testing with users who have disabilities

---

## Quick Check

### Automated Testing (Run First)

- [ ] Lighthouse accessibility score > 90
- [ ] axe DevTools shows 0 critical/serious issues
- [ ] WAVE shows no errors

---

## Perceivable

### 1.1 Text Alternatives

- [ ] All images have `alt` attributes
- [ ] Meaningful images have descriptive alt text
- [ ] Decorative images have empty `alt=""` or `role="presentation"`
- [ ] Icons with meaning have accessible text
- [ ] Form controls have accessible labels

### 1.3 Adaptable

- [ ] Content structure uses semantic HTML (headings, lists, etc.)
- [ ] Reading order is logical when CSS is disabled
- [ ] Page has only one `<h1>` heading
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] Tables (if used) have headers and caption
- [ ] Forms use fieldset/legend for groups

### 1.4 Distinguishable

- [ ] Text has minimum 4.5:1 contrast ratio
- [ ] Large text has minimum 3:1 contrast ratio
- [ ] UI components have minimum 3:1 contrast
- [ ] Color is not the only way to convey information
- [ ] Text can be resized to 200% without loss of content
- [ ] No horizontal scrolling at 320px width
- [ ] Links are distinguishable from surrounding text

---

## Operable

### 2.1 Keyboard Accessible

- [ ] All interactive elements are keyboard accessible
- [ ] Tab order follows visual order
- [ ] Focus is visible on all elements
- [ ] No keyboard traps
- [ ] Skip links allow bypassing navigation
- [ ] Dropdown menus are keyboard operable

### 2.2 Enough Time

- [ ] No time limits on interactions
- [ ] Auto-updating content can be paused (if any)

### 2.3 Seizures and Physical Reactions

- [ ] No content flashes more than 3 times per second

### 2.4 Navigable

- [ ] Pages have descriptive titles
- [ ] Focus order is meaningful
- [ ] Link purpose is clear from link text
- [ ] Multiple ways to find pages (nav, sitemap, search)
- [ ] Headings are descriptive
- [ ] Focus is visible

### 2.5 Input Modalities

- [ ] Touch targets are at least 44×44 pixels
- [ ] No functionality requires specific motion
- [ ] Pointer cancellation (down vs. up)

---

## Understandable

### 3.1 Readable

- [ ] Page language is declared (`lang="ar"`)
- [ ] Language changes are marked (`lang` on elements)
- [ ] Text is readable and understandable

### 3.2 Predictable

- [ ] Navigation is consistent across pages
- [ ] Components behave consistently
- [ ] Changes of context are user-initiated

### 3.3 Input Assistance

- [ ] Form errors are identified and described
- [ ] Labels are associated with form controls
- [ ] Required fields are indicated
- [ ] Error suggestions are provided
- [ ] Form submission can be reviewed/corrected

---

## Robust

### 4.1 Compatible

- [ ] HTML is valid (no major errors)
- [ ] ARIA is used correctly (valid, appropriate)
- [ ] Custom components have correct roles/states
- [ ] Status messages use ARIA live regions

---

## Testing Checklist

### Keyboard Testing

1. [ ] Press Tab through entire page
2. [ ] All interactive elements receive focus
3. [ ] Focus indicator is always visible
4. [ ] Tab order matches visual layout
5. [ ] Can complete contact form with keyboard only
6. [ ] Mobile menu works with keyboard

### Screen Reader Testing

1. [ ] Page title is announced
2. [ ] Headings are navigable
3. [ ] Images have meaningful alt text
4. [ ] Forms are navigable and labeled
5. [ ] Errors are announced
6. [ ] Links have meaningful text
7. [ ] RTL direction is respected

### Zoom Testing

1. [ ] Zoom to 200%
2. [ ] All content still accessible
3. [ ] No horizontal scroll
4. [ ] Text remains readable
5. [ ] Interactive elements usable

### Color and Contrast Testing

1. [ ] Test with color blindness simulator
2. [ ] Verify contrast with tool
3. [ ] Information not conveyed by color alone

### Reduced Motion Testing

1. [ ] Enable `prefers-reduced-motion`
2. [ ] Animations are disabled/reduced
3. [ ] No auto-playing content

---

## Page-by-Page Checklist

### Homepage

- [ ] Hero text is accessible
- [ ] Service cards have meaningful content
- [ ] CTAs have clear purpose
- [ ] Trust signals have alt text

### About

- [ ] Brand story readable by screen reader
- [ ] Team images (if any) have alt text
- [ ] Heading structure is correct

### Services

- [ ] Each service is distinguishable
- [ ] Service cards are keyboard navigable
- [ ] Descriptions are comprehensive

### Work

- [ ] Case study cards are accessible
- [ ] Images have alt text
- [ ] Filter controls (if any) are accessible

### Contact

- [ ] Form is fully accessible
- [ ] Labels are associated
- [ ] Errors are announced
- [ ] Success message is announced
- [ ] Alternative contact is accessible

---

## Pre-Launch Sign-Off

| Check | Completed | Tested By | Date |
|-------|-----------|-----------|------|
| Automated testing | | | |
| Keyboard testing | | | |
| Screen reader testing | | | |
| Zoom testing | | | |
| Color contrast | | | |
| Reduced motion | | | |

---

## Related Documents

- [Accessibility](../04-ux/accessibility.md)
- [Non-Functional Requirements](../03-product/non-functional-requirements.md)
- [Testing Strategy](testing-strategy.md)

---

## Next Actions

1. [ ] Run automated tests
2. [ ] Complete manual testing
3. [ ] Address identified issues
4. [ ] Document any known issues
5. [ ] Sign off before launch
