---
layout: post
order: 2
title: Post
description: A date-based post
date: 2011-11-11
related:
  items:
  - text: Another page
    href: "#"
  - text: Yet another page
    href: "#"
---
The `post` layout is designed for date-based content, such as blog posts or news items, with the optional to link to related content.

## Front matter properties

```yaml
layout: post
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
date: # Optional. See: https://www.11ty.dev/docs/dates/
related: # Optional. Related links appear in sidebar
  title: # Defaults to ‘Related links’
  - text: # Title of related link
    href: # URL for related link
```
