---
title: Post
description: Layout for date-based content, such as blog posts or news items.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/post){target=example}

To use this layout, make `post` the value for a page’s `layout` key:

```yaml
---
layout: post
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout accepts the following options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Post front matter options",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "author" },
      { text: "string or object" },
      { text: "Post author" }
    ],
    [
      { text: "author.name" },
      { text: "string" },
      { text: "Name of post author. Overrides any single value given for author." }
    ],
    [
      { text: "author.url" },
      { text: "string" },
      { text: "URL for website of post author" }
    ],
    [
      { text: "authors" },
      { text: "Array" },
      { text: "Post authors. Overrides any value(s) given for author" }
    ],
    [
      { text: "authors.name" },
      { text: "string" },
      { text: "Name of post author" }
    ],
    [
      { text: "authors.url" },
      { text: "string" },
      { text: "URL for website of post author" }
    ],
    [
      { text: "date" },
      { text: "string" },
      { text: "Date post was published using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)" | markdown }
    ],
    [
      { text: "image" },
      { text: "object" },
      { text: "Image shown above post content" }
    ],
    [
      { text: "image.src" },
      { text: "string" },
      { text: "Path to post image" }
    ],
    [
      { text: "image.alt" },
      { text: "string" },
      { text: "Alternative text for post image" }
    ],
    [
      { text: "image.caption" },
      { text: "string" },
      { text: "Caption shown below post image" }
    ],
    [
      { text: "image.opengraphImage" },
      { text: "boolean" },
      { text: "Whether image should also be used as the page’s Open Graph share image" }
    ],
    [
      { text: "modified" },
      { text: "string" },
      { text: "Date post was updated using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)" | markdown }
    ],
    [
      { text: "tags" },
      { text: "Array" },
      { text: "List of tags post relates to" }
    ]
  ]
}) }}
