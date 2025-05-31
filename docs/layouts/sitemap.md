---
order: 6
title: Sitemap
description: Layout for sitemaps.
---

> View an <a href="/example/sitemap" target="_blank">example page that uses this layout (opens in a new tab)</a>

This layout generates a page that outputs all the pages in the site in a nested list.

To use this layout, make `sitemap` the value for a page’s `layout` key:

```yaml
---
eleventyExcludeFromCollections: true
layout: sitemap
permalink: /sitemap
---
```
