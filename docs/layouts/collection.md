---
layout: collection
order: 4
title: Collection
description: Layout for a collection of pages.
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
The `collection` layout is designed for listing documents.

## Front matter properties

```yaml
layout: collection
includeInBreadcrumbs: # Show link to page in any breadcrumbs. Default is `false`
order: # Adjust position of page in side navigation
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
collection: # Name of collection. Default is ‘Posts’
pagination: # Required. See https://www.11ty.dev/docs/pagination/
  data: # Required. Collection to show
  size: # Required. Number of items to show on each page
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
