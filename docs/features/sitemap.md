---
title: Sitemap
description: Help readers find content on your site.
---

The GOV.UK Eleventy Plugin makes it easy to add a sitemap to your website.

To create a sitemap, add a file named `sitemap.njk` with the following content:

```yaml
---
eleventyExcludeFromCollections: true
layout: sitemap
title: Sitemap
permalink: /sitemap/
---
```

The `permalink` value is the location of the generated sitemap page.
