---
name: Cluely
url: https://cluely.com
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Cluely is a native macOS/iOS app (distributed through the App Store, not a web install) that runs as an invisible desktop overlay during video calls — it transcribes in real time, takes meeting notes, and feeds the user AI-generated answers live, all while staying hidden from screen-share and recording. Founded by Roy Lee (previously suspended/expelled from Columbia for a similar tool built for coding interviews), the company has built its entire public identity around reclaiming "cheating" as a positive verb, raised a $5M pre-seed and a ~$15M a16z-led Series round, and repeatedly gone viral on X for both the product's premise and its manifesto copy.

## Typography

- **UI/body sans**: Geist (Vercel's typeface), loaded via `next/font` as `--font-geist`, declared as `font-family:Geist,Geist Fallback` (`.__className_41a08d`) and set as the site-wide `--font-sans`/`--default-font-family`. This is the workhorse font for nav, body copy, cards, FAQ, footer.
- **Display accent**: a custom local font literally named **`forma`** (`--font-forma`, single static `.woff2`, one weight, fallback `Arial,Helvetica,sans-serif`), applied via the `font-forma` utility. Verified usage: the Manifesto page's `<h1>` ("We want to cheat on everything.") — `text-3xl → lg:text-6xl`, `font-medium`, tight leading (`lg:leading-[1.125]`). Not used on the homepage hero.
- **Serif break — the actual hero headline font**: the homepage `<h1>` and the `/mobile` page `<h1>`/`<h2>` are set with an **inline `style="font-family:'EB Garamond','EB Garamond Fallback'"`** — i.e., the marquee hero headline ("#1 Undetectable AI for Meetings" / "AI meeting notes on the go") is set in a classic serif (EB Garamond, self-hosted via `next/font`, 6 unicode-range chunks), not in Geist. Sizes: `text-[56px]` mobile → `lg:text-[80px]` desktop, `leading-[96%]`, `tracking-[-1px]`, `font-medium`. This CSS file (and the serif) is loaded only on `/` and `/mobile` — it is a deliberate, scoped headline treatment, not the site's base font.
- Body copy elsewhere uses Tailwind Typography (`prose prose-lg`) inheriting the Geist stack.
- No monospace anywhere in visible copy (code-like UI mockups use Geist, not a mono face).

## Color

Verified from the compiled CSS (`_next/static/css/*.css`), not from marketing screenshots:

- Base palette is a **cool blue-gray / navy monochrome**, not the purple/pink the prior scout note claimed. Most-used hex values: `#edeef2` (light blue-gray, most frequent — cards/background wash), `#DDE2EE`, `#E5E9F2`, `#D0D7E7` (light card gradients), `#022c70` → `#0544a9` → `#0c44a1` → `#81b6ff` (dark-navy-to-light-blue gradient used for a chat-bubble mockup), `#497EE9` → `#749CFF` (blue radial-gradient feature card), `#4a8fdd` (mobile hero background radial), `#667799` / `#94A0B8` (gradient-text accent), `#19191D` → `#626275` (dark-to-gray gradient text for the "Undetectable in every way" section heading), `#8C929D` (muted body text).
- One accent outside the blue family: **`#2CB463`** (green — used sparingly, consistent with a status/positive indicator).
- **No purple, no pink hex values exist anywhere in the shipped CSS.** There is a class literally named `.purple-gradient-button` — but its actual computed colors are `radial-gradient(...,#1e82e0 0,#1c38ea 100%)`, i.e., blue. This is a class-name-vs-value mismatch worth flagging explicitly (a prior scout note describing "saturated purple/pink/blue gradient feature cards" does not hold up against the source — likely inherited from an older site version or a misread of this button's class name).
- Design tokens: shadcn/ui-style semantic pairs in HSL (`--background:0 0% 100%`, `--foreground:#040406`, `--primary:217 91% 60%`, `--card`, `--popover`, `--border`, `--ring`, etc.) plus the full Tailwind v4 default OKLCH theme scale (`--color-red-500`, `--color-purple-500`, `--color-blue-600`...) emitted automatically by the framework — the presence of these framework-default variables in the CSS does **not** mean the brand uses purple/red; only the values enumerated above are actually consumed in markup.
- `--radius:.375rem` (shadcn default 6px) as the base token, but hero/feature cards override to `--radius-3xl` (1.5rem/24px) and `rounded-4xl` (2rem/32px) — soft, large corner radii on marketing surfaces vs. a tighter default for form-like UI.

## Layout

- Next.js App Router site (route group `(website)`), Tailwind CSS v4 (`--spacing`, `--text-*`, `--container-*` tokens, OKLCH default theme), shadcn/ui component conventions (`data-slot` attributes on every primitive), Radix UI primitives (Accordion, confirmed via `radix-accordion-content-height` vars and `data-orientation`/`aria-controls="radix-_R_..."` ids), and Vaul (`vaul-drawer-wrapper` attribute on the body) for a slide-up drawer.
- `main` wrapper uses generous vertical rhythm: `gap-12 md:gap-24 lg:gap-32` between sections — big, confident whitespace between marketing blocks.
- Homepage: single-column vertical scroll — hero → "Meeting AI that helps during the call, not after" mid-page recap headline → feature-card section (horizontal snap-scroll carousel on mobile, `lg:grid lg:grid-cols-3` on desktop) → FAQ accordion → footer.
- Header is `position:absolute` over the hero (transparent, white text/logo) rather than a solid bar, with `--sticky-header-height` reserved as a CSS var for a scroll-triggered solid state.
- Pricing is a 3-card grid (Starter / Pro / Pro+Undetectability), no "most popular" badge, followed by a feature-comparison table.
- Blog index is a **chronological list, not a card grid** — one large hero-image "featured" post at top (author photo, category tag, read time), then plain text rows grouped by month.
- Press page is a card grid of outlet logos, also chronological by month.

## Motion

Confirmed the bundle ships **Motion (the library formerly called Framer Motion)** — its `LayoutGroup` export is present verbatim in one of the vendor chunks (`chunk_9134-*.js`), consistent with the inline `opacity:0; transform:translateY(...)` starting styles found throughout the pre-hydration HTML.

- **Per-word hero headline reveal**: each word of the H1 is individually wrapped (`<span class="-mb-[0.22em] inline-block overflow-hidden pb-[0.22em] align-bottom"><span style="transform:translateY(1.25em)">Word</span></span>`) — a clip-masked, word-by-word slide-up-into-place reveal, not a single fade.
- **Scroll/load reveal pattern**: subheadline, CTA, dividers and feature cards all start at `opacity:0` with a small `translateY` offset (6–32px) and animate to rest — a consistent fade+rise entrance vocabulary applied site-wide, not just the hero.
- **3D dock-icon parade**: the macOS dock row (Launchpad/Safari/Settings/Zoom/Cluely/Trash icons) sits at `style="transform:translateZ(350px)"` per icon — a perspective/depth-based reveal for the dock row layered over the hero video.
- **`desktop-campaign-cta-pulse` keyframe**: a periodic scale pulse (`scale(1) → 1.065 → 1.035 → 1`) applied to a desktop-download CTA to draw the eye without being a spinner/loader.
- **Logo marquee**: `animate-marquee` infinite horizontal scroll of press-outlet logos on `/mobile`, edges faded via a `mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)` — standard fade-out-marquee treatment.
- **"Shimmer"** (referenced in the prior scout note) is real but is a **static decorative PNG** (`shimmer.png`, alt text "Shimmer", `opacity-40`, absolutely positioned) — a light-streak/glare graphic layered over a mockup, not itself a CSS shimmer-sweep animation.
- Radix's own `accordion-down`/`accordion-up` keyframes drive the FAQ expand/collapse.

## Hero Anatomy

The homepage hero is a reconstructed macOS desktop, not a static screenshot:

1. **Background**: a full-bleed illustrated blue mountain-and-sunrise landscape (`background.png`/`@2x`/`@4x`, 1920×967 source, style closely evokes a stock macOS wallpaper), overlaid with a radial gradient that fades to white toward the bottom of the section (`.hero-v2` — desktop) or swaps to a flat blue radial (`#4a8fdd`) on mobile (`max-width:768px`) for performance.
2. **Dock row**: six real app icons (Launchpad, Safari, Settings, Zoom, Cluely, Trash) laid out with 3D depth (`translateZ(350px)`) — a literal, working recreation of a macOS dock, not an illustration.
3. **Product demo**: a native `<video muted playsInline>` (dual-encoded — HEVC/ProRes for Safari, VP9 for Chrome, `aspect-[1.6]`, 80% height) autoplays inline within the dock scene — the actual app UI is shown live, in motion, inside the OS chrome it claims to hide within.
4. **Headline**: "**#1 Undetectable AI for Meetings**" set in EB Garamond (serif), white, `text-[56px]→lg:text-[80px]`, per-word clip-reveal animation (see Motion).
5. **Subheadline**: "Cluely takes perfect meeting notes and gives real-time answers, all while completely undetectable" — Geist, small, white, centered.
6. **Dual CTA**: an Apple "Download on the App Store" badge-style button (black/zinc gradient, real Apple glyph) plus a second button literally classed `purple-gradient-button` (blue radial gradient in reality) that opens a Vaul slide-up drawer with more download options.

## Components of Note

- **OS-chrome hero mockup** (dock + autoplaying dual-codec video) — see Hero Anatomy.
- **Chat-bubble mockup**: a navy gradient (`#0544a9→#022c70`) rounded card with a speech-bubble tail (`rounded-xl rounded-br-sm`) simulating an in-call AI answer.
- **Feature-card carousel**: `scrollbar-none snap-x snap-mandatory` horizontal scroll on mobile that becomes a static 3-column grid at `lg:`, each card built on a shared `.card-styles` utility (`aspect-ratio:426/406`, `border-radius:16–20px`, soft radial-gradient background `#dde2ee→#bbc5dd`).
- **FAQ accordion** (Radix primitive) whose visible Q&A content is duplicated verbatim into a `FAQPage` JSON-LD schema block in the page `<head>` — one content source serving both the interactive UI and SEO structured data.
- **Pricing table**: 3 tiers — Starter (free, limited responses/notes, 3-file upload cap), Pro ($19.99/mo, unlimited + latest models + priority support), **Pro + Undetectability ($149.99/mo)** — the flagship viral capability (invisibility to screen-share) is gated as the top-of-funnel premium upsell, not a baseline feature.
- **Blog list view** with one large-image "featured" post, author byline+headshot (Roy Lee), category tag, read-time, then a plain chronological list — deliberately not a uniform card grid.
- **Press logo grid**, chronological, each card linking out to the original article.
- **Footer**: Resources / Support / Legal columns, social row (Twitter/Discord/Instagram/GitHub), and a status indicator (green dot, "operational"-style).

## Voice & Copy

Confident, provocative, short declarative sentences that reclaim a loaded word as the entire brand thesis. Manifesto: _"We want to cheat on everything."_ … _"It sees your screen. Hears your audio. Feeds you answers in real time."_ … _"the best communicator, the best analyst, the best problem-solver — is now the one who knows how to ask the right question"_ … closing line: _"So, start cheating. Because when everyone does, no one is."_ Careers page escalates to outright urgency/FOMO copy: _"You're running out of time to make generational wealth. This is your best shot."_ The `/blog/virality` essay (byline Roy Lee) is written in aphoristic, contrarian-founder register: _"a post that deserves to go viral will go viral, without exception, IF seen by at least a few thousand people"_; _"Viral sense gets you from 1→100, not 0→1"_; _"virality =/= top of funnel."_ Product copy stays plainer and more conventional ("Free to download • No credit card required"), reserving the provocation for manifesto/careers/blog.

## Distinctive Moves

1. **"Cheat" reclaimed as the whole brand thesis, monetized literally.** The manifesto doesn't hedge the controversy — it leans all the way in ("We want to cheat on everything," "start cheating") — and the pricing page turns the actual controversial capability (undetectability during screen-share) into the named top-tier SKU (`Pro + Undetectability`, $149.99/mo). Values statement and monetization are the same artifact.
2. **A working OS-chrome hero, not a screenshot.** Real macOS dock icons at 3D depth, over an illustrated wallpaper, with an actual autoplaying dual-codec product-demo video — the hero simulates the exact environment the product claims to hide inside, rather than describing it.
3. **One serif headline breaking an all-sans system.** EB Garamond is scoped to exactly two headline moments (home hero, mobile hero/CTA) inside an otherwise Geist-everywhere UI — a single, deliberate typographic break used for gravity on the core claim, animated word-by-word via a clip-mask reveal, then never touched again on the rest of the site.

## Buzz Evidence

- $5M pre-seed funding [Fortune], ~$15M Series funding led by a16z [TechCrunch], reported $7M ARR that "doubled in a week" [TechCrunch] — per Cluely's own `/press` page, which aggregates 20+ outlets (Fortune, TechCrunch, Business Insider, The Times, TechRadar, 404 Media, PC Mag, eWEEK, Morning Brew, The Hustle, and others).
- Coverage is explicitly bifurcated between "AI cheating tool" controversy pieces and founder-story/funding pieces about Roy Lee's Columbia suspension/expulsion — the controversy itself is treated as press fuel, consistent with the manifesto's voice.
- The "cheat on everything" manifesto and the hero's "#1 Undetectable AI for Meetings" claim are the specific artifacts the prior scout note cited as recurring viral material on X; this crawl could not independently verify specific view-count/repost figures for those threads (no primary X data fetched) — treat the virality claim as press-corroborated but not directly measured here.

## What Astryx Should Take

1. **Ship the per-word clip-mask headline reveal as a documented recipe, not a whole animation system.** Cluely's technique is cheap and dependency-light: wrap each word in `overflow-hidden` + an inner span starting at `translateY(1.25em)` (or via `stylex.keyframes`), animate to `translateY(0)` staggered per word. This is a good candidate for an Astryx "hero text reveal" pattern doc using pure CSS/StyleX keyframes — no JS animation runtime required, unlike Cluely's Motion-library implementation.
2. **Reserve exactly one display/serif accent for exactly one moment (the "why" page), not throughout.** Cluely proves a single serif headline against an otherwise all-sans system reads as a deliberate break, not inconsistency — Astryx's own manifesto/principles page is a natural place to apply the same restraint: one accent typeface, scoped narrowly, documented as intentional rather than left to drift.
3. **Frame live component demos inside recognizable "chrome"** (an IDE/browser/app-window frame) instead of an abstract illustration or isolated screenshot — Astryx's docs hero or component gallery could embed a real, interactive Storybook/preview iframe inside a lightweight window-chrome mockup, echoing Cluely's "the demo lives inside the real environment" move without needing 3D/video production.
4. **Feed the same content into both the visible UI and structured data.** Cluely's FAQ accordion content is duplicated verbatim into `FAQPage` JSON-LD. Astryx's own docs FAQ/accordion components (and future component `.doc.mjs` files) could adopt the same single-source-of-truth pattern for SEO and for any future llms.txt/agent-readable surface.
5. **Verify token names against actual values before reuse.** Cluely's own codebase has a utility class literally named `purple-gradient-button` whose real colors are blue — a caution directly relevant to Astryx's own naming discipline (token/class names should not silently drift from the values they hold, since downstream consumers and AI agents will trust the name).
6. **Treat scout/vendor design notes as leads, not facts.** This crawl overturned a specific inherited claim (saturated purple/pink feature cards) that does not exist in the shipped CSS — reinforcing that any design-survey entry feeding into Astryx's own AGENTS.md or theme presets needs the same source-level verification pass before being cited as precedent.

## Pages Read

- https://cluely.com (home)
- https://cluely.com/manifesto
- https://cluely.com/mobile
- https://cluely.com/blog
- https://cluely.com/blog/virality
- https://cluely.com/press
- https://cluely.com/careers
- https://cluely.com/pricing
- https://cluely.com/llms.txt (404 — does not exist)

Also inspected directly (raw asset fetch, not rendered pages): the three compiled CSS bundles (`/_next/static/css/*.css`), five JS chunks (`/_next/static/chunks/*.js`), and the hero background image (`/images/pages/home/background.png`) to verify font-family declarations, hex/HSL/OKLCH color values, CSS keyframes, and the Motion/Framer-Motion library signature (`LayoutGroup`) that the rendered-HTML summaries alone could not confirm.
