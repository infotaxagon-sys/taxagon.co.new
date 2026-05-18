# Taxagon — Marketing & Client Portal Website

Professional marketing and client-portal website for **Taxagon**, a smart tax filing, planning, bookkeeping, and account-support service based in Austin, Texas, with specialist expertise in NRI cross-border tax needs.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for the chatbot assistant |

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `indigo-deep` | `#1E2C8C` | Primary brand, CTAs |
| `blue-electric` | `#3B82F6` | Interactive, links |
| `sky-tint` | `#EEF2FF` | Surface backgrounds |
| `amber-gold` | `#F5C242` | Highlights, referral badge |
| `green-success` | `#22C55E` | Check icons, success states |

**Fonts:** Sora (700/800 display) · Inter (400/500 body) · Plus Jakarta Sans (italic accent)

## Routing

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/pricing` | Pricing |
| `/contact` | Contact |
| `/tax-tools` | Tax Tools |
| `/tax-tools/:section` | Tax Tools (anchored) |
| `/services/individual` | Individual Tax Filing |
| `/services/business` | Business Tax |
| `/services/fbar` | FBAR & Foreign Reporting |
| `/services/nri` | Indian Tax / NRI |
| `/services/bookkeeping` | Bookkeeping & CFO |
| `/services/passport` | NRI Passport & Consular |
| `/login` | Login (stub UI) |
| `/dashboard` | Dashboard (mock data) |

## TODOs / Integration Points

- `src/lib/chatbot.ts` — Replace stub with real Gemini API
- `src/lib/auth.ts` — Integrate Firebase Auth
- `src/pages/Contact.tsx` — Wire form to real `/api/contact` endpoint
- `src/pages/Login.tsx` — Connect Google OAuth to Firebase Auth
