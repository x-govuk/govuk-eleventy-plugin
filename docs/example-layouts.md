---
layout: side-navigation
order: 6
title: Example layouts
description: Choose from a set of layouts to match the type of content you want write.
---
{% for page in collections["example-layout"] %}
* [{{ page.data.title }}]({{ page.url | url }}) – {{ page.data.description }}
{% endfor %}
