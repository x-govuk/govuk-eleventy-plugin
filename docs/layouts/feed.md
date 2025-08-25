---
title: RSS feed
theme: Feature layouts
---

The [RSS feed feature](/features/feed) uses this layout. To override the design of this layout, create a Nunjucks template called `feed.njk` and save it in your [configured layout directory](https://www.11ty.dev/docs/config/#directory-for-layouts-optional).

{% set url = options.url | replace("https://", "feed://") %}

> [!NOTE]
> View an [example RSS feed (may open in a feed reader)]({{ "/example/feed.xml" | htmlBaseUrl(url) }})
