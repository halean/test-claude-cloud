// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// SITE and BASE_PATH are set by the GitHub Pages workflow. Override them for
// other hosts (e.g. SITE=https://example.com BASE_PATH=/ npm run build).
export default defineConfig({
  site: process.env.SITE ?? 'https://example.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'min-light', dark: 'vitesse-black' },
    },
  },
});
