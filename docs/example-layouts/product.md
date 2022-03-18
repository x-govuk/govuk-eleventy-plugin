---
layout: product
order: 5
title: Product
description: A product page.
startButton: true
image:
  src: /images/homepage-illustration.png
  alt: The Eleventy mascot floating above a laptop.
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
The `product` layout is designed for home and product pages, based on [Product Page Example](https://github.com/alphagov/product-page-example).

## Front matter properties

```yaml
layout: product
order: # Adjust position of page in side navigation
title: # Appears at the top of the page and in the <title>
description: # Appears below page title and in page <meta>
startButton: # Optional
  text: # Label for start button
  href: # Link for start button
image:
  src: # Image source path for hero image.
  alt: # Textual alternative for hero image.
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
