---
homepage: true
layout: product
includeInBreadcrumbs: true
description: Use this plugin for [Eleventy](https://www.11ty.dev) to spend time writing documentation, not building a website for it.
image:
  src: /assets/homepage-illustration.png
  alt: Eleventy’s possum mascot hanging on a red balloon and floating above a laptop.
  hideOnMobile: true
startButton:
  href: /get-started
eleventyComputed:
  title: "{{ pkg.description }}"
---

<div class="govuk-grid-row">
{% for item in collections.homepage %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-2">
      <a class="govuk-link govuk-link--no-visited-state" href="{{ item.url }}">{{ item.data.title | smart }}</a>
    </h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
  </section>
{% endfor %}
  <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m">Contribute</h2>
    <p class="govuk-body">The project repository is public and we welcome contributions from anyone.</p>
    <p class="govuk-body"><a class="govuk-link govuk-link--no-visited-state" href="{{ pkg.repository.url | replace(".git", "") | replace("git+", "") }}">View this project on GitHub</a></p>
  </section>
</div>
