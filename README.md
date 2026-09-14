# USPSA Alabama Section website

Static site for the USPSA Alabama Section (Area 6). Replaces `uspsaalabamasection.org`,
which went offline in 2025.

Built with [Astro](https://astro.build) as a purely static site. No server, no database,
no adapter. Content is markdown in `src/content/`; the build writes plain HTML to `dist/`.

**Not a Phoenix Gauge Studios project.** Personal GitHub (`stanggt325`), personal
Cloudflare account. Keep it that way.

## Editing content

Everything a Section Coordinator needs to update lives in two places:

| What | Where |
|---|---|
| Post a notice (election, meeting, bylaws, slots, club change) | `src/content/notices/YYYY-MM-DD-slug.md` — templates in `_TEMPLATE-*.md.txt` |
| Add or change a club | `src/content/clubs/<slug>.md` |
| Post meeting minutes | `src/content/minutes/YYYY-MM-DD.md` + signed PDF in `public/docs/minutes/` |
| Add a calendar event | `src/content/events/<slug>.md` |
| Officers, Area Director, championship history, bylaws links, USPSA links | `src/data/site.ts` |
| Bylaws PDF | `public/docs/` |

Frontmatter fields are validated at build time (`src/content.config.ts`); a typo in a
category or a missing date fails the build rather than publishing a broken page.

Search the tree for `TODO` before launch. Every placeholder is marked.

## Site map

```
/                         home: pinned notices, next championship, upcoming events
/notices/                 all notices by year        /notices/<id>/
/clubs/                   directory by region        /clubs/<id>/
/calendar/                section events + standing dates from the bylaws
/championship/            current match, how it works, results 2010-present
/nationals-slots/         how slots are earned and distributed
/governance/              officers + Executive Committee + SC duties
/governance/bylaws/       current PDF, history, plain-language summary
/governance/meetings/     next meeting + minutes     /governance/meetings/<id>/
/governance/elections/    schedule, eligibility, procedure, post-election paperwork
/governance/finances/     income, allowable expenses, annual accounting table
/resources/               first match, become an RO, club officer checklist, USPSA links
/contact/
```

Why these pages: see [docs/SECTION_RESPONSIBILITIES.md](docs/SECTION_RESPONSIBILITIES.md).
Each page maps to an obligation in USPSA's Section Operations and Governance Policy or
the Alabama Section bylaws.

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serves dist/
npm run check      # type-check .astro files
```

`.npmrc` sets `ignore-scripts=true`. Nothing here needs install scripts.
Install with `--before=<date>` when adding dependencies, to avoid versions published in
the last two weeks.

## Deploying to Cloudflare

Cloudflare now creates Git-connected projects as **Workers** (with static assets), not
Pages. Either works for this site; the repo is set up for Workers.

`wrangler.jsonc` tells wrangler to upload `dist/` as static assets, with no Worker
script and no Astro adapter. **Do not remove it**: without it, `wrangler deploy`
auto-configures the project by running `astro add cloudflare`, which installs an
adapter that is incompatible with Astro 7 and fails the build.

Workers & Pages → Create → Workers → Import a repository → `stanggt325/alabama-section`:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Non-production branches: `npx wrangler versions upload` (preview URLs per PR)

`wrangler` is pinned in `devDependencies` so the deploy step uses a known version
instead of whatever `npx` downloads that day.

Custom domain: the Worker's Settings → Domains & Routes → add the domain. Cloudflare
handles DNS and TLS if the zone is on Cloudflare (alstateuspsa.com already is).
Then set `site` in `astro.config.mjs` to the real domain so canonical URLs are right.

`public/_headers` sets security headers; `public/_redirects` maps old
`uspsaalabamasection.org` paths if that domain is ever pointed here. Both are honored
by Workers static assets.

Known `npm audit` finding: `wrangler` → `miniflare` → `sharp` (libheif). Dev-only,
local image decoding in miniflare, which this project never runs. Clears when
wrangler 4.131+ is older than the 14-day install cutoff.

## The 2026 match book

The 2026 State Championship digital match book (`stanggt325/2026-al-state-championship`,
live at alstateuspsa.com) will move under this site at `/championship/2026/`. It is
pure static HTML, so the move is: copy its `index.html`, `css/`, `js/`, `img/`, `pdf/`
into `public/championship/2026/`, fix any root-relative paths, and add a redirect from
alstateuspsa.com. `CHAMPIONSHIP_HISTORY` in `src/data/site.ts` already has a
`matchbook` field per year for the link.
