module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    homeKey: 'GOV.UK Eleventy',
    header: {
      organisationLogo: 'crown',
      productName: 'Eleventy',
      searchIndex: '/search.json'
    },
    footer: {
      copyright: '© X-GOVUK',
      licence: 'Licensed under the [MIT Licence](https://github.com/x-govuk/govuk-eleventy-plugin/blob/main/LICENSE.txt), except where otherwise stated'
    }
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./docs/images')

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
    pathPrefix: process.env.GITHUB_ACTIONS ? '/govuk-eleventy-plugin' : '/'
  }
}
