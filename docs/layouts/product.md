---
title: Product page
description: Layout for product and marketing pages.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/){target=example}

This layout, based on the component used on [GOV.UK product pages](https://github.com/alphagov/product-page-example), can be useful if you need a product or marketing page.

To use this layout, make `product` the value for a page’s `layout` key:

```yaml
---
layout: product
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

| Name               | Type    | Description                                                               |
| ------------------ | ------- | ------------------------------------------------------------------------- |
| inverseMasthead    | boolean | Use the masthead with a dark background (default is `true`)               |
| startButton        | object  | Start button. Appears below the title and any description.                |
| startButton.text   | string  | Text for the start button (default is `Get started`)                      |
| startButton.href   | string  | URL or page the start button should link to                               |
| image              | object  | Product image. Appears to the right of the page title on desktop layouts. |
| image.src          | string  | Path to product image                                                     |
| image.alt          | string  | Alternative text for product image                                        |
| image.hideOnMobile | boolean | When true, the image is hidden on tablet breakpoint and below             |
