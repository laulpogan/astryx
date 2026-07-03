---
name: Wispr Flow
url: https://wisprflow.ai/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Wispr Flow is a voice-to-text dictation app for Mac, Windows, iOS, and Android that turns spoken words into clean, polished writing in any app, not just its own — positioned by its own About page as "The Voice Interface Company," rethinking "the fundamental layer of computing." Founded by Tanay Kothari (who cites a "childhood obsession with Jarvis" as the origin story), the company closed a $25M Series A (Notable Capital lead, Flight Fund co-invest) in November 2025 at $81M total raised, and by May 2026 Bloomberg reported it in talks to raise ~$260M at a ~$2B valuation. The marketing site is built and hosted on Webflow (not a custom framework) with a genuine primitive-to-semantic design-token system exposed directly in its shipped CSS, and its entire motion layer runs on Webflow's now first-party GSAP plugin suite plus Rive — a rare case of a well-funded 2026 AI consumer product running its whole public site on a no-code platform without reading as templated.

## Typography

Verified via `@font-face` declarations and CSS custom properties in the site's shared stylesheet (`flowsite-dev.webflow.shared.77edf433a.min.css`):

- **Body / UI sans: Figtree** — self-hosted woff2, weights 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold). Declared as the primary UI font: `--_text-collection---font--body-font: Figtree, Arial, sans-serif`.
- **Display / headline serif: EB Garamond** — self-hosted, Regular (400) + a separate Italic cut. Declared as `--_text-collection---font--primary-font: "Eb garamond", Arial, sans-serif`. This confirms and sharpens the prior scout note's vague "editorial serif" — it's specifically EB Garamond, an open-source classical Garamond revival, not a licensed display face.
- **Secondary faces loaded for specific sub-sections:** Monaspace Neon (Light, 300 — a monospace, likely for developer/code-adjacent pages), IBM Plex Mono (ExtraLight, 200), and Inter (Light/Regular/Medium/ExtraBold) — present in the CSS bundle but not used on the pages read for this dossier; evidence of a broader type system than the homepage alone reveals (probably serving `/developers` or a newer redesigned section).
- **Heading scale** (CSS custom properties, rem → px at 16px root): h1 `7.5rem`/120px, h1-small `6rem`/96px, h2 `4rem`/64px, h2-big `4.6875rem`/75px, h3 `3rem`/48px, h4 `2rem`/32px, h5 `1.25rem`/20px, h6 `1rem`/16px.
- **Body scale:** xsmall `.8125rem`/13px → small `.875rem`/14px → regular `1rem`/16px → medium `1.125rem`/18px → large `1.25rem`/20px → large-medium `1.375rem`/22px → xlarge `1.5rem`/24px.
- On the live hero, EB Garamond carries the large headline ("Don't type, just speak") while Figtree carries the subhead, nav, and body copy — a serif-for-emotion / sans-for-utility split consistent with the "editorial + product" positioning the rebrand page claims.

## Color

Verified from `:root` custom properties in the shipped CSS — a genuine two-layer **primitive → semantic** token architecture, not just marketing color names:

| Primitive token            | Hex       | Role observed                                                                                                                                                                                           |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--base-color--lumen`      | `#FFFFEB` | Cream/ivory — page background primary                                                                                                                                                                   |
| `--base-color--lumen-dark` | `#E4E4D0` | Darker cream variant                                                                                                                                                                                    |
| `--base-color--dawn`       | `#F0D7FF` | Soft lavender-pink — **background-secondary AND the default button fill** (`--background-color--background-secondary`, `--text-color--text-tertiary`, `--link-color--link-primary` all resolve to Dawn) |
| `--base-color--fathom`     | `#034F46` | Deep forest green — used as a decorative SVG stroke color in hand-drawn sketch illustrations, not as a UI/button fill                                                                                   |
| `--base-color--glow`       | `#FFA946` | Warm amber-orange — decorative sketch-line stroke color, also backs a `.button.is-yellow` variant                                                                                                       |
| `--base-color--vast`       | `#1A1A1A` | Near-black — text-primary, button border/text, sketch-line stroke                                                                                                                                       |
| `--base-color--pulse`      | `#7F1C34` | Deep maroon/burgundy — mapped to `error-red-dark`, a system/error color, not a marketing accent                                                                                                         |
| `--base-color--white`      | `#FFF`    | background-alternate                                                                                                                                                                                    |

**Correction to the prior scout note:** the note described "subtle green CTA accents." The live default `.button` class actually resolves to `border: 2px solid var(--base-color--vast)` (near-black) + `background-color: var(--base-color--dawn)` (lavender) + black text — the primary CTA fill is **lavender (Dawn), not green**. Fathom green and Glow orange appear as the stroke colors of hand-drawn decorative line-art (illustration underlines, sketch squiggles), not as the dominant button color. "Lumen and Pulse" from the rebrand-page copy are real, shipped token names (Lumen = the cream background; Pulse = a dark maroon reserved for error states, not the CTA accent the note implied).

System/semantic colors: success green `#CEF5CA`/`#114E0B` (dark), warning yellow `#FCF8D8`/`#5E5515`, error red `#F8E4E4`/pulse-maroon, focus-visible outline `#2D62FF` (a blue accessibility ring, distinct from the brand palette). Full neutral gray ramp `#111`→`#666`→`#EEE` sits underneath as a utility scale.

Overall: a warm cream canvas (Lumen) with near-black type (Vast), lavender as the primary interactive accent (Dawn), and forest-green/amber reserved for illustration accents — explicitly framed on the rebrand page as moving away from "clinical palettes common in AI startups."

## Layout

- **Built on Webflow**, confirmed via `data-wf-domain="wisprflow.ai"`, page/component IDs, and `w-variant-*` classes (Webflow's newer visual component-variants feature — e.g. `data-wf--home-fetures---dictionary-chips--variant="design-v2"`). This is a hard, verifiable fact: a startup approaching a $2B valuation runs its marketing site on a no-code builder, not a custom Next.js/React stack.
- Sections use deliberately **asymmetric grid-template-column ratios** rather than even splits — `.45fr 1fr 1fr`, `.55fr 1fr 1.125fr`, `1.25fr 1fr`, `1.4fr 1fr`, `1.55fr 1fr` recur throughout — producing the "editorial, unevenly weighted" two-column feel the rebrand page calls "editorial lifestyle."
- **Spacing/radius system** (also named tokens): section paddings scale medium `6rem` → large `8rem` → x-large `10rem` → xx-huge `14rem`; section-radius scale x-tiny `1rem` → tiny `2rem` → small `2.5rem` → regular `3rem` → medium `4rem` → large `5rem`. Buttons use a much smaller `.75rem` (12px) radius. The section-level radius values are unusually large for a SaaS site — confirms the "gentle curves, generous spacing, soft corners" language from the rebrand page in actual shipped CSS.
- Nav: logo, mega-menu-style dropdowns (Product; Individuals segmented by persona — Leaders/Developers/Creators/Customer Support/Students/Lawyers/Accessibility/Sales; Business; Resources; Company), plus a persistent Download CTA.
- Footer: three link columns (Company, Product, Resources) + legal row (Terms/Privacy/Data Controls) + social row (YouTube, Crunchbase, Instagram, X, LinkedIn).
- Pricing uses a conventional 3-tier card grid (Basic/Pro/Enterprise) with a Monthly/Annual toggle, but adds a narrative ROI calculator beneath it, not just a comparison table.

## Motion

Confirmed via loaded script sources — motion here is almost entirely JS-orchestrated, not CSS-keyframe driven (only one native `@keyframes spin` found in the whole shared stylesheet):

- **Full GSAP plugin suite, self-hosted at `cdn.prod.website-files.com/gsap/3.15.0/`** — `gsap.min.js`, `DrawSVGPlugin`, `MotionPathPlugin`, `MotionPathHelper`, `ScrollTrigger`, `ScrollToPlugin`, `SplitText`. Notable current-state fact: these were historically paid "Club GreenSock" bonus plugins; Webflow acquired GreenSock in 2024/2025 and now ships the full commercial bundle as free first-party platform infrastructure at that CDN path — a concrete, verifiable 2026 tooling fact worth citing on its own.
  - **DrawSVGPlugin** is almost certainly what animates the hand-drawn sketch underlines/squiggles (see Components of Note) — line-art that appears to "draw itself" on scroll/load.
  - **SplitText** drives character/word-level headline reveal animation.
  - **ScrollTrigger/ScrollToPlugin** drive scroll-linked reveals and smooth-scroll navigation.
  - **MotionPathPlugin/MotionPathHelper** animate elements (likely the marquee/ticker text) along custom SVG paths.
- **Rive** (`@rive-app/canvas@2.7.0`) — at least one interactive canvas-based animation (state-machine driven, not a static Lottie loop).
- **Splide.js** (+ `splide-extension-auto-scroll`) and **Swiper.js** — two separate carousel libraries in use across different sections (likely the use-case tab carousel and a logo/testimonial marquee respectively).
- CSS transitions on interactive elements are short and simple: `.1s`–`.3s` on `background-color`/`color`/`box-shadow`/`transform`, no custom `cubic-bezier` curves found in the stylesheet (easing is handled in GSAP's JS config, not CSS).
- **Buttons scale down on hover** (`transform: scale(.98)`) rather than scaling up — a subtle "press-in" tactile feel rather than the more common "lift" hover.
- The rebrand page's own language — "subtle microinteractions and slow fades for emotional pacing" — matches what's shipped: motion is restrained (short durations, one-time draws and reveals), not a continuous ambient animation loop.

## Hero Anatomy

Exact copy, verified from the live page:

1. **Headline (EB Garamond serif):** "Don't type, just speak"
2. **Subheadline (Figtree sans):** "The voice-to-text AI that turns speech into clear, polished writing in every app."
3. **The core proof device is a live before/after transcription comparison** shown directly in the hero — raw, run-on spoken input ("Hope your week is off to a good start. I was talking to Cheyene earlier...") transformed into clean, punctuated, polished text. This is the hero's entire argument in one glance, and it directly verifies the prior scout note's "take_what" almost word for word.
4. **Multi-platform badges** (Mac / Windows / iPhone / Android) sit beneath the transcription demo.
5. **Primary CTA: "Download for free"** — a lavender-filled (Dawn `#F0D7FF`), black-bordered/black-text button per the verified `.button` CSS.
6. **Secondary CTA: "Try Flow"** with a microphone icon (in-browser demo, no download required).
7. A **hand-drawn squiggle underline** (Dawn-lavender stroke, `#F0D7FF`, GSAP DrawSVG-drawn) sits beneath a key headline word — a recurring "editorial marginalia" motif, not a one-off.
8. Immediately below the hero: "Write faster in all your apps, on any device" over a scrolling grid of 40+ named app logos (X, WhatsApp, Slack, GitHub, VS Code, Figma, Gmail, etc.) proving the "works everywhere, no integration needed" claim.

`<title>`: "Wispr Flow | Effortless Voice Dictation."

## Components of Note

- **Marquee/ticker speed comparison** — an SVG `<textPath>`-based scrolling text element comparing "Keyboard: 45 wpm" vs. "Flow: 220 wpm," with text fill colors (`#FFFFEB`, `#8D8D83`) tuned to blend into the cream background for a subtle, almost-hidden scroll effect rather than a loud stat callout.
- **Persona-segmented use-case carousel** — 9 tabs (Accessibility, Creators, Customer Support, Developers, Lawyers, Leaders, Sales, Students, Teams), each with its own image/headline/CTA.
- **Company logo wall**: Lovable, Menlo, Clay, Mercury, Groupon, Vercel, Replit, Nuuly, Warp, Rivian, Notion, Substack, Amazon, Strava, Nvidia.
- **Testimonial wall, "Love letters to Flow"** — 9 individual user testimonials with headshots plus 4 larger, dedicated case-study profiles.
- **Pricing: 3-tier cards (Basic free / Pro $12–15/user/mo with 20% annual discount / Enterprise custom) plus an interactive ROI calculator** showing live dollar savings (example shown: "$1,088/mo").
- **"Still not sure?" CTA row** links out to ask ChatGPT, Claude, or Perplexity to evaluate the product — an unusual trust device that outsources the final pitch to a competitor's/complementary AI rather than a testimonial.
- **llms.txt / llms-full.txt served at the site root**, well-structured with named sections (Getting Started, Features, Platforms, For Developers, For Teams & Business, Privacy & Security, Accessibility, Support, Optional) and direct links into a `/help/*` documentation tree — a mature machine-readable doc surface, not an auto-dump. (One stale link: llms.txt references `/changelog`, which currently 404s on the live site.)
- Careers page: numbered values cards (01–05: "Unreasonably ambitious and self-improving," "Kind and direct," "Truth seeking," "Opinionated about simplicity," "Tuned into emotion"), team-photo carousel, employee testimonials.

## Voice & Copy

Energetic, benefit-forward, plainspoken register across the funnel:

- Hero: "Don't type, just speak" / "4x faster than typing" / "Made for the way _you_ work" / "One tool. Your workflow."
- About page: "The Voice Interface Company" — frames the product as "rethinking the fundamental layer of computing," mission is to "make interacting with your devices as effortless as talking to a close friend." Founder section: Tanay's "childhood obsession with Jarvis" as origin myth.
- Careers copy is blunter and more Silicon-Valley-direct than the consumer marketing voice: "Kind and direct," "Unreasonably ambitious and self-improving," "Truth seeking."
- Funding-announcement quote (Nov 2025, on `/new-funding`): "Our goal is to help everyone get voice-pilled. To experience that moment when you feel the effortlessness and delight that comes from talking instead of typing." Claim: "Flow is five times faster than typing, and after six months, the average person writes nearly three-quarters of their characters by voice."
- The rebrand page's own design-philosophy language is unusually self-aware for a marketing site: "Voice in Motion," "somewhere between editorial lifestyle and streamlined UX maturity," "a brand between machine and muse" — explicit house style vocabulary, not just visual description.

## Distinctive Moves

1. **A real, shipped primitive-to-semantic color-token system with evocative names** (Lumen, Fathom, Glow, Dawn, Vast, Pulse) that map through a second semantic layer (`background-primary/secondary/tertiary`, `text-primary/secondary/tertiary`, `border-primary/secondary`, `link-primary/secondary`) — verified directly in production CSS custom properties, not just marketing copy about "warm tones." This is architecturally close to what a design system itself would build, and notably the marketing-page copy ("Lumen and Pulse... warmth, optimism, and contrast") doesn't fully match the shipped usage (Pulse is an error color, not a hero accent) — a reminder that brand narrative and implementation can drift even inside one company's own site.
2. **Machine-drawn "hand-drawn" motion.** The hand-sketched illustration/underline aesthetic isn't static SVG art — it's GSAP DrawSVGPlugin animating stroke-dashoffset on scroll/load, so lines visibly draw themselves in. It manufactures a "human, imperfect" warmth signal through code, on a platform (Webflow + GSAP) built for exactly this kind of scroll-triggered SVG choreography.
3. **The hero's whole pitch is a literal before/after transcription**, not a screenshot or an abstract claim — raw rambling speech shown next to Flow's cleaned-up output, doing in one glance what most AI-product heroes need a paragraph of copy to argue.
4. **A near-$2B-valuation company runs its public site on Webflow**, not a custom framework — proof that no-code platform output, when a team invests in a real token system and premium plugin stack, doesn't have to read as templated.

## Buzz Evidence

- **$2B valuation in talks as of May 12, 2026** — Bloomberg reported Wispr (Wispr Flow's parent) in talks to raise ~$260M at a valuation near $2 billion [S, bloomberg.com, ~7wk old as of this crawl, 65 — reported "in talks," not a closed/confirmed round at time of writing].
- **On-site funding page (`/new-funding`) documents an earlier, smaller round**: $25M Series A closed November 20, 2025, led by Notable Capital (Hans Tung joining the board) with Flight Fund (Steven Bartlett) co-investing; $81M total raised to that point. This page had not been updated to reflect the later $2B-valuation talks as of this crawl — a live discrepancy between the site's own funding page and current press coverage, worth flagging rather than citing the older figure as current.
- **Prior scout note's specific claim — "recurred across multiple June–July 2026 Product Hunt weekly/daily leaderboards" — could not be independently confirmed** via web search in this pass; treat as unverified rather than repeat it as fact.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Ship the token architecture, name it, and expose it in docs, not just CSS.** Wispr's `base-color--*` (primitive) → `background/text/border/link-color--*` (semantic) two-layer pattern, with human-friendly names (Lumen/Fathom/Glow/Dawn/Vast/Pulse) is exactly the shape Astryx's own token docs (`$ASTRYX docs tokens`) already aim for — but Wispr's version proves the value of _evocative_ primitive names layered under boring, predictable semantic names, so a docs reader can learn "Dawn is the default interactive-accent color" as a memorable fact, not `--color-accent-2`.
2. **A before/after demo is the cheapest way to sell an abstract capability.** For an Astryx marketing/docs hero explaining a design-system claim (e.g. "consistent theming across light/dark," "one prop set, many surfaces"), a literal side-by-side before/after (unstyled vs. themed component, or hand-rolled CSS vs. `stylex.create` output) does more work than a headline claim — same mechanism Wispr uses for its "raw speech vs. polished text" hero.
3. **Scroll-drawn SVG line art via `stylex.keyframes` + `stroke-dashoffset`** is a CSS-native way to get Wispr's "hand-drawn, drawing itself in" motion without a GSAP/DrawSVG dependency — StyleX already supports `@starting-style` and custom keyframes per this repo's own CSS-capability rules; this is a legitimate lightweight alternative to a JS animation library for doc-page illustration accents.
4. **Verify brand narrative against shipped values before reusing it.** Wispr's own rebrand-page copy claims "green CTA accents"/"calm vitality" but the live CSS shows the primary button is lavender and the named "Pulse" token is an error-red, not a hero color — a caution directly relevant to Astryx's `{Name}.doc.mjs` discipline: the doc file and the component's actual default props/styles must be kept in sync, or the documentation drifts from reality exactly like Wispr's marketing narrative did from its own token file.
5. **A no-code/low-code builder is not disqualifying at scale.** Wispr Flow, approaching a $2B valuation, runs its whole public site on Webflow with a serious token/motion investment layered on top — relevant precedent if Astryx or its docs site ever needs to justify (or push back on) tooling choices for a marketing surface versus the component library itself.

## Pages Read

- https://wisprflow.ai/ (home — fetched via WebFetch, plus raw HTML and the linked shared stylesheet `flowsite-dev.webflow.shared.77edf433a.min.css` fetched directly via curl and grepped for font-face declarations, CSS custom properties/tokens, hex colors, grid-template-columns, transitions, and loaded script sources)
- https://wisprflow.ai/rebrand
- https://wisprflow.ai/pricing
- https://wisprflow.ai/careers
- https://wisprflow.ai/blog
- https://wisprflow.ai/about
- https://wisprflow.ai/llms.txt (fetched via curl — real, structured content, not a stub)
- https://wisprflow.ai/new-funding
- https://wisprflow.ai/changelog (attempted — returned HTTP 404, page does not exist at this path despite being linked from llms.txt)
