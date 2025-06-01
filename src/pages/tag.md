---
eleventyExcludeFromCollections: true
layout: tag
pagination:
  alias: tag
  data: collections.tags
  size: 1
permalink: "/tags/{{ tag | slug }}/"
eleventyComputed:
  title: "Pages tagged ‘{{ tag }}’"
eleventyNavigation:
  parent: "Tags"
---
