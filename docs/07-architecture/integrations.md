# Integrations

## Purpose

This document catalogs all third-party integrations for the Teller website.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## Integration Overview

### Confirmed Integrations

| Integration | Purpose | Status |
|-------------|---------|--------|
| Analytics | Usage tracking | PROPOSED |
| Contact form handling | Lead capture | PROPOSED |

### TBD Integrations

| Integration | Purpose | Status |
|-------------|---------|--------|
| CMS | Content management | Pending decision |
| Email service | Form notifications | Pending |
| Newsletter | Email marketing | Pending decision |

---

## Analytics Integration

### Google Analytics 4

| Attribute | Value |
|-----------|-------|
| Service | Google Analytics 4 |
| Status | PROPOSED |
| Purpose | Traffic and behavior analytics |
| Privacy | IP anonymization enabled |

**Implementation:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID', {
    anonymize_ip: true
  });
</script>
```

**Tracking events:**

| Event | Trigger |
|-------|---------|
| page_view | Page load (automatic) |
| contact_form_submit | Form submission |
| cta_click | CTA button clicks |

---

## Form Handling Integration

### Option A: Serverless Function

| Attribute | Value |
|-----------|-------|
| Service | Vercel Functions / Netlify Functions |
| Status | PROPOSED |
| Purpose | Process contact form |

**Flow:**
1. Form submission → API route
2. Validate input
3. Send email notification
4. Return success/error

**Implementation:**

```typescript
// /api/contact.ts
export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate
  const validated = contactSchema.parse(data);
  
  // Send email (via Resend, SendGrid, etc.)
  await sendEmail({
    to: 'team@teller.com',
    subject: 'New Contact Inquiry',
    body: formatEmailBody(validated)
  });
  
  return Response.json({ success: true });
}
```

### Option B: Form Service (Formspree/Netlify Forms)

| Attribute | Value |
|-----------|-------|
| Service | Formspree or Netlify Forms |
| Status | Alternative option |
| Purpose | Managed form handling |

**Pros:**
- No code for form handling
- Built-in spam protection
- Dashboard for submissions

**Cons:**
- Less customization
- Vendor dependency

---

## Email Service (For Form Notifications)

### Options

| Service | Pricing | Notes |
|---------|---------|-------|
| Resend | Free tier: 3,000/month | Modern, simple |
| SendGrid | Free tier: 100/day | Established |
| Postmark | Free tier: 100/month | Reliable delivery |
| Formspree | Included | If using their form service |

### Implementation with Resend

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@teller.com',
  to: 'team@teller.com',
  subject: 'New Contact Inquiry',
  html: emailTemplate
});
```

---

## CMS Integration (If Required)

### Options Evaluated

| CMS | Type | Pricing | Arabic Support |
|-----|------|---------|----------------|
| Sanity | Headless | Free tier | Good |
| Contentful | Headless | Free tier (limited) | Good |
| Strapi | Self-hosted | Free | Good |
| None | Hardcoded | Free | N/A |

### Integration Pattern (Sanity Example)

```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true
});

export async function getServices() {
  return client.fetch(`*[_type == "service"]`);
}
```

---

## Social Media Integration

### Social Links

| Platform | URL | Status |
|----------|-----|--------|
| Instagram | https://instagram.com/teller_storytelling | ✅ Confirmed |
| TikTok | https://tiktok.com/@teller_storytelling | ✅ Confirmed |
| Linktree | https://linktr.ee/teller_branding | ✅ Confirmed |

### Social Sharing (Optional)

If sharing buttons are added:
- Use native share API where available
- No tracking/analytics from social buttons

---

## Font Integration

### Google Fonts (If Used)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
```

### Self-Hosted Fonts (Preferred)

```css
@font-face {
  font-family: 'PrimaryFont';
  src: url('/fonts/primary.woff2') format('woff2');
  font-display: swap;
}
```

---

## Integration Security

### API Keys

| Key | Storage |
|-----|---------|
| Analytics ID | Public (client-side) |
| Email API key | Environment variable (server) |
| CMS keys | Environment variable |

### Environment Variables

```bash
# .env.local
RESEND_API_KEY=re_xxx
SANITY_PROJECT_ID=xxx
GA_MEASUREMENT_ID=G-xxx
```

---

## Related Documents

- [Architecture Overview](architecture-overview.md)
- [Security](security.md)
- [Analytics Plan](../08-quality/analytics-plan.md)

---

## Next Actions

1. [ ] Confirm form handling approach
2. [ ] Select email service
3. [ ] Decide on CMS requirement
4. [ ] Set up analytics account
5. [ ] Document API keys securely
