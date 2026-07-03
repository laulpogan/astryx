---
name: Hallucinate
url: https://hallucinate.site
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Hallucinate is a solo-developer (George "stagas" Stagas), MIT-licensed, no-login, no-ads massively-multiplayer 3D rave: you type a nickname, drop into a low-poly night-time WebGL2 club/field scene, and dance alongside hundreds of live strangers to a synced DJ feed (curated from HÖR Berlin sets), with lightweight emote/photo/chat tooling layered on top. It launched via a viral Show HN in May 2026 (442 points), got "hugged to death" by its own launch traffic within the first hour, and has sustained enough of a following to ship a public community photo gallery two weeks later. There is no marketing funnel in the conventional sense — the login gate _is_ the entire "site," and the product's own virality did the storytelling.

## Typography

- Two Google Fonts, loaded via a single `@import`-style link with **`&display=block`** (deliberately blocks render until the fonts arrive rather than risk FOUT/FOIT on brand-critical type):
  - **`Black And White Picture`** — a quirky hand/pixel display face, used _only_ for the wordmark ("hallucinate") and short subtext lines. Never used for body copy or controls.
  - **`Iansui`** — a rounded, marker/handwritten-feel sans, used for essentially all UI chrome: buttons, the online-count pill, chat input, gallery share/like copy. Fallback stack: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Logo lockup: wordmark at `font-size:68px` (main app) / `clamp(52px, 9dvw, 84px)` (gallery page), `font-weight:400`, `line-height:.88` (very tight — lines nearly touch), `letter-spacing:0`. A companion subtext line sits directly under it (18px main app / `clamp(26px,4.2dvw,42px)` gallery).
- Button type is the opposite weight extreme: Iansui at `font: 900 13px/1` — tiny, uppercase, but the heaviest cut available — giving a thin/loose logo vs. tiny/dense button-label contrast.
- Everywhere else (Tailwind v4 defaults) falls back to `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` — emoji glyphs are treated as first-class UI icons (see Components).

## Color

- Base canvas is nearly pure black: `#000` on the main app (`bg-zinc-950` / `oklch(14.1% .005 285.823)` as the pre-paint Tailwind fallback), `#050505` on the gallery page. `theme-color` / `background_color` in the manifest are both `#000000`.
- One recurring **3-stop brand gradient**, reused verbatim across the logo text-clip, the CTA/progress-bar fill, and the gallery CTA: `linear-gradient(180deg, #082074 0%, #00c4ff 42%, #ff2030 78%)` — deep indigo → cyan → red, top to bottom. It's layered over a solid `#ff2030`/`#ff2c56` fallback fill on buttons.
- Text is never pure white — always a hair of warm-pink tint: `#f5f5f5`, `#fff5f5`, `#fff8f8`, `#ffffffd1`.
- A **two-color glow system** recurs on nearly every interactive element: a red `text-shadow`/`box-shadow` halo (`#ff1414` / `#ff0000` at ~30–50% alpha) layered with a cyan halo (`#00c4ff` at ~18–30% alpha) — e.g. the online-indicator pill has `box-shadow:0 0 18px #ff00001f` plus a red text-shadow; the CTA button stacks four separate shadow layers (inset highlight, inset shadow, drop shadow, red glow, cyan glow).
- Translucent surfaces are flat, not frosted: chat/online-indicator backgrounds use plain rgba fills (e.g. `#08080a61`) with a 1px `#ffffff1f` border — **no `backdrop-blur` appears anywhere in the stylesheet**, a deliberate skip of the glassmorphism default.
- Avatar palette (from the live scene, see screenshot): flat, saturated "toy-block" colors — magenta, teal/cyan, mustard yellow, crimson — no gradients or shading beyond flat-shaded low-poly faces, against a dark-green ground plane and a black starfield sky.

## Layout

- No conventional page chrome (no nav bar, no footer, no scroll) — a single fixed-position canvas (`#scene`) fills the entire viewport and every UI element (chat, action rail, presence pill, "walls") is an absolutely/fixed-positioned overlay on top of it.
- The whole shell is built on custom CSS variables tracking safe-area/viewport (`--app-width:100dvw`, `--app-height:100dvh`, `--app-top/left/bottom`), consistent with the PWA manifest declaring `display:"standalone"`, `orientation:"any"`, and `apple-mobile-web-app-capable`.
- A vertical "action rail" of circular buttons is generated purely from custom properties: `bottom: calc(12px + var(--app-bottom) + (var(--action-size) + var(--action-gap)) * N)`, stacking each icon button at a computed offset rather than a flex/grid list — an unusual but robust way to keep a floating toolbar aligned above mobile home-indicator insets.
- The **gallery page is a separate, framework-free document** (plain HTML + `<style>` + one inline `<script type="module">`, no Vite bundle, no React) — a deliberately lighter-weight satellite page: centered shell (`main { width:min(1480px,100dvw) }`), responsive photo grid (`repeat(auto-fill, minmax(160px,1fr))`, collapsing to 2 columns under 640px).
- The photo lightbox renders as a tilted cream-colored "polaroid" card (`#f8f4eb`) over an `82%`-black `dialog::backdrop`, each photo given a small pseudo-random rotation seeded from its own timestamp — turns a plain image grid into a physical "photo pile" metaphor.

## Motion

- **No animation library anywhere in the bundle.** Confirmed by grepping the shipped JS: zero hits for GSAP, Framer/Motion, anime.js, Lottie, etc. Transitions are plain CSS `transition` (e.g. `#intro{transition:opacity .52s}`, progress bar `transition:transform .9s cubic-bezier(.22,1,.36,1)`) plus, on the gallery page, the native **Web Animations API** (`Element.animate()`) for the photo-swipe transition — two absolutely-positioned polaroid slides cross-translate with `cubic-bezier(.22,1,.36,1)` over 420ms, and the code explicitly short-circuits to an instant swap when `matchMedia('(prefers-reduced-motion: reduce)')` matches.
- The intro loading bar is a determinate progress meter (`transform:scaleX(pct/100)` driven by a JS progress callback reported in whole percent, `0%`→`100%` text readout), not a spinner or skeleton.
- The 3D scene itself runs on a **hand-rolled WebGL2 renderer** — the production bundle (`club-app-*.js`, 383KB) has zero references to `THREE`, `three.js`, `GLTFLoader`, `OrbitControls`, `InstancedMesh`, or `postprocessing`, but does contain raw `createShader`/`compileShader`/`gl.TRIANGLES` calls and Mixamo-standard bone names (`mixamorig:LeftFoot`, `mixamorig:RightToeBase`, etc.) driving avatar skeletal animation for the emote system (breakdance/wave).
- Multiplayer motion sync is **dead-reckoning / client-authoritative over a raw `WebSocket`** (no socket.io/Colyseus in the bundle) — the client interpolates positions locally and only receives sparse state deltas from the server, which is how it holds hundreds of concurrent avatars without saturating bandwidth (confirmed independently by HN/press coverage of the architecture).
- Gallery infinite-scroll is driven by an `IntersectionObserver` on a status sentinel element, not scroll-event polling.

## Hero Anatomy

There is no separable marketing hero — **the login gate _is_ the hero.** A full-viewport `#intro` overlay (`background:#000`, `opacity` transition `.52s`, `display:grid; place-items:center`) contains a single centered panel, max `320px` wide:

1. The gradient/glow wordmark ("hallucinate", 68px, brand gradient text-clip) with "Massively Multiplayer Online Rave" directly beneath it in the pixel-script subtext style.
2. A dedicated `<canvas id="intro-effect">` presumably rendering a live particle/visual behind the panel (not confirmed from static assets alone).
3. Two form fields stacked below: **Nickname** (required, placeholder `"Your nickname (required)"`, `maxlength=32`, regex-blocks `<`/`>`/newlines) and **Instagram id** (optional), each with a small monochrome icon.
4. A single gradient **"ENTER"** button (uppercase, initially `display:none` until JS reveals it) that doubles as the loading-progress bar track — the CTA literally fills with color as the WASM/asset payload finishes loading.
5. A GitHub icon link to the open-source repo pinned in the same panel.

No screenshots, no feature list, no pricing precede this — you commit a nickname before you see anything of the product; the loading bar _is_ the anticipation-building device.

## Components of Note

- **Nickname-gate intro card** — combines identity capture (nickname + optional Instagram handle), a determinate load-progress meter, and the primary CTA into one compact, glowing card (see Hero Anatomy).
- **Fixed vertical "reaction rail"** — 8 stacked circular buttons, each just a raw emoji glyph as its icon (no custom SVG icon set): 📸 photo, 😎 sunglasses, 👀 perspective/view-mode, 🤸 breakdance, 🙌 wave, 🫧 bubbles, 🧼 foam, 🏘️ rooms.
- **Presence pill** — bottom-left `#online-indicator`, collapsed to a small translucent badge (`<0>` self-badge + `"N online"` count) that expands into a scrollable name-list panel on tap; a real, expandable component, not static chrome.
- **Chat** — single-line 120-char input (`placeholder="message..."`), a scrollable `#chat-log` column, and ephemeral `#chat-bubble` speech-bubbles rendered above avatars in 3D space.
- **Merch cards** — two product cards (male/female t-shirt) linking to Creator Spring, shown as a centered floating overlay grid toggled via a `data-open` attribute.
- **Donation link disguised as a prop** — a `💊` pill emoji (not a "Sponsor" button) links out to Buy Me a Coffee.
- **Community photo gallery** (`/gallery`) — infinite grid of user-submitted, pixelated (`image-rendering:pixelated`) in-world screenshots, each with a heart-count badge; opens into the tilted-polaroid lightbox with like/share/prev/next controls, touch-swipe navigation, keyboard arrows, and shareable deep-link permalinks (`/gallery/:timestamp`) backed by a small REST API (`/api/photos`, `/api/photos/:id/likes`).
- **Player-position heatmap** — mentioned in the GitHub README as a visualization of where the crowd congregates; not independently verified from the client bundle (flagged as not directly confirmed).

## Voice & Copy

Extremely terse, lowercase, zero marketing-speak. The wordmark is lowercase "hallucinate"; the tagline is a dry factual label ("Massively Multiplayer Online Rave"), not a benefit statement; the CTA is a single word, "enter"; UI labels are literal and short (`"message..."`, `"online"`, aria-labels like `"take photo"`, `"sunglasses"`, `"view mode"`). There is no headline promising an outcome, no feature-bullet section, no pricing, no testimonials anywhere in the captured surface — **the product explains itself entirely through UI micro-copy and emoji**, not prose. The repo's own `AGENTS.md` (its Claude/Cursor-style agent-instructions file) carries the same unfussy, blunt-imperative voice into the codebase itself: _"ALWAYS THROW on invalid paths. No early returns or swallowing errors,"_ _"Don't create summary documents or README documents,"_ _"Skip the summary of what you did. Just do the thing."_ The community voice around the launch reinforced the same scrappy-indie read: the creator publicly patched bugs and banned bad-faith chat actors in the HN comments in real time during the traffic spike.

## Distinctive Moves

1. **A hand-rolled WebGL2 engine, not an off-the-shelf 3D stack.** Zero Three.js/Babylon/postprocessing references anywhere in the production bundle; raw shader compilation and Mixamo-rig skeletal animation instead — proof a solo dev can ship "MMO-grade" real-time 3D without an engine, syncing hundreds of concurrent avatars over a plain WebSocket with dead-reckoning interpolation (no socket.io/Colyseus dependency either).
2. **The marketing site is the login gate — full stop.** There is no pitch page: you type a nickname into a gradient-glowing card and are inside the product before you've seen a single screenshot. Virality (HN, press) did the persuading; the site itself never tries to.
3. **A polaroid-style, seeded-random-tilt photo lightbox** for the user-submitted gallery — deep-linkable, like/share-able, swipeable — turns a plain image grid into a tactile "party photo pile" metaphor, all in framework-free vanilla JS.

## Buzz Evidence

- Show HN: _"Hallucinate – Massively Multiplayer Online Rave"_ — **442 points, 65 comments**, posted 2026-05-28 [P, news.ycombinator.com via HN/Algolia API, fetched 2026-07-03, ~95].
- Follow-up Show HN: _"2 Weeks of Hallucinate – The Photo Gallery"_ — **73 points, 24 comments** [P, same source, ~95].
- The site was "hugged to death" within the first hour of the HN launch traffic spike; the creator patched and restarted it live while triaging bug reports and banning bad-faith chat actors — covered by Notebookcheck, _"This new viral one-man online rave has multiplayer, no login, no ads, and no catch"_ [S, secondary tech press, ~60].
- GitHub (`stagas/hallucinate`): **226 stars, 23 forks, 484 commits**, MIT license, actively maintained [P, github.com, fetched 2026-07-03, ~90].
- Music is curated exclusively from HÖR Berlin DJ sets, per community coverage of the gallery follow-up [S, ~50].

## What Astryx Should Take (concrete)

- **Reserve a single distinctive display face for the wordmark/section headers only** (loaded with `font-display:block` so it never FOUT-flashes on brand-critical type), and keep a separate workhorse UI face for everything else — Hallucinate never lets its logo font leak into buttons or body copy, and vice versa. Astryx's docs/marketing site could apply the same discipline: one named display face for "Astryx" + H1/H2, its existing UI sans for everything else.
- **Define one signature multi-stop gradient as a reusable token, then apply it identically everywhere** (text-clip, CTA fill, progress bar) rather than inventing a new gradient per section — a concrete pattern for an Astryx theme token (`--brand-gradient`) that a component-docs page's "live theme" section could demonstrate being reused across text, buttons, and loaders.
- **A dual-color glow pair (not just one accent glow)** on interactive chrome is a cheap way to make a "vivid" theme variant feel considered — worth prototyping as an optional token pair (`glow-primary` / `glow-secondary`) in Astryx's theming docs, distinct from the current flat `box-shadow` defaults.
- **Zero animation-library, StyleX/CSS-native + Web Animations API only** — directly validates Astryx's existing no-JS-motion-runtime stance (see StyleX capability notes in `CLAUDE.md`). The gallery's swipe-transition code (absolute-positioned outgoing/incoming slides + `Element.animate()` + an explicit `prefers-reduced-motion` branch) is a clean, dependency-free reference implementation worth citing directly in Astryx's motion guidance/docs.
- **A "terse/utility" copy voice as a documented alternate to Astryx's current marketing voice** — Hallucinate proves that letting the interaction _be_ the pitch (no headline, no feature bullets, label-only copy) can read as premium, not unfinished. Worth offering as a second voice preset in Astryx's copy guidelines alongside the current more expository tone.
- **Ship a "community/showcase gallery" component pattern**: masonry grid → deep-linkable lightbox with prev/next/like/share and a seeded-random tilt for personality. This is a directly reusable template for an Astryx "Built with Astryx" showcase page (a pattern also flagged from `v0.app` elsewhere in this survey) — Hallucinate's implementation is a working, framework-free reference to swizzle from rather than design from scratch.
- **A first-class, expandable "Presence Indicator" pattern** (collapsed count pill → tap to expand into a live name list) — worth documenting as a named Astryx component for any real-time/collaborative product's docs, not just chat UIs.

## Pages Read

- https://hallucinate.site (raw HTML fetched directly; WebFetch blocked with 403, so read via `curl`)
- https://hallucinate.site/manifest.json
- https://hallucinate.site/assets/index-C-2PMRwV.js (entry module)
- https://hallucinate.site/assets/startup-BWAGfprS.js (intro/DOM-construction module)
- https://hallucinate.site/assets/club-app-DRUToOCY.js (lazy-loaded 3D club engine bundle)
- https://hallucinate.site/assets/index-BadO7nH2.css (compiled Tailwind v4 stylesheet)
- https://hallucinate.site/screenshot.png (og:image / social preview)
- https://hallucinate.site/gallery (community photo gallery page, full HTML/CSS/JS read)
- https://github.com/stagas/hallucinate (README, stars/forks/license via WebFetch)
- https://raw.githubusercontent.com/stagas/hallucinate/main/AGENTS.md
- https://news.ycombinator.com/item?id=48304260 (Show HN launch thread — points/comments via HN Algolia API after WebFetch 429)
- https://news.ycombinator.com/item?id=48516510 (Show HN gallery follow-up thread, via WebFetch)
- https://hallucinate.site/llms.txt (attempted — blocked with 403, not determined whether it exists)

Note: `/llms.txt` could not be verified (403). No `/pricing`, `/docs`, or `/blog` routes were found or implied anywhere in the crawled surface — the product is a single interactive experience plus one satellite gallery page, not a conventional marketing site.
