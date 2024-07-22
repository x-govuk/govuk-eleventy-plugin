---
layout: sub-navigation
order: 4
title: Layouts
description: Choose a layout to match the type of content you want write.
---

{% for page in collections.layout %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

## Common front matter options

Layouts can accept the following [front matter data](https://www.11ty.dev/docs/data-frontmatter/) to customise the appearance, content and behaviour of a layout.

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "layout" },
      { text: "string" },
      { text: "Page layout." }
    ],
    [
      { text: "includeInBreadcrumbs" },
      { text: "boolean" },
      { text: "Include page as the last item in any breadcrumbs (default is `false`)." | markdown }
    ],
    [
      { text: "order" },
      { text: "integer" },
      { text: "Ranking of page in navigation. Lower numbers appear before pages with a higher number." }
    ],
    [
      { text: "title" },
      { text: "string" },
      { text: "Page title." }
    ],
    [
      { text: "description" },
      { text: "string" },
      { text: "Page description." }
    ],
    [
      { text: "opengraphImage" },
      { text: "object" },
      { text: "Open Graph image that appears on social media networks." }
    ],
    [
      { text: "opengraphImage.src" },
      { text: "string" },
      { text: "Path to Open Graph image. Can be a relative or absolute URL. This value overrides `opengraphImageUrl` in plugin options." | markdown }
    ],
    [
      { text: "opengraphImage.alt" },
      { text: "string" },
      { text: "Alternative text for Open Graph image." }
    ],
    [
      { text: "aside" },
      { text: "object" },
      { text: "Small portion of content that is indirectly related to the main content." }
    ],
    [
      { text: "aside.title" },
      { text: "string" },
      { text: "Title for aside." }
    ],
    [
      { text: "aside.content" },
      { text: "string" },
      { text: "Content for aside. Accepts Markdown." }
    ],
    [
      { text: "related" },
      { text: "object" },
      { text: "Related links section. See [section](#section)." | markdown }
    ],
    [
      { text: "related.sections" },
      { text: "Array" },
      { text: "Multiple related links sections. See [section](#section)." | markdown }
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
      { text: "Title for group of related links (default is ‘Related content’)." }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "See [items](#items)." | markdown }
    ],
    [
      { text: "subsections" },
      { text: "Array" },
      { text: "Subsections containing related links." }
    ],
    [
      { text: "subsections[].title" },
      { text: "string" },
      { text: "Title for a subsection of related links." }
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
      { text: "Title of related content." }
    ],
    [
      { text: "href" },
      { text: "string" },
      { text: "Link for the related content." }
    ]
  ]
}) }}

## Overriding layouts

Layouts are registered with Eleventy by setting the `dir.layouts` key to point to the layout files installed in the package directory:

```js
const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    }
  }
};
```

If you want to use your own layouts, remove this value and set a value for [`dir.includes`](https://www.11ty.dev/docs/config/#directory-for-includes) (and optionally [`dir.layouts`](<https://www.11ty.dev/docs/config/#directory-for-layouts-(optional)>)).

You can use layouts provided by this plugin as a basis for your own. For example, to show a notification banner at the top of a page, extend the `page` layout:

```njk
{% raw %}{# Plugin layouts can be loaded from "layouts" #}
{% extends "layouts/page.njk" %}

{# Load any GOV.UK Frontend components #}
{% from "govuk/components/notification-banner/macro.njk" import govukNotificationBanner %}

{% block content %}
  {# Templates can include front matter data #}
  {{ govukNotificationBanner({
    text: "This page was last reviewed on " + (reviewed | date("d LLLL y")) + ".
    It needs to be reviewed again on " + (reviewAgain | date("d LLLL y")) + "."
  }) if reviewed and reviewAgain }}

  {{ appDocumentHeader({
    title: title,
    description: description
  }) }}

  {{ appProseScope(content) if content }}
{% endblock %}{% endraw %}
```
