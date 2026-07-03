---
name: Resend
url: https://resend.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Resend is a developer-first transactional/marketing email API (YC W23, ~$21M raised — $3M seed + $18M Series A led by a16z, per Crunchbase) positioned as "the email platform we've always wished we had." The product surface spans a Next.js/Vercel marketing site (resend.com), a Mintlify-powered docs subsite (resend.com/docs), a CLI, an MCP server, and SDKs for nine languages/frameworks. Customer logos on the homepage span legacy enterprise (Warner Bros., Decathlon, Max/HBO) and AI-native darlings (Mistral AI, Replit, Raycast, Supabase, Payload, Anghami, Leap, Gumroad).

## Typography

Verified directly from the shipped font files (`woff2` name-table strings + filenames in the Next.js bundle) — **this corrects the prior scout note, which called the look "oversized plain sans-serif."** It is not; the display face is a serif:

- **Domaine Display Narrow Bold** (Kris Sowersby / Klim Type Foundry) — confirmed via embedded copyright string ("Copyright 2024, Kris Sowersby, Klim Type Foundry... Domaine Display Narrow Bold"). This is a **serif**, used for the big hero H1 ("Email for developers") and section H2s, at `text-[4rem] md:text-[6rem]`, `tracking-[-0.01em]`, `leading-[100%]`. Loaded as `--font-domaine`.
- **ABC Favorit** (Book + Medium weights, ABC Dinamo foundry — filenames `abc_favorit_book.woff2`/`abc_favorit_medium.woff2`) — the UI/chrome grotesk, mapped to `--font-display` and used for nav, buttons, card titles, pricing H2/H3 (`font-display effect-font-styling`).
- **Commit Mono** (Regular + Italic; confirmed via embedded strings — "Commit Mono is an anonymous and neutral programming typeface," by Eigil Nikolajsen, commitmono.com) — the code/mono face, mapped to `--font-mono`/`--font-commit-mono`.
- **Inter** (variable) — body copy fallback/base, mapped to `--font-sans`/`--font-inter`.
- Two more custom faces are wired into the CSS but not confirmed in visible use on the pages read: `--font-univers` (Univers, class `.font-univers`) and `--font-lateral` (class `.font-lateral`, sans-serif fallback) — likely reserved for a specific lockup/label element not encountered in this crawl.
- Headline treatment: `.effect-font-gradient` clips the H1/H2 text to `linear-gradient(to bottom right, #fff 30%, #ffffff80)` — a subtle white-to-50%-white sheen, not a rainbow/color gradient.
- Native `text-wrap: balance` polyfill (`self.__wrap_b` script) is wired to the hero subhead for balanced line-breaks — a small craft detail.

So the real system is a **four-typeface stack** (serif display + grotesk UI + monospace code + Inter body) — more editorial than the "sans-only dev-tool" reputation implies.

## Color

- **Marketing site is dark-first by default**, not neutral-light: `<meta name="theme-color" content="#000000">`, the `next-themes` bootstrap script defaults to `"dark"` when no `localStorage` preference exists, and the outer wrapper is `<div class="bg-black isolate">`.
- Built on **Radix Colors** conventions: alpha scales named `--black-a1`…`--black-a12`, `--gray-11`, etc., with `display-p3` wide-gamut variants alongside sRGB hex fallbacks (e.g. `--black-a1:#0000000d` / `color(display-p3 0 0 0/.05)`).
- Hero CTA button border uses a warm off-white gradient, not pure white: `linear-gradient(104deg, rgba(253,253,253,.05) 5%, rgba(240,240,228,.1) 100%)` — a faint cream tint inside an otherwise monochrome palette.
- **Docs subsite runs a different accent**: Mintlify theme variables `--primary: 17 120 102` (`#117866`, deep teal-green), `--primary-light: 74 222 128` (`#4ade80`), `--primary-dark: 22 101 52` (`#166534`), confirmed in live use on active sidebar-item highlighting (`bg-primary/10 text-primary`) and small badges/buttons (`bg-primary-dark hover:opacity-90`). Docs background vars: `--background-light: 255 255 255`, `--background-dark: 15 17 23` (`#0F1117`).
- Brand-kit page (`/brand`) itself shows only a grayscale swatch set (`#000000`, `#535353`, `#737373`, `#E5E5E5`) — the brand guidelines document a monochrome identity; the teal is docs-specific, not a brand-wide accent.
- Net effect: **marketing = pure black/white monochrome with a cream-tinted glass accent; docs = white/near-black neutral with an independent teal-green wayfinding color.** A deliberate split identity between the two subsites.

## Layout

- Hero section is `md:h-screen md:max-h-[950px]` — near-full-viewport on desktop, collapses to natural height on mobile.
- Footer is a 5-column responsive grid (`grid-cols-2 lg:grid-cols-5`) organized into **Features** (Automations, Audiences, Broadcasts, Inbound, Templates, Webhooks, Dedicated IPs), **Resources** (Changelog, Pricing, Security, SOC 2, GDPR, Brand), **Company** (About, Blog, Careers, Clubs, Customers, Humans — playful page names), plus office address ("2261 Market Street #5039, San Francisco, CA 94114") and social icons.
- Docs (`/docs`) uses **Mintlify's stock shell**: left/primary nav plus a card-grid quickstart (13 language/framework cards in a 3-column grid), a secondary "Explore" 3-card row (Emails/Domains/Webhooks), and a right-hand in-page TOC — not a bespoke docs layout.
- Pricing page runs **two separate tables** (Transactional: Free/Pro/Scale/Enterprise; Marketing/Broadcast: Free/Pro/Scale/Enterprise by contact volume) plus a "Pay-as-you-go" add-ons section (Dedicated IPs $30/mo) and a discrete "AI credits" allocation table (5–500 credits/mo by tier) — AI-credit line items are a notably 2026-specific pricing-page addition.
- Logo wall: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`, inline SVG logos (not `<img>`), monochrome (`fill="white"` in dark mode).

## Motion

Entirely CSS-driven — no evidence of WebGL/Three.js/Lottie/GSAP in the pages read (unlike several other 2026 AI-startup sites in this survey); motion is Tailwind utility + `@keyframes`:

- Named entrance animation `hero-text-slide-up-fade` (`--animate-hero-text-slide-up-fade`): `0%{opacity:0; transform:translateY(16px)} to{opacity:1; transform:translateY(0)}`, `1s ease-in-out` — applied via the `animate-hero-text-slide-up-fade` utility class to the hero text block.
- Sticky header uses a **hairline blur-mask scroll effect**: a `before` pseudo-element with `backdrop-blur-2xl backdrop-brightness-200`, masked to a 1px-tall gradient (`mask-image:linear-gradient(black,black); mask-size:100% 1px`) that fades opacity in on scroll — a more advanced CSS technique than a flat "add blur on scroll" class.
- CTA buttons are glass-styled: `backdrop-blur-[25px]`, gradient border via `bg-origin-border`, plus a tiled grain/noise texture layered on with `after:bg-[url("/static/texture-btn.png")]` — a tactile detail on an otherwise flat button.
- Nav dropdown wrapper uses `perspective-[2000px]` for a 3D-feeling open/close transition.
- Pricing cards carry a decorative `conic-gradient`/`radial-gradient` spotlight glow behind the card content, visible only in dark mode (`dark:block`).

## Hero Anatomy

1. Small **"Announcing Resend Forward"** pill above the headline, styled with a `.rainbow-border` class (gradient-bordered rounded pill) and a chevron icon — the "what's new" convention.
2. **H1: "Email for<br/>developers"** — Domaine Display Narrow Bold, `4rem`→`6rem` responsive, white-to-transparent-white gradient-clipped text.
3. Subhead: _"The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale."_ — text-balanced, `max-w-[30rem]`.
4. Dual CTA: **"Get started"** (primary, glass/gradient-border button, inverts to solid white/black text on hover) + **"Documentation"** (secondary, plain link) — sends visitors straight to signup or docs, no demo video.
5. Background: a full-bleed **"Floor background"** image (`/static/landing-page/bg-hero-1.jpg`, srcset up to 3840w) — an atmospheric glass/floor render, masked with `linear-gradient(to top, transparent 15%, black 25%)` so it fades out toward the top of the viewport. This contradicts the prior scout note's "zero hero imagery" claim — there IS a hero background image, just subtle/atmospheric rather than a literal product screenshot.
6. A second, near-duplicate hero-style headline reappears near the page's closing CTA: **H2 "Email reimagined.<br/>Available today."** — the same Domaine treatment bookends the page.

## Components of Note

- **Glass CTA buttons** — `rounded-2xl`, 2px translucent border, 25px backdrop-blur, gradient-tinted border, grain-texture overlay, white-fill hover state. A self-consistent "liquid glass" button used for every primary CTA site-wide.
- **Rainbow-border announcement pill** — reusable component for "what's new" callouts (seen for "Announcing Resend Forward").
- **Status pill in footer** — a live pulse-dot link to `/status` ("Status unknown" pre-hydration, presumably turns green/red live) — status-page transparency baked into the footer chrome, not hidden behind a separate link.
- **Interactive dashboard mockups embedded in-page**: `aria-label`s for "Email appearance mode," "Email view mode," "Select test mode," "Send test email," "Notifications alt+T" appear in the homepage bundle — the product screenshots are actual live/interactive UI states of the dashboard (test-mode toggle, email preview modes), not static images.
- **13-card SDK/quickstart grid** on `/docs` — one icon-labeled card per language (Node, Python, Ruby, Go, Java, PHP, Rust, .NET, Laravel, etc.), 3-column responsive.
- **Two-table + add-on pricing pattern** — separate Transactional vs. Marketing/Broadcast tables, a discrete "AI credits" allocation table, and a narrative "High-Volume Examples" section computing effective per-email cost at 500K/1M/2.5M sends/month.
- **CSP allowlist signals** (present but not confirmed rendering on pages read): `react-tweet.vercel.app` (likely live tweet-embed testimonials elsewhere on the site), `img.logo.dev` (dynamic customer-logo-by-domain fetching), `api.liveblocks.io`/`wss://` (real-time collab infra, likely powering a multiplayer demo), Stripe.js (billing), PostHog + Plausible + HubSpot + Reo.dev (analytics/marketing stack), FingerprintJS (`fpjs.io`, likely signup fraud detection).
- **Docs are Mintlify** (`generator: Mintlify` meta tag confirmed), with per-page Markdown alternates (`<link rel="alternate" type="text/markdown" href="/docs/introduction.md">`) and a dedicated `/llms.txt` index listing CLI, MCP Server, Skills, Documentation, OpenAPI spec, SDKs, Blog, Changelog, Handbook, Customers, Legal, Migrate sections in agent-readable form.

## Voice & Copy

Plain, technically fluent, engineer-to-engineer — no hype adjectives, no exclamation points. Representative lines:

- _"We are a team of engineers who love building tools for other engineers. Our goal is to create the email platform we've always wished we had — one that just works."_
- _"Reach humans, not spam folders."_
- Feature copy names real technical mechanisms directly rather than abstracting them: DKIM, SPF, DMARC, BIMI, VMC, DNSBLs, CAN-SPAM Act, Spamhaus.
- About page frames the founding story as an industry-frustration narrative: _"why is email stuck in the past?"_ — three founders (Zeno Rocha, Bu Kinoshita, Jonni Lundy), YC W23. Four stated principles: "Do work that inspires others," "No ego," "Keep shipping" ("ship v0, not v1"), "Default to action."
- Pricing microcopy is procedural/exact rather than salesy: _"The overage rate applies only to emails sent beyond the included volume."_

## Distinctive Moves

1. **Serif display headline, not sans** — Domaine Display Narrow (a licensed Klim Type Foundry serif) drives every big headline, paired with Commit Mono for code and ABC Favorit for UI chrome. A four-typeface editorial system on a "developer tool" site is the opposite of the generic Inter/Space-Grotesk default, and directly overturns the earlier "oversized plain sans-serif" characterization of this site.
2. **Split brand identity by surface** — the marketing site is strict black/white monochrome with a cream-tinted glass accent; the docs subsite (Mintlify) runs an entirely independent teal-green (`#117866`) accent for wayfinding. Two color systems, one company, deliberately scoped by surface (marketing persuades, docs orients).
3. **Glass-button + grain-texture micro-craft** — translucent gradient-bordered buttons with a tiled noise-texture overlay, plus a 1px hairline blur-mask trick on the sticky header — genuine CSS craft below the fold of what a quick skim would notice, executed with zero JS animation libraries (pure Tailwind + native CSS).

## Buzz Evidence

- YC W23 alum; ~$21M raised total — $3M seed + $18M Series A led by a16z (Crunchbase, accessed 2026-07-03).
- Homepage/blog reference real growth milestones ("3,000,000 users," "1,000,000 users" posts in the blog index).
- Customer logo wall spans Warner Bros., Decathlon, Max (HBO), Mistral AI, Supabase, Raycast, Replit, Gumroad, Payload — unusually broad range from legacy media/retail to 2026's AI-native darlings.
- "Announcing Resend Forward" banner indicates an actively-shipping product (new feature launch) as of this crawl.
- Acquired Briefer (per Crunchbase M&A record, Aug 2025).

## What Astryx Should Take

1. **Pair a licensed serif display face with a monospace code face and one workhorse UI sans** — Resend's Domaine + Commit Mono + ABC Favorit + Inter stack proves a dev-tool/design-system site doesn't need to default to sans-only. Astryx's marketing hero could use one distinctive serif or slab for H1s while keeping component code samples in a neutral mono, without touching the sans used inside actual components.
2. **Scope color identity per surface, not globally** — run the Astryx marketing site on its neutral/dark brand palette, but let the component-docs subsite carry its own accent (the way Resend's docs run teal against a monochrome marketing site). This avoids forcing one accent to serve both "persuade" and "orient" jobs, and maps cleanly onto Astryx's existing docs-vs-marketing split.
3. **Ship the CSS craft that's invisible on skim but reads as quality up close**: a hairline blur-mask on the sticky nav (1px-tall gradient mask on a blurred pseudo-element) and a subtle grain-texture overlay on primary buttons — both pure CSS (StyleX can express both via `stylex.create` dynamic values + `background-image`), no JS motion runtime required, consistent with StyleX's supported-feature list already in the Astryx principles doc.
4. **Treat the docs `.md` alternate + llms.txt index as table stakes, not a differentiator** — Resend ships `rel="alternate" type="text/markdown"` on every docs page plus a structured `/llms.txt`; Astryx's AGENTS.md-driven docs should expose the same per-component-doc markdown alternates so agent consumers (and Astryx's own vibe-tests) can fetch raw component docs without HTML-scraping.
5. **Interactive dashboard mockups over static screenshots** — Resend's homepage embeds actual live dashboard UI states (test-mode toggle, email-preview modes) rather than flat images; an Astryx marketing page showing components "in production" should embed real interactive Astryx components (a working form, a live theme toggle) rather than screenshots of them.

## Pages Read

- https://resend.com/ (home — raw HTML + CSS bundle fetched via curl, fonts decompiled via `woff2_decompress`)
- https://resend.com/pricing (raw HTML fetched via curl)
- https://resend.com/docs → redirects to https://resend.com/docs/introduction (raw HTML fetched via curl)
- https://resend.com/brand (raw HTML fetched via curl)
- https://resend.com/changelog (fetched, headings/prices scanned)
- https://resend.com/llms.txt (via WebFetch)
- https://resend.com/blog (via WebFetch)
- https://resend.com/about (via WebFetch)
