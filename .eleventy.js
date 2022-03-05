module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    dir: { output: 'public' },
    searchIndex: '/search.json',
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/images')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'public',
      layouts: '../node_modules/govuk-eleventy-plugin/app/layouts'
    },
    templateFormats: ['njk', 'md']
  }
}
