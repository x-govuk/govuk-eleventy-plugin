const Nunjucks = require('nunjucks')
const markdown = require('./lib/markdown.js')

module.exports = function (eleventyConfig, options = {}) {
  // Templates: Nunjucks and Markdown
  const appViews = options.views || []
  const pluginViews = [
    './',
    'node_modules/govuk-eleventy-plugin',
    'node_modules/govuk-frontend'
  ]
  const views = pluginViews.concat(appViews)
  const nunjucksEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(views), {
      autoescape: false,
      lstripBlocks: true,
      trimBlocks: true,
      noCache: process.env === 'development',
      watch: process.env === 'development'
    }
  )

  eleventyConfig.setLibrary('njk', nunjucksEnv)
  eleventyConfig.setLibrary('md', markdown)

  // Filters
  eleventyConfig.addFilter('date', require('./govuk/filters/date.js'))
  eleventyConfig.addFilter('tokenize', require('./govuk/filters/tokenize.js'))
  eleventyConfig.addFilter('items', require('./govuk/filters/items.js'))
  eleventyConfig.addFilter('markdown', require('./govuk/filters/markdown.js'))
  eleventyConfig.addFilter('pretty', require('./govuk/filters/pretty.js'))

  // Set default navigation key for home page
  eleventyConfig.addGlobalData('eleventyComputed', {
    searchIndex: options.searchIndex,
    eleventyNavigation: {
      key: data => data.title ? data.title : 'Home',
      parent: data => data.parent ? data.parent : false,
      excerpt: data => data.description ? data.description : false
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-frontend/govuk/assets': 'assets'
  })
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-eleventy-plugin/govuk/assets': 'assets'
  })

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
}
