---
title: Page with sub navigation
description: Layout with sub navigation.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/page-with-sub-navigation){target=example}

This layout offers a page with sub navigation, appearing to the left of content on wider viewports, and above on narrower ones.

To use this layout, make `sub-navigation` the value for a page’s `layout` front matter option.

The sub navigation shows all pages beneath your site’s home page. To show child pages for a different page, use the `sectionKey` front matter option to specify the parent page key.

You can set page keys using the `eleventyNavigation.key` front matter option. If you do not set this, a page `title` will be its key.

```yaml
---
layout: sub-navigation
title: Page title
sectionKey: Page title
---

Page content
```

## Showing previous and next pages

To link pages in a series, add `showPagination: true` to the page’s front matter options. This adds previous and next links to the bottom of the page.

Pages get ordered by `title`. To set a specific order, use the `order` front matter option:

```yaml
---
layout: sub-navigation
title: Second page title
order: 2
---

This is the second page
```

## Front matter options

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

| Name           | Type    | Description                                                                                                                                                              |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sectionKey     | string  | Parent navigation key (typically a page title) to show items below in the sub navigation (default is `homeKey` value provided in [plugin options](/get-started/options)) |
| showPagination | boolean | Show previous/next pagination links at the foot of the page                                                                                                              |
