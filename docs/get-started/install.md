---
order: 1
title: Installation
sectionKey: Get started
---

## Requirements

- [Node.js](https://nodejs.org) v22 or later
- [Eleventy](https://www.11ty.dev) v3 or later

We recommend [Node version manager](https://github.com/nvm-sh/nvm) if you are working across projects that use different versions of Node.js.

Create a `package.json` file if you don’t already have one. You can create a default `package.json` file by running `npm init` from the root folder of your project.

## Install dependencies

To install, run:

```shell
npm install @11ty/eleventy @x-govuk/govuk-eleventy-plugin
```

When the installation finishes, `@11ty/eleventy` and `@x-govuk/govuk-eleventy-plugin` packages and other dependencies will be in your `node_modules` folder.

## Create a content folder

Next, create a folder to contain all the content for your site, for example `docs`.

## Configure your site

Next, add an `eleventy.config.js` file to the root folder of your project. You will use this file to [configure Eleventy](https://www.11ty.dev/docs/config/), and set [options for the plugin](/get-started/options).

Add your chosen folder name to the `input` key within the `eleventy.config.js` file:

```js
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};
```

## Generate site pages

To generate a site, type the following command:

```shell
npx eleventy --serve
```

Once Eleventy has generated all the files, the terminal will show a preview URL which you can enter into your browser’s address bar:

```shell
[11ty] Copied 14 files / Wrote 0 files in 1.11 seconds (v2.0.0)
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

Whenever you add a new page, or edit an existing one, the browser will automatically refresh with any of your changes applied.

By default, generated pages will get saved to a `/_sites` folder. You can change the same of this folder by adding a new folder name to `dir.output` in `eleventy.config.js`.

## Create your first page

You’re now ready to start adding pages to your site.

Pages have 2 parts: a front matter and its contents.

A front matter starts and ends with `---` and uses a key/value data format called YAML. In most cases, you will need 2 bits of information: `layout` and `title`. For example:

```yaml
---
homepage: true
layout: page
title: My first page
---
This is my first page, built using Eleventy and `@x-govuk/govuk-eleventy-plugin`.
```

Create a file named `index.md` file within the folder you created, and add the above content.

The first page in your site should also have a `homepage` value set to `true`[^1]. Eleventy uses this to work out the structure of your site if it has [nested pages](https://www.11ty.dev/docs/plugins/navigation/).

[^1]: Using `homepage: true` is the same as writing the following:

    ```yaml
    eleventyComputed:
      eleventyNavigation:
        key: "{% raw %}{{ config.homeKey }}{% endraw %}"
    ```

Open the preview URL in your browser to see this new page appear using GOV.UK styles.

## Choose a layout

This plugin provides {{ collections.layout | includes("data.theme", "Content presentation") | length }} different layouts for presenting content, each with different options you can provide in the front matter:

{% for page in collections.layout | includes("data.theme", "Content presentation") %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}
