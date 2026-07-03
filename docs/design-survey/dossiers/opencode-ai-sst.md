---
name: opencode.ai (SST)
url: https://opencode.ai/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

OpenCode is an open source AI coding agent published by **Anomaly** (GitHub org `anomalyco`, external site `anoma.ly`) — despite the crawlset's "(SST)" attribution, the shipped site and repo (`github.com/anomalyco/opencode`) surface Anomaly as the maker, not SST directly. It runs as a terminal interface, a beta desktop app (macOS/Windows/Linux), and an IDE extension, and connects to "any model from any provider, including Claude, GPT, Gemini and more." Around the free CLI sits a small commercial constellation surfaced directly in primary nav: **Zen** (a curated, benchmarked pay-per-request model gateway), **Go** ($5 first month / $10-per-month subscription to 14+ open-weight coding models), **Data**, and **Enterprise** — a "free agent, paid model access" business model made visible in the header rather than hidden behind a pricing page.

## Typography

- The whole visual system is built on one CSS variable pair, confirmed directly in the shipped stylesheet: `--font-mono: "Berkeley Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;` followed by `--font-sans: var(--font-mono);`, applied globally via `body { font-family: var(--font-sans); }`. There is no separate sans face — headline, nav, body paragraphs, and buttons all inherit the monospace stack.
- **Berkeley Mono** (U.S. Graphics Co.) is the _preferred_ face in that stack, but no `@font-face` for it appears in the delivered CSS bundle — most visitors (without a local license) actually render **IBM Plex Mono**, which is fully self-hosted in 7 weights (Thin/ExtraLight/Light/Text/Medium/SemiBold/Bold) × roman/italic, plus Cyrillic/Greek/Pi/Latin-Extended subset splits.
- The same override is applied independently to the docs subsite (see Layout): Astro Starlight's `--__sl-font` (body) and `--__sl-font-mono` are both set to `"IBM Plex Mono"`, so the monospace commitment is systemic policy across marketing _and_ docs, not a hero-only flourish.
- IBM Plex Sans, IBM Plex Sans Condensed, and IBM Plex Serif are also self-hosted in full weight ranges plus Arabic/Devanagari/Hebrew/Thai/Thai-Looped scripts (the site serves 6 locales: en, zh-Hans, zh-Hant, ko, de, es). I could not find a rule that visibly renders body copy in Sans/Serif on the pages read — most likely locale/script fallback for the mono stack, or a component not hit in this crawl. Flagging as **not fully determined** rather than asserting a serif/sans pairing (the crawlset's "bold sans hero headline" claim does not hold up against the CSS — it should read "bold **mono** hero headline").
- No letter-spacing/tracking overrides found anywhere in the bundle. Headings use `text-wrap: balance`, paragraphs use `text-wrap: pretty` (standard modern resets, not a stylistic signature).

## Color

- Global light/dark theming runs on Apple-HIG-shaped semantic tokens, confirmed in `:root`/`body` rules: `--color-bg: #ffffff` (dark: `#0c0c0e`), `--color-bg-surface: #f5f5f7` (dark: `#161618`), `--color-bg-elevated: #ffffff` (dark: `#1c1c1f`), `--color-text: #1d1d1f` (dark: `#ffffff`), `--color-text-secondary: #424245` (dark: `#c7c7cc`), `--color-text-muted: #6e6e73` (dark: `#a1a1a6`), `--color-border: #d2d2d7` (dark: `#38383a`). `html { background-color: var(--color-bg); color: var(--color-text); }`.
- Mode switching on the **marketing pages** is `@media (prefers-color-scheme: dark)` only — no manual toggle. The **docs subsite** (Starlight) does expose an explicit Dark/Light/Auto picker plus a language dropdown.
- One accent, `--color-accent: #007aff` (hover `#0056b3`, active `#004085`) — Apple's system blue, used for interactive/link states, essentially invisible against the grayscale marketing surface.
- State colors mirror Apple's system palette 1:1: `--color-success: #30d158`, `--color-warning: #ff9f0a`, `--color-danger: #ff3b30` / `#ff453a`.
- The one moment of saturated color on the whole home page is a distinct, non-token green, `#03B000`, on the copy-to-clipboard checkmark stroke inside the install-command block.
- The wordmark/logomark is drawn from blocky pixel-rectangle letterforms (not typeset) in a warm, slightly red/brown-shifted grayscale rather than neutral gray: light-surface wordmark = ink `#4B4646` + light warm-gray `#B7B1B1` (or `#211E1E` + `#F1ECEC` for the full variant); dark-surface wordmark = light warm-gray `#CFCECD` + darker warm tones (`#656363` / `#211E1E`). This warm ramp is the brand's one quiet color signature.
- No gradients, no purple, no glassmorphism found anywhere in the CSS scanned — confirms the crawlset's "grayscale-only" read, just with the correction that the grays are warm-tinted, not neutral, and that one blue accent + one green success color exist as small, disciplined exceptions.

## Layout

- Home is a single vertical scroll of named sections (each carries a `data-component` attribute, making the anatomy explicit in markup): nav → **hero** (announcement bar + h1 + subhead + tabbed install block) → looping product **video** → **"what"** feature list (7 items) → **growth** stats (3 illustrated stat cards) → **privacy** statement → **zen-cta** (cross-sell) → **faq** accordion → **email** waitlist form → footer → legal bar.
- Top nav is unusually product-dense for an OSS tool: GitHub, Docs, Data, Zen, Go, Enterprise, then a Download CTA button — the commercial product suite sits in primary nav next to the repo link, not tucked into a submenu.
- Docs (`/docs`) is a separate build entirely: **Astro Starlight** (confirmed via `/docs/_astro/*.css` asset paths and 78 literal "starlight" / 425 "astro" string occurrences in the served markup), a conventional 3-column shell — left sidebar (Intro/Config/Providers, expandable Usage: Go/TUI/CLI/Web/IDE/Zen/Share/GitHub/GitLab; Configure: Tools/Rules/Agents/Models/Themes), center prose with Tip/Note callouts and "Terminal window"-framed code blocks (Expressive Code, `data-language="bash"`/`"txt"`), right-hand on-page anchor nav.
- Near-zero border-radius: only **one** `border-radius` rule exists in the entire marketing CSS bundle (`var(--space-2)` = 8px). The visual language reads flat and square, not soft-SaaS-rounded.
- Changelog (`/changelog`) is plain reverse-chronological text: version number as heading (e.g. `v1.17.13`, `Jul 1, 2026`), bulleted changes grouped by component (Core/Desktop/TUI/SDK/Extensions), contributor credit in parens — no timeline graphic, no diff viewer.

## Motion

- The hero's only visual payload below the install block is a real product demo: an autoplaying, looping, muted `<video>` (`opencode-min.mp4`, with a static poster PNG fallback) showing the actual TUI in use — not a GIF, not a static screenshot, not a WebGL scene.
- The install block is a horizontal tab switcher (curl/npm/bun/brew/paru, `curl` pre-selected) with a copy-to-clipboard button whose icon morphs from a copy glyph to a green (`#03B000`) checkmark on click.
- FAQ is a standard plus/minus accordion (`data-slot="faq-item"`, `data-closed` attribute toggling state).
- No CSS keyframe/gradient-animation rules or WebGL/canvas library references found in the scanned bundle — the entire motion budget is spent on one video plus tab/accordion state changes. This matches the crawlset's broader 2026 "reality check" finding that WebGL/kinetic flourishes mostly don't ship on serious dev-tool sites.

## Hero Anatomy

Top to bottom:

1. A slim **announcement bar pinned above the headline** (not a dismissible toast): `[New]` badge + "Desktop app available in beta on macOS, Windows, and Linux." + "Download now" link.
2. **H1**, verbatim: _"The open source AI coding agent"_.
3. One-line subhead: _"Free models included or connect any model from any provider, including Claude, GPT, Gemini and more."_
4. A **tabbed, click-to-copy install block** (5 package-manager tabs: curl/npm/bun/brew/paru) as the primary CTA — there is no "Get Started" button; the command itself is the conversion action. Default/pre-selected tab renders `curl -fsSL https://opencode.ai/install | bash`.
5. Immediately below the fold: the looping product-demo video.

No hero illustration, no gradient wash, no 3D — the entire "visual" is the command block plus the live video.

## Components of Note

- **Tabbed install snippet** with per-package-manager panels and an inline copy-status icon that swaps from copy-glyph to green check — a directly reusable pattern for any dev-tool docs/marketing hero.
- **"Fig N." captioned stat cards**: three growth-stat tiles (160K GitHub Stars / 900 Contributors / 7.5M Monthly Devs), each captioned like a paper figure ("Fig 1.", "Fig 2.", "Fig 3.") and backed by a bespoke, masked generative line-art SVG (diagonal-hatch/topographic silhouette) unique per card — an editorial alternative to a plain stat-counter row or bar chart.
- **Desktop-app promo banner** baked directly above the hero headline (badge + copy + separate desktop/mobile CTA link text) rather than shipped as a generic site-wide banner.
- Docs code blocks use Starlight/Expressive Code's **"Terminal window"** framing with Tip/Note admonitions.
- **Footer** is a flat 5-cell row (`GitHub [160K]` / Docs / Changelog / Discord / X) plus a separate legal bar (`© 2026 Anomaly` / Brand / Privacy / Terms / language dropdown) — the maker ("Anomaly") and the product ("OpenCode") are kept visibly distinct in the copyright line.
- A consistent **`[*]`** bracket-asterisk glyph is used as a decorative lede-marker ahead of body paragraphs in the Growth, Privacy, and What sections — reads as terminal/footnote shorthand rather than a bullet dot.

## Voice & Copy

- Declarative, unembellished, feature-as-noun-phrase copy: _"LSP enabled — Automatically loads the right LSPs for the LLM"_; _"Multi-session — Start multiple agents in parallel on the same project"_; _"Any model — 75+ LLM providers through Models.dev, including local models."_ No "powerful"/"seamless"/"revolutionary."
- Trust-by-numbers over testimonials on the homepage itself — stars/contributors/commits/monthly-devs stated in one sentence, no logo wall, no quote cards on the home page (testimonial cards do appear on the Zen page per WebFetch, not on home).
- Privacy is stated as a flat guarantee, not a policy link buried in a footer: _"OpenCode does not store any of your code or context data, so that it can operate in privacy sensitive environments."_
- Cross-sell copy (Zen) stays in the same technical register: _"Zen gives you access to a handpicked set of AI models that OpenCode has tested and benchmarked specifically for coding agents. No need to worry about inconsistent performance and quality across providers, use validated models that work."_

## Distinctive Moves

1. **Sans literally _is_ mono, system-wide.** `--font-sans: var(--font-mono)` cascading from `body { font-family: var(--font-sans); }` means headline, nav, body copy, and buttons all render in the monospace stack (Berkeley Mono preferred, IBM Plex Mono shipped) — and the same alias is independently re-applied inside the Astro Starlight docs build (`--__sl-font: "IBM Plex Mono"`). Most "monospace-brand" sites in this survey (Cartesia, Zed, terminal.shop) reserve mono for code or a single curl snippet; OpenCode applies it everywhere, on both the marketing shell and the docs shell, as shared design-token policy rather than a hero-only flourish.
2. **The command is the hero CTA, and it's a live choice, not decoration.** The install block is a functioning 5-way tab switcher (curl/npm/bun/brew/paru) with real click-to-copy state — the primary conversion action is "copy this command," not "click this button" — paired directly beneath with a looping real-product video instead of a screenshot.
3. **Metrics framed as numbered figures with bespoke illustration, not a stat-counter strip.** The three growth numbers are captioned "Fig 1./Fig 2./Fig 3." like a technical paper, each paired with a one-off generative line-art SVG rather than an icon or sparkline — turning a boilerplate "stars / contributors / users" row into a small piece of editorial design.

## Buzz Evidence

- **GitHub stars, independently verified via the public API** (checked 2026-07-03): `anomalyco/opencode` shows **182,038** stargazers — higher than the 160,000 the site itself states, suggesting the on-page figure is a periodically-refreshed snapshot rather than a live-bound counter. Either way, it places OpenCode among the most-starred open-source AI coding agents live today.
- Self-reported scale (site copy, not independently verified beyond the star count above): 900 contributors, 13,000+ commits, "7.5M developers" monthly.
- Commercial layer visible directly in primary nav: Zen (pay-per-request model gateway, $20 pay-as-you-go entry + $1.23 processing fee, auto-top-up at $5 balance), Go ($5 first month → $10/month subscription to 14+ open-weight models: GLM, Qwen, Kimi K2.7 Code, MiniMax, MiMo, DeepSeek variants), Data, and Enterprise.
- Active release cadence: changelog shows near-daily point releases (`v1.17.13` on Jul 1 2026, `v1.17.12` on Jun 30 2026) spanning Core/Desktop/TUI/SDK/Extensions.

## What Astryx Should Take

1. **Offer a "sans = mono" theme token as an opt-in preset**, not a default: let `--font-sans` alias to `--font-mono` for a terminal-flavored theme variant. It's the single most differentiated move on this exemplar and costs one variable to expose — but keep it optional given the legibility trade-off at body-copy sizes.
2. **Route docs and marketing through the same token file.** OpenCode's Starlight `--__sl-font` override mirrors its own marketing `--font-sans` — the docs never visually drift from the marketing site. Astryx's component-doc pages / Storybook should consume the exact same color/font/radius tokens as the marketing shell, not a separately-themed docs skin.
3. **Borrow the "Fig N." stat-card pattern** for Astryx's own adoption metrics (npm downloads, GitHub stars, components shipped): numbered captions + one bespoke abstract SVG per stat reads more considered than a plain counter row, and is buildable as static inline SVG (no JS, no chart library) — a good StyleX-native fit.
4. **Reuse the tabbed-install-with-copy-state component** for Astryx's own CLI onboarding block (`$ASTRYX ...`) in the marketing/docs hero: multiple install methods as tabs, one `currentColor` SVG that swaps to a green check on click, is a proven, low-motion-budget pattern already in this survey's "components" bucket.
5. **Consider "the command is the CTA"** for a CLI-driven design system: a copyable command (e.g. `npx astryx init`) instead of a "Get Started" button, mirroring both OpenCode and terminal.shop (also in this survey) — evidence that a working command reads as more credible than a button for a developer-tool audience.
6. **Add a warm-grayscale "flat/terminal" theme option** to Astryx's example-theme gallery, using this site's slightly red/brown-shifted neutral ramp (`#211E1E` / `#656363` / `#CFCECD` / `#F1ECEC`) plus near-zero border-radius, as a counterpoint to the cooler neutral monochrome already logged for Linear/Vercel Geist elsewhere in this survey.

## Pages Read

- https://opencode.ai/ (home — fetched raw HTML + rendered summary)
- https://opencode.ai/brand
- https://opencode.ai/zen
- https://opencode.ai/docs
- https://opencode.ai/changelog
- https://opencode.ai/go
- https://opencode.ai/_build/assets/entry-client-VF7ouASi.css (marketing site's compiled stylesheet, read directly for tokens/fonts/colors)
- https://opencode.ai/docs/_astro/_id_.0W9MMnBd.css (Starlight docs stylesheet, read directly for tokens/fonts)
- https://opencode.ai/llms.txt (attempted — returned HTTP 404, does not exist)
- `api.github.com/repos/anomalyco/opencode` (GitHub API, used only to independently verify the on-page star count)
