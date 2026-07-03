# Design-survey run log — 2026-07-02 → 07-03

Monument-sonnet run: July-2026 startup web-design trend survey for the Astryx site.

## What happened

- **Phase 0** — anchored: 8 axes (funding-signal, accelerators, viral launches, award circuit, trend commentary, tooling gravity, AI-look + antithesis, lateral/non-US), coined-term/opposite table, 5-persona panel chosen (art director, DS engineer, trend critic, founder/growth, completeness critic).
- **Phase 1+2** (`wf_d025a518-a29`, 54 Sonnet agents, 5.7M tokens) — 35 scouts → 484 raw rows → 350 unique → gate #1 (all 5 personas: "gaps" — peer design-system sites thin, virality evidence weak, AI-saturated) → 14 gap-fill top-ups → **478 unique indexed**, 85 selected, merged to 68 crawl hosts.
- **Cache gate** — 2 FRESH dossier-cache hits (Mistral, Together) were _feature_ dossiers with zero design content → deliberately re-crawled with design lens.
- **Phase 3** (`wf_eb1d10b3-734`, 68 Sonnet agents, 9.4M tokens) — first launch died: whole fleet hit session quota (reset 9:50pm PT). Resumed post-reset per operator ("no fable subagents" — everything already Sonnet-pinned). **68/68 dossier files written**; 65/68 returned structured summaries (modal-labs, onlook, muzli hit schema retry cap after writing their files). All 68 written back to dossier-cache.
- **Phase 4** (`wf_5f78886b-a96`, 11 Sonnet agents, 1.4M tokens) — 4 lens analysts (39 trends) → synthesizer wrote `ATLAS.md` → gate #2: 3/5 personas returned (13 fixes, 0 blockers), 2 died on schema retry cap → reviser applied 13/13 → dead personas re-run as direct agents (dead reviewer = blocker, not silent pass).

## Decisions

- Design dossiers ≠ feature dossiers: cache hits keyed to a different question don't count as coverage. Re-crawl was correct.
- Origin is `facebook/astryx` (no push perms) → forked to `laulpogan/astryx`, branch `design-survey-jul-2026` pushed there.
- Workflow `args` arrives as a JSON **string** in the script sandbox despite being passed as a JSON array → scripts must `typeof args === 'string' ? JSON.parse(args) : args`. Cost two failed launches before diagnosis.

## Artifacts

- `docs/design-survey/ATLAS.md` — the deliverable: 12 exec findings, trend atlas by axis w/ ADOPT/ADAPT/SKIP, AI-slop banlist, take-list, white-space map, coverage notes.
- `docs/design-survey/index.jsonl` — 478-row discovery index (scored).
- `docs/design-survey/dossiers.jsonl` + `dossiers/*.md` — 65 compact summaries + 68 full design dossiers.
- `docs/design-survey/gate1.json` — persona gate #1 verdicts.
- Dossier-cache: all 68 added to `~/Source/dotfiles-claude/dossiers/`.

## Coverage honesty

478 indexed / 68 deep-crawled / 393 cut at triage. Known skew: funded-AI-startup-heavy (57/65), design-system peers n=8, forms + mobile-first coverage thin (flagged in ATLAS §6).
