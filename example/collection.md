---
layout: collection
title: API methods
order: 3
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
    - title: Other example layouts
      items:
        - text: Page
          href: /page
        - text: Page with sub navigation
          href: /page-with-sub-navigation
        - text: Post
          href: /post
        - text: Product page
          href: /product-page
eleventyComputed:
  aside:
    title: Example layout
    content: |
      This is an example page using the `collection` layout. You can [view the source used to create this page on GitHub]({{ viewSource }}).
---
