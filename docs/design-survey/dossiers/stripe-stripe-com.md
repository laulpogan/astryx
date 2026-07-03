---
name: Stripe (stripe.com)
url: https://stripe.com
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Stripe is financial infrastructure (payments, billing, issuing, treasury, tax, identity) presented through a marketing site that recently completed its first homepage redesign in roughly six years. The redesign — led by Head of Design Katie Dill, discussed on Y Combinator's Startup Podcast — pairs an AI-accelerated concept-exploration process (reportedly ~20 concepts explored vs. ~2 previously) with unusually heavy manual craft correction, landing on a "bento grid" product-tour section, a custom WebGL wave-gradient hero (Stripe's own lightweight canvas library, nicknamed "minigl"), and a design-token system publicly nicknamed "Hyperdrive" (`hds-` CSS prefix, 680+ custom properties observed in the shipped bundle). The site treats scale and trust as its core rhetorical move — a live-ticking "Global GDP running on Stripe" counter sits directly above the hero headline.

## Typography

- **UI/display typeface:** `sohne-var` (Söhne, Klim Type Foundry — variable font), declared as `font-family:"sohne-var","SF Pro Display",sans-serif` in the shipped CSS (`css_e07e144a3b1db9ca.css`), with a deeper system fallback stack (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif`) elsewhere in the bundle. `.woff2` file confirmed at `Sohne.cb178166.woff2`.
- **Code/monospace:** `SourceCodePro-Medium` (own `.woff2`), referenced as `font-family:SourceCodePro` / `var(--hds-font-family-code)` — kept structurally distinct from the UI sans, never doubling as body copy.
- **Weight control via variable-font axis**, not discrete font files: `font-variation-settings:"wght" 300` and `"wght" 400` both found in the live CSS. Weight 300 (light) is used even down into footer link items (`.footer-links-block__item{font-weight:300}`), confirming the "everything is light weight" impression is a deliberate, systemic choice, not just a hero flourish.
- **Fluid, viewport-aware hero sizing:** the H1 uses `font-size:max(min(6lvh, var(--lang-font-max)), var(--lang-font-min))` — clamps to viewport height with per-language ceilings/floors.
- **Locale-aware line length/height baked into CSS**, not just copy: `:lang(en) .hero-section__title{max-width:32ch}`, `:lang(fr){max-width:42ch}`, `:lang(es){max-width:35ch}`, `:lang(th){line-height:1.2}`, plus `:lang(jp)`/`:lang(zh)` overrides — a genuinely global type system tuned per script, verified directly in the shipped stylesheet.

## Color

- Public name for the token system: **Hyperdrive** (`hds-` prefix on both CSS custom properties and component class names, e.g. `.hds-button--primary`, `--hds-color-heading-solid`). 680+ distinct `--hds-*` custom properties found across the site's CSS bundles.
- Large surfaces use a family of near-white "paper" neutrals rather than pure white: `#fcfdfe` (`--stats-color`, the stat-callout section background), `#f6f9fc`, `#f8fafd`; pure `#ffffff` is reserved for cards/panels.
- Shadows are **tinted deep navy**, not neutral gray: `--hds-color-shadow-lg-top`/`-bottom` and `--hds-color-shadow-md-top`/`-bottom` all resolve to `#0d1738` (also reused as a dark input background).
- A full multi-hue "accent color mode" token family exists for per-product colorways (`--hds-color-accentColorMode-{lemon,magenta,orange,ruby}-...`), with observed hex values including purple `#7232f1`/`#533afd`/`#6b59fe`, orange `#ff6118` (`--bento-right-blob`), green `#00d66f`, blue `#0073e6`, pink/magenta `#f363f3`/`#fb76fa`, yellow `#ffcf5e` — Stripe assigns a distinct hue per bento tile/product rather than one brand accent everywhere.
- `@media (color-gamut:p3)` rules are present and change actual color values for P3-capable displays — explicit wide-gamut support, not just an sRGB palette.
- **The hero headline's visible color is not a static value at all.** It's produced by two stacked, identically-worded `<h1>` elements blended together (see Distinctive Moves): a "background" copy at `#81b81a` (falls back to `#ddd600` under `@media(color-gamut:p3)`, `#c8c33b` under the Safari `-webkit-touch-callout` fallback) sits beneath a "foreground" copy at translucent blue `rgba(0,14,255,.5)` composited with `mix-blend-mode:hard-light` — the title's on-screen hue shifts with the moving wave-gradient behind it.

## Layout

- **Bento grid** is the redesign's centerpiece: six tiles (Payments, Billing, AI monetization, Issuing, Stablecoins, Platforms per secondary-source reporting on the design process) confirmed in-CSS by class names like `--bento-right-blob`. Each tile opens an **in-page modal** rather than routing to a new URL — reported by the design team itself as the solve for "show, don't tell" across a huge product line.
- **Bespoke, non-framework breakpoint set**: `400px, 480px, 600px, 640px, 706px, 840px, 939.9999px, 940px, 1115px, 1264px, 1609px` — not Bootstrap/Tailwind defaults; a custom Hyperdrive grid.
- Section containers cap around **1184–1295px** wide (one outlier section runs to ~1609px); component-level max-widths step from ~180px small cards up through 640px/1000px content blocks.
- Hero uses CSS grid column placement, not simple centering: the title shifts to `grid-column-start:2` on ≥940px viewports, an asymmetric composition rather than dead-center text.
- **Border-radius is conservative**: 152 uses resolve through a shared `var()` token, with hard-coded steps mostly at 3–8px (plus circle/pill exceptions at `50%`/`100%`/`100px`) — restraint on rounding even while the hero is doing heavy visual-effect work.
- The docs homepage (`docs.stripe.com`) is a **deliberate register break** from the marketing site: no hero image, no CTA buttons, dense link taxonomy split into "Use Cases" / "Setup & Resources" / "Browse by Product" — pure information-scent navigation.

## Motion

- **Hero wave gradient**: an animated WebGL mesh gradient rendered through Stripe's own lightweight canvas/WebGL renderer, reported (via secondary press covering Katie Dill's YC Startup Podcast interview) to be nicknamed **"minigl"** — flowing, skewed gradient in purple/pink/cyan/orange, built with a custom internal tool for tuning blur, grain, rotation, thickness, texture, and color. Progressively enhanced: degrades to a static `wave-fallback-{desktop,tablet,mobile}.png` for reduced-motion/no-JS contexts (`.hero-wave-animation__static` wrapper confirmed in the shipped HTML).
- **Live "Global GDP running on Stripe" counter**: ticks digit-by-digit via paired `content-outgoing`/`content-incoming` span sets with `tabular-nums--tight` — an odometer/rolling-digit effect. Its methodology is disclosed directly in an HTML comment in the page source: _"calculated using a simple algorithm that projects the value of the global GDP based on the current value and a growth rate. The GDP value and rate comes from an IMF report and is compared to the Stripe payment volume. This was last updated on 2026-02-20."_
- **Logo wall runs on `<canvas class="squeezy-carousel__canvas">`** — an actual canvas-rendered looping marquee (Amazon, Shopify, Figma, Anthropic, etc.), not a CSS-only animation.
- Named keyframes found in the bundle: `gradient`, `gradient-sweep`, `shimmer-gradient`, `nav-hover-arrow-in`/`nav-hover-arrow-out` (nav items reveal a directional arrow on hover), `desktop-campaign-cta-pulse`, `accordion-down`/`accordion-up`, `map-globe-spin` (an animated spinning globe, likely on a "global reach" tile), `cmdk-enter`/`cmdk-exit` (a command-palette/search component).
- Dominant easing: `cubic-bezier(.25,1,.5,1)` and `cubic-bezier(.65,0,.35,1)` at ~0.2–0.6s for hover/color transitions — a snappy, slightly-overshooting curve rather than linear/ease-in-out.
- `@media (max-width:639px) and (prefers-reduced-motion:no-preference)` confirmed as a real gate in the CSS — motion is explicitly conditioned on user preference, not just visually implied.

## Hero Anatomy

1. **Eyebrow**: "Global GDP running on Stripe:" followed by the live odometer-ticking dollar figure.
2. **H1** (rendered as two blended copies, see Color/Distinctive Moves): _"Financial infrastructure to grow your revenue."_ — with a second sentence, _"Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth,"_ folded into the same `<h1>` as a secondary `hero-section__title-copy` span.
3. **CTAs**: "Get started" (primary filled button, hover reveals an animated arrow) + "Sign up with Google" (secondary outline button carrying the full-color Google "G" mark) side-by-side in an `hds-button-group`.
4. **Background**: full-bleed animated wave/gradient mesh (minigl) framed by thin top/bottom `hero-section__fullbleed-line` rules.
5. The hero section is wrapped `<section class="hds-color-mode ... hds-mode--light">` — confirming Hyperdrive supports per-section light/dark "color modes," which the design-process coverage says Stripe uses elsewhere on the page (dark bento/testimonial sections) rather than committing the whole site to one mode.

## Components of Note

- **`hds-button` / `hds-button-group`** — primary (filled) and secondary (outline) variants with a shared hover-arrow micro-interaction.
- **Bento tiles → in-page modals**, not page routes, for each product line (Payments, Billing, AI monetization, Issuing, Stablecoins, Platforms).
- **Live GDP odometer counter** as a scale/trust device (see Motion).
- **`squeezy-carousel`** — canvas-rendered auto-scrolling customer-logo marquee.
- **Accordion** component (`accordion-down`/`up` keyframes) used for pricing's per-product fee breakdown and for case studies.
- **cmdk-style command palette** (`cmdk-enter`/`cmdk-exit` keyframes present) — a searchable command-palette pattern somewhere in the docs/marketing shell.
- **`hds-heading`** typographic wrapper component with per-`:lang()` size/max-width variants baked directly into CSS (see Typography).
- **Pricing page**: two-card hero (Standard "2.9% + 30¢" vs. Custom/"Contact sales"), then per-product pricing organized into accordions (Global Payments, Money Management, Revenue & Finance Automation, More) rather than one giant N-column comparison table.
- **`docs.stripe.com` homepage**: zero hero imagery, pure taxonomy — "Use Cases" / "Setup & Resources" / "Browse by Product" — the opposite visual register from the marketing homepage.
- **`stripe.com/llms.txt` exists and mirrors the docs product taxonomy** — Stripe already ships agent-readable navigation alongside human docs.

## Voice & Copy

- Marketing homepage voice is confident, declarative, and numbers-led: _"$1.9T in payments volume processed in 2025," "99.999% historical uptime," "200M+ active subscriptions," "500M+ API requests per day," "150K+ transactions per minute," "135+ currencies and payment methods."_
- Pricing copy is plain and anti-legalese: _"No setup fees, monthly fees, or hidden fees."_
- Newsroom ties the infra pitch to the current AI cycle: _"Stripe builds out the economic infrastructure for AI with 288 launches."_
- Careers voice is a deliberate register shift — more introspective and self-aware than the marketing voice: _"Nothing worth doing is easy,"_ an explicit acknowledgment of _"what we haven't done yet,"_ and _"We try to embrace kindness while still encouraging Stripes to take measured risks."_
- Internal design-process language, reported via Katie Dill's YC Startup Podcast interview (secondary source, BigGo Finance): _"Fight the gravitational pull to mediocrity,"_ _"Prototyping, not presenting"_ (evaluate on end-user experience, not stakeholder trade-offs), and a weekly ritual called **"Walking the store"** where staff — including founders — use Stripe's live product as real customers would.

## Distinctive Moves

1. **Blended duotone hero headline.** Two stacked, identically-worded `<h1>` elements — one at yellow-green (`#81b81a`/`#ddd600` in P3/`#c8c33b` Safari fallback), one at translucent blue (`rgba(0,14,255,.5)`) — are composited with `mix-blend-mode:hard-light` over the moving wave gradient. The headline's actual perceived color is generated by CSS blending against an animated canvas background in real time, not set as a static value. Verified directly in the shipped HTML/CSS, not inferred from screenshots.
2. **Live "Global GDP running on Stripe" odometer**, with its exact projection methodology and last-refresh date (2026-02-20) left readable in an HTML comment — a transparency flourish rare among competitors, turning an abstract macro claim into a ticking, sourced number.
3. **Bento tiles that expand into in-page modals** instead of routing to separate product pages, letting the entire six-line-of-business "tour" happen on one scroll/URL — the design team's own stated solve for "show, don't tell" at Stripe's product breadth.

## Buzz Evidence

- First homepage redesign in roughly six years; process and rationale detailed by Head of Design **Katie Dill** on Y Combinator's **Startup Podcast** [S, BigGo Finance retrospective, undated 2026 — secondary, treat launch-date claim with caution]. Secondary coverage (BigGo Finance, Summify, Whatfinger) dates the actual homepage launch to **~January 2025**, with retrospective/process coverage still circulating in 2026 — this dossier flags a **discrepancy**: the crawlset's scout note labels the redesign "(2026)," while the press trail found here consistently anchors the ship date to January 2025. Not independently resolved; report both.
- Reported process: AI-assisted concept generation explored "10x more concepts" (~20 vs. a prior ~2), but every AI-generated asset still required heavy manual correction — framed by Dill as "AI raises the floor, humans still own the ceiling," itself a talking point that generated its own round of design-press coverage.
- No verified awards, Product Hunt/Hacker News ranking, or viral-thread evidence found specifically for the redesign; buzz here is thought-leadership/process coverage rather than launch virality.

## What Astryx Should Take

1. **Split the visual register between marketing and docs deliberately**, the way `stripe.com` vs `docs.stripe.com` do: docs get zero hero imagery and pure task/category taxonomy up top, marketing gets the hero flourish. Astryx's `{Name}.doc.mjs` pattern already leans this way for individual components — apply the same restraint to the top-level docs index, not just component pages.
2. **Ship an `llms.txt`** at the Astryx docs root mirroring the human nav (Stripe already does this) — cheap, directly reusable, and reinforces the project's existing AGENTS.md-first positioning.
3. **Adopt the `:lang()`-driven type-sizing pattern** as a template for whenever Astryx docs internationalize — per-locale `max-width`/`line-height` overrides baked into CSS is a rare, concrete, low-effort pattern most design systems skip entirely.
4. **Bento-tiles-that-expand-to-modals maps directly onto an Astryx component gallery homepage**: each category (Buttons, Forms, Overlays, Navigation) as a tile that expands to a live-code modal in place, instead of routing away — keeps discovery on one scroll, and is buildable with StyleX + existing dialog/overlay primitives, not aspirational.
5. **The blended-text-over-moving-background technique is directly buildable in StyleX today**: two absolutely-positioned elements, `mixBlendMode:'hard-light'`, one variant gated behind `@media (color-gamut:p3)` — all confirmed-supported per Astryx's own StyleX capability notes (mix-blend isn't explicitly listed but blend-mode is a standard CSS property StyleX passes through; `@supports`/`@media` gating is confirmed YES). Worth prototyping as an optional signature hero treatment.
6. **A single named live-stat counter** (e.g. components shipped, GitHub stars, orgs on Astryx) with an odometer-digit tick and its calculation disclosed inline is a cheap, reusable trust device — the tabular-nums + per-digit-span technique is a few lines of CSS plus a small JS interval, no library needed.
7. **Keep code/mono type structurally distinct from UI type** (Stripe: Söhne UI + Source Code Pro code) — don't let one font family serve both roles in Astryx docs.
8. **Concentrate flourish, don't spread it.** Stripe's actual component system (buttons, radius, shadows) is conservative — 4–8px radius, tinted-navy soft shadows, two button variants — with the wave gradient / blended title / GDP counter each appearing exactly once, in the hero. Astryx should pick ONE signature motion/color moment for its own hero rather than distributing gradient/motion across every section — the restraint is what makes the one flourish read as considered rather than default-AI-startup.

## Pages Read

- https://stripe.com (homepage — plus direct fetch + parse of the raw HTML and all five linked `_next/static/css` bundles for font-family, `--hds-*` custom-property, hex-color, keyframe, and breakpoint verification)
- https://stripe.com/llms.txt
- https://stripe.com/pricing
- https://docs.stripe.com
- https://stripe.com/newsroom
- https://stripe.com/jobs

Secondary sources consulted (design-process/buzz context, not counted as primary site pages): BigGo Finance retrospective on Stripe's 2026 redesign coverage of Katie Dill's Y Combinator Startup Podcast interview; designmd.cc Stripe token benchmark (fetch blocked, HTTP 403 — not used, superseded by direct CSS extraction above).
