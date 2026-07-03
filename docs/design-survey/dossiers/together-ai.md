---
name: Together AI
url: https://www.together.ai
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Together AI is "the AI Native Cloud" — a full-stack infrastructure platform for running, fine-tuning, and deploying open-source and frontier AI models (serverless inference, batch inference, dedicated model/container inference, GPU clusters, fine-tuning, managed storage, sandboxing). Founded 2022, it closed an $800M Series C at an $8.3B valuation on July 1, 2026 (led by Aramco Ventures, with NVIDIA, Vista Equity, General Catalyst, Salesforce Ventures and others participating), reporting >$1.15B in annualized bookings. The site's job is investor/enterprise credibility plus developer self-serve — OpenAI-compatible API, 200+ hosted models, docs built on Mintlify.

## Typography

Three self-hosted type families, confirmed directly from the production Webflow CSS bundle (`@font-face` declarations, `cdn.prod.website-files.com/.../the-future-*.woff2`):

- **The Future** — primary sans, weights 300/400/500/700 (`the-future-light/regular/medium/bold.woff2`). Body default: `font-family:The Future,Arial,sans-serif`. This is also what the docs subdomain reports as its base font (`"The Future"` with `ui-sans-serif, system-ui` fallback) — consistent across marketing and docs.
- **The Future Mono** — matching monospace counterpart, same 300/400/500/700 weight range. Used for code/technical labels.
- **PP Neue Montreal Mono** (Pangram Pangram foundry) — a _third_, more editorial grotesk-mono, shipped in 100/400/500/700 plus regular-italic and bold-italic. This is distinct from "The Future Mono" and reads as a deliberate second voice for data callouts/labels rather than code.

Hero H1 (`.h-display-2`): **4em / weight 500 / letter-spacing -0.03em / line-height 1.1** at desktop, stepping down to 2.75em then 2.375em at narrower breakpoints — a tight, medium-weight (not bold, not light) display cut.

Docs (docs.together.ai, built on **Mintlify** — confirmed via page source): heading ~20px medium, body 14px light weight, monospace code blocks; light-mode text `#171a1e` on `#FFFFFF`.

## Color

Verified from live CSS custom properties (`--brand--*`, `--product--*` tokens in the production stylesheet):

- **Base:** `--brand--white:#fff` background, `--brand--black:#000` text. `body{background-color:var(--brand--white);color:var(--brand--black)}` — **the marketing site is light-mode by default**, not a dark/charcoal base (this corrects the prior scout note, which described a "black/charcoal base"; that read was likely from a screenshot of one dark section, not the page shell).
- **Brand accents:** `--brand--brand-orange:#fc4c02`, `--brand--dark-blue:#010120`, `--brand--brand-magneta:#ef2cc1`, `--brand--brand-purple:#caaef5`.
- **Product tint pairs/triads** (used for the hero's translucent geometry and feature icons): blue `#9bcdf5`/`#c1dff9`; cyan `#70e9f0`/`#c8f6f9`/`#ebfbfc`; orange `#febea3`/`#ffdccd`; pink `#f7b0df`/`#fde3f6`; purple `#bdbbff`/`#dfddfe`/`#ede4fc`; a separate muted `--product--purple-cards:#70549b` for card surfaces.
- **Opacity utility tokens**: `--opacity--blue-8/16/40`, `--opacity--cyan-16/40`, `--opacity--purple-8/16` (e.g. `#9bcdf514`, `#70e9f066`) — a systematic alpha-tint scale for the translucent hero shapes and hover washes, plus full black/white opacity ramps (`--shades--black-opacity-4` through `-90`).
- **Selective dark accenting, not a global dark theme:** at least one homepage/product section carries class `bg-color-darkblue` (confirmed in the `/serverless-inference` HTML) — a single dark-navy proof/benchmark section dropped into an otherwise white-canvas page, rather than a dark base with light cutouts.
- **Docs subdomain:** light mode `#FFFFFF` bg / `#171a1e` text / `#EDE9E8` borders; dark mode variant with `#2A2320` borders, `#3e4146` gray, white text. Orange accent `#FC4C02` carries through on both marketing and docs — the one color constant across surfaces.

## Layout

Built on **Webflow** (asset host `cdn.prod.website-files.com`), not a custom framework. Grid/spacing tokens are all **em-based**, not px or rem-only:

- Radius scale: `--_radius---4:.25em`, `-6:.375em`, `-8:.5em`, `-12:.75em`, `-16:1em` — a cascading step scale, conceptually parallel to shadcn's single `--radius` var but with five named steps instead of one calc().
- Spacer scale: `--_spacers---padding-global` 1.25em (mobile) → 3em (desktop); named steps `spacers--48/80/100/120` each with a mobile and desktop value (e.g. `spacers--100`: 5em → 6.25em) — a breakpoint-aware fluid spacing system, not a single fixed scale.

**Homepage flow, top to bottom:** rotating 4-item announcement-bar carousel (funding news / benchmark claim / conference invite / product launch) → nav (mega-menu dropdowns, e.g. a "Models by provider" dropdown for DeepSeek/Google/Meta/Mistral/OpenAI/Qwen) → hero (headline + subhead + dual CTA + layered geometric art) → grayscale logo wall (30+ names: Cursor, Decagon, Cohere, DeepMind, ElevenLabs, Mozilla, Salesforce) → product-pillar card grid (Serverless / Batch / Dedicated Model / Accelerated Compute / Fine-Tuning) → stat-benefit strip ("2x faster inference," "60% lower cost," "90% faster pre-training") → research-blog card rail (tagged Kernels/Agents/Inference/Architecture/Model Shaping, with ICLR/ICML/NeurIPS/MLSys conference badges) → 3 customer case-study cards with metric badges → "what's new" blog rail → footer with newsletter signup.

**Product page flow** (`/serverless-inference`): hero (headline + dual CTA + hero image) → 3-feature capability row (Adaptive Speculative Decoding / OpenAI-Compatible API w/ Python snippet / Quantization, each with checkmark bullets) → scrollable model-logo grid tagged by modality → horizontal competitor bar charts (named rivals: Fireworks, Hyperbolic, Amazon) → 2×2 deployment-options grid → compliance trust-badge row (SOC 2, ISO 27001, NVIDIA Preferred Partner) → testimonial cards.

**Case-study page flow** (`/customers/cursor`): photographic hero → 3 blunt metric callouts near the top ("72 GPUs," "Days," "Multi-DC") → client/product/industry metadata card → narrative body with bold subheadings ("Why latency is different inside an editor") → diagram illustration → related-case-study carousel. No pull-quote testimonial blocks — customer requirements are woven into the prose instead.

**Pricing page** (`/pricing`): tabbed table architecture, not cards — tabs for Chat/Vision/Image/Audio/Video/Transcribe/Embeddings/Rerank/Moderation, each a data table of model × input/output/batch cost. Separate structured comparison tables for GPU Clusters and Dedicated Inference with reserved-capacity discount tiers. No interactive slider/calculator.

**About page**: hero image → mission statement ("helping teams ship faster, scale reliably and achieve superior unit economics") → 5 stated values → partner-logo row (NVIDIA marked "Preferred Partner," Hugging Face, MongoDB) → 30+-person leadership headshot grid with "Load more" pagination.

## Motion

- **GSAP 3.11.4 core + ScrollTrigger 3.11.4 + TextPlugin 3.12.2**, loaded from cdnjs — confirmed in the raw homepage `<script>` tags. This drives scroll-triggered reveals and animated headline/counter text.
- **No native Webflow IX2 interactions** (`data-w-id` attributes) were found anywhere in the homepage HTML — motion is authored entirely through the custom GSAP layer, not Webflow's built-in interaction panel.
- Hover/interactive-state CSS transitions consistently use a custom easing curve, `cubic-bezier(.215,.61,.355,1)`, at 0.35–0.45s across buttons, cards, and borders (color/background-color/box-shadow/opacity/transform) — a deliberately chosen "settle" curve applied uniformly, not browser-default ease.
- Code blocks use **Prism.js** (`cdnjs prism 9000.0.1` line-numbers plugin) for syntax highlighting on the marketing site's embedded snippets.

## Hero Anatomy

H1: **"Build what's next on the AI Native Cloud"** (`.h-display-2`, 4em/500-weight/-0.03em tracking/1.1 line-height). Subhead: "Full-stack AI platform, powered by cutting-edge research." Background is a flat vector composition of layered translucent shapes — blue circles, intersecting purple discs, an orange hexagon — connected by a purple arrow explicitly labeled **"production inference,"** rendered on the white page canvas (not a 3D render or WebGL scene, despite reading as one at a glance). Dual CTA: "Start building" (filled primary) + "Contact Sales" (secondary). All of this sits below a persistent rotating announcement-bar carousel.

## Components of Note

- **Tabbed pricing tables** spanning 9 modality categories (Chat through Moderation) instead of tiered plan cards.
- **Named-competitor bar charts** on product pages (Together vs. Fireworks, Hyperbolic, Amazon) — benchmark claims made concrete and comparative, not just self-referential percentages.
- **Metric-badge customer cards** ("6x Cost reduction," "11x Faster Inference," "72 GPUs," "Multi-DC") standing in for both stat callouts and testimonials.
- **Mega-menu model-provider dropdown** in nav (DeepSeek/Google/Meta/Mistral/OpenAI/Qwen as first-class nav destinations, not buried in a models page).
- **Research-blog card rail** with conference-recognition badges (ICLR, ICML, NeurIPS, MLSys) functioning as an academic-credibility trust device.
- **Docs**: Mintlify-based, three-column shell, `QuickstartWrapper` components pairing prose with live code, tabbed code groups (Python/TypeScript/cURL).
- **Compliance trust-badge row** (SOC 2, ISO 27001, NVIDIA Preferred Partner) placed directly under product feature sections, not relegated to a footer or trust-center page.

## Voice & Copy

Confident infra-credibility register, not hype-adjective-driven: "AI Native Cloud," "production inference," "cutting-edge research." Stat-led rather than superlative-led — "2x faster... 60% lower cost... 90% faster pre-training" stands in place of adjectives. Mission/values copy leans aspirational-but-plain: "Intelligence should be abundant, not expensive"; "We believe open and transparent AI systems will drive innovation and create the best outcomes for society." Pricing copy is unusually plain for the category: "Transparent, flexible pricing across serverless inference, dedicated endpoints, fine-tuning, and GPU clusters. Start for free, scale on demand" — no legalese, no fine-print tone shift near the numbers.

## Distinctive Moves

1. **A literal system diagram as hero art, not an abstract gradient/orb.** The translucent circles/discs/hexagon are explicitly wired together with an arrow labeled "production inference" — the hero _is_ a simplified architecture diagram of the product, dressed as abstract art. This is a meaningfully different move from the aurora-gradient/cosmic-orb default this survey keeps finding elsewhere (Lovable, World Labs, Cluely).
2. **A three-family type system with distinct jobs**: The Future (prose/headings), The Future Mono (code), and PP Neue Montreal Mono (a separate editorial grotesk-mono for stat labels/data). Most sites in this crawlset commit to one display face plus one code mono; Together adds a third register purely for numbers/labels.
3. **Naming competitors by name in on-page bar charts** (Fireworks, Hyperbolic, Amazon) — most infra-marketing sites in this set make relative performance claims without naming who they're beating; Together does, directly on the product page.

## Buzz Evidence

$800M Series C at an **$8.3B valuation**, announced **July 1, 2026**, led by Aramco Ventures with NVIDIA, Vista Equity Partners, General Catalyst, Emergence Capital, Salesforce Ventures, March Capital, Lux Capital, and others participating; >500MW of compute capacity to be capitalized independently by new investors; >$1.15B in annualized bookings disclosed alongside the raise [P/S mixed: funding amount + date verified primary via together.ai/blog/announcing-our-series-c; $8.3B valuation figure verified secondary via TechCrunch, "Neocloud Together AI raises $800M, leaps to $8.3B valuation," 2026-07-01, <30d, tier ~85]. Up from a $305M Series B at $3.3B roughly 16 months prior — a ~2.5x valuation step.

## What Astryx Should Take

1. **Cascading em-based radius scale, named not single-var.** Together's `--_radius---4/6/8/12/16` (5 named steps) is a workable middle ground between shadcn's single calc()-derived `--radius` and a fully bespoke per-component scale — worth documenting as an alternative radius-token pattern in Astryx's tokens doc, especially since Astryx already runs em/rem-based spacing.
2. **A literal component/token-graph hero for the marketing site.** Instead of an abstract gradient or generic screenshot, render an actual simplified diagram of Astryx's own architecture (theme tokens → components → StyleX output, or an AGENTS.md → component-doc → generated-code pipeline) as flat vector art, labeled like Together's "production inference" arrow. Directly differentiates from the AI-orb/aurora-gradient default this survey keeps flagging (see Performative-UI's satire list) while staying true to what the product actually does.
3. **Reserve one dark-accent section, don't default the whole page dark.** Together's `bg-color-darkblue` single-section pattern is a cheap way to punctuate a benchmark/proof section without committing to full dark-mode-as-brand — a good default for an Astryx docs/marketing page that otherwise wants light-mode-first (matching Astryx's own light/dark theme provider, this is literally an in-page theme override, which Astryx's `stylex.when` machinery can express natively without extra JS).
4. **Named-competitor or named-alternative comparison strip**, if Astryx ever runs a "why Astryx vs. shadcn/Radix/Chakra" page — Together's willingness to chart against Fireworks/Hyperbolic/Amazon by name is a useful precedent for direct, confident positioning rather than vague "other solutions" language.
5. **A second mono for data/labels, distinct from the code mono.** Astryx already reserves monospace for code per its JSDoc/docs conventions; Together's PP Neue Montreal Mono shows a second, more editorial mono can carry stat callouts/badges in component docs (e.g. bundle-size or performance numbers on a component page) without borrowing the code font's technical register.
6. **CSS-only motion, skip the GSAP dependency.** Together's scroll reveals depend on GSAP + ScrollTrigger + TextPlugin — a JS runtime cost Astryx's StyleX-first philosophy explicitly avoids. The same reveal-on-scroll effect is achievable with `@starting-style` + `animation-timeline: view()` / CSS `@scroll-timeline`-class techniques already in Astryx's supported StyleX feature set — take the _effect_ (scroll-triggered reveal), not the _mechanism_ (GSAP).

## Pages Read

- https://www.together.ai (home; also fetched raw HTML + linked production CSS bundle directly)
- https://www.together.ai/pricing
- https://www.together.ai/llms.txt
- https://docs.together.ai (redirects; confirmed Mintlify-based)
- https://www.together.ai/blog
- https://www.together.ai/about
- https://www.together.ai/careers
- https://www.together.ai/serverless-inference (also fetched raw HTML)
- https://www.together.ai/customers/cursor
- https://www.together.ai/raise-2026
- https://www.together.ai/blog/announcing-our-series-c
