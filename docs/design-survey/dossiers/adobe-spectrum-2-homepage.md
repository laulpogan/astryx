---
name: Adobe Spectrum 2 — Homepage
url: https://s2.spectrum.adobe.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

`s2.spectrum.adobe.com` is not a docs site — it's a single-page, single-purpose Next.js announcement microsite for Spectrum 2, the ground-up refresh of Adobe's cross-product design system (the system that skins Photoshop, Illustrator, Acrobat, Express, Firefly, and the rest of Creative/Document/Experience Cloud). One scrolling page: a word-rotating hero, a short manifesto, five video-illustrated "The future is \_\_\_" story cards, and a six-card link-out grid to the real content (Adobe Design case-study articles, the classic Spectrum component site, and Adobe Design's blog). It exists to make an abstract, internal-facing rebrand legible to the outside world, not to teach the system itself.

## Typography

- **UI/body face:** `adobe-clean` (Adobe's proprietary grotesk, served via Adobe Fonts/Typekit — the bundled CSS pulls `@import url("https://use.typekit.net/uma8ayv.css")`), falling back to `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif`. Declared as `var(--spectrum-global-font-family-base, adobe-clean, ...)`.
- **Serif token (present in the bundled Spectrum CSS, not used on this page):** `adobe-clean-serif, "Source Serif Pro", Georgia, serif`.
- **Code token:** `var(--spectrum-global-font-family-code, "Source Code Pro", Monaco, monospace)` — not visibly used on the homepage (no code blocks here), but shipped as part of the design-token CSS this page imports wholesale.
- **CJK/Arabic/Hebrew fallback stacks** are also declared (`adobe-clean-han-japanese`, `adobe-clean-han-korean`, `myriad-arabic`, `myriad-hebrew`, etc.) — evidence Adobe Clean is a full internationalized type system, not a single Latin cut.
- **Scale on this page (measured from compiled CSS, desktop → mobile):** hero fixed phrase ("The future is") 82px/weight 350 → 55px at ≤340px; hero rotating word 82px/weight 800, line-height 120% → 55px mobile; hero sub-headline 25px/weight 700 → 16px mobile; card title 45px/weight 800 (steps to 36px/28px/22px at narrower breakpoints); card body 22px/weight 400 (steps to 20/18/16px); footer story-card title 20px/weight 700; footer story-card description 16px/weight 400; nav item 14px/weight 500.
- Weight jump from 350 (thin) on the static hero phrase to 800 (heavy) on the rotating word is a deliberate two-weight contrast within one headline — not just size, weight is doing the emphasis work.

## Color

**Correction to prior scout note:** the note on file ("neutral, mostly-white background") is only true of the mid-page card carousel — the actual hero/intro is a bold, saturated gradient, not neutral. Verified from the compiled CSS:

- `.page_pageContainer{background:linear-gradient(0deg,#7154fa,#eb1000)}` — the entire page shell is wrapped in one continuous vertical gradient from violet `#7154fa` to red-orange `#eb1000`, with white (`#fff`) text/links on top of it.
- The hero's decorative SVG (`/static/background/bgTop1920.svg`, giant overlapping blob/ellipse shapes filling a 1920×3512 canvas) carries its own internal linear-gradient fills using `#6338EE` (violet), `#EB1000` (red), and `#FFA921` (amber) — a warmer three-stop version layered on top of the flat page gradient for depth.
- The mid-page card carousel breaks the gradient with a floating **white** (`#fff`) rounded container (`border-radius:20px`, subtle `box-shadow:0 3px 6px rgba(0,0,0,.04)`) — this is where the "neutral, mostly-white" impression comes from; it's a deliberate contrast panel, not the page's base color.
- Footer story-cards are also white cards (`background:var(--light-gray-50,#fff)`) with a photographic top third, floating on the same gradient backdrop, plus a soft triple-layer shadow (`0 0 2px rgba(0,0,0,.12), 0 3px 6px rgba(0,0,0,.04), 0 4px 8px rgba(0,0,0,.08)`).
- The page also ships the **entire classic Spectrum design-token CSS** as a dependency (1,394 distinct `--spectrum-*` custom properties, ~449 unique hex values across light/dark and two density scales) — e.g. `--spectrum-blue-900:#0469e3` (light) / `#5eaaf7` (dark). None of this token system is visually exposed on the homepage itself; it's pulled in because the "Reduce motion" control is a real `@react-spectrum` Switch component. All colors are plain hex — no OKLCH/HSL anywhere in the bundle.
- On-gradient UI controls (the nav switch) get hardcoded white-on-white overrides (`--spectrum-switch-quiet-track-color-selected:#fff`, handle `#3b3b3b`) so the toggle stays legible against the moving gradient rather than inheriting the system's default blue accent.

## Layout

- Single column, no sidebar, no grid nav — max content width `1664px`, generous horizontal padding stepping down from 64px (desktop) to 24px (≤340px).
- Six explicit breakpoints (1920, 1600, 1280, 960, 768, 640, 340px) reflow type size, spacing, and card orientation at each step — a real fluid-scaling system, not just two states.
- Section order: sticky nav (logo + Reduce-motion switch only) → hero → one-paragraph manifesto ("Rational. Human. Focused. Collaborative.") → five alternating video/text story cards inside one floating white panel (`gap:128px` desktop) → "Get more of the Spectrum 2 story" — six link-out cards in a wrapped flex row → Adobe's shared global corporate footer (`#feds-footer`, loaded from `www.adobe.com/etc.clientlibs/globalnav/...` — the standard Adobe.com legal/region/social footer, not custom-built for this microsite).
- Cards use `scroll-snap-align` and dedicated scroll-anchor divs, so the page behaves like a snap-scrolling deck on desktop while degrading to normal flow on narrow viewports.

## Motion

- **Hero word-rotator:** the visible headline is actually two elements — a fixed phrase ("The future is") at weight 350, and a `dynamicPhaseWrapper` that vertically cycles through short phrases via a slot-machine/odometer transition: `translateY` + opacity keyframes at **150ms**, `ease-in` for phase entering / `ease-out` for phase exiting (`header_slideInAnimation1/2`, `header_slideOutTopAnimation/2`). A screen-reader-only span holds the static full string "The future is Spectrum 2" so the rotator never affects the accessible name.
- The words that rotate through are exactly the five story-card headlines further down the page ("built collectively," "about feeling at home," "inclusive and accessible," "joyful and functional," "in the details") before landing back on "Spectrum 2" — the hero literally previews the page's own table of contents as a looping animation, then the scroll experience is the payoff.
- **Reduce-motion is a real, wired control**, not decorative: a `@react-spectrum` ToggleSwitch (`spectrum-ToggleSwitch--quiet`) in the nav labeled "Reduce motion," styled with white-on-transparent tokens to read against the gradient. Toggling it swaps the CSS classes on both the hero (`header_reducedMotionHeadline` — static stacked text, no cycling) and every card's intro/content wrapper (`ReducedMotion` variants that pin `transform:translateY(0);opacity:1` instead of animating in on scroll).
- Card intro-in effect: content blocks start at `translateY(50%);opacity:0` and animate to place as they scroll into view; the manifesto paragraph starts even further off (`translateY(350px)`).
- Each of the five story cards plays a real looping video (`autoplay loop muted playsinline`, square `aspect-ratio:1`, files named `Collective_Anim`, `Home_Anim`, `Density_Anim`, `Joyful_Anim`, `Details_Anim` — dated Oct/May 2023 in the filenames, consistent with the 2023 Adobe MAX-era production of this material), not GIFs or Lottie — with a 100ms `fadeIn` keyframe on load.
- Sticky nav background fades in on scroll (`background-color transition .1s ease-in`, hairline `1px solid #d9d9d9` border) — transparent-over-gradient at top, opaque white once scrolled.
- No WebGL, no scroll-jacking, no parallax layers beyond the two background SVGs — the motion budget is spent entirely on the word-rotator and scroll-reveal, both of which respect the explicit reduce-motion toggle.

## Hero Anatomy

- H1 built from three DOM pieces: an ARIA-only full string, a fixed light-weight lead-in ("The future is"), and a heavy-weight vertically-cycling word/phrase. Visually reads at first paint as "The future is Spectrum 2Spectrum 2" (both rotator slots pre-populated with "Spectrum 2" before JS starts cycling) — which is what produced the "repeats itself" description in the prior scout note; the live behavior is a rotator, not a static duplicate string.
- Sub-headline directly below, smaller and lighter: "Spectrum 2: what's next for Spectrum, Adobe's design system."
- No image, no illustration, no product screenshot in the hero itself — only the abstract gradient-blob SVG behind the type and the linear-gradient page background.
- No CTA button in the hero at all — no "Get started," no "Read the docs." The only interactive element anywhere near the hero is the Reduce-motion switch in the nav.
- Nav is reduced to two things: the wordmark/logo (links home) and the Reduce-motion switch. No pricing, no docs, no login, no hamburger — about as minimal as a nav gets for a company of Adobe's size.

## Components of Note

- **Reduce-motion switch** — a real, functioning `@react-spectrum` ToggleSwitch wired to both the hero rotator and every scroll-reveal animation; themed white-on-transparent specifically to survive the gradient backdrop.
- **Story-card unit** — square autoplay/loop/muted video + headline + paragraph, alternating implicitly via `order` on narrow breakpoints; lives inside one shared floating white rounded panel rather than each card having its own background.
- **Footer link-card** — photographic top (145px fixed height, `object-fit:cover`), rounded 16px corners, triple-layer soft shadow, title+description below, `transform:scale(1.05)` on the image only on hover (`.16s ease-out`) — a restrained "photo lifts slightly" hover, not a full card lift.
- **Federated global footer** (`#feds-footer`) — Adobe's shared corporate footer/legal/region-picker component loaded from a central Adobe.com clientlib, not bespoke to this microsite. Confirms even a flagship rebrand page inherits the parent company's compliance chrome rather than rebuilding it.

## Voice & Copy

Short, declarative, repeats a sentence stem as a rhetorical device: "The future is built collectively." / "The future is about feeling at home." / "The future is inclusive and accessible." / "The future is joyful and functional." / "The future is in the details." The manifesto line is even terser: "Rational. Human. Focused. Collaborative." — four one-word fragments, no verbs.

On the linked Adobe Design story ("Introducing Spectrum 2"), the voice loosens into narrative/explainer mode with plain analogies: "Imagine you're designing a house. Your first step might be to draw a picture," and a memorable design-principle line: "When everything is important, nothing is important." The icon-system story keeps a process-forward, collaborative tone: "It's a method of inquiry, feedback, and refinement that other teams can apply to their work." Overall register: confident but not hype-y, internal-team-culture language surfacing externally (phase names like "Setting the vision," "Reinventing components"), no exclamation points, no "supercharge/unlock/revolutionize" SaaS-marketing vocabulary anywhere.

## Distinctive Moves

1. **The hero IS the table of contents.** The word-rotator in the H1 cycles through the exact five phrases that head the five story cards below — so the hero functions simultaneously as a headline, a motion showcase, and a scroll-progress preview, without a nav menu spelling any of it out.
2. **A first-class, functionally-wired Reduce-motion toggle**, not a buried OS-level accessibility afterthought — it's a real Spectrum Switch component in the two-item nav, and it demonstrably changes both the hero animation and every card's scroll-reveal behavior.
3. **The "neutral, mostly-white" impression is a floating panel over a bold gradient**, not the page's actual background — `linear-gradient(0deg,#7154fa,#eb1000)` violet-to-red-orange with an amber-accented blob SVG runs the full page height; the white feels calm specifically because it's staged as relief against that saturated field, a more sophisticated move than either an all-white or all-gradient page would read as.

## Buzz Evidence

- No award/press mentions found tied specifically to this microsite (it is not on Awwwards/Framer Awards indexes as of this crawl).
- Real signal is adoption/OSS scale of the system it announces, checked live via GitHub API (2026-07-03): `adobe/react-spectrum` — 15,616 stars / 1,492 forks; `adobe/spectrum-css` — 1,281 stars / 213 forks.
- Cited repeatedly across 2026 design-system trend surveys (including this crawl's own crawlset, where it's flagged "peer design-system sites," signal 7.9) as a reference point precisely because it's a _design team's own rebrand of itself_ — a rarer, higher-scrutiny case than a typical product marketing page.
- Story-card video filenames (`Collective_Anim_061023`, `Home_Anim_051023`, etc.) date the production assets to 2023, consistent with Spectrum 2 having been in public preview/rollout since Adobe MAX 2023, well ahead of this survey's July 2026 date — this is a mature, already-adopted system being showcased, not a fresh launch.

## What Astryx Should Take

1. **Make the Reduce-motion control real, not cosmetic.** Wire a visible toggle (nav or footer) that actually disables Astryx's own hero/scroll-reveal motion, using the exact pattern here: swap a CSS class that pins `transform:translateY(0);opacity:1` instead of conditionally rendering different markup. Cheap, accessible, and it's a differentiator most design-system marketing sites skip.
2. **Try a hero word-rotator that previews the page structure**, not a generic tagline. If Astryx's homepage has 4-6 pillars (tokens, components, theming, motion, AI-context docs), cycle the H1 through those exact words — the rotator becomes the nav-in-disguise instead of a separate section, and StyleX's `stylex.keyframes` + `stylex.when.ancestor` can reproduce the 150ms slide-in/slide-out odometer effect entirely in CSS (matches the "AT-RULES/PATTERN" guidance already in this repo's StyleX notes — no JS animation runtime needed beyond swapping which word is mounted).
3. **Stage a bold background as a "reveal," not a constant.** Spectrum 2's trick isn't "use white" or "use a gradient" — it's using a saturated gradient as the base layer and then floating a white panel over it for the content-heavy middle section, so the white reads as calm-by-contrast rather than default-by-omission. Astryx's own component-gallery section could sit in a similar white floating panel over a token-driven accent gradient in the hero/intro band, then return to gradient in the closing CTA band, exactly as Spectrum 2 does.
4. **Copy voice: short declarative sentence-stem repetition for a manifesto block**, reserving longer narrative/analogy prose for linked deep-dive docs rather than the homepage itself. Keep the homepage terse (fragments, no hype verbs); put the "why we built it this way" story on a separate docs/blog page, matching the adobe.design story-article split from the microsite.
5. **Don't be afraid of a two-item nav.** Spectrum 2's nav has only a logo and one accessibility toggle — everything else routes through footer link-cards. For a docs-heavy site this is probably too minimal, but the underlying lesson (don't clutter the hero page's nav with every doc-site route — link out via clearly labeled cards instead) is directly reusable for Astryx's own homepage vs. docs-hub split.

## Pages Read

- https://s2.spectrum.adobe.com/ (home page — WebFetch + raw HTML/CSS via curl: `/`, `/_next/static/css/5142056c7219c4be.css`, `/_next/static/css/5b2f44bd8e5a1f63.css`, `/_next/static/css/d978216e7f56dfd6.css`, `/static/background/bgTop1920.svg`)
- https://adobe.design/stories/design-for-scale/introducing-spectrum-2 (linked story card)
- https://adobe.design/stories/design-for-scale/designing-design-systems-constructing-an-icon-system (linked story card)
- https://spectrum.adobe.com/ (linked classic-Spectrum sibling site — attempted, thin/JS-shell response, both via WebFetch and raw curl)

Not read / blocked: `/llms.txt` (403), guessed subpages `/page/color/` and `/page/typography/` (403 — these paths do not exist on this microsite; Spectrum 2 has no separate docs routes under this domain at crawl time, everything routes out to `adobe.design` or `spectrum.adobe.com`).
