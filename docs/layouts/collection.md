---
title: Collection
description: Layout for a paginated list of pages.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/collection){target=example}

To use this layout, make `collection` the value for a page’s `layout` front matter option.

To say which pages you want to list, use the [options](https://www.11ty.dev/docs/pagination/) under the `pagination` front matter option:

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

## Front matter options

In addition to [common front matter options](/layouts/front-matter-options), this layout accepts the following options:

| Name               | Type    | Description                                                                                                                                                |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pagination         | object  | **Required.** Pages to show in the paginated list. Learn more about [pagination](https://www.11ty.dev/docs/pagination/) in the documentation for Eleventy. |
| pagination.data    | string  | Pages to list, typically a reference to a [collection](https://www.11ty.dev/docs/collections/)                                                             |
| pagination.size    | integer | The number of items to list                                                                                                                                |
| pagination.reverse | boolean | Set to `true` to list the items in reverse date order                                                                                                      |
| paginationHeading  | string  | Heading for the list of paginated pages                                                                                                                    |
