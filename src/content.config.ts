import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Notices: the Alabama Section's official notifications, and nothing else.
// Elections, meetings, bylaws amendments, Nationals slot distribution, club
// affiliation changes. Not a news feed for USPSA, Area 6, or other Sections.
// One markdown file per notice under src/content/notices/.
const notices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notices' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // What kind of notice this is. Drives the badge and the filter on /notices/.
    category: z.enum([
      'election',
      'meeting',
      'bylaws',
      'nationals-slots',
      'championship',
      'clubs',
      'general',
    ]),
    summary: z.string(),
    // Keep on the home page until this date passes.
    pinnedUntil: z.coerce.date().optional(),
  }),
});

// Clubs: every USPSA-affiliated club that is a member of the Section.
const clubs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clubs' }),
  schema: z.object({
    name: z.string(),
    uspsaId: z.string(), // e.g. "AL05"
    city: z.string(),
    region: z.enum(['North', 'Central', 'East', 'South', 'Gulf Coast']),
    website: z.string().url().optional(),
    practiscore: z.string().url().optional(),
    facebook: z.string().url().optional(),
    // Free-text match cadence, e.g. "2nd Saturday monthly". Verify with the club.
    schedule: z.string().optional(),
    contact: z.string().optional(),
    address: z.string().optional(),
    mapUrl: z.string().url().optional(),
    active: z.boolean().default(true),
  }),
});

// Minutes: Executive Committee meeting minutes, one file per meeting.
const minutes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/minutes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['annual', 'regular', 'special']),
    location: z.string().optional(),
    quorum: z.boolean().optional(),
    pdf: z.string().optional(), // path under /public, e.g. /docs/minutes/2026-04-30.pdf
  }),
});

// Events: Section-level calendar. Alabama Section items ONLY: the Section
// Championship, Executive Committee meetings, elections, Section deadlines, and
// NROI seminars held in Alabama. Club monthly matches live on PractiScore. Other
// Sections' championships, Area 6, and Nationals dates are on uspsa.org, not here.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    kind: z.enum(['championship', 'major', 'meeting', 'election', 'seminar', 'deadline']),
    location: z.string().optional(),
    host: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { notices, clubs, minutes, events };
