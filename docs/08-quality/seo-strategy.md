# SEO Strategy

## Purpose

This document defines the Search Engine Optimization strategy for the Teller website.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## SEO Objectives

### PROPOSED Goals

| Goal | Description | Priority |
|------|-------------|----------|
| Brand visibility | Rank for "Teller" brand terms | High |
| Service discovery | Rank for service-related terms | High |
| Thought leadership | Rank for storytelling topics | Medium |
| Local presence | Rank for Egypt/Arab market terms | High |

---

## Keyword Strategy

### PROPOSED Keyword Categories

#### Brand Terms

| Term | Language | Priority |
|------|----------|----------|
| تيلر | Arabic | High |
| Teller | English | High |
| Teller Egypt | English | High |
| Teller storytelling | English | High |

#### Service Terms (TBD)

| Category | Example Terms | Research Status |
|----------|---------------|-----------------|
| Storytelling | سرد القصص، brand storytelling | TBD |
| Branding | العلامة التجارية، branding Egypt | TBD |
| Social media | إدارة السوشيال ميديا | TBD |

**Note:** Keyword research needed to identify actual search terms.

---

## Technical SEO

### Site Structure

| Element | Requirement |
|---------|-------------|
| URL structure | Clean, readable URLs |
| Hierarchy | Logical, shallow (< 3 levels) |
| Navigation | Clear, consistent |
| Sitemap | XML sitemap generated |
| Robots.txt | Properly configured |

### Page-Level Requirements

| Element | Specification |
|---------|---------------|
| Title tags | Unique, 50-60 chars, keyword included |
| Meta descriptions | Unique, 150-160 chars, CTA included |
| H1 tags | One per page, keyword included |
| Heading hierarchy | Logical H1 → H2 → H3 |
| Image alt text | Descriptive, keyword-relevant |
| Canonical URLs | Self-referencing canonical |
| URL slugs | Descriptive, lowercase, hyphens |

### Technical Requirements

| Element | Specification |
|---------|---------------|
| HTTPS | Required |
| Mobile-friendly | Responsive design |
| Page speed | Core Web Vitals pass |
| Crawlability | No blocking of important content |
| Structured data | Schema markup |

---

## Content SEO

### Content Guidelines

| Principle | Implementation |
|-----------|----------------|
| Quality | Valuable, original content |
| Depth | Comprehensive coverage of topics |
| Freshness | Regular updates (if blog) |
| Structure | Scannable, well-organized |
| Keywords | Natural inclusion |

### Per-Page SEO

#### Homepage

| Element | Target |
|---------|--------|
| Primary keyword | تيلر / Teller |
| Title | Teller — تيلر | سرد قصصي واستراتيجيات العلامات التجارية |
| Description | Brief value proposition with CTA |

#### Services

| Element | Target |
|---------|--------|
| Primary keyword | [Service name] |
| Title | [Service] | Teller |
| Description | Service benefit + CTA |

#### About

| Element | Target |
|---------|--------|
| Primary keyword | Brand + About |
| Title | عن تيلر — About Teller |
| Description | Company description |

---

## Structured Data

### PROPOSED Schema Types

| Schema | Page | Purpose |
|--------|------|---------|
| Organization | Homepage | Company info |
| WebSite | Homepage | Site info |
| Service | Services | Service listings |
| Article | Blog (if added) | Blog posts |
| BreadcrumbList | All | Navigation |
| FAQ | FAQ (if added) | Q&A content |

### Organization Schema Example

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Teller",
  "alternateName": "تيلر",
  "url": "https://teller.com",
  "logo": "https://teller.com/logo.png",
  "sameAs": [
    "https://instagram.com/teller_storytelling",
    "https://tiktok.com/@teller_storytelling"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Arabic", "English"]
  }
}
```

---

## Local SEO

### Google Business Profile (Recommended)

| Element | Action |
|---------|--------|
| Profile creation | Create/claim listing |
| NAP consistency | Same name, address, phone everywhere |
| Categories | Appropriate business categories |
| Reviews | Encourage client reviews |

### Local Signals

| Signal | Implementation |
|--------|----------------|
| Location pages | Address on contact page |
| Local keywords | Egypt, Cairo, Arab |
| Regional content | Arabic-first |

---

## Link Strategy

### Internal Linking

| Practice | Implementation |
|----------|----------------|
| Service → Case studies | Link related work |
| Case studies → Services | Link related services |
| Blog → Services | Contextual links |
| Footer links | Key pages |

### External Linking (Outbound)

| Practice | Implementation |
|----------|----------------|
| Cite sources | When referencing research |
| Resource links | Helpful external resources |
| Social links | Profile links |

### Backlink Strategy (TBD)

| Approach | Status |
|----------|--------|
| Content marketing | Depends on blog decision |
| PR/Media | TBD |
| Industry directories | TBD |
| Guest posting | TBD |

---

## Analytics & Monitoring

### Tracking Setup

| Tool | Purpose |
|------|---------|
| Google Search Console | Search performance |
| Google Analytics 4 | Traffic analysis |
| SEO tool (TBD) | Rank tracking |

### Metrics to Track

| Metric | Frequency |
|--------|-----------|
| Organic traffic | Weekly |
| Keyword rankings | Monthly |
| Click-through rates | Monthly |
| Impressions | Weekly |
| Backlinks | Monthly |

---

## SEO Checklist

### Pre-Launch

- [ ] XML sitemap created
- [ ] Robots.txt configured
- [ ] Title tags unique
- [ ] Meta descriptions unique
- [ ] H1 tags present
- [ ] Alt text on images
- [ ] Structured data implemented
- [ ] Canonical URLs set
- [ ] HTTPS enforced
- [ ] Mobile-friendly verified
- [ ] Page speed optimized

### Post-Launch

- [ ] Submit sitemap to GSC
- [ ] Monitor indexing
- [ ] Track initial rankings
- [ ] Monitor Core Web Vitals
- [ ] Fix any issues identified

---

## Related Documents

- [Content Strategy](../06-content/content-strategy.md)
- [Performance Budget](performance-budget.md)
- [Analytics Plan](analytics-plan.md)

---

## Next Actions

1. [ ] Conduct keyword research
2. [ ] Define page-level SEO targets
3. [ ] Implement structured data
4. [ ] Set up Search Console
5. [ ] Create content optimization guidelines
