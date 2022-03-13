# GOV.UK Eleventy • [![test](https://github.com/x-govuk/govuk-eleventy-plugin/actions/workflows/test.yml/badge.svg)](https://github.com/x-govuk/govuk-eleventy-plugin/actions/workflows/test.yml)

Build websites using the [GOV.UK Design System](https://design-system.service.gov.uk) and the [Eleventy](https://www.11ty.dev) static site generator.

## Requirements

* [Node.js](https://nodejs.org) v16 or above
* [Eleventy](https://www.11ty.dev) v1.0.0 or above

## Installation

`npm install govuk-eleventy-plugin --save`

## Usage

```js
const govukEleventyPlugin = require('govuk-eleventy-plugin')

eleventyConfig.addPlugin(govukEleventyPlugin, {
  // Options
})
```
