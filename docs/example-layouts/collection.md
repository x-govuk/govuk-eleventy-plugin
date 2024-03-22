---
layout: collection
title: Apply for a juggling licence
description: API documentation for the new Apply for a juggling licence service.
paginationHeading: API methods
pagination:
  data: example
  size: 4
example:
  - url: "#"
    date: 2021-09-08
    data:
      title: GET /applications
      description: Get many applications.
  - url: "#"
    date: 2021-09-08
    data:
      title: GET /applications/:id
      description: Get a single application.
  - url: "#"
    date: 2021-09-08
    data:
      title: POST /applications/:id/approve
      description: Approve an application.
  - url: "#"
    date: 2021-09-08
    data:
      title: POST /applications/:id/reject
      description: Reject an application.
  - url: "#"
    date: 2021-09-08
    data:
      date: 2021-08-17
      title: POST /applications/:id/withdraw
      description: Withdraw an application.
related:
  sections:
    - title: Related content
      items:
        - text: Layouts
          href: /layouts
        - text: Collection layout
          href: /layouts/collection
      subsections:
        - title: Other example layouts
          items:
            - text: Page
              href: /example-layouts/page
            - text: Page with sub navigation
              href: /example-layouts/sub-navigation
            - text: Post
              href: /example-layouts/post
            - text: Product page
              href: /example-layouts/product
eleventyComputed:
  aside:
    title: Example layout
    content: |
      This is an example page using the `collection` layout. You can [view the source used to create this page on GitHub]({{ viewSource }}).
---
