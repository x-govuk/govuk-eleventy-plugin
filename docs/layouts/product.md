---
order: 5
title: Product page
description: Layout for product and marketing pages.
---

> View an <a href="/example/product-page" target="_blank">example page that uses this layout (opens in a new tab)</a>

This layout, based on the component used on [GOV.UK product pages](https://github.com/alphagov/product-page-example), can be useful if you need a product or marketing page.

To use this layout, make `product` the value for a page’s `layout` key:

```yaml
---
layout: product
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
      { text: "startButton" },
      { text: "object" },
      { text: "Start button. Appears below the title and any description." }
    ],
    [
      { text: "startButton.text" },
      { text: "string" },
      { text: "Text for the start button (default is ‘Get started’)." }
    ],
    [
      { text: "startButton.href" },
      { text: "string" },
      { text: "URL or page the start button should link to." }
    ],
    [
      { text: "image" },
      { text: "object" },
      { text: "Product image. Appears to the right of the page title, and is hidden on mobile." }
    ],
    [
      { text: "image.src" },
      { text: "string" },
      { text: "Path to product image." }
    ],
    [
      { text: "image.alt" },
      { text: "string" },
      { text: "Alternative text for product image." }
    ],
    [
      { text: "image.hideOnMobile" },
      { text: "boolean" },
      { text: "When true, the image is hidden on tablet breakpoint and below." }
    ]
  ]
}) }}
