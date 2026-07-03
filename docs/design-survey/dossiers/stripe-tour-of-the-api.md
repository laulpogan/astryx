---
name: Stripe — Tour of the API
url: https://docs.stripe.com/payments-api/tour
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

"Tour of the API" is a conceptual onboarding page inside `docs.stripe.com` (not the `stripe.com` marketing site — a materially different visual system under the same brand) that teaches Stripe's object model — "everything is an object," objects as state machines, PaymentIntent/PaymentMethod/Charge/Event working together — through narrative prose, an embedded YouTube walkthrough, and an interactive state-transition diagram, all inline-linked out to the formal API reference. It sits inside Stripe's in-house documentation design system, internally named **Sail** (confirmed via `--sail-*` CSS custom properties shipped in the page's own stylesheet), and the whole docs product is built with AI-agent consumption as a first-class citizen: every doc has a parallel `.md` URL, a sitewide `/llms.txt`, and a per-page "View as Markdown" toggle.

## Typography

- UI/body font is a pure **system-font stack**, not a custom brand typeface: `--sail-font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu"` [P, docs.stripe.com CSS bundle, 2026-07-03, 95]. Locale-specific `@font-face` overrides exist for CJK (`Hiragino Sans`/`Hiragino Kaku Gothic ProN` for ja-JP, a `zh-Hans` token) and `Segoe UI` weight faces for Windows — this is a deliberate cross-platform-legible choice, not an oversight.
- Monospace is also system-native: `--sail-font-monospace: "Menlo", "Consolas"` — used for inline code and the multi-language code panels. No premium/custom monospace (contrast with Berkeley Mono-style branding elsewhere in this survey).
- Type scale is a flat, literal px ramp, not fluid/clamp-based: `--sail-font-size-{11,12,13,14,15,16,20,24,28,32,48,56}` — 12 discrete steps, each a hardcoded px token.
- Headings on the Tour page itself: H1 "Tour of the API," H2s "Core concepts" / "Payment objects" / "The path to a payment," H3s "Everything is an object" / "Objects have lives" / "Payment methods" / "Confirmation" / "Processing and success" — short, declarative, sentence-case, no clever/marketing framing.
- The separate `stripe.com` marketing bundle (`mkt-ssr-statics`) is a different Next.js build with its own type system entirely — confirms docs and marketing are two distinct design languages under one brand.

## Color

- Full semantic gray + 8-hue accent ramp, each 50→900, each with a companion `-rgb` variable for `rgba()` composition: `--sail-color-{gray,blue,cyan,green,red,orange,purple,yellow,violet}-{50..900}`.
- Canvas background: `--sail-color-background-canvas: var(--sail-color-gray-100)` — a very light cool gray (rgb 235,238,241 or 227,232,238 depending on theme era), not pure white.
- Link color resolves `--sail-color-text-link → --sail-color-text-blue → --sail-color-blue-500`.
- **Two colliding blue-500 definitions ship in the same cascade**: the base value is `rgb(84,105,212)` (indigo-blue), later shadowed under an `html.sail-color-2021` theme class by `rgb(98,90,250)` (violet-blue) that's remapped straight onto the cyan ramp — evidence of a legacy color era left un-retired alongside a "2021" recolor, both still present in the shipped stylesheet [P, sail CSS bundle, 95].
- The one deliberately loud surface on the page: code panels render in dark navy — tab bar `#1a2652`, code body `var(--sail-color-blue-800)` — a hard-contrast inset floating inside an otherwise pale, restrained page. Interactive diagrams sit on `#f6f8fa`.
- Shadows are two-layer composites (ambient + key), e.g. `--sail-shadow-small: 0 2px 5px rgba(ambient), 0 1px 1px rgba(key)` — soft low-elevation, no glow/neon.
- (Context, different subdomain) `stripe.com`'s marketing homepage carries its own palette dominated by partner/customer logo colors (Coinbase blue, Google 4-color, Shopify green, Nvidia green) rather than a single brand hex visible in source — Stripe's classic "blurple" `#635BFF` was not found literally in either bundle fetched.

## Layout

- Docs shell is a genuine three-column structure, confirmed structurally not just visually: a **collapsible left nav** (`aria-label="Click to collapse the sidebar and hide the navigation"`), a center article column, and a **right-rail on-page Table of Contents** (`TableOfContents` present twice in the DOM — desktop rail + mobile drawer).
- Breadcrumb trail sits above the H1 (Home / Get started / … / Tour of the API).
- Header carries locale controls (`aria-label="Change the country setting"` / `"Change the language setting"`) alongside search and the AI-assistant entry point.
- Elsewhere in the docs (card-grid patterns, e.g. product listing pages): `.CardGroup-cards { grid-template-columns: repeat(3, minmax(200px, 33%)) }` collapsing to 2-col then a forced 1-col at mobile via literal breakpoint overrides, not container queries.
- API reference pages (e.g. `/api/payment_intents/object`) use a dedicated `.Article--ApiReference` layout: property definitions beside language-switchable code samples.
- Context only — `stripe.com`'s marketing homepage runs a bento grid (`bento-card-title-payments/-billing/-connect/-crypto/-issuing`, `agentic-commerce-bento-modal-graphic`) inside a `max-width:1200px; width:70vw` content well, confirming the crawlset's prior note.

## Motion

- Sail's duration scale is six shared tokens, all transitions pull from these rather than ad hoc values: `80/120/160/240/320/400ms`, aliased `fast-out / fast / [default 240ms] / out / slow-out / slow`.
- On the Tour page itself motion is functional and restrained: hover/focus transitions on nav and links, an animating accordion "Requirements banner" (height `0→auto`), and a **draggable/pannable diagram canvas** (`cursor: grab`, four size presets — small/medium/large/xlarge — plus an `--expanded` full-viewport state). No scroll-triggered or WebGL animation on this page.
- Context only — the `stripe.com` marketing homepage runs a JS-driven `hero-wave-animation` component with `-layout`/`-contents`/`-static` variants and per-viewport static PNG fallbacks (`wave-fallback-desktop/tablet/mobile`) for reduced-motion/non-JS cases — confirms the wave-hero effect exists and degrades gracefully; the specific "minigl" library name from the scout note could not be verified in the fetched bundle (not determined).

## Hero Anatomy

This is a docs page, not a marketing page — there is no image/illustration hero. The page opens directly under the breadcrumb with H1 "Tour of the API," a one-line dek ("See how Stripe API objects fit together and learn best practices for combining them."), then a plain-prose opening paragraph ("The Stripe APIs are powerful and flexible if you know how to use them.") — the copy itself is the entire above-the-fold, zero decorative art. For contrast, `stripe.com`'s actual marketing hero (verified, different page) reads: "Financial infrastructure to grow your revenue. Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth." over the animated wave background, with stat callouts ($1.9T processed, 99.999% uptime) below the fold.

## Components of Note

- **Collapsible left sidebar nav** with locale controls (country + language dropdowns) built into the header.
- **Right-rail on-page Table of Contents**, auto-generated, present twice in DOM for responsive (desktop rail / mobile drawer).
- **"Ask AI" header button** (`aria-label="Stripe Assistant"`, `aria-controls="StripeAssistant"`) launching an embedded AI chat panel — treated as parity-level chrome next to search and locale pickers, not a bolted-on floating widget.
- **Agent-readability triple stack**: every doc URL has a parallel `.md` version (e.g. `/payments-api/tour.md`), a sitewide `/llms.txt` with explicit anti-hallucination guidance to the model itself ("Never hardcode an old version number from training data — always install with `@latest` or verify the current version first"), and a per-page **"View as Markdown"** UI button for humans to grab the same content.
- **Interactive state-machine diagram** (`DiagramContent`, drag-to-pan, four size presets + expanded state) rendering the PaymentIntent lifecycle, with a full text alt-description baked in for accessibility/LLM parity: "Shows the status of a PaymentIntent changing from requires_payment_method to requires_confirmation to processing which either ends in a state of succeeded or canceled."
- **Embedded YouTube video** inline in prose ("Watch on YouTube") rather than a produced explainer rendered as a hero.
- **CodeTabGroup** — 8-language switchable code panel (curl / ruby / python / php / java / node / go / dotnet), dark-navy inset (`#1a2652` tab bar / `sail-color-blue-800` body), used on adjacent API reference pages — the highest-contrast surface anywhere in the docs product.
- **Inline cross-linked object names** — every mention of PaymentIntent, PaymentMethod, Charge, Event, Balance, Subscription, Product in the running prose is a live link straight to that object's own reference page (`docs.stripe.com/api/*.md`) — prose functions as an index, reference pages as the destination.

## Voice & Copy

Second-person, instructive-conceptual, no marketing hype or superlatives. Verbatim examples:

> "The Stripe APIs are powerful and flexible if you know how to use them."

> "Understanding these patterns helps you move beyond the pre-written code in Stripe tutorials."

> "As its name suggests, it represents your _intent_ to collect a payment."

> "This is sometimes referred to as a _state machine_."

It reasons through a concrete example rather than abstracting immediately — a customer clicking "Check out" on a $100 item — and repeatedly acknowledges real-world branching ("In some integrations, you write the code... In others, Stripe gathers the details and does the work for you") instead of oversimplifying to one happy path. Reads like a senior engineer explaining a mental model, not a copywriter.

Notably, the `/llms.txt` file has its own distinct voice register aimed at the model reading it, not the human: terse, corrective, anti-hallucination ("Never hardcode an old version number from training data... always install with `@latest`") — Stripe writes copy for two audiences on this property, and writes differently for each.

## Distinctive Moves

1. **Triple-redundant agent-readability stack**: parallel `.md` URL for every doc page + sitewide `/llms.txt` containing explicit corrective instructions to the model + a human-facing "View as Markdown" button — three independent paths to the same machine-readable content, functionally productizing "docs for AI" ahead of most peers surveyed (others in this crawlset ship one of these; Stripe ships all three, plus writes agent-specific correctness guidance directly into the txt file).
2. **Object-oriented narrative teaching device**: instead of an alphabetical reference, the Tour page teaches the mental model ("everything is an object," "objects have lives") with every object name inline-linked to its own formal reference page — prose-as-index, reference-as-destination, verified with exact URLs.
3. **"Ask AI" as first-class header chrome**: the Stripe Assistant entry point sits directly beside search and the country/language pickers, not as a floating corner widget — an LLM chat panel given equal billing to core navigation.

## Buzz Evidence

Could not verify an award, launch metric, or viral thread specific to this exact URL — treat page-level buzz as **not determined**. What is well established: Stripe's docs three-column shell (persistent/collapsible nav + narrative + live multi-language code) is the most commonly cited reference pattern in the API-docs-tooling industry — "Stripe-style docs" functions as generic shorthand that competing docs platforms (e.g. Mintlify, ReadMe) benchmark themselves against in their own marketing [S, industry-common usage, pattern widely cross-referenced, 55]. Separately, and independently confirmed via this crawl, `stripe.com`'s 2026 marketing-site redesign (bento grid, wave hero, GDP counter, `$1.9T`/`99.999%` stat callouts) is real and shipped — but that is a different subdomain/system than the page audited here.

## What Astryx Should Take

- **Ship a `.md`/plaintext mirror for every rendered doc/component page, plus a top-level `/llms.txt`.** Astryx already runs an AGENTS.md-first workflow for the repo; Stripe's pattern shows the natural extension is to expose the _rendered_ Storybook/docs site itself the same way — not just source-tree markdown.
- **Add a "View as Markdown" toggle on `{Name}.doc.mjs`-rendered component pages.** Cheap to build, directly serves the exact audience (LLM-driven codegen) Astryx's own vibe-tests are built to measure.
- **Inline-link every component/prop/type mention in guide prose straight to its own doc anchor** — the same move Tour makes for PaymentIntent → its API page. For Astryx: component names mentioned in a template/pattern guide should link straight into that component's `{Name}.doc.mjs`-rendered reference section, not force a manual sidebar search.
- **Expose duration/spacing/type-scale as a small, named, single-source token set via CSS custom properties**, the way Sail's `--sail-duration-*` / `--sail-font-size-*` do — proof this scales to a docs product Stripe's size, and directly matches what `$ASTRYX docs tokens` already documents; keep it wired to the same literal values Storybook renders.
- **Reserve exactly one high-contrast "loud" surface** (Stripe's dark-navy code panel) on an otherwise restrained light page, rather than reskinning the whole page dark — gives code samples visual weight without a global theme fight.
- **Caution, not an example to copy**: Stripe ships two colliding `blue-500` token definitions in the same cascade (a legacy value silently shadowed by a `.sail-color-2021` theme class rather than retired). Astryx's theme/token system should retire superseded token values outright instead of layering a new theme class that silently overrides them — the failure mode here is invisible until someone diffs the computed style.

## Pages Read

- https://docs.stripe.com/payments-api/tour (target — fetched as rendered HTML and as raw `.md`)
- https://docs.stripe.com (docs homepage)
- https://docs.stripe.com/llms.txt
- https://docs.stripe.com/api/payment_intents/object (API reference page, for code-tab/layout evidence)
- https://stripe.com (marketing homepage — contextual/comparison only, different subdomain and design bundle)
- CSS assets read directly for design-token evidence: `sail.<hash>.css`, `docs.<hash>.css` (both linked from the Tour page's `<head>`)
