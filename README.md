# Carlos Reyes Lawn Service — Marketing Site

Single-page marketing site built with Next.js (App Router) + TypeScript + Tailwind CSS, configured for **static export**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build
```

This writes a fully static site to `out/`. Deploy that folder to:

- **Cloudflare Pages** — build command `npm run build`, output dir `out`
- **GitHub Pages** — push `out/` (or use an action)
- **Netlify** — build command `npm run build`, publish dir `out`

## Editing content

- Business facts (name, phone, email, service area, offer) live in [`lib/business.ts`](lib/business.ts) — change once, updates everywhere.
- Sections are componentized in [`components/`](components): `Header`, `Hero`, `Services`, `WhyUs`, `Reviews`, `Offer`, `Contact`, `Footer`.

## Contact form

The quote form defaults to opening a prefilled `mailto:` to the business inbox.
To send through Formspree instead, set the endpoint in [`components/Contact.tsx`](components/Contact.tsx):

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
```

That's the only change needed — the form already POSTs the fields when an endpoint is present.

## SEO

- Metadata + Open Graph tags in [`app/layout.tsx`](app/layout.tsx).
- `LocalBusiness` JSON-LD (name, phone, area served, 5.0 aggregate rating) is injected in the same file.
- Google Search Console: uncomment the `google-site-verification` meta tag in `app/layout.tsx` and paste your content value.
