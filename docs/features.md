---
layout: sub-navigation
order: 2
title: Features
sectionKey: Features
description: Add extra features to help users browse your site.
---

The GOV.UK Eleventy Plugin makes it easy to add common website features and pages. Choose from:

{% for page in collections.feature %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}
