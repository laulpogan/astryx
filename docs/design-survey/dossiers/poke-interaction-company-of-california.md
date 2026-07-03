---
name: Poke (Interaction Company of California)
url: https://poke.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Poke is a proactive personal AI assistant, built by The Interaction Company of California (Palo Alto), that lives inside Apple Messages, WhatsApp, Telegram, and RCS rather than a standalone app or web dashboard — you text it like a friend and it acts across 40+ connected services (Gmail, Calendar, Notion, GitHub, Oura, Strava, etc.), proactively surfacing reminders and follow-ups instead of waiting to be asked. It shipped a developer platform ("Kitchen" + CLI + MCP servers) for building shareable "Recipes" (bundled integrations/automations), and in June 2026 became the first AI agent approved on Apple's Messages for Business platform — momentum it has actively converted into a $25M-raised, General Catalyst/Spark Capital-backed marketing site built to look like the product's own texting voice, not a SaaS brochure.

## Typography

- **Display / headlines — "Exposure"**: a variable font (`Exposure-205TF-VAR.woff2`, plus a variable italic), self-hosted, declared `font-family:Exposure` / consumed via `.font-exposure{font-family:var(--font-exposure);font-weight:var(--exposure-weight)}`. Every headline instance also sets a custom OpenType **variation axis `EXPO`** to a negative value (`font-variation-settings:'EXPO' -5` in the nav wordmark, `-10` in section H2/H3s) and explicitly disables ligatures/contextual alternates (`font-feature-settings:'liga' off, 'clig' off`). Tight tracking at display sizes: `-0.03em` to `-0.04em`. Hero H1 scales from `text-[52px]` desktop down to `26–32px` on narrow phones via stepped breakpoints (`min-[712px]`, `max-[374px]`, `max-[339px]`), `leading-none`/`1.05`.
- **UI / body — "Open Runde"**: self-hosted open-source rounded sans (weights 400/500/600/700, files `OpenRunde-Regular/Medium/Semibold/Bold.woff2`), wired through Next.js `next/font` as `--font-open-runde` → Tailwind's `font-sans` utility. Fallback stack in one scoped override: `-apple-system, BlinkMacSystemFont, sans-serif`. Nav links sit at `text-[15px]`, `font-medium`, `tracking-[-0.001em]`.
- **Mono — JetBrains Mono**: self-hosted with a metric-matched `"JetBrains Mono Fallback"` face (next/font pattern), used for docs code blocks and CLI examples (`font-family:var(--font-jetbrains-mono),ui-monospace,monospace`).
- Body text in feature sections: `text-lg`, `font-medium`, `leading-[1.4]`, at `black/70` opacity rather than a separate gray token.

## Color

- **Page theme-color / canvas**: `#EEEBE6` (warm oatmeal/cream — declared in `<meta name="theme-color">`).
- **Card surfaces**: `#FFFDFA` (bento feature cards), `#F9F8F5` (docs code block background).
- **Hairline borders/dividers**: `#e2e1de` (default card border), `#CBC9C5`, `#D4D1CB` (section-divider `h-px` rules), `#D4D4D4`.
- **Text**: pure `black` for headlines, `black/70` and `black/55` and `black/40` opacity steps for body/secondary copy (no separate gray text tokens — everything derives from black at different alphas), `#6F6F72` for small pinned-chat labels.
- **Brand accent — "ocean"**: `#2483e2`, used only as a `color-mix()` input for an animated rotating gradient border (`--gradient-border-from-ocean/55` → `color-mix(in oklab, #2483e2 55%, transparent)`), not as a flat fill anywhere observed.
- **Per-integration hover tint**: card hover border/shadow use `color-mix(in oklch, <brand-color> 6-7%, #e2e1de)` where `<brand-color>` is swapped per card — e.g. Gmail's card hover-tints toward Google red `#EA4335`, another toward `#7B8FA1` — so each feature card borrows its integration's brand color for a subtle hover glow instead of one global accent.
- **Dark-mode tokens exist but aren't user-facing on the marketing site**: `.dark{--background:#0e0e11;--foreground:#f5f5f5;--card:#171717;...}` — present in the compiled CSS (shared with the logged-in product/app surface) but the marketing HTML ships `class="light"` with no visible toggle.
- **Framework fingerprint**: the CSS is Tailwind v4 — visible from the `@supports (color:lab(0% 0 0))` fallback layer pairing every `--color-*` token with both an sRGB hex and a `lab()`/`oklab()` value (Tailwind v4's wide-gamut color strategy), plus the full default Tailwind palette (`amber-*`, `blue-*`, `green-*`, `neutral-*`, `red-*`) compiled in even though only a handful of steps are actually used.

## Layout

- Next.js (`/_next/image` optimization, `next/font`) + Tailwind v4 + **Base UI** (the MUI-team headless component library; nav dropdowns carry `data-base-ui-navigation-menu-trigger`) — no visible component library skin (Radix/shadcn markers absent).
- Section max-widths cluster at `1200px` / `1248px` / `1280px`; a few wide decorative elements go to `2300px`. Generous corner radii: `rounded-3xl` (24px) on feature cards, custom `20–22px` radii elsewhere, `8–12px` icon radii.
- Sections are separated by a plain 1px hairline (`h-px w-full bg-[#D4D1CB]`) rather than alternating background-color blocks — the whole page stays on one cream/white canvas top to bottom.
- **Continuous (not stepped) fluid sizing**: components are given `container-type: inline-size` and compute a single interpolation factor, e.g. `--t: clamp(0, (100cqw - 322px) / 160px, 1)`, then thread `var(--t)` through every dependent dimension: `padding-inline: calc(32px + 8px * var(--t))`, bento-card height `calc(336px + 52px * var(--t))`, even the hero's integration-icon "splay" positions (`--notion-l: calc(6.9% + 1.4% * var(--t))`, `--oura-t`, `--gmail-l`, etc.). This replaces Tailwind's discrete breakpoints with a per-component 0→1 progress value driven purely by CSS container queries — no ResizeObserver JS.
- Bento feature-card grid uses named sizes via data attribute (`data-bento-card` `data-size="short|medium|tall|wide"`), each with its own `--t`-driven height formula.

## Motion

- **No JS animation library** in the bundle (no Framer Motion, GSAP, or Lottie strings found) — everything is native CSS `@keyframes`.
- Signature "blur reveal" entrance vocabulary, reused across the whole site: `blurFadeIn` / `pageLoad` / `slideIn` / `staggerItem` all combine `opacity 0→1`, `filter: blur(2–6px) → blur()`, and a small `translateY` (2–8px), staggered per item on scroll/load. `digit-pop-in` (blur + translateY(8px)→0) is reserved for animated numeric counters.
- **Rotating gradient border**: `@keyframes gradient-border{to{--gradient-border-rotation:360deg}}` animates a custom property that feeds a conic border-image mask, used on highlighted elements (`animate-gradient-border`, default `4s`/`6s` linear infinite loop) via a reusable `.gradient-border` utility class with masked pseudo-element.
- **Testimonial wall is a live auto-scrolling marquee**, not a static grid: `data-tweets-marquee` / `data-tweets-marquee-track`, `animation-play-state: running`, paused via `:hover`/`:focus-within` under an explicit `@media (hover:hover) and (pointer:fine)` guard (so touch devices don't get a stuck-mid-scroll state).
- **Integration logo wall is also an auto-scroll carousel** (`data-integration-carousel`, `data-integration-carousel-track`) with soft edge fades via `mask-image` (`--left-mask-size`/`--right-mask-size`, 4–5rem), not a static logo grid.
- Standard button/link transitions are opacity-only (`transition-opacity duration-150/200 ease`, `hover:opacity-60`) — no color or shadow transitions on nav-level interactions, keeping hover feedback quiet.

## Hero Anatomy

- Headline: **"Meet Poke, now on Apple Messages"** (desktop) / **"Meet the new Poke"** (a shorter variant for narrow viewports) — both variants exist as separate `sr-only` strings for screen readers, while the _visible_ text is built from `aria-hidden` spans, implying a decorative per-character/word reveal animation layered over accessible real text.
- Subheadline: "Try the new experience with rich actions in Apple Messages."
- CTAs: primary pill button **"Message Poke"** → `/apple-messages`; secondary plain-text link **"New to Poke? Sign up"** → `/get-started?redirectTo=/apple-messages`.
- Background: a full-bleed responsive `herobg.webp` (preloaded, srcset up to 3840w) behind what renders as a phone-mockup of the actual iMessage/WhatsApp thread — the hero literally shows the product's own chat UI as its background art rather than an abstract illustration.
- Directly beneath the hero, the first proof section ("Poke fits into your life, not the other way around") opens straight into the auto-scrolling integration-logo carousel — no separate "trusted by" strip; the logo wall _is_ the second fold.

## Components of Note

- **Bento feature-card grid** — four named sizes (`short/medium/tall/wide`), cream `#FFFDFA` fill, `#CBC9C5` border, `inset 0 0 3px rgba(0,0,0,.2)` subtle inner shadow, containing a blurred/desaturated product screenshot as background texture (`pinnedchats.webp`, `buildonpoke.webp`) behind the real foreground content.
- **Pinned-chat demo** — a phone mockup showing named contacts ("Mars", "Claudia", "Andrew," each a real avatar photo) with pinned message previews, demonstrating the scheduling/reminders feature. _(Correction to prior scout note: these are not "named AI personalities" — the asset filenames and DOM structure show they're demo human contacts inside a pinned-conversations mockup, not distinct branded AI characters.)_
- **Pricing** — three cards (Free/Pro/Ultra: $0, $19/mo, $199/mo) plus a full feature-comparison table below, grouped into "Getting started / Assistant capabilities / Support tiers / Usage & billing"; monthly/yearly toggle; no FAQ accordion on the page itself.
- **Docs shell** — two-column sidebar (Getting Started · Developers · Updates) + content, JetBrains Mono code blocks on `#F9F8F5`, a plain-banner callout ("Poke is now available in all regions worldwide, but please reach out to us at poke@interaction.co if you have any trouble.") instead of a styled admonition component.
- **/explore ("Community"/"User Love") page** — turns testimonials into a browsable, _counted_ taxonomy rather than a quote wall: category chips with live tallies (Developers 116, Other 83, Health 29, To-Dos 25, Email 16, Travel 21, Calendar 12, Finance 10, Students 10, Home 6, "Funny/Haters" 2) — social proof presented as data, not curation.
- **Release notes** — reverse-chronological, dated headings (June 8 2026 → Nov 3 2025) with "Improvements"/"Fixes" sub-bullets, embedded screenshots and launch-video links, and a standing disclaimer banner: "You should verify any important information, and Poke is not qualified to give medical, financial, or legal advice."
- Company site (`interaction.co/about`, separate domain from the product) is deliberately under-designed by comparison: black-and-white, near-empty except a headline and a 🌴 emoji, "We're building Poke.com. Join us" — signals scrappy-startup authenticity distinct from the polished product site.

## Voice & Copy

Friend-register, not vendor-register: "a personality who keeps things as real as a friend," and the featured user quote "I literally never look at my email inbox anymore. I just get texts about anything important" is used as if it were house copy. Docs voice is short, imperative, zero hedging — "Set a recipe name. Description is optional." / "Choose required integrations from the picker." Release notes allow self-deprecating humor ("Just like us humans, Poke can sometimes make mistakes") right next to a serious legal disclaimer, without tonal whiplash. Nothing on the product site uses "leverage," "seamless," "unlock," or other SaaS-marketing filler.

## Distinctive Moves

1. **A single-variable fluid-sizing engine, not breakpoints.** Every scaling component (bento cards, the hero's integration-icon "splay" positions) derives one `--t` progress value per-container from `clamp(0, (100cqw - Npx) / Mpx, 1)` and threads it through every `calc()` — continuous resize behavior with zero JS `ResizeObserver`, built entirely on CSS container queries. Most competitor sites still hard-switch at Tailwind's `sm/md/lg` steps.
2. **A genuinely custom display face.** "Exposure" is a real variable font with a proprietary axis tag (`EXPO`), dialed per-instance (`-5` in the nav, `-10` in section heads) and used with ligatures explicitly switched off — deliberate typographic craft rather than the default Inter/Geist most AI-assistant sites reach for, paired against the free, humble "Open Runde" for everything else.
3. **Testimonials as a live feed, not a curated grid**, and further, as a _counted taxonomy_ on `/explore` (116 developer stories, 83 "other," etc.) — social proof is presented as ongoing, scrollable, and quantifiable rather than five hand-picked quote cards.

## Buzz Evidence

- TechCrunch, June 4 2026: "Apple approves Poke as the first AI agent on its Messages for Business platform" [S, techcrunch.com, <30d as of crawl].
- TechCrunch, April 8 2026: "Poke makes using AI agents as easy as sending a text."
- Funding: $15M seed (Sept 2025, led by General Catalyst at a ~$100M valuation, with Village Global, Earlybird, and angels from Stripe/Dropbox/OpenAI — per TechFundingNews) plus an additional $10M in April 2026 co-led by Spark Capital and returning investor General Catalyst — ~$25M raised to date per Crunchbase/PitchBook.
- Co-founder Marvin von Hagen is a known name in AI-safety/prompt-injection circles, adding independent press visibility beyond the product itself.
- _(The prior scout note's "10x user growth" figure could not be independently verified in this crawl and is not repeated here as fact.)_

## What Astryx Should Take

1. **Borrow the fluid-sizing pattern for the marketing/docs shell.** Replace a few of Astryx's stepped Tailwind-style breakpoints on hero/feature sections with a single `--t: clamp(0, (100cqw - Npx) / Mpx, 1)` per component (StyleX already supports `@container` + named containers per the project's CSS-capability notes) — smoother resize, fewer breakpoint "jumps," and it's a live demo of a capability the docs already claim to support.
2. **Give the Astryx site its own display face, separate from component defaults.** Reserve one distinctive (ideally variable) headline font for marketing H1/H2 only, keep the neutral system/UI font everywhere else — mirrors Poke's Exposure/Open-Runde split and would make the docs site memorable without touching component typography defaults.
3. **Adopt the blur-reveal entrance system wholesale.** `opacity:0→1` + `filter:blur(4-6px)→0` + small `translateY`, staggered — trivially expressible as a StyleX `keyframes()` + `transition` pair, no animation library, and gives changelog/docs sections a consistent "soft reveal" instead of ad hoc fade-ins.
4. **Turn the adopter/logo wall into a live, pausable marquee** (CSS `animation-play-state: paused` on `:hover`/`:focus-within`, no carousel JS) for any "who's using Astryx" section — more alive than a static logo grid, and directly reusable for a component-usage or team-adoption strip.
5. **Match the docs voice, not just the visual system.** Short imperative sentences ("Set a recipe name. Description is optional.") and one honest plain-text callout instead of a decorated admonition component — Astryx's `.doc.mjs` prose could adopt this register to cut the over-hedged tone common in generated component docs.

## Pages Read

- https://poke.com/ (home page, fetched + raw HTML/CSS inspected)
- https://poke.com/llms.txt
- https://poke.com/pricing
- https://poke.com/docs
- https://poke.com/docs/release-notes
- https://poke.com/docs/creating-recipes (raw HTML)
- https://poke.com/explore
- https://poke.com/apple-messages (raw HTML — separate SPA bundle from the marketing site)
- https://interaction.co/about (parent company page, linked from primary nav)
- Compiled CSS bundles: `/_next/static/chunks/0~1km0ls4ci3d.css`, `/_next/static/chunks/0m32hz7y1kd6d.css` (font-face, color-token, and keyframe evidence)
