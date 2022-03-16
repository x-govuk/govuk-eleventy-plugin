---
layout: post
order: 2
title: Post
description: A date-based post
date: 2011-11-11
image:
  src: /assets/images/govuk-opengraph-image.png
  alt: A crown icon above the words GOV.UK.
  caption: The GOV.UK logo
authors:
  - name: William Ewart Gladstone
    url: https://www.gov.uk/government/history/past-prime-ministers/william-ewart-gladstone
  - name: Benjamin Disraeli
    url: https://www.gov.uk/government/history/past-prime-ministers/benjamin-disraeli-the-earl-of-beaconsfield
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
image: # Optional.
  src: # Image shown above the post and in Open Graph image
  alt: # Alternative text for image
  caption: # Caption for image
author: # Optional.Author name
author: # Optional.
  - name: # Author name
    url: # Author url
authors:
  - name: # Author name
    url: # Author url
related: # Optional. Related links appear in sidebar
  title: # Defaults to ‘Related links’
    - text: # Title of related link
      href: # URL for related link
```
