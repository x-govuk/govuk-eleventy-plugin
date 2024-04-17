---
order: 4
title: Collection
description: Layout for a paginated list of pages.
---

> View an <a href="/example-layouts/collection" target="_blank">example page that uses this layout (opens in a new tab)</a>

To use this layout, make `collection` the value for a page’s `layout` key.

You will also need to say which pages should be listed, by using the options under the `pagination` key:

```yaml
---
layout: collection
title: Page title
paginationHeading: Posts
pagination:
  data: collections.post
  size: 20
  reverse: true
---

Page introduction content (optional).
```

In addition to [common front matter options](/layouts#common-front-matter-options), this layout accepts the following options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "pagination" },
      { text: "object" },
      { text: "**Required.** Pages to show in the paginated list. Learn more about [pagination](https://www.11ty.dev/docs/pagination/) in the documentation for Eleventy." | markdown }
    ],
    [
      { text: "pagination.data" },
      { text: "string" },
      { text: "The pages that should be listed, usually a reference to a [collection](https://www.11ty.dev/docs/collections/)" | markdown }
    ],
    [
      { text: "pagination.size" },
      { text: "number" },
      { text: "The number of items to list" }
    ],
    [
      { text: "pagination.reverse" },
      { text: "boolean" },
      { text: "Set to `true` to list the items in reverse date order" | markdown }
    ],
    [
      { text: "paginationHeading" },
      { text: "string" },
      { text: "Heading for the list of paginated pages." }
    ]
  ]
}) }}
