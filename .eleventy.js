module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    productName: 'Eleventy',
    searchIndex: '/search.json'
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
    templateFormats: ['njk', 'md']
  }
}
