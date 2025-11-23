---
title: Page
description: Simple layout designed for maximum flexibility of content.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/page){target=example}

To use this layout, make `page` the value for a page’s `layout` front matter option:

```yaml
---
layout: page
title: Page title
---

Page content
```

## Showing previous and next pages

To link pages in a series, add `showPagination: true` to the page’s front matter options. This adds previous and next links to the bottom of the page.

Pages get ordered by `title`. To set a specific order, use the `order` front matter option:

```yaml
---
layout: page
title: Second page title
order: 2
---

This is the second page
```

## Front matter options

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

| Name           | Type    | Description                                                 |
| -------------- | ------- | ----------------------------------------------------------- |
| showPagination | boolean | Show previous/next pagination links at the foot of the page |
