---
layout: page
title: Sitemap
permalink: "/sitemap.html"
eleventyExcludeFromCollections: true
---
{% for item in collections.all | eleventyNavigation("home") %}
  <h2 class="govuk-heading-m govuk-!-margin-bottom-1">
    <a href="{{ item.url | url | pretty }}">{{ item.title }}</a>
  </h2>
  {% if item.excerpt %}<p class="govuk-body">{{ item.excerpt }}</p>{% endif %}
  {{ collections.all | eleventyNavigation(item.key) | eleventyNavigationToHtml({
    listClass: "govuk-list govuk-list--bullet"
  }) | safe }}
{% endfor %}
