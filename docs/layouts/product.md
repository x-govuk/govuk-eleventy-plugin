---
layout: product
order: 5
title: Product page
description: Layout for a product or marketing page based on the [Product Page Example](https://github.com/alphagov/product-page-example).
startButton:
  href: "#"
  text: Start button
image:
  src: /assets/homepage-illustration.png
  alt: The Eleventy mascot floating above a laptop.
aside:
  title: Aside
  content: | 
    A small portion of content that is **indirectly** related to the main content.
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
Use front matter options to customise the appearance, content and behaviour of this layout.

For example, this page has the following options:

```yaml
layout: product
order: 5
title: Product page
description: Layout for a product or marketing page based on the [Product Page Example](https://github.com/alphagov/product-page-example).
startButton:
  href: "#"
  text: Start button
image:
  src: /assets/homepage-illustration.png
  alt: Eleventy’s possum mascot hanging on a red balloon and floating above a laptop.
aside:
  title: Aside
  content: | 
    A small portion of content that is **indirectly** related to the main content.
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
```

{% from "govuk/components/details/macro.njk" import govukDetails %}
{% set detailsText %}{% include "../includes/front-matter-options.md" %}{% endset %}
{{ govukDetails({
  summaryText: "Common front matter options",
  html: detailsText
}) }}

### Additional front matter options

In addition to the common front matter options, this layout also has the following options:

| Name | Type | Description |
| :--- | :--- | :---------- |
| **startButton** | string | Start button. Appears below the title and any description. |
| **startButton.text** | string | Text for the start button. Default is `'Get started'`. |
| **startButton.href** | string | The URL that the start button should link to. |
| **image** | object | Product image. Appears to the right of the page title, and is hidden on mobile. |
| **image.src** | string | Path to product image. |
| **image.alt** | string | Alternative text for product image. |
