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
      productName: 'Apply for a juggling licence API docs',
    }
  })
}
```

| Name                  | Type    | Description                                                                                                                                                                                              |
| :-------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **icons.mask**        | string  | Override default GOV.UK SVG mask icon.                                                                                                                                                                   |
| **icons.shortcut**    | string  | Override default GOV.UK favicon.                                                                                                                                                                         |
| **icons.touch**       | string  | Override default GOV.UK touch icon.                                                                                                                                                                      |
| **opengraphImageUrl** | string  | URL for default Open Graph share image.                                                                                                                                                                  |
| **themeColour**       | string  | Browser theme colour. Must be a hex value, i.e. `#0b0c0c`                                                                                                                                                |
| **headingPermalinks** | boolean | Add links to headings, making it easier to share sections of a page.                                                                                                                                     |
| **homeKey**           | string  | Label to use for first item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/). Default is `'Home'`           |
| **parentSite**        | object  | Website to show as first item in breadcrumbs.                                                                                                                                                            |
| **parentSite.url**    | string  | URL for parent site.                                                                                                                                                                                     |
| **parentSite.name**   | string  | Name of parent site.                                                                                                                                                                                     |
| **scssSettingsPath**  | string  | Path to SCSS file, relative to input directory, containing [GOV.UK Frontend settings](https://frontend.design-system.service.gov.uk/sass-api-reference/). Defaults to `{dir.input}/sass/_settings.scss`. |
| **stylesheets**       | Array   | Additional stylesheets to load after application styles.                                                                                                                                                 |
| **url**               | string  | The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data.                                                                                                    |
| **header**            | object  | See [header](#options-for-header).                                                                                                                                                                       |
| **navigation**        | object  | See [navigation](#options-for-navigation).                                                                                                                                                               |
| **footer**            | object  | See [footer](#options-for-footer).                                                                                                                                                                       |

## Options for header

In addition to the [options available for the header component](https://design-system.service.gov.uk/components/header/), the following options can also be set:

| Name              | Type   | Description                                                                                                                                                            |
| :---------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **homepageUrl**   | string | URL organisation name is linked to. Default is `'/'`                                                                                                                   |
| **logotype**      | object | Logo that appears in the header. If no value is provided, the GOV.UK logo is shown.                                                                                    |
| **logotype.text** | string | Text to show instead of the GOV.UK logo. This text will appear bold. If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. |
| **logotype.html** | string | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                      |
| **productName**   | string | Product name that appears after the organisation name. Default is `false`.                                                                                             |
| **search**        | object | See [header.search](#options-for-header.search).                                                                                                                       |

### Options for header.search

Options for site search. See [adding a site search](../search).

| Name            | Type   | Description                                                                    |
| :-------------- | :----- | :----------------------------------------------------------------------------- |
| **label**       | string | Text to show in the search field. Default is `'Search site'`                   |
| **indexPath**   | string | Path to search index file. If set, a search input will be shown in the header. |
| **sitemapPath** | string | Path to sitemap page.                                                          |

## Options for navigation

| Name                    | Type   | Description                                                                                                                |
| :---------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------- |
| **visuallyHiddenTitle** | string | Hidden title for header navigation.                                                                                        |
| **items**               | Array  | An array of navigation links to shown within the header navigation. See [navigation.items](#options-for-navigation.items). |

### Options for navigation.items

| Name        | Type   | Description                                                        |
| :---------- | :----- | :----------------------------------------------------------------- |
| **text**    | string | **Required**. Text of the navigation link.                         |
| **href**    | array  | **Required**. The value of the navigation link’s `href` attribute. |
| **classes** | string | Classes to add to the navigation item.                             |

## Options for footer

In addition to the [options available for the footer component](https://design-system.service.gov.uk/components/footer/), the following options can also be set:

| Name                    | Type   | Description                                                                                                                                                                               |
| :---------------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **contentLicence**      | object | Licence description. If no value is provided, the OGL logo is shown alongside the words `All content is available under the Open Government Licence v3.0, except where otherwise stated`. |
| **contentLicence.text** | string | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                         |
| **contentLicence.html** | string | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                         |
| **copyright**           | object | Copyright statement. If no value is provided, `© Crown copyright` is displayed below an image of the Royal Coat of Arms.                                                                 |
| **copyright.text**      | string | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                         |
| **copyright.html**      | string | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                         |
