---
layout: sub-navigation
order: 2
title: Options
description: The plugin has a number of options that allow you to customise the appearance of your website.
---

You can add options to the second parameter of the `addPlugin` function in Eleventy config file.

For example, to add a product name to the right of the GOV.UK text in the header, you would add the following:

```js
const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
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
      { text: "string" },
      { text: "Override GOV.UK SVG mask icon." }
    ],
    [
      { text: "icons.shortcut" },
      { text: "string" },
      { text: "Override GOV.UK favicon." }
    ],
    [
      { text: "icons.touch" },
      { text: "string" },
      { text: "Override GOV.UK touch icon." | markdown }
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
      { text: "scssSettingsPath" },
      { text: "string" },
      { text: "Path to SCSS file, relative to input directory, containing [GOV.UK Frontend settings](https://frontend.design-system.service.gov.uk/sass-api-reference/) (default is `{dir.input}/sass/_settings.scss`)." | markdown }
    ],
    [
      { text: "stylesheets" },
      { text: "Array" },
      { text: "Additional stylesheets to load after application styles." }
    ],
    [
      { text: "themeColour" },
      { text: "string" },
      { text: "Browser theme colour. Must be a hex value, i.e. `#0b0c0c`" | markdown }
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
      { text: "navigation" },
      { text: "object" },
      { text: "See [navigation options](#navigation-options)." | markdown }
    ],
    [
      { text: "footer" },
      { text: "object" },
      { text: "See [footer options](#footer-options)." | markdown }
    ]
  ]
}) }}

## Header options

In addition to the [options available for the header component](https://design-system.service.gov.uk/components/header/), the following options can also be set for `header`:

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
      { text: "Search box that appears in the header." }
    ],
    [
      { text: "search.label" },
      { text: "string" },
      { text: "Text to show in the search field (default is ‘Search site’)." }
    ],
    [
      { text: "search.indexPath" },
      { text: "string" },
      { text: "Path to search index file." }
    ],
    [
      { text: "search.sitemapPath" },
      { text: "string" },
      { text: "Path to sitemap page." }
    ]
  ]
}) }}

## Navigation options

{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "visuallyHiddenTitle" },
      { text: "string" },
      { text: "Hidden title for navigation." }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "An array of navigation links to show." }
    ],
    [
      { text: "items[].text" },
      { text: "string" },
      { text: "**Required**. Navigation link text." | markdown }
    ],
    [
      { text: "items[].href" },
      { text: "string" },
      { text: "**Required**. Navigation link `href` attribute." | markdown }
    ],
    [
      { text: "items[].classes" },
      { text: "string" },
      { text: "Classes to add to the navigation item." }
    ]
  ]
}) }}

## Footer options

In addition to the [options available for the footer component](https://design-system.service.gov.uk/components/header/), the following options can also be set for `footer`:

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
      { text: "Licence description. If no value is provided, the OGL logo is shown alongside the words `All content is available under the Open Government Licence v3.0, except where otherwise stated`." | markdown }
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
      { text: "Copyright statement. If no value is provided, `© Crown copyright` is displayed below an image of the Royal Coat of Arms." | markdown }
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
    ]
  ]
}) }}
