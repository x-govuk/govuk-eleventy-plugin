---
layout: sub-navigation
order: 11
title: Upgrading
description: Guides for upgrading to major releases with breaking changes
---

{% for page in collections.upgrading %}

- [{{ page.data.title }}]({{ page.url }})

{% endfor %}
