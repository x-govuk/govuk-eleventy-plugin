---
layout: sub-navigation
title: Authentication
order: 2
related:
  sections:
    - title: Other example layouts
      items:
        - text: Collection
          href: /collection
        - text: Page
          href: /page
        - text: Post
          href: /post
        - text: Product page
          href: /
eleventyComputed:
  aside:
    title: Example layout
    content: |
      This is an example page using the `sub-navigation` layout. You can [view the source used to create this page on GitHub]({{ viewSource }}).
---

Requests to the API must be accompanied by an authentication token.

Each token is associated with a single licencing authority. It will grant access to applications for courses offered by or accredited by that provider.

For instructions on how to authenticate, see the [API reference](#).
