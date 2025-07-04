---
layout: page
caption: Get started
title: About this API
description: The Apply for a juggling licence REST API is designed to make interacting with the licencing server quick and easy.
order: 1
showPagination: true
related:
  sections:
    - title: Other example layouts
      items:
        - text: Collection
          href: /collection
        - text: Page with sub navigation
          href: /page-with-sub-navigation
        - text: Post
          href: /post
        - text: Product page
          href: /
eleventyComputed:
  aside:
    title: Example layout
    content: |
      This is an example page using the `page` layout. You can [view the source used to create this page on GitHub]({{ viewSource }}).
---

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
