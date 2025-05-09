---
layout: sub-navigation
order: 3
title: Design
description: Replace the crown, GOV.UK logotype and GDS Transport typeface.
---

By default, the GOV.UK Eleventy Plugin generates pages that use the standard GOV.UK header and GDS Transport typeface.

If your website isn’t considered part of GOV.UK, it must not:

- identify itself as being part of GOV.UK
- use the crown or GOV.UK logotype in the header
- use the GDS Transport typeface
- suggest that it’s an official UK government website if it’s not

It is strongly recommended that you change the default values to match your department or organisation’s own branding.

## Replace the GOV.UK logotype and crown

Use the `header.logotype.text` option to replace the crown and GOV.UK logotype with a text value. For example:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'Circus Agency'
      },
      productName: 'Apply for a juggling licence',
    }
  })
}
```

If you need more control, use `logo.logotype.html`. This allows you to provide your own HTML which could, for example, contain an SVG logo or image:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        html: `<img src="logo.png" alt="Circus Agency">`
      },
      productName: 'Apply for a juggling licence',
    }
  })
}
```

## Replace (or remove) GOV.UK in page titles

By default, page titles in the browser are suffixed with `GOV.UK`.

Change this to your own value by setting the `titleSuffix` option. For example:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    titleSuffix: 'Circus Agency'
  })
}
```

Set this value to `false` if you don’t want to append a suffix to page titles.

## Update the copyright statement

By default, the footer shows a link to the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), and places the website under Crown copyright.

If these are not right for your website, change:

- `footer.contentLicence.text` or `footer.contentLicence.html` for the content licence
- `footer.copyright.text` or `footer.copyright.html` for the copyright statement

For example:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://licence.example">Example Licence</a>, except where otherwise stated'
      },
      copyright: {
        text: '© Circus Agency'
      },
    }
  })
}
```

## Replace the GDS Transport typeface

A number of design features, including the typeface used, can be changed by overriding the default values used in the GOV.UK Frontend stylesheet.

### Override the default styles

First, add a SCSS file inside your site’s [input directory](https://www.11ty.dev/docs/config/#input-directory), for example `/[input]/assets/styles.scss`. This file will be generated as `assets/styles.css`.

In this file, import GOV.UK Frontend and override the `$govuk-font-family` setting.

You will also need to import the components used by the plugin, as this stylesheet will replace the default that is otherwise provided by the plugin. For example:

```scss
// GOV.UK Frontend components
$_font-family: system-ui, sans-serif;
@use "pkg:govuk-frontend/dist/govuk" with (
  $govuk-font-family: $_font-family,
);

// GOV.UK Eleventy Plugin components
@use "pkg:@x-govuk/govuk-eleventy-plugin";
```

You can also change other [SCSS settings used by GOV.UK Frontend](https://frontend.design-system.service.gov.uk/sass-api-reference/#settings). For example:

```scss
// Use GOV.UK Frontend
$_font-family: system-ui, sans-serif;
@use "pkg:govuk-frontend/dist/govuk" with (
  $govuk-font-family: $_font-family,
  $govuk-brand-colour: #8822aa,
  $govuk-link-colour: #660088,
  $govuk-link-hover-colour: #440066,
  $govuk-link-visited-colour: #333366,
  $govuk-page-width: 1100px
);

// Use GOV.UK Eleventy Plugin
@use "pkg:@x-govuk/govuk-eleventy-plugin";
```

### Link to the custom stylesheet

To make sure these customised styles are used on your site, add the output path to the `stylesheets` option, which accepts an array. For example:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'Circus Agency'
      },
      productName: 'Apply for a juggling licence',
    },
    stylesheets: ['/assets/styles.css'],
  })
}
```
