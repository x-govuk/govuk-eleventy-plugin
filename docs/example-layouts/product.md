---
layout: product
title: Apply for a juggling licence
description: API documentation for the new Apply for a juggling licence service.
startButton:
  href: "#"
  text: Get started
image:
  src: /assets/example-layouts/product-illustration.svg
  alt: Eleventy’s possum mascot hanging on a red balloon and floating above a laptop.
related:
  sections:
    - title: Related content
      items:
        - text: Layouts
          href: /layouts
        - text: Page layout
          href: /layouts/product
      subsections:
        - title: Other example layouts
          items:
            - text: Page
              href: /example-layouts/page
            - text: Page with sub navigation
              href: /example-layouts/sub-navigation
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
      This is an example page using the `product` layout. You can [view the source used to create this page on GitHub]({{ viewSource }}).
---

<div class="govuk-grid-row">
  <section class="govuk-grid-column-one-third-from-desktop">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-2">
      <a class="govuk-link govuk-link--no-visited-state" href="#">
        API reference
      </a>
    </h2>
    <p class="govuk-body">
      Methods for retrieving and approving and rejecting licence applications.
    </p>
  </section>
  <section class="govuk-grid-column-one-third-from-desktop">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-2">
      <a class="govuk-link govuk-link--no-visited-state" href="#">
        Usage scenarios
      </a>
    </h2>
    <p class="govuk-body">
      Scenarios that show example request URLs and payloads clients can use to take actions via this API.
    </p>
  </section>
  <section class="govuk-grid-column-one-third-from-desktop">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-2">
      <a class="govuk-link govuk-link--no-visited-state" href="#">
        Release notes
      </a>
    </h2>
    <p class="govuk-body">
      We sometimes make changes to the API that require updates to juggler record systems.
    </p>
  </section>
</div>
