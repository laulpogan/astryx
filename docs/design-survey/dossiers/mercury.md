---
name: Mercury
url: https://mercury.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Mercury is a venture-backed fintech ($5.2B valuation as of its May 2026 Series D) offering business banking, cards, payments, invoicing, and treasury tooling to startups — banking services delivered through partner banks (Choice Financial Group, Column N.A.), with a federal bank charter application pending OCC approval. It is repeatedly cited in 2026 design roundups as the reference case for "banking designed like a tech product": a fintech that pairs an editorial, magazine-grade visual system with a genuinely modular multi-hue design-token architecture underneath, and that has folded an agentic AI assistant (Mercury Command) directly into the core banking product rather than bolting on a chatbot.

## Typography

- **UI/body sans**: a custom variable font called **Arcadia** (`--font-arcadia`), weight axis roughly 360–500 — deliberately avoiding the standard light/bold binary most SaaS grotesks use. Confirmed via `@font-face{font-family:arcadia; font-weight:360 500}` in the shipped CSS.
- **Display sans**: a second custom variable cut, **Arcadia Display** (`--font-arcadia-display`), weight axis ~320–480, used for oversized headlines. Some Arcadia Display classes explicitly enable the `ss01` stylistic set (`font-feature-settings:"ss01"`) — a deliberate alternate-glyph choice, not a default.
- **Serif accent**: **Tiempos Headline** (Klim Type Foundry), shipped in regular, and italic at weights 300/400/500 (`--font-tiempos-headline`), plus a second cut **Tiempos Fine** (`--font-tiempos-fine`) referenced separately (likely long-form/editorial body use, e.g. blog). Italic Tiempos reads as the "emphasis word inside a sans headline" device — an editorial register borrowed from magazine typesetting, not a generic SaaS look.
- **Mono**: **IBM Plex Mono** (`--font-ibm-plex-mono`, aliased to `--font-mono`) for numeric/data/code contexts; fallback stack `ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,...`.
- **Fluid sizing**: headline sizes use `clamp()` tied to `vw`, e.g. `clamp(2.625rem,.979rem + 4.116vw,6rem)` (42px→96px) and `clamp(1.75rem,.683rem + 2.668vw,3.938rem)` — continuous scaling, not fixed breakpoint jumps. A discrete type scale also exists (`--text-base:1rem` through `--text-7xl:3.438rem`).
- `font-feature-settings:"liga" off,"clig" off` is applied in at least one context (ligatures disabled — consistent with tabular/numeric display needs even though a literal `tabular-nums` declaration wasn't found in the bundle).
- A secondary source (community-maintained "awesome-claude-design" repo, `design-md/warm/mercury.md`) independently arrived at the same two-face system (Arcadia / Arcadia Display + Tiempos) and adds that Arcadia Display falls back to Tiempos Headline, then Iowan Old Style, then Georgia — a serif-forward fallback chain, reinforcing that the editorial-serif feel is intentional at every fallback tier, not an accident of `@font-face` failure.

## Color

Two-tier token architecture, confirmed directly in the shipped CSS custom properties:

- **Six muted "base" hue ramps** — `beige`, `blue`, `green`, `neutral`, `orange`, `purple` — each stepped 0/50/100/150/200/300/500/600/700/800/900/950 (neutral also has 1000). These are desaturated, near-paper-to-near-ink values used for UI chrome:
  - `neutral-100 #f4f5f9`, `neutral-950 #171721`, `neutral-1000 #10101a`
  - `beige-100 #f6f5f2` (warm paper cream), `beige-950 #181818`
  - `purple-100 #f5f4fd` (pale lavender-white — also the base of the decorative grain-texture overlay: `rgba(245,244,253,1)`)
  - `blue-100 #eef7fa`, `green-100 #f1f7f3`, `orange-100 #fdf3ef`
- **A parallel "magic" vivid-accent ramp**, one per hue, clearly separated from the base ramps and reserved for illustration/marketing/data-viz accents rather than chrome: `purple-magic-600 #5266eb` (indigo/periwinkle), `red-magic-600 #d03275` (magenta), `orange-magic-600 #c45000` (burnt amber), `blue-magic-600 #007f95` (teal), `green-magic-600 #188554` (emerald), `beige-magic-600 #8a753c` (ochre), `neutral-magic-600 #707393` (slate). Alpha variants exist per step (e.g. `orange-magic-400-alpha-5:#fc9b6f5c`).
- **Full theme system**: CSS classes like `.green-theme`, `.dark-green-theme`, `.purple-theme`, `.dark-purple-theme`, `.orange-theme`, `.blue-theme`, `.neutral-theme` exist alongside the tokens — the whole chrome (background/border/text semantic tokens) is theme-hue-swappable, not just light/dark.
- **Semantic layer on top of raw hues**: `--background-default`, `--background-secondary`, `--background-frosted` (blended from a `neutral-magic` alpha step — a frosted-glass tint), `--border-default`, `--border-emphasized`, `--text-default`, `--text-emphasized`, each with an `-inverted` counterpart for dark surfaces.
- **Modern relative-color syntax** is used to derive tints without hardcoding new hex values: `rgb(from var(--background-default) r g b / 1%)`.
- A secondary source names the accent used in the app's own product chrome as a single saturated indigo (~`#5266eb`) — this matches `purple-magic-600` exactly, confirming it as the primary brand accent within the wider magic palette.

## Layout

- Built on Next.js (asset paths under `cdn.mercury.com/fem/_next/...`); CSS Modules with hashed class names (`styles_xxx__hash`) coexist with utility-style classes (`h-full w-full transition-opacity`).
- Radius scale is generous: `--radius-sm .25rem(4px)` up to `--radius-5xl 2.5rem(40px)` — soft, heavily rounded cards and buttons throughout.
- Spacing runs through semantic `--sN` aliases mapped to raw `--spacing-N` values (4px base unit, observed up to 160px).
- `@container` queries are used, including a named container query variant and an unusually large breakpoint at `min-width:1888px` — layout explicitly re-flows for ultra-wide desktop viewports, not just tablet/mobile.
- Homepage stacks: nav → hero (headline/subhead/email-first CTA) → stat-proof band → press-logo strip → feature modules → testimonial carousel → footer. Pricing uses a "jump to section" in-page nav over a long single scroll rather than a wide static comparison grid.
- A secondary source (unverified against the live marketing site, may describe the authenticated dashboard shell instead) claims a fixed 1280px content container with 24px gutters and a persistent 240px left sidebar for the in-product app — flagged here as **not independently confirmed** from the pages fetched.

## Motion

Entirely CSS-native — no WebGL/Three.js/GSAP/Lottie found in the fetched bundles:

- Custom easing `cubic-bezier(.8,0,.5,1)` (an anticipation-heavy curve) drives a **slot-machine-style rolling price-digit** component (`styles_priceDigit`) — when the pricing page's monthly/annual toggle flips, each digit column animates like an odometer (`translateY` in/out per row) rather than swapping text.
- A literal **falling-money keyframe** (`@keyframes styles_moneyFall`) — `translate3d(0,-100%,0) rotate(0deg)` to `translate3d(0,100vh,0) rotate(1turn)` with fading opacity — a playful confetti-style motif tied to the pricing/savings context.
- **Scroll-driven CSS animation** via `animation-timeline:scroll()` and a custom named timeline `--disclaimer-scroll`: the sticky legal-disclaimer bar extends/fades its padding and a divider purely via scroll position, no JS scroll-listener.
- `@starting-style` is used for progressive-disclosure form fields (conditional fields animate in/out on `aria-hidden` toggle) — pure CSS entry/exit transitions, the same pattern Astryx's own StyleX capability doc recommends over `useState`+`requestAnimationFrame`.
- A decorative animated SVG grain/noise overlay (`feTurbulence`, `steps(1)` stepped animation every .2s) sits over the pale-lavender hero/decorative blocks for a tactile "print" texture at near-zero cost.
- `react-loading-skeleton` is the one identified JS motion dependency, used for shimmer loading placeholders.

## Hero Anatomy

- **Headline**: "Radically different banking" (homepage), set in Arcadia Display at fluid oversized scale.
- **Subhead**: "Apply online in 10 minutes to experience banking unlike anything that's come before."
- **CTA pattern**: not a single button — an email-capture input field ("Enter your email") leading to "Open account", with a marketing-consent opt-out checkbox disclosed inline; secondary nav-level CTAs are "Dashboard" and "Log in".
- **Background**: a crossfading photographic sequence (`hero_start_frame_sm`/`hero_end_frame_sm`) — real product/lifestyle photography, not a gradient or 3D abstraction, consistent with the "elevated still-life photography" language from Mercury's brand campaign.
- **Immediate proof band** directly under the hero: "300K+ of the most ambitious entrepreneurs," "1 in 3 Startups choose Mercury," "$20B+ Monthly transaction volume," "4.9 Apple App Store rating" — quantified trust signals placed before any feature explanation, followed by a press-logo strip (CNBC, Fortune, WSJ).

## Components of Note

- **Testimonial cards** with named, checkable customers and portrait photography — e.g. Karri Saarinen (Linear): "Unlike most financial institutions, Mercury is built on software. Everything can be done within the app in 1-2 minutes."
- **Feature modules**: 1:1 illustrated icon tiles with terse task-first captions ("Create cards in a couple of clicks," "Watch bills pay themselves").
- **Pricing table**: 3 tiers — Mercury (Free, $0/mo), Mercury Plus ($29.90/mo, $23.95/mo annual, "15% off"), Mercury Pro ($299/mo) — features grouped by category (Banking, Sending/Receiving, Company Cards, Invoicing, Taxes) with a "Jump to section" nav and a progressively-expandable "Compare plans" table instead of one giant static grid; the animated slot-machine price digit (above) lives here.
- **Mercury Command**: an in-product AI financial agent surfaced via a "terminal icon," operated by natural language ("Summarize what needs attention before month end," "Prepare an ACH payment to [recipient] for [amount]"). The announcement copy leads with governance, not capability: "every action is governed by your existing permissions," and sensitive fields (card numbers, SSNs, credentials) are explicitly stated to never reach the underlying model.
- **Universal search**: "Find any transaction, vendor, or card...all from one universal search bar."
- **Content taxonomy**: the blog is organized into three named "libraries" (Library, Meridian, Inside Mercury) plus ~14 topic tags (Accounting & Financial Ops, Business Banking, Product Updates, etc.) — a heavier information-architecture layer than a typical SaaS blog.
- **Theme system as a component-level feature**: 6 hue-family themes × light/dark exposed as swappable CSS classes, not just a light/dark toggle.

## Voice & Copy

Conversational but confident, aimed squarely at founders/operators rather than generic "businesses":

- "Banking's been a headache. Now, it's a head start."
- "Transformative banking for ambitious entrepreneurs" / "the nucleus of your financial operations"
- Task-first, imperative feature copy: "Create cards in a couple of clicks," "Watch bills pay themselves"
- Careers/culture values stated as short imperative phrases: "Think actively," "Be super helpful," "Act with humility," "Appreciate quality," "Focus on the outcome," "Build relentlessly"
- Mercury Command's copy poses a direct rhetorical challenge to old workflows: "Why click through pages to find something Command already knows, export data to answer a question Command can answer, or navigate a multi-step workflow when you could just ask?"
- Regulatory transparency is woven into brand copy, not hidden in footer legalese — partner-bank names appear on-page near the product claims, not just in the disclaimer.
- The "More than Banking" campaign line (per Instrument, Mercury's design agency): "Mercury is not a bank, and that's by design" — positioning the company explicitly against the category it operates in.

## Distinctive Moves

1. **Two-tier color architecture.** A quiet, desaturated 6-hue "base" ramp runs the actual UI chrome (near-white to near-ink, low saturation, calm), while a separate, more saturated "magic" ramp — one accent per hue (indigo `#5266eb`, magenta `#d03275`, amber `#c45000`, teal `#007f95`, emerald `#188554`) — is reserved for illustration, marketing, and data-viz accents. This lets marketing pages read as warm and colorful while the product itself stays muted and trustworthy — a deliberate split most fintech/SaaS competitors collapse into one palette.
2. **Grotesk + literary-serif type pairing.** A custom variable grotesk (Arcadia/Arcadia Display, weight range ~320–500, avoiding the usual light/bold binary) is paired with Tiempos Headline — a licensed editorial serif — used in italic for emphasis words inside otherwise-sans headlines. It gives fintech copy a magazine-profile register instead of the default SaaS-grotesk-only look, and the fallback chain (Tiempos → Iowan Old Style → Georgia) keeps that register intact even when the custom font fails to load.
3. **Playful CSS-only motion hidden inside a serious banking site.** A literal falling-money confetti keyframe, a slot-machine rolling price-digit toggle, and a scroll-driven (`animation-timeline:scroll()`) legal-disclaimer bar all ship as pure CSS with zero animation JS library — proof that "trustworthy and calm" and "delightful and animated" aren't mutually exclusive, and that it doesn't require WebGL or a JS animation runtime to pull off.

## Buzz Evidence

- **$200M Series D at a $5.2B valuation**, announced May 20, 2026 — up 49% in 14 months — led by TCV with Andreessen Horowitz, Coatue, CRV, Sapphire Ventures, Sequoia Capital, and Spark Capital participating. [CNBC, Businesswire, PYMNTS, FinTech Futures]
- **$650M annualized revenue**, four consecutive years of profitability, growth partly attributed to an AI-driven surge in new business formation.
- **Conditional OCC national bank charter approval** — Mercury is on track to become a federally regulated bank (final approval expected as late as 2027), which would let it offer lending and join Zelle directly rather than solely through partner banks.
- CEO Immad Akhund has stated an intent to eventually take Mercury public; no S-1 filed as of this crawl.
- **"More than Banking" brand campaign** by design agency Instrument (instrument.com/work/mercury) is the documented source of the "traded the cold, transactional feel of traditional banking for warmth, care, and intention" positioning — verified directly against the agency's own case study, confirming the scout note's claim.
- Mercury's visual system has already been reverse-engineered into a portable "design-system cheat sheet" for AI coding tools by third parties (a community `awesome-claude-design` GitHub repo dedicates a `warm/mercury.md` file to it; Refero Styles catalogs it too) — independent evidence that Mercury's system is being treated as a canonical reference worth encoding for LLM-driven design work, which is directly relevant to Astryx's own AGENTS.md-driven approach.
- Mercury Command (agentic AI banking assistant) shipped mid-2026, riding the same "AI agent inside a legacy-category product" wave as this survey's other AI-native exemplars.

## What Astryx Should Take

1. **Adopt a two-tier hue architecture, not one flat palette.** Mercury's split — muted "base" ramps for UI chrome vs. a separate saturated "magic" ramp per hue for illustration/marketing accents — maps directly onto Astryx's own multi-theme token system. It gives a design-system marketing site permission to be visually warmer/more expressive on the marketing surface while the actual component library stays calm and neutral in-product. Consider naming Astryx's own accent layer explicitly (e.g. a documented "accent" vs "chrome" tier) rather than letting marketing pages quietly borrow product tokens.
2. **Pair the UI sans with one licensed/editorial serif for emphasis, not headlines wholesale.** Rather than a full serif rebrand, use an italic serif only for specific emphasis words inside an otherwise-sans headline (Astryx docs/marketing copy) — a low-risk way to add editorial texture without abandoning a technical, componentized voice everywhere else.
3. **Ship the "delightful detail" as pure CSS, matching Astryx's own StyleX-native philosophy.** The rolling price-digit, the scroll-driven disclaimer bar, and `@starting-style` conditional-field animation are proof points that CSS alone (no motion JS) can carry real personality — directly reusable examples to cite in Astryx's own `docs principles` around when `@starting-style`/`animation-timeline:scroll()`/custom cubic-bezier easings are the right tool, since these are exactly the StyleX-supported CSS features Astryx already prioritizes.
4. **Put a quantified trust band immediately under the hero**, before any feature explanation — Mercury's stat proof band (users, transaction volume, app rating) followed immediately by a press-logo strip is a pattern a docs/marketing site can reuse verbatim for adoption/scale metrics (npm downloads, GitHub stars, components shipped, teams using it) rather than burying them lower on the page.
5. **Treat the component-doc/blog taxonomy as first-class information architecture.** Mercury's three named content "libraries" plus ~14 topic tags is a heavier IA layer than most design-system sites bother with — worth mirroring for Astryx's component docs (grouping by category/pattern/status) rather than a flat alphabetical list.

## Pages Read

- https://mercury.com/ (homepage — fetched via WebFetch and raw HTML/CSS retrieval; CSS bundles inspected directly: `06c7378097b3f105.css`, `1051ac767aa1e97a.css`, `30760ad4baf57fc6.css`, `792d285aaeb53a32.css`, `d289f3e71fa93ec2.css`, served from `cdn.mercury.com/fem/_next/static/css/`)
- https://mercury.com/pricing
- https://mercury.com/about
- https://mercury.com/careers
- https://mercury.com/blog
- https://mercury.com/blog/introducing-mercury-command
- https://www.instrument.com/work/mercury (secondary source — Mercury's brand-campaign design agency case study, used to verify scout-note claims)

Not reachable / not found during this crawl: `https://mercury.com/llms.txt` (HTTP 410 Gone), `https://mercury.com/docs` (HTTP 404 — no public developer-docs route at that path).
