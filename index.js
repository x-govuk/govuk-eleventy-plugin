import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import eleventyNavigation from '@11ty/eleventy-navigation'

import { addCollections } from './lib/collections/index.js'
import { eleventyComputed } from './lib/data/eleventy-computed.js'
import { defaultPluginOptions } from './lib/data/options.js'
import { generateAssets } from './lib/events/generate-govuk-assets.js'
import { scssExtension } from './lib/extensions/scss.js'
import * as filters from './lib/filters/index.js'
import { md } from './lib/markdown-it.js'
import { nunjucksConfig } from './lib/nunjucks.js'

export default async function (eleventyConfig, pluginOptions = {}) {
  const { pathPrefix } = eleventyConfig

  // Plugin options
  const options = defaultPluginOptions(pluginOptions, pathPrefix)

  // Libraries
  eleventyConfig.setLibrary('md', md(options))
  eleventyConfig.setLibrary('njk', nunjucksConfig(eleventyConfig))

  // Collections
  await addCollections(eleventyConfig)

  // Extensions and template formats
  eleventyConfig.addExtension('scss', scssExtension)
  eleventyConfig.addTemplateFormats('scss')

  // Filters
  for (const [name, filter] of Object.entries(filters)) {
    eleventyConfig.addFilter(name, filter)
  }

  // Global data
  eleventyConfig.addGlobalData('options', options)
  eleventyConfig.addGlobalData('eleventyComputed', eleventyComputed)

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-frontend/dist/govuk/assets': 'assets'
  })

  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(eleventyNavigation)

  // Events
  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    generateAssets(dir, options)
  })
}
