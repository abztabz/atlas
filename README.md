# Jav's Car House — Mobile Landing Page

Mobile-first landing page for **Jav's Car House**, a premium American muscle-car
rental business in Dubai, UAE. Built as a controlled reproduction of the approved
mobile UI design (black / red / white motorsport identity).

## Stack

- React 19 + TypeScript (Vite)
- Tailwind CSS v4
- Self-hosted fonts via Fontsource (Barlow Condensed, Inter, Kaushan Script)
- Hand-built SVG scene artwork (hero, fleet cards, Why-Choose backdrop) — no
  external image dependencies

## Section order (fixed by the approved design)

1. Compact mobile header
2. Cinematic hero
3. Four-item benefit strip
4. Quick booking form
5. Featured fleet
6. Why Choose Us
7. How It Works
8. Customer testimonial (placeholder content — see `src/data.ts`)
9. Trust and licensing strip
10. WhatsApp help card
11. Footer

## Development

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # typecheck + production build
npm run preview    # serve the production build
```

## Testing

End-to-end checks (booking-form validation, WhatsApp enquiry link, mobile menu,
keyboard access, section order) run with Playwright against a running dev server:

```bash
npx playwright install chromium   # one-time browser download
npm run dev &                     # in another terminal
npm run test:e2e                  # functional checks
npm run test:screens              # screenshots at 390×844, 393×852, 430×932
```

Screenshots and artifacts land in `tests/artifacts/`. Set `BASE_URL` /
`CHROMIUM_PATH` env vars to point at a different server or browser binary.

## Content notes

- Fleet cars, prices, and the customer testimonial in `src/data.ts` are
  **placeholder data** — replace with live inventory and a real review before
  launch.
- All enquiry CTAs open WhatsApp at `+971 56 447 7471`.
