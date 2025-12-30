---
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

## Plugin options

| Name                  | Type              | Description                                                                                                                                                                  |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| footer                | object            | See [options for footer](#options-for-footer-object)                                                                                                                         |
| header                | object            | See [options for header](#options-for-header-object)                                                                                                                         |
| homeKey               | string            | First item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/) (default is `Home`) |
| icons                 | object            | Override GOV.UK site icons                                                                                                                                                   |
| icons.mask            | string or boolean | Override GOV.UK SVG mask icon. Use `false` to not include a mask icon.                                                                                                       |
| icons.shortcut        | string or boolean | Override GOV.UK favicon. Use `false` to not include a favicon.                                                                                                               |
| icons.touch           | string or boolean | Override GOV.UK touch icon. Use `false` to not include a touch icon.                                                                                                         |
| markdown              | object            | Options for [Markdown](#options-for-markdown)                                                                                                                                |
| opengraphImageUrl     | string            | URL for default Open Graph share image                                                                                                                                       |
| serviceNavigation     | object            | See [options for service navigation](#options-for-service-navigation-object)                                                                                                 |
| showBreadcrumbs       | boolean           | Show breadcrumb navigation (default is `true` for nested pages)                                                                                                              |
| stylesheets           | array             | Stylesheets to load instead of default application styles                                                                                                                    |
| templates             | object            | Configuration for page templates                                                                                                                                             |
| templates.error404    | object or boolean | Configuration for the [404 page not found template](/features/404) (default is `true`)                                                                                       |
| templates.feed        | object or boolean | Configuration for the [RSS feed template](/features/feed) (default is `false`)                                                                                               |
| templates.searchIndex | object or boolean | Configuration for the [search index template](/features/search) (default is `false`)                                                                                         |
| templates.sitemap     | object or boolean | Configuration for the [sitemap template](/features/sitemap) (default is `true`)                                                                                              |
| templates.tag         | object or boolean | Configuration for the [tag templates](/features/tags) (default is `false`)                                                                                                   |
| themeColor            | string            | Browser theme colour. Must be a hex value (default is `#0b0c0c`)                                                                                                             |
| titleSuffix           | string            | Value to show at the end of the document title (default is `GOV.UK`)                                                                                                         |
| url                   | string            | The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data.                                                                        |

## Options for `header` object

Alongside [options available for the header component](https://design-system.service.gov.uk/components/header/), the following options can be set:

| Name          | Type   | Description                                                                                                                                                            |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| logotype      | object | Logo that appears in the header. If no value is provided, the GOV.UK logo is shown.                                                                                    |
| logotype.text | string | Text to show instead of the GOV.UK logo. This text will appear bold. If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored. |
| logotype.html | string | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                      |
| phaseBanner   | object | See [options for phase banner](#options-for-phasebanner-object)                                                                                                        |
| search        | object | See [options for search](#options-for-search-object)                                                                                                                   |

## Options for `phaseBanner` object

Show a phase banner to indicate your service is in alpha or beta. The banner appears below the header and service navigation.

Alongside [options available for the phase banner component](https://design-system.service.gov.uk/components/phase-banner/), the following options can be set:

| Name       | Type   | Description                                                                                 |
| ---------- | ------ | ------------------------------------------------------------------------------------------- |
| tag        | object | Required. Phase tag config (e.g., `{ text: "Alpha" }` or `{ text: "Beta" }`).               |
| tag.text   | string | Text for the phase tag. If `html` is set, this is not required.                             |
| tag.html   | string | HTML for the phase tag. If provided, `text` is ignored.                                     |
| text       | string | Text to display in the banner message.                                                      |
| html       | string | HTML for banner message. If provided, `text` is ignored.                                    |
| classes    | string | Additional CSS classes for the phase banner container (default is `govuk-width-container`). |
| attributes | object | HTML attributes (e.g., data attributes) for the phase banner container.                     |

### Example

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Apply for a juggling licence',
      phaseBanner: {
        tag: {
          text: 'Alpha'
        },
        html: 'This is a new service. Help us improve it and <a class="govuk-link" href="/feedback">give your feedback</a>.'
      }
    }
  })
}
```

## Options for `serviceNavigation` object

Alongside [options available for the service navigation component](https://design-system.service.gov.uk/components/service-navigation/), the following options can be set:

| Name   | Type   | Description                                                                                  |
| ------ | ------ | -------------------------------------------------------------------------------------------- |
| search | object | Injects search field into `slots.end`. See [options for search](#options-for-search-object). |

## Options for `search` object

You can show a search field in your site header, or within the service navigation (if enabled).

Follow guidance in the GOV.UK Design System about [adding other header and navigation elements](https://design-system.service.gov.uk/patterns/navigate-a-service/#adding-other-header-and-navigation-elements) to decide which is the best location to use.

| Name        | Type   | Description                                                                       |
| ----------- | ------ | --------------------------------------------------------------------------------- |
| label       | string | Text to show in the search field (default is `Search site`)                       |
| indexPath   | string | Path to search index file                                                         |
| sitemapPath | string | Path to sitemap page, shown as a fallback if the search field cannot be displayed |

## Options for `footer` object

Alongside [options available for the footer component](https://design-system.service.gov.uk/components/footer/), the following options can be set:

| Name                | Type    | Description                                                                                                                                                                                                                    |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| contentLicence      | object  | Licence description. If no value is provided, the OGL logo is shown alongside the words `All content is available under the Open Government Licence v3.0, except where otherwise stated`. Set to `false` to remove completely. |
| contentLicence.text | string  | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                                                              |
| contentLicence.html | string  | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                                                              |
| copyright           | object  | Copyright statement. If no value is provided, `© Crown copyright` is displayed below an image of the Royal Coat of Arms. Set to `false` to remove completely.                                                                  |
| copyright.text      | string  | If `html` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                                                              |
| copyright.html      | string  | If `text` is set, this is not required. If `html` is provided, the `text` option will be ignored.                                                                                                                              |
| logo                | boolean | Show logo in footer (default is `true`)                                                                                                                                                                                        |

### Options for Markdown

Alongside [options for markdown-it](https://markdown-it.github.io/markdown-it/#MarkdownIt.new), you can also set the following options:

| Name              | Type             | Description                                                                                                                                                                                                                                                                                          |
| ----------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| calvert           | boolean or Array | Typographic improvements to enable (alongside those provided by markdown-it’s `typographer` option). Set this option to `true` to enable all improvements, or array containing individual improvement sets to include (choose from `fractions`, `guillemets` and `mathematical`, default is `true`). |
| govspeak          | boolean or Array | Enable support for Govspeak extensions. Set this option to `true` to enable all supported extensions, or provide an array containing individual extensions to include (choose from `address`, `blockquote`, `example-callout`, `information-callout` and `warning-callout`, default is `true`).      |
| headingPermalinks | boolean          | Add links to headings, making it easier to share sections of a page (default is `false`)                                                                                                                                                                                                             |
| headingsStartWith | string           | Heading size to use for the top-level heading, `xl` or `l` (default is `xl`)                                                                                                                                                                                                                         |
