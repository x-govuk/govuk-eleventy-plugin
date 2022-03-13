---
layout: side-navigation
order: 4
title: Example layouts
---
{% for page in collections["example-layout"] %}
* [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}
{% endfor %}
