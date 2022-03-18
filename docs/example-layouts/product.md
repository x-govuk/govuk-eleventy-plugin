---
layout: product
order: 5
title: Product
description: A product page.
startButton: true
image:
  src: /images/homepage-illustration.png
  alt: The Eleventy mascot floating above a laptop.
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
```

View [the source for this page]({{ viewSource }}) on GitHub
