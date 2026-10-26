# Frontend Architecture

## Purpose

This document defines the frontend architecture, including project structure, patterns, and conventions.

**Status:** Draft — PROPOSED (Technology Pending)  
**Last Updated:** 2026-10-26

---

## Architecture Overview

### PROPOSED Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion / CSS |
| Testing | Jest + React Testing Library |

---

## Project Structure

### PROPOSED Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (ar)/              # Arabic routes (default)
│   │   ├── page.tsx       # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── work/
│   │   └── contact/
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── ui/               # Base UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Input/
│   ├── layout/           # Layout components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Navigation/
│   ├── sections/         # Page sections
│   │   ├── Hero/
│   │   ├── Services/
│   │   └── CTA/
│   └── forms/            # Form components
│       └── ContactForm/
│
├── lib/                  # Utility functions
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/                # Custom React hooks
│   └── useMediaQuery.ts
│
├── styles/               # Additional styles
│   └── fonts.ts
│
├── types/                # TypeScript types
│   └── index.ts
│
└── content/              # Content (if not using CMS)
    └── services.ts
```

---

## Component Architecture

### Component Types

| Type | Location | Purpose |
|------|----------|---------|
| UI Components | `components/ui/` | Reusable, generic |
| Layout Components | `components/layout/` | Page structure |
| Section Components | `components/sections/` | Page sections |
| Form Components | `components/forms/` | Form handling |

### Component Structure

```
components/
└── ui/
    └── Button/
        ├── Button.tsx         # Component
        ├── Button.test.tsx    # Tests
        ├── Button.types.ts    # Types (if complex)
        └── index.ts           # Exports
```

### Component Guidelines

1. **Single responsibility** — One component, one job
2. **Composition** — Prefer composition over inheritance
3. **Props interface** — Define clear prop types
4. **Accessibility** — ARIA attributes, keyboard support
5. **RTL support** — Use logical properties

---

## Styling Architecture

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        arabic: ['var(--font-arabic)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
```

### RTL Support

```javascript
// Using Tailwind RTL
<div className="mr-4 rtl:ml-4 rtl:mr-0">
  {/* Content */}
</div>

// Or use logical properties
<div className="me-4">
  {/* Automatic RTL handling */}
</div>
```

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #1A7B7E;
  --color-secondary: #F5E6D3;
  --color-accent: #E07B4A;
  
  /* Typography */
  --font-arabic: 'Arabic Font', sans-serif;
  
  /* Spacing */
  --space-unit: 0.25rem;
}
```

---

## State Management

### Approach

For a brochure site, minimal state management is needed.

| State Type | Solution |
|------------|----------|
| Component state | React useState |
| Form state | React Hook Form |
| Global state | React Context (if needed) |
| Server state | Not applicable (static) |

---

## Data Fetching

### Static Generation (Preferred)

```typescript
// In page.tsx
export default async function Page() {
  // Data is fetched at build time
  const services = await getServices();
  
  return <ServicesPage services={services} />;
}
```

### If CMS Added

```typescript
// Fetch from CMS at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
```

---

## Performance Patterns

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Description"
  width={1920}
  height={800}
  priority // For above-fold images
/>
```

### Code Splitting

Automatic with Next.js App Router — each route is code-split.

### Font Loading

```typescript
// src/app/layout.tsx
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
});
```

---

## Form Handling

### Contact Form Pattern

```typescript
// Using React Hook Form
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // Handle response
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

---

## Animation Patterns

### Framer Motion Example

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {content}
</motion.div>
```

### Reduced Motion Support

```typescript
import { useReducedMotion } from 'framer-motion';

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      {content}
    </motion.div>
  );
}
```

---

## Testing Strategy

### Test Types

| Type | Tool | Coverage |
|------|------|----------|
| Unit | Jest | Utility functions |
| Component | React Testing Library | Components |
| E2E | Playwright (optional) | Critical flows |

### Component Test Example

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
```

---

## Related Documents

- [Architecture Overview](architecture-overview.md)
- [Tech Stack Evaluation](tech-stack-evaluation.md)
- [Design System](../05-design/design-system.md)
- [Component Inventory](../05-design/component-inventory.md)

---

## Next Actions

1. [ ] Finalize technology selection
2. [ ] Set up project scaffold
3. [ ] Configure development environment
4. [ ] Establish coding standards
5. [ ] Create base components
