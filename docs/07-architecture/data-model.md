# Data Model

## Purpose

This document defines the content data structures for the Teller website.

**Status:** Draft — Content Structure Only (No Database)  
**Last Updated:** 2026-10-26

---

## Overview

The Teller website does not require a traditional database. This document defines content structures that would be used whether content is:
- Hardcoded in TypeScript
- Stored in Markdown files
- Managed in a headless CMS

---

## Content Entities

### Service

Represents a service offering.

```typescript
interface Service {
  id: string;                    // Unique identifier
  slug: string;                  // URL slug
  title: string;                 // Service name
  titleAr: string;               // Arabic title
  description: string;           // Brief description
  descriptionAr: string;         // Arabic description
  fullDescription?: string;      // Detailed description
  fullDescriptionAr?: string;    // Arabic detailed
  benefits: string[];            // List of benefits
  benefitsAr: string[];          // Arabic benefits
  icon?: string;                 // Icon reference
  order: number;                 // Display order
  relatedCaseStudies?: string[]; // Related case study IDs
}
```

### CaseStudy

Represents a work example/case study.

```typescript
interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  client?: string;               // Client name (if permitted)
  clientAr?: string;
  industry: string;
  industryAr: string;
  services: string[];            // Service IDs used
  thumbnail: Image;
  heroImage: Image;
  challenge: string;
  challengeAr: string;
  approach: string;
  approachAr: string;
  solution: string;
  solutionAr: string;
  results: string;
  resultsAr: string;
  metrics?: Metric[];            // Quantifiable results
  testimonial?: Testimonial;
  gallery?: Image[];
  publishedAt: Date;
  featured: boolean;
}

interface Metric {
  value: string;                 // "40%", "200+"
  label: string;                 // "increase in leads"
  labelAr: string;
}
```

### Testimonial

Represents a client testimonial.

```typescript
interface Testimonial {
  id: string;
  quote: string;
  quoteAr: string;
  author: string;
  authorAr?: string;
  role: string;
  roleAr: string;
  company: string;
  companyAr?: string;
  image?: Image;
  caseStudyId?: string;          // Associated case study
}
```

### TeamMember (TBD)

Represents a team member (if team is featured).

```typescript
interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio?: string;
  bioAr?: string;
  image: Image;
  socialLinks?: SocialLink[];
  order: number;
}

interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram';
  url: string;
}
```

### BlogPost (TBD)

If blog is implemented.

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;               // Markdown/MDX
  contentAr: string;
  author: TeamMember | string;
  category: string;
  tags: string[];
  thumbnail: Image;
  publishedAt: Date;
  updatedAt?: Date;
  featured: boolean;
}
```

### Image

Common image structure.

```typescript
interface Image {
  src: string;                   // Image URL/path
  alt: string;                   // Alt text
  altAr: string;                 // Arabic alt text
  width?: number;
  height?: number;
}
```

### ContactSubmission

Form submission structure (for processing, not storage).

```typescript
interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;              // Service interested in
  message: string;
  submittedAt: Date;
  source?: string;               // Page submitted from
}
```

---

## Content Relationships

```
Service
  │
  └──→ CaseStudy (many)
         │
         └──→ Testimonial (optional, one)

TeamMember
  │
  └──→ BlogPost (many, if author)
```

---

## Data in Code (No CMS)

### Example Implementation

```typescript
// content/services.ts
export const services: Service[] = [
  {
    id: 'storytelling-strategy',
    slug: 'storytelling-strategy',
    title: 'Storytelling Strategy Development',
    titleAr: 'تطوير استراتيجية السرد',
    description: 'Customized storytelling strategies for brands',
    descriptionAr: 'استراتيجيات سرد مخصصة للعلامات التجارية',
    benefits: ['Clarify brand message', 'Connect with audience'],
    benefitsAr: ['توضيح رسالة العلامة', 'التواصل مع الجمهور'],
    order: 1,
  },
  // ...
];
```

---

## Data in CMS

### Sanity Schema Example

```typescript
// schemas/service.ts
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
    },
    // ...
  ],
};
```

---

## Related Documents

- [Content Inventory](../06-content/content-inventory.md)
- [CMS Evaluation](cms-evaluation.md)
- [Frontend Architecture](frontend-architecture.md)

---

## Next Actions

1. [ ] Finalize content types needed
2. [ ] Decide on CMS vs. code approach
3. [ ] Create content schema
4. [ ] Implement data layer
