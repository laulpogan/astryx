---
name: xAI (Grok)
url: https://x.ai/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

xAI is the foundation-model lab behind Grok — now formally "a division of SpaceX" (the two merged in April 2026, and the footer carries a SpaceX wordmark under "A division of"). The site sells three surfaces at once: the consumer Grok app (Chat / Build / Imagine / Voice, on web/iOS/Android/X), a unified developer API across every modality, and the Colossus supercomputer as its own credibility story (200,000 H100 GPUs, built in 122 days then doubled in 92). Positioning leans on "truth-seeking," frontier reasoning, and raw compute scale rather than a specific vertical use case.

## Typography

Self-hosted, custom-named variable font family, loaded via `next/font` and exposed as CSS variables in the bundle: `universalSans` for body/UI text and `universalSansDisplay` for headings (h1 computed: 60px / weight 500 / letter-spacing ‑1.5px). All code blocks — homepage, product pages, and the docs subdomain alike — use Geist Mono (Vercel's own monospace), confirmed via the `geistmono_*` CSS-module class on `<body>`. A recurring device: within a single H1, the first clause renders full white and the second/qualifying clause drops to mid-gray — seen identically on the homepage ("Frontier AI models / for everything you \_\_\_"), Company ("Accelerate human / scientific discovery."), Careers ("Build AI that / advances humanity."), Colossus ("Our gigafactory / of compute."), and the Grok product page.

## Color

The whole marketing site force-applies Tailwind's `dark` class to `<html>` (`color-scheme: dark`), base background `--color-jet: hsl(0 0% 4%)` = `#0a0a0a` (verified against `body` computed `rgb(10,10,10)`). Underneath sits a fully named neutral ramp defined as CSS custom properties: `jet #0a0a0a, charcoal #1a1a1a, umbra #1f2228, ink #24282d, ash #2e3033, steel #36383a, fog #7d8187, pewter #a9b2bc, dove #d5d9e2, nimbus #f1f2f6, ivory #f9f8f6, white #fff`. Semantic tokens (`--primary: var(--color-jet)`, `--accent: var(--color-sunset)`, `--background: var(--color-white)`, `--foreground: var(--color-jet)`) reveal the system is actually authored **light-first** and the dark theme is an override layer.

Contrary to the scout note's "no color accents," there is exactly **one** accent color in active use: `sunset` = `hsl(22 100% 51.6%)` = `#ff6308`, with `dawn` (`#ffd085`) as its hover state. Verified directly on the rendered "Beta" pill badge: `color`/`border-color` = `rgb(255, 99, 8)`, transparent background, `border-radius: 9999px`. It is used only for "New"/"Beta" signaling (nav badge, the "New: Anthropic partners with Colossus" banner on /colossus). A separate, unused-in-chrome jewel-tone ramp also exists in the token file — `midnight #0a1626, evenfall #3c4653, breeze #9cb8dd, dusk #6c28d9, twilight #a689fa` — and shows up only in the saturated abstract gradient-blob thumbnails on the /news blog-card grid, the single place the site allows itself real color. Mac-window traffic-light dots for code blocks are hardcoded literals: `#ff5f57 / #ffbd2e / #28c840`, each with a matching low-opacity "glow" variant. Base radius token: `--radius: .5rem`; pill controls use `9999px`.

## Layout

Built on Next.js + Tailwind (confirmed via `bg-background text-primary font-sans antialiased` utility classes and hashed CSS-module names on `<body>`). Sticky header, `4rem` tall, `backdrop-filter: blur(12px)` over `background: hsl(var(--background) / .85)` — a frosted-glass nav. Homepage order: eyebrow pill → two-tone H1 → gray subhead → dual pill CTA → a 2×2 grid of live product-surface demos (Chat / Build / Imagine / Voice) → "For developers" split section (copy left, tabbed code block right, 3 stat call-outs) → a full-bleed stat row (300M+ / 150K / 0) rendered over a faint blueprint/graph-paper grid background → "Latest news" 4-card grid → a two-tier "choose how to get started" pricing teaser → a dense six-column footer (Products/Solutions/Developers/Company/Legal, plus Download/Enterprise/Trust/Social sub-lists). Interior pages (Company, Colossus, Careers, Grok product) all reuse one hero shell — eyebrow label, two-tone H1, body copy, dual pill CTA — then diverge into numbered-list narrative blocks (01/02/03 company values on Company; 1–4 interview steps on Careers; 01/02/03 feature pillars on the Grok page). The 404 page is a clean "helpful links" 6-tile grid. `docs.x.ai` reuses the same dark shell but swaps in a left sidebar doc-tree nav, a `⌘K` search pill, and a light/dark toggle icon — the toggle the scout note describes lives on the docs subdomain, not the marketing homepage (which has no visible theme switch).

## Motion

No WebGL/3D/Three.js detected anywhere crawled — everything is CSS/DOM-level, consistent with the 2026 "all-CSS animation" trend (HeroUI, Motion.dev). Hero headlines on interior pages fade up from a dim/low-contrast state into full white/gray on load or scroll-into-view (an IntersectionObserver-style reveal). The homepage's 2×2 demo grid is genuinely animated, not a static screenshot: reloading the page shows the "Chat" panel cycling through different rotating Q&A pairs (confirmed two different question sets across two loads), the "Build" panel loops a fake agentic-coding session (file reads, greps, a "Thinking..." spinner, a diff edit) with a decorative progress percentage that changes on each load (12.30% → 15.45% → 14.75%, purely cosmetic, not real build progress), the "Imagine" panel cycles generated image/video thumbnails, and "Voice" shows a slowly rotating starfield-inside-a-glass-sphere orb.

## Hero Anatomy

A rounded outline pill ("Beta · Grok Voice Agent Builder ›") in the single accent color sits above the headline as a "what's new" pointer. H1: "Frontier AI models / for everything you \_\_\_." — two lines at 60px/500 weight, with a literal blank underscore held before the closing period (a deliberate unfinished-sentence/mad-libs device, not an animated word-cycler — it stayed blank across every reload observed). One-sentence gray subhead. Dual CTA: solid white pill ("Get API Access") + outline pill ("View Documentation"). Below the fold, instead of a hero image or video, a 2×2 grid of four live, auto-animating product demos does the work of "showing the product."

## Components of Note

- **Live 2×2 product-demo grid** (Chat/Build/Imagine/Voice), each panel a running miniature of the actual product with an "Explore →" link — the homepage doubles as its own proof-of-product carousel.
- **Code block**: mac-style traffic-light dots, a path/filename bar, a language-switcher tab row (Python / TypeScript / cURL, or Python / JS / Python(OpenAI) / JS(OpenAI) / cURL on docs), a copy button, syntax highlighting (orange strings, blue identifiers), and a subtle noise/grain gradient bleeding off the panel's edge.
- **Stat row** on a faint blueprint-grid background, with the "Colossus" wordmark set in a custom angular/slashed-O logotype inline in the stat label.
- **Numbered-section scaffold** (01/02/03, or 1–4) reused across Company, Careers, and the Grok product page as the default way to break down a linear pitch.
- **Pricing**: pill-shaped segmented toggle (Individual/Team/API), two plan cards, then a long feature-comparison table grouped by category (Models, Team and admin, Security and compliance, Support), closing on an Enterprise block with small icon+text cards (Custom rate limits, SSO & SCIM, Data residency...).
- **Blog/news card grid**: abstract colorful gradient-blob thumbnails (drawn from the dusk/twilight/breeze/midnight tokens) — the only saturated color permitted on the site — paired with tiny monoline product-icon overlays.
- **docs.x.ai**: sidebar doc-tree, `⌘K` search, and — notably — live pricing/spec cards (context window, $/M tokens) embedded directly in the "Get started" page before any prose, treating pricing as a first-class part of the docs, not a separate page.

## Voice & Copy

Mission-driven, engineering-elitist register: "frontier," "truth-seeking," "understand the universe," "first principles," "no goal is too ambitious," "move quickly and fix things," "exceptional." CTAs stay terse and imperative ("Get API Access," "Start Building," "View Open Roles"). Careers copy explicitly foregrounds a no-recruiter, meritocratic hiring process ("We generally do not use recruiters for assessments"). Product taglines double as positioning statements — "The truth-seeking AI assistant" reads as an implicit contrast against rival chatbots.

## Distinctive Moves

1. **Grayscale chrome + exactly one reserved accent.** The entire UI is built from a named neutral ramp with a single burnt-orange accent (`#ff6308`) deliberately restricted to "new/beta" signaling — proving a design-system site can read as serious AI infrastructure without a gradient-orb hero, while keeping a second, richer jewel-tone ramp alive but fenced off to editorial/blog art only.
2. **A live, auto-cycling 2×2 demo grid instead of a hero image.** Chat rotates real Q&A pairs, Build loops a fake agentic coding session with a cosmetic progress percentage, Imagine cycles generated media, Voice animates a rotating orb — zero video assets, all CSS/DOM.
3. **A portable two-tone headline device** (first clause full white, second clause dropped to mid-gray) applied identically across at least five separate pages — a systemized typographic pattern, not a one-off hero flourish.

## Buzz Evidence

Verified directly from xAI's own /news changelog (primary source): xAI formally became **"a division of SpaceX"** on April 17, 2026; xAI **raised a $20B Series E** on January 28, 2026 (the crawlset's "$200B+ valuation" figure could not be independently verified on-site — only the raise amount is confirmed primary-source); a **new compute partnership with Anthropic** was announced May 15, 2026, giving Anthropic access to "Colossus 1" (corroborated live by a "New: Anthropic partners with Colossus" banner still on the /colossus page as of this crawl). The site also carries a notably heavy government/public-sector footprint most rival lab sites don't lead with: "xAI for Government" (Aug 2025), a US Department of War contract (Dec 2025), a national AI-education partnership with El Salvador (Dec 2025), and a Saudi Arabia/HUMAIN partnership (Nov 2025).

## What Astryx Should Take

- **Ship a documented "one disciplined accent on a named neutral ramp" palette recipe.** Pick a single accent (terracotta/orange-class works) reserved _only_ for new/beta/status badges; keep ~95% of the UI on named grayscale tokens (`jet/charcoal/umbra/ink/ash/steel/fog/pewter/dove/nimbus/ivory`) rather than numeric `gray-100..900` steps — names are easier for an LLM/AGENTS.md to reference correctly ("use `fog` for secondary text") than an index number, and read as more considered in docs.
- **Adopt the two-tone headline as a documented template pattern**, not just a one-off: first clause at `text-primary`, qualifying clause at `text-secondary`/`fog` — gives any marketing H1/H2 instant hierarchy with zero new type sizes, cheap to bake into a hero-template component.
- **Build a "live demo grid" hero for the Astryx docs/marketing homepage**: four small looping component demos (a Table paginating, a Toast firing, a Form validating, a Popover appearing) in place of static screenshots — proves the library live, costs no video/WebGL budget, mirrors xAI's Chat/Build/Imagine/Voice panel.
- **Reuse the numbered 01/02/03 narrative scaffold** for Astryx's own "why Astryx" / component-authoring-guide pages — a cheap, proven way to turn a linear pitch into a scannable sequence (also seen at Cognition in this survey).
- **Borrow "spec-card-before-prose" for component docs**: docs.x.ai puts price/context/token specs in a card grid before any body copy on its overview page — map this to `{Name}.doc.mjs` pages by leading with an "at a glance" card (prop count, variant count, a11y notes) ahead of the narrative examples.

## Pages Read

- https://x.ai/
- https://x.ai/pricing
- https://x.ai/company (redirects from /about)
- https://x.ai/colossus
- https://x.ai/careers
- https://x.ai/news
- https://x.ai/grok
- https://docs.x.ai/overview
