// Site-wide facts. Edit here, not in the pages.

export const SITE = {
  name: 'USPSA Alabama Section',
  shortName: 'Alabama Section',
  tagline: 'The local link to USPSA for Alabama clubs and shooters.',
  area: 'Area 6',
  // Section Coordinator mailbox. Empty until Email Routing forwards it (pending Rodney).
  email: '',
  webmaster: 'webmaster@alabamauspsa.org',
};

// Section officers. The 2019 bylaws define only the Section Coordinator (Art. 4.A);
// Webmaster is an appointed, non-voting role. The Executive Committee (club
// representatives, Art. 4.B) is listed separately from club data.
export const OFFICERS = [
  { role: 'Section Coordinator', name: 'Rodney Hawkins', club: '', email: '' },
  { role: 'Webmaster', name: 'Jeremy Hughes', club: '', email: 'webmaster@alabamauspsa.org' },
];

export const AREA_DIRECTOR = {
  name: 'Billy Herrington',
  title: 'USPSA Area 6 Director',
  url: 'https://uspsa.org/area6',
};

export type ChampionshipYear = {
  year: number;
  host: string;
  location: string;
  dates: string;
  results: string;
  matchbook?: string;
};

// Section Championship history. Older links point at the Wayback Machine because
// the previous section site is gone. Newer ones are PractiScore.
export const CHAMPIONSHIP_HISTORY: ChampionshipYear[] = [
  { year: 2027, host: 'Talladega Practical Shooters', location: 'Talladega, AL', dates: 'Apr 29 - May 1, 2027', results: '' },
  { year: 2026, host: 'Talladega Practical Shooters', location: 'Talladega, AL', dates: '2026', results: '', matchbook: 'https://alstateuspsa.com' },
  { year: 2025, host: 'TBD', location: '', dates: '', results: '' },
  { year: 2024, host: 'Rocket City Practical Shooters', location: 'Woodville, AL', dates: 'May 16-18, 2024', results: '' },
  { year: 2023, host: '', location: '', dates: '', results: 'https://practiscore.com/results/new/219458' },
  { year: 2022, host: '', location: '', dates: '', results: 'https://practiscore.com/results/new/161405' },
  { year: 2019, host: '', location: '', dates: '', results: 'https://practiscore.com/results/new/76329' },
  { year: 2018, host: '', location: '', dates: '', results: 'https://practiscore.com/results/new/52368' },
  { year: 2017, host: '', location: '', dates: '', results: 'https://practiscore.com/results/new/32687' },
  { year: 2016, host: '', location: '', dates: '', results: 'https://practiscore.com/results/new/17225' },
  { year: 2015, host: '', location: '', dates: '', results: 'https://web.archive.org/web/2016/https://www.uspsa.org/uspsa-display-match-results-detail.php?indx=13904' },
  { year: 2014, host: '', location: '', dates: '', results: 'https://web.archive.org/web/20150513221430/http://uspsaalabamasection.org/scores/AL2014Results.html' },
  { year: 2013, host: '', location: '', dates: '', results: 'https://web.archive.org/web/20131207034537/http://uspsaalabamasection.org/scores/AL2013Results.html' },
  { year: 2012, host: '', location: '', dates: '', results: 'https://web.archive.org/web/20131207034349/http://uspsaalabamasection.org/scores/AL2012Results.html' },
  { year: 2011, host: '', location: '', dates: '', results: 'https://web.archive.org/web/20131207032823/http://uspsaalabamasection.org/scores/AL2011Results.html' },
  { year: 2010, host: '', location: '', dates: '', results: 'https://web.archive.org/web/20131207033410/http://uspsaalabamasection.org/scores/AL2010Results.html' },
];

// Bylaws versions. The current file is the 2019 revision recovered from the
// Wayback Machine. TODO: replace with the signed current copy from the SC.
export const BYLAWS = {
  current: { label: 'Alabama Section Bylaws (rev. March 25, 2019)', file: '/docs/alabama-section-bylaws-2019.pdf' },
  history: [
    { label: '2019 revision', file: '/docs/alabama-section-bylaws-2019.pdf' },
    { label: '2017 revision (archive.org)', file: 'https://web.archive.org/web/20180831071808/http://uspsaalabamasection.org/docs/alabamasectionbylaws20170418.pdf' },
    { label: '2015 revision (archive.org)', file: 'https://web.archive.org/web/20160324075705/http://uspsaalabamasection.org/docs/al_section_bylaws_20150101.pdf' },
    { label: '2013 revision (archive.org)', file: 'https://web.archive.org/web/20131207034027/http://uspsaalabamasection.org/docs/al_section_bylaws_20130201.pdf' },
  ],
};

export const USPSA_LINKS = [
  { label: 'USPSA.org', url: 'https://uspsa.org' },
  { label: 'USPSA Area 6', url: 'https://uspsa.org/area6' },
  { label: 'USPSA Bylaws', url: 'https://uspsa.org/documents/bylaws/Current.pdf' },
  { label: 'Section Operations & Governance Policy', url: 'https://s3.uspsa.io/bylaws/OCT2025/USPSA%20-%20Section%20Operations%20And%20Governance%20Policy.pdf' },
  { label: 'Nationals Slot Policy', url: 'https://uspsa.org/policies/Nationals-Policies' },
  { label: 'USPSA Rulebooks', url: 'https://uspsa.org/rules' },
  { label: 'NROI (Range Officer Institute)', url: 'https://uspsa.org/nroi' },
  { label: 'PractiScore', url: 'https://practiscore.com' },
];
