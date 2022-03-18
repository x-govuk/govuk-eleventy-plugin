---
layout: side-navigation
order: 2
title: Page with side navigation
description: A page with side navigation.
related:
  sections:
    - title: Related links
      items:
        - text: Example layouts
          href: /example-layouts
        - text: Customisation
          href: /options
      subsections:
        - title: Eleventy documentation
          items:
          - text: Front matter data
            href: https://www.11ty.dev/docs/data-frontmatter/
---
The `side-navigation` layout is with navigation on the left side of the page.

## Front matter properties

```yaml
layout: page
order: # Adjust position of page in side navigation
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
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
