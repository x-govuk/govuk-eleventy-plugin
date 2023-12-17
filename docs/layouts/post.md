---
order: 3
title: Post
description: Layout for date-based content, such as blog posts or news items.
---

> View an <a href="/example-layouts/post" target="_blank">example page that uses this layout (opens in a new tab)</a>

To use this layout, make `post` the value for a page’s `layout` key:

```yaml
---
layout: post
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts#common-front-matter-options), this layout accepts the following options:

| Name                     | Type                       | Description                                                                                  |
| :----------------------- | :------------------------- | :------------------------------------------------------------------------------------------- |
| **author**               | string&nbsp;or&nbsp;object | Post author.                                                                                 |
| **author.name**          | string                     | Name of post author. Overrides any single value given for author.                            |
| **author.url**           | string                     | URL for website of post author.                                                              |
| **authors**              | array                      | Post authors. Overrides any value(s) given for author.                                       |
| **authors.name**         | string                     | Name of post author.                                                                         |
| **authors.url**          | string                     | URL for website of post author.                                                              |
| **date**                 | string                     | Date post was published using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601). |
| **image**                | object                     | Image shown above post content.                                                              |
| **image.src**            | string                     | Path to post image.                                                                          |
| **image.alt**            | string                     | Alternative text for post image.                                                             |
| **image.caption**        | string                     | Caption shown below post image.                                                              |
| **image.opengraphImage** | boolean                    | Whether image should also be used as the page’s Open Graph share image.                      |
| **modified**             | string                     | Date post was updated using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).   |
| **tags**                 | Array                      | List of tags post relates to                                                                 |
