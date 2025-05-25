---
layout: sub-navigation
order: 2
title: Options
description: Customise the appearance and behaviour of your website.
---

You can add options to the second parameter of the `addPlugin` function in Eleventy config file.

For example, to add a product name to the right of the GOV.UK text in the header, you would add the following:

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Apply for a juggling licence',
    }
  })
}
```

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Plugin options",
  captionClasses: "govuk-table__caption--l",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "icons" },
      { text: "object" },
      { text: "Override GOV.UK icons." }
    ],
    [
      { text: "icons.mask" },
      { text: "string|boolean" },
      { text: "Override GOV.UK SVG mask icon. Use `false` to not include a mask icon." }
    ],
    [
      { text: "icons.shortcut" },
      { text: "string|boolean" },
      { text: "Override GOV.UK favicon. Use `false` to not include a favicon." }
    ],
    [
      { text: "icons.touch" },
      { text: "string|boolean" },
      { text: "Override GOV.UK touch icon. Use `false` to not include a touch icon." | markdown }
    ],
    [
      { text: "opengraphImageUrl" },
      { text: "string" },
      { text: "URL for default Open Graph share image." }
    ],
    [
      { text: "headingPermalinks" },
      { text: "boolean" },
      { text: "Add links to headings, making it easier to share sections of a page (default is `false`)." | markdown }
    ],
    [
      { text: "homeKey" },
      { text: "string" },
      { text: "First item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/) (default is ‘Home’)." | markdown }
    ],
    [
      { text: "parentSite" },
      { text: "object" },
      { text: "Website to show as first item in breadcrumbs." }
    ],
    [
      { text: "parentSite.url" },
      { text: "string" },
      { text: "URL for parent site." }
    ],
    [
      { text: "parentSite.name" },
      { text: "string" },
      { text: "Name of parent site." }
    ],
    [
      { text: "rebrand" },
      { text: "boolean" },
      { text: "Use GOV.UK rebrand (default is `false`, this will change to `true` in a subsequent release after 25 June 2025)." | markdown }
    ],
    [
      { text: "showBreadcrumbs" },
      { text: "boolean" },
      { text: "Show breadcrumb navigation (default is `true` with nested pages)." | markdown }
    ],
    [
      { text: "stylesheets" },
      { text: "Array" },
      { text: "Additional stylesheets to load after application styles." }
    ],
    [
      { text: "themeColor" },
      { text: "string" },
      { text: "Browser theme colour. Must be a hex value, i.e. `#0b0c0c`" | markdown }
    ],
    [
      { text: "titleSuffix" },
      { text: "string or boolean" },
      { text: "Value to show at the end of the document title (default is `GOV.UK`)." | markdown }
    ],
    [
      { text: "url" },
      { text: "string" },
      { text: "The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data." }
    ],
    [
      { text: "header" },
      { text: "object" },
      { text: "See [header options](#header-options)." | markdown }
    ],
    [
      { text: "serviceNavigation" },
      { text: "object" },
      { text: "See [service navigation options](#service-navigation-options)." | markdown }
    ],
    [
      { text: "footer" },
      { text: "object" },
      { text: "See [footer options](#footer-options)." | markdown }
    ]
  ]
}) }}

## Header options

In addition to the [options available for the header component](https://design-system.service.gov.uk/components/header/), the following options can be set for `header`:

{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "homepageUrl" },
      { text: "string" },
      { text: "URL organisation name is linked to (default is `'/'`)." | markdown }
    ],
    [
      { text: "logotype" },
      { text: "object" },
      { text: "Logo that appears in the header. If no value is provided, the GOV.UK logo is shown." }
    ],
    [
      { text: "logotype.text" },
      { text: "string" },
      { text: "Text to show instead of the GOV.UK logo. This text will appear bold. If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored." | markdown }
    ],
    [
      { text: "logotype.html" },
      { text: "string" },
      { text: "If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored." | markdown }
    ],
    [
      { text: "productName" },
      { text: "string" },
      { text: "Product name that appears after the organisation name (default is `false`)." | markdown }
    ],
    [
      { text: "search" },
      { text: "object" },
      { text: "See [search options](#search-options)." | markdown }
    ]
  ]
}) }}

## Service navigation options

In addition to the [options available for the service navigation component](https://design-system.service.gov.uk/components/service-navigation/), the following options can be set for `serviceNavigation`:

{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "search" },
      { text: "object" },
      { text: "Injects search field into `slots.end`. See [search options](#search-options)." | markdown }
    ]
  ]
}) }}

## Search options

You can show a search field in your site header, or within the service navigation (if enabled).

Follow guidance in the GOV.UK Design System about [adding other header and navigation elements](https://design-system.service.gov.uk/patterns/navigate-a-service/#adding-other-header-and-navigation-elements) to decide which is the best location to use.

{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "label" },
      { text: "string" },
      { text: "Text to show in the search field (default is ‘Search site’)." }
    ],
    [
      { text: "indexPath" },
      { text: "string" },
      { text: "Path to search index file." }
    ],
    [
      { text: "sitemapPath" },
      { text: "string" },
      { text: "Path to sitemap page, shown as a fallback if the search field cannot be displayed." }
    ]
  ]
}) }}

## Footer options

In addition to the [options available for the footer component](https://design-system.service.gov.uk/components/footer/), the following options can be set for `footer`:

{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "contentLicence" },
      { text: "object" },
      { text: "Licence description. If no value is provided, the OGL logo is shown alongside the words `All content is available under the Open Government Licence v3.0, except where otherwise stated`. Set to `false` to remove completely." | markdown }
    ],
    [
      { text: "contentLicence.text" },
      { text: "string" },
      { text: "If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored." | markdown }
    ],
    [
      { text: "contentLicence.html" },
      { text: "string" },
      { text: "If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored." | markdown }
    ],
    [
      { text: "copyright" },
      { text: "object" },
      { text: "Copyright statement. If no value is provided, `© Crown copyright` is displayed below an image of the Royal Coat of Arms.  Set to `false` to remove completely." | markdown }
    ],
    [
      { text: "copyright.text" },
      { text: "string" },
      { text: "If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored." | markdown }
    ],
    [
      { text: "copyright.html" },
      { text: "string" },
      { text: "If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored." | markdown }
    ],
    [
      { text: "logo" },
      { text: "boolean" },
      { text: "Show logo in rebranded footer (default is `true`)." | markdown }
    ]
  ]
}) }}
