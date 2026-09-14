// Dates in content frontmatter are calendar dates ("2026-04-30"), which YAML parses as
// UTC midnight. Format them in UTC so they never slide back a day in US timezones.
const LONG = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const SHORT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });

export const fmtDate = (d: Date) => LONG.format(d);

export function fmtRange(a: Date, b: Date) {
  const sameYear = a.getUTCFullYear() === b.getUTCFullYear();
  const sameMonth = sameYear && a.getUTCMonth() === b.getUTCMonth();
  if (sameMonth) return `${SHORT.format(a)}-${b.getUTCDate()}, ${a.getUTCFullYear()}`;
  if (sameYear) return `${SHORT.format(a)} - ${SHORT.format(b)}, ${a.getUTCFullYear()}`;
  return `${LONG.format(a)} - ${LONG.format(b)}`;
}

export const isUpcoming = (d: Date, now = new Date()) => d.getTime() >= now.getTime() - 86_400_000;
