---
layout: tag
pagination:
  addAllPagesToCollections: true
  alias: tag
  data: collections.tags
  size: 1
permalink: "/tags/{{ tag | slug }}/"
eleventyComputed:
  title: "Pages tagged ‘{{ tag }}’"
eleventyNavigation:
  parent: "Tags"
---
