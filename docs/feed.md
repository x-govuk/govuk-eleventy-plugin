---
layout: sub-navigation
order: 8
title: Adding a feed
description: Allow people to subscribe to your posts and read them in a feed reader
---

You can add a feed using the [XML Atom format](<https://en.wikipedia.org/wiki/Atom_(web_standard)>) by following these instructions.

## Create a feed

To create a feed, add a file named `feed.njk` with the following content:

```yaml
---
eleventyExcludeFromCollections: true
layout: feed
permalink: /feed.xml
pagination:
  data: collections.post
  size: 20
  reverse: true
---
```

The `permalink` value is the location of the generated feed.

## Create a collection of pages

The feed will include all pages in the collection referenced by the `data` key of the `pagination` object.

You can create a collection by adding some code to your `eleventy.config.js`:

```js
eleventyConfig.addCollection('post', (collection) => {
  return collection.getFilteredByGlob('app/posts/*.md')
})
```

## Add the URL of your feed to your options

To make the feed discoverable, add the full URL of your feed as `feedUrl` within the options for this plugin in your `.eleventy.config.js` options file:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    feedUrl: 'feed.xml'
  })
}
```

This will then add an invisible `<link>` to the feed within the `<head>` of every page to enable feed readers to easily find the feed.

You may also want to link to the feed within your site itself.
