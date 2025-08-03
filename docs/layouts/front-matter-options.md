---
title: Front matter options
---

All layouts can accept the following [front matter data](https://www.11ty.dev/docs/data-frontmatter/) to customise their appearance, content and behaviour:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Common front matter options",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "aside" },
      { text: "object" },
      { text: "Small portion of content that is indirectly related to the main content" }
    ],
    [
      { text: "aside.title" },
      { text: "string" },
      { text: "Title for aside" }
    ],
    [
      { text: "aside.content" },
      { text: "string" },
      { text: "Content for aside. Accepts Markdown." }
    ],
    [
      { text: "description" },
      { text: "string" },
      { text: "Page description" }
    ],
    [
      { text: "includeInBreadcrumbs" },
      { text: "boolean" },
      { text: "Include page as the last item in any breadcrumbs (default is `false`)" | markdown }
    ],
    [
      { text: "layout" },
      { text: "string" },
      { text: "Page layout" }
    ],
    [
      { text: "opengraphImage" },
      { text: "object" },
      { text: "Open Graph image that appears on social media networks" }
    ],
    [
      { text: "opengraphImage.src" },
      { text: "string" },
      { text: "Path to Open Graph image. Can be a relative or absolute URL. This value overrides `opengraphImageUrl` in plugin options." | markdown }
    ],
    [
      { text: "opengraphImage.alt" },
      { text: "string" },
      { text: "Alternative text for Open Graph image" }
    ],
    [
      { text: "order" },
      { text: "integer" },
      { text: "Ranking of page in navigation. Lower numbers appear before pages with a higher number" }
    ],
    [
      { text: "theme" },
      { text: "string" },
      { text: "Common title page sits under in sub navigation" | markdown }
    ],
    [
      { text: "title" },
      { text: "string" },
      { text: "Page title" }
    ],
    [
      { text: "related" },
      { text: "object" },
      { text: "Related links section. See [section](#section)." | markdown }
    ],
    [
      { text: "related.sections" },
      { text: "Array" },
      { text: "Related links sections. See [section](#section)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "section" },
  caption: "Options for section",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "title" },
      { text: "string" },
      { text: "Title for group of related links (default is `Related content`)" }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "See [items](#items)" | markdown }
    ],
    [
      { text: "subsections" },
      { text: "Array" },
      { text: "Subsections containing related links" }
    ],
    [
      { text: "subsections[].title" },
      { text: "string" },
      { text: "Title for a subsection of related links" }
    ],
    [
      { text: "subsections[].items" },
      { text: "Array" },
      { text: "Related items in a subsection. See [items](#items)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "items" },
  caption: "Options for items",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "text" },
      { text: "string" },
      { text: "Title of related content" }
    ],
    [
      { text: "href" },
      { text: "string" },
      { text: "Link for the related content" }
    ]
  ]
}) }}
