module.exports = function (eleventyConfig, options = {}) {
  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/markdown-it.js'))
  eleventyConfig.setLibrary('njk', require('./lib/nunjucks.js')({
    views: options.views
  }))

  // Collections
  eleventyConfig.addCollection('ordered', collection =>
    collection.getAll().sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('search-index', collection =>
    collection.getAll()
  )

  // Extensions and template formats
  eleventyConfig.addExtension('scss', require('./lib/extensions/scss.js'))
  eleventyConfig.addTemplateFormats('scss')

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter('itemsFromCollection', require('./lib/filters/items-from-collection.js'))
  eleventyConfig.addFilter('itemsFromNavigation', require('./lib/filters/items-from-navigation.js'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown.js'))
  eleventyConfig.addFilter('noOrphans', require('./lib/filters/no-orphans.js'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty.js'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize.js'))

  // Global data
  eleventyConfig.addGlobalData('config', require('./lib/data/config.js')(options))
  eleventyConfig.addGlobalData('eleventyComputed', require('./lib/data/eleventy-computed.js'))

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-frontend/govuk/assets': 'assets'
  })

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'))

  // Events
  eleventyConfig.on('eleventy.after', async () => {
    require('./lib/events/generate-govuk-assets.js')(eleventyConfig)
  })
}
