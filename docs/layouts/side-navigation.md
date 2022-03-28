---
layout: side-navigation
order: 2
title: Page with side navigation
description: Layout with side navigation.
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
The `side-navigation` layout offers a page with navigation to the left of its content.

Use front matter options to customise the appearance, content and behaviour of this layout.

For example, this page has the following options:

```yaml
layout: side-navigation
order: 2
title: Page with side navigation
description: Layout with side navigation.
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
