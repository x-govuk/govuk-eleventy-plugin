---
title: Page with sub navigation
description: Layout with sub navigation.
theme: Content presentation
---

> View an [example page that uses this layout (opens in a new tab)](/example/page-with-sub-navigation){target=example}

This layout offers a page with sub navigation, appearing to the left of content on wider viewports, and above on narrower ones.

To use this layout, make `sub-navigation` the value for a page’s `layout` key:

```yaml
---
layout: sub-navigation
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Page with sub navigation front matter options",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "sectionKey" },
      { text: "string" },
      { text: "Parent navigation key (typically a page title) to show items below in the sub navigation (default is `homeKey` value provided in [plugin options](/get-started/options))" | markdown }
    ]
  ]
}) }}
