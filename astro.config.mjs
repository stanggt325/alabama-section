// @ts-check
import { defineConfig } from 'astro/config';

// Static output only. Cloudflare Pages serves ./dist as-is; no adapter needed.
// Change `site` once the production domain is decided (used for canonical URLs + sitemap).
export default defineConfig({
  site: 'https://alabamauspsa.org',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
