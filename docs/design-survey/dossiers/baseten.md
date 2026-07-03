---
name: Baseten
url: https://www.baseten.co
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Baseten is an AI inference platform (founded 2019) that runs open-source, custom, and fine-tuned models in production — dedicated GPU deployments, pre-optimized "Model APIs," training, and a multi-cloud "Frontier Gateway" — positioned against both raw cloud GPU rental and thin shared-endpoint providers. It closed a $1.5B Series F at a $13B valuation on June 22, 2026 (its fourth raise in 18 months), reporting 20x revenue growth and 40x inference-volume growth over the prior year. Customers cited across the site include Cursor, Notion, HubSpot, Clay, Zed, Writer, OpenEvidence, Wispr Flow, and World Labs — several of which are themselves exemplars elsewhere in this same trend survey, i.e. Baseten is literally the inference layer under other sites in this dossier set.

## Typography

- **Display/body sans — NeueAlteGrotesk.** A custom, self-hosted grotesk (two weights served as woff2: 400 regular, 600 semibold), applied via a `.font-neue` utility (`font-family: var(--font-neue-alte-grotesk)`). Verified in use on the hero H1 ("Inference is everything"), the model-apis H1 ("Model APIs made for products, not toys"), _and_ on body/sub-headline copy directly under the hero (`font-neue text-r-h4-reg`) — one grotesk family carries almost the entire page, rather than the display-serif/body-sans split common elsewhere in this survey (Cardboard, Koah).
- **Monospace — Chivo Mono** (Google font, self-hosted subset, weights 300/400, italic + normal). Applied via `.font-mono` (`font-family: var(--font-chivo-mono)`) — but used for **uppercase nav/CTA labels** ("GET STARTED"), not for code. No code blocks were found on the marketing pages crawled; Chivo Mono functions purely as a label/UI voice.
- **Math — KaTeX web fonts** (`KaTeX_Main`, `KaTeX_AMS`, `KaTeX_Math`, `KaTeX_SansSerif`, etc.) are loaded site-wide, confirming LaTeX-rendered equations exist somewhere in the site — consistent with the Research section's academic papers.
- Both custom fonts ship Arial-based "Fallback" faces with tuned `ascent-override`/`descent-override`/`size-adjust` metrics — deliberate CLS (Cumulative Layout Shift) avoidance via Next.js font-metric matching.
- **Fluid type-scale tokens** (`text-r-h0` … `text-r-h5`, `text-r-label-*`, `text-r-detail-*`, `text-r-pl/pm/ps`), each with a `-mobile` variant and a `min-[1150px]:` desktop override. Confirmed values:
  - `text-r-h0` (hero H1): mobile 3.75rem/60px (line-height 4rem, tracking ‑0.03em, weight 600) → desktop 5.5rem/88px (line-height 5rem, tracking ‑0.02em, weight 600).
  - `text-r-h1-mobile-semi`: 2.75rem/44px, line-height 3rem, tracking ‑0.03em.
  - `text-r-h2-mobile-semi`: 2.125rem/34px, line-height 2.5rem.
  - `text-r-h3-mobile-semi`: 1.375rem/22px; `text-r-h4-mobile-reg`: 1.25rem/20px; `text-r-h5-mobile-semi`: 1rem/16px.
  - `text-r-label-l`: 1rem/16px; `text-r-label-mobile-m`: 0.75rem/12px (smallest token seen).
  - All heading tokens carry negative letter-spacing (‑0.02 to ‑0.03em) — tight grotesk tracking.
- One inconsistency worth flagging: the Careers page hero H1 does **not** use the `text-r-*` token classes — it's set with raw Tailwind arbitrary values (`text-4xl md:text-[54px]/[60px] font-medium`), suggesting that page runs off a different template/CMS block than the core product pages.

## Color

Reads as "black-on-white minimal" at a glance, but the literal values are a custom neutral scale, not pure defaults, plus **one true accent that is green, not blue** (correcting the prior scout note, which called it a blue CTA — verified directly against the live CSS and markup, see below):

- Custom "fills" neutral scale (confirmed via `.bg-b-fills-*`/`.text-b-fills-*` rules): `fills-100 = #FFFFFF`, `fills-200 = #F5F8F4` (a barely-there warm/mint-tinted off-white, used for hairline section backgrounds), `fills-700 = #0E0E0E`, `fills-800 = #000000` (true black — used for body text and the dark nav/CTA fill).
- **Primary accent — `#19E76E`** (class `bg-b-bgreen-500` / `outline-b-bgreen-500`). Confirmed uses: the browser text-selection highlight (`::selection{background-color:#19e76e;color:#000}`), the primary "Get started" button's hover-reveal fill (an absolutely-positioned span that slides up from `translateY(100%)` on hover), the button's hover outline color, and small decorative rectangle "confetti" blocks scattered near the hero headline.
- **Secondary accent — `#FFA9FD`** (pink), confirmed only on the same hero decorative rectangles (thin bars, 32×16px and 128×32px), never on interactive elements — a sprinkle, not a second brand color.
- Hairline "grid-line" dividers use `#d9d9d9` dashed strokes against the `#F5F8F4` panel background (`--color:#d9d9d9; --background:#F5F8F4; --dash-size:50%`).
- No dark mode / theme toggle on the marketing site — grepped the homepage for `data-theme`, `prefers-color-scheme`, `dark-mode`, `ThemeToggle`: zero hits. It's a single committed light palette. (The separate `docs.baseten.co` subdomain, built on Mintlify, does carry its own `theme:"system"` support, independent of the marketing site.)
- Net effect: true black/white grotesk typography plus one electric-green accent reads more "engineering lab" than "AI gradient startup," but the green is more neon/saturated than the muted SaaS accents (Linear's lavender, Vercel's ink) elsewhere in this survey.

## Layout

- Hero sits in a 12-column `grid-layout`, height-capped on desktop (`h-auto md:h-[500px]`) — compact rather than full-viewport, headline+CTA occupying roughly the left half.
- Confirmed homepage flow: hero → grayscale customer-logo strip (Abridge, Clay, Cursor, Decagon, Descript, EliseAI, Gamma, Harvey, HubSpot, Lovable, Notion, OpenEvidence, Parallel, Poolside, World Labs — each logo an `<a>` linking out to the company's own site) → 4-way product grid (Dedicated Inference / Pre-optimized Model APIs / Run Training on Baseten / Frontier Gateway) → horizontally-scrolling "Try it" model-card carousel (Kimi K2.6, DeepSeek V4, GLM 5.1) → 4 platform-capability blocks → Cloud-vs-Self-hosted deployment split → 6 modality capability cards (image generation, transcription, text-to-speech, LLM runtimes, embeddings, compound AI) → 5-quote customer testimonial section (Zed, Wispr, OpenEvidence, ClickUp, Writer, each with a headshot) → footer.
- No numbered-section narrative scaffold (unlike Cognition elsewhere in this survey) — instead a stacked "pillar"-card rhythm, each section framed by the dashed grid-line hairlines described above.
- Pricing page runs three tiers (Basic free/pay-as-you-go, Pro volume-discount, Enterprise custom-quote) as cards, **plus two separate literal pricing tables underneath**: a Model-API cost-per-1M-token table (e.g. GLM 5.2 at $1.40 input) and a Dedicated-Deployment per-minute GPU rate table (T4 at $0.01052/min up through B200 at $0.16633/min). An accordion FAQ follows (`aria-controls`/`aria-expanded` — accessible disclosure pattern), including the question "Do I pay for idle time on Baseten?"
- `docs.baseten.co` runs on Mintlify: tabbed top-level nav ("Build AI applications" / "Deploy and optimize models" / "Train and fine-tune"), `Card`/`CardGroup` components in 2- and 3-column layouts, one icon per card, `llms.txt` served at both `www.baseten.co/llms.txt` and `docs.baseten.co/llms.txt`.
- Primary nav (confirmed): Products, Solutions, Resources, Research, Customers, Pricing, Models, Docs, Log in, Get started. Footer carries product/platform/deployment/modality/industry link groups plus SOC 2 Type II and HIPAA compliance badges and an "all systems normal" status-page link.

## Motion

- **Scroll/load reveal system**: elements ship with an `element-reveal` class and inline `opacity:0;visibility:hidden`, toggled via hand-tuned Tailwind-arbitrary transition classes — e.g. `duration-[236ms] cubic-bezier(0.5,0.2,0.4,1)` on CTA buttons, `duration-[618ms] cubic-bezier(0,0.6,0.5,1)` elsewhere in the hero. Durations and easings are bespoke per element, not library defaults; no GSAP, Framer Motion, or WebGL class names appear anywhere in the markup — this looks like a small in-house reveal utility built on plain CSS transitions plus (presumably) an IntersectionObserver toggle.
- **Signature CTA micro-interaction**: the primary button's green fill is an absolutely-positioned span sitting at `translateY(100%)` (hidden below the button) that slides up to reveal on hover, while the trailing chevron icon simultaneously nudges right (`group-hover/btn:translate-x-1`). This exact pattern is repeated on every primary "Get started" instance on the site (nav, hero, secondary sections).
- **Decorative confetti blocks**: small green/pink rectangles near the hero headline carry `data-scale-from`/`data-scale-to` attributes, implying a directional scale-in reveal — a lightweight decorative animation, not a particle or WebGL effect.
- **Grid-line hairlines** fade in via CSS custom properties (`--dash-size`, `--duration`, `--delay`) rather than JS-driven keyframes, framing section boundaries.
- No video, Lottie, or 3D/WebGL detected anywhere in the fetched pages — motion here is entirely CSS-transition-driven, matching the "restraint over flash" pattern several other 2026 dev-tool sites in this survey share (Cursor, Zed, opencode.ai).

## Hero Anatomy

- **H1**: "Inference is everything" — NeueAlteGrotesk, weight 600, ‑0.02em tracking, 88px on desktop (60px mobile) — a single four-word abstract claim with no attached qualifier.
- **Sub-line** immediately below, same font family at a smaller scale (`font-neue text-r-h4-reg`): "The fastest model runtimes, cross-cloud high availability, and seamless developer workflows. Powered by the Baseten Inference Stack." — the concrete product claim right under the abstract one.
- **Dual CTA**: "Get started" (primary — near-black fill, green hover-reveal, links to `login.baseten.co/sign-up`) and "Talk to an engineer" (secondary — inverse light-fill/dark-outline) — the standard self-serve + enterprise-sales fork.
- **Background**: no photography, illustration, or video — an off-white/`#F5F8F4` panel with the green(`#19E76E`)/pink(`#FFA9FD`) decorative rectangles fading in near the text. (The prior scout note's claim of a supporting dashboard visual to the right of the hero grid could not be independently re-confirmed in this pass — the hero markup inspected shows the decorative color-blocks but no dashboard/chart component; flagged as unverified rather than repeated as fact.)
- Section height-capped at 500px on desktop — a compact hero, not full-viewport.

## Components of Note

- **Grayscale wordmark customer-logo row** where every logo is a live outbound link to that customer's own site — an unusually literal trust signal rather than static proof images.
- **Horizontally-scrolling model-card carousel** with per-model "Try it" links (Kimi K2.6, DeepSeek V4, GLM 5.1/5.2) — treats a 20+-model catalog as a scannable strip instead of a dense grid or table.
- **Published GPU rate card** (literal $/minute from T4 through B200) sitting alongside token-based Model-API pricing on one page — makes two very different infra products (dedicated GPU rental vs. managed API) legible without a "contact sales" wall.
- **Research index in primary nav** — a real, dated, authored academic-paper feed (titles like "Still: Amortized KV Cache Compaction in a Single Forward Pass," "Do transformers notice their own mistakes?") with headshot bylines and a "Research"/"Position" category tag — credibility-as-marketing-surface, but as a live paper feed rather than a static timeline (compare ElevenLabs' milestone-timeline approach elsewhere in this survey).
- **Dashed "grid-line" hairline divider** that reveals along section edges via CSS custom properties — a small, reusable, GPU-cheap section-divider primitive.
- **Blog**: search bar, 9 category filter chips (Research, Model performance, AI engineering, Infrastructure, News, Community, AI models, Product, Foundations), 25-page pagination, multi-author "+X others" byline pattern.
- **Accessible accordion FAQ** on the pricing page (`aria-controls`, `aria-expanded`, `aria-label` all present per item).

## Voice & Copy

Declarative, unhedged category claims, verified verbatim against raw page HTML:

- Hero: "Inference is everything."
- Model APIs page: "Model APIs made for products, not toys."
- Careers hero: "Inference will be the largest market ever created."
- Pricing: "Production inference that won't break your product or your bank."
- About-us origin story: "We started Baseten in 2019 after seeing the same failure over and over. Strong models stuck in deployment hell. Weeks to production. Fragile infrastructure. Systems that broke the moment real traffic hit. […] So we built the platform we wanted to use ourselves."
- Careers culture copy: "We're customer obsessed, and it shows." / "The bar is high. We work hard, move fast, and care deeply about quality."

Register throughout: engineer-to-engineer, confident to the point of absolutist ("everything," "largest market ever created"), with pain-first origin storytelling and blunt cost claims ("Spend 5–10x less than closed alternatives," per the model-apis page) rather than marketing euphemism. The ambition lives entirely in the copy — the visual design stays deliberately restrained around it.

## Distinctive Moves

1. **One true accent color, and it's an electric green — not blue.** The prior scout note called this a "single blue CTA accent"; directly inspecting the live CSS and markup shows the actual accent is `#19E76E` (class `bgreen-500`), used identically for text-selection highlight, the primary CTA's hover-fill, and hero decorative blocks — with `#FFA9FD` pink appearing only as a secondary sprinkle. This is a correction to the source scout note, not a repetition of it.
2. **One custom grotesk (NeueAlteGrotesk) carries almost the entire page** — hero H1, sub-headline, and body copy all share the same font family via one `.font-neue` utility, with Chivo Mono reserved exclusively for uppercase nav/CTA micro-copy rather than code. Most peers in this survey split display/body or display/mono; Baseten collapses display and body into one voice.
3. **Numbers are published, not hidden.** Literal per-minute GPU rates (T4 → B200), literal per-model token pricing, and a live dated/authored research-paper index sit in primary nav-level content — infrastructure credibility delivered as browsable proof rather than a "talk to sales" wall.

## Buzz Evidence

- **$1.5B Series F at a $13B valuation**, announced June 22, 2026 — confirmed via Baseten's own blog post "Announcing our Series F." Its fourth fundraise in 18 months. Lead investors: Altimeter Capital, Conviction Partners, Spark Capital (co-led by Sands Capital and Wellington Management); also Battery Ventures, Blackbird, D.E. Shaw Ventures, Durable Capital Partners, Greylock, IVP, Verified Capital, and 01A.
- Self-reported growth over the prior year: revenue up 20x, inference volume up 40x.
- Customer roster overlaps heavily with other exemplars in this same trend survey (Cursor, Notion, Lovable, World Labs, Wispr Flow) — Baseten is the inference layer under several other dossiered sites.
- The prior scout note's figure of "inference volume passed 1B calls/day" could **not** be independently confirmed in this pass (not found in the Series F post or any page crawled) — flagged as unverified rather than repeated as fact.

## What Astryx Should Take

1. **Commit to one real, unusual accent color used identically everywhere** (text-selection highlight, primary-button hover-fill, and a sprinkle of decorative marks) rather than scattering several "brand" colors. Baseten's green-everywhere thread is cheap to implement and instantly recognizable — Astryx's own docs/marketing site could pick one signature accent and apply it with the same discipline (selection color, one button state, one decorative accent — nothing else).
2. **Adopt a legible, self-describing type-scale naming convention** like `text-r-{level}-{mobile|desktop}` (h0…h5, label, detail, pl/pm/ps) with explicit rem size + line-height + letter-spacing documented per breakpoint — readable even before you see the value, and a natural fit for Astryx's existing typography token docs.
3. **Publish literal numbers instead of "contact us"** wherever Astryx can (bundle size, render cost, migration effort) — Baseten's instinct to show the real $/GPU-minute and $/1M-tokens rate builds trust fast and is a cheap, concrete pattern worth carrying into any pricing/cost-facing doc surface.
4. **Offer the dashed "grid-line" hairline-reveal as a documented section-divider primitive** — a handful of CSS custom properties (dash-size, color, duration, delay) driving a fade-in dashed rule is GPU-cheap, reinforces a technical register, and is a good complement to StyleX's supported `@starting-style`/`when.ancestor` patterns already in Astryx's toolkit.
5. **Document the outline+slide-up-fill CTA hover as a Button variant/example.** It's pure CSS transform + transition (no JS animation library), on-brand for a design-system site that wants to demonstrate restrained, well-crafted motion rather than none at all — and directly implementable via `stylex.when.ancestor(':hover')` plus a translateY transition.
6. **Give docs/research-style content nav-level visibility, not footer treatment.** Baseten's Research tab sits beside Products/Pricing in primary nav; Astryx's own component docs and design-rationale notes (the `AGENTS.md`/`{Name}.doc.mjs` system) could be surfaced with the same first-class nav placement rather than buried under a generic "Resources" catch-all.

## Pages Read

- https://www.baseten.co (home — WebFetch + raw HTML/CSS via curl, cross-verified)
- https://www.baseten.co/llms.txt
- https://docs.baseten.co (+ https://docs.baseten.co/llms.txt)
- https://www.baseten.co/pricing (WebFetch + raw HTML via curl)
- https://www.baseten.co/products/model-apis/ (raw HTML via curl; attempted `/models` first — 404, correct path is `/products/model-apis/`)
- https://www.baseten.co/blog
- https://www.baseten.co/blog/announcing-our-series-f/
- https://www.baseten.co/about-us/ (raw HTML via curl)
- https://www.baseten.co/resources/careers/ (raw HTML via curl)
- https://www.baseten.co/research/
