module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    organisationLogo: 'crown',
    productName: 'Eleventy',
    searchIndex: '/search.json'
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./docs/images')

  // Config
  return {
    dir: {
      input: 'docs',
      output: 'public',
      layouts: '../app/layouts'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/govuk-eleventy-plugin' : '/'
  }
}
