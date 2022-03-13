---
layout: side-navigation
order: 1
title: Get started
---

GOV.UK Eleventy is a plugin for Eleventy, a static site generator. It uses `govuk-frontend` components and provides support for Markdown formatted documents.

* Sets [Nunjucks](https://mozilla.github.io/nunjucks/) as the template language
* Uses [marked.js](https://marked.js.org) to render Markdown, with [govuk-markdown](https://github.com/x-govuk/govuk-markdown) extensions to ensure text shares the same styles as those used on GOV.UK
* Adds search feature
* Generates assets

## Requirements

* [Node.js](https://nodejs.org/en/) v16
* [Eleventy](https://www.11ty.dev) v1.0.0 or above

[Node version manager](https://github.com/nvm-sh/nvm) is recommended if you are working across multiple projects that use different versions of Node.js.

## Installation

First, install Eleventy and this plugin:

```shell
npm install @11ty/eleventy govuk-eleventy-plugin --save
```

Next, add an `.eleventy.js` file to the root directory of your project. This file is used to configure Eleventy.

```js
const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dir: {
      // Use layouts from the plugin
      layouts: 'node_modules/govuk-eleventy-plugin/app/layouts'
    }
  }
};
```

To generate a site, use the following command:

```shell
npx eleventy --serve
```

Once all the files have been generated, a URL will be shown which you can enter into your browser’s address bar (usually this is <http://localhost:8080>).

Whenever you add a new page, or edit an existing page, the browser will automatically refresh with any of your changes applied.

## Create your first page

You’re now ready to start adding pages to your site.

Pages are made up of 2 parts: a front matter and its contents.

A front matter starts and ends with `---` and is written using a key/value data format called YAML. In most cases, you will only need 2 bits of information: `layout` and `title`. For example:

```yaml
---
layout: page
title: My first page
---
This is my first page, built using Eleventy and `govuk-eleventy-plugin`.
```

Create a file named `index.md` file to the root directory of your project, and add the above content.

Visit <http://localhost:8080> to see your page appearing using GOV.UK-style page.

## Choose a layout

The plugin provides {{ collections["example-layout"] | length }} different layouts:

{% for page in collections["example-layout"] %}
* [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}
{% endfor %}
