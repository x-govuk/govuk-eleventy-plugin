---
order: 4
title: Collection
description: Layout for a paginated list of pages.
---

> View an <a href="/example-layouts/collection" target="_blank">example page that uses this layout (opens in a new tab)</a>

To use this layout, make `collection` the value for a page’s `layout` key:

```yaml
---
layout: collection
title: Page title
---

Page content
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
      { text: "paginationHeading" },
      { text: "string" },
      { text: "Heading for the list of paginated pages." }
    ]
  ]
}) }}
