---
title: A Markdown style guide
description: A quick tour of every formatting feature this blog supports, from code blocks to tables.
pubDate: 2026-09-22
tags: [writing, reference]
---

This post doubles as a reference for how things render here.

## Text

Regular paragraphs, **bold**, _italic_, ~~strikethrough~~, and `inline code`.
[Links look like this](https://astro.build).

## Lists

1. Ordered lists
2. Work as expected
   - With nested
   - Unordered items

## Code

Syntax highlighting adapts to light and dark mode:

```ts
type Post = { title: string; pubDate: Date };

export function newest(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}
```

```bash
npm run dev
```

## Tables

| Feature        | Supported |
| -------------- | --------- |
| Dark mode      | ✅        |
| RSS            | ✅        |
| Tags           | ✅        |
| MDX components | ✅        |

## Quotes

> Simplicity is prerequisite for reliability.
> — Edsger W. Dijkstra

---

That's it!
