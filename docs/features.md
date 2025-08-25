---
layout: sub-navigation
order: 2
title: Features
sectionKey: Features
description: Add extra features to help users browse your site.
---

The GOV.UK Eleventy Plugin makes it easy to add common website features and pages. Choose from:

{% for page in collections.feature %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

> [!NOTE]
> If you have pages that write to the same location as a feature template, Eleventy will throw an `DuplicatePermalinkOutputError` error. Use distinct `permalink` values to resolve any conflicts.

## Turn off the 404 error page and sitemap

The plugin creates 404 page not found and sitemap pages by default. You can turn these off by setting their options to `false`:

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register and configure the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    templates: {
      error404: false,
      sitemap: false
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
    }
  }
};
```
