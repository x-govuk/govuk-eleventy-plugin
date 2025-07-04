---
order: 1
title: Page
description: Simple layout designed for maximum flexibility of content.
---

> View an <a href="/example/page" target="_blank">example page that uses this layout (opens in a new tab)</a>

To use this layout, make `page` the value for a page’s `layout` key:

```yaml
---
layout: page
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts#common-front-matter-options), this layout also accepts the following options:

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
      { text: "showPagination" },
      { text: "boolean" },
      { text: "Show previous and next links." }
    ]
  ]
}) }}
