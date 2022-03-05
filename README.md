# GOV.UK Eleventy

Build websites using the [GOV.UK Design System](https://design-system.service.gov.uk) and the [Eleventy](https://www.11ty.dev) static site generator.

## Requirements

* [Node.js](https://nodejs.org) v16 or above
* [Eleventy](https://www.11ty.dev) v1.0.0 beta

## Installation

`npm install govuk-eleventy-plugin`

## Usage

```js
const govukEleventyPlugin = require('govuk-eleventy-plugin')

eleventyConfig.addPlugin(govukEleventyPlugin, {
  searchIndex: '/search.json',
  views: ['app/_components']
})
```

### Options

Currently, the plugin takes 2 options:

* **searchIndex:** location of JSON file for search index` (maybe this can be automated somehow in a future version of the plugin)
* **views:** Additional directories for Nunjucks to look for layouts and components
