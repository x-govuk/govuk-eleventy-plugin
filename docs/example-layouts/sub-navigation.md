---
layout: sub-navigation
title: Apply for a juggling licence
description: API documentation for the new Apply for a juggling licence service.
related:
  sections:
    - title: Related content
      items:
        - text: Layouts
          href: /layouts
        - text: Sub navigation layout
          href: /layouts/sub-navigation
      subsections:
        - title: Other example layouts
          items:
            - text: Page
              href: /example-layouts/page
            - text: Post
              href: /example-layouts/post
            - text: Collection
              href: /example-layouts/collection
            - text: Product page
              href: /example-layouts/product-page
eleventyComputed:
  aside:
    title: Example layout
    content: |
      This is an example page using the `sub-navigation` layout. You can [view the source used to create this page on GitHub]({{ viewSource }}).
---

## About this API

Once a juggler has submitted their application via the Apply service, the application will become available over the API.

Providers can then use the API for:

- [Retrieving applications](#)
- [Approving applications](#)
- [Rejecting unsuccessful applications](#)

To get an idea of how the API works, [review the example usage scenarios](#).

## Authentication and authorisation

Requests to the API must be accompanied by an authentication token.

Each token is associated with a single licencing authority. It will grant access to applications for courses offered by or accredited by that provider.

For instructions on how to authenticate, see the [API reference](#).
