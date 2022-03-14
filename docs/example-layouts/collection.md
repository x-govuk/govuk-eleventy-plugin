---
layout: collection
order: 4
title: Collection
description: A collection of pages
related:
  items:
  - text: Another page
    href: "#"
  - text: Yet another page
    href: "#"
---
The `collection` layout is designed for listing documents.

## Front matter properties

```yaml
layout: collection
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
related: # Optional. Related links appear in sidebar
  title: # Defaults to ‘Related links’
  - text: # Title of related link
    href: # URL for related link
collection: # Name of collection. Defaults is ‘Posts’
pagination:
  data: # Collection to show
  size: # Number of items to show on each page
```
