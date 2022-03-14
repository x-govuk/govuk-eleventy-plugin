---
layout: page
order: 1
title: Page
description: A simple page
related:
  items:
  - text: Another page
    href: "#"
  - text: Yet another page
    href: "#"
---
The `page` layout is the simplest of layouts available. It is designed to allow maximum flexibility of the layout and type of page content.

## Front matter properties

```yaml
layout: page
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
related: # Optional. Related links appear in sidebar
  title: # Defaults to ‘Related links’
  - text: # Title of related link
    href: # URL for related link
```
