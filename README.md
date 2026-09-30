# Personal blog

A fast, minimal personal blog built with [Astro](https://astro.build).

- Markdown and MDX posts with type-checked frontmatter
- Light and dark themes (follows the system, with a toggle)
- Tags, reading time, posts grouped by year
- RSS feed, sitemap, Open Graph tags, canonical URLs
- Self-hosted fonts (Inter, Newsreader, JetBrains Mono), no third-party requests
- Deploys to GitHub Pages on every push to `main`

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
npm run preview  # serve the built site
```

Requires Node 22.12 or newer.

## Make it yours

1. Set your name, tagline, and links in `src/consts.ts`.
2. Edit the About page in `src/pages/about.md`.
3. Replace the sample posts in `src/content/blog/`.
4. Tweak colours and fonts in `src/styles/global.css`.

## Writing a post

Create `src/content/blog/my-post.md` (or `.mdx`):

```md
---
title: My post
description: One-sentence summary shown in lists and previews.
pubDate: 2026-10-01
tags: [notes]
draft: false # drafts appear in `npm run dev` only
---

Hello!
```

The file name becomes the URL: `/blog/my-post/`.

## Deploying

The workflow in `.github/workflows/deploy.yml` builds and publishes to GitHub
Pages. To enable it, go to **Settings → Pages** in the repository and set
**Source** to **GitHub Actions**, then push to `main`.

To host somewhere else (Netlify, Vercel, Cloudflare Pages), use `npm run build`
as the build command and `dist` as the output directory, and set the `SITE`
environment variable to your domain (e.g. `SITE=https://example.com`).
