---
layout: sub-navigation
order: 3
title: Layouts
description: The plugin offers a number of layouts to match the type of content you want write.
---

{% for page in collections.layout %}

- [{{ page.data.title }}]({{ page.url | url }}) – {{ page.data.description }}

{% endfor %}

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
