---
layout: page
order: 1
title: Page
description: Layout for a simple page.
related:
  sections:
    - title: Related links
      items:
        - text: Layouts
          href: ../../layouts
        - text: Options
          href: ../../options
      subsections:
        - title: Eleventy documentation
          items:
          - text: Front matter data
            href: https://www.11ty.dev/docs/data-frontmatter/
---
The `page` layout is the simplest of layouts available. It is designed to allow maximum flexibility of the layout and type of page content.

## Front matter properties

```yaml
layout: page
includeInBreadcrumbs: # Show link to page in any breadcrumbs. Default is `false`
order: # Adjust position of page in side navigation
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
ogImage: # Open Graph image
  src: # Image shown when sharing post
  alt: # Alternative text for share image
related: # Related links (appears below content)
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
