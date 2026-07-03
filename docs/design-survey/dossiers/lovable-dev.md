---
name: Lovable.dev
url: https://lovable.dev
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Lovable is the "vibe coding" category leader — an AI app builder where you describe an app/website in a chat prompt and it generates and deploys a working full-stack product (its own Organization schema calls it "your superhuman full stack engineer"). Founded 2023, it is one of 2026's fastest-growing startups by revenue (reported ~$500M ARR, up from $200M in 2025) and was in talks for a $12B valuation in June 2026 following a $330M Series B at $6.6B in December 2025. The marketing site is a Next.js app (Vercel-deployed) built on Tailwind v4 tokens and Base UI headless primitives, and its visual identity is built almost entirely around one joke made straight-faced: the company is named Lovable, so its hero backdrop is a giant soft-focus heart.

## Typography

- **Primary/display/body typeface: "Camera Plain Variable"** — declared as `--font-sans:"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif` in the site's Tailwind `@theme` block. This is **ABC Camera Plain** by Swiss foundry **Dinamo** (designers Fabian Harb, Fabiola Mejía, Johannes Breyer, Sascha Bente) — a neutral, toned-down grotesque modeled on 1960s–70s TV "light trap" letterforms (the holes in letters like "e"/"a" that 60s CRT blur would fill in). It is licensed and self-hosted as a variable font (`/fonts/CameraPlainVariable-c48bd243.woff2`) plus a matching italic (`CameraPlainVariableRegularItalic-8524cd9a.woff2`), both preloaded in `<head>` as LCP-critical assets — this is not a system-font placeholder, it's a paid, deliberate brand typeface.
  - **Correction to prior scout note:** the earlier note guessed a "slab-serif display (Copernicus/Tiempos Headline)." That is not supported by the live CSS. `--font-serif` is left at the generic Tailwind fallback stack (`ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`) — i.e. Lovable does **not** use a custom serif at all; the entire type system, headlines included, runs on Camera Plain.
- **Monospace: "Roboto Mono Variable"** (`--font-mono:"Roboto Mono Variable", monospace`) — used for code/technical contexts, not seen prominently in marketing copy.
- **Scale/weight**: hero H2 ("Build something Lovable") is `text-3xl`→`md:text-5xl font-semibold`; deeper section headlines run `text-4xl leading-[1.1] font-semibold tracking-tight md:text-6xl` — tight leading, semibold (not the ultra-light 200/300 weight common elsewhere in this survey's peer set), negative tracking on the larger sizes.
- The small eyebrow label above the hero ("AI App Builder") is literally the page's `<h1>` — `text-xl font-normal text-muted-foreground` — an SEO-driven H1 that is visually subordinate to the H2 marketing headline, a common but easy-to-miss SEO/design tension worth noting.

## Color

Verified from the live CSS custom properties (`.marketing-content-theme` scope, HSL triplets converted to hex):

| Token                     | HSL           | Hex       | Role                                                                                                                                                                                           |
| ------------------------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--background`            | `45 40% 98%`  | `#FCFBF8` | Page background — warm off-white, not pure white                                                                                                                                               |
| `--secondary` / `--muted` | `42 38% 95%`  | `#F7F4ED` | Card/surface background — this is the exact "#f7f4ed parchment cream" the prior scout note cited; it's the _secondary surface_ token, not the literal page background, which is a hair lighter |
| `--foreground`            | `0 0% 11%`    | `#1C1C1C` | Body/heading text — near-black, not pure black                                                                                                                                                 |
| `--border`                | `45 17% 91%`  | `#ECEAE4` | Hairline borders                                                                                                                                                                               |
| `--accent-primary`        | `225 88% 53%` | `#1E52F1` | Primary blue CTA/link accent                                                                                                                                                                   |

Beyond the standard semantic set, Lovable ships a **named "brand" palette** — evocative names instead of numeric scales (`brand-ocean`, `brand-sapphire`, `brand-twilight`, `brand-bubblegum`, `brand-flamingo`, `brand-tiger`, `brand-saffron`), each with a light background / foreground-text / saturated-primary triplet, e.g.:

- `brand-flamingo-primary` `335 100% 36%` → `#B8004C`
- `brand-tiger-primary` `14 93% 40%` → `#C53307`
- `brand-twilight-primary` `251 60% 51%` → `#5337CD`
- `brand-bubblegum-primary` `308 77% 40%` → `#B517A0`

The recurring **hero/text accent gradient band** — used both in the static hero art and in animated text (see Motion) — is a fixed five-stop sequence: `#82BCFF → #2483FF → #FF66F4 → #FF3029 → #FE7B02` (sky blue → saturated blue → hot magenta-pink → red → orange). This exact band is the brand's signature color move, reused across otherwise-separate surfaces.

Overall palette logic: warm cream/parchment neutral base + near-black text (a soft, non-clinical "paper" feel, not the cold-white or dark-mode-purple defaults common in this AI-tool survey set) with one rainbow accent reserved for a handful of high-impact moments rather than spread across the UI.

## Layout

- Next.js/Vercel app (`data-dpl-id` deployment markers), Tailwind v4 utility-class soup with an `@theme` token layer, **Base UI** (`base-ui.com`) headless component primitives visible directly in DOM attributes (`data-base-ui-navigation-menu-trigger`, `data-base-ui-click-trigger`) — the same headless library separately dossiered elsewhere in this survey, now confirmed in production use by a $6B+ company.
- Header nav: logo, mega-menu triggers (Solutions, Resources), plain links (Community, Enterprise, Pricing, Security), Log in, and a duplicated "Get started" CTA (once in-nav, once far right) plus a third "Get started" inside the mobile menu — three copies of the same CTA visible at different breakpoints/scroll states.
- Hero is `min-h-screen` (full viewport height), centered column, generous vertical padding (`py-[20vh] pb-[24vh]`, scaling to `2xl:py-48`).
- Below the hero: a `container`-scoped, `max-w-5xl` "Teams from top companies build with Lovable" logo strip, rendered as a horizontally scrolling marquee with a `linear-gradient` alpha mask fading both left and right edges to transparent — a clean fix for the "logos abruptly cut off" problem plain `overflow-x` marquees have.
- Docs live on a **separate subdomain** (`docs.lovable.dev`), with its own IA: a 3-column card grid routing to Getting Started / Features / Integrations / Tips & Tricks / Prompt Engineering / Glossary, plus a security/compliance block (SOC 2 Type II, ISO 27001:2022, GDPR) near the bottom for enterprise trust.
- Pricing page abandons the standard N-column tier-comparison grid entirely in favor of a single-column, FAQ/explainer format built around the credit system (see Components of Note).
- Enterprise page is not a self-serve pricing page at all — it's a lead-capture demo-request form (name, work email, phone, company site, open text problem statement) plus a customer-logo wall.

## Motion

- **Hero background is a single static raster image, not a continuously animating gradient.** The prior scout note's "continuously shifting blue-to-pink-to-orange gradient field" is not accurate as literally described — verified via the live DOM: the image (`img/background/pulse.webp`, preloaded at `fetchPriority="high"`) is wrapped in a `.background-enter` class (`opacity:0`) that transitions once to `.background-enter-loaded` (`opacity:1`, `animation:none`) — i.e. it's a **one-time fade-in on load**, then sits static. It is rendered at `200vw` wide, positioned to bleed off the top of the viewport (`top: calc(-75vw + 50vh)`), and blurred 4px (`filter:blur(4px)`) — a huge, soft, mostly-off-screen glow rather than a contained hero graphic.
- **The actual recurring animation is a text-reveal, not a background shift.** Multiple section headlines throughout the page (not just the hero — e.g. "Ready to build?", "Meet Lovable", "Discover … templates") use a `background-clip:text` gradient sweep: `linear-gradient(90deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 33.33%, #82BCFF 40%, #2483FF 45%, #FF66F4 50%, #FF3029 55%, #FE7B02 60%, transparent 66.67%, transparent)` at `background-size:300% 100%`, animated from `background-position:100% 0` to `0 0` over `1.2s` with per-instance `animation-delay` (implying a scroll-into-view / IntersectionObserver trigger). The effect reads as a rainbow "ink wash" sweeping left-to-right through the word once, revealing it — reusing the exact same five-color band as the static hero glow, so one motion primitive (the color band) does double duty as both static brand art and a repeatable scroll-triggered flourish.
- No WebGL/canvas/Three.js/Lottie detected anywhere in the bundle — all motion is CSS `@keyframes` + `background-position`/`opacity`, cheap and GPU-friendly.

## Hero Anatomy

Exact copy sequence, top to bottom:

1. Nav: `Get started` (top-right, first of three instances) / `Solutions` / `Resources` / `Community` / `Enterprise` / `Pricing` / `Security` / `Log in` / `Get started`
2. Eyebrow (technically the page's SEO `<h1>`): **"AI App Builder"** — small, muted-foreground, centered
3. Headline (`<h2>`, the real visual hero): **"Build something Lovable"** — plain foreground-color text (not gradient-treated)
4. Subhead: **"Create apps and websites by chatting with AI"**
5. A prompt/chat input area with a single-word primary action button: **"Build"**
6. Backdrop: the blurred, 200vw-wide rainbow heart glow (`pulse.webp`) bleeding off the top of the section, fading in once on load
7. Below the fold, immediately: **"Teams from top companies build with Lovable"** over a fading-edge logo marquee

`<title>`: "AI App Builder | Vibe Code Apps & Websites with AI, Fast." Meta description: "Build apps, websites, and digital products faster using Lovable's AI-powered platform, no deep coding skills required."

## Components of Note

- **Credit-based pricing explainer instead of a tier table.** No 3-column pricing grid, no slider calculator. Instead, plain-English task-to-cost examples make an abstract usage model concrete: _"Make the button gray" costs 0.50 credits_, _"Build me a landing page, use images" costs 1.70 credits_. Free tier: 5 build credits/day, up to 30/month.
- **Built-with-Lovable template gallery** on the homepage: nine featured templates (e-commerce store, habit tracker, portfolio, blog, and a genuinely distinct one — "Inspo Canvas," an infinite-canvas visual moodboard tool) each linking to a full template page — the "proof gallery" pattern (compare v0.app, Onlook elsewhere in this survey) but templates rather than raw prompts.
- **Base UI-driven mega-menu nav** (Solutions/Resources) — confirms a major production site using the same headless library documented in this survey's Base UI dossier entry.
- **Blog with 8 filterable category tags**: Latest, Announcements, Changelog, Inside Lovable, Development 101, Reports, Tutorials, Stories — card grid, full-width landscape images, black-on-white type, minimal accent color, metric-driven titles.
- **llms.txt is a genuine navigation hub, not a dump.** `/llms.txt` organizes the entire site into 8 sections (Product, Documentation, Guides, Use Cases, Templates, Blog, Optional) and explicitly separates "curated" vs. "full-text" documentation for LLM consumption — a mature, maintained implementation of the AI-crawler-readability trend this survey flags elsewhere (Vercel Geist's "Markdown for agents," Google's DESIGN.md).
- **Enterprise = gated demo request**, not self-serve — a plain lead form (name/work email/phone/company URL/open problem statement) plus a customer-logo wall, signaling a sales-assisted motion layered on top of an otherwise fully self-serve product.

## Voice & Copy

- The brand name is the copy's central device: "Build something **Lovable**" (headline), "Meet Lovable," multiple gradient-swept instances of the word "Lovable" itself scattered through section headers — the wordplay (lovable = able to be loved / the product name) is used relentlessly but lightly.
- Self-description (Organization JSON-LD, i.e. the copy Lovable feeds to search engines about itself): **"Lovable is your superhuman full stack engineer."**
- Careers page core values, second-person and blunt: **"You are a driver. Not a passenger." / "You care deeply." / "You want to build a legacy."** — direct-address, imperative, startup-hustle register ("Ship often," "Move fast").
- Blog titles favor concrete numbers over abstraction — dollar figures and time windows ("$85,000 in tokens," "48 hours") rather than generic "customer story" framing.
- Pricing copy translates jargon into plain tasks rather than defining "credits" abstractly — explaining the unit economics through examples, not a glossary entry.

## Distinctive Moves

1. **The hero backdrop is a literal heart, hidden in plain sight.** A huge, softly blurred (4px), concentric blue→magenta→orange glow — shaped exactly like a heart when viewed unblurred (confirmed by fetching the raw `pulse.webp` asset) — sits behind the entire hero as ambient bokeh. Nobody says "heart"; the shape does the branding work silently for a company named Lovable. It's the rare AI-startup gradient-blob hero that is actually a considered pun, not a generic aurora.
2. **One color band, two jobs.** The exact same five-stop rainbow (`#82BCFF→#2483FF→#FF66F4→#FF3029→#FE7B02`) that forms the static hero glow is reused, unmodified, as the gradient for a scroll-triggered text-clip "ink sweep" reveal on section headlines throughout the rest of the page. A single brand-color primitive does double duty as both static atmosphere and repeatable interaction — cheap to maintain, instantly recognizable.
3. **Pricing sells arithmetic, not tiers.** Instead of a feature-comparison grid, the pricing page walks through real task-to-credit costs ("gray button" = 0.50 credits) — turning an abstract usage-based billing model into something a non-technical buyer can price in their head before they build anything.

## Buzz Evidence

- **$552.5M total raised** across 4 rounds (Tracxn, 2026) [S, tracxn.com, ~90d, moderate confidence — dollar figures vary slightly by source, cross-checked against TechCrunch].
- **$330M Series B at a $6.6B valuation**, announced Dec 18, 2025, led by CapitalG and Menlo Ventures [S, techcrunch.com, ~30d as of report date, 80].
- **In talks for a $12B valuation** as of June 5, 2026 (Forbes) — round not final at time of writing [S, forbes.com, <30d, 70].
- **~$500M ARR reported for 2026**, up from ~$200M in 2025 — reached $100M ARR in 8 months, doubled to $200M four months later [S, getlatka.com / aifundingtracker.com, <30d, 60 — vendor/press-tracker figures, not a primary Lovable disclosure, treat as directional].
- Founded 2023; GitHub org `lovablelabs`; social presence at `twitter.com/lovable`, `linkedin.com/company/lovable-dev`.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **A single reused color primitive, not a decorative one-off.** Lovable's five-stop rainbow band does hero art _and_ text-reveal animation with the exact same values — cheap to build, instant brand recall. Astryx could define one signature gradient token (e.g. tied to its own brand accent) and reuse it identically across a hero backdrop image/SVG and a `stylex.keyframes` text-clip sweep on doc-page headings — one CSS custom property, two surfaces, zero extra design debt.
2. **Named brand color tokens as a _documented_, human-friendly layer over semantic tokens.** Lovable's `brand-flamingo`/`brand-tiger`/`brand-saffron` tokens (each with base/foreground/primary) sit alongside its plain `--primary`/`--secondary` semantic set. Astryx's own token docs (`$ASTRYX docs tokens`) could offer an equivalent "named palette" layer for example-theme building — more memorable in a docs UI than `blue-500`/`blue-600`, and a natural fit for Astryx's example-theme gallery already flagged from other dossiers in this survey.
3. **A one-time fade-in beats a "continuously shifting" gradient for perceived-cost/benefit.** Verified: Lovable's celebrated hero "motion" is actually a single opacity fade of a static blurred image — no WebGL, no JS animation loop, no continuous repaint. For Astryx's own marketing hero, a StyleX `@starting-style` fade-in on a static (possibly brand-shaped) background image gets 90% of the perceived polish other AI-startup sites pay a WebGL performance tax for, consistent with this survey's broader finding (studiomeyer.io retrospective) that kinetic/WebGL hero flourishes rarely ship and cost FPS.
4. **Plain-English pricing-by-example over tier grids**, if/when Astryx or its component-doc site ever needs to explain a usage-based cost model (e.g. seats, AI credits for a future agent feature) — show the arithmetic in real tasks, not a features table.
5. **llms.txt as a first-class, sectioned navigation hub**, not an auto-dump. Lovable's explicit "curated vs. full-text docs" split is a good structural precedent for Astryx's own AGENTS.md/component-docs — worth cross-referencing directly since Astryx already treats agent-readable docs as core infrastructure.
6. **Correction worth internalizing:** don't take typeface/motion claims from secondary write-ups at face value — the live CSS showed Lovable's "signature" hero motion is far more restrained (static image + one fade) than its reputation suggests, and its type system is a licensed neutral grotesque (ABC Camera Plain/Dinamo), not a slab serif. Verify against shipped CSS, not vibes, before citing a competitor's stack in Astryx's own docs.

## Pages Read

- https://lovable.dev (home page — fetched via WebFetch, plus raw HTML source retrieved directly and cross-referenced against all linked `/_next/static/chunks/*.css` bundles for font-family, CSS custom-property, gradient, and keyframe ground truth)
- https://lovable.dev/pricing
- https://lovable.dev/llms.txt
- https://lovable.dev/blog
- https://lovable.dev/careers
- https://lovable.dev/enterprise
- https://docs.lovable.dev
- https://lovable.dev/about (attempted — returned HTTP 404, page does not exist at this path)
