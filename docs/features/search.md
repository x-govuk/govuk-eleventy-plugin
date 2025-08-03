---
title: Search
description: Make it easier for readers to search for content on your site.
---

The GOV.UK Eleventy Plugin makes it easy to add search functionality to your website. Follow these instructions to enable this feature.

## Create a search index

The site search needs an index of your pages and the key words and phrases they contain.

To create the search index, add a file named `search.json.njk` with the following content:

```yaml
---
eleventyExcludeFromCollections: true
layout: search-index
permalink: /search.json
---
```

The `permalink` value is the location of the generated file.

## Create a sitemap

The search feature works when JavaScript is available, falling back to a link to a sitemap.

Create the search index by creating a page that uses the `sitemap` layout:

```yaml
---
eleventyExcludeFromCollections: true
layout: sitemap
permalink: /sitemap
---
```

> View an <a href="/example/sitemap" target="_blank">example sitemap (opens in a new tab)</a>

## Add a search input to the site header

Add the `permalink` values to the corresponding plugin options for `header.search`. For example:

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  })
}
```
