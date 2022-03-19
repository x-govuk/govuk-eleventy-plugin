const fs = require('node:fs')

module.exports = function (eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
    ? 'https://x-govuk.github.io/govuk-eleventy-plugin/'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/govuk-eleventy-plugin'
    : '/'

  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    homeKey: 'GOV.UK Eleventy Plugin',
    parentSite: {
      url: 'https://x-govuk.github.io',
      name: 'X-GOVUK shared projects'
    },
    pathPrefix,
    url,
    header: {
      organisationLogo: fs.readFileSync('./docs/assets/logo.svg', 'utf8'),
      organisationName: 'X-GOVUK',
      productName: 'Eleventy Plugin',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      copyright: '© X-GOVUK',
      licence: 'Licensed under the [MIT Licence](https://github.com/x-govuk/govuk-eleventy-plugin/blob/main/LICENSE.txt), except where otherwise stated'
    }
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'public',
      layouts: '../app/layouts'
    },
    pathPrefix
  }
}
