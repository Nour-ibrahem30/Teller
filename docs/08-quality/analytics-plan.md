# Analytics Plan

## Purpose

This document defines the analytics strategy and implementation plan for the Teller website.

**Status:** Draft — PROPOSED  
**Last Updated:** 2026-10-26

---

## Analytics Objectives

### Business Questions to Answer

1. How much traffic is the website receiving?
2. Where is traffic coming from?
3. What pages are visitors viewing?
4. Are visitors converting (submitting contact form)?
5. What is the user journey before conversion?
6. How is the site performing (speed, errors)?

---

## Analytics Platform

### PROPOSED: Google Analytics 4

| Aspect | Details |
|--------|---------|
| Platform | Google Analytics 4 |
| Cost | Free |
| Privacy | IP anonymization enabled |
| Cookie | First-party cookies |

### Reasons for GA4

- Industry standard
- Free tier sufficient for needs
- Good integration options
- Robust reporting

---

## Event Tracking

### Automatic Events (GA4)

| Event | Trigger |
|-------|---------|
| page_view | Page loads |
| scroll | 90% scroll depth |
| click | Outbound link clicks |
| file_download | Downloads (if any) |
| first_visit | New visitor |
| session_start | New session |

### Custom Events

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| contact_form_start | Form field focused | page |
| contact_form_submit | Form submitted | page, service_interest |
| cta_click | CTA button clicked | cta_text, cta_location, destination |
| service_view | Service section viewed | service_name |
| case_study_view | Case study opened | case_study_name |
| social_click | Social link clicked | platform |

### Event Implementation

```javascript
// Contact form submission
gtag('event', 'contact_form_submit', {
  'page': window.location.pathname,
  'service_interest': selectedService
});

// CTA click
gtag('event', 'cta_click', {
  'cta_text': buttonText,
  'cta_location': section,
  'destination': destinationUrl
});
```

---

## Conversions

### Primary Conversion

| Conversion | Definition |
|------------|------------|
| Contact Form Submit | contact_form_submit event |

### Secondary Conversions

| Conversion | Definition |
|------------|------------|
| Social Follow | social_click event |
| Case Study View | case_study_view event (engagement indicator) |

### Conversion Tracking Setup

```javascript
// GA4 conversion marking (done in GA4 admin)
// Event 'contact_form_submit' marked as conversion
```

---

## User Properties

### Custom Dimensions

| Dimension | Description | Values |
|-----------|-------------|--------|
| user_language | Browser language | ar, en, etc. |
| traffic_source_initial | First traffic source | organic, direct, social |

---

## Reports & Dashboards

### Key Reports

| Report | Purpose | Frequency |
|--------|---------|-----------|
| Traffic overview | Volume, sources, trends | Weekly |
| User acquisition | Where visitors come from | Weekly |
| Engagement | Pages, time, depth | Weekly |
| Conversions | Form submissions | Weekly |
| User flow | Journey through site | Monthly |

### Custom Dashboard (PROPOSED)

| Widget | Metric |
|--------|--------|
| Total users | Users this period |
| Conversion rate | Contacts / Users |
| Top pages | Most viewed |
| Traffic sources | Acquisition channels |
| Device breakdown | Mobile vs. desktop |
| Geo breakdown | Countries |

---

## Privacy Compliance

### GDPR Considerations

| Requirement | Implementation |
|-------------|----------------|
| Cookie consent | Consent banner before tracking |
| IP anonymization | Enabled in GA4 |
| Data retention | Set to shortest needed (14 months) |
| Opt-out | Honor Do Not Track, provide opt-out |

### Cookie Consent Implementation

```javascript
// Only load GA after consent
if (userConsent === true) {
  loadGoogleAnalytics();
}
```

---

## Performance Monitoring

### Web Vitals Tracking

```javascript
// Track Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(metric => gtag('event', 'web_vitals', {
  'metric_name': 'CLS',
  'metric_value': metric.value
}));
```

### Error Tracking (Optional)

| Tool | Purpose |
|------|---------|
| GA4 errors | Basic error tracking |
| Sentry (optional) | Detailed error reporting |

---

## Implementation Checklist

### Pre-Launch

- [ ] GA4 property created
- [ ] Tracking code installed
- [ ] IP anonymization enabled
- [ ] Conversion tracking set up
- [ ] Custom events implemented
- [ ] Cookie consent implemented
- [ ] Test tracking working
- [ ] Dashboard created

### Post-Launch

- [ ] Verify data collection
- [ ] Set up automated reports
- [ ] Review first week data
- [ ] Refine tracking if needed
- [ ] Document insights process

---

## Success Metrics Mapping

| Business Objective | Analytics Metric |
|-------------------|------------------|
| Lead generation | Contact form submissions |
| Engagement | Time on site, pages/session |
| Brand awareness | Direct traffic, branded searches |
| Content performance | Page views, time on page |
| Mobile experience | Mobile conversion rate |

---

## Related Documents

- [Success Metrics](../02-business/success-metrics.md)
- [Conversion Strategy](../02-business/conversion-strategy.md)
- [Integrations](../07-architecture/integrations.md)

---

## Next Actions

1. [ ] Create GA4 property
2. [ ] Implement tracking code
3. [ ] Configure custom events
4. [ ] Set up conversions
5. [ ] Create dashboard
6. [ ] Implement cookie consent
