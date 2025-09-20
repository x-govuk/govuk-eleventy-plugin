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
import {
  FeedTemplate,
  PageNotFoundTemplate,
  SearchIndexTemplate,
  SitemapTemplate,
  TagsTemplate,
  TagTemplate
} from './templates/index.js'
import { getLayoutTemplates } from './utils.js'

export const layoutFilenames = [
  'base.njk',
  'collection.njk',
  'error.njk',
  'feed.njk',
  'page.njk',
  'post.njk',
  'product.njk',
  'sitemap.njk',
  'sub-navigation.njk',
  'tag.njk',
  'tags.njk'
]

export async function govukEleventyPlugin(eleventyConfig, pluginOptions = {}) {
  const { pathPrefix } = eleventyConfig

  // Plugin options
  const options = defaultPluginOptions(pluginOptions, pathPrefix)

  // Libraries
  eleventyConfig.setLibrary('md', md(options.markdown))
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
  if (options.templates?.error404) {
    eleventyConfig.addTemplate(
      '404.11ty.js',
      new PageNotFoundTemplate(options.templates?.error404)
    )
  }

  if (options.templates?.feed) {
    eleventyConfig.addTemplate(
      'feed.11ty.js',
      new FeedTemplate(options.templates?.feed, {
        url: options?.url
      })
    )
  }

  if (options.templates?.searchIndex) {
    eleventyConfig.addTemplate(
      'search-index.11ty.js',
      new SearchIndexTemplate(options.templates.searchIndex)
    )
  }

  if (options.templates?.sitemap) {
    eleventyConfig.addTemplate(
      'sitemap.11ty.js',
      new SitemapTemplate(options.templates.sitemap)
    )
  }

  if (options.templates?.tags) {
    const slugify = eleventyConfig.getFilter('slugify')

    eleventyConfig.addTemplate(
      'tags.11ty.js',
      new TagsTemplate(options.templates.tags)
    )

    eleventyConfig.addTemplate(
      'tag.11ty.js',
      new TagTemplate({
        ...options.templates.tags,
        slugify
      })
    )
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

  // Enable GOV.UK rebrand for govuk/template.njk
  // Can be remove with GOV.UK Frontend v6
  // https://github.com/alphagov/govuk-frontend/issues/6097
  eleventyConfig.addNunjucksGlobal('govukRebrand', true)

  // Events
  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    generateAssets(dir, options)
  })
}
