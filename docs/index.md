---
homepage: true
layout: product
title: Build documentation websites using Markdown and GOV.UK styles
description: The familiarity of the [GOV.UK Design System](https://design-system.service.gov.uk) combined with the simplicity of the [Eleventy](https://www.11ty.dev) static site generator.
image:
  src: /images/homepage-illustration.png
  alt: The Eleventy mascot floating above a laptop.
startButton:
  href: /get-started
---
<div class="govuk-grid-row">
  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-m">About</h2>
    {{ "GOV.UK Eleventy is a plugin for 11ty, a static site generator. It uses GOV.UK styles, and provides support for Markdown formatted documents." | markdown }}
  </section>

  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-m">Plugin options</h2>
    <p class="govuk-body">The plugin provides several options that allow you to customise the appearance of your website.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ '/options' | url }}">See the options</a></p>
  </section>

  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-m">Layouts</h2>
    <p class="govuk-body">The plugin provides {{ collections["example-layout"] | length }} different layouts.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ '/example-layouts' | url }}">Browse layouts</a></p>
  </section>
</div>
