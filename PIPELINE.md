# Article Pipeline

## Flow

1. **Project wraps up** — work is done, we have something worth writing about
2. **Draft article** — Snif writes first draft on a branch in `csi-lk/csi.lk`
3. **Open PR** — PR to `master`, tagged for review
4. **Review via PR** — Silk reviews, leaves comments, Snif iterates
5. **Merge & publish** — Silk merges, site deploys
6. **Archive** — archive the project's Discord channel

## Article format

### Front matter

```yaml
---
title: Human-readable title
description: One-liner for SEO/previews
permalink: articles/slug-here.html
tags: article
keywords: comma, separated, seo, keywords
layout: article
date: YYYY-MM-DD
---
```

### File

- Location: `src/articles/slug-with-hyphens.md`
- Branch naming: `article/short-description`
- Commit style: `docs: description` (conventional commits)

### Content style

- **Tell a story** — goal, journey, outcome. Not a tutorial/README.
- **Talk through problems hit** and how they were solved
- **First person**, casual tone, opinionated
- **Short** — keep it succinct, no padding
- **One code block max** if config/commands are genuinely useful
- **End with outcome**, not a generic "conclusion"

### What makes a good article

- Started with a real problem or goal
- Hit some friction along the way (or didn't — and that's the story)
- Reader walks away understanding the *why*, not just the *how*
