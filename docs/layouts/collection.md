---
layout: collection
order: 4
title: Collection
description: Layout for a paginated list of pages.
paginationHeading: Example collection
pagination:
  data: example
  size: 10
example:
  - url: "#"
    data:
      date: 2021-08-17
      title: Design changes after testing round three
      description: Here are the changes we made after user research.
  - url: "#"
    data:
      date: 2021-09-08
      title: Helping users better find our service
      description: Reviewing the user onboarding journey.
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
layout: collection
order: 4
title: Collection
description: Layout for a paginated list of pages.
paginationHeading: Example collection
pagination:
  data: example
  size: 10
example:
  - url: "#"
    data:
      date: 2021-08-17
      title: Design changes after testing round three
      description: Here are the changes we made after user research.
  - url: "#"
    data:
      date: 2021-09-08
      title: Helping users better find our service
      description: Reviewing the user onboarding journey.
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

In addition to the common front matter options, this layout also accepts the following options:

| Name | Type | Description |
| :--- | :--- | :---------- |
| **paginationHeading** | string | Heading for the list of paginated pages. |
| **pagination** | object | **Required.** Pages to show in the paginated list. Learn more about [pagination](https://www.11ty.dev/docs/pagination/) in the documentation for Eleventy. |
