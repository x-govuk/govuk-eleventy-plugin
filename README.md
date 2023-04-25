# GOV.UK Eleventy Plugin • [![test](https://github.com/x-govuk/govuk-eleventy-plugin/actions/workflows/test.yml/badge.svg)](https://github.com/x-govuk/govuk-eleventy-plugin/actions/workflows/test.yml)

Build documentation websites using Markdown and GOV.UK styles.

You’re welcome to use the plugin even if your service isn’t considered part of GOV.UK, but your site or service must not:

* identify itself as being part of GOV.UK
* use the crown or GOV.UK logotype in the header
* use the GDS Transport typeface
* suggest that it’s an official UK government website if it’s not

## Requirements

* [Node.js](https://nodejs.org) v16.0.0 or above
* [npm CLI](https://docs.npmjs.com/cli) v8.0.0 or above
* [Eleventy](https://www.11ty.dev) v2.0.0 or above

## Installation

`npm install @x-govuk/govuk-eleventy-plugin`

## Usage

```js
const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

eleventyConfig.addPlugin(govukEleventyPlugin, {
  // Options
})
```

Learn more about how to [get started](https://x-govuk.github.io/govuk-eleventy-plugin/get-started/) and which [options you can provide](https://x-govuk.github.io/govuk-eleventy-plugin/options/).
