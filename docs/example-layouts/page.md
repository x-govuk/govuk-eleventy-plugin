---
layout: page
order: 1
title: Page
description: A simple page.
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
The `page` layout is the simplest of layouts available. It is designed to allow maximum flexibility of the layout and type of page content.

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
