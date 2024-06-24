const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig, pluginOptions = {}) {
  const { pathPrefix } = eleventyConfig

  // Plugin options
  const options = require('./lib/data/options.js')(pluginOptions, pathPrefix)

  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/markdown-it.js')(options))
  eleventyConfig.setLibrary('njk', require('./lib/nunjucks.js')(eleventyConfig))

  // Collections
  eleventyConfig.addCollection('all', require('./lib/collections/all.js'))
  eleventyConfig.addCollection(
    'ordered',
    require('./lib/collections/ordered.js')
  )
  eleventyConfig.addCollection(
    'sitemap',
    require('./lib/collections/sitemap.js')
  )
  eleventyConfig.addCollection('tags', require('./lib/collections/tags.js'))

  // Extensions and template formats
  eleventyConfig.addExtension('scss', require('./lib/extensions/scss.js'))
  eleventyConfig.addTemplateFormats('scss')

  // Filters
  eleventyConfig.addFilter(
    'canonicalUrl',
    require('./lib/filters/canonical-url.js')
  )
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter(
    'currentPage',
    require('./lib/filters/current-page.js')
  )
  eleventyConfig.addFilter('includes', require('./lib/filters/includes.js'))
  eleventyConfig.addFilter(
    'itemsFromCollection',
    require('./lib/filters/items-from-collection.js')
  )
  eleventyConfig.addFilter(
    'itemsFromPagination',
    require('./lib/filters/items-from-pagination.js')
  )
  eleventyConfig.addFilter(
    'itemsFromNavigation',
    require('./lib/filters/items-from-navigation.js')
  )
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown.js'))
  eleventyConfig.addFilter('noOrphans', require('./lib/filters/no-orphans.js'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty.js'))
  eleventyConfig.addFilter('smart', require('./lib/filters/smart.js'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize.js'))

  // Global data
  eleventyConfig.addGlobalData('options', options)
  eleventyConfig.addGlobalData(
    'eleventyComputed',
    require('./lib/data/eleventy-computed.js')
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-frontend/dist/govuk/assets': 'assets'
  })

  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))

  // Events
  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    require('./lib/events/generate-govuk-assets.js')(dir, pathPrefix, options)
  })
}
