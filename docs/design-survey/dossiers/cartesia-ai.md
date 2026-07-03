---
name: Cartesia AI
url: https://www.cartesia.ai/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Cartesia is a voice-AI infrastructure company (Sonic = real-time text-to-speech, Ink = speech-to-text, Line = voice agents) founded by four Stanford AI Lab PhDs (Karan Goel, Albert Gu, Arjun Desai, Brandon Yang) who invented State Space Models (SSMs), an alternative to the Transformer architecture. As of this crawl its flagship models Sonic-3.5 and Ink-2 (launched June 16, 2026) rank #1 on Artificial Analysis's Speech Arena and streaming Speech-to-Text leaderboards respectively — the company markets itself as "the only provider with #1 models for both speaking and listening." The marketing site is a self-hosted Astro static build; docs live on a separate Mintlify-hosted subdomain (docs.cartesia.ai).

## Typography

Directly verified from the shipped CSS (`base-layout.CNXaXCN7.css`), Tailwind-v4-style custom properties:

- `--font-sans: var(--font-abc-diatype)` — **ABC Diatype** (ABC Dinamo foundry, a premium Swiss grotesk) for body/UI text.
- `--font-display: var(--font-pp-kyoto)` — **PP Kyoto** (Pangram Pangram) for all headlines. Used at restrained sizes: H1 is `text-4xl` (2.25rem/36px), every H2 on the page is `text-2xl` (1.5rem/24px) — no oversized billboard type (`text-6xl`/3.75rem exists in the type scale but is not used for the hero).
- `--font-mono: var(--font-ibm-plex-mono)` — **IBM Plex Mono**.
- `--font-handwriting: "Homemade Apple", cursive` — a Google-fonts handwriting face, used sparingly as an annotation/accent typeface.
- Weight tokens are plain 400/500/600/700 (normal/medium/semibold/bold) — headlines use `font-medium` (500), not the ultra-light 300 "whisper" weight seen on sites like Linear/Stripe.
- Modern CSS typography features are in active use: `text-box-trim: trim-both` + `text-box-edge: cap alphabetic` (font-metric whitespace trimming, a newer CSS property) is applied for tighter vertical rhythm.

**Correction to prior scout note:** the crawlset entry for Cartesia claims the brand identity "leans on Berkeley Mono" for a "UNIX-terminal, control-panel-etched aesthetic." This does **not** hold up under direct inspection — no reference to Berkeley Mono exists anywhere in the marketing site's CSS (fonts are ABC Diatype / PP Kyoto / IBM Plex Mono / Homemade Apple) or in the docs site's CSS (Mintlify's own defaults: Inter, paperMono, CMU Typewriter Text). The Berkeley Mono foundry (U.S. Graphics Co.) does list Cartesia as a customer in its own marketing, so the claim may reflect an internal tool, an older site version, or usage outside the public web surface (e.g., dashboard/app UI at `play.cartesia.ai`, not crawled here) — but it is not verifiable on cartesia.ai or docs.cartesia.ai as of July 2026.

## Color

Tailwind v4 theme built entirely in OKLCH, light-mode-default with a small dark-mode surface reserved for embedded content (not a site-wide toggle):

- `--background: oklch(98.2% .001 106.423)` — warm near-white (not cold gray).
- `--background-content: oklch(19% 0 0)` — near-black, used for embedded dark panels/code blocks within the otherwise light page.
- A distinctive **named/poetic token layer** sits on top of the numeric scale, each mapped to an OKLCH value: `--cartesia-canvas`, `--cartesia-carbon`, `--cartesia-field`, `--cartesia-forest`, `--cartesia-growth`, `--cartesia-memory`, `--cartesia-mist`, `--cartesia-verdant`. E.g. `--cartesia-verdant: oklch(61.6% .154 148)` (green), `--cartesia-mist: oklch(90.2% .02 220.9)` (pale blue), `--cartesia-carbon: oklch(23.5% 0 0)` (near-black).
- Full numeric ramps also exist for `cartesia-blue` (50–950, e.g. `#7a92a8` at 600), `cartesia-green` (50–950, `#309d4b` at 500), `cartesia-neutral` (a warm cream-to-near-black ramp, `#fefefe`→`#111010`), and `cartesia-orange` (`#fc7a37` at 500) — orange doesn't appear on the pages crawled, likely reserved for warnings/alt states.
- Signature accent = **verdant green** (`cartesia-green-500`, `#309d4b`) — used exclusively and repeatedly to highlight one key phrase inside every major headline (see Hero Anatomy).
- `--radius: .45rem` (7.2px base), `--radius-md: calc(var(--radius) * .8)` — soft small-radius corners, not brutalist zero-radius, not deep pill shapes either.

## Layout

- Built with **Astro** (static-first, island-hydrated: `client.js`, `consent-island.js`, `deploy-layers.js`, `interaction-section.js` — small, purpose-named JS chunks rather than one large SPA bundle).
- Named grid system `.site-cols`: `grid-template-columns: [full-start] minmax(var(--site-gutter),1fr) [content-start] minmax(0,var(--site-content-max)) [content-end] minmax(var(--site-gutter),1fr) [full-end]` — full-bleed page with a centered content rail. `--site-content-max: 1248px`; `--site-gutter: 16px` (mobile) → `48px` (≥768px); `--site-nav-height: 64px` fixed.
- Docs (docs.cartesia.ai) is a **separate Mintlify-hosted Next.js app** with its own default theme (Inter/paperMono) — visually distinct from the marketing site rather than a unified skin.
- Nav: Products (Sonic / Ink / Line) · Resources (Docs / Blog / Startups / Trust Center) · Languages · Customers · Pricing, plus a Company menu (About / Careers / Research / Events). Consistent dual-CTA pattern in the header: "Try Cartesia" (primary, → play.cartesia.ai/sign-up) + "Contact Sales" (secondary).
- Pricing page: 5 horizontal tier cards (Free $0 / Pro $5 / Startup $49 / Scale $299 / Enterprise custom) broken out per-product (Sonic minutes, Ink hours, Line agent slots + $0.06/min), followed by a comparison table.

## Motion

All motion is CSS-keyframe driven — no GSAP/Framer Motion/Three.js bundle found among the linked scripts. Keyframes shipped in `base-layout.css`:

- `accordion-down` / `accordion-up` — Radix/shadcn-style primitive (FAQ, nav menus).
- `caret-blink` — text-cursor blink.
- `customer-story-fill` — auto-advancing progress-fill for the rotating testimonial/customer-story carousel.
- `transcription-slide-in` / `transcription-slide-out` — custom animation purpose-built to power the live transcript lines appearing/disappearing in the Ink speech-to-text demo.
- `enter` / `exit`, `pulse`, `spin` — generic mount/unmount and loading states.

The motion centerpiece isn't decorative — it's the **product demos themselves**: `/ink` ships a real "click or press Space to start" microphone-capture transcription demo with actual streaming transcript rendering; `/sonic` ships a live TTS player (voice "Jessica," a live 239/500 character counter, play button/waveform). This matches the 2026 "all-CSS animation, no JS runtime" trend seen elsewhere in this survey (e.g., HeroUI v3), but Cartesia's version is functional rather than purely cosmetic.

## Hero Anatomy

- H1 (exact markup): `<h1 class="font-display font-medium text-foreground text-4xl leading-tight text-balance">Architecting AI that learns and interacts <span class="text-cartesia-verdant">like humans</span></h1>` — PP Kyoto, 36px, medium weight, with "like humans" recolored in the signature green.
- Immediately below: a two-line explainer in `text-xl` body sans ("Today's AI learns from data curated by humans. We're building AI that learns from the world as it is, and gets better with every interaction.").
- Dual CTA row: "Try Cartesia" + "Contact Sales," stacked on narrow viewports (`flex-col`) → row at ≥360px.
- No splash hero image/video — the hero is announcement-led ("Meet Sonic-3.5 and Ink-2") with a headline claim ("The #1 real-time speech and transcription models... one API, no tradeoffs between quality and speed") doing the persuasive work; the interactive floor-plan/use-case visualization and product demos appear further down the page.
- **Every subsequent H2 repeats the identical pattern** — a plain-ink sentence with exactly one phrase in `text-cartesia-verdant`: "Frontier research, deployed in **every conversation**" · "The full stack for **interactive intelligence**" · "Deploy AI anywhere. **Own it everywhere.**" This is systematic across the whole page, not a one-off hero flourish.

## Components of Note

- **Live Sonic TTS widget** — voice selector ("Jessica"), live character counter (239/500), play button.
- **Live Ink STT widget** — click-or-Space-to-record, randomized conversation-starter prompts, real-time transcript rendering.
- **Interactive floor-plan diagram** — a hoverable room-by-room visualization (Fraud Detection, Customer Support, Loan Assistance, Collections, etc.) mapping voice-agent use cases to an office layout.
- **Deployment-options tile row** — Cloud / On-premise / On-device, tied to the "Deploy AI anywhere, own it everywhere" H2.
- **Pricing calculator** — pick products (Sonic/Ink/Line) + drag a minutes/hours slider (45 → 50,000+) → dynamic "Recommended plan" callout.
- **Security badge row** — HIPAA / SOC 2 / GDPR / PCI, repeated on every product page.
- **Grid-intersection diamond markers** — a recurring 12px (`size-3`) rotated square (`rotate-45`) placed at section-divider grid-line intersections, 120+ instances across the homepage, with a progressive-enhancement `[corner-shape:scoop]` (a very new CSS corner-shape property) that scoops the corners into a superellipse-like notch on browsers that support it, falling back to a plain rotated square/diamond otherwise — a small, blueprint/schematic-flavored signature detail tied to the "get the fundamentals right" engineering positioning.
- **Docs agent-readiness surface** — docs.cartesia.ai serves not just `/llms.txt` but also `/llms-full.txt`, an MCP server-card (`/.well-known/mcp/server-card.json`), an agent-card (`/.well-known/agent-card.json`), and an agent-skills index (`/.well-known/agent-skills/index.json`), all advertised via HTTP `Link` headers — one of the more complete "machine experience" doc implementations seen in this survey (goes beyond a bare `llms.txt`).

## Voice & Copy

Confident and metric-driven rather than hype-adjective-driven: "sub-90ms," "88ms latency," "9.6s sooner," "Ranked #1 in Speech Arena leaderboard & Speech to Text leaderboard by Artificial Analysis." The About/Company page anchors the whole brand on a specific, checkable technical claim rather than vague "revolutionary AI" language: "Our founding team met as PhDs at Stanford AI Lab, where we invented State Space Models (SSMs)." Stated values are plain and un-corporate: "Get the fundamentals right / Build to solve problems / Aim beyond what's possible / Be honest, with ourselves and others / Have fun with it." Blog voice is practitioner-facing, not marketing fluff — the current featured post ("A Guide to Choosing Voice AI Models," June 30 2026, by Zubin Pratap) is framed as "a practical framework for evaluating ASR, TTS, and turn-detection models against your real-world use case — not lab conditions."

## Distinctive Moves

1. **One-highlighted-phrase-per-headline as a systematic device.** Every H1/H2 on the homepage pairs a plain-ink sentence with exactly one phrase recolored in the signature verdant green (`text-cartesia-verdant`) — done consistently, not just in the hero. At a modest 36px/24px type scale (no oversized display type), this single repeatable color move is what makes the page read as branded and cohesive.
2. **Poetic OKLCH token names carrying the brand's own story.** The Tailwind v4 color tokens aren't just numbered ramps — a literary layer (`canvas`, `carbon`, `field`, `forest`, `growth`, `memory`, `mist`, `verdant`) sits on top, echoing the "AI that learns from the world" narrative directly in the design-token names. Unusually literary for a component-level Tailwind config.
3. **The demos are the real product, not a screenshot — paired with a genuinely deep agent-readable docs surface.** `/ink` runs live microphone-capture transcription in the browser; `/sonic` runs live TTS synthesis. Separately, docs.cartesia.ai ships `llms.txt` + `llms-full.txt` + an MCP server-card + an agent-card + an agent-skills index, advertised via HTTP Link headers — further into "machine experience" territory than most sites in this survey that stop at a bare `llms.txt`.

## Buzz Evidence

- Sonic-3.5 and Ink-2 launched June 16, 2026: Sonic-3.5 took #1 on the Artificial Analysis Speech Arena Leaderboard (Elo 1,218, ahead of Inworld Realtime TTS 1.5 Max at 1,194 and Google's Gemini 3.1 Flash TTS at 1,209 — per Artificial Analysis on X, and founder Karan Goel's own announcement thread); Ink-2 took #1 on Artificial Analysis's streaming Speech-to-Text leaderboard. Cartesia's positioning: "the only provider with #1 models for both speaking and listening." [S, X/Artificial Analysis + founder posts, <30d, ~70]
- $64M Series A closed March 2025, led by/including Kleiner Perkins, Index Ventures, and Dell Technologies Capital (per founder LinkedIn/X posts); total funding raised is reported inconsistently across trackers ($91M–$191M depending on Crunchbase/PitchBook/Tracxn) — flagged as unverified/conflicting rather than asserted as a single figure. No 2026 Series C found in search. [S, aggregator trackers, conflicting, ~40]
- Founding team (Karan Goel, Albert Gu, Arjun Desai, Brandon Yang) invented State Space Models (SSMs) as Stanford AI Lab PhDs — the technical-credibility anchor cited across press coverage and the company's own About page.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Adopt the "one highlighted phrase per headline" device as a low-cost brand anchor.** Instead of chasing oversized display type or gradient hero art, pick a single accent color (Astryx's own brand color) and consistently recolor exactly one phrase inside every H1/H2 across the marketing site. Cheap, systematic, and legible at modest type sizes — directly reusable in StyleX via a single token (e.g. `colors.accent`) wrapped around a `<span>`.
2. **Give design tokens a literary/poetic naming layer, not just numeric ramps.** Cartesia's `canvas/carbon/field/forest/growth/memory/mist/verdant` names turn a Tailwind-style color scale into a piece of brand storytelling. Astryx's own token docs (`$ASTRYX docs tokens`) could pair the existing numeric neutral/color scale with a small set of evocative aliases for the docs site's own marketing copy, without touching the underlying numeric API.
3. **Ship demos that are the real product, not screenshots — and go past a bare `llms.txt`.** Cartesia's `/ink` and `/sonic` pages embed the literal running product (live mic capture, live TTS playback) instead of static UI mockups; its docs subdomain advertises `llms.txt` + `llms-full.txt` + an MCP server-card + agent-card + agent-skills index via HTTP Link headers. For Astryx's own marketing/docs site, this maps directly to: embed live, interactive Astryx components in the homepage/hero (not screenshots) as the marketing content itself, and extend the AGENTS.md-driven docs system with the same layered agent-discovery surface (llms.txt → llms-full.txt → a machine-readable component/API index), since Astryx's whole pitch is being legible to coding agents.
4. **Reserve dark treatment for embedded panels, not a site-wide toggle.** Cartesia's `--background-content: oklch(19% 0 0)` is used for dark code/content blocks inside an otherwise light page rather than a header light/dark switch — a lighter-weight alternative to building full dual-theme parity everywhere, worth considering for surfaces (e.g. embedded code blocks in component docs) where only local contrast matters.
5. **Treat small CSS craft details (progressive-enhancement `corner-shape: scoop`, `text-box-trim`) as legitimate brand texture**, not gold-plating — Cartesia uses a `@supports`-gated new CSS property purely for a 12px decorative marker, which costs nothing on unsupported browsers (falls back to a plain rotated square) but reads as engineering care to anyone inspecting the site. Fits Astryx's own StyleX-native, no-JS-workaround philosophy (per the CSS-support rules in this repo's CLAUDE.md) — a good candidate for an example "polish" pattern in Astryx's own docs.

## Pages Read

- https://www.cartesia.ai/ (home — fetched raw HTML + WebFetch summary)
- https://www.cartesia.ai/_astro/base-layout.CNXaXCN7.css (linked stylesheet, fetched raw — source of all typography/color/grid/keyframe evidence above)
- https://www.cartesia.ai/_astro/highlight.C8gU7ya4.css (linked stylesheet, fetched raw)
- https://www.cartesia.ai/sonic (WebFetch)
- https://www.cartesia.ai/ink (WebFetch)
- https://www.cartesia.ai/pricing (WebFetch)
- https://www.cartesia.ai/company (WebFetch)
- https://www.cartesia.ai/launch (WebFetch)
- https://www.cartesia.ai/blog (WebFetch)
- https://docs.cartesia.ai/ (fetched raw; 308-redirects to /get-started/overview; HTTP Link header revealed llms.txt/llms-full.txt/MCP server-card/agent-card/agent-skills endpoints)
- https://docs.cartesia.ai/get-started/overview (fetched raw HTML + linked CSS chunks, checked for Berkeley Mono / font declarations)
- https://www.cartesia.ai/llms.txt (attempted — 404; llms.txt lives on the docs subdomain, not the marketing root)
