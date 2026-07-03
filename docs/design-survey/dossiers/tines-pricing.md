---
name: Tines — Pricing
url: https://www.tines.com/pricing
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Tines is a security/IT-ops workflow-automation platform (valued at $1.125B after a $125M Series C in Feb 2025). Its pricing page abandons the standard 3-column SaaS feature-comparison grid in favor of a two-card narrative layout — a free "Community" tier and a "Custom" Business/Enterprise tier — where every capability is presented as a term plus a one-line plain-English definition, more glossary than checkbox matrix. The page is built on Gatsby 5.14.5 with compiled CSS-in-JS, a hand-authored keyframe animation library, and a section-based color-ramp theming system that runs across the whole marketing site, not just this page.

## Typography

- **Roobert** — UI/body sans, self-hosted (`/fonts/Roobert-Regular.woff2`, `-Medium`, `-SemiBold`, `-Bold`, weights 400/500/600/700, `font-display: swap`/`block`). Stack: `Roobert, -apple-system, BlinkMacSystemFont, Arial, Roboto, Ubuntu, Helvetica Neue, sans-serif`. [P, live CSS bundle, verified 2026-07-03, 100]
- **Reckless Neue VF** — variable-font display serif for headlines, self-hosted (`/fonts/RecklessNeueVF.woff2`, format `woff2-variations`). Stack: `Reckless Neue VF, Reckless Neue, Georgia, serif`. Static fallback cuts (`Reckless-Regular.woff2`, `Reckless-Light.woff2`) are also preloaded — likely a fast-first-paint fallback ahead of the variable font finishing load. Both Roobert and Reckless are Displaay Type Foundry releases, deliberately paired (geometric grotesque sans + humanist display serif) — a pairing increasingly common across 2025-26 category-leading dev/security-tool rebrands, distinctly "not Inter." [P, live CSS bundle, verified 2026-07-03, 100]
- **JetBrains Mono** — monospace for code/technical values, one declaration carries `!important`, implying a hard override context (likely embedded code snippets inside CMS-authored blog/docs bodies). Stack: `JetBrains Mono, menlo, monospace`. [P, live CSS bundle, 100]

## Color

No single flat brand palette — instead a small **shared token vocabulary reused across five+ hue ramps**, swapped in per content section via CSS custom-property overrides on a container (`--bg`, `--border`, `--ac` accent scale, `--bodyTextColor`):

- Purple ramp (`--ac`, primary/default accent): `#f8f2f6`(25) → `#eadff8`(100) → `#d7c4fa`(200) → `#c2aafa`(300) → `#a990f5`(400) → `#8d75e6`/`#7f69ce`(600) → `#6956a8`(700) → `#4d3e78`(800) → `#32274b`(900)
- Green ramp: `#d6edd9`, `#87d1a3`, `#5abe89`, `#49b889`, `#239667`, `#1f7a57`, `#195642`, `#11352e`
- Orange/coral ramp: `#ffc8a3`, `#fd975d`, `#f47e3f`, `#e16521`, `#b74d1a`, `#803218`, `#4c1812`
- Pink/magenta ramp: `#f486b8`, `#eb81af`, `#cb5d94`, `#a54b7a`, `#ffbfdb`, `#fdb2d2`, `#faa3ca`
- Blue/teal ramp: `#4e8fd0`, `#3c699b`, `#2e4c73`, `#96bdf3`, `#71a7e5`
- Neutral text: `#323139`/`#323131`/`#32313b` — a warm near-black, never pure `#000`.

`--bodyTextColor` itself is re-pointed per section (`#1f7a57` green / `#6956a8` purple / `#a54b7a` magenta / `#b74d1a` rust), so identical card/badge/border components read as entirely different "themed zones" depending only on which ramp is active. [P, live CSS custom properties, verified 2026-07-03, 100]

## Layout

- Gatsby 5.14.5 static-site generator for marketing pages (`generator: Gatsby 5.14.5` meta tag, `id="___gatsby"` root). Docs (`/llms.txt`) are served from a **separate Next.js/Vercel deployment** under the same domain (response headers show `server: Vercel`, `x-matched-path`, RSC routing headers) — marketing and docs are two different stacks stitched together at the edge. [P, response headers, verified 2026-07-03, 100]
- CSS-in-JS compiled at build time: class/keyframe names carry a readable prefix + hash suffix (e.g. `BadgeGridItemEnter-b1pupsd9`, `AppIFrameEnter-at6se0z`) — consistent with a zero-runtime compiler (Linaria-style), not a styled-components runtime.
- Grid system uses named CSS Grid lines (`grid-template-columns:[start] 1fr [end]`) and percentage-gutter patterns for content margins (`10% minmax(0,1fr) 15%`, `12.5% minmax(0,1fr) 18%`) rather than a fixed max-width + auto-margin container — side gutters breathe with viewport width instead of clamping to a hard px cap. The pricing hero/cards use an asymmetric two-column ratio (`1.33fr 1fr`, `1.33fr minmax(0,2fr)`).
- Section vertical rhythm is tokenized: `--blockPadding` (5em/6em/9em) and `--blockPaddingLarger` (6/9/12em) custom properties drive section spacing instead of hardcoded per-section margins.
- Pricing page structure, top to bottom: H1 "Pricing" → two capability cards (Community free / Business+Enterprise custom, term+definition style, no checkbox matrix) → single-row logo wall (~29 customer names: ASOS, Canva, Coinbase, Databricks, Dropbox, MongoDB, Notion, Reddit, SAP, Snowflake, Zendesk, etc.) → "Don't take our word for it" (2 testimonial quotes + 6 G2 award badges, mixed in one section) → "Specialized Editions" (3 lateral cards: Federal / SLED / MSSPs, each one-liner + "Contact us →") → 6-item FAQ accordion → Startup Program callout (numeric eligibility bar + exclusion footnote) → closing CTA banner ("Built by you, powered by Tines").

## Motion

- No JS animation library detected in the built bundle (no GSAP/Framer Motion/Lottie/anime.js reference found in JS or CSS) — motion is achieved entirely with plain CSS `@keyframes`, orchestrated from React mount/unmount state (paired classes like `BackdropEnter`/`BackdropExit`, `AppIFrameEnter`). [P, live JS/CSS bundle grep, verified 2026-07-03, 95 — absence claim, not exhaustive against every lazy chunk]
- A large hand-authored keyframe library: 100+ distinct, purpose-named animations spotted in the pricing-page CSS alone (`CircularTextSpin`, `ChatMessageSectionEnter`, `DemoStoryPagerDutyNotificationCardEnter`, `dropzoneArrowBob`, `BulletHaloPulse`, `cornerBadgeEnter`, `agentCurveShapeRotate`) — each built for one specific illustration/demo element rather than a shared generic set.
- Custom overshoot/spring easings for playful UI-demo elements: `cubic-bezier(.2,1.2,.19,1.2)`, `cubic-bezier(.2,1.45,.19,1.45)`, `cubic-bezier(.2,1.6,.19,1.6)`, `cubic-bezier(.47,1.28,.53,1.3)`, alongside standard Material-style decel curves (`cubic-bezier(.075,.82,.165,1)`) for backdrop/panel transitions.
- Per-item stagger via CSS custom properties (`--f9sgxoi-2`, `--l110i3bh-4` feeding `animation-delay`) — likely computed inline per list/grid item (e.g. staggering each G2 badge in `BadgeGridItemEnter`).
- A dedicated `--agenticIlloScalar` custom property (values 0.4/0.7/1) suggests animation intensity/speed is dialed by context — likely on the homepage/product "agentic workflow" diagram.

## Hero Anatomy

- **Homepage** hero: H1 "The intelligent workflow platform" + subhead "Securely scale AI and automation. Integrate agents, teams, and tools with speed and control." Large abstract geometric SVG illustration in the brand's multi-hue ramp system, soft rounded shapes suggesting interconnected data flow.
- **Pricing page** hero is text-first and minimal: H1 "Pricing" alone, no subhead needed before the two tier cards. Decorative geometric/layered SVG shapes (card/document-like forms in the purple-teal-orange-green ramps) sit near the tier cards rather than as a full-bleed top-of-page illustration — consistent with the product/homepage illustration language but dialed down for a utility page. 90 inline `<svg>` elements were counted on the pricing page alone, confirming an illustration-heavy build even on a "just show me the price" page.

## Components of Note

- **Mega-menu nav**: Platform/Solutions/Resources/Company, each item paired with a one-line marketing description under the label itself (e.g. under "By product": "Connect Tines to any of your favorite products. If it offers an API, Tines connects with it.") — nav doubles as micro-copy, not just links.
- **Pricing cards**: term + one-sentence definition for every capability, on both tiers (e.g. "Unlimited viewers — Viewers have read-only permissions across a team. They can view, but not edit, actions in a team.") — reads like an annotated spec sheet, not ad copy.
- **G2 badge grid** (6 badges: Leader in SOAR, High Performer iPaaS, Best Estimated ROI Enterprise SOAR, Best Support Mid-Market iPaaS, Easiest To Do Business With in Incident Response, Users Love Tines) sits inside the same "Don't take our word for it" block as the two written testimonials — third-party awards and direct quotes given equal visual weight.
- **Specialized Editions**: 3 audience-segment cards (Federal / SLED / MSSPs) as a lateral upsell beneath the core two tiers — an unusual pricing-page addition, effectively compliance-flavored sibling tiers.
- **FAQ accordion**: 6 Q&As with a `↓` chevron toggle, covering credit-card requirement, hosting, learning resources, docs location, workflow examples, community access.
- **Startup Program callout**: numeric eligibility bar as a compact stat-line (`<100 employees • <$50M raised • <5 years old`) plus an explicit services-company exclusion footnote — concrete criteria, not "apply and we'll see."
- **`/llms.txt` + `/llms-full.txt`**: a machine-readable docs index explicitly labeled "LLM-friendly markdown versions," served from the separate Next.js/Vercel docs deployment — an AI-crawler-friendly docs surface.

## Voice & Copy

Confident, plain-spoken B2B security/IT tone — short declaratives, benefit-first, no superlative fluff ("Scale intelligent workflows across your entire organization," not "revolutionize your business"). Distinctively, the pricing page teaches as much as it sells: every feature name gets a plain-English gloss even here, not just in docs. Nav items carry embedded value props ("Join a world-class team and make an impact." under Careers; "We power the world's most important workflows." under About). Careers-page culture voice is grounded in testimonial data ("98% of our team would recommend Tines as a great place to work") over declared values, with three one-word pillars (Speed, Simplicity, Soundness) each given a plain gloss. Closing tagline "Built by you, powered by Tines" frames the relationship as co-authorship (user builds, platform powers) rather than pure vendor authority.

## Distinctive Moves

1. **Section-hue-ramp theming as a system, not a palette.** A tiny shared token vocabulary (`--bg`/`--border`/`--ac`/`--bodyTextColor`) gets reassigned to a different hue family (purple/green/orange/pink/blue) per content section via CSS custom-property overrides — the same card/badge/border components restyle completely just by entering a different themed zone. Effectively a design-system-within-the-marketing-site.
2. **Pricing-as-glossary.** Both tiers replace the standard checkbox feature-matrix with term + one-line-definition pairs for every capability — unusual for security/IT-ops SaaS, where feature grids are the default; makes the pricing page double as a mini product glossary.
3. **Motion-as-craft in pure CSS, no animation library.** 100+ uniquely named `@keyframes` (per-badge stagger, per-demo-card entrance, arrow-bob hints, circular text spin) achieve a highly "alive" demo-heavy feel with zero GSAP/Framer Motion/Lottie in the bundle — all custom-property-driven stagger and spring easings compiled straight to CSS.

## Buzz Evidence

- On-page: 6 distinct G2 award badges (Leader in SOAR, High Performer iPaaS, Best Estimated ROI Enterprise SOAR, Best Support Mid-Market iPaaS, Easiest To Do Business With in Incident Response, Users Love Tines) displayed directly on the pricing page as the primary trust signal. [P, live page, verified 2026-07-03, 100]
- External: Tines raised $125M in a Series C in February 2025 (led by Growth Equity at Goldman Sachs Alternatives, joined by SoftBank Vision Fund 2 and Activant alongside existing investors Accel, Felicis, CrowdStrike Falcon Fund, and Addition), pushing valuation to $1.125B and total capital raised to $272M — unicorn status. [S, secondary press — PR Newswire/TechCrunch/SiliconANGLE, Feb 2025, ~17mo old as of Jul 2026, 35 per staleness cutoff]

## What Astryx Should Take

1. **Adopt the section-hue-ramp token pattern.** Define a small vocabulary (bg/border/accent/text) and let each area of Astryx's own docs/marketing site (Components, Tokens, Theming, Templates) assign its own hue ramp via a CSS custom-property override at the container level — visual variety across a large docs surface without multiplying component variants. Maps directly onto Astryx's existing `stylex.defineVars`/theme-provider machinery; could ship as a lightweight "section theme" wrapper over current token primitives.
2. **Borrow the term+definition pricing/feature pattern** for the Astryx component docs and template gallery: pair every named capability with a one-line plain-English definition instead of a bare bullet — reduces reliance on tooltips and matches how `$ASTRYX component --dense` already emits prose alongside props.
3. **Test the Roobert+Reckless-style font pairing** (geometric grotesque UI sans + variable serif display headline) for Astryx's own marketing site headlines — a strong, differentiated "not-Inter" combination without touching the component library's default UI type.
4. **CSS-only keyframe motion is directly compatible with Astryx's StyleX-first, no-JS-workaround philosophy** already codified in this repo's CLAUDE.md. Tines proves a demo-heavy marketing site doesn't need GSAP/Framer Motion — named `@keyframes` (via `stylex.keyframes`) plus custom-property-driven stagger delays get the same effect while staying framework-agnostic.
5. **Ship `/llms.txt` + `/llms-full.txt`** for Astryx's own docs site — cheap, high-leverage move to stay legible to AI coding agents, directly relevant given this survey itself is AI-crawl-driven.

## Pages Read

- https://www.tines.com/pricing
- https://www.tines.com/
- https://www.tines.com/llms.txt
- https://www.tines.com/product
- https://www.tines.com/blog
- https://www.tines.com/careers
- https://www.tines.com/case-studies
- https://www.tines.com/static/css/styles.6fabaa4563b7b190b1d3.css (raw stylesheet, inspected directly for font-face, custom properties, keyframes, easing)
