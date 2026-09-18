# Launch checklist

What has to be true before alabamauspsa.org is announced to the clubs as the Section's
site. Ordered by who it's blocked on. Every item below is a "Coming soon" pill on the
live site today; when the data lands, the pill goes away.

Scope rule while filling these in: **Alabama Section items only.** No Area 6, other
Sections, or USPSA national news in Notices or the Calendar. Those live on uspsa.org.

## Blocked on Jeremy

- [ ] **Domain.** Register alabamauspsa.org (it does not resolve yet), add it under the
      Pages project → Custom domains. `site` in `astro.config.mjs` is already set.
- [ ] **Section email.** Decide the mailbox (e.g. `coordinator@alabamauspsa.org` via
      Cloudflare Email Routing → Rodney's inbox), then set `SITE.email` and the officer
      emails in `src/data/site.ts`. Contact page shows a pill until this exists.
- [ ] **Move the 2026 match book** under `/championship/2026/` and redirect
      alstateuspsa.com. Not a launch blocker; the Championship page links to
      alstateuspsa.com in the meantime.

## Blocked on Rodney (Section Coordinator)

- [ ] **Executive Committee names.** One representative per club, into the `contact`
      field of each `src/content/clubs/*.md`. Feeds both the club page and the
      Governance table.
- [ ] **His term dates and the next election date.** `/governance/elections/`.
- [ ] **Signed current bylaws.** Confirm the 2019 revision is what USPSA has on file, or
      supply the newer one. Replace `public/docs/alabama-section-bylaws-2019.pdf` and
      the labels in `BYLAWS` in `src/data/site.ts`.
- [ ] **2027 Nationals slot application process.** Window, what to submit, where, and
      the written evaluation order (Championship placement → other Section matches →
      club membership/volunteering). Post as a `nationals-slots` Notice; the
      `/nationals-slots/` page links to Notices for it.
- [ ] **2027 Executive Committee meeting date/time.** Currently "to be confirmed" in
      `src/content/events/2027-executive-committee-annual-meeting.md`.
- [ ] **2026 financial accounting** (opening balance, income, expenses, closing) for
      `/governance/finances/`. Policy §5.3 requires it annually to the clubs.
- [ ] **2025 and 2024 Championship results links**, and the 2025 host. `CHAMPIONSHIP_HISTORY`
      in `src/data/site.ts`. (2010–2023 are already linked.)

## Blocked on the clubs (collect via Rodney or directly)

For each of the nine clubs, in `src/content/clubs/<club>.md`:

- [ ] `schedule` — match cadence ("2nd Saturday monthly, 9am")
- [ ] `address` + `mapUrl` — range address and a Google Maps link
- [ ] `practiscore` — the club's PractiScore club page URL
- [ ] `contact` — match director or club president name (public-facing, so ask first)

| Club | ID | Status |
|---|---|---|
| Brocks Gap Practical Shooters | AL16 | pending |
| Central Alabama Sport Shooters Assn | AL02 | pending |
| Dothan Practical Shooters | AL18 | pending |
| East Alabama Gun Club | AL17 | pending |
| Last Resort Training and Range | AL20 | pending |
| Mobile Pistol Shooters Assn | AL03 | pending |
| Practical Shooters of Central Alabama | AL10 | pending |
| Rocket City Practical Shooters | AL13 | pending |
| Talladega Practical Shooters | AL05 | pending |

Also confirm with Rodney that these nine are the current membership; USPSA's Area 6
listing is the source and it lags club changes.

## Nice to have before launch, not blocking

- [ ] A Section logo or the USPSA Alabama Section mark, if one exists, for the header
      and favicon (currently a plain "AL" tile).
- [ ] A first real Notice from Rodney (introduction, what the site is for, the slot
      process change). Replaces the "new website" notice as the pinned item.
- [ ] Bylaws amendment draft fixing Art. 11 (slots by lot) and adding a notice period,
      for the next Executive Committee meeting. Not needed for the site, but the site
      currently says one is pending.

## Definition of "live"

All of **Blocked on Jeremy** done, all of **Blocked on Rodney** except the 2026
accounting done, and at least `schedule` + `practiscore` filled for every club. At that
point no page shows a "Coming soon" pill in a place a shooter would need an answer, and
the site can be announced to the clubs and submitted to USPSA as the Section's URL.
