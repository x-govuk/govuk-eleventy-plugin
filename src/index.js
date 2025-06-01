import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import eleventyNavigation from '@11ty/eleventy-navigation'

import { addCollections } from './collections/index.js'
import { eleventyComputed } from './data/eleventy-computed.js'
import { defaultPluginOptions } from './data/options.js'
import { generateAssets } from './events/generate-govuk-assets.js'
import { scssExtension } from './extensions/index.js'
import * as filters from './filters/index.js'
import { md } from './markdown-it.js'
import { nunjucksConfig } from './nunjucks.js'
import { getLayoutTemplates, getPageTemplates } from './utils.js'

export const layoutFilenames = [
  'base.njk',
  'collection.njk',
  'feed.njk',
  'page.njk',
  'post.njk',
  'product.njk',
  'search-index.njk',
  'sitemap.njk',
  'sub-navigation.njk',
  'tag.njk',
  'tags.njk'
]

export const pageFilenames = [
  '404.md',
  'search.json.njk',
  'sitemap.md',
  'tag.md',
  'tags.md'
]

export async function govukEleventyPlugin(eleventyConfig, pluginOptions = {}) {
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

  // Virtual layout templates
  const layoutTemplates = await getLayoutTemplates(
    eleventyConfig,
    layoutFilenames
  )
  for (const [virtualPath, layoutTemplate] of Object.entries(layoutTemplates)) {
    eleventyConfig.addTemplate(virtualPath, layoutTemplate)
  }

  // Virtual page templates
  const pageTemplates = await getPageTemplates(eleventyConfig, pageFilenames)
  for (const [virtualPath, pageTemplate] of Object.entries(pageTemplates)) {
    eleventyConfig.addTemplate(virtualPath, pageTemplate)
  }

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

  // GOV.UK rebrand
  // Defaults to `false`; will change to `true` in a release after 25 June 2025
  eleventyConfig.addNunjucksGlobal('govukRebrand', options.rebrand || false)

  // Events
  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    generateAssets(dir, options)
  })
}
