---
layout: sub-navigation
order: 3
title: Layouts
sectionKey: Layouts
description: Choose a layout to match the content you want to write.
---

The GOV.UK Eleventy Plugin provides different layouts you can choose from, which you can use on different parts of your site:

{% for page in collections.layout | includes("data.theme", "Content presentation") %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

The plugin also provides the following layouts used by features. It’s unlikely you will need to use these for content pages:

{% for page in collections.layout | includes("data.theme", "Feature layouts") %}

- [{{ page.data.title }}]({{ page.url }})

{% endfor %}

## Overriding layouts

Layouts provided by this plugin can be overridden, or used as a basis for your own, by using Nunjuck’s [template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) feature.

For example, to show a message at the top of each page that uses the page layout, add a file named `_includes/page.njk` with the following content:

```njk
{% raw %}{# Extend a plugin layout #}
{% extends "layouts/page.njk" %}

{# Load any GOV.UK Frontend components #}
{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{# Override the `content` block #}
{% block content %}
  {{ appDocumentHeader({
    title: title,
    description: description
  }) }}

  {% if reviewed and reviewAgain %}
  {% call govukInsetText() %}
    <p class="govuk-body">
      {# Use front matter data and call plugin filters #}
      This page was last reviewed on {{ reviewed | govukDate }}.<br>
      It needs to be reviewed again on {{ reviewAgain | govukDate }}.
    </p>
  {% endcall %}
  {% endif %}

  {{ appProseScope(content) if content }}
{% endblock %}{% endraw %}
```

You can extend the following layouts:

{%- for layoutFilename in layoutFilenames %}

- `layouts/{{ layoutFilename }}`

{%- endfor %}
{##}

Replacement layouts must share the same name and saved in your [configured layout directory](https://www.11ty.dev/docs/config/#directory-for-layouts-optional).

Learn more about [layouts on the Eleventy website](https://www.11ty.dev/docs/layouts/).
