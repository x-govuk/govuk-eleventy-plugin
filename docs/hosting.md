---
layout: sub-navigation
order: 9
title: Hosting
description: Hosting Eleventy websites on services like GitHub Pages.
---

## GitHub Pages

GitHub provides several options for hosting static websites. Site files can be saved in a repository’s default branch, in a special `gh-pages` branch, or within a `docs` folder.

Use can then host a website using a GitHub organisation or user URL (for example `https://<organisation>.github.io`), under a project folder (for example `https://<username>.github.io/<reponame>`) or even use a custom domain name.

Learn more about [GitHub Pages](https://docs.github.com/en/pages).

### Building and deploying using GitHub Actions

GitHub provides native support for Jekyll-based websites, but sites built using other site generators can be deployed using GitHub Actions.

To build and deploy an Eleventy site using GitHub Actions, add the following file to your repository at `/.github/workflows/deploy.yml`:

```yaml
name: deploy

on:
  push:
    branches:
      - main

# Set permissions of GITHUB_TOKEN
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    - name: Setup Pages
      uses: actions/configure-pages@v5
    - name: Install dependencies
      run: npm ci
    - name: Build with Eleventy
      run: npm run-script build
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${% raw %}{{ steps.deployment.outputs.page_url }}{% endraw %}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then, in your repository’s settings, under ‘Pages’, set ‘Source’ to ‘GitHub Actions’.

### Hosting a site on a subpath

By default, Eleventy assumes that a website is hosted on the root path of a domain, but you may want to host a website on a subpath, for example `https://<organisation>.github.io/<reponame>`.

To make sure navigation links point to the correct pages, and static assets like images and fonts can be loaded, set [Eleventy’s `pathPrefix` option](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix) to the name of the sub-folder your website is being hosted at.

For example, if the URL of your website is `https://juggling.github.io/api-docs`, add the following values to your Eleventy configuration:

```js
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    },
    pathPrefix: "/api-docs/"
  }
};
```

## Using different values when building a site locally

Environment variables are a good way to let Eleventy know when a site is being generated locally and served at the root domain, or when it’s being built for production and being served from a subpath.

If you are hosting a site using GitHub Pages and deploying it using GitHub Actions, you can check for the presence of `process.env.GITHUB_ACTIONS`. For example:

```js
import process from 'node:process'
import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/api-docs/' : '/'
  }
};
```
