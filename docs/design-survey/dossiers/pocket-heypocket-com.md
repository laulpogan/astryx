---
name: Pocket (heypocket.com)
url: https://heypocket.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Pocket (Open Vision Engineering Inc., YC W26, San Francisco) sells a $129 credit-card-sized AI voice-recording puck that sticks to the back of a phone via MagSafe and, with its companion app, turns meetings and conversations into transcripts, summaries, mind maps, and action items. The company raised $11M from Accel, Y Combinator, and ElevenLabs CEO Mati Staniszewski (TechCrunch, June 29 2026), has sold 130,000+ units, and reports $27M ARR growing 50% month-over-month. Its web presence spans three independently-built surfaces — a Shopify storefront, a Next.js docs site, and a Nuxt+Notion guide/help-center — which is itself the most instructive fact in this dossier.

## Typography

- **Base/body font:** Inter, self-hosted via Shopify's CDN as `.woff2` (regular `n4` / semibold `n6`), preloaded via `<link rel="preload" as="font">`. Fallback stack: `-apple-system, BlinkMacSystemFont, …`. Declared through the theme variable `var(--font-body-family)`.
- **Hero/section headlines** are set in `font-family: Inter Display` (28px, weight 600, color `#000`, centered, 68% max-width column on desktop; drops to 19–22px at smaller breakpoints). No `@font-face` for "Inter Display" was found in any fetched CSS bundle (only `JudgemeStar`, an icon font for the reviews widget, is registered) — meaning this declaration may silently fall back to the browser's default sans-serif on machines without Inter Display locally installed. **Not fully verified** — could be defined in an unfetched bundle.
- Headline copy ("Capture your mind in motion." / "Reflect. Recall. Take action without lifting a finger.") is wrapped in **`<h3>`** tags. There is no `<h1>` anywhere in the rendered homepage DOM — all marketing copy is injected by a third-party page-builder app ("Instant," see Layout) as generic `div`/`h3` blocks, not semantic Dawn-theme headings.
- **docs.heypocketai.com** (a separate Next.js/Turbopack app) independently standardizes on `var(--font-sans)` → Inter, plus a distinct `var(--font-mono)` for code/API-reference blocks — Tailwind-CSS-style variable naming, unrelated to the storefront's theme variables.
- Net hero type scale (28px) is notably modest next to peers in this survey (Resend, Cardboard, Wispr Flow all run 60–100px+ display type) — Pocket leans on product video, not oversized type, to carry the hero.

## Color

- Storefront (Shopify Dawn theme, schema v15.3.0) base tokens: `--bg-color:#ffffff`; foreground `rgb(18,18,18)` in light mode / `rgb(255,255,255)` in a dark section-scheme variant; `--border-color: rgba(0,0,0,0.1)`.
- Accent blue: `--accent-blue:#3b82f6` (Tailwind "blue-500"); a separate, more saturated CTA blue `--btn-primary` / `--btn-hover: #0171e4` drives the "Get your Pocket today" / "Add to Cart" buttons.
- Alternate Dawn color-scheme slots include a dark indigo `rgb(51,79,180)` and dark slate `rgb(36,40,51)`, used for alternating section backgrounds.
- The hero headline itself is hard-coded `color:#000`, not the theme's `--color-foreground` token — a small but real sign the page-builder content isn't wired to the theme's own design tokens.
- **docs.heypocketai.com uses a visibly different palette**: background `#fafafa`, text `#171717`/`#0a0a0a`/`#121212`, accent slate-blue `#465f8f` (not `#3b82f6`), destructive red `#fb2c36`, success green `#00c758`. Two different blues across two live subdomains of the same product — no shared token source.
- Summary: white/off-white base + blue accent (matches prior scout note), but confirmed to be **two different blues**, not one system.

## Layout

- Home is a single long-scroll Shopify page assembled almost entirely from **"Instant"** (client.instant.so), a no-code Shopify landing-page-builder app: hero video block, repeated `instant-rich-text` blocks, `instant-slider` carousels (7+ distinct slider instances detected via per-slider JSON param blocks), `instant-repeater` card grids, and accordion blocks (FAQ) — plus a native Shopify product section for the buy box.
- A **six-box bento grid** of named real-life use-case vignettes: "On the go," "Team sessions," "Workflows," "Client calls," "Home," "Deep work" — each paired with a one-line scenario and photo/video.
- **Pricing renders twice, inconsistently**, on the same page: a simple Free ($0) vs. Pro ($19.99/mo) block inside the buy section, and a separate three-tier Free / Pro ($16.59/mo billed annually) / Enterprise (custom, "Talk to Sales") card grid further down — plausibly two live A/B variants, since the bundle also loads `ABConvert-page-context` (an A/B-testing app script).
- **Reviews render twice, inconsistently, too**: a Judge.me carousel citing "624 reviews" ("Let customers speak for us") and a separate Judge.me summary widget citing "4.92 stars, 576 reviews, Trust Score 97.5" elsewhere on the same page.
- **docs.heypocketai.com** is a separate Next.js/Turbopack deployment with a classic three-part docs shell: left sidebar (Getting Started / Features / Learn / Plans / Integrations / API Reference), center content, "On this page" TOC, ⌘K search, plus a floating AI support widget from `helper-pocket.vercel.app` (the open-source "Helper" support tool).
- **guide.heypocket.com** is a third stack again: a Nuxt.js app pulling content from Notion (32 "notion" references in the bundle) as a lightweight CMS, styled as a step-by-step (0–4) onboarding card grid.
- Net: three independently built codebases stitched together by subdomain, each with its own type/color implementation — not one unified system.

## Motion

- No WebGL/canvas/3D library, GSAP, or Framer Motion detected in any fetched bundle.
- Hero-area motion is **native `<video autoplay loop muted playsinline>`** — 10 total `<video>` elements on the homepage; some autoplay/looped as ambient hero loops, others click-to-play with `controls` as testimonial/demo clips (`.mp4` and one `.mov`).
- The "Trusted by professionals at: Uber, HCA, Google, Vercel, Amazon" logo row scrolls via a pure-CSS infinite marquee (`@keyframes instant-ticker-instant-scroll-*`, duration driven by a `--duration` custom property, with `--pause-on-hover`/`--pause-on-click` support built into the Instant app's ticker primitive).
- A small looping spinner (`@keyframes instant-loading-*`) covers async page-builder content loads; a separate "Preloader" Shopify app extension fades the whole page in/out (`fadeInPreloaderApp`/`fadeOutPreloaderApp`, ~0.7s).
- Button/link interactions are plain CSS `transition` (opacity/background-color/transform, 125–325ms, ease/ease-in-out) — no spring physics, no scroll-triggered reveal library found.
- Net effect: motion budget is spent entirely on real product video + a marquee + fades, not WebGL/cursor-tracking flourish. Reads as an artifact of off-the-shelf page-builder tooling rather than a deliberate minimalist design choice.

## Hero Anatomy

- Centered two-line headline (`<h3>`, 28px/600 Inter Display, black, 68%-width column): "Capture your mind in motion." / "Reflect. Recall. Take action without lifting a finger."
- Urgency banner above/beside the headline: "🔒 Lock in up to 45% off today • Unlimited minutes • No subscription required."
- Single primary CTA button, "Get your Pocket today," in the saturated `#0171e4` blue with **square corners** (button `border-radius` token = `0` across the theme).
- Trust micro-copy directly under the CTA: "In stock · Free shipping," "First 30 days of Subscription are Free," "Unlimited minutes for Life."
- Supporting visual is an autoplay/looped native video, immediately reinforced by a second explicit section, "Introducing Pocket: A New Interface for Thought," linking to a YouTube launch film (`youtu.be/XupW9pi11MI`).
- Directly below the fold: a logo-wall marquee ("People who get things done use Pocket" / Uber, HCA, Google, Vercel, Amazon) — social proof placed above any feature explanation.

## Components of Note

- **Bento six-box "See Pocket in real life" grid** of named use-case vignettes (On the go / Team sessions / Workflows / Client calls / Home / Deep work).
- **Judge.me reviews widgets** (carousel + separate star/percentage-breakdown block) — imported wholesale from a third-party app rather than custom-built.
- **Country/shipping selector** surfaced as a first-class header nav element (15 countries) — standard for DTC hardware, unusual on a SaaS marketing site.
- **Dual, unreconciled pricing blocks** (see Layout) — a real example of "let the app render its own pricing widget" rather than one designed table.
- **FAQ accordion** organized into five labeled categories (Using Pocket / Compatibility / Security & data / Orders & shipping / Pocket for Enterprise), with B2B bulk-order FAQs woven into the same accordion as consumer FAQs.
- **`llms.txt` is an agent-commerce instruction file, not a docs index**: it directs AI shopping agents to Shopify's "Shop skill" (`shop.app/SKILL.md`) and documents a live **Universal Commerce Protocol (UCP)** endpoint — `GET /.well-known/ucp` for discovery, `POST /api/ucp/mcp` for an MCP tool list — with a full discover → search → cart → checkout → fulfill → complete flow and an explicit "checkout requires human approval" rule.
- **docs.heypocketai.com separately documents a product-side MCP server** ("Integrations → MCP Server") for connecting Pocket's own AI features to external tools (per TechCrunch, integrations include Google Calendar, OneDrive, Google Drive, Obsidian, Claude, Cursor). Pocket ships MCP on both the commerce side (agentic checkout) and the product side (agentic tool access).

## Voice & Copy

Short, declarative, rhythmic fragments dominate: "Snap. Talk. Done." / "Simple on the outside. Genius inside." / "Capture your mind in motion." Body copy leans hard on brain/memory metaphor throughout — "instant memory for your brain's best moments," "Your brain. But augmented," "Organized like your mind." Testimonials read as genuinely unpolished, first-person, occasionally repetitive ("I pre-ordered Pocket right away..." appears near-verbatim across three separate quotes) rather than agency-copywritten. FAQ voice is plain and instructional: "Press the side button. Pocket starts recording instantly and confirms with a light indicator and vibration." One line states model-agnostic AI positioning without hype adjectives: "Powered by GPT-5, Claude, Gemini, and more. Pocket is model-agnostic, always using the best tool for the thought." The single moment of aspirational register is the mission line: "We're pioneering advancements in AI hardware and software, building foundational technology that makes intelligence ambient, personal, and ever present."

## Distinctive Moves

1. **Agent-native commerce infrastructure shipped, not theorized.** `llms.txt` documents a live Universal Commerce Protocol endpoint plus an MCP checkout flow explicitly built for AI shopping agents to purchase on a human's behalf, with a hard "human approval required at checkout" rule. Other 2026 trend-docs in this survey (Webflow's report, Muzli's "Machine Experience") describe this pattern in the abstract; Pocket is a concrete, working instance of it.
2. **Real, playable video testimonials embedded natively**, not YouTube embeds or static photography — 10 `<video>` elements on the homepage, several with visible playback controls, sit alongside the lifestyle photography the prior scout note credited it with.
3. **The marketing site is visibly assembled from commodity SaaS tooling, not art-directed as one system**: Shopify Dawn + the "Instant" no-code builder + Judge.me + Klaviyo + OptiMonk + UpPromote + ABConvert + Kaching Bundles power the storefront, while a completely separate Next.js docs app and a third Nuxt+Notion guide site run in parallel — three color systems, two conflicting pricing tables, two conflicting review counts, on one product.

## Buzz Evidence

- TechCrunch, June 29 2026: "Pocket raises $11M in bet on rising demand for AI note-taking devices" — funding from Accel, Y Combinator, and ElevenLabs CEO Mati Staniszewski. `[P, techcrunch.com, verified via direct fetch 2026-07-02]`
- Y Combinator company page confirms W26 batch, founders Akshay Narisetti (CEO) and Gabriel Dymowski (co-founder), founded 2024, team of 15, $27M ARR growing ~50% month-over-month, 30,000+ units delivered within the first five months. `[P, ycombinator.com/companies/pocket, verified via direct fetch 2026-07-02]`
- TechCrunch separately cites 130,000+ units sold since launch (a later, larger cumulative figure than YC's 30,000-in-five-months stat — both are reported here rather than silently reconciled, since they likely reflect different measurement dates). The homepage's own "130,000+ Creators, Founders, and Thinkers" stat matches the TechCrunch figure.
- $129 device price, $200/year (~$16.59/mo) premium plan per TechCrunch; enterprise use cited generally (lawyers, salespeople, doctors, real estate agents, construction workers, students) without a named logo in the TechCrunch piece itself.

## What Astryx Should Take

1. **Named-vignette bento pattern, generalized.** The six-box "see it in real life" grid works because each cell pairs a short persona label with one concrete proof unit (photo/video/quote). Astryx could apply the same shape to a "who builds with Astryx" section keyed by role (design engineer, PM, a11y lead) instead of a generic logo wall.
2. **Pocket is the cautionary counter-example for token discipline.** Its most visible flaw — two different blues (`#3b82f6` storefront vs. `#465f8f` docs), two conflicting pricing tables, two conflicting review counts, a hero headline hard-coded to `#000` instead of the theme's own foreground token — is exactly what Astryx's xstyle/token system exists to prevent. Worth citing directly when arguing for keeping marketing, docs, and AGENTS.md-driven examples on one shared token file rather than letting them drift into separate builds.
3. **`llms.txt` as a real protocol document, not a vague "AI-friendly" gesture.** Pocket's file names a concrete endpoint, a tool list, and a hard safety rule. Astryx's own agent-facing surface (AGENTS.md, CLI docs) should hold to the same bar: name the actual mechanism an agent can call, not aspirational language.
4. **Un-glossy embedded proof over polished mockups.** Native, playable customer-video testimonials are a legible, cheap-to-replicate pattern for a future Astryx "built with Astryx" showcase — real screen recordings of shipped internal tools beat idealized component mockups.
5. **Modest hero type is fine when something real sits right below it.** Pocket's 28px headline (small by 2026 SaaS-hero norms) works because a video demo follows immediately. Astryx's own hero can lean on a live, running component the same way instead of defaulting to oversized display type.
6. **Hard accessibility floor to enforce, where Pocket fails it.** 121 of 172 `<img>` tags on Pocket's homepage ship `alt=""`, and there is no `<h1>` anywhere in the rendered DOM (headings are page-builder `<h3>`s only). Astryx page templates should keep semantic heading order and real alt text as a non-negotiable lint rule — Pocket is a live example of what a page-builder produces when left unchecked.

## Pages Read

- https://heypocket.com/ (home — full page fetch + raw HTML/CSS inspection, including linked `instant-*.css` and `instant-core.min.js`)
- https://heypocket.com/llms.txt
- https://docs.heypocketai.com/docs (+ linked Next.js CSS bundle)
- https://guide.heypocket.com/
- https://techcrunch.com/2026/06/29/pocket-raises-11m-in-bet-on-rising-demand-for-ai-note-taking-devices/ (secondary, funding/traction verification)
- https://www.ycombinator.com/companies/pocket (secondary, founders/traction verification)
