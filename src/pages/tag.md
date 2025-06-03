---
eleventyExcludeFromCollections: true
layout: tag
pagination:
  alias: tag
  data: collections.tags
  size: 1
permalink: "{{ options.tags.path }}{{ tag | slug }}/"
eleventyComputed:
  title: "Pages tagged ‘{{ tag }}’"
eleventyNavigation:
  parent: "Tags"
---
