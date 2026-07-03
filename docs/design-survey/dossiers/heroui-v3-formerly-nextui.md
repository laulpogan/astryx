---
name: HeroUI v3 (formerly NextUI)
url: https://heroui.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

HeroUI (formerly NextUI, YC S24) shipped v3 in March 2026 as a ground-up rewrite of its React component library — 75+ web components (21 new) built on React Aria Components + Tailwind CSS v4, plus a from-scratch React Native library (37 components) — moving from NextUI's old provider/plugin styling model to a CSS-variable + BEM-class theming system with zero JS animation runtime. It positions itself explicitly as "the modern alternative to MUI, Chakra UI, and shadcn/ui," monetizes through a separate `heroui.pro` premium tier (templates, blocks, theme presets, AI tooling), and invests unusually heavily in documentation built specifically for AI coding agents (per-page "Copy Markdown," dual `llms.txt` corpora, AGENTS.md downloads, MCP servers, and full agent-specific migration guides for every one of its ~70 components).

## Typography

- **Body/UI font: Inter**, loaded via `next/font` — confirmed directly in the shipped CSS (`@font-face{font-family:Inter;...}` across the full 100–900 weight range, plus a metrics-matched `Inter Fallback` `@font-face` using `local(Arial)` with `ascent-override`/`size-adjust` to prevent layout shift). The Tailwind token `--font-sans` resolves to `var(--font-inter), ui-sans-serif, system-ui, sans-serif`.
- **No custom display/serif face** — headlines use the same Inter stack as body copy, just larger/bolder. No webfont-loaded monospace either: `--font-mono` is the bare system stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`) — notable for a developer-tool site that a lot of peers (Cartesia, Zed, terminal.shop) spend brand capital on a premium mono face and HeroUI does not.
- Docs shell (nav, sidebar, code panes) is built on **Fumadocs** (confirmed by the `fd-` prefixed CSS tokens/keyframes throughout: `--fd-accent`, `--fd-secondary`, `--fd-ring`, `@keyframes fd-accordion-down`, etc.) — the typographic and interaction chrome of the docs is largely inherited from that framework, not bespoke.
- Every component/doc page has a **"Copy Markdown"** action next to the title — the page's rendered content, one click, in agent-ready markdown.
- BEM class naming is real and pervasive in shipped markup, not just claimed: `alert__content`, `alert--default`, `avatar__fallback--warning`, `card__content`, `card__header` — verified in the homepage's rendered HTML.

## Color

- Fully token-driven via Tailwind v4's `@theme` layer + CSS custom properties, with a strict semantic-naming convention: unsuffixed = background (`--accent`), `-foreground` = text-on-that-background (`--accent-foreground`), plus `-hover` and `-soft`/`-soft-hover`/`-soft-foreground` variants generated per role (Accent, Default/neutral, Success, and by pattern Warning/Danger).
- **OKLCH relative-color syntax is real, not marketing**: chart colors are derived live from a single seed variable — `--chart-1: oklch(from var(--accent) calc(l - .24) c h)` through `--chart-5: oklch(from var(--accent) calc(l + .24) c h)` — one input color produces a 5-step ramp via CSS alone, no JS color math.
- The **Theme Builder** (`/en/themes`) is a client-rendered visual editor with controls confirmed in the page's static text payload: **Accent / Base / Font Family / Radius / Radius Form / Theme** (light/dark), previewed live against a Dashboard/Mail/Chat/Finances tab switcher, then exports CSS. Preset accent swatches shipped in the bundle read like brand homages: `#0485f7` (blue), `#1ed760` (Spotify green), `#5865f2` (Discord blurple), `#e50914` (Netflix red), `#f60` (orange), `#c084fc` (purple), `#000` (mono) — a picker built to make "pick a familiar brand color" the entry point rather than raw hex/OKLCH sliders.
- Dark-mode background values are near-black rather than gray (`#02070a`, `#030704`, `#050605` family) — a warmer-black default than pure `#000`/`#111`.
- `heroui.pro` (the paid tier, separate domain) ships **named preset themes**: Default, Brutalism, Glass, Mouve — confirming the token system is built to swing between opposite aesthetics, not just accent-swap.

## Layout

- Nav: logo, **Docs / Themes / Components / Native / React Native / Blog / Roadmap**, `⌘K` search, theme toggle, live GitHub star count (27.7k, shown twice — once in a badge, once in nav), Discord + Twitter/X icons.
- Docs are a classic three-pane shell (Fumadocs default): left category sidebar (Overview → Handbook → "UI for Agents" → Web/Native tab), center prose+code, "Copy Markdown"/search at top.
- `llms.txt` is split by platform (`/react/llms.txt`, `/native/llms.txt`) and is enormous in scope — it enumerates not just every component but a **full per-component v2→v3 migration guide** (Accordion, Alert, Autocomplete, ... User — dozens of individually-linked pages) duplicated in an "Agent Migration Guide" flavor (Full + Incremental-Coexistence) separate from the human-facing migration docs, and the entire tree exists again under `/cn/` in Chinese.

## Motion

- **Verified zero animation-library dependency**: grepped the full shipped HTML/JS for `framer-motion`, `gsap`, `react-spring`, `motion/react` — none present. Every visible transition class is Tailwind's `transition-colors`/`transition-transform` utilities plus one CSS `@keyframes` sheet.
- The bundle carries 39 distinct `@keyframes` blocks: HeroUI's own (`custom-fade-in`, `custom-fade-out`, `caret-blink`, `float-stars`, `float-stars-reverse`, `scrolling-banner`, `progress-bar-indeterminate`, `progress-circle-spin`, `skeleton`) plus Fumadocs' inherited set (`fd-accordion-down/up`, `fd-collapsible-down/up`, `fd-dialog-in/out`, `fd-popover-in/out`, `fd-sidebar-in/out`, `fd-nav-menu-in/out`).
- A dedicated `/docs/react/getting-started/animation` guide exists as a first-class doc topic, not an afterthought.
- Release history shows motion decisions are treated as versioned product changes, not incidental CSS — e.g. v3.0.4 introduced "radius design tokens with a `min()` cap constraint" (so a radius token can't visually overrun small controls), v3.0.2 added a `--backdrop` theme variable and smoother Drawer transitions, v1.0.5 (Native) added "single-mount overlay animations."

## Hero Anatomy

- H1 (verified from raw DOM): **"Beautiful by default. Customizable by design."** — subhead: "HeroUI is the modern UI library for web and mobile, built to help teams move fast, stay consistent, and deliver delightful user experiences." Above it, a pill badge: "HeroUI Native v1.0.5 — patch release."
- CTA row is a labeled "Start here" cluster of four links rather than one/two buttons: **Get started / React components / Native components / GitHub repository**, plus a visible "Open source with 27.7k stars" line.
- The hero's visual is **not an illustration or single screenshot** — it's a dense collage of small, individually-real component demos assembled into believable mini product surfaces: a Dashboard/Mail/Chat/Finances tab switcher tagged "Available in Pro as template" (a live upsell inside the free hero), a sign-up card ("Create an account / Start your free 7-day trial. No credit card required." with "Continue with Google/Apple" buttons), an OTP input ("Didn't receive a code?"), a state `<Select>` (Florida/Delaware/California/Texas/New York/Washington), a credits counter ("You have 2 credits left"), an X/Twitter-style profile card (`@hero_ui`, "Building the future of UI for web & mobile. 🚀 (YC S24)"), and an Indie Hackers community card ("148 members · By John"). This is the "components embedded in real flows" pattern (also seen at Park UI) pushed to its most elaborate form — a fake but coherent slice of a dozen different apps, each panel a literal instance of a HeroUI component, not a mockup.

## Components of Note

- **Theme Builder** (`/en/themes`) — visual token editor (Accent/Base/Font Family/Radius/Radius Form/Theme mode) with CSS export; this is the page the scout note's "Reddit praised as pretty" claim points to (independently corroborated via web search, though the original thread wasn't directly fetchable).
- **Per-page "Copy Markdown"** button on every docs/component page — the single most portable idea here for an agent-consumption story.
- Deep primitive coverage most peers skip: `ColorArea`, `ColorSlider`, `ColorSwatchPicker`, `InputOTP`, `ToggleButtonGroup`, `Meter`, `ProgressCircle`, `Toolbar`, `DateRangePicker` (composed from `DateField` + `RangeCalendar`).
- **Full parallel migration corpus**: a dedicated, individually-URLed v2→v3 migration guide for every single component (~70 pages), duplicated again as "Agent Migration Guide" (Full + Incremental-Coexistence) variants aimed specifically at AI assistants doing the upgrade.
- Separate `heroui.pro` monetization tier with punning license names — **Web Hero / Mobile Hero / Super Hero** — selling full-page templates (dashboard, mail, chat, finance), a Figma design-to-code plugin, and named theme presets (Default, Brutalism, Glass, Mouve).

## Voice & Copy

- Confident, developer-to-developer, low on hype language. Meta description doubles as a competitive positioning statement: "The modern alternative to MUI, Chakra UI, and shadcn/ui for building production-ready applications."
- Signature metaphor, aimed squarely at shadcn/ui's copy-paste model: **"A Living Library, Not Copy-Paste."** — "Copy-paste code works until it breaks. You're left maintaining outdated dependencies that stop evolving... HeroUI v3 is not a snapshot—it's a garden that keeps growing. 🌱"
- Explicitly credits its foundation rather than obscuring it: "Why React Aria? We chose React Aria for accessibility at scale... Thanks to Devon Govett and the Adobe team."
- Design Principles doc states 10 named rules in plain declarative prose, e.g. "Semantic Intent Over Visual Style" (variant names are `primary`/`secondary`/`tertiary`, not `solid`/`flat`/`bordered` — explicitly "Inspired by Uber's Base design system") and "Composition Over Configuration."
- Blog runs an SEO/content-marketing play that names competitors directly: "12 Best React UI Component Libraries in 2026" positions HeroUI alongside shadcn/ui, MUI, Chakra UI, Mantine.

## Distinctive Moves

1. **All-CSS motion at real production scale, independently verified** — not a marketing claim taken on faith: the shipped bundle has zero animation-library imports and a genuine 39-rule `@keyframes` sheet doing all the work Tailwind's transition utilities don't already cover.
2. **A one-variable-in, many-tokens-out color system, demonstrated live** — `oklch(from var(--accent) calc(l ± n) c h)` derives a full chart/state palette from a single accent pick, and the Theme Builder turns that into a visual, exportable product (Accent/Base/Font/Radius/Radius Form/Mode controls) rather than a spec page.
3. **AI-agent documentation treated as a first-class, parallel corpus, not an add-on** — split `llms.txt` per platform, "Copy Markdown" on every page, downloadable `AGENTS.md`, an MCP server, Agent Skills, and — most unusually — a full second copy of the entire v2→v3 migration guide (every one of ~70 components) rewritten specifically as an "Agent Migration Guide" for coding assistants to execute the upgrade autonomously.

## Buzz Evidence

- **InfoQ coverage**, twice: an initial piece on the v3 rewrite and a follow-up, "HeroUI v3 Lands as a Ground-Up Rewrite for React and React Native, Built on Tailwind CSS v4" (infoq.com/news/2026/07/heroui-v3-rewrite/) — independently confirms the 75+/21-new/37-native component counts and the React Aria + Tailwind v4 + OKLCH + BEM claims from the scout note. [S, InfoQ, <30d as of survey date, ~70]
- **YC S24** batch membership, per the company's own X bio embedded as a hero demo ("Building the future of UI for web & mobile. 🚀 (YC S24)"). Note: the "97.1K Followers" number shown in that same demo card is inside a UI-showcase component, not a verified live metric — treat as demo content, not a confirmed follower count.
- **27.7k GitHub stars**, shown live in the site's own nav (not independently re-verified against the GitHub API in this pass).
- Reddit praise for the Theme Builder/themes page as "pretty" — corroborated via web search (a Reddit comment referencing it favorably while noting some v2 features still missing) but the original thread was not directly fetched, so treat as secondary-sourced. [S, web-search corroboration, <10]
- Monthly minor-release cadence now stated as the norm (v3.1.0 late May 2026, v3.2.0 June 16 2026, v3.2.1 shortly after) — a real maturity signal for a library that launched its ground-up rewrite only in March 2026.

## What Astryx Should Take

1. **Ship a "Copy Markdown" action on every component doc page.** Astryx already has `{Name}.doc.mjs` files and an `astryx component <Name> --dense` CLI path — surfacing the same rendered content as one-click markdown on the Storybook/docs site directly serves the AGENTS.md-driven consumption story this repo already commits to, at near-zero net-new cost.
2. **Build a small Theme Builder page** (Accent / Base / Font / Radius / Radius Form / Mode) that live-previews real Astryx components and exports the result as copy-paste `defineVars`/`createTheme` code. This is the single most externally-praised artifact on the whole HeroUI site and maps directly onto Astryx's existing `stylex.defineVars`/`createTheme` theming primitives — mostly a UI-and-export-format build, not a new design-token architecture.
3. **Derive a token ramp from one seed variable instead of hand-authoring a scale.** HeroUI's `oklch(from var(--accent) calc(l ± n) c h)` pattern (CSS relative-color syntax) is the mechanism; per this repo's own StyleX capability notes, verify relative-color-syntax support explicitly before adopting the exact function — but the _shape_ of the pattern (1 input token, N derived tokens, computed in CSS not JS) is worth replicating with whatever color function StyleX confirms support for.
4. **Replace a features-grid hero with a "kitchen sink of real vignettes."** Assemble 4–6 small, believable product screens (a sign-up card, an OTP field, a settings toggle row, a dashboard tab) built from actual Astryx components as the hero's visual proof, instead of a screenshot or an icon grid — this is a stronger "prove it by demonstration" move than anything in Astryx's current hero options.
5. **Pair every future codemod/upgrade (`astryx upgrade --apply`) with an agent-specific migration doc**, mirroring HeroUI's split of human migration guides vs. "Agent Migration Guide" — since Astryx already ships upgrade codemods, the missing piece is just the parallel agent-readable doc per breaking change.
6. **Consider explicit competitive positioning language** in the homepage meta description/subhead (HeroUI's "the modern alternative to MUI, Chakra UI, and shadcn/ui" line) if Astryx wants the same direct-comparison SEO/positioning play — a cheap copy change, not a design change.

## Pages Read

- https://heroui.com/ (home — fetched via WebFetch and raw curl for HTML/CSS inspection)
- https://heroui.com/llms.txt
- https://heroui.com/en/themes
- https://heroui.com/en/blog
- https://heroui.com/en/docs/react/getting-started
- https://heroui.com/en/docs/react/getting-started/theming
- https://heroui.com/en/docs/react/getting-started/design-principles
- https://heroui.com/en/docs/react/getting-started/colors
- https://heroui.pro (brief secondary check of the paid tier only)
- Shipped CSS chunks (`/_next/static/chunks/*.css`) fetched directly for font-face, CSS custom-property, and OKLCH evidence
- Attempted and 404'd (guessed URLs, unprefixed): `/docs/guide/introduction`, `/docs/customization/theme`, `/docs`, `/blog`, `/pricing` — real site paths use an `/en/` locale prefix, recovered via nav links in the fetched homepage HTML
