---
name: Linear
url: https://linear.app/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Linear is a project/issue-tracking and product-development platform ("the product development system for teams and agents") that has spent five years becoming the de-facto reference for disciplined, fast, dark-mode-first B2B SaaS design. As of July 2026 it has repositioned around AI: the homepage headline pivots from "for teams" to "for teams and agents," and new surfaces (Coding Sessions, Triage Intelligence, Code Intelligence, an MCP server) sit alongside the classic issue-tracker UI. The marketing site is built on Next.js/React with a styled-components runtime and per-component CSS Modules (Vite RSC), served from `static.linear.app`; it ships a genuine `/llms.txt` and per-doc `.md` endpoints (e.g. `/docs/mcp.md`), and the whole site is dark-mode by default with a light/dark/system toggle in the header.

## Typography

- **Primary UI font: Inter.** `InterVariable.woff2` (v4.1) is preload-linked (`as="font"`, `crossorigin`) on the homepage — a single variable-font file covering the weight range, not static per-weight files. This is hard evidence from the `<link rel="preload">` tag; no other body sans-serif was found in the fetched CSS. [confirms/refines prior note — "one negative-tracking display family" was directionally right but the concrete typeface is Inter, not a bespoke display face]
- **Monospace:** `var(--font-monospace)` used for inline `<code>` and the code-diff/PR-review illustrations (syntax tokens: `--token-comment`, `--token-string`, `--token-constant`, `--token-variable`, `--token-keyword`, `--token-entity`, `--token-punctuation`, `--token-text`).
- **Numbered type scale, not ad hoc sizes.** Body copy classes reference `--title-N-size` / `--title-N-line-height` / `--title-N-letter-spacing` (observed steps: title-5, title-7, title-8) and `--text-{micro,mini,small,regular}-size`, each with an explicit responsive step-down at `max-width:1024px` and `max-width:640px` (e.g. a heading is `title-8` on desktop, drops to `title-7` at 1024px, `title-5` at 640px — same element, three discrete sizes, not fluid `clamp()`).
- **Font-weight tokens:** `--font-weight-thin:100` through `--font-weight-black:900`, plus a non-standard `--font-weight-medium:480` alongside a conflicting `500` definition (two theme layers cascading — one is likely the marketing-site override).
- **Bleeding-edge CSS typography feature in production:** `text-box: trim-both cap alphabetic` is applied to hero titles and descriptions behind an `@supports` guard — this trims leading/trailing font metrics so cap-height and baseline align exactly to the box, a very recent (2025/26) CSS property most sites haven't adopted yet.
- Text-hierarchy color tokens are a 4-deep ramp: `--color-text-primary` → `--color-text-secondary` → `--color-text-tertiary` → `--color-text-quaternary` (quaternary used for things like underline color and disabled/ghost text).

## Color

- **Base canvas confirmed near-black, not pure black:** `theme-color` meta = `#08090A`; this exact value recurs as the page background and as the `stroke` color on decorative SVG dots (dots appear to "cut into" the dark background). Off-white text, hairline borders in the `#2E2E32`–`#3E3E44` range.
- **The "single lavender accent" claim in the prior scout note is only partly true — VERIFIED AND CORRECTED.** The classic Linear brand indigo `#5E6AD2` is still present (found as a stroke color in one decorative hero-illustration SVG path), but the current marketing site actually runs a **categorical multi-hue palette for data-visualization elements**, not one flat accent: dot-scatter "chart" illustrations use `#4354B8` (indigo) in one illustration and `#E5591D` (burnt orange) in an adjacent one, each dot stroked with the `#08090A` background color so they read as insets. Other hexes present on the homepage/pricing pages: `#F79CE0` (pink), `#89D196` (green), `#55CDFF`/`#02B8CC` (cyan), `#FFC47C` (amber), `#8FA4FF` (periwinkle-blue). Net effect: **monochrome dark chrome, colorful data**, i.e. color is reserved for illustrating product data/metrics, not for brand decoration.
- A separate, literal Tailwind-style color-ramp system also ships in the bundle (`--color-blue-50` … `--color-blue-900`, `--color-amber-*`, `--color-emerald-*`, `--color-cyan-*`), each defined redundantly in hex, `lab()`, and `oklch()` — evidence the design-token pipeline authors in multiple color spaces and lets the build pick the best-supported one (progressive-enhancement color tokens).
- A hidden **debug/design-grid overlay** exists in the CSS (`Providers.css`, class prefix `_5pslva_`): a fixed-position column-grid overlay whose accent lines are literally `var(--color-orange)`, plus a floating pixel-dimension readout pill (`_5pslva_pill`, `border-radius: var(--rounded-full)`) and a live vertical "cursor line" that tracks pointer position. This reads as an internal/toggleable grid-alignment tool shipped in production CSS — a nerdy, confidence-signaling artifact.

## Layout

- **`PageSection` primitive drives most of the page:** desktop `padding-block: 128px` collapsing to `48px`/`96px` at 768px and to `0` at 640px; a two-column `grid-template-columns: 1fr 1fr` header (headline left / description right) that collapses to one column ≤1024px; a footer grid that mirrors it (`grid-column: 2` content area, or `1 / -1` for full-width call-to-action rows).
- **`Pillar` primitive** (used for feature-pillar sections like "Powered by AI agents") lays out a 2-column `1fr 1fr` "ingredients" list, with unevenly-indented items (`padding-left: 32px`) separated by a 1px translucent-border tick mark — a deliberately asymmetric list rather than a plain bullet grid.
- Global content is capped by `--homepage-max-width` / `--page-max-width` tokens with dedicated `--page-padding-left/right` and `--homepage-outer-padding` gutters — a single cascading width/gutter system reused across every section (mirrors a design-system spacing token approach rather than per-section magic numbers).
- Nav bar items in order: **Product · Resources · Customers · Pricing · Now · Contact**, plus **Docs · Open app · Log in · Sign up** as a separate action cluster.
- Pricing page: four vertical cards (**Free $0 · Basic ~$10/user/mo annual · Business ~$16/user/mo annual · Enterprise custom**), no plan visually "recommended," feeding into a full row-by-feature comparison table below the cards — a card-then-table structure rather than cards alone.
- `/now` and `/changelog` share one hub with tab filters: **All · Changelog · Community · News · Craft · AI · Practices · Press** — changelog, blog, and press are unified into a single dated feed rather than three separate sections.

## Motion

- **A fully named easing-token system**, not ad hoc `ease`/`ease-in-out`: `--ease-out-quad`, `--ease-out-quart`, `--ease-out-quint: cubic-bezier(.23,1,.32,1)`, `--ease-out-cubic`, `--ease-in-cubic`, `--ease-in-out-quad`, plus generic `--ease-in/out/in-out`. Nearly every hover/press transition in the CSS references one of these tokens (e.g. `transition: filter .16s var(--ease-out-quad), transform .16s var(--ease-out-quad)`), giving the whole site one consistent motion feel instead of per-component tuning.
- **Hero headline reveal, confirmed from raw markup:** each phrase-chunk of the `<h1>` starts inline as `opacity:0; filter:blur(10px); transform:translateY(20%)`, staggered in with `animation: staggerIn .4s var(--ease-out-quart) backwards`, phrase-chunked differently for mobile vs. desktop (`show-mobile`/`hide-mobile` spans), with a `visuallyHidden` full-text duplicate for accessibility. This is a blur-up + rise-in text entrance, not a typewriter or fade-only effect.
- **Standard hover language across primitives:** `filter: brightness(1.4)` on hover (not a color swap) + `transform: scale(.97)` on `:active` — a consistent "brighten to indicate interactive, compress to indicate press" tactile pattern used on both `PageSection` CTAs and `Pillar` links.
- **Marquee (logo wall) component:** infinite CSS-only scroll via duplicated content + `translateX` keyframes, edge-faded with a `mask-image` gradient (`--mask-off/ease/on` stops), pauses on hover, has a vertical variant, and explicitly falls back to a static `aria-hidden` duplicate under `prefers-reduced-motion: reduced` — accessibility-aware by default, not bolted on.
- **Film-grain texture primitive (`Grain` component):** a `mix-blend-mode: overlay` layer with a `256px × 256px` tiled noise background at `opacity: .9` (full) or `.6` (subtle variant) — a literal grain/texture overlay applied to surfaces for a tactile, non-flat feel; a `@supports (-webkit-hyphens:none)` fork zeroes it out on Safari-family engines.
- **Live syntax-diff animation** for the "Review PRs and agent output" section: character-level added/removed spans with their own background colors (`rgba(255,0,0,.12*opacity)` removed, `rgba(0,255,5,.1*opacity)` added) and a `.4s ease-out` background transition, adjacent same-type chars merge radius — built for a genuinely live-looking code-diff reveal, not a static screenshot.
- Theme toggle is a 3-way segmented control with an animated sliding background pill keyed off `data-state=on/off` and a plain `.2s` color transition — Radix-toggle-group shaped markup.

## Hero Anatomy

- Centered layout, no hero image/screenshot behind the headline itself.
- H1: **"The product development system for teams and agents"** (verified verbatim from markup, phrase-chunked for the reveal animation).
- Subhead: **"Purpose-built for planning and building products. Designed for the AI era."**
- Single primary CTA pattern ("Get started"), secondary "Open app" / "Contact sales" depending on context; no hero image — product screenshots and illustrations (Inbox, Issues, Reviews, Pulse, a code-diff panel, dashboard analytics with cycle-time charts) appear stacked in `PageSection`s immediately below the fold, not inside the hero itself.
- Meta/OG: `og:title "Linear – The system for product development"`, `og:image https://linear.app/static/og/homepage.jpg`, `twitter:card summary_large_image`.

## Components of Note

- **Nav:** left-aligned wordmark + primary items, right-aligned auth actions; sticky header with its own CSS module (`Header.css`, 17KB — the largest single component stylesheet fetched, implying non-trivial responsive/mega-menu logic).
- **ThemeToggle:** compact segmented light/dark/system switch, animated background pill, lives directly in the header (not buried in a footer or settings page).
- **Marquee / logo wall:** the "trusted by 33,000 companies" customer-logo strip — infinite scroll, edge-masked, reduced-motion safe (see Motion).
- **Code-diff / review illustration:** live-look syntax-highlighted diff panel used to sell "Review PRs and agent output," reusing the same token-color system Linear presumably uses in its own product editor.
- **Pricing table:** four-card tier layout (Free/Basic/Business/Enterprise) feeding into a full feature-comparison table; Enterprise breaks out SAML/SCIM, invoice billing, migration support, and dedicated account management as distinct enterprise-trust signals.
- **Customer/case-study grid:** logo cards tagged by vertical (SaaS, AI, Fintech, Consumer, Hardware, Health, Enterprise) with "Read story →" / "Visit site ↗" links and named metrics per story (e.g. Scale: "compressed bug resolution time by 52%"; site-wide: "2.0x increase in filed issues," "3.3x faster issue resolution," "28% of issues authored by agents").
- **`/now` + `/changelog` unified hub:** one tabbed feed (All/Changelog/Community/News/Craft/AI/Practices/Press) instead of three separate site sections, with a visible search input.
- **`/llms.txt`:** a real, populated, hand-organized markdown index (Getting started, Account, AI, Sidebar, Teams, Issues…) each linking to a matching `/docs/*.md` — not a stub or 404.

## Voice & Copy

Terse, declarative, confident — short noun-phrase headlines ("A new species of product tool," "Built for purpose," "Powered by AI agents," "Designed for speed") rather than benefit-question copy. The "Linear Method" page opens with an outright manifesto register: _"There is a lost art of building true quality software. To bring back the right focus, here are the foundational ideas Linear is built on."_ Product copy privileges craft/discipline vocabulary ("practices," "momentum," "scope," "direction") over growth-marketing vocabulary (no "10x," no exclamation points observed). Customer proof leans on named, specific metrics rather than generic praise quotes.

## Distinctive Moves

1. **Blur-up, phrase-staggered hero text reveal with mobile-specific chunking** — each phrase of the H1 ships inline as `opacity:0; filter:blur(10px); translateY(20%)` and animates in with a named `--ease-out-quart` token, phrase-split differently for mobile vs. desktop, with a `visuallyHidden` accessible duplicate. Concrete, verified from raw markup — a much more specific technique than "whispers in at weight 300."
2. **A fully tokenized, named easing-curve system** (`--ease-out-quad/quart/quint/cubic`, `--ease-in-cubic`, etc.) applied consistently to every hover/press transition — motion-as-design-tokens, not per-component tuning. Directly portable to a design system.
   2b. **Color reserved for data, not for chrome** — the dark near-monochrome shell (`#08090A` bg, gray hairline borders) is accented only inside data-visualization illustrations (scatter-dot charts), using a categorical multi-hue palette (indigo/orange/cyan/pink/green), while the classic brand indigo `#5E6AD2` shows up sparingly in decorative line art rather than as a flat UI accent everywhere.
3. **Production CSS ships a hidden pixel-grid/debug overlay** (fixed column guides, live cursor-position line, floating viewport-size pill) — an internal design-QA tool left visible in the shipped bundle, signaling engineering/design rigor as its own kind of flex.

Runner-up: a literal 256px-tiled film-grain `mix-blend-mode: overlay` texture component applied to surfaces for tactile depth without gradients or glow.

## Buzz Evidence

- Cited repeatedly across 2026 design-trend write-ups (per crawlset scouting) as the standard-setter/baseline that gradient- and glassmorphism-heavy AI-startup sites are implicitly reacting against.
- Funding: closed an **$82M Series C in June 2025 at a $1.25B valuation**, led by Accel with Sequoia, 01 Advisors, Seven Seven Six, Designer Fund, and Index Ventures participating; ~$134.2M raised total. [S, Sacra, secondary aggregator — cross-check against a primary Linear/Accel announcement if this figure is load-bearing]
- Self-reported scale on its own customers page: **"Powering more than 33,000 organizations"**, including named marquee logos OpenAI, Cursor, Coinbase, Brex, and Scale, each with a dedicated case-study page and hard metric (e.g. Scale: 52% faster bug resolution).
- Site itself functions as an unofficial "who else takes this seriously" signal: it's referenced as an interview subject (alongside Anthropic, Stripe, Notion, Shopify, Framer) in the 2026 "State of AI Design" report per the earlier scout note.

## What Astryx Should Take

- **Adopt a named easing-token set** (`--ease-out-quad/quart/quint`, etc.) as first-class Astryx design tokens, and require every `stylex.create` transition in marketing/docs surfaces to reference one — turns "motion feels consistent" from a code-review nitpick into an enforced token, and gives Astryx's own AGENTS.md a concrete rule ("use `tokens.easeOutQuint`, never a raw `cubic-bezier`").
- **Reserve color for data/illustration, keep chrome monochrome** — for the Astryx marketing+docs site, this argues for a near-neutral base (light or dark) with the categorical palette showing up only inside component-preview illustrations, code-diff/anatomy diagrams, and doc callouts — not splashed across nav/hero chrome. Matches Astryx's own StyleX-token philosophy (`stylex.defineVars`) and avoids the generic-gradient-hero look the crawlset repeatedly flags as a 2026 red flag.
- **Ship a real `/llms.txt` + per-doc `.md` mirror.** Linear's is not a stub: it's a hand-curated index (Getting started/Account/AI/Sidebar/Teams/Issues…) each linking to a matching `.md`. Astryx's `{Name}.doc.mjs` files are already structured data — emit them as a generated `llms.txt` + flat markdown mirror at build time so coding agents can read component docs without HTML.
- **Reuse the `PageSection` two-column pattern for docs pages**: headline+one-liner left, prose/description right, collapsing to one column at 1024px, with a consistent `padding-block` scale (128/96/48/0) — a ready-made rhythm for Astryx's own component-doc pages (anatomy left, prop table/description right).
- **The hover language (`brightness(1.4)` + `scale(.97)` on press) is a cheap, StyleX-native micro-interaction** (`stylex.when.ancestor` not even needed — plain `:hover`/`:active` pseudo-classes, both StyleX-supported) worth adopting as Astryx's default interactive-element feel, replacing generic opacity fades.
- **Borrow the Marquee accessibility pattern verbatim**: mask-gradient edge fade, pause-on-hover, duplicate-content loop, explicit `prefers-reduced-motion` fallback to a static `aria-hidden` list — directly implementable as an Astryx `Marquee`/logo-wall component and is exactly the kind of "supported CSS, not JS workaround" pattern the project's StyleX principles already mandate.
- **Consider a lightweight design-grid debug overlay** (à la Linear's hidden column-guide + cursor-line + pixel-readout) as an opt-in dev tool in Storybook or the docs site — cheap to build, and it's the kind of engineering-culture signal the crawlset's own trend docs (Cursor, Resend, opencode.ai) reward as "restraint over flash."

## Pages Read

- https://linear.app/ (home — WebFetch + raw HTML/CSS via curl, including `Providers`, `Hero`, `page`, `Grain`, `Marquee`, `CustomerQuotes`, `Button`, `PageSection`, `Pillar`, `Header`, `ThemeToggle`, `code-diff`, `DiffsIllustration` CSS bundles)
- https://linear.app/method (WebFetch)
- https://linear.app/pricing (WebFetch + raw HTML via curl)
- https://linear.app/changelog (WebFetch)
- https://linear.app/now (WebFetch)
- https://linear.app/customers (WebFetch)
- https://linear.app/docs (WebFetch)
- https://linear.app/llms.txt (curl, raw content read directly)
