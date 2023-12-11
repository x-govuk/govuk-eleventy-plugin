---
layout: sub-navigation
order: 10
title: Upgrading
description: Guides for upgrading to major releases with breaking changes
---

{% for page in collections.upgrading %}

- [{{ page.data.title }}]({{ page.url | url }})

{% endfor %}
