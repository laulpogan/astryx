---
name: GitHub Primer — Homepage
url: https://primer.style/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Primer is GitHub's own design system, and primer.style is its documentation hub — not one site but three explicitly named, separately-versioned tracks under one roof: **Product UI** (the app-building system used inside github.com itself, with React, Rails, and Figma implementations), **Brand UI** (`@primer/react-brand`, a second, separate component library purpose-built for marketing/landing pages), and **Brand Toolkit** (hosted off-domain at `brand.github.com`, the visual-identity/logo/voice guidelines). The homepage's entire job is routing a visitor into the right one of the three before showing any shared content, then surfacing "Shared Foundations" (Accessibility, Octicons, Primitives) that cut across all three. The scout's prior notes on this split, the immediate CTA-before-content hero, and the illustration-per-section pattern all check out on direct verification.

## Typography

Confirmed from the rendered typography-primitives table (`/product/primitives/typography`):

- **Sans / UI / Display**: `'Mona Sans VF', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` — Mona Sans is GitHub's custom variable typeface (part of its 2023 Octicons/Mona-Sans/Hubot-Sans rebrand); the `VF` suffix confirms the variable-font build is loaded, not a static weight set.
- **Monospace**: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace` — a system-first stack, no custom mono typeface (unlike Cartesia/terminal.shop-style Berkeley Mono bets elsewhere in this survey).
- **Size scale** (documented as literal CSS custom properties): `--base-text-size-xs: 0.75rem`, `-sm: 0.875rem`, `-md: 1rem`, `-lg: 1.25rem`, `-xl: 2rem`, `-2xl: 2.5rem`.
- **Weight scale**: Light `300`, Normal `400`, Medium `500`, Semibold `600`.
- **Line-height scale**: Tight `1.25`, Snug `1.375`, Normal `1.5`, Relaxed `1.625`, Loose `1.75`.
- **Semantic tokens** (composed, not raw): `--text-body-shorthand-large`, `--text-display-size`, `--text-title-weight-medium`, `--text-caption-lineHeight` — a two-tier system (base primitives feeding named semantic tokens) rather than one flat scale.

## Color

Confirmed exact hex values from `/product/primitives/color`:

- **Foreground**: `--fgColor-default` `#1f2328`, `--fgColor-muted` `#59636e`, `--fgColor-accent` `#0969da`, `--fgColor-success` `#1a7f37`, `--fgColor-danger` `#d1242f`, `--fgColor-attention` `#9a6700`.
- **Background**: `--bgColor-default` `#ffffff`, `--bgColor-muted` `#f6f8fa`, `--bgColor-emphasis` `#25292e`, `--bgColor-accent-emphasis` `#0969da`, `--bgColor-success-emphasis` `#1f883d`, `--bgColor-danger-emphasis` `#cf222e`.
- **Border**: `--borderColor-default` `#d1d9e0`, `--borderColor-emphasis` `#818b98`, plus accent/success/danger emphasis variants matching the foreground hues above.
- **Button pattern colors** are their own token tier, not derived live from the semantic set: `--button-primary-bgColor-rest` `#1f883d` (GitHub's signature **green** primary action, not blue — accent blue `#0969da` is reserved for links/focus, not the primary CTA), `--button-outline/danger/default-bgColor-rest` all `#f6f8fa`.
- **Nine full theme files** ship as first-class primitives, not a bolt-on accessibility mode: `light`, `dark`, `dark_dimmed`, plus `light_high_contrast` / `dark_high_contrast`, `light_colorblind` / `dark_colorblind`, and `light_tritanopia` / `dark_tritanopia`. Theming is controlled by three `data-*` attributes on `<body>` — `data-color-mode` (`auto`/`light`/`dark`), `data-light-theme`, `data-dark-theme` — with theme names using underscores where the CSS filenames use dashes.

## Layout

Two distinct layout modes depending on page type:

- **Marketing/landing pages** (home, `/product`, `/brand`): single-column, card-based sections stacked vertically — hero → three offering cards (Product UI / Brand toolkit / Brand UI) each with its own illustration and "Learn more" link → "Shared Foundations" card grid (Accessibility, Octicons, Primitives) → "Design at GitHub" (blog + About) → footer.
- **Documentation pages** (component/token pages): classic three-column docs shell — fixed left sidebar with collapsible sections (Getting Started, Primitives, UI Patterns, Scenario Patterns, Components [80+], Internal Components [17], React Hooks [17], CSS Utilities [11], Contribute), center content column, and a sticky right-hand "On this page" anchor nav. This is the same shell pattern as Base UI and Stripe's docs (per other dossiers in this survey) — an industry-converged docs template, not a Primer original.
- **Spacing scale**: `--base-size-2` through `--base-size-128` (plus a mirrored negative range `--base-size-negative-2` to `-48` for offset margins), incrementing by 2px at small sizes (2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48) then jumping to larger intervals (64, 80, 96, 112, 128).
- **Radius scale**: `0.1875rem` (3px), `0.375rem` (6px), `0.75rem` (12px), and `full` (pill).
- **Control sizing**: XSmall `1.5rem`, Small `1.75rem`, Medium `2rem`, Large `2.5rem`, XLarge `3rem` — a five-step control-height scale shared across form inputs and buttons.

## Motion

- Product UI's docs pages show no scroll-triggered or WebGL motion — interaction is limited to standard hover/focus states on buttons, icons, and the dark-mode toggle (exact transition durations/easing curves were **not determined** — not exposed in the fetched content and would need a live browser inspection to confirm).
- Brand UI ships an explicit, named motion API as a first-class part of the component library: `AnimationProvider` + `Animate` components from `@primer/react-brand`. Default stagger delay is `100ms` between auto-staggered DOM-order children; visibility triggers are `'bottom-of-screen'` (default), `'middle-of-screen'`, `'about-to-leave'`; animation triggers are `'click'`, `'on-visible'` (default), `'immediate'`. Visibility detection is Intersection-Observer-based, with a `runOnce` prop to persist animation state.
- Stated philosophy is explicit restraint: **"Animations should be used sparingly."** No named easing-curve or duration tokens are documented beyond the 100ms stagger figure — the system prescribes _when_ to animate more precisely than _how fast_.

## Hero Anatomy

The homepage hero is text-first with zero photographic, gradient, or 3D imagery: headline **"The design system for GitHub"**, subhead **"Build UI at GitHub with _Primer Product UI_"** (italic emphasis on the product name), immediately followed by three parallel CTA buttons — "Get started with Product UI" (`/product`), "Get started with Brand toolkit" (`brand.github.com`), "Get started with Brand UI" (`/brand`) — before any scroll. The one recurring visual device across all three offering cards is **Mona**, GitHub's illustrated mascot character, appearing as a distinct illustration per section rather than product screenshots. This confirms the scout's note: the hero forces a three-way self-routing decision (which of the three systems do you need?) ahead of any shared content, a structurally different hero job than a typical single-CTA SaaS hero.

## Components of Note

- **Octicons page** (`/octicons`): 600+ SVG icons rendered in a size-segmented grid (12px, 16px, 24px, 48px, 96px), each clickable to reveal sizing/usage specs — "Select an icon to view sizing and usage details."
- **Component doc template** (verified on `/product/components/button`): implementation tabs for **React** (Storybook link, source, usage-query link), **Rails** (docs, Lookbook, source), and **Figma** side by side on one page — the same component documented across three actual production surfaces, not just one framework. Live interactive preview sits above a copyable JSX block with Reset / Copy / "Open in StackBlitz" actions and an expandable "Show full code."
- **Brand UI's component catalog is unusually broad for a design system** — beyond standard Button/Card/Form primitives it ships full marketing-page building blocks as documented, installable components: `Bento`, `River` / `River accordion` / `River breakout tabs`, `CTA banner`, `CTA form`, `Comparison table`, `Pricing options`, `Statistic`, `Timeline`, `Testimonial`, `Eyebrow banner`, `Breakout banner`, `Pillar`, `Tiles`, `Media playlist`, `Sub nav`, `Subdomain nav bar`, `Logo suite`, `IDE`. This is a design system documenting the vocabulary of its _own marketing site_ as reusable, versioned components.
- **Nine accessibility-variant color themes** (see Color) function as a component-adjacent feature: switching between colorblind/tritanopia/high-contrast variants is a single `data-*` attribute change, not a separate theme package.

## Voice & Copy

Two distinct registers depending on audience:

- **Docs/product copy** is terse and purely functional, avoiding marketing language entirely: _"Text sizes, weights and font families used across GitHub,"_ _"Color is a fundamental part of Primer's visual language,"_ _"These layout guidelines aim to provide a set of standards that enables consistent, accessible, and responsive experiences."_ Component guidance is prescriptive and direct — "Use sparingly," "Avoid disabling buttons" — written for practitioners making real implementation decisions, not for persuasion.
- **The About page** shifts to a warm, human register: the team (20+ people spanning Accessibility, Design, and Engineering roles, formed in 2016 from two people) is introduced through individual bios that mix professional specialty with personal texture (favorite tools listed alongside coffee, Spotify, notebooks), and repeatedly uses words like "passionate," "generous," "inspiring" — a mentorship/community framing distinct from the clipped docs voice elsewhere on the site.

## Distinctive Moves

1. **A three-way named front door** (Product UI / Brand Toolkit / Brand UI) forces visitor self-routing before any shared content — an explicit acknowledgment that "design system" means three different products for three different audiences (product engineers, brand/marketing builders, non-technical brand users), each maintained and versioned separately, rather than one undifferentiated component gallery.
2. **Brand UI documents full marketing-page components** (Hero, Bento, River, Pricing options, Statistic, Timeline, Testimonial, CTA banner) as first-class, versioned, installable primitives — most peer design systems (shadcn, Radix, Base UI in this survey) stop at buttons/forms/overlays; Primer's brand arm treats the marketing site itself as the component surface.
3. **Nine accessibility color themes as core primitives**, not an afterthought toggle — colorblind-safe and tritanopia variants ship at the same tier as light/dark, switchable via one `data-*` attribute, meaning accessibility is architected into the token system's structure rather than retrofitted as a single "high contrast" checkbox.

## Buzz Evidence

- `primer/react` on GitHub: **3.9k stars, 667 forks**, actively released (`v38.30.0`, June 29, 2026 — days before this crawl), confirming an actively-maintained, still-shipping project a decade after the team's 2016 founding.
- The strongest "buzz" signal for this exemplar isn't virality but **scale of dogfooding**: Primer is the literal design system rendering github.com for its entire user base — a durability/adoption proof no marketing-driven AI-startup site in this survey can match.
- Star/fork counts are modest by viral-AI-startup standards elsewhere in this crawlset (e.g. bolt.new's 55.6M-view launch clip) — Primer's credibility comes from longevity and production dependency, not launch-moment virality.

## What Astryx Should Take

- **Self-routing front door, conditionally**: if Astryx ever needs to serve genuinely distinct audiences (component consumers vs. theme/brand builders vs. docs-only visitors), a named multi-track split ahead of shared-foundations content is a proven pattern — but only worth the added top-level nav weight if those audiences are truly that separate; don't force a three-way split Astryx doesn't need.
- **Ship Astryx's own marketing-page components as first-class, documented library primitives** (Hero, Bento/card-grid, Statistic, Timeline, Testimonial, Pricing table) rather than leaving marketing composition as one-off bespoke JSX per site — this both proves the system by dogfooding it on Astryx's own site and gives every future Astryx-built marketing page the same components for free.
- **Bake accessibility color variants into the token architecture from day one**: a colorblind-safe and high-contrast theme switchable via one data-attribute (following `--fgColor-*` / `--bgColor-*` / `--borderColor-*` naming) is cheap to add now and expensive to retrofit later — Primer's nine-theme structure is a directly copyable reference shape.
- **Adopt the prescriptive, practitioner-voice microcopy pattern** ("Use sparingly," "Avoid disabling X") in Astryx's `.doc.mjs` descriptions — it reads as opinionated design guidance rather than neutral prop-table filler, and costs nothing beyond copy discipline.
- **Benchmark Astryx's own CSS custom-property naming** against Primer's scheme (`--fgColor-*`, `--bgColor-*`, `--borderColor-*`, `--button-{variant}-bgColor-{state}`) — it is a clean, state-aware, scannable convention worth explicit comparison during any Astryx token-naming review.

## Pages Read

- https://primer.style/
- https://primer.style/product
- https://primer.style/brand
- https://primer.style/product/getting-started/accessibility
- https://primer.style/product/getting-started/foundations
- https://primer.style/product/primitives
- https://primer.style/product/primitives/typography
- https://primer.style/product/primitives/color
- https://primer.style/product/primitives/size
- https://primer.style/product/components/button
- https://primer.style/octicons
- https://primer.style/brand/introduction/theming
- https://primer.style/brand/introduction/animation
- https://primer.style/brand/components
- https://primer.style/about
- https://github.com/primer/react (secondary, buzz evidence only)

Not fetched / 404: https://primer.style/llms.txt, https://primer.style/brand/components/hero
