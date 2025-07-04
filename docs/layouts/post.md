---
title: Post
description: Layout for date-based content, such as blog posts or news items.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/post){target=example}

To use this layout, make `post` the value for a page’s `layout` key:

```yaml
---
layout: post
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout accepts the following options:

| Name           | Type                    | Description                                                                                             |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| author         | string, object or array | Author name, or [author](#options-for-author-object) object. Also accepts an array of `author` objects. |
| date           | string                  | Date post was published (in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601))                  |
| image          | object                  | Image shown above post content. See [options for image](#options-for-image-object).                     |
| modified       | string                  | Date post was updated (in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601))                    |
| showPagination | boolean                 | Show previous/next pagination links at the foot of the page                                             |
| tags           | array                   | List of tags post relates to                                                                            |

## Options for `author` object

| Name        | Type   | Description                    |
| ----------- | ------ | ------------------------------ |
| author.name | string | Name of post author            |
| author.url  | string | URL for website of post author |

## Options for `image` object

| Name           | Type    | Description                                                            |
| -------------- | ------- | ---------------------------------------------------------------------- |
| src            | string  | Path to post image                                                     |
| alt            | string  | Alternative text for post image                                        |
| caption        | string  | Caption shown below post image                                         |
| opengraphImage | boolean | Whether image should also be used as the page’s Open Graph share image |
