module.exports = function (eleventyConfig, options = {}) {
  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/markdown-it.js'))
  eleventyConfig.setLibrary('njk', require('./lib/nunjucks.js')(eleventyConfig))

  // Collections
  eleventyConfig.addCollection('ordered', collection =>
    collection.getAll().sort((a, b) => {
      if (a.data.order && b.data.order) { // Sort by order value, if given
        return (a.data.order || 0) - (b.data.order || 0)
      } else { // Sort by title
        if (a.data.title < b.data.title) return -1
        else if (a.data.title > b.data.title) return 1
        else return 0
      }
    })
  )
  eleventyConfig.addCollection('sitemap', collection =>
    collection.getAllSorted().filter((item) => {
      // Only return content that was originally a Markdown file
      const extension = item.inputPath.split('.').pop()
      return extension === 'md'
    })
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
    require('./lib/events/generate-govuk-assets.js')(eleventyConfig, options)
  })
}
