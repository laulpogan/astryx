---
name: Framer Awards — 2025 Winners
url: https://www.framer.com/awards/
crawled_at: 2026-07-02
status: active
run: design-survey-jul-2026
kind: design-dossier
---

## What It Is

Framer's own annual awards microsite recognizing the best sites built on Framer in 2025 — 11 winners across two groups, "Site of the Year" (Best Newcomer, Best Storytelling, Best Interactions, Best Big Site, Best Animations, Best Visual Design) and "Community Awards" (Best Framer Designer, Best Framer Creator, Best Framer Video, Best Template, Best Plugin). Each winner gets $10K cash plus an exclusive physical trophy; the page pairs a live embed of each winning site with a short, specific judge quote. It functions simultaneously as a trend swipe-file (real, current sites judged as best-in-class) and as Framer's own marketing/ecosystem promotion (two of the eleven categories reward a Framer marketplace template and a Framer plugin).

## Typography

- **Awards page itself**: cursive script "Luxurious Script" for the "Framer" wordmark in the hero, paired directly beneath with condensed bold sans "GT Walsheim Bold" for "AWARDS" and section headers ("Site of the Year," "Best Newcomer," etc.); "GT Walsheim Medium" for subheads/body copy; "Inter Variable" present in nav chrome. Confirmed via `getComputedStyle` on the live page — h1 font-family resolves to `"Luxurious Script", sans-serif` at ~398px font-size.
- **Winner sites bring their own typography — no shared type system, which is itself the point (award celebrates stylistic diversity):**
  - bohdan.design (Best Interactions): "Inter Display" for the giant fragmented headline ("I make... human... by tying digital products and people with foolproof interfaces"), split into per-character `<span>` elements for scroll-triggered kinetic-type animation.
  - panton.vitra.com (Best Animations): custom "VFutura" family in Medium/Bold/Heavy weights — Vitra's proprietary condensed-Futura variant — headline "Available Now" set at 30px bold.
  - temper.studio (Best Visual Design): "Surt Normal Regular" (geometric sans, ~32px hero headline) paired with "Quadrant Text Regular" (slab serif) for product names/body. Note: "Quadrant" is the same slab serif Granola's mid-2026 rebrand adopted (per this survey's separate Granola dossier entry) — worth flagging as a small emerging shared-type signal across two unrelated 2026 sites, not proof of a broad trend.
  - bychudy.com (Best Newcomer): "SF Pro Text Bold" — the only visible "type" is literal macOS system UI font, used for desktop-icon labels in a deliberately OS-chrome pastiche.

## Color

- **Awards page**: true black `#000000` base through the entire "Site of the Year" / "Community Awards" scroll, white text, zero accent hue in the awards content itself. Color appears only in (a) the gold/brass laurel wreath + matte graphite trophy cube shown in the looping hero video, and (b) a cyan-blue neon glow line plus a light lavender-tinted glass panel in the bottom Framer-product-promo footer (a different section, not the awards content).
- **panton.vitra.com**: deep wine/maroon background, sampled via computed style as `rgb(58, 0, 26)` / `#3A001A`, with a fully saturated palette used as literal product-colorway swatches: red `#FF0000`, orange `#FF6600`, teal `#0C607E`, purple `#38059F`, plus muted blue-gray tints (`#D9E0E2`, `#DEE7EA`, `#C4C2C8`) for secondary chair finishes — the colors are the product (Verner Panton's chair is famous for saturated hues), not decoration.
- **temper.studio**: warm off-white/greige `#F2F1EF` background, near-black `#111111` ink, one yellow accent `#FFE24C`, terracotta/rust tones carried entirely through product photography rather than UI color.
- **bychudy.com**: near-white/pale backdrop (a blown-out portrait photograph), full-color small square thumbnail icons (album art, video stills) scattered across it like desktop shortcuts.

## Layout

- **Awards page**: single-column, centered, vertical-scroll narrative. Hero (headline + subhead + CTA) → autoplaying trophy-object video → "Site of the Year" section header → six stacked full-bleed two-column cards → "Community Awards" section header → five more stacked cards, identical anatomy → a Framer-product promo panel → standard multi-column marketing footer.
- Per-card layout confirmed via DOM inspection: cards render at ~1400px content width; corner radius is 8–12px on interior elements (CTA pills, thumbnails) but 0px on the outer card container itself — the cards are full-bleed inside a max-width column, not individually rounded boxes.
- Winner-site layouts vary by design (the award explicitly celebrates range, not a shared grid): temper.studio uses a 50/50 split-screen hero (documentary photo left, product photo right); bychudy.com scatters icons non-grid across a portrait photo with a fixed macOS-style dock pinned to the bottom; panton.vitra.com pins a single centered content card in the viewport while a giant flat-color ring shape scales/rotates behind it as you scroll.

## Motion

- **Awards page**: hero type fades/rises from near-invisible to full opacity over roughly 2 seconds on load — a restrained, single entrance, not a staggered flourish. The trophy section autoplays a looping product video (gold laurel wreath draped on a matte-black cube with a cut-out "F" negative-space, floating gold dust particles) with a manual play/pause control. No canvas/WebGL on the awards page itself — its own motion is CSS-transition- and video-driven, not shader-driven.
- **Winner-site motion, observed directly in-browser:**
  - bohdan.design: per-letter split-text spans for scroll-triggered kinetic-type reveal, plus a live custom-cursor coordinate readout ("X:756 Y:338") that updates in real time next to the name as a design flourish — motion presented as instrumentation/proof of interaction craft, not just decoration. One `<canvas>` element present (likely a cursor/particle layer).
  - panton.vitra.com: a giant flat-color ring (torus) that scales as the page scrolls, with a sticky floating pill-shaped bottom nav staying fixed while the background shape and color animate around it; 7 `<video>` elements load on the homepage — the "geometric animations... super smooth motion" the judges cite is achieved via video/CSS transform, not WebGL 3D.
  - temper.studio: minimal motion — mostly restrained hover states over a static split hero and a sparse product grid, consistent with its "minimal direction, nothing feeling overdone" judge quote; motion is deliberately not the point of this winner.
  - bychudy.com: desktop-icon-style absolute-positioned hover/drag affordances plus a fixed dock bar — reads as interaction design (draggable targets) rather than scroll choreography.

## Hero Anatomy

- **Awards page hero**: flat black canvas; two-tier headline — a large italic/cursive script "Framer" stacked directly above a bold condensed all-caps "AWARDS" (combined optical size roughly 400px tall at desktop width) — followed by a three-line centered gray subhead ("Meet the 2025 winners: 11 creators across design and community, each receiving $10K, exclusive trophies, and more.") and a single white pill CTA, "See list of winners," that anchor-scrolls down. No background imagery or gradient — a purely typographic hero on flat black.
- **Per-winner-card "hero" pattern** (repeats 11×): left half is a live, real, embedded preview of the actual winning site rendered in its own light-mode frame (not a photo — e.g., Miro's actual marketing page with a working "Sign up free" email input and logo wall visible); right half carries the winner's name (bold), site URL (muted gray), a small line-art laurel-wreath-plus-Framer-"F" trophy badge (top right), a 1–2 sentence judge quote in light-gray type, and on several cards a "▶ Inside [name]'s design process" video link with a play-button thumbnail.

## Components of Note

- **Reusable trophy-badge glyph**: a laurel wreath wrapped around Framer's angular "F" logomark, rendered identically as a small line-art icon on every one of the 11 winner cards — one consistent, ownable visual thread stitching together otherwise wildly different sites.
- **Embedded-live-site preview card**: instead of a static screenshot, each card frames the real winning site's actual rendered DOM (working inputs, real logos) — "proof, not mockup."
- **Physical hero trophy video**: a looped, autoplaying product video of an actual manufactured object (matte-black anodized cube with a cut-out F-shaped void, gold laurel wreath, floating gold dust particles) — treats the award as a tangible physical prize, not just a web graphic.
- **Footer product-promo panel**: a frosted-glass rounded panel with a segmented "Pages / Layers / Assets" pill-tab control and a styled search input, a glowing blue vertical accent line at its left edge — Framer's own product UI chrome bleeding directly into the marketing footer as a live component demo.

## Voice & Copy

Judge commentary is uniformly short (1–3 sentences), specific to the actual work rather than generic praise, and repeats a small vocabulary — "bold," "playful," "clear," "effortless," "smooth," "considered," "polished." Verified exact quotes:

- "Bringing a seriously fresh perspective and making it look effortless, her work feels bold, thoughtful, and already incredibly polished." — Asia Gawron / bychudy.com
- "Layout and typography are bold and beautifully considered, interactive moments keep the story moving." — 27b / spotlight.i-d.co/ellefanning
- "Every hover, tap, and transition has real intention behind it. Combined with smooth animation, it feels right." — Bogdan Skripka / bohdan.design
- "Trueform took on a massive project and made it feel surprisingly light... the experience stays clear and playful. It's a big site that never feels heavy." — Trueform / miro.com
- "[Panton] features simple geometric animations, bold colors, and super smooth motion." — Analogue Agency / panton.vitra.com
- "Minimal direction gives each product room to stand on its own, without anything feeling overdone." — Matthias Mentasti / temper.studio

The awards page's own chrome copy is terse and functional (headline, subhead, one CTA, no marketing fluff); the emotional register lives entirely in the judge quotes, not the page shell.

## Distinctive Moves

1. A physical, filmed trophy (gold laurel + anodized black cube) as the hero's centerpiece video — the award is presented as a real manufactured object, unusual for a purely digital "best website" award.
2. Cards embed the actual live winning site (working inputs, real logos, real layout) rather than a static screenshot, turning the awards page into a functioning gallery of real product rather than a curated screenshot deck.
3. A single reused laurel-wreath-plus-logomark badge glyph threads through all 11 winner cards, giving stylistically unrelated sites one shared, ownable visual anchor.

## Buzz Evidence

- $10,000 cash plus a physical trophy per winner across 11 categories — a real monetary incentive/award structure, not just a digital badge.
- Winning sites carry independent buzz of their own: miro.com is a 100M+-user product (customer logos visible on its card include Workday, Deloitte, Salesforce, PayPal, Perplexity, HP); bychudy.com's designer (Asia Gawron) is a working music-industry designer for Polish acts (album art, tour visuals); panton.vitra.com ties directly to Vitra's real, commercially available Panton Chair 2026 limited-edition drop (live "Buy Now" CTA on the winning site).
- Framer runs this as a recurring, dated annual program (2025 winners page live as of July 2026), positioning it as an industry signal in the same space as Awwwards/CSS Design Awards, but vendor-run — two of eleven categories ("Best Template," "Best Plugin") directly promote Framer's own marketplace ecosystem.
- **Correction to prior scout notes**: the claimed repeated judge phrase "light and calm" was not found verbatim anywhere in the six Site-of-the-Year quotes (closest matches were "surprisingly light" and "feels effortless" — different words, similar idea, but not a repeated exact phrase). "Super smooth motion," "bold colors," and "clear and playful" ARE verified verbatim in the quotes above. Also, the prior note's characterization of "dark-minimal SaaS (miro.com)" is inaccurate — the actual Miro marketing page embedded on the award card is a bright, colorful, video-forward light-mode SaaS homepage, not dark-minimal.

## What Astryx Should Take

Concrete, mapped to a design-system marketing + docs site:

1. **Real-component showcase over screenshots.** Framer's winner cards embed the actual live site, not a photo. Astryx's Storybook docs already show live components — extend the same instinct to a marketing "built with Astryx" gallery that embeds real consumer sites/apps, not static images.
2. **One reusable badge glyph as a cross-cutting motif.** The laurel+F trophy icon ties together stylistically unrelated winner sites. Astryx could adopt a single small mark (e.g., a "verified/stable" component-status glyph) reused consistently across doc pages, release notes, and the marketing site — the way one badge threads through 11 visually distinct properties here.
3. **Judge-quote-as-testimonial micro-pattern.** Name + role + one short, concrete sentence (not generic praise) reads as credible social proof at a much smaller footprint than a full case study — reusable for a "teams using Astryx" strip.
4. **Restraint on the index page, richness in what it links to.** Framer's own awards hero is pure black-and-white typography with a single CTA; all the color/motion spectacle lives in the linked sites, not the index. Astryx's docs/marketing shell can stay monochrome and let live component demos carry the color and motion, rather than front-loading visual noise on the landing page itself.
5. **Skip as one-offs, not lessons:** the cursive-script+condensed-sans wordmark pairing and the maroon/red Panton palette are brand-specific choices for those particular properties — don't copy the literal look, just the four structural patterns above.

## Pages Read

- https://www.framer.com/awards/ (primary target — full scroll via browser session + WebFetch)
- https://bohdan.design/ (Best Interactions winner)
- https://www.panton.vitra.com/ (Best Animations winner)
- https://temper.studio/ (Best Visual Design winner)
- https://www.bychudy.com/ (Best Newcomer winner)
