---
name: ElevenLabs
url: https://elevenlabs.io
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

ElevenLabs is an AI voice/audio research company (launched Jan 2023) whose marketing site sells three product platforms — **ElevenCreative** (speech, music, sound-effects, image/video generation), **ElevenAgents** (enterprise conversational-AI agents), and **ElevenAPI** (raw model access for developers) — to an audience spanning enterprises, creators, and developers at once. The homepage's job is to make one research foundation (audio/speech models) legible as three distinct commercial surfaces without feeling like three different companies.

## Typography

Hard evidence pulled directly from the shipped CSS/HTML (Next.js, `x-powered-by: Next.js`):

- **Display/heading face: "Waldenburg"** — a custom/licensed font, loaded in two optical variants: `Waldenburg` (`--font-waldenburg`) and `WaldenburgFH` (`--font-waldenburg-fh`, "FH" likely = a display/headline-hinted cut). Both ship with matching metric-compatible `Fallback` faces (`ascent-override`/`descent-override`/`size-adjust` set via `@font-face`, a next/font optimization to avoid layout shift).
- **Body/UI face: Inter** (`--font-inter`), used for body copy, descriptions, and UI chrome (`--f-body-01-font-family: var(--font-inter)`).
- **Monospace: Geist Mono** (with `JetBrains Mono Fallback` also declared — likely a legacy/alt code-block face), used in API code snippets.
- Two curious font-faces are declared site-wide but not found applied on any of the 6 pages inspected: `antoineDropCaps` and `goudyMediaeval` (both with generated `Fallback` faces). Not determined where these render — possibly a dormant/seasonal easter-egg asset shipped globally rather than a core brand type. Flagging rather than guessing.
- **Type-scale token system** (`--f-*` custom properties), fully responsive per breakpoint:
  - `--f-display-01`: Waldenburg-FH, weight **700**, size steps 3rem → 4.5rem → **6.25rem**, line-height 95–100%. This is the giant hero/section headline register.
  - `--f-heading-01…05`: Waldenburg, weight **300** (light), negative tracking (`letter-spacing: -0.03em` to `-0.01em`), sizes stepping down from 3.75rem to 1.125rem. Note the split: the biggest single headline is bold (700), while all secondary section headings are light (300) with tight tracking — the "whisper weight" pattern also seen on Linear, but reserved for sub-headlines only, not the hero.
  - `--f-body-*` and `--f-description-*`: Inter, 0.875–1.375rem, weight 400.
- Docs subdomain (`elevenlabs.io/docs`) is a **separate design system**: it's built on **Fern** (buildwithfern.com — confirmed via repeated literal `fern`/`Fern` class-name occurrences in the shipped HTML), and its type tokens (`--font-body`, `--font-heading`, `--font-code`) resolve to generic **system-font stacks** (`ui-sans-serif, system-ui, sans-serif…`, `ui-monospace, SFMono-Regular…`) — Waldenburg is **not** loaded on docs pages. The brand typeface stops at the docs boundary.

## Color

Verified from literal hex values and named CSS custom properties in the shipped stylesheet:

- **Background: `#FDFCFC`**, literally tokenized as `--eggshell: #FDFCFC` — a near-white "eggshell" off-white, not pure `#fff`, used consistently across home, pricing, about, careers.
- Alternate warm-neutral: `#F5F3F1`, and a Tailwind-style `bg-cream` utility class also appears — the base palette is warm off-white, not cold gray-white.
- **Primary blue accent: `#0A59D2`** (63 occurrences) and a lighter `#2B7FFF`; also `#052F70` (dark navy, likely for text-on-color or dark UI chrome) and `#0447FF`.
- **Red/accent: `#F41A2F`** (50 occurrences) — used prominently enough to be a genuine secondary brand color, not just an error state.
- **Orange: `#FF4704`.**
- A full **12-step blue ramp** (`--blue-50` `#F2F5FC` → `--blue-950` `#252846`) and **12-step cyan ramp** (`--cyan-50` `#EEFBFD` → `--cyan-950` `#0D2F3F`) are defined as design tokens — a proper scaled palette system, not ad hoc hex values.
- Client-logo-adjacent brand colors appear in the CSS too (`#76B900` Nvidia green, `#635bff` Stripe purple, `#00CCBC` teal) — these are almost certainly third-party logo colors from the trust/logo-wall section, not ElevenLabs' own palette.
- Docs subdomain (Fern) uses a **different, wide-gamut-aware token set**: `oklch()` values (e.g. `oklch(37.1% 0 none)`) and `color(display-p3 …)` for accent surfaces, plus a light/dark pair (`--background: rgba(255,255,255,1)` light / `rgba(30,30,30,1)` dark) — docs support real dark mode; the marketing site, as fetched, does **not** (no `dark:` variant classes or theme-toggle markup found on the homepage).
- **Correction to prior scout note:** the homepage is **not** a "dark card-based" design. The live marketing site (as of this crawl) is light/eggshell-background with black text and blue/red accents. Dark mode exists only on the docs subdomain.

## Layout

- Built with **Tailwind CSS under a custom `tw-` prefix** (e.g. `tw-flex`, `tw-grid-cols-12`) — an unusual but deliberate choice, almost certainly to let Tailwind coexist with other CSS in a design-system codebase without class collisions.
- 12-column grid system (`lg:tw-col-span-6`, `grid-cols-12`) with a `--container-width: min(100%, 81.5rem)` cap and explicit "breakout"/"full-bleed" utility variables (`--breakout-padding`, `--container-full-bleed`) for sections that need to escape the container to the viewport edge — a fairly sophisticated container-query-adjacent spacing system.
- Named spacing tokens rather than raw Tailwind scale: `--spacing-container-gutter`, `--spacing-inner-gutter`, `--spacing-outer-gutter`, `--spacing-content-wide` (7.5–10rem), `--spacing-content-xwide` (10–12.5rem) — responsive per breakpoint.
- Hero is a 2-column split at desktop (`lg:tw-col-span-6` × 2): headline + CTAs on one side, a supporting `<h2>` sentence on the other — not a single centered stack.
- Body is a long vertical scroll of alternating text/image "blocks" (literal `blockType` values found in the embedded JSON: `"interactive-timeline"`, `"articles"`, `"title"`) — a block-based CMS/page-builder architecture, not hand-built page markup.
- Radius vocabulary is broad and not standardized to one scale: raw values from `.125rem` up to fully-pill `9999px` appear across components (buttons are `rounded-full`; cards commonly `20px`/`1.125rem`).

## Motion

- Buttons use a consistent micro-interaction: `active:tw-scale-[0.98]` (press-down feedback) plus `tw-transition-[background-color,color,box-shadow,border-color]` — simple, cheap, CSS-only, no JS animation runtime.
- No GSAP, Framer Motion, Lottie, or Three.js reference strings found anywhere in the shipped homepage bundle — motion here is CSS transitions/transforms only, matching the "restrained, no WebGL spectacle" pattern several other 2026 sites in this survey converged on.
- The homepage's signature interactive element — the **release-history timeline** — is built as a `role="tab"` list using **React Aria Components** (confirmed via literal `data-rac`, `data-react-aria-pressable="true"`, and `id="react-aria-_R_..."` attributes in the DOM). Tick-mark positions along the timeline track are snapped to a 9px grid using the CSS **`round()` math function** (`left:calc(50% - 5px - round(down, 37.258%, 9px))`) — a genuinely current (2025/26-era) CSS feature used for real layout math, not decoration.
- `prefers-reduced-motion` is referenced once in the stylesheet — present but minimal, not a first-class "reduce motion" control like Adobe Spectrum 2's visible toggle.

## Hero Anatomy

- **Headline (verbatim, from live `<h1>`):** "Bringing **technology to life**" — set at `--f-display-01` (Waldenburg-FH, 700 weight, up to 6.25rem/100rem-ish at desktop), with the phrase "technology to life" wrapped in its own `<span>` using `tw-table` display (a common trick to control line-wrap balance independent of the first word).
- **Subhead (verbatim, `<h2>` styled as body text, not a visually distinct headline tier):** "Powering the best enterprises, creators, and developers. From ElevenAgents for customer experience, ElevenCreative for content creation, to the leading AI voice generator."
- **CTA pattern:** two pill buttons side by side — solid black "Sign up" (`rounded-full`, `bg-black`, hover→`gray-700`) and white outline "Contact sales" (subtle 3-layer box-shadow, links to `/contact-sales`). No gradient, no glow, no sparkle icon.
- **Background:** flat `#FDFCFC` eggshell, no hero image/video, no gradient mesh, no 3D object. The response headers reveal the current homepage is running as an **A/B test variant** (`x-ab-test: mw-hp-signup-cta-modal`, rewritten to `/en/abtest/elevenlabs-home-redesign-2026-signup-modal`) — ElevenLabs is actively testing a signup-modal variant of this exact hero as of this crawl (July 2026), evidence the homepage is mid-iteration, not settled.
- Below the fold, hero flows directly into a 12-column full-bleed section (`--marker-background-color: #FDFCFC`) leading into the logo wall — no visual break/divider color change.
- **Not verified:** the prior scout note's claim of a "15.1M-view launch video" paired with the homepage. No `<video>` element and no embedded YouTube player were found anywhere on the current homepage — only footer social links to the ElevenLabs YouTube channel. This may describe a since-retired homepage version, a different landing page (e.g. a v3/product-launch page), or simply be stale/unverifiable from the current live DOM. Flagged rather than repeated as fact.

## Components of Note

- **Interactive release-history timeline** — a horizontal scrubber (React Aria tab list) plotting 11 model releases from **Aug 2023 to May 2026** (Eleven Multilingual v2 → Eleven Turbo v2 → Eleven Flash v2.5 → Scribe → Eleven v3 → Eleven Music → Scribe v2 Realtime → Scribe v2 → Expressive Mode for Agents → Music v2 → Dubbing v2), each event carrying a title/description/date/computed-position field pulled from a single JSON data source. This is the single most distinctive component on the site — verified exact list, confirming (and dating precisely) the prior scout note.
- **Inline audio players** embedded directly in marketing copy (`<audio preload="none" crossorigin="anonymous">` elements, an `AudioPlayer` component, a `play-button` class) — the product's own voice output is played back in-page as proof, not shown as a screenshot.
- **Client logo wall** — at least 18 recognizable logos (Twilio, Disney, Epic Games, NVIDIA, Salesforce, Duolingo, and others) under the heading "Trusted by leading developers and enterprises."
- **Case-study rails** — three-up customer spotlight cards per product line (NVIDIA/Clay/Duolingo for ElevenCreative; Deliveroo/Meesho/Cars24 for ElevenAgents).
- **Safety triad** — "Moderation / Accountability / Provenance," each with its own icon and short description, positioned as a dedicated trust section distinct from the product rails.
- **Inline logo wordmark** — the nav/footer logo is a hand-authored inline `<svg>` path (not a raster image or icon-font glyph), keeping it crisp at any size and themeable via `fill="currentColor"`.
- **`/llms.txt` + content-negotiated Markdown** — genuinely novel, worth calling out on its own: ElevenLabs serves an `/llms.txt` index (confirmed, 92 lines) _and_ supports fetching any page as clean Markdown via a literal HTTP `Accept: text/markdown` request header (not a separate `.md` URL suffix), falling back to normal HTML otherwise. A single flat `docs/llms-full.txt` is offered as the complete LLM-optimized doc corpus. This is a more elegant mechanism than most llms.txt implementations (which just dump a link list) — it's real content negotiation.
- Docs pages (Fern-built) add a conventional dev-docs shell: persistent sidebar, `api-reference` sections, light/dark toggle — but visually diverges from the marketing site (system fonts, no Waldenburg, oklch/display-p3 color tokens).

## Voice & Copy

Confident, plain, largely unhyped. "Bringing technology to life" / "Two platforms built on the same research foundation" / "Powering the best enterprises, creators, and developers" — short declarative sentences, no exclamation points, no "supercharge"/"unleash"-style hype verbs. Product names are treated as proper nouns and capitalized consistently (ElevenCreative, ElevenAgents, ElevenAPI) — clearly a controlled naming system, not organic labeling. The `/about` and `/careers` pages both use nearly the same line — "AI research and products that reimagine/transform how we interact with technology" — functioning as the closest thing to a company tagline/manifesto sentence, repeated verbatim across surfaces for consistency. Docs copy on `/llms.txt` is dry and precise/spec-like ("If a page does not support this format, it will fall back to the standard HTML response"), a register shift from the marketing copy's warmer confidence.

## Distinctive Moves

1. **HTTP-content-negotiated Markdown for agents.** Rather than a bolt-on `.md` suffix convention, ElevenLabs makes any page agent-readable via a standard `Accept: text/markdown` header — a cleaner, more standards-native implementation of the 2026 "llms.txt" wave than most competitors, and directly relevant precedent for an AGENTS.md-driven docs system.
2. **A dated, precisely-positioned release timeline as the trust device**, built as an accessible (React Aria) tab-scrubber rather than a static graphic — makes "we've been shipping model improvements continuously since 2023" a scannable, interactive fact instead of a claim.
3. **Deliberate typographic split by weight, not just by size**: the single biggest headline on the page is bold (700), while every subordinate heading below it is light (300) with tight negative tracking — a hierarchy signal that doesn't rely on size alone, distinct from the industry's more common "everything is light/whisper-weight" approach.

## Buzz Evidence

- ElevenLabs is a well-known, well-funded AI voice unicorn (repeatedly cited across this survey's other entries — e.g. its former CEO/founder circle is an investor in Pocket/heypocket.com, June 2026); no primary numeric funding/valuation figure was independently re-verified in this crawl.
- The prior scout note's specific "15.1M-view launch video" figure could **not** be verified against the current live homepage (no video present) — treat as unconfirmed/possibly stale rather than repeat it as fact.
- The site runs a live, header-visible A/B test as of this crawl (`elevenlabs-home-redesign-2026-signup-modal`), indicating active homepage iteration in mid-2026 — itself a small piece of real, dated evidence of ongoing design investment.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Adopt the `Accept: text/markdown` content-negotiation pattern for Astryx's own docs**, alongside (not instead of) a static `/llms.txt` index — it's a stronger mechanism than a flat file dump and pairs naturally with the existing `{Name}.doc.mjs` JSDoc structure already in this repo.
2. **Steal the release-timeline pattern for Astryx's own version history**: a horizontal, accessible (React Aria– or native-`<button role="tab">`–based) scrubber plotting dated component/API milestones, rather than a plain changelog list — cheap to build, reads as maturity/trust, and doubles as a real navigable UI a design system can dogfood.
   2b. Use CSS `round()` for any pixel-snapped position math in that timeline component — avoids sub-pixel jitter without JS measurement code.
3. **Split font weight by hierarchy level, not just size**: reserve a bold/700 cut for exactly one hero headline register, and use a lighter weight with negative tracking for every subordinate heading — gives Astryx's docs pages a clear one-look-tells-you-where-you-are hierarchy without more than two type weights.
4. **Name the neutral background token literally** (`--eggshell`, not `--gray-50`) — small move, but it signals the palette was designed on purpose rather than defaulted from a scale, and it's a good practice to carry into Astryx's own token naming for warm-neutral surfaces.
5. **Note the docs/marketing type-system fork as a cautionary example, not a pattern to copy**: ElevenLabs' docs abandon the brand typeface (Waldenburg) entirely for system fonts. For Astryx — where the docs _are_ the product demo — keep one consistent type system across marketing and Storybook/docs surfaces rather than letting the docs subdomain drift onto a generic stack.
6. **Inline, playable proof over screenshots**: where Astryx documents an interactive component (e.g. an audio-adjacent or animated primitive), embed the live/functional instance directly in the doc page copy, the way ElevenLabs embeds actual `<audio>` players in marketing prose instead of static screenshots — consistent with the existing "component docs" philosophy in this repo.

## Pages Read

- https://elevenlabs.io (home — WebFetch + raw HTML/CSS inspection)
- https://elevenlabs.io/llms.txt
- https://elevenlabs.io/pricing
- https://elevenlabs.io/docs
- https://elevenlabs.io/about
- https://elevenlabs.io/careers
- https://elevenlabs.io/blog
