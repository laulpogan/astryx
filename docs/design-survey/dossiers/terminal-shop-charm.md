---
name: terminal.shop (Charm)
url: https://terminal.shop
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

terminal.shop sells whole-bean coffee (and a monthly "Cron" membership box) through an actual SSH session — `ssh terminal.shop` drops you into a full TUI shop built with Charm's own Bubble Tea/Lip Gloss stack, and the _marketing website_ is a deliberate mirror of that TUI: a black, monospace, line-numbered "editor" buffer where each line of copy is a focusable, hoverable, keyboard-navigable row, and the primary CTA is not a button but a literal copy-pasteable shell command. Built by Charm (dax/SST, Adam LaPlaca, ThePrimeagen, Teej Kaminski/teej_dv, David Hill) and launched at React Miami; it sold out within days and was projected to do six figures in first-year revenue. It's an Astro + SolidJS single-page app — every route (`/cron`, `/api`, `/about`, `/faq`) resolves to the same shell HTML and is rendered client-side, with no llms.txt, robots.txt, or sitemap (all 302 to `/`).

## Typography

- **Primary face: Geist Mono**, self-hosted as a true variable font — `@font-face{font-family:geist;src:url(/fonts/geist-mono-latin.woff2) format("woff2-variations")...;font-weight:100 900}` — a single variable file spanning the full 100–900 weight axis, plus a metrics-matched `geist-fallback` (`local("Courier New")` with `ascent-override`/`descent-override`/`size-adjust` to prevent layout shift, a technique also used for the serif fallback). Applied via a `font-mono` utility wrapping the whole app (`ui-monospace` stack after `geist, geist-fallback`).
- **Secondary display face: Instrument Serif**, self-hosted (`/fonts/instrument-serif.woff2`/`.ttf`), exposed as a `font-serif` utility (`instrument, instrument-fallback, ui-serif, Georgia,...`). Used sparingly for oversized display headlines on subpages that break from the terminal register — e.g. "That time of the month." on `/cron` — not on the monospace-only homepage.
- Homepage body text runs at what reads as ~16px/leading-10 (2.5rem line-height) inside the "editor," giving each line generous vertical rhythm like a spaced-out code buffer rather than dense prose.
- No named grid/type-scale system is exposed publicly (no design-tokens page) — this is a product UI's type system reused for marketing, not a documented scale.

## Color

- **True black** (`bg-black`, `#000`) for the main content canvas; header/nav bar sits one step lighter at `--gray-1 = #151719` (confirmed both in the compiled CSS and via computed style, `rgb(21,23,25)`).
- Gray "scale" is not a literal stepped hex ramp — it's built from **white/blue-white at increasing alpha over black**: `gray-6 = #e1f0fe24` (~14% opacity ice-blue), `gray-7 = #3a3e41` (solid mid-gray, used for hairline borders), `gray-10 = #e5f2ff78` (~47%), `gray-11 = #f0f7ff9e` (~62%), `gray-12 = #ffffffed` (~93%). This alpha-over-black approach is why the grays read with a faint cool/blue cast rather than neutral.
- **Single accent: orange `#ff5e00`** — used for the blinking input caret, focus/active row indicator (`border-l-2` left rail, exactly like a diff/gutter marker in a code editor), link/CTA hover states, and text-selection color (`::selection{background-color:#ff5e00cc}`). No secondary accent, no gradients anywhere in the stylesheet.
- The `/cron` subpage abandons the dark terminal palette entirely for a warm **cream/off-white background** with a photorealistic 3D-rendered vintage beige computer (CRT monitor showing a green "cron" terminal readout) and a floppy-disk-style product box — proving the system has a light-mode/lifestyle register in reserve, not just the black-terminal look.

## Layout

- Fixed-height (`h-10`) sticky header: wordmark "terminal" in a bordered cell on the left, then a horizontal row of nav items separated by hairline vertical rules (`divide-x`), not brackets or pills. Nav: `terminal / cron / api / readme / faq` — "readme" is the label shown for what routes to `/about`.
- Main content is a single constrained column (`max-w-xl`) on the homepage/about/faq/cron — the whole site is narrow-measure, centered, no multi-column marketing grid.
- The `/api` page is the outlier: a genuine **three-pane API-reference layout** (left section-jump nav with `#quickstart / #product / #profile / #address / #card / #cart / #order / #subscription / #token / #app / #miscellaneous` anchors; center prose + endpoint docs; color-coded HTTP-verb badges — GET in blue, PUT in yellow/orange, DELETE/POST distinguishable by color) with per-endpoint request/response schemas and six-language code tabs (JS/Python/Go/Java/Kotlin/Ruby), built on an OpenAPI 3.1 spec and Stainless-generated SDKs. Full developer docs live inside the marketing domain, not spun off to a docs subdomain.
- No footer nav grid, no logo wall, no multi-section scroll story on the homepage — the entire page is ~7 "lines."

## Motion

- One real animation: the input caret blinks via `@keyframes blink{0%,25%,to{opacity:1}50%,75%{opacity:0}}` applied as `animation:blink 1.45s infinite step-start` — note `step-start` easing (a hard on/off flip, not a fade), which is what makes it read as an actual terminal cursor rather than a soft UI pulse.
- Per-row interaction states (hover/focus/active) swap background and the orange left-border instantly via Tailwind pseudo-classes — no transition/duration classes were found on these, so state changes are instant, matching terminal/editor conventions rather than "smooth SaaS" easing.
- No scroll-triggered animation, no parallax, no WebGL/GSAP/Framer Motion — confirms the earlier scout signal (`take_into: motion`, "clean-design" categorization) that this genre rewards restraint over spectacle.

## Hero Anatomy

The homepage hero **is** the seven-line "file": a `#`-prefixed comment line ("use the command below to order your delicious whole bean coffee"), then the bolded, focusable command line `ssh terminal.shop` (hover reveals a copy icon + "# copy to clipboard" tooltip), then `cat ~/.ssh/known_hosts`, the literal ED25519 host-key fingerprint for out-of-band verification, a blank line, and a `#`-commented email-signup prompt with an inline text input whose caret is the only moving element on the page. There is no headline in the typographic sense, no hero image, no gradient — the CTA is executable code you're meant to paste into a real terminal.

## Components of Note

- **The "editor" component itself**: `.editor` sets `counter-reset:editor-counter`; each `.line` does `counter-increment:editor-counter` and renders its own number via `content:counter(editor-counter)` in a `::before` (widths step from `2rem`→`2.5rem`→`3.5rem` as digit count grows) — genuine CSS-counter line numbers, not hand-typed digits or a JS loop.
- Built on Charm's own **`@textjs`** buffer/editor primitive (referenced in an HTML comment and as a lazy-loaded island `textjs.DEyh4h2T.js`), hydrated via SolidJS islands inside an Astro shell — the marketing page is a real instance of an editor-buffer UI component, not a CSS pastiche of one.
- **API reference component**: verb-badge + collapsible response-code rows (200/400/401/404/429/500) with a chevron disclosure per status, six-language code-sample tabs, all client-rendered from the OpenAPI spec.
- Dismissible promo banners gated by `localStorage` per campaign (`producthunt-banner`, `terminalhq-banner`) that persist across Astro view-transitions (`astro:before-swap` listener re-applies the dataset toggle) — a lightweight, no-cookie-banner-vendor pattern for transient launch announcements.
- FAQ page reuses the same numbered-line "editor" component for a question/answer accordion-less list — the Q is the bold line, the `#`-comment is the answer, both in one row.

## Voice & Copy

Deadpan-funny, in-joke, developer-to-developer. Sample lines: "Cron isn't a coffee subscription. It's a membership. A genuine, bonafide, official membership to Terminal." / "Copyright © Terminal Products, Inc. 1985–2025" (a fictional founding date, playing the retro-computing bit straight) / FAQ entries like "will Terminal coffee make me a better developer? legally we cannot guarantee that it will, but..." and "is it true your coffee contains the sweat of @theprimeagen? we can neither confirm nor deny these rumors." Even the `<title>` tag is a joke: **"wip: terminal (initial commit)"** — the browser tab itself is styled as a git commit message. The README/about page credits only two people by handle (`@theprimeagen`, `@teej_dv`) under the line "brought to you by a group of talented, good looking, and humble heroes..." — self-aware, zero corporate polish, written for an audience that already knows who those handles are.

## Distinctive Moves

1. **The hero CTA is executable, not clickable** — `ssh terminal.shop` is real, pasteable shell input with an SSH host-key fingerprint offered for manual verification, not a styled button pointing at a screenshot. The product and the marketing surface are the same interaction model.
2. **The whole page is a working code-editor component**, not an editor _skin_ — CSS-counter line numbers, per-line focus/hover/active states with a gutter-style orange marker, and a real blinking terminal caret (`step-start` timing) reused from Charm's own `@textjs` buffer primitive.
3. **Deliberate register-switching by route**: the black monospace terminal persona on `/`, `/about`, `/faq` gives way to a warm cream, photoreal-3D-render, big-serif "lifestyle" persona on `/cron` — proving restraint isn't the _only_ mode available, it's a choice made per context.

## Buzz Evidence

- Front-page Hacker News threads on both launch ("New startup sells coffee through SSH," 2024) and traction ("we sell coffee from the terminal... will do 6 figures in revenue," 2024/2025) [S, news.ycombinator.com, undated-but-cited — treat as directional, not re-verified against current HN state].
- Launched live at React Miami; sold out of initial inventory within days.
- Founding team includes ThePrimeagen and teej_dv, both developer-audience YouTube/streaming personalities with large existing followings, plus dax (of SST/opencode.ai — also in this survey's crawlset) and Charm's Adam LaPlaca — built-in distribution through founder credibility rather than paid acquisition.
- The site's own API docs describe it as "the award winning terminal ssh shop" (self-reported; the specific award was not independently verified in this pass — flag as `[TBD: needs verification]`).

## What Astryx Should Take (concrete)

- **Make the docs site's own code samples double as the hero**: instead of a screenshot of a component, show a live, focusable "line" of real, copy-pasteable install/usage code as the first thing a visitor can interact with — mirrors Astryx's own CLI-first workflow (`$ASTRYX component <Name> --dense`) and would let the marketing page _be_ the quickstart rather than link to one.
- **Borrow the CSS-counter line-number technique** for any Astryx doc surface that shows multi-line code blocks or a changelog — free, semantic, no JS, and it visually signals "this is real, versioned code" the way plain prose can't.
- **Adopt the alpha-over-black (or alpha-over-white) gray-scale technique** as an option in Astryx's theme docs: instead of only shipping stepped neutral hex tokens, document the alternative of white/black-at-alpha over a solid canvas — cheaper to reason about for a single-accent theme and it's what gives this site's blacks a cohesive tint instead of flat neutral gray.
- **One accent color, no gradient, used only for state** (focus/active/caret/selection) is a legitimate, fully-specified alternative to Astryx's default palette guidance — worth a named "single-accent terminal" example theme in the swizzle gallery, distinct from the cream/serif and dark/glass directions already covered by other exemplars in this survey.
- **Register-switching per route** (restrained mono/dark for product pages, warm serif/photo for a "member perk" page) is a pattern worth naming explicitly in Astryx's page-template guidance: a design system's marketing site doesn't need one locked mood across every route if the content itself (e.g., a pricing/membership page vs. a docs page) calls for a different register.
- **Caution, not a takeaway**: the site ships zero llms.txt/robots.txt/sitemap and every route 302s to the SPA shell for a non-JS fetch — the opposite of the AGENTS.md/llms.txt discoverability pattern Astryx is building toward. Worth citing as the counter-example when making the case for machine-readable docs.

## Pages Read

- https://terminal.shop (home) — fetched via WebFetch and rendered browser (raw HTML + live DOM)
- https://terminal.shop/about ("readme" nav item) — rendered browser
- https://terminal.shop/faq — rendered browser
- https://terminal.shop/cron — rendered browser
- https://terminal.shop/api — rendered browser
- https://terminal.shop/llms.txt, /robots.txt, /sitemap.xml — checked, all 302-redirect to `/` (no distinct content; confirms no agent-readable doc surface)
- Compiled stylesheet `https://www.terminal.shop/_astro/about.CSjCn8a_.css` — fetched raw for font-face, color, and keyframe verification

**Corrections to prior scout notes**: the original crawlset entry claimed "`=` ASCII dividers" and a "bracketed nav" (`[terminal/cron/api/readme/faq]`) — neither is present. The only `===`/`==` sequences in the source are JavaScript strict-equality operators inside minified inline scripts, not visual ASCII art, and the nav is plain text labels separated by thin CSS vertical-rule borders, no bracket characters. Corrected above.
