# Manas & Kavita — Wedding Website (PRD)

## Original Problem Statement
Premium, romantic Indian wedding website for Manas & Kavita. Full-screen kinetic hero with custom cartoon couple illustration, unique illustrations per function (Haldi, DJ Night, Wedding, Reception), countdown, scratch card, RSVP, dual venues with maps, family, hashtag, FAQ, dress code, guestbook, thank you. Palette: blush pink, lavender, white, peach, beige, gold. Glassmorphism, floating hearts, premium motion. Awwwards-level, responsive, SEO-friendly. Frontend-only (RSVP/Guestbook show thank-you, no backend).

## Architecture
- **Frontend only**: React (CRA) + Tailwind + framer-motion + lenis (smooth scroll) + react-fast-marquee + canvas-confetti. No backend/DB used.
- Fonts: Cormorant Garamond (heading), Outfit (body), Great Vibes (script).
- Content centralized in `src/data/weddingData.js`. Sections in `src/components/wedding/`.
- Custom AI-generated cartoon illustrations (hero couple + 4 functions + floral divider) hosted on CDN.

## User Choices
- No backend (RSVP & Guestbook show thank-you / update UI only).
- Event timeline: Haldi, Wedding, DJ Night, Reception (DJ after Wedding).
- AI-generated cartoon illustrations.
- Hashtag: #Manuwedskavii.
- Venues: Wedding at Hatanara (Tehsil Piploda, Ratlam); Haldi/DJ Night/Reception at Gondi Dharamsi (Tehsil Jaora, Ratlam 457336).
- Family: Groom = Khokhavat family (full); Bride = parents only.
- Dress code: Haldi light sky blue, DJ Night dark, Wedding/Reception guests' choice.

## Implemented (2027-01 build)
- Kinetic hero (masked line reveal, parallax, floating hearts), sticky navbar with smooth-scroll nav.
- Marquee, live countdown, event timeline (4 functions, numbered), interactive canvas scratch card with confetti.
- Gallery with lightbox, dress code, RSVP form (thank-you + confetti), dual-venue maps + Get Directions, Meet the Family, hashtag copy, FAQ accordion, guestbook (client-side), thank-you + footer.
- Verified end-to-end via headless Playwright: all 14 sections render (body 13.6k px), Lenis + native scroll work.

## Backlog / Next
- P1: Optional backend to persist RSVP/Guestbook + admin view.
- P2: Add photo captions/albums; music toggle; add-to-calendar buttons.
