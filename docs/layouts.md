---
layout: sub-navigation
order: 3
title: Layouts
description: The plugin offers a number of layouts to match the type of content you want write.
---

{% for page in collections.layout %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

## Common front matter options

Layouts can accept the following [front matter data](https://www.11ty.dev/docs/data-frontmatter/) to customise the appearance, content and behaviour of a layout.

| Name                     | Type    | Description                                                                                                              |
| :----------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------- |
| **layout**               | string  | Page layout.                                                                                                             |
| **includeInBreadcrumbs** | boolean | Include page as the last item in any breadcrumbs. Default is `false`.                                                    |
| **order**                | number  | Ranking of page in navigation. Lower numbers appear before pages with a higher number.                                   |
| **title**                | string  | Page title.                                                                                                              |
| **description**          | string  | Page description.                                                                                                        |
| **opengraphImage**       | object  | Open Graph image that appears on social media networks.                                                                  |
| **opengraphImage.src**   | string  | Path to Open Graph image. Can be a relative or absolute URL. This value overrides `opengraphImageUrl` in plugin options. |
| **opengraphImage.alt**   | string  | Alternative text for Open Graph image.                                                                                   |
| **aside**                | object  | Small portion of content that is indirectly related to the main content.                                                 |
| **aside.title**          | string  | Title for aside.                                                                                                         |
| **aside.content**        | string  | Content for aside. Accepts Markdown.                                                                                     |
| **related**              | object  | Related links. See [related](#options-for-related).                                                                      |

### Options for related

With one section:

| Name                  | Type   | Description                                                       |
| :-------------------- | :----- | :---------------------------------------------------------------- |
| **title**             | string | Title for group of related links. Default is `'Related content'`. |
| **items**             | array  | See [items](#options-for-items).                                  |
| **subsections**       | array  | Title for sub-group of related links.                             |
| **subsections.title** | string |                                                                   |
| **subsections.items** | array  | See [items](#options-for-items).                                  |

With multiple sections:

| Name         | Type  | Description                        |
| :----------- | :---- | :--------------------------------- |
| **sections** | array | See [items](#options-for-related). |

### Options for items

| Name     | Type   | Description                   |
| :------- | :----- | :---------------------------- |
| **text** | string | Title of related content.     |
| **href** | string | Link for the related content. |

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
