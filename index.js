const path = require('node:path')
const { writeFile } = require('node:fs/promises')
const Nunjucks = require('nunjucks')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const sass = require('sass')

module.exports = function (eleventyConfig, options = {}) {
  // Libraries
  const appViews = options.views || []
  const pluginViews = [
    './',
    'node_modules/govuk-eleventy-plugin',
    'node_modules/govuk-frontend',
    'node_modules/govuk-prototype-components'
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

  // Collections
  eleventyConfig.addCollection("orderedNavigation", collection => {
    return collection.getAll().sort((a, b) => a.data.order - b.data.order)
  });

  // Filters
  eleventyConfig.addFilter('date', require('./app/filters/date.js'))
  eleventyConfig.addFilter('tokenize', require('./app/filters/tokenize.js'))
  eleventyConfig.addFilter('items', require('./app/filters/items.js'))
  eleventyConfig.addFilter('markdown', require('./app/filters/markdown.js'))
  eleventyConfig.addFilter('noOrphans', require('./app/filters/no-orphans.js'))
  eleventyConfig.addFilter('pretty', require('./app/filters/pretty.js'))

  // Set default navigation key for home page
  eleventyConfig.addGlobalData('eleventyComputed', {
    homeKey: options.homeKey || 'Home',
    searchIndex: options.searchIndex,
    eleventyNavigation: {
      key: data => data.title ? data.title : data.homeKey,
      parent: data => data.parent ? data.parent : false,
      excerpt: data => data.description ? data.description : false
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
      const cssFile = `${options.dir.output}/assets/govuk.css`
      const result = sass.compile(path.join(__dirname, './app/all.scss'), {
        loadPaths: [
          __dirname,
          './node_modules'
        ],
        quietDeps: true
      });
      writeFile(cssFile, result.css);
    } catch (error) {
      console.error(error);
    }

    // Bundle JavaScript
    try {
      const jsFile = `${options.dir.output}/assets/govuk.js`
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
      writeFile(jsFile, code);
    } catch (error) {
      console.error(error);
    }
  });
}
