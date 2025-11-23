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

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

| Name           | Type    | Description                                                 |
| -------------- | ------- | ----------------------------------------------------------- |
| showPagination | boolean | Show previous/next pagination links at the foot of the page |
