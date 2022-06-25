---
layout: sub-navigation
order: 2
title: Options
description: The plugin has a number of options that allow you to customise the appearance of your website.
tags:
  - homepage
---

You can add options to the second parameter of the `addPlugin` function in Eleventy config file.

For example, to add a product name  to the right of the GOV.UK text in the header, you would add the following:

```js
const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Apply for a juggling licence API docs',
    }
  })
}
```

## Plugin options

| Name | Type | Description | Default |
| :--- | :--- | :---------- | :------ |
| **brandColour** | string | Override the default value for `$govuk-brand-colour`. Must be a hex value (i.e. `#1d70b8`). | `false` |
| **fontFamily** | string | Override the default value for `$govuk-font-family`. Must be a list of one or more font family names (i.e. `"GDS Transport", arial, sans-serif`). | `false` |
| **icons.mask** | string | Override the default GOV.UK SVG mask icon. | `false` |
| **icons.shortcut** | string | Override the default GOV.UK favicon. | `false` |
| **icons.touch** | string | Override the default GOV.UK touch icon. | `false` |
| **ogImage** | string | Override the default GOV.UK Open Graph share image. | `false` |
| **themeColour** | string | Browser theme colour. Must be a hex value. | `#0b0c0c` |
| **headingPermalinks** | boolean | Add links to headings, making it easier to share sections of a page. | `false` |
| **homeKey** | string | Label to use for first item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/). | `'Home'` |
| **parentSite** | object | Website to show as first item in breadcrumbs. | `false` |
| **parentSite.url** | string | URL for parent site. | |
| **parentSite.name** | string | Name of parent site. | |
| **pathPrefix** | string | If your site lives in a different subdirectory (particularly useful with GitHub pages), use `pathPrefix` to specify this. It's used by the `url` filter and inserted at the beginning of all absolute URLs. Used in conjunction with [Eleventy’s own `pathPrefix` option](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix). | `'/'`
| **stylesheets** | Array | Additional stylesheets to load after application styles. | `[]` |
| **url** | string | The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data. | `false` |
| **header** | object | See [header](#options-for-header). | |
| **footer** | object | See [footer](#options-for-footer). | |

### Options for header

In addition to the [options available for the header component](https://design-system.service.gov.uk/components/header/), the following options can also be set:

| Name | Type | Description | Default |
| :--- | :--- | :---------- | :------ |
| **homepageUrl** | string | URL organisation name is linked to. | `'/'` |
| **organisationLogo** | string | Logo that appears before the organisation name. If set to `crown` the GOV.UK logo is shown. If set to `royal-arms`, the Royal Coat of Arms is shown. | `'crown'` |
| **organisationName** | string | Organisation name. | `'GOV.UK'` |
| **productName** | string | Product name that appears after the organisation name. Default is `false`. | `false` |
| **search** | object | See [header.search](#options-for-header.search). | `false` |

### Options for header.search

Options for site search. See [adding a site search](../search).

| Name | Type | Description | Default |
| :--- | :--- | :---------- | :------ |
| **label** | string | Text to show in the search field. | `'Search site'` |
| **indexPath** | string | Path to search index file. If set, a search input will be shown in the header. | `false` |
| **sitemapPath** | string | Path to sitemap page. | `false` |

### Options for footer

In addition to the [options available for the footer component](https://design-system.service.gov.uk/components/footer/), the following options can also be set:

| Name | Type | Description | Default |
| :--- | :--- | :---------- | :------ |
| **copyright** | string | Copyright statement. Can contain inline Markdown. If set to `'crown'`, `© Crown copyright` is displayed below an image of the Royal Coat of Arms. If set to `false`, the current year is shown (i.e. `© {{ "now" | date("yyyy") }}`). | `'crown'` |
| **licence** | string | Licence description. Can contain inline Markdown. If set to `'ogl'`, the OGL logo is shown alongside the words `All content is available under the Open Government Licence v3.0, except where otherwise stated`. | `'ogl'` |
