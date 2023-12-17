---
layout: post
order: 3
title: Post
description: Layout for date-based content, such as blog posts or news items.
date: 2011-12-21
modified: 2012-12-22
image:
  src: /assets/images/govuk-opengraph-image.png
  alt: A crown icon above the words GOV.UK.
  caption: The GOV.UK logo
  opengraphImage: true
authors:
  - name: William Ewart Gladstone
    url: https://www.gov.uk/government/history/past-prime-ministers/william-ewart-gladstone
  - name: Benjamin Disraeli
    url: https://www.gov.uk/government/history/past-prime-ministers/benjamin-disraeli-the-earl-of-beaconsfield
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
tags:
  - example tag
---

Use front matter options to customise the appearance, content and behaviour of this layout.

For example, this page has the following options:

```yaml
layout: post
order: 3
title: Post
description: Layout for date-based content, such as blog posts or news items.
date: 2011-12-21
modified: 2012-12-22
image:
  src: /assets/images/govuk-opengraph-image.png
  alt: A crown icon above the words GOV.UK.
  caption: The GOV.UK logo
authors:
  - name: William Ewart Gladstone
    url: https://www.gov.uk/government/history/past-prime-ministers/william-ewart-gladstone
  - name: Benjamin Disraeli
    url: https://www.gov.uk/government/history/past-prime-ministers/benjamin-disraeli-the-earl-of-beaconsfield
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
tags:
  - example tag
```

{% from "govuk/components/details/macro.njk" import govukDetails %}
{% set detailsText %}{% include "../includes/front-matter-options.md" %}{% endset %}
{{ govukDetails({
  summaryText: "Common front matter options",
  html: detailsText
}) }}

In addition to the common front matter options, this layout also accepts the following options:

| Name                     | Type                       | Description                                                                                  |
| :----------------------- | :------------------------- | :------------------------------------------------------------------------------------------- |
| **author**               | string&nbsp;or&nbsp;object | Post author.                                                                                 |
| **author.name**          | string                     | Name of post author. Overrides any single value given for author.                            |
| **author.url**           | string                     | URL for website of post author.                                                              |
| **authors**              | array                      | Post authors. Overrides any value(s) given for author.                                       |
| **authors.name**         | string                     | Name of post author.                                                                         |
| **authors.url**          | string                     | URL for website of post author.                                                              |
| **date**                 | string                     | Date post was published using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601). |
| **image**                | object                     | Image shown above post content.                                                              |
| **image.src**            | string                     | Path to post image.                                                                          |
| **image.alt**            | string                     | Alternative text for post image.                                                             |
| **image.caption**        | string                     | Caption shown below post image.                                                              |
| **image.opengraphImage** | boolean                    | Whether image should also be used as the page’s Open Graph share image.                      |
| **modified**             | string                     | Date post was updated using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).   |
| **tags**                 | Array                      | List of tags post relates to                                                                 |
