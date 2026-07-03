---
name: Wembi
url: https://www.awwwards.com/sites/wembi
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Wembi is an Italian industrial-tech startup (headquartered in Feletto Umberto, Udine, Italy; "powered by Innoverse Group") that builds instant digital twins of physical machinery, devices, or OT/IT systems — a web dashboard that ingests real-time device data and lets operators monitor, remotely control, and predictively simulate the physical asset's behavior. The live product marketing site (wembi.ai, built by agency **ET Studio**) is a single-page, fully Italian-language scrollytelling experience that won **Awwwards Site of the Day on July 1, 2026** plus the **Developer Award**, and was nominated for Business & Services Honors. The scout note calling it a "virtual-twin device-performance startup" is accurate; the "lime-green/blue-gray brand with GSAP mouse interactions" description is also directionally correct but incomplete — the real palette has four registered colors, not two, and the standout technical move is a fully custom (non-native-scroll) pinned-scrollytelling engine, not simple mouse parallax.

## Typography

- **Body/UI/headline sans: `HaasUnicaSH-Medium` and `HaasUnicaSH-Regular`** — a self-hosted subset of Neue Haas Unica (Linotype/Monotype's redrawn Haas Unica grotesque), served as `.woff2/.woff/.otf` from `/fonts/HaasUnicaSH-*` with a restricted `unicode-range` (Latin subset only, evidence of a licensed/optimized cut, not a public Google Font).
- **Display face: `ductile`** — a second self-hosted family (`/fonts/ductile.woff2|woff|otf`), used narrowly and deliberately: each character of the giant "WEMBI" wordmark and each big section numeral ("1", "2", "02", etc.) is wrapped in its own `<span class="ff-display fs-title-card">` set in `ductile`. This is what produces the site's signature segmented/circuit-stencil lettering — it reads like a technical schematic typeface, not a generic geometric sans.
- Body copy is set well below display scale, left-aligned, generous line-height, entirely in Italian (no English translation exists on the live site, notable for a globally-awarded site).
- No monospace/code font detected — this is not a dev-tool site, no code blocks.

## Color

Verified via live CSS custom properties (`:root`):

| Token                   | Hex       | Role observed                                                                                    |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| `--c-bg`                | `#ede8e8` | neutral warm-gray page canvas (used between colorful sections)                                   |
| `--c-accent`            | `#beff8b` | signature lime green — hero background, active nav-pill fill, wordmark stroke, Recap-card accent |
| `--c-bg-brand`          | `#9dbbc5` | muted blue-gray — the "What" scrollytelling section background (gradient into a glass orb)       |
| `--c-secondary`         | `#d5bafb` | pale lavender — second rotating accent, used on "Functioning" pill and one Recap card            |
| `--c-placeholder`       | `#c0dfe9` | pale powder blue — imagery/placeholder tint                                                      |
| `--c-light`             | `#fff`    | white                                                                                            |
| `--c-dark` / `--c-text` | `#000`    | pure black — all body text and the wordmark's fallback ink                                       |

The palette is a **4-color rotating accent system** (lime / blue-gray / lavender / black-on-white), not just lime-on-blue-gray as the scout note implied — e.g. the "WHY" section's four value pills (Efficace/Sostenibile/Efficiente/Libero) each get a different one of these accents in sequence, and the same four colors recur as background washes for the four "Recap" overview cards. High-contrast black text sits on every colored background (no white-on-color anywhere observed), keeping legibility even as the accent rotates.

## Layout

- Single continuous one-page site (no separate URLs/routes) built on **Nuxt.js** (Vue) with a **Craft CMS** backend (confirmed via Awwwards' own tech tags, plus Nuxt build artifacts `_nuxt/entry.*.css`, `_nuxt/index.*.css` in the served HTML).
- CSS grid system defined entirely through custom properties: `--columns: 6`, `--gutter: 1rem`, `--width: calc(100vw - 2rem)`, with pre-computed span variables `--col-1` through `--col-10` derived via `calc()` — a token-driven column system rather than a utility-class grid.
- Structure is six numbered acts, each tagged `N°00x` in the copy and DOM: **N.001 WHAT → N.002 HOW (Functioning) → N.003 WHY → N.004 WHERE → N.005 QUESTIONS (FAQ) → N.006 CONTACT.** The numbering itself is a recurring typographic device set in the `ductile` display face.
- Persistent bottom chrome across the whole scroll: a lime "current-section" pill on the bottom-left (e.g. "What") plus a small traveling progress dot next to it, and three jump-pills bottom-right — **Overview / Recap / Contact** — that act as a mini wayfinding rail, always visible, never a traditional top navbar.
- No pricing page, no docs, no blog/changelog — this is a single persuasive landing/pitch page for an enterprise/industrial buyer, closed by a FAQ accordion and a direct-contact block (email/phone/HQ address/VAT number), not a self-serve signup.

## Motion

- **`window.scrollY` never leaves 0 while `document.scrollHeight` is ~19,000px** — hard-confirmed via `document.documentElement.scrollHeight`. This proves the entire page runs on a **virtualized/hijacked scroll engine** (a Lenis- or GSAP ScrollTrigger–style scroller translating an inner container via transform) rather than native browser scroll — consistent with Awwwards' own "GSAP" tag and its "Animations/Transitions" score of 7.60/10 (its highest developer sub-score).
- The "What" section is scroll-pinned: dragging the wheel advances an internal progress dot (visible bottom-left) while the visual frame (WEMBI wordmark + glass orb) holds in place, i.e. classic pinned-scrollytelling rather than a page that simply scrolls past.
- The **"How/Functioning" section** swaps both a highlighted term (e.g. "Predizione" → "Acquisizione") and a companion abstract 3D render on the right in sync — one render shows a glowing teal/cream vertical "picket" field with a glass disc perched on top (visualizing prediction), another shows a rain of small purple/teal/cream capsule shapes falling from a light fixture (visualizing data acquisition). These read as bespoke abstract 3D compositions (likely Spline/Blender-rendered stills or loops), not literal industrial photography.
- Clicking **"Recap"** doesn't jump-scroll — it opens a distinct **overlaid card-deck** view: every section collapses into a stacked, partially-overlapping row of mini-cards (each with its own accent-colored background and thumbnail), letting a visitor scan the whole site's argument at a glance and jump anywhere via a "Close" pill to dismiss. This is the site's most novel interaction and doubles as a full on-page table of contents.
- No visible "reduce motion" toggle was found (unlike some peer sites in this survey, e.g. Adobe Spectrum 2).

## Hero Anatomy

Two-beat hero, not one:

1. **Beat 1 (first viewport):** solid lime (`#beff8b`) full-bleed background, no imagery at all, one confident sentence set in black `HaasUnicaSH-Medium` at large scale — "Instant Digital Twin of Everything" (EN paraphrase of the live Italian "Il Gemello Digitale di ogni cosa") — left-aligned, mid-viewport. Zero CTA button visible in this first frame; the scroll itself is the invitation.
2. **Beat 2 (pinned "What" section):** background shifts to the blue-gray `--c-bg-brand` (#9dbbc5) gradient, a giant frosted/glass sphere with a soft specular highlight rises from the bottom of the frame (a Liquid-Glass-style translucent orb, CSS/WebGL-rendered, not a photo), and the brand wordmark "WEMBI" is set enormous across the top in the segmented `ductile` display face in lime green. The bottom-chrome nav (What / progress dot / Overview / Recap / Contact) is present from the very first frame, functioning as the hero's only "controls."

## Components of Note

- **Recap card-deck overview** — the standout component: an overlay that fans every page section into color-coded mini-cards (own accent, own thumbnail, own teaser copy) in one horizontal stack, dismissible via a pill-shaped "Close" button. Functions as both a summary and a jump-nav.
- **Bottom persistent wayfinding rail** — replaces a conventional header/nav entirely; a lime "current section" pill + progress dot on the left, three jump pills (Overview/Recap/Contact) on the right, present through the whole scroll.
- **Rotating 4-color value/FAQ pills** — the WHY section's four value props (Efficace/Sostenibile/Efficiente/Libero) each render as a full-width pill in a different one of the four brand accents (cream, lime, lavender, black), turning a plain value list into a small color-coded system.
- **FAQ accordion (N.005 QUESTIONS)** — five plain-language Q&As (what Wembi concretely is, what can be connected, licensing/lock-in terms, ROI, why build a digital twin) with a "Read answer" affordance — notably candid B2B copy, including stating the pricing model outright ("100% pay-per-use," no license fees, no vendor lock-in, OT-IT architecture is "interamente open source") right in the FAQ rather than hiding it behind a "contact sales" wall.
- **Segmented display numerals/wordmark** — the `ductile` face used exclusively for single large characters (section numbers, the wordmark) creates a distinct "read once, remember" logotype treatment separate from body type.

## Voice & Copy

Entirely in Italian, technical/industrial B2B register — no English localization on the awarded build. Tone is plain and explanatory rather than hype-driven: short declarative sentences, no exclamation points, no "revolutionize"/"unlock" AI-marketing verbs. The FAQ section carries the real selling argument (predictive maintenance, production-cycle gains, reduced environmental impact, no vendor lock-in) in complete sentences rather than bullet fragments — closer to a technical white paper than a SaaS landing page. Contact block is refreshingly literal: real street address, phone number, email, and Italian VAT/tax ID (P.IVA) printed in the footer.

## Distinctive Moves

1. **Hard-decoupled scroll from visual position** — the whole ~19,000px page keeps native `scrollY` at 0 and drives every transition through a custom scroll-progress engine (GSAP-class), which is what let the judges score Animations/Transitions at 7.60/10 while keeping the visual language "Clean" (per Awwwards' own category tags: Business & Corporate, Technology, Startups, Clean, Colorful, Minimal) — restraint plus real engineering, not maximalist WebGL.
2. **The Recap card-deck as a second, alternate information architecture** — instead of a static sitemap or hamburger menu, the entire narrative can be re-consumed as a stack of thumbnail cards in one interaction, which is a genuinely uncommon pattern in this survey set.
3. **A disciplined four-color token system used as a rotating semantic accent** (not a single brand color) — lime/blue-gray/lavender/black each get reused across unrelated sections (hero, orb section, value pills, Recap cards) in a way that reads as a designed system, not decoration.

## Buzz Evidence

- **Awwwards Site of the Day: July 1, 2026** (verified directly on the Awwwards profile page) plus the **Developer Award**, and nomination for **Business & Services Honors**.
- Score breakdown: **Overall 7.49/10**, Developer Award **7.18/10**; sub-scores — Design 7.47, Usability 7.32, Creativity 7.71, Content 7.65 (design jury); Semantics/SEO 7.00, Animations/Transitions 7.60, Accessibility 6.80, WPO (performance) 7.40, Responsive Design 7.00, Markup/Meta-data 7.20 (developer jury). The **6.80 Accessibility score is the site's weakest mark** — plausible given the segmented `ductile` display face and the fully custom (non-native) scroll engine, both of which are common a11y/screen-reader risk points.
- Credited team: **ET Studio (PRO)**, with named contributors Tomas Baruffaldi, Elettra Zuanazzi, Filippo Bissoli, Francesco Prisco (PRO), Sentempo.
- Context from the same Awwwards startup gallery: Wembi's SOTD sits in a run of recent startup winners — EverSwap (Jun 22, 2026), Fauna Robotics (Jun 16, 2026), and Tresmares Capital (Jun 12, 2026) also took SOTD + Developer Award in the weeks prior, with Ponder AI and Armory AI Agency receiving Honorable Mentions on Jun 10, 2026 — i.e., Wembi's win is part of a live, fast-moving cadence of judge attention on startup sites, not an isolated event.

## What Astryx Should Take (concrete, mapped to a design-system marketing+docs site)

1. **Adopt a rotating (not single) accent-color token set for semantic emphasis.** Wembi proves 3-4 accent colors, each mapped consistently to a category (a value prop, a FAQ pill, an overview card), reads as "designed system" rather than "random color." Astryx's docs site could apply this to component-category tags or status pills (stable/beta/deprecated) using existing Astryx tokens rather than one brand blue everywhere.
2. **Steal the "Recap" card-deck pattern for a docs/components overview page.** A dismissible overlay that fans the whole site into small thumbnail cards (one per component category or one per doc section) with real content previews would give Astryx a fast, visual sitemap — more useful for a component library than a plain left-nav tree, and demoable as a component itself (an Astryx `Overlay`/`Stack` composition).
3. **Use a single custom/display face narrowly, wrapped per-character, for numerals/wordmarks only** — not the whole page. Astryx's marketing site doesn't need Wembi's segmented `ductile` look specifically, but the technique (one restrained display face reserved for section numbers or a hero wordmark, a plain grotesque for everything else) is a cheap way to add a memorable typographic beat without touching body-copy legibility.
4. **Borrow the "state the business model in the FAQ" candor** for Astryx's own docs/pricing-adjacent copy (e.g., "no vendor lock-in," "open license") — plain-sentence FAQ answers instead of marketing bullets builds more credibility for a developer-tool audience.
5. **Caution, not adoption: don't copy the fully-hijacked scroll engine.** It won this site real award points (Animations/Transitions 7.60) but is exactly the kind of custom scroll-jacking that dragged its Accessibility score down to 6.80/10 — the lowest of all its sub-scores. For an Astryx marketing/docs site where accessibility and reliable in-page anchors/`Ctrl+F` matter more than judge spectacle, keep native scroll and reserve pinned/scrollytelling effects (if used at all) for a single hero moment, not the entire page.

## Pages Read

- https://www.awwwards.com/sites/wembi (Awwwards profile: scores, category tags, tech tags, credits — fetched via WebFetch)
- https://www.wembi.ai/ (live production site — blocked for the generic WebFetch tool with HTTP 403; successfully rendered and inspected via an actual Chrome browser session: DOM text extraction, computed styles, `:root` CSS custom properties, `@font-face` rules, script/stylesheet manifest, and interactive click-through of the in-page "What / Overview / Recap / Contact" navigation, including the Recap card-deck overlay and the Functioning/Predizione/Acquisizione sub-panels)
- https://www.awwwards.com/websites/startups/ (Awwwards startup gallery — confirmed the recent SOTD/HM cadence context: EverSwap, Fauna Robotics, Tresmares Capital, Ponder AI, Armory AI Agency)
- Attempted and blocked (HTTP 403 / tool restriction, not substituted with reliable secondary data beyond the above): https://wembi.ai/llms.txt, https://web.archive.org snapshot of wembi.ai
