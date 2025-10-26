---
title: Search
description: Make it easier for readers to search for content on your site.
---

The GOV.UK Eleventy Plugin makes it easy to add search to your website.

It works by creating a search index each time you build your site. This JSON file contains the title, description and URL of every page, plus a list of words that appear on that page.

> [!NOTE]
> View an [example search index (JSON, opens in a tab)](/example/search-index.json){target=example}

This search index provides suggestions when users type in the search box in your site’s header or service navigation.

## Configure the search index

To enable search indexing, set `templates.searchIndex` to `true` in your plugin options.

Or, you can customise the search index by using these options:

| Name      | Type   | Description                                                                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| permalink | string | Sets the file name and location. Default is `/search-index.json`. Set to `false` to disable writing this file to the output folder. |

## Add a search bar to your site’s header or service navigation

Add the `permalink` value to the corresponding plugin options for `header.search` or `serviceNavigation.search`. For example:

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    }
  })
}
```
