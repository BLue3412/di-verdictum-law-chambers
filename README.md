# DI VERDICTUM LAW CHAMBERS LLP — Website

A premium, responsive React + Vite website for an Indian law chamber, built with hand-written
custom CSS (no Tailwind/Bootstrap).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Emblem.jsx         Signature seal/monogram SVG mark, reused site-wide
    Reveal.jsx          Scroll fade-in wrapper (IntersectionObserver)
    DisclaimerModal.jsx First-visit legal disclaimer gate (I Agree / I Disagree)
    Navbar.jsx           Sticky responsive navigation
    Hero.jsx
    About.jsx
    PracticeAreas.jsx
    WhyChooseUs.jsx
    Team.jsx
    LegalProcess.jsx
    Testimonials.jsx
    LegalInsights.jsx
    FAQ.jsx
    Contact.jsx          Inquiry form + Google Maps embed
    Footer.jsx
  App.jsx                 Disclaimer gating + page composition
  index.css                All design tokens & styles
```

## What to customize before launch

- **Text content**: all copy is placeholder — replace firm history, testimonials, articles, and
  office addresses/phone/email in the relevant component files.
- **Team bios**: real content for both lawyers lives in `src/data/team.js` (sourced from the
  documents you provided). Double-check names, titles, and details there before publishing.
- **Images**: currently sourced from Unsplash as placeholders (except the two team photos and the
  firm logo, which are real). Replace `src` attributes in `Hero.jsx`, `About.jsx`, and
  `LegalInsights.jsx` with the firm's own photography.
- **Logo**: `src/assets/logo.jpeg` is the firm's real logo, rendered via `Logo.jsx`.
- **Map**: `Contact.jsx` uses a keyless Google Maps embed URL pointed at a placeholder location —
  update the `src` query with the real office address.
- **Disclaimer/Privacy/Terms**: legal text in `DisclaimerModal.jsx` is drafted per Bar Council of
  India norms — have counsel review before publishing. Per the firm's requirement, this disclaimer
  intentionally reappears on every visit/reload (see `App.jsx`) rather than being remembered.
- **No social media links**: per Bar Council of India advertising restrictions, the footer does
  not link to LinkedIn/Instagram/Twitter or any other social platform.
- **Form submission**: `Contact.jsx`'s form currently just shows a success state on submit; wire
  it up to your email service / backend endpoint of choice.

## Lawyer profile pages

Each team member on the homepage now links to a dedicated profile page at `/team/<slug>` (e.g.
`/team/mohit-hitendra-bobade`), showing their full biography, practice areas, and credentials.
Add or edit lawyers by editing the `TEAM` array in `src/data/team.js` — no other file needs to
change; `Team.jsx` and `TeamMemberPage.jsx` both read from it automatically.

**Important for deployment**: this site now uses client-side routing (React Router), so your
static host must redirect all unknown paths back to `index.html`, or a direct link/refresh on
`/team/some-slug` will 404. This project already includes:
- `public/_redirects` for Netlify
- `vercel.json` for Vercel

If you deploy elsewhere (Apache, Nginx, GitHub Pages, etc.), configure an equivalent SPA fallback
rule for that host.

## Design system

Colors, typography, spacing, and radii are defined as CSS custom properties at the top of
`src/index.css` — update the palette or type scale there and it will propagate site-wide.
