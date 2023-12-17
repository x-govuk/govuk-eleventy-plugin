---
order: 5
title: Product page
description: Layout for product and marketing pages.
---

> View an <a href="/example-layouts/product" target="_blank">example page that uses this layout (opens in a new tab)</a>

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

| Name                 | Type   | Description                                                                     |
| :------------------- | :----- | :------------------------------------------------------------------------------ |
| **startButton**      | string | Start button. Appears below the title and any description.                      |
| **startButton.text** | string | Text for the start button. Default is `'Get started'`.                          |
| **startButton.href** | string | The URL that the start button should link to.                                   |
| **image**            | object | Product image. Appears to the right of the page title, and is hidden on mobile. |
| **image.src**        | string | Path to product image.                                                          |
| **image.alt**        | string | Alternative text for product image.                                             |
