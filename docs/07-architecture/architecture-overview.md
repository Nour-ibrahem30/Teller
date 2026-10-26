# Architecture Overview

## Status: PROPOSED

---

## Approach: JAMstack / Static Site

**PROPOSED Architecture:**

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Content   │────▶│    Build    │────▶│     CDN     │
│  (Git/CMS)  │     │   (CI/CD)   │     │  (Global)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

## Rationale

- No backend complexity needed
- Fast global delivery
- Simple maintenance
- Excellent security
- Low cost

---

*TBD: Final architecture pending tech decisions.*
