---
name: Wembi.ai
url: https://wembi.ai
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Wembi is an Italian industrial-IoT startup (headquartered in Feletto Umberto, Udine, Italy; a product of "Innoverse Group") selling a "digital twin" platform — real-time monitoring, remote control, predictive maintenance, and simulation for any physical device, machine, or plant, via a virtual replica of it. Pitch is explicitly no-lock-in / "100% pay per use," built on an open-source OT-IT architecture, targeting Industrial, Energy, Aerospace, and Medical verticals. It won Awwwards Site of the Day + Developer Award on July 1, 2026. The entire site is a **single page** (Nuxt.js front end, Craft CMS backend) organized as six numbered acts — WHAT / HOW / WHY / WHERE / QUESTIONS / CONTACT — not a multi-page marketing+docs site with separate pricing/blog/careers pages.

## Typography

- Two self-hosted `@font-face` families carry all running text, confirmed via computed styles and stylesheet `@font-face` rules:
  - **HaasUnicaSH-Medium** — nav, body copy, buttons (`/fonts/HaasUnicaSH-Medium.woff2`)
  - **HaasUnicaSH-Regular** — h2/h3 headings (`/fonts/HaasUnicaSH-Regular.woff2`)
  - Both are weights of Neue Haas Unica, a Helvetica/Univers-synthesis Swiss grotesque.
- A third self-hosted display face, **"ductile"** (`/fonts/ductile.woff2` / `.woff` / `.otf`), supplies the stencil/segmented-look digits used for section numerals (01, 02, N°001…N°006).
- Notable exception: the giant **"WEMBI" hero wordmark is not set in a font at all** — it's a hand-built inline `<svg id="logo" class="hero__logo" viewBox="0 0 1724 308">` with one `<path>` per letter, drawn to echo the "ductile" stencil/segmented-display style.
- Type is used sparingly and at restrained sizes outside the wordmark — short one-or-two-word headings ("Digital Twin" / "Application"), then plain-set Italian body paragraphs. No oversized display sentence anywhere on the page.

## Color

CSS custom properties read directly from the live `:root` computed style:

| Token                   | Value     | Usage                                                                              |
| ----------------------- | --------- | ---------------------------------------------------------------------------------- |
| `--c-accent`            | `#beff8b` | lime — preloader bg, wordmark, primary pill fill                                   |
| `--c-bg`                | `#ede8e8` | warm off-white/gray page background (body computed bg matches: `rgb(237,232,232)`) |
| `--c-bg-brand`          | `#9dbbc5` | muted blue-gray — hero background                                                  |
| `--c-secondary`         | `#d5bafb` | lavender/lilac — secondary pill fill (e.g. "Phone" CTA, "Efficiente" tag)          |
| `--c-placeholder`       | `#c0dfe9` | pale sky blue — WHERE-section image-card fill                                      |
| `--c-dark` / `--c-text` | `#000`    |                                                                                    |
| `--c-light`             | `#fff`    |                                                                                    |

The Awwwards case-study page independently lists the same two primary colors — `#beff8b` and `#9dbbc5` — which cross-verifies exactly against the live CSS. Net effect is a **4-color flat accent system** (lime, blue-gray, lavender, near-black) applied as solid pill/chip fills, not a two-tone brand as the scout note undersold — closer to a small Pantone swatch strip than a single accent.

## Layout

- Explicit **10-column grid system exposed as CSS variables**: `--columns: 10`, `--gutter: 4rem`, and `--col`, `--col-1` … `--col-10` as chained `calc()` expressions off viewport width — an inspectable, codified column scale rather than an implicit flex/grid guess.
- `--radius: 1.4rem` / `--radius-s: 1rem` drive every pill button and rounded-square image card sitewide.
- Sections are sized with `--height: 100svh` (dynamic viewport height, not `vh`) and `--top-offset: 25svh` — one full-bleed section per scroll "breath."
- Six numbered top-level sections (`N.001 WHAT` → `N.006 CONTACT`), each opening with an `N°00X` + section-name label and a horizontal rule.
- Inside HOW, a repeating split-screen module: left = square soft-rendered abstract/3D product image in a rounded card; right = `01` / two-line heading (second line highlighted, see Components) / body paragraph — reused across Digital Twin → Functioning steps (Data/Device/Application, then Acquisizione/Controllo/Predizione).
- WHERE section: one large centered rounded-square photo card per vertical (Industrial / Energy / Aerospace / Medical) with a single-word heading below and a small colored dot marker mid-image.
- Persistent bottom pill nav in two clusters: bottom-left pill shows the **current section name live** (What → How → Why → Where → Questions → Contact, updates as you scroll), bottom-right is a 3-item jump nav (Overview / Recap / Contact) with a lime-dot "current" indicator.
- Sitemap check (`/sitemap.xml`) confirms a Nuxt sitemap module, single `it-it` locale — a boutique single-locale build, not a scaled multi-page product site (the sitemap even ships with an unfixed placeholder `example.com` domain in its `<loc>` entries).

## Motion

Confirmed by scanning the production JS bundle (`_nuxt/DaC9LCGc.js`, ~520KB) for library signatures:

| Library                        | References found                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| `gsap`                         | 82                                                                                            |
| `ScrollTrigger`                | 6                                                                                             |
| `SplitText`                    | 3 (paid GSAP Club plugin — character/line text reveal)                                        |
| `Lenis` / `lenis`              | 4 (smooth-scroll library; `<html>` carries live classes `lenis lenis-scrolling lenis-smooth`) |
| `THREE`, `lottie`, `matter-js` | 0                                                                                             |

Practical effect verified hands-on: Lenis intercepts native wheel/touch scroll and re-drives the page through `requestAnimationFrame`, so `window.scrollTo()` and synthetic `WheelEvent`s were silently ignored — only real scroll gestures (or the browser's native Space/PageDown key handling) actually moved the page, after which GSAP `ScrollTrigger` pins and releases each numbered section. No WebGL/Three.js/Lottie in the bundle — this matches the Awwwards "Clean" tag: the motion budget is entirely 2D DOM choreography (GSAP + ScrollTrigger + SplitText + Lenis), not a 3D/canvas layer.

## Hero Anatomy

1. **Preloader**: full-viewport lime (`#beff8b`) screen, centered black sans-serif headline **"Instant Digital Twin of Everything,"** numeric load-percentage counter bottom-right — the brand's accent color is the very first pixel a visitor sees.
2. **Main hero** (post-load): full-bleed blue-gray (`#9dbbc5`) background; the entire visual weight is the giant lime hand-drawn stencil-SVG **"WEMBI"** wordmark spanning near the full viewport width, sitting above a large soft translucent 3D sphere/orb render.
3. **No headline sentence** — the logotype itself is the hero copy. Subhead copy ("Il Gemello Digitale di ogni cosa" / "Wembi migliora all'istante le performance di qualsiasi dispositivo…") only appears once you scroll into WHAT.
4. **No button-style CTA** in the hero — navigation is entirely the bottom pill bar (What / Overview·Recap·Contact).

## Components of Note

- **Self-labeling pill nav bar** (bottom-fixed, two clusters) — left pill always names the current section; right cluster is a 3-stop jump nav with a live "current" dot.
- **Full-screen "section deck" menu overlay** — activating the nav fans all six sections out as overlapping, individually accent-tinted cards (lime / blue-gray / lavender / black), each showing its heading + intro copy, dismissed via a single "Close" pill — an animated visual index, not a dropdown list.
- **Colored value-tag chips** (WHY section: Efficace / Sostenibile / Efficiente / Libero) — one flat pill per brand accent color, doing double duty as copy and a live color-swatch demo.
- **Text-highlight marker span** — a key noun phrase inside a two-line heading gets a solid lime background block behind it (e.g. "Digital Twin" highlighted, "Application" left plain) — a lightweight emphasis device.
- **FAQ list**: 5 numbered questions (N°01–N°05) with a "Read answer" reveal link rather than a default-open accordion.
- **Contact block**: Mail and Phone rendered as full lime/lavender pill buttons (not plain text links), plus address, P.IVA/legal line, "Wembi powered by Innoverse Group" parent-company attribution, and an agency-credit link to ET Studio.

## Voice & Copy

- Body copy is **Italian-first** throughout every section, with an **English tagline layer reserved for meta/loading surfaces**: `<title>` = "Wembi • Instant Digital Twin," the meta description is Italian, but the preloader headline is English ("Instant Digital Twin of Everything") — a bilingual-by-surface split (local-language product copy, English framing for the moments a global/crawler audience sees first).
- FAQ answers are direct and benefit-first rather than marketing fluff — explicitly stating "100% pay per use," no licensing/recurring fees, open-source OT-IT integration, no vendor lock-in.
- The numbered-index structure (N.001 WHAT → N.006 CONTACT) gives the whole page a technical-dossier feel — reads like a spec walked through six labeled acts, matching the industrial/engineering subject matter.

## Distinctive Moves

1. **The wordmark is the hero.** A hand-built stencil-style inline SVG logotype (not a font, not an image) fills the entire above-the-fold visual weight in the brand's lime accent, with zero supporting headline sentence — copy only enters once you scroll past it.
2. **A full-screen "section deck" nav overlay** that fans all six numbered sections out as overlapping, individually accent-colored cards instead of a plain dropdown/hamburger list — turns "show me the whole site" into its own animated, colorful moment.
3. **A fully codified 10-column CSS custom-property grid** (`--columns`, `--gutter`, `--col-1`…`--col-10` as calc() chains) plus a single `--radius` token driving every pill/card corner — an unusually explicit, inspectable design-token surface for what is otherwise a one-page agency build.

## Buzz Evidence

- **Awwwards Site of the Day + Developer Award**, July 1, 2026. Overall score **7.49/10** (Design 7.47, Usability 7.32, Creativity 7.71, Content 7.65); Developer score **7.18/10** (Animations 7.60, Accessibility 6.80, WPO 7.40, Responsive 7.00). Highest individual jury score **8.90/10** (juror Lukas Rudolf, praising animation and creativity specifically). [Source: awwwards.com/sites/wembi]
- Design credit: **ET Studio** (PRO agency) — Tomas Baruffaldi, Elettra Zuanazzi, Filippo Bissoli, Francesco Prisco (PRO), Sentempo; independently confirmed on-site via a footer link to `e-t.studio`.
- No independent Product Hunt / Hacker News / funding coverage found in this pass — buzz signal captured here is Awwwards-only.

## What Astryx Should Take

- **Self-labeling, live-updating pill nav** (bottom-fixed, names the current section as you scroll) is a strong pattern for a docs/marketing site with distinct top-level acts (Principles / Tokens / Components / Theme) — buildable in plain StyleX with `stylex.when.ancestor` state, no scroll-library dependency required for the visual part.
- **The lime-highlight text-marker span** (solid accent-color block behind a key phrase mid-heading) is a cheap, documentable StyleX utility Astryx could ship for calling out a key term in prose — lighter-weight than a whole callout component.
- **Expose the grid/radius system as literal, copyable CSS custom properties** the way Wembi does (`--columns`, `--gutter`, `--col-N`, `--radius`) — directly actionable for `$ASTRYX docs tokens`: don't just document the spacing/radius scale in prose, ship the `:root` variables themselves as the reference.
- **The "section deck" full-screen menu** (every section shown at once as overlapping, accent-tinted cards) is a good template for an Astryx Storybook/docs "overview" mode — a visual index of every component category in one animated view, instead of a static sidebar list.
- **Caution, not a takeaway to copy**: Lenis + heavy ScrollTrigger pinning made the live site actively resist scripted/automated scroll during this crawl and is presumably a real perf cost on lower-end devices. This reinforces the crawlset's own studiomeyer.io "reality check" note — reach for StyleX transitions/`@starting-style`/CSS scroll-driven animation before reaching for a full Lenis+GSAP+SplitText stack on a docs/marketing site where content accessibility matters more than a single showcase's WPO/Accessibility scores (Wembi itself only scored 6.80/10 on Accessibility).

## Pages Read

- https://www.wembi.ai/ — full single-page site (WHAT/HOW/WHY/WHERE/QUESTIONS/CONTACT), read live via rendered browser session (DOM text extraction, computed styles, `@font-face` rules, CSS custom properties, and production JS-bundle scan). Direct `WebFetch` to `https://wembi.ai` and `https://wembi.ai/llms.txt` both returned HTTP 403 (bot-blocked), consistent with the scout note — a real browser session was used instead to get full, verified content.
- https://www.wembi.ai/sitemap.xml — confirms Nuxt sitemap module, single `it-it` locale, unfixed placeholder domain in `<loc>` entries.
- https://www.awwwards.com/sites/wembi — secondary source for award scores, jury comments, design credits, and the two primary hex values; cross-verified against the live site's own CSS and matched exactly.
