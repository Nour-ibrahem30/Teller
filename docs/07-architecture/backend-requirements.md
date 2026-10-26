# Backend Requirements

## Purpose

This document evaluates backend requirements for the Teller website.

**Status:** Draft — Analysis  
**Last Updated:** 2026-10-26

---

## Summary

**PROPOSED:** No custom backend required for initial launch.

The Teller website is a brochure/portfolio site that can be fully served as a static site with minimal server-side functionality.

---

## Backend Needs Analysis

### Features Requiring Server Logic

| Feature | Server Needed? | Solution |
|---------|----------------|----------|
| Page rendering | No | Static Site Generation |
| Contact form | Minimal | Serverless function or form service |
| Analytics | No | Client-side (GA4) |
| Email sending | Minimal | Third-party email API |
| Content storage | No/Maybe | Static files or CMS |
| Image serving | No | CDN with optimization |
| User auth | No | Not required |
| Database | No | Not required |

### Conclusion

Only the contact form requires any server logic, which can be handled by:
1. A serverless function (API route)
2. A form-as-a-service provider

---

## Contact Form Backend

### Serverless Function Approach

```typescript
// /api/contact/route.ts (Next.js App Router)
import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate
    const data = schema.parse(body);
    
    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }); // Silently ignore bots
    }
    
    // Rate limiting check (implement based on platform)
    
    // Send email notification
    await sendNotificationEmail(data);
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Form Service Approach

Using Formspree or similar:
- No backend code required
- Configure in form HTML
- Dashboard for submissions
- Email notifications included

---

## What's NOT Needed

### ❌ Custom Database

No data storage requirements:
- No user accounts
- No dynamic content (CMS handles if needed)
- Form submissions sent to email

### ❌ Authentication System

No user-specific features:
- No logins
- No personalization
- No protected content

### ❌ Custom API

No complex data operations:
- Content is static
- No data aggregation
- No complex business logic

### ❌ Background Jobs

No async processing needed:
- No scheduled tasks
- No heavy computation
- No queue processing

---

## If Requirements Change

### If Blog with Comments

Would need:
- Comment storage (database or service)
- Moderation system
- Spam protection

**Recommendation:** Use third-party (Disqus, Giscus)

### If Client Portal

Would need:
- User authentication
- Database for user data
- Authorization logic
- Session management

**Recommendation:** Out of scope for brochure site

### If E-commerce

Would need:
- Complete backend system
- Payment processing
- Order management
- Inventory (if applicable)

**Recommendation:** Not applicable to service business

---

## Related Documents

- [Architecture Overview](architecture-overview.md)
- [Integrations](integrations.md)
- [Security](security.md)

---

## Next Actions

1. [ ] Confirm no backend needed with stakeholders
2. [ ] Choose form handling approach
3. [ ] Document in architecture decisions
