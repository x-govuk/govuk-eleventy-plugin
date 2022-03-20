# GOV.UK Eleventy Plugin • [![test](https://github.com/x-govuk/govuk-eleventy-plugin/actions/workflows/test.yml/badge.svg)](https://github.com/x-govuk/govuk-eleventy-plugin/actions/workflows/test.yml)

Build documentation websites using Markdown and GOV.UK styles.

You’re welcome to use the plugin even if your service isn’t considered part of GOV.UK, but your site or service must not:

* identify itself as being part of GOV.UK
* use the crown or GOV.UK logotype in the header
* use the GDS Transport typeface
* suggest that it’s an official UK government website if it’s not

## Requirements

* [Node.js](https://nodejs.org) v16 or above
* [Eleventy](https://www.11ty.dev) v1.0.0 or above

## Installation

`npm install govuk-eleventy-plugin@beta --save`

This will install v2.0.0 of the plugin, which is the version that has been documented and more thoroughly tested.

## Usage

```js
const govukEleventyPlugin = require('govuk-eleventy-plugin')

eleventyConfig.addPlugin(govukEleventyPlugin, {
  // Options
})
```
