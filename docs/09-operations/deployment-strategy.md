# Deployment Strategy

## Status: PROPOSED

---

## Approach

**PROPOSED:** Automated deployment via Git

```
Push to main → Build → Deploy to CDN
```

## Environments

| Environment | Purpose | URL |
|-------------|---------|-----|
| Development | Local testing | localhost |
| Preview | PR review | Auto-generated |
| Production | Live site | teller.sa (TBD) |

## Hosting

**PROPOSED:** Vercel or Netlify

- Automatic deployments
- Preview URLs for PRs
- Global CDN
- Free tier likely sufficient

---

*TBD: Final decisions pending tech stack.*
