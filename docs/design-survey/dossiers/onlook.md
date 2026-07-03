---
name: Onlook
url: https://www.onlook.com/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Onlook (legal entity "On Off, Inc.", YC W25) is an open-source "visual code editor" — pitched as "Cursor for Designers" — that lets designers edit real React/Next.js components on an infinite canvas, with AI assisting inline, while the codebase (not a proprietary file format) stays the single source of truth. It positions itself explicitly against prompt-to-prototype tools (v0/Lovable-style) and against Figma-style design-drift: "Onlook is different. Designers can express themselves in an entirely new medium: their real codebase." The GitHub repo (`onlook-dev/onlook`) currently shows **26.1k stars, 2k forks, Apache-2.0 license, TypeScript 99.2%** (verified 2026-07-02 — the prior scout note's "8500+ stars" figure is stale by roughly 3x; treat any older star count as outdated).

## Typography

- **Body/UI sans**: **Inter**, self-hosted via `next/font` (`--font-inter:"Inter","Inter Fallback"`, local metric-matched fallback — confirmed in the served CSS bundle, not a Google Fonts CDN link).
- **Monospace**: **JetBrains Mono**, also via `next/font` (`--font-mono:"JetBrains Mono","JetBrains Mono Fallback"`), used for the word "Code" in the feature headline and presumably code-adjacent UI.
- **Display/script accent**: a **custom local script typeface, "Vujahday Script"** (evidenced by the compiled CSS-module class `vujahday_script_8b5b4fe9-module__CS1xra__className`, Next.js's local-font naming convention) — a brush/cursive face, applied italic to the single word **"Designers"** in the H1 at `text-[4.6rem]`, next to "Cursor for" set in plain Inter at `text-6xl`. The same script face reappears (non-italic) on the word "Design" in a later headline.
- A `--font-serif` fallback stack is declared (`ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`) but is a stock Tailwind default and never visibly used — dead/unused token, not a real serif commitment.
- Headings are almost uniformly **`font-light` (300 weight)** at large sizes with **tight negative tracking** (`tracking-[-0.02em]` to `tracking-[-0.04em]`) — e.g. H2s at `text-2xl md:text-4xl`, `text-4xl lg:text-5xl`, up to `text-6xl` for section closers — plus `text-balance` on nearly every headline/paragraph for clean line wraps.
- **Distinctive typographic move**: the headline "**AI • Code • Design** / Side-by-side-by-side" renders each key word in a font/effect that performs its own meaning — "AI" as animated shimmering gradient-text, "Code" in JetBrains Mono, "Design" in the Vujahday Script cursive face — one sentence, three type registers, rather than one accent font.

## Color

Two layered CSS-variable systems, both **strictly grayscale — zero brand hue anywhere in the site's own chrome**:

1. **shadcn/ui-style semantic tokens** (hex), light + dark pairs confirmed in the served CSS: light `--background:#fff` / `--foreground:#0a0a0a` / `--card:#fff` / `--border:#e5e5e5` / `--accent:#f5f5f5`/`#171717` / `--destructive:#e40014`; dark `--background:#0f0f0f` / `--foreground:#fafafa` / `--card:#1d1d1d` / `--border:#ffffff1a` / `--accent:#262626`/`#fafafa` / `--destructive:#ff6568`. Values sit on the standard Tailwind neutral/zinc scale.
2. **A separate "onlook" brand-chrome namespace**, defined as raw HSL triplets, also pure grayscale: `--background-onlook`, `--foreground-onlook`, `--foreground-primary: 0 0% 100%`, `--foreground-secondary: 0 0% 60%`, `--background-primary: 0 0% 0%` (dark-mode values shown; light-mode variants also present).
3. Tailwind v4 is confirmed (via the `--tw-*` engine-reset block, `@property`-style initial-value resets, and `tw-enter-*`/`tw-exit-*` animation vars — the `tailwindcss-animate` plugin signature that pairs with shadcn/ui). Each color is emitted three times for progressive color-gamut enhancement — plain hex, then `@supports (color:color-mix(in lab, red, red))`, then `@supports (color:color(display-p3 0 0 0))` / `lab()` fallbacks.

The many **saturated hex values found on the page** (`#f99c00` orange, `#fcbb00` amber, `#f05100`, `#e40014`/`#FA003C` red, `#ff2357` pink, `#ac4bff` purple, `#009588`/`#104e64` teal, `#872D2D` terracotta, `#F0EFE3` cream, `#D1CFC9` dusty rose) are **not brand colors** — they're demo-project content inside the "Brand Colors" feature panel (which literally displays Tailwind's own named palette swatches: Slate/Gray/Zinc/Orange/Amber/Lime/Green/Cyan/Blue/Indigo/Violet/Purple/Pink/Rose) and inside the fictitious "Villainterest," "Endorphins," and "brutalist lair decor" demo mockups. The marketing site itself refuses to compete on color with its own product's demos.

## Layout

Single-column, centered, generous vertical whitespace, Next.js/Turbopack SPA. Dark-mode-default with a working light/dark theme toggle (confirmed present in the nav on `/waitlist`). Section flow on the homepage:

1. Header: logo, GitHub star badge (live-linked), Product/Resources/About nav, Book a Demo + Log In.
2. Hero: H1 + subhead + dual CTA, directly followed by a **full embedded, functioning-looking product mockup** (fake browser chrome, layers panel, chat panel, canvas) rather than a static screenshot.
3. "AI • Code • Design / Side-by-side-by-side" feature intro (the typographic-code-switching headline above).
4. Feature grid: Direct editing, Components (with a Versions/revision-history panel showing named contributors + relative timestamps, e.g. "Alessandro · 3h ago"), AI Chat, Brand compliance (the Tailwind-color-swatch panel), Layers, video-hero feature demo ("Endorphins" fake automotive brand).
5. "...and so / much more" oversized right-aligned closer headline → 2–3 column feature grid (Import codebase, Collaborate, Publish, Draw-in Layers, hotkeys, media assets).
6. Open-source callout ("Supported by you & ... other builders — Join the open source movement").
7. Testimonial section ("Tens of thousands of builders love Onlook") — asymmetric card layout, each quote links out to the real X/Twitter post.
8. FAQ accordion embedded directly on the homepage (6 Q&A pairs) rather than routed to a separate page.
9. Final CTA ("Bring your team to Onlook today") + footer (Company / Product / Works with / Follow the Odyssey + socials; "© 2026 On Off, Inc.").

`/pricing` is a deliberately simple **two-tier page**: Starter (free, self-hosted, 200 MCP calls/day, unlimited projects/AI chat) vs. For Teams (contact-based custom pricing) — no calculator, no feature-grid theatrics, CTAs are "Contact us" (mailto) / "Book a demo." `/about` is a careers/culture page ("The Odyssey," a 3-person team, office photography, values: Speed/Resilience/Reinvention/Competence). `/why-onlook` is a positioning page built around a comparison table (starting point, source of truth, tech stack, component library, AI placement, file formats, design systems) versus unnamed prompt-to-prototype competitors.

## Motion

- **Staggered blur+opacity entrance reveal** on the hero: H1, subhead, and CTA row each start `opacity:0; filter:blur(4px); transform:translateZ(0)` inline and animate in independently (confirmed via 4 distinct inline `will-change:opacity, filter` style attributes in the served HTML) — a lightweight "blur-up" reveal, GPU-cheap, no WebGL.
- **CSS-only shimmer-gradient-text**: a custom `@keyframes shimmer-spin` animates a CSS custom property `--shimmer-angle` (0deg → 43.2deg → 136.8deg → 180deg, opacity 0.9→0→0→0.9) paired with `bg-gradient-to-l from-white/20 via-white/90 to-white/20 bg-clip-text text-transparent animate-shimmer` and a `drop-shadow(0 0 14px rgba(255,255,255,1))` glow — applied to the word "AI" in the feature headline. Notably this is a pure-CSS technique (custom property + keyframes), not a JS animation-library effect.
- **`waitlist-bar-fade-in`** and **`waitlist-bar-flicker`** keyframes (0.4s, `cubic-bezier(.25,.46,.45,.94)` and `ease-out` respectively) — a fade+flicker-in opacity sequence, evidently powering an animated bar element on the waitlist flow.
- Buttons get `active:scale-[0.97]` press feedback, explicitly **disabled under `motion-reduce:active:scale-100`** — a real `prefers-reduced-motion` accommodation on a micro-interaction, not just page-load animation.
- No Three.js/WebGL, no GSAP, no Lottie string literals found anywhere in the served bundle. The exact JS motion library powering the blur-reveal (likely Motion/Framer Motion given the opacity+filter+translateZ signature) could not be confirmed by name in the static bundle — **not determined**.

## Hero Anatomy

- H1 (two lines): "**Cursor for**" (Inter, `font-light`, `text-6xl`, `leading-[0.9]`, `tracking-[-0.04em]`) + "**Designers**" (Vujahday Script, italic, `text-[4.6rem]`).
- Subhead: "Onlook is where teams design together — directly in their real codebase" (`text-lg`, secondary-foreground gray).
- Dual CTA: "Book a Demo" (outline button → a real HubSpot booking link under a named team member, `daniel-onlook`) + "Sign Up" (primary button → `/waitlist`).
- Honest small print below the fold line: **"Onlook is optimized for larger screens"** + **"Email me a link for later"** — an unusually candid admission that the product doesn't work well on mobile, with a graceful capture fallback instead of pretending otherwise.
- No gradient/aurora/orb background. The hero's entire visual interest is the embedded, fully-detailed fake product session directly below the headline: a nested browser-chrome mockup of the real Onlook editor (top toolbar, left sidebar, chat panel, canvas) running a deliberately comedic fictional project called **"Villainterest"** (Pinterest for supervillains), complete with a fake product-notes list ("Implement evil pin creation (mwahaha)", "Add 'light mode' (begrudgingly)", "Build villain-to-villain messaging (evil DMs)") and a live chat exchange: "The masonry layout is breaking on mobile - can you fix the responsive columns?" → AI fixes it in view.
- GitHub star-count badge (25.8k–26.1k, live) sits permanently in the header nav beside Book a Demo/Log In — social proof baked into persistent chrome, not a one-off footer badge.

## Components of Note

- **The "Villainterest" demo** — see above; a second demo project "Endorphins" (fake automotive brand video hero) and a third image-grid pinboard ("Brutalist lair decor," 15+ captioned stock photos) round out the product-demo cast.
- **Brand Colors panel** — literally displays Tailwind's own named color palette (Slate/Gray/Zinc/Orange/Amber/Lime/Green/Cyan/Blue/Indigo/Violet/Purple/Pink/Rose) as the "brand compliance" feature's proof.
- **Versions/revision-history panel** — named contributors + relative timestamps ("Alessandro · 3h ago", "Jonathan · 10h ago") as a compact trust/maturity device, echoing (at product-feature scale rather than company scale) the "dated timeline as proof" pattern seen elsewhere in this survey.
- **FAQ accordion on the homepage** — 6 blunt, unhedged Q&As (e.g., "Why is Onlook open-source? Developers have historically been second-rate citizens in the design process...") rather than a separate FAQ page.
- **Testimonial cards link out to the real source tweet** for each quote — verifiable social proof, not agency-invented pull-quotes.
- **Theme toggle** present in nav (dark default, light alternate).
- Button component is verifiably **shadcn/ui's stock Button** (exact class signature: `data-slot="button"`, `disabled:pointer-events-none disabled:opacity-50`, `focus-visible:ring-ring/50 focus-visible:ring-[3px]`, `aria-invalid:ring-destructive/20`).

## Voice & Copy

Confident, developer-to-developer, dry-humored. Demo copy leans into deliberate cheekiness ("evil pin creation (mwahaha)"). FAQ answers are blunt and non-corporate: "Onlook is a visual editor for code... the types of designs you can create are unconstrained by Onlook's interface." The `/about` page mission line is stated plainly: **"obliterate the divide between creativity and implementation."** Company values are one word + one terse definition each (Speed: "olympic pace, relentlessness"; Resilience: "grit, stamina, and drive"). The `/why-onlook` page hits a genuine manifesto register: **"For the love of the craft / For the art kids who got told they cared too much. / For the ones who chase a feeling, not a brief."** Even the copyright line carries voice: the legal entity is "On Off, Inc.," not "Onlook, Inc."

## Distinctive Moves

1. **Typographic code-switching inside one headline.** "AI • Code • Design" renders each word in a font/effect that performs its own meaning — "AI" as animated shimmering gradient-text (CSS-custom-property keyframe, no JS/WebGL), "Code" in JetBrains Mono, "Design" in an italic cursive script face (Vujahday Script) — three type registers in one sentence, a sharper move than the single "accent font on one word" trick seen at several other sites in this survey.
2. **One deliberately funny, fully-realized fake client project ("Villainterest") standing in for the entire product screenshot.** Turns an abstract "AI edits your real React code" claim into something concrete, memorable, and human — distinct from the generic finance/analytics dashboard mockup used almost everywhere else surveyed.
3. **A monochrome-only marketing-site palette (two layered pure-grayscale CSS-variable systems, zero brand hue) selling a product whose entire pitch is "brand color compliance."** The site declines to compete with its own product's color story — every hex value on the page belongs to embedded demo content, not the shell.

## Buzz Evidence

- **GitHub (verified 2026-07-02): 26.1k stars, 2k forks, Apache-2.0, TypeScript 99.2%.** The prior scout note's "8500+ stars" is stale by roughly 3x — a clear case for always re-verifying star counts rather than trusting an earlier snapshot.
- YC Winter 2025 batch company.
- Named, checkable individual endorsements rather than a generic logo wall: **Adam Argyle** (Chrome CSS Developer Advocate, Google), **Tina He** (Product Lead, Developer Tools, Coinbase), **John Maeda** (Head of Computational Design/AI Platform, Microsoft), **Aaron Epstein** (Cofounder, Creative Market) — each testimonial card links to the original X/Twitter post.
- Prior scout notes claimed "#1 GitHub trending above DeepSeek" and "#1 on Hacker News" — **not independently reconfirmed** in this pass (no live trending/HN-rank page was fetchable); treat as unverified pending a fresh check.

## What Astryx Should Take

1. **Ship one genuinely funny, fully-built demo app inside the docs/Storybook**, the way Onlook uses "Villainterest," instead of sterile isolated component swatches — a single memorable end-to-end example proves the component library's real output far better than a props table.
2. **Adopt the layered-token architecture**: keep shadcn-style semantic component tokens (background/foreground/card/border/accent/destructive) fully separate from a small marketing-only brand-chrome namespace — prevents one-off homepage treatments from leaking into (or being constrained by) the component design-system tokens.
3. **Reserve motion for one cheap, JS-runtime-free flourish**: a `@keyframes`-driven shimmer/gradient-text effect on a single headline word (like Onlook's "AI") delivers a premium, animated moment without a WebGL/Lottie dependency — pairs with the survey's broader finding that GSAP-class restraint beats heavy 3D. Explicitly gate any press/hover micro-interaction behind `motion-reduce:` the way Onlook does on its buttons.
4. **Keep the FAQ as an on-page accordion with blunt, one-paragraph answers** (not a separate routed page) — directly applicable to Astryx answering "why StyleX," "why not Tailwind," etc. in the same terse, unhedged register as Onlook's "why open source" answer.
5. **A monochrome, zero-brand-hue marketing shell is a legitimate choice for a design-system site** — it lets embedded live component demos (which are inherently colorful, since consumers theme them) carry all the color, exactly as Onlook lets its product screenshots carry all the color. Worth prototyping as one of Astryx's candidate homepage directions alongside the warmer/branded options from other exemplars in this survey.
6. **Typographic code-switching as a headline device**: for an Astryx tagline naming multiple pillars (e.g. "Design • Code • Ship" or similar), consider rendering each word in a treatment that embodies it (mono for code, a distinct display face for design) rather than uniform typography — cheap, distinctive, and requires no new asset beyond font loading already in place.

## Pages Read

- https://www.onlook.com/ (home — fetched via WebFetch and raw HTML source, plus 4 linked CSS bundle chunks inspected directly for font/color/animation ground truth)
- https://www.onlook.com/llms.txt
- https://www.onlook.com/pricing
- https://www.onlook.com/about
- https://www.onlook.com/why-onlook
- https://www.onlook.com/waitlist
- https://github.com/onlook-dev/onlook (stars/forks/license/language verification)
- https://onlook.substack.com/ (fetched; page returned only the Substack template shell with no visible post archive in this pass — voice/post-title claims from this URL are marked not determined)
