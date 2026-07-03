---
name: shadcn/ui — Theming docs
url: https://ui.shadcn.com/docs/theming
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

shadcn/ui is a component distribution platform (not an installable package) — a large catalog of copy-into-your-repo React components built on Radix primitives and Tailwind CSS v4, maintained by shadcn at Vercel (117,991 GitHub stars, 9,234 forks as of this crawl, repo pushed same-day — actively maintained). The Theming doc (`/docs/theming`) is the page that explains its core mechanic: every component is styled off a small set of semantic CSS custom properties (`background`/`foreground` pairs) defined once in `:root`/`.dark` and mapped into Tailwind's utility namespace via `@theme inline`, so an entire product's look — including third-party registry components — recolors from one file.

## Typography

- **Geist** (sans) and **Geist Mono** — Vercel's own typefaces, loaded as `next/font` local variable fonts. Confirmed from rendered HTML: `<html class="geist_798ff10f-module__HGtJha__variable geist_4e2d599d-module__VB9uPW__variable geist_mono_3f173115-module__-5hxnG__variable ...">`. Two Geist sans weights/optical sizes are loaded as separate variable-font instances plus one Geist Mono instance.
- **Noto Sans Arabic** and **Noto Sans Hebrew** are also loaded site-wide (`noto_sans_arabic_..._variable`, `noto_sans_hebrew_..._variable`) — used for the RTL example sections on component doc pages (e.g. Accordion's "RTL" tab).
- Hero H1 classes (exact, from rendered DOM): `leading-tighter text-3xl font-semibold tracking-tight text-balance text-primary lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl` — a fluid type scale (3xl → 5xl) with progressively tighter tracking/leading at larger breakpoints, `text-balance` for headline wrapping.
- Subhead: `text-base text-balance text-foreground sm:text-lg` — one step up at `sm`, no further scaling.
- No `font-mono` usage detected in the homepage's rendered body classes outside of code blocks — Geist Mono is reserved for code/CLI snippets, not body UI chrome.

## Color

- **Color space: OKLCH throughout**, both in documented theme tokens and in the live site's own compiled CSS (dozens of `oklch(L C H)` triples found in the shipped stylesheet, e.g. `oklch(0.13 0.03 262)`, `oklch(0.21 0.04 266)`).
- Default ("neutral") theme, light mode: `--background: oklch(1 0 0)` (pure white), `--foreground: oklch(0.145 0 0)`, `--primary: oklch(0.205 0 0)` / `--primary-foreground: oklch(0.985 0 0)`, `--destructive: oklch(0.577 0.245 27.325)`, `--border: oklch(0.922 0 0)`.
- Dark mode (`.dark`): tokens invert (`--background: oklch(0.145 0 0)`, `--primary: oklch(0.922 0 0)`), and `--border` becomes an alpha-blended white — `oklch(1 0 0 / 10%)` — rather than a separate dark gray, so borders stay visually consistent by opacity instead of a hand-picked hue per mode.
- **Semantic pairing convention**, quoted verbatim from the page: "We use semantic background and foreground pairs. The base token controls the surface color and the -foreground token controls the text and icon color that sits on that surface. The background suffix is omitted for the surface token." Full documented pair list: `background/foreground`, `card/card-foreground`, `popover/popover-foreground`, `primary/primary-foreground`, `secondary/secondary-foreground`, `muted/muted-foreground`, `accent/accent-foreground`, `destructive` (no foreground pair — used at reduced opacity instead), `border`, `input`, `ring`, `chart-1`…`chart-5`, and a parallel `sidebar`/`sidebar-*` set (`sidebar`, `sidebar-primary`, `sidebar-accent`, `sidebar-border`, `sidebar-ring`) so a sidebar can carry its own micro-theme distinct from the page.
- **Base color families expanded beyond classic Tailwind grays**: the current `baseColor` options are exactly **Neutral, Stone, Zinc, Mauve, Olive, Mist, and Taupe** (quoted from the page) — Mauve/Olive/Mist/Taupe are newer, more "designer" neutral names layered on top of the historical Tailwind gray/slate/zinc/stone set.
- A companion `/colors` page ("Tailwind Colors in Every Format") lists the full palette — neutrals (neutral, stone, zinc, slate, gray, mauve, olive, mist, taupe) plus 17 accent hues (red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose), 11 shades each (50–950), each swatch copyable as HEX, RGB, HSL, CSS variable, or Tailwind class.
- Custom-token pattern is taught explicitly with a worked example: adding a `warning` token — `--warning: oklch(0.84 0.16 84); --warning-foreground: oklch(0.28 0.07 46);` in `:root`, restated for `.dark`, then exposed via `@theme inline { --color-warning: var(--warning); --color-warning-foreground: var(--warning-foreground); }` so `bg-warning`/`text-warning-foreground` become usable Tailwind utilities immediately.
- Escape hatch documented for teams that don't want CSS variables at all: `pnpm dlx shadcn@latest init --no-css-variables` generates components with raw Tailwind palette classes instead (e.g. `bg-zinc-950 text-zinc-50 dark:bg-white dark:text-zinc-950`) — an explicit, named opt-out rather than a silent default.

## Layout

- Built on **Tailwind CSS v4's CSS-first config**: the shipped scaffold is `@import "tailwindcss"; @import "shadcn/tailwind.css"; @custom-variant dark (&:is(.dark *)); @theme inline { ... }` — dark mode is a Tailwind v4 custom variant keyed to a `.dark` ancestor class, not a media query, so it can be toggled by JS/class rather than only OS preference.
- **Single-variable radius scale**: one `--radius` token (default `0.625rem`) drives seven derived steps purely by `calc()` multiplication — `--radius-sm: calc(var(--radius) * 0.6)`, `-md: * 0.8`, `-lg: var(--radius)` (the 1:1 baseline), `-xl: * 1.4`, `-2xl: * 1.8`, `-3xl: * 2.2`, `-4xl: * 2.6`. Changing one number reflows every corner in the system proportionally.
- Layout-chrome sizing is also token-driven at the CSS custom-property level on `<body>` itself: `[--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*16)] xl:[--footer-height:calc(var(--spacing)*24)]` — header/footer heights are themed values (multiples of Tailwind v4's `--spacing` unit) rather than hardcoded pixel/rem literals, and they respond per-breakpoint.
- On the live homepage, `rounded-md` is the single most-used radius class (378 occurrences) with `rounded-2xl` (169, card-level surfaces) and `rounded-lg` (124) next — the corner-radius distribution in practice matches the documented scale's intent (small controls tighter, cards looser).
- Elevation is nearly flat: `shadow-sm` appears 84 times, `shadow-none` 8 times, and nothing heavier — no large drop-shadows anywhere in the sampled markup.

## Motion

- Motion is CSS-utility-only — **no Framer Motion / Motion library detected** in the shipped bundle (checked for `framer-motion`, `motion/react`, `motion.dev` strings — zero matches).
- Transition classes present: `transition-all`, `transition-colors`, `transition-shadow`, `transition-transform`, `transition-none`, at short durations (`duration-100`, `duration-200`) — fast, functional micro-transitions (hover/focus/theme-swap), not showcase animation.
- One keyframe utility found: `animate-pulse` (loading-skeleton style).
- **Distinctive dual-theme code blocks**: syntax-highlighted code (via Shiki, `data-theme="github-dark"` present) ships both light and dark colors simultaneously as paired CSS custom properties per token — e.g. `style="--shiki-dark:#E1E4E8;--shiki-light:#1F2328"` — so flipping the site's dark-mode class repaints every code sample instantly via CSS alone, with no client-side re-highlight/re-render pass.

## Hero Anatomy

- H1 (exact): **"The Foundation for your Design System"**.
- Subhead (exact): "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code." — this exact line is also the `<meta description>` / OG / Twitter-card copy, i.e. the tagline is reused verbatim as the SEO description, not written twice.
- CTA: a single button, **"Build Your Own"**, linking to `/create?preset=b27GcrRo` — this routes into **shadcn/create**, a visual theme/preset builder that outputs a framework-specific `init` command. The primary hero CTA is not "read the docs" or "get started" — it's a tool that generates your exact setup command.
- Background/body treatment: no illustration or gradient wallpaper. The "hero" is a large, real, interactive dashboard mockup built from actual shadcn components — nav rail with Analytics/Transactions/Investments/Accounts/Spending sections, a savings-goal creation flow, a payout-threshold settings form, notification-preference toggles, a claimable-balance/dividend-income card set, and a chat-style AI assistant demo. The chat demo's sample user message is a real, specific complaint: **"scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around."** — the hero visual doubles as a proof-of-concept for building an AI chat UI, not a generic form gallery.
- Nav bar (exact, top-level): Docs, Components, Blocks, Charts (plus Directory/Create per prior scout notes, not independently re-verified this pass).

## Components of Note

- **Theme Tokens table** on the theming page — every token pair listed with a plain-English "what it controls" and "used by" column (e.g. `popover/popover-foreground` → "Floating surfaces and the content inside them" → "Popover, DropdownMenu, ContextMenu, and other overlays") — tokens are documented by consuming component, not just by name.
- **Component doc page pattern** (verified on Accordion): H1 → Installation (`pnpm dlx shadcn@latest add accordion`, with pnpm/npm/yarn/bun tabs) → Usage (import block + minimal JSX) → live interactive preview → Examples (Basic, Multiple, Disabled, Borders, Card) → dedicated **RTL** example tab (Arabic) → API Reference. Every code sample is both rendered live and copy-pastable.
- **`/docs/dark-mode`** is not one snippet — it's per-framework tabs (Next.js, Vite, Astro, Remix, TanStack Start), each presumably with its own hydration-safe implementation, acknowledging that "add dark mode" is materially different work per meta-framework.
- **`/colors`** — a standalone palette reference/tool (26 color families × 11 shades) with multi-format copy (HEX/RGB/HSL/CSS var/Tailwind class), positioned as a companion utility to theming, not just documentation.
- **shadcn/create** (`/create`) — a visual preset builder reachable straight from the homepage hero CTA, generating the correct `init` command per framework/preset rather than making the user hand-assemble config.
- Config surface (`components.json`) uses a named `"style"` key — current default observed: `"style": "base-nova"` — plus `rsc`, `tailwind.baseColor`, `tailwind.cssVariables` flags, i.e. theming choices are captured in a versioned project file, not just a CSS import.

## Voice & Copy

- Short declarative headers, then one plain-English instructional sentence per section ("Adding new tokens", "To add a new token, define it under `:root` and `.dark`, then expose it to Tailwind with `@theme inline`.").
- Confident but low-hype: no superlatives beyond "beautifully designed"; most copy is procedural ("This is an installation-time choice. To switch an existing project, delete and re-install your components.").
- Footer: "Built by shadcn at Vercel. The source code is available on GitHub." — plain attribution, no marketing flourish.
- The homepage's embedded demo copy (settings forms, chat complaint, placeholder text like "e.g. New Car, Home Downpayment") reads as real, specific, slightly wry product copy rather than generic Lorem/"John Doe" filler — it's doing double duty as a design showcase and a piece of believable microcopy writing.

## Distinctive Moves

1. **One-knob radius system.** A single `--radius` custom property fans out into seven proportional steps via `calc()` multiplication (`sm` 0.6× … `4xl` 2.6×) and is documented as copy-paste CSS, not prose — changing one number reflows every corner radius in a product consistently. This is the single most copyable idea on the page for a design-system docs site.
2. **Self-dogfooding as the proof.** The docs site, the component previews, and the marketing hero are all built out of the same components being documented (Kbd, sidebar, breadcrumb, dialogs, dual-theme Shiki code blocks) — including a hero "dashboard" that is a working interactive product mockup (real forms, a real AI-chat-scroll-complaint demo), not a screenshot. The theming system is demonstrated by being live-toggled in the browser, not just described.
3. **Theming graduated into a tool, not just a doc.** The primary hero CTA doesn't lead to prose — it leads to `shadcn/create`, a visual preset/theme builder that emits your exact per-framework init command. Documentation and tooling are the same click.

## Buzz Evidence

- GitHub (`shadcn-ui/ui`): **117,991 stars**, 9,234 forks, 2,085 open issues, repo created Jan 2023, last pushed same day as this crawl — actively maintained, not a stalled project. [P, github.com API, live-fetched 2026-07-03, 95]
- No award/PH/HN-rank mention found on-site during this pass; reputation evidence here is the GitHub metric above plus the fact that its config vocabulary (`components.json`, `baseColor`, CSS-variable theming) has become a de facto convention referenced by adjacent tools — not independently re-verified beyond the star count.

## What Astryx Should Take

1. **Adopt the single-variable radius cascade for Astryx's own token docs**, even inside a StyleX-based system: document one base radius token (`--astryx-radius` equivalent) with derived steps expressed as `calc()`/`stylex.defineConsts()` multipliers, and show the formula inline on the tokens doc page the way shadcn does — this is the most concretely reusable pattern found, independent of CSS-vars-vs-StyleX plumbing.
2. **Document tokens by consumer, not just by name.** shadcn's Theme Tokens table pairs every token with plain English _and_ a "used by" component list (e.g. `popover-foreground` → Popover/DropdownMenu/ContextMenu). Astryx's `{Name}.doc.mjs` files already carry prop/anatomy docs per component — add the inverse index (a token → components-that-consume-it table) on the theme/tokens doc page so consumers can trace "if I change this token, what visibly changes."
3. **Make the docs site's own hero prove the theming system live**, the way shadcn's dashboard mockup does: a real, interactive multi-component mockup (not a screenshot) with a working light/dark toggle right in the hero, ideally showing one AI-product-shaped surface (chat, dashboard) since that's the audience most likely evaluating a design system in 2026.
4. **Consider a "Without tokens" escape hatch documented explicitly**, mirroring shadcn's `--no-css-variables` init flag — Astryx already has swizzle/eject; stating plainly "if you don't want the token layer, here's the raw-value fallback and its tradeoff" builds trust the way shadcn's explicit opt-out does, rather than presenting tokens as the only option.
5. **Reuse the tagline-as-meta-description discipline**: shadcn's homepage subhead is copy-pasted verbatim into `<meta description>`, OG, and Twitter-card tags — one sentence of copy doing four jobs. Worth auditing Astryx's own marketing/docs pages for the same discipline.

## Pages Read

- https://ui.shadcn.com/docs/theming (target; fetched via WebFetch + raw HTML for CSS variables, exact copy, and config values)
- https://ui.shadcn.com/ (homepage; fetched via WebFetch + raw HTML for hero markup, fonts, footer, color tokens)
- https://ui.shadcn.com/docs/components/accordion (extra_url from crawlset; component doc page pattern)
- https://ui.shadcn.com/docs/dark-mode (per-framework dark-mode implementation structure)
- https://ui.shadcn.com/colors ("Tailwind Colors in Every Format" palette reference page)
- https://ui.shadcn.com/docs/installation (setup paths: shadcn/create, CLI, existing project; framework tabs)
- https://ui.shadcn.com/llms.txt (site structure/sitemap overview)
- https://api.github.com/repos/shadcn-ui/ui (buzz evidence: stars/forks/activity, not a page but a verification fetch)
