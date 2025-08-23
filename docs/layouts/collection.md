---
title: Collection
description: Layout for a paginated list of pages.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/collection){target=example}

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

In addition to [common front matter options](/layouts/front-matter-options), this layout accepts the following options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Collection front matter options",
  captionClasses: "govuk-table__caption--m",
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
      { text: "Pages to list, typically a reference to a [collection](https://www.11ty.dev/docs/collections/)" | markdown }
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
      { text: "Heading for the list of paginated pages" }
    ]
  ]
}) }}
