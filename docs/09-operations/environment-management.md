# Environment Management

## Status: PROPOSED

---

## Environments

| Env | Purpose | Deploy Trigger |
|-----|---------|----------------|
| Local | Development | Manual |
| Preview | Review | Automatic on PR |
| Production | Live | Merge to main |

## Environment Variables

| Variable | Local | Production |
|----------|-------|------------|
| SITE_URL | localhost | teller.sa |
| ANALYTICS | disabled | enabled |

---

*Configure during development.*
