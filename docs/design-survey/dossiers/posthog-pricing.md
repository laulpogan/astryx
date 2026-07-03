---
name: PostHog — Pricing
url: https://posthog.com/pricing
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

PostHog's pricing page ("PostHog pricing – Transparent, usage-based, generous free tier") is the commercial anchor of a dev-tool marketing site that treats its whole domain as a themeable "desktop" — file-extension nav labels (`home.mdx`, `customers.mdx`, `demo.mov`), a literal `Trash` icon, swappable light/dark themes, "classic"/"modern" skins, and named wallpapers. The pricing page itself centers on a live, per-product usage calculator (11+ products, each with its own volume slider) that outputs a running dollar total, wrapped in deliberately irreverent copy, a signed trust note from co-founder James Hawkins, and a head-on competitor comparison matrix. Built on Gatsby + React + Tailwind CSS, with `rc-slider` driving the calculator and Lottie/`react-flow`/Swiper present in the wider bundle.

## Typography

Verified from compiled CSS in the shipped bundle (Tailwind utility classes, `posthog.com/pricing`):

- **`font-sans` (body/UI default):** `IBM Plex Sans Variable, IBM Plex Sans, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif` — a variable-weight grotesk, not Inter/system-default.
- **`font-code` (inline code/pricing figures):** `Source Code Pro, Menlo, Consolas, monaco, monospace`.
- **`font-mono` (secondary mono utility):** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`.
- **`font-serif` (occasional editorial use, e.g. blog/handbook prose):** `Charter, MatterVF, Arial, Helvetica, sans-serif`.
- **`font-rounded`:** a custom face called `Open Runde` — a rounded grotesk used for friendlier UI moments.
- Easter-egg/alt-skin faces present in the same stylesheet: `font-comic` (`Comic Sans MS, ...`), `font-fairytale` (`Fairytale`/`Computer Modern`), `font-squeak` (`Squeak`) — evidence of a "silly reading mode" theming layer beyond light/dark (confirmed by a `skin-classic` / `skin-modern` class pair and `data-skin` attribute on `<body>`, default `modern`).
- Headline weight: bold/heavy display weight on H1/H2 vs. regular-weight body; no oversized ultra-light (300) treatment like Stripe/Linear — PostHog leans slightly heavier and more "typed document" than "billboard."

## Color

Verified via hex-frequency scan of the compiled pricing-page stylesheet (`#RRGGBB` occurrences, most-frequent first):

| Hex                               | Reading                    | Where seen                                                                                  |
| --------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------- |
| `#f54e00`                         | Signature brand orange-red | Primary CTA button (`bg-orange`), dark-mode link color                                      |
| `#FEFCED`                         | Cream/parchment            | Light-theme surface tint                                                                    |
| `#E1D7C2`                         | Warm tan                   | Secondary surface / card bg                                                                 |
| `#f5e2b2`                         | Warm amber highlight       | Code/quote block background inside FAQ answers                                              |
| `#1d1f27` / `#1e1f23` / `#161616` | Near-black inks            | Body text, dark-mode surfaces                                                               |
| `#54618E`                         | Slate blue-violet          | Recurring UI/icon stroke color (36 occurrences — most frequent non-neutral hex on the page) |
| `#0079FF`                         | Bright blue                | Accent (seen on homepage)                                                                   |
| `#28E99F`                         | Mint green                 | Accent (seen on homepage)                                                                   |
| `#f7a501` / `#F1A82C` / `#eb9d2a` | Amber/orange family        | Secondary warm accents                                                                      |
| `#C170E8`                         | Purple                     | Illustration/wallpaper accent                                                               |
| `#E92F2F` / `#f35454`             | Red                        | Warning/error states                                                                        |

Theming is **runtime CSS-custom-property driven**, not compile-time only: `<body class="light">` / `<body class="dark">` (default **`light`**, set by `scripts/theme-init.js` reading `localStorage.theme`, falling back to system preference) swaps a semantic token set consumed as `rgb(var(--bg))`, `rgb(var(--accent))`, `rgb(var(--border))`, `rgb(var(--text-primary))`, `rgb(var(--text-secondary))`, `rgb(var(--text-muted))`, `rgb(var(--input-bg))`, `rgb(var(--input-border))`. This directly contradicts the scout note's "dark-leaning" claim — **the verified default is light theme**, with dark as an equally-supported, user-toggleable alternative (the same `theme-init.js` also sets a default `skinMode: 'modern'` and default `wallpaper: 'keyboard-garden'` from a `siteSettings` localStorage blob).

## Layout

Modular, single-column vertical stack (no persistent sidebar on the pricing page). Confirmed section order top to bottom: nav → hero (headline + Hogzilla mascot art) → free-tier framing copy → two-tier plan comparison (Free vs. Pay-as-you-go) → per-product usage-based rate breakdown (11+ products, each with its own tier table) → "Compare plans" full feature matrix → co-founder trust note (James Hawkins, signed) → interactive calculator (sliders + live total) → add-ons → competitor comparison matrix (Amplitude / Mixpanel / Heap / Pendo / FullStory vs. PostHog) → "frequently purchased with" partner recommendations → FAQ (9 Q&As, each illustrated with a different hedgehog pose) → joke "classic marketing tactics" section (fake urgency copy, G2 badge, eco-disclaimer) → footer. Tailwind's arbitrary-value radius classes cap out small: `rounded-[2px]`, `rounded-[6px]`, `rounded-[8px]` — a tight, code-editor-like corner scale rather than the soft `rounded-2xl`/`rounded-3xl` common on 2026 AI-startup sites. Max-width scale is stock Tailwind (`max-w-2xl` … `max-w-7xl` plus arbitrary `max-w-[443px]`-style overrides for one-off components).

## Motion

- **Pricing calculator sliders** run on `rc-slider` (confirmed via `.rc-slider-handle`, `.rc-slider-handle:hover{border-color:#57c5f7}` and a focus glow `box-shadow:0 0 0 5px #96dbfa` in the shipped CSS) — a light-blue focus/hover ring on an otherwise flat slider track.
- **Buttons are tactile/skeuomorphic**, not flat-hover: primary CTA classes include `border-[1.5px]`, `bg-button-shadow`, `translate-y-[-2px] hover:translate-y-[-3px] active:translate-y-[-1.5px]` — the button visually lifts on hover and depresses on click, like a physical key, rather than a color/opacity fade.
- **"Hedgehog Mode" sprite animation**: a dedicated CSS keyframe `questlog-sprite-animate` (`steps(11) 4`) drives a walking/jumping hedgehog character across the screen from sprite sheets (`/images/questlog-walk-sprite.png`, `/images/questlog-jump-sprite.png`) — an 8-bit-game-style CSS `steps()` sprite animation, not a GIF or Lottie file, referenced by a standalone site section (`/sparks-joy/hedgehog-mode`). This is PostHog's well-known "hedgehogs walk around your browser" easter egg, implemented as pure CSS/JS sprite stepping.
- Bundle also ships `react-flow` (node/edge diagrams, likely used on architecture-style docs pages), `Swiper` (carousels), and Lottie (`lottie` string present in bundle) — but the pricing page itself leans on CSS transforms/keyframes plus `rc-slider`, not WebGL or heavy JS animation libraries.

## Hero Anatomy

Pricing-page "hero" is deliberately low-key relative to its homepage: a page title ("PostHog Cloud") + a two-sentence subhead ("PostHog is designed to grow with you. Our 10+ products (and counting) will take you from idea to product-market fit to IPO and beyond.") sitting above/alongside a "Hogzilla" mascot illustration, immediately followed by the free-tier stat ("more than 90% of companies use PostHog for free"). No large background gradient, no product screenshot as hero art — the mascot illustration + a blunt numeric social-proof line does the work a hero image would elsewhere. Homepage hero is similarly text/mascot-led: headline "PostHog – We make dev tools for product engineers," Hogzilla art, immediate customer-logo row (Y Combinator, Lovable, ResearchGate, Supabase, ElevenLabs, Exa, Hasura) with a joke disclaimer ("Not endorsed by Kim K").

## Components of Note

- **Live usage calculator**: per-product sliders (Product Analytics, Session Replay, Feature Flags, Surveys, Managed Warehouse, Data Pipelines, Error Tracking, PostHog AI, AI Observability, Logs, Workflows, Inbox) each with volume steps like `0 → 1M → 10M → 50M → 250M` events/month, an Anonymous-vs-Identified event toggle, and a large running "Estimated total for all products & add-ons" figure defaulting to $0. Includes a "Generate calculator URL" action to share a specific configuration as a link.
- **Competitor comparison matrix**: PostHog vs. Amplitude, Mixpanel, Heap, Pendo, FullStory across Product analytics / Web analytics / AI Observability / Session replay / Feature flags / Experiments / Surveys / Data warehouse — a simple checkmark grid, not a marketing-heavy "we win" table.
- **Co-founder trust note**: a signed, first-person block from James Hawkins stating "We make a profit with every product... we don't have loss-leader products," "We aim to match the cheapest competitor for each product at every scale," and citing "over 60,000 customers, runs default alive, and aims to IPO rather than sell."
- **File-system-styled global nav**: literal file-extension labels (`home.mdx`, `customers.mdx`, `demo.mov`) plus a `Trash` icon and "website mode" toggle, treating the whole site chrome as a desktop metaphor.
- **Theming system exposed to visitors**: light/dark toggle, `skin-classic` vs `skin-modern` body attribute, and 7 named wallpapers found in the bundle (`2001-bliss` — a direct wink at the Windows XP default desktop wallpaper — plus `coding-at-night`, `hogzilla`, `keyboard-garden` [default], `office-party`, `parade`, `startup-monopoly`).
- **FAQ-with-mascot**: each of the 9 pricing FAQ answers is illustrated with a distinct hedgehog pose rather than a generic accordion icon.

## Voice & Copy

Irreverent, transparent, anti-sales-legalese. Verified exact lines: "Just pick this one! You can upgrade later." · "PostHog is a web product and cannot be installed by CD. We did once send some customers a floppy disk but it was a Rickroll." · "Hurry: Tons of companies signed up today. Act now and get $0 off your first order." (a straight-faced parody of fake-urgency dark patterns). Co-founder bio line: "When James isn't thinking about how to cut prices (again), you'll likely find him changing a diaper." Homepage: "You never have to 'jump on a quick call' with sales." About page: "There are other dev tool companies, but they not like us." / "If it gives you the ick, you know it gives us the ick too." The pattern throughout: state the boring/legal fact, then immediately undercut it with a joke, rather than hiding behind neutral corporate copy.

## Distinctive Moves

1. **The site itself is a themeable desktop, not just a page** — file-extension nav items (`home.mdx`, `demo.mov`), a `Trash` icon, a light/dark toggle, a `classic`/`modern` skin switch, and named, jokey wallpapers (`2001-bliss` = Windows XP Bliss parody) that persist via `localStorage`. Theming is a visible, playable feature, not hidden settings.
2. **"Hedgehog Mode"** — a real sprite-sheet character animation (CSS `steps()` walk/jump cycle) that turns the mascot into a persistent, interactive on-screen presence rather than static illustration, with its own dedicated site section (`/sparks-joy/hedgehog-mode`).
3. **Pricing-as-honesty-performance**: a live per-product calculator with shareable URLs, paired with a signed founder note that states margin philosophy plainly ("we make a profit with every product... no loss-leaders") — trust is built by exposing the pricing _logic_, not just the number.

## Buzz Evidence

- Co-founder trust note states "over 60,000 customers" and that the company "runs default alive" (profitable/self-sustaining), with stated intent to IPO rather than sell [S, self-reported on posthog.com/pricing, 2026-07-02, not independently verified — 40].
- About page states 190,254+ (community/user count, exact label not fully disambiguated in fetched content) — treat as directional, not verified.
- Named enterprise/notable customer: Y Combinator itself, quoted on the pricing page ("PostHog is central to how we do that at Y Combinator" — Cat Li, Product & Engineering Lead), plus a customer-logo row including Supabase, ElevenLabs, Exa, Hasura, Lovable, ResearchGate.
- G2 badge referenced ("People on G2 think we're great") — specific rating/count not visible in fetched markup, so not independently confirmed here.
- No award/press citation (Awwwards, Product Hunt rank, funding headline) surfaced in the pages read; this dossier's buzz signal rests on self-reported customer/scale claims plus the Y Combinator testimonial, not third-party recognition.

## What Astryx Should Take

1. **A live usage/pricing calculator is a reusable "components" pattern, not just a PostHog quirk**: a slider (or stepped-range) input driving a large live numeric readout, with a "generate shareable URL" action, maps directly to an Astryx `Slider` + computed-output pattern worth documenting as a recipe (e.g., for a docs page demoing token/theme cost, or a design-system adoption calculator).
2. **Semantic runtime color tokens, not just compiled Tailwind classes**: PostHog's `rgb(var(--bg))`, `--text-primary/secondary/muted`, `--accent`, `--border` pattern swapped by a `body.light`/`body.dark` class is functionally identical to the semantic-pair approach already flagged from shadcn/Radix in this survey — reinforces that Astryx's theme provider should expose a small, named semantic set (bg/text-primary/text-secondary/text-muted/accent/border) rather than raw palette steps, so consuming teams theme by intent, not by color name.
3. **Tactile button motion (lift-on-hover, depress-on-active via `translate-y`) is a cheap, non-GPU-heavy way to make a flat design system feel physical** — worth offering as an optional Button variant/recipe (small negative-Y translate on hover, smaller on active) instead of only opacity/background transitions, especially since it composes cleanly with StyleX's `stylex.when.ancestor`/pseudo-class support already in Astryx's toolkit.
4. **Visible, playable theming (not just a hidden dark-mode toggle) as a docs-site differentiator**: PostHog's user-facing skin/wallpaper picker is a stronger "we take theming seriously" signal than a footer toggle — Astryx's own theme-provider story (light/dark + overrides) could borrow the idea of exposing a small, named set of example themes as a visible on-site picker on the marketing/docs site itself, proving the theming API by using it live.
5. **Straight-faced, fact-then-joke copy near price/legal text** is a distinct voice option Astryx could offer as a documented "voice" preset in its copy guidance for teams building pricing/plan pages with the design system — pairing a plain factual statement with a one-line irreverent undercut, rather than either dry legalese or full meme-voice.
6. **Caution, not adoption**: the file-extension/desktop-metaphor nav (`home.mdx`, `Trash`) and named wallpapers are high-personality, brand-specific moves that would read as noise on a neutral B2B design-system site — note them as "distinctive to PostHog," not a pattern to copy wholesale.

## Pages Read

- https://posthog.com/pricing (primary target; fetched via WebFetch + raw HTML curl for CSS/asset verification)
- https://posthog.com (homepage; WebFetch + raw HTML curl)
- https://posthog.com/llms.txt (raw fetch, 3,808 lines, confirmed real and current)
- https://posthog.com/about
- https://posthog.com/changelog
- https://posthog.com/docs
- https://posthog.com/handbook
- https://posthog.com/session-replay
- https://posthog.com/scripts/theme-init.js (raw JS fetch, confirms default theme/skin/wallpaper values)
