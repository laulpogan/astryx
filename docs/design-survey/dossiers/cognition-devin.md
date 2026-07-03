---
name: Cognition (Devin)
url: https://cognition.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Cognition is the company behind Devin, marketed as "the first autonomous software engineer." `cognition.com` is the corporate/mission site (careers, research, blog, company story) while the actual product lives on the separate domain `devin.ai` (product screenshots, pricing nav, "Try Devin" / "Download" CTAs). The corporate site sells the company's philosophy through a numbered, editorial-document layout rather than product screenshots or visual spectacle; `devin.ai` sells the product itself with conventional SaaS hero + screenshot patterns. Both share the same three-typeface system and near-monochrome-plus-one-accent palette, and both are light-mode only.

## Typography

Confirmed directly from the shipped CSS bundle (`--font-*` custom properties and `@font-face` blocks), not guessed from rendering:

- **Headings / UI chrome:** `"NB International Pro"` (CSS var `--font-heading`, internal name `nbInternational`), falling back to `system-ui, sans-serif`. A neo-grotesque sans. Used for the H1, nav labels, buttons, and the numbered section markers.
- **Body / editorial copy:** `"STK Bureau Serif"` (CSS var `--font-body`, internal name `stkBureauSerif`), falling back to `Georgia, serif`. Used for the mission-statement paragraph and long-form prose.
- **Mono:** `Geist Mono` (var `--font-geist-mono` → `--font-mono`), used for code, numerals, and small labels.
- `devin.ai` (the product site) reuses the same two primary faces (NB International Pro, STK Bureau Serif) plus Geist Mono; a case-study/embed CSS chunk also references `Inter` and `IBM Plex Mono`, but those read as third-party embed fonts, not the brand voice.
- H1 example (`Cognition operates Devin, the first autonomous software engineer.`): `font-heading`, **weight 400 (not bold)**, `24px` mobile → `36px` desktop, `line-height 1.1–1.2`, `letter-spacing -0.02em`. This is a notably restrained hero size — no oversized 60–120px display type.
- Body paragraph: `font-body` (serif), `15px`, `line-height 1.5` — small, book-like reading size.
- Font-size scale is a fine-grained px ladder (8, 9, 10, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 18, 19, 20, 22, 24, 32, 36px), not a round rem scale.
- Letter-spacing values found: `-0.02em`, `-0.01em`, `-0.12px`, `0.02em`, `0.08em`, `0.5px`, and a named token `--tracking-wider: 0.05em` (used on small caps/labels).
- **Notable cross-site pattern:** `STK Bureau Serif` is the same serif family flagged in this survey's Koah dossier notes, but Koah pairs it with `STK Bureau Sans` while Cognition pairs it with `NB International Pro` — evidence this specific editorial serif is becoming a recognizable, licensed 2026 choice among AI-adjacent brands wanting a "considered publishing" register rather than generic SaaS grotesk-only type.

## Color

Pulled from `--color-*` custom properties in the production CSS bundle:

| Token                    | Value                | Role                                                                      |
| ------------------------ | -------------------- | ------------------------------------------------------------------------- |
| `--color-background`     | `#f7f6f5`            | Page background — warm off-white/parchment, not pure white                |
| `--color-surface`        | `#fff`               | Card/surface fill                                                         |
| `--color-surface-alt`    | `#f2f5fa`            | Cool pale blue-gray, used sparingly                                       |
| `--color-text-primary`   | `#000`               | Primary ink                                                               |
| `--color-text-secondary` | `#1919198f`          | Near-black at ~56% opacity                                                |
| `--color-button`         | `#191919`            | Primary CTA fill (near-black)                                             |
| `--color-border`         | `#0000000f`          | Hairline border (black at ~6% opacity)                                    |
| `--color-accent`         | `#20f` (`#2200ff`)   | Saturated electric blue/indigo — hover states, links, corner-accent marks |
| `--color-error`          | `#fa5050`            | Coral red                                                                 |
| `--color-amber-400`      | `#fcbb00`            | Amber/gold, status use                                                    |
| (unnamed)                | `#16a34a`, `#00a558` | Greens, likely status-positive indicators                                 |

**Formula:** warm parchment background + near-black ink + exactly one saturated accent (electric blue), used only for interactive/hover states — not as a hero gradient. **Zero `border-radius` utility classes appear anywhere in the fetched homepage HTML** — every button, card, and image is hard-cornered. No `prefers-color-scheme` media query exists in the bundle, and `devin.ai`'s `<html>` tag ships a literal `theme-light` class with no dark counterpart found. **This is a light-mode-only site.**

## Layout

- **Numbered-section scaffold**, confirmed live in the DOM: `01` (hero/mission statement), `02` (untitled enterprise logo wall), `03` (`"Join the team"` recruiting CTA), `04.` (`"Articles"`). This reads as a single continuous editorial document indexed by number, not a conventional multi-section marketing page with named headers for every block.
- **Sticky left nav rail** on desktop: `position: sticky`, offset by a `--sidebar-offset: 18px` var and a `-translate-y-[64px]` transform, `self-start` — behaves like a persistent index/rail alongside the scrolling content column, collapsing to a full-screen `popover` menu on mobile.
- **Grid:** Tailwind-style `grid-template-columns: repeat(12, 1fr)` base, plus ad hoc asymmetric column ratios (e.g. `1.2fr 1.7fr .7fr`, `minmax(150px,1.1fr) minmax(0,2.2fr) minmax(80px,.7fr)`) for editorial, non-uniform layouts.
- **Container:** outer shell capped at `max-width: 1440px`; `--container-padding` scales `20px` (mobile) → `64px` (desktop).
- **Reading column:** article/prose content constrained to `max-width: 40rem`/`48rem` (640/768px), a narrow book-like measure.
- **Zero border-radius** across the entire homepage reinforces a hard-edged, print/registration-mark aesthetic (see Distinctive Moves).

## Motion

- **No JS animation library detected** in the fetched HTML/CSS (no `framer-motion`, `gsap`, `lenis`, `three.js`, or `@react-three` strings found). Motion is CSS-native.
- Named keyframe `@keyframes fusion-rise-in { 0% { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }` — a simple 4px fade-up entrance used on blog/feature callouts.
- Tailwind default `ping` and `pulse` keyframes are also shipped, implying a small live-status pulse dot somewhere in the UI.
- Transitions are limited to opacity and color (`hover:opacity-80`, `duration-400`), default easing `cubic-bezier(.4,0,.2,1)` — standard, unflashy ease-out.
- Explicit `hover-only:hover:` variant usage (a `@media (hover:hover)` guard) shows deliberate care to suppress hover-only affordances on touch devices.
- A scatter-plot chart on the "Devin Fusion" blog post ("FrontierCode ExtendedScore vs Cost") is rendered via **visx** (Airbnb's D3-based React charting library) — a real interactive chart, not a static image.

## Hero Anatomy

**cognition.com (corporate/mission site):**

- Headline: _"Cognition operates Devin, the first autonomous software engineer."_ — set at only 36px desktop, weight 400, left-aligned in the main content column, beside a small numeral `01` marker in the mono/heading face. No hero image, illustration, gradient, or 3D asset at all.
- Sub-copy is a genuine ~80-word manifesto paragraph in the serif body font: _"We believe the purpose of technology is to expand human capacity — not by replacing meaningful work but by working alongside people as an exponential collaborator, helping them think deeper and move faster."_
- The entire "spectacle" of the hero is typographic — a numbered index marker plus considered prose, no supporting graphic whatsoever.
- Section `03` CTA: single button, _"Explore roles"_ → `/careers`, small (32px tall), `bg-button` (#191919) fill, white text, sharp corners, `hover:opacity-80` — deliberately understated, not a big colorful CTA.

**devin.ai (product site, separate domain):**

- Headline: _"Devin, the AI software engineer"_ / _"Devin is built for engineering teams with complex, multi-repo projects."_
- CTAs: _"Try Devin"_, _"Contact sales"_, _"Download"_, _"Log in"_.
- Unlike the corporate site, this hero shows real product screenshots directly under the fold: a PR-review diff view, a release-notes UI "maintained by Devin," and a Slack thread of triaged bug reports — i.e. the corporate site sells the mission, the product site sells the interface.

## Components of Note

- **Numbered index rail (01–04)** doubling as sticky in-page navigation — an alternative to a conventional top-nav-only marketing page.
- **Corner-bracket hover marks (the standout detail):** each card (enterprise-logo tiles in section `02`, article cards in the homepage's "Articles" rail) has four small `1×3px` bars in the accent blue (`#20f`) positioned absolutely at its four corners, hidden by default (`opacity-0`) and revealed via `group-hover:opacity-100`. It reads as a camera-viewfinder / print-registration-mark reveal on hover — directly reinforced by the site's otherwise universal zero-border-radius, hard-cornered grid.
- **Homepage "Articles" section is a horizontal-scroll carousel**, not a static grid: cards sized `flex-[0_0_calc(4/15*100%)]` on desktop with square `#EDECEB`-fill prev/next arrow buttons, each card carrying a genuine Next.js `<Image>` thumbnail (`data-nimg="1"`, `/next/image?url=...`, `16:9`, lazy-loaded, 1x/2x srcset). This confirms the scout note's "Next.js image-optimized blog thumbnails" claim — but note it's specific to this homepage carousel, not the standalone `/blog` index (see correction below).
- **Untitled enterprise logo wall** (section `02`): Mercedes-Benz, Goldman Sachs, Ramp, Anduril, Infosys, Itaú, Cognizant, Nubank, DeNA, Athena Health — no card framing, same corner-bracket hover reveal as the article cards.
- **Standalone `/blog` index** uses a different, plainer template: a vertical list of title + right-aligned `MM.DD.YY` date + 1–2 sentence excerpt, no thumbnails, no tags/filters — text-only and chronological.
- **`/research` page**: same numbered-section pattern (01/02/03), headline "Research," subhead "Cognition trains models optimized for software engineering," lists dated research posts (FrontierCode, SWE-1.6 announcements) as its proof mechanism instead of imagery.
- **`/careers` page**: modular sections — team overview, benefits (medical/dental/vision, unlimited PTO, 401k, wellness/commuter stipends), candid team photography (labeled `Fig. 02–04`), an employee testimonial, and a 75+-role job directory across six departments routing to Ashby.

## Voice & Copy

Direct, unhedged, occasionally blunt-metaphor prose. The mission paragraph frames Devin as "an exponential collaborator" that lets engineers "operate more like architects." The Devin Fusion blog post opens with _"Engineering teams are lighting money on fire"_ and uses relatable analogy (_"You wouldn't drive a Lamborghini to the grocery store"_) to justify a cost/performance router feature — technical precision delivered with plain-spoken confidence rather than hype-adjective stacking ("revolutionary," "game-changing" are absent). Careers copy leans on credential density ("10 IOI gold medals," alumni of Cursor/Scale AI/Google DeepMind) as a trust signal rather than culture-deck platitudes.

## Distinctive Moves

1. **Numbered-section narrative scaffold (01→04) as the entire information architecture** of the corporate site — replaces a conventional named-header marketing page with a document-like index, giving a linear pitch (mission → proof → recruiting → activity) a scannable structure without any visual spectacle.
2. **Corner-bracket hover-reveal marks** — four tiny accent-colored bars at each card's corners, invisible until hover. A cheap, pure-CSS (`opacity` + `:hover`, no JS) micro-interaction that ties directly to the site's zero-border-radius, hard-edged grid — reads as a viewfinder/registration-mark motif rather than a generic drop-shadow-on-hover.
3. **Deliberate restraint at both extremes of the funnel**: the highest-signal AI-agent company in this survey (13x ARR growth, $26B valuation) ships a 36px, weight-400 headline with zero hero imagery on its corporate site — the opposite of the gradient-orb/3D-spectacle playbook common elsewhere in this crawlset. Confidence is signaled by restraint, not visual noise.

## Buzz Evidence

- **$1B raised at a $25B pre-money / ~$26B post-money valuation, May 2026** (led by Lux Capital, General Catalyst, and 8VC; also Ribbit Capital, Atreides, Layer Global), up from a $10.2B post-money valuation just eight months earlier (Sept 2025) [S, TechCrunch, 2026-05-27, ~85].
- **ARR grew from ~$37M to $492M year-over-year (≈13x)**, reported May 2026 — this confirms the scout note's "13x ARR growth in 12mo" claim as accurate [S, multiple secondary aggregators (Sacra, Enterprise DNA, KuCoin) citing the same TechCrunch figures, 2026-05, ~60].
- At $492M run-rate revenue and $26B valuation, Cognition trades at roughly 53x revenue — cited across coverage as a standout multiple even within the current AI-agent funding environment.
- Growth was driven partly by the Windsurf acquisition/integration, which shifted revenue mix from bottoms-up developer subscriptions toward larger enterprise, multi-seat contracts.

## What Astryx Should Take

1. **Offer a "numbered document" hero/page template as an alternative to the oversized-display-type template.** Astryx's own marketing/docs homepage could structure its pitch as `01` philosophy/why-StyleX, `02` adoption proof (logos of teams/repos using it), `03` contribute/community CTA, `04` changelog/release rail — a scannable narrative scaffold that needs no hero illustration, directly reusing the numbered-section pattern documented here.
2. **Ship the corner-bracket hover mark as a real, buildable StyleX component.** Four `1×3px` accent bars per card corner, `opacity: 0` by default, revealed via `stylex.when.ancestor(':hover', marker)` — zero JS, StyleX-native, and gives Astryx's component-doc gallery or template gallery cards a distinctive "precision engineering" hover affordance instead of a generic shadow-lift.
3. **Adopt the token-per-role type system as the documented pattern, not just an example.** `--font-heading` / `--font-body` / `--font-mono` mapped to three distinct typefaces by semantic role (chrome vs. prose vs. code) is a clean naming precedent Astryx's own typography tokens doc (`$ASTRYX docs tokens`) should mirror explicitly, rather than a single font stack doing all three jobs.
4. **Use this as hard counter-evidence against "AI coding tool = dark IDE-black site."** Despite being catalogued in scout notes under "dark AI aesthetic," Cognition/Devin is light-only with a warm-parchment background — worth citing directly when arguing Astryx's own docs/marketing default theme doesn't need to default dark to read as serious engineering infrastructure.
5. **Restrained hero sizing (36px, weight 400) is a legitimate, verified alternative** to the "go oversized" instinct seen elsewhere in this survey (Resend, Cardboard) — Astryx's page-template library should ship both an "editorial-quiet" hero variant and an "oversized-display" hero variant, not just the latter.
6. **Zero-border-radius-plus-one-accent-color as a complete, ownable palette formula** (warm off-white bg + near-black ink + one saturated accent used only on interactive states) is cheap to implement as an Astryx example theme and reads as more "engineering-credible" than gradient-heavy defaults — pair directly with Astryx's existing `stylex.defineVars`/`createTheme` token system.

## Pages Read

- https://cognition.com/ (home)
- https://cognition.com/research
- https://cognition.com/blog
- https://cognition.com/blog/devin-fusion
- https://cognition.com/careers
- https://devin.ai/ (product site)
- https://cognition.com/llms.txt (attempted — returned HTTP 404, does not exist)
- Raw asset reads (not pages, but primary evidence): `cognition.com` main CSS bundle (`/_next/static/chunks/05p3mx9-hcqs5.css`) and homepage HTML source; `devin.ai` homepage HTML source and both CSS chunks (`_astro/_caseStudy_.*.css`)
