---
layout: post
order: 3
title: Post
description: Layout for a date-based post.
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
  sections:
    - title: Related links
      items:
        - text: Layouts
          href: /layouts
        - text: Options
          href: /options
      subsections:
        - title: Eleventy documentation
          items:
          - text: Front matter data
            href: https://www.11ty.dev/docs/data-frontmatter/
---

The `post` layout is designed for date-based content, such as blog posts or news items, with the optional to link to related content.

## Front matter properties

```yaml
layout: post
includeInBreadcrumbs: # Show link to page in any breadcrumbs. Default is `false`
order: # Number. Adjust position of page in side navigation
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
date: # Date. See https://www.11ty.dev/docs/dates/
image:
  src: # Image shown above post content
  alt: # Alternative text for image
  caption: # Caption for image
  ogImage: # Boolean. Whether to use image as share image as well
ogImage: # Open Graph image. Overrides image (if image.ogImage is true)
  src: # Image shown when sharing post
  alt: # Alternative text for share image
author: # Author name
authors: # Author names (supersedes `author` value)
  - name: # Author name
    url: # Author url
  - name: # Author name
    url: # Author url
related: # Related links (appears within sidebar)
  sections:
    - title: # Default is ‘Related content’
      items:
        - text: # Title of related link
          href: # URL for related link
      subsections:
        - title: # Title for subsection
          items:
          - text: # Title of link in subsection
            href: # URL for link in subsection
```

View [the source for this page]({{ viewSource }}) on GitHub
