---
layout: product
title: Build static websites using GOV.UK styles, components and patterns
description: The familarity of the [GOV.UK Design System](https://design-system.service.gov.uk) combined with the simplicity of the [Eleventy](https://www.11ty.io) static site generator.
breadcrumbs: false
---
{% from "govuk/components/tag/macro.njk" import govukTag %}
{{ govukTag({
  classes: "govuk-!-margin-bottom-4",
  text: "Experimental"
}) }}

Consumes [govuk-frontend](https://github.com/alphagov/govuk-frontend) with additional support for [Markdown formatted documents](/docs/markdown).

<iframe src="https://ghbtns.com/github-btn.html?user=paulrobertlloyd&repo=govuk-11ty&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

<hr class="govuk-section-break govuk-section-break--visible">

{% from "document-list/macro.njk" import appDocumentList %}
<div class="govuk-grid-row">
  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-l govuk-!-font-size-27">Getting started</h2>
    {{ appDocumentList({
      items: collections["getting-started"]
    }) | safe }}
  </section>

  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-l govuk-!-font-size-27">Layouts</h2>
    {{ appDocumentList({
      items: collections["layout"]
    }) | safe }}
  </section>

  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-l govuk-!-font-size-27">Components</h2>
    {{ appDocumentList({
      items: collections["component"]
    }) | safe }}
  </section>
</div>
