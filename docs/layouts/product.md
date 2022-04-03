---
layout: product
order: 5
title: Product page
description: Layout for a product or marketing page.
startButton: true
image:
  src: /assets/homepage-illustration.png
  alt: The Eleventy mascot floating above a laptop.
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
The `product` layout is designed for home and product pages, based on [Product Page Example](https://github.com/alphagov/product-page-example).

## Front matter properties

```yaml
layout: product
includeInBreadcrumbs: # Show link to page in any breadcrumbs. Default is `false`
order: # Adjust position of page in side navigation
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
startButton: # Optional
  text: # Label for start button
  href: # Link for start button
image:
  src: # Image source path for hero image.
  alt: # Textual alternative for hero image.
  ogImage: # Boolean. Whether to use image as share image as well
ogImage: # Open Graph image. Overrides image (if image.ogImage is true)
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
