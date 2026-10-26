# Information Architecture

## Purpose

This document defines the organization, labeling, and navigation systems for the Teller website, establishing how content is structured and accessed.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## IA Principles

### PROPOSED Principles

1. **User-centered organization** — Structure based on user mental models, not internal organization
2. **Shallow depth** — Minimize clicks to content (3-click rule)
3. **Multiple pathways** — Support different ways to find content
4. **Clear labeling** — Use familiar, unambiguous terms
5. **Scalable structure** — Support future growth

---

## Content Organization

### Primary Categories

| Category | Content Types | User Mental Model |
|----------|---------------|-------------------|
| **About** | Story, mission, team, approach | "Who is Teller?" |
| **Services** | Service offerings, methodology | "What do they do?" |
| **Work** | Case studies, portfolio | "What have they done?" |
| **Contact** | Form, contact info | "How do I reach them?" |
| **Insights** (TBD) | Articles, resources | "What do they know?" |

### Content Relationships

```
                    ┌─────────────────┐
                    │    Homepage     │
                    │  (Entry Point)  │
                    └────────┬────────┘
                             │
        ┌──────────┬─────────┼─────────┬──────────┐
        │          │         │         │          │
        ▼          ▼         ▼         ▼          ▼
    ┌───────┐  ┌───────┐  ┌─────┐  ┌───────┐  ┌───────┐
    │ About │  │Services│  │Work │  │Contact│  │Insights│
    └───┬───┘  └───┬───┘  └──┬──┘  └───────┘  └───┬───┘
        │          │         │                     │
        │    ┌─────┴─────┐   │                     │
        │    │ Individual │   │               ┌────┴────┐
        │    │ Services   │   │               │ Blog    │
        │    │ (optional) │   │               │ Posts   │
        │    └───────────┘   │               └─────────┘
        │                    │
        └────────────────────┤
                             │
                    ┌────────┴────────┐
                    │   Case Studies  │
                    │  (Cross-linked) │
                    └─────────────────┘
```

---

## Navigation Systems

### Primary Navigation

**Location:** Header (persistent on all pages)

| Label (Arabic) | Label (English) | Target | Behavior |
|----------------|-----------------|--------|----------|
| الرئيسية | Home | `/` | Direct link |
| عن تيلر | About | `/about` | Direct link |
| خدماتنا | Services | `/services` | Direct link |
| أعمالنا | Work | `/work` | Direct link |
| تواصل | Contact | `/contact` | Direct link |

**Optional (TBD):**
| مقالات | Insights | `/insights` | Direct link |

### Mobile Navigation

**Trigger:** Hamburger icon
**Behavior:** Slide-out or overlay menu
**Content:** Same as primary navigation

### Footer Navigation

| Section | Content |
|---------|---------|
| Quick Links | Mirror primary navigation |
| Services | Link to services page |
| Contact | Contact info, social links |
| Legal | Privacy, Terms (if applicable) |

### In-Page Navigation

**When used:**
- Long pages (services, about)
- Multiple sections requiring quick access

**Behavior:** Sticky sidebar or floating menu (optional)

---

## Labeling System

### PROPOSED Label Conventions

| Content Type | Label Style | Examples |
|--------------|-------------|----------|
| Primary nav | Short, action-oriented | Services, Work, Contact |
| Page titles | Descriptive | Our Services, About Teller |
| Section headers | Clear, scannable | What We Offer, Our Process |
| CTAs | Action verbs | Contact Us, View Case Study |

### Arabic Labeling Considerations

- Use common, accessible Arabic terms
- Avoid overly formal or literary language (unless brand-appropriate)
- Consider bilingual display for certain elements

---

## Search & Findability

### PROPOSED Approach

**Primary findability methods:**
1. Navigation (main method)
2. In-page links and cross-references
3. Clear page titles and headers
4. Footer quick links

**Search functionality:** Not proposed for initial launch (small site, simple structure)

### SEO Considerations

- Clear, descriptive page titles
- Logical URL structure
- Heading hierarchy (H1 → H2 → H3)
- Internal linking between related content

---

## Content Grouping

### Homepage Content Groups

| Group | Purpose | Content |
|-------|---------|---------|
| Hero | First impression, value prop | Headline, CTA |
| Introduction | What is Teller | Brief description |
| Services | What we offer | Service cards/links |
| Proof | Why trust us | Case study previews, testimonials |
| Action | Convert | CTA block |

### Services Content Groups

| Group | Purpose | Content |
|-------|---------|---------|
| Overview | Quick scan | Service summary |
| Details | Deep dive | Per-service descriptions |
| Process | How we work | Methodology/approach |
| Action | Convert | Contact CTA |

### About Content Groups

| Group | Purpose | Content |
|-------|---------|---------|
| Story | Connection | Brand narrative |
| Purpose | Understanding | Mission, vision |
| Approach | Differentiation | Methodology |
| People | Trust (TBD) | Team |
| Action | Convert | Contact CTA |

---

## User Mental Models

### Expected Mental Model

Users expect to find:

| Looking for... | Expected location |
|----------------|-------------------|
| What does Teller do | Homepage, Services |
| Who is behind Teller | About |
| Can they deliver | Work/Case Studies |
| How to reach them | Contact (obvious) |
| What they think about topics | Blog/Insights |

### Navigation Mental Model

Users expect:
- Navigation at top of page
- Logo links to homepage
- Clear, persistent navigation
- Logical groupings

---

## Taxonomy (If Applicable)

### Case Study Taxonomy (PROPOSED)

| Dimension | Values |
|-----------|--------|
| Service type | Strategy, Social, Profile, Campaign, Training |
| Industry | TBD (based on actual work) |
| Client type | Commercial, Personal |

### Blog Taxonomy (TBD)

If blog is implemented:
| Dimension | Values |
|-----------|--------|
| Category | Strategy, Storytelling, Branding, Case Study |
| Tags | Flexible |

---

## Related Documents

- [Sitemap](sitemap.md)
- [User Journeys](user-journeys.md)
- [Page Requirements](page-requirements.md)
- [Content Strategy](../06-content/content-strategy.md)

---

## Next Actions

1. [ ] Validate labels with CEO (especially Arabic)
2. [ ] Confirm content groupings
3. [ ] Finalize navigation structure
4. [ ] Plan for scalability
