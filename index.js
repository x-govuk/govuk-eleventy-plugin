const path = require('node:path')
const { writeFile } = require('node:fs/promises')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const sass = require('sass')
const { marked } = require('./lib/marked.js')

module.exports = function (eleventyConfig, options = {}) {
  // Libraries
  const nunjucks = require('./lib/nunjucks.js')(options.views)
  eleventyConfig.setLibrary('njk', nunjucks)

  // Extensions
  eleventyConfig.addExtension('md', {
    getData: true,
    getInstanceFromInputPath: (inputPath) => {
      return {
        eleventyDataKey: ['options'],
        options: {
          homeKey: options.homeKey || 'Home',
          searchIndex: options.searchIndex || false
        }
      }
    },
    compile: async (inputContent, inputPath) => {
      return async (data) => {
        const html = nunjucks.renderString(inputContent, data)
        return marked.parse(html)
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('orderedNavigation', collection => {
    return collection.getAll().sort((a, b) => a.data.order - b.data.order)
  })

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize.js'))
  eleventyConfig.addFilter('items', require('./lib/filters/items.js'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown.js'))
  eleventyConfig.addFilter('noOrphans', require('./lib/filters/no-orphans.js'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty.js'))

  // Global data
  // Sensible defaults for eleventyNavigation
  eleventyConfig.addGlobalData('eleventyComputed', {
    eleventyNavigation: {
      // Key: If homepage use `homeKey`, else navigation key or page title
      key: data => (data.homepage)
        ? data.homeKey
        : data.eleventyNavigation.key || data.title,
      // Parent: If homepage `false`, else if page not excluded from collections, navigation parent or `homeKey`
      parent: data => (data.homepage)
        ? false
        : (!data.eleventyExcludeFromCollections)
            ? data.eleventyNavigation.parent || data.homeKey
            : false,
      // Excerpt: Defined navigation excerpt or page description
      excerpt: data => data.eleventyNavigation.excerpt || data.description
    }
  })

  // Pass through
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-frontend/govuk/assets': 'assets'
  })

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))

  // Events
  eleventyConfig.on('eleventy.after', async () => {
    // Generate CSS
    try {
      const cssFile = `${eleventyConfig.dir.output}/assets/govuk.css`
      const result = sass.compile(path.join(__dirname, './app/all.scss'), {
        loadPaths: [
          __dirname,
          './node_modules'
        ],
        quietDeps: true
      })
      writeFile(cssFile, result.css)
    } catch (error) {
      console.error(error)
    }

    // Bundle JavaScript
    try {
      const jsFile = `${eleventyConfig.dir.output}/assets/govuk.js`
      const bundle = await rollup.rollup({
        input: path.join(__dirname, './app/all.js'),
        context: 'window',
        plugins: [
          nodeResolve(),
          commonJs()
        ]
      })

      const { output } = await bundle.generate({ format: 'iife' })
      const { code } = output[0]
      writeFile(jsFile, code)
    } catch (error) {
      console.error(error)
    }
  })
}
