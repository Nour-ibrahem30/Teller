# Localization Strategy

## Purpose

This document defines the approach for language and localization on the Teller website.

**Status:** Draft — Primary Decision Pending  
**Last Updated:** 2026-10-26

---

## Key Decision Required

### TBD: Bilingual Website?

**Question for CEO:**
Should the website support both Arabic and English?

| Option | Implications |
|--------|--------------|
| Arabic only | Simpler, focused on primary market |
| Arabic + English | Broader reach, more content needed, more complexity |

---

## Current Approach

### CONFIRMED

| Attribute | Value |
|-----------|-------|
| Primary language | Arabic |
| Primary direction | RTL (Right-to-Left) |
| Target market | Egypt / Arab world |

### TBD

| Attribute | Options | Status |
|-----------|---------|--------|
| Secondary language | English / None | Pending CEO decision |
| URL structure | `/ar/`, `/en/` vs. separate | Pending decision |
| Content parity | Full translation vs. key pages | Pending decision |

---

## Arabic-First Principles

### Writing Approach

- Content written originally in Arabic
- Not translated from English
- Culturally appropriate expressions
- Modern, accessible Arabic

### Arabic Style Questions

| Question | Options | Decision |
|----------|---------|----------|
| Formality level | Formal (فصحى) / Informal | TBD |
| Dialect influence | MSA / Egyptian dialect | TBD |
| Numbers | Arabic numerals (٠١٢) / Western (012) | TBD |

---

## If Bilingual (English Added)

### Recommended Approach

1. **Arabic remains primary** — Design and develop Arabic first
2. **English as secondary** — Translate for international reach
3. **Full parity** — All pages available in both languages
4. **Native translation** — Not machine translation

### URL Structure Options

| Option | Example | Pros | Cons |
|--------|---------|------|------|
| Subdirectories | teller.com/ar/, teller.com/en/ | SEO-friendly, single domain | More complex routing |
| Language parameter | teller.com?lang=ar | Simple | Less SEO-friendly |
| Subdomains | ar.teller.com | Separation | More DNS management |

**Recommendation:** Subdirectories (`/ar/`, `/en/`)

### Language Switcher

| Requirement | Specification |
|-------------|---------------|
| Location | Header, clearly visible |
| Behavior | Switch to same page in other language |
| Default | Arabic (based on primary market) |
| Fallback | If page not translated, redirect to home |

### Content Management

| Approach | Description |
|----------|-------------|
| Parallel content | Each piece exists in both languages |
| Translation workflow | Arabic → Review → Translate → Review |
| Content sync | Keep versions updated |

---

## Technical Implementation

### RTL Support

```css
/* Base direction */
html[lang="ar"] {
  direction: rtl;
}

/* English sections */
html[lang="en"] {
  direction: ltr;
}

/* Use logical properties */
margin-inline-start: 1rem; /* instead of margin-left/right */
```

### Language Declaration

```html
<!-- Arabic -->
<html lang="ar" dir="rtl">

<!-- English -->
<html lang="en" dir="ltr">
```

### hreflang Tags

```html
<link rel="alternate" hreflang="ar" href="https://teller.com/ar/" />
<link rel="alternate" hreflang="en" href="https://teller.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://teller.com/ar/" />
```

---

## Translation Guidelines

### If English Translation Needed

| Principle | Description |
|-----------|-------------|
| Native translation | Professional Arabic → English translator |
| Meaning over words | Translate intent, not literal words |
| Voice consistency | Maintain brand voice in both languages |
| Cultural adaptation | Adapt examples and references |
| Review process | Native speaker review required |

### Content Not to Translate

| Element | Keep As-Is |
|---------|-----------|
| Brand name | Teller (تيلر) |
| Treller framework | Treller |
| Client names | Original names |
| Arabic quotes | Keep with translation note |

---

## SEO Considerations

### Per-Language SEO

| Element | Arabic | English |
|---------|--------|---------|
| Page titles | Unique Arabic | Unique English |
| Meta descriptions | Unique Arabic | Unique English |
| Alt text | Arabic | English |
| Structured data | Translated | Translated |

### Search Intent

| Market | Primary Keywords (TBD) |
|--------|------------------------|
| Arabic | سرد القصص، العلامة التجارية، تيلر |
| English | Storytelling, branding, Teller Egypt |

---

## Related Documents

- [Brand Voice](../01-brand/brand-voice.md)
- [Content Strategy](content-strategy.md)
- [SEO Strategy](../08-quality/seo-strategy.md)
- [Responsive Strategy](../04-ux/responsive-strategy.md)

---

## Next Actions

1. [ ] CEO to decide on bilingual requirement
2. [ ] Define Arabic style guide
3. [ ] Plan translation process (if needed)
4. [ ] Technical implementation approach
5. [ ] Content workflow for multi-language
