import fs from 'node:fs/promises'
import path from 'node:path'

import { canonicalUrl, govukDate, tokenize } from './filters/index.js'

/**
 * Get file contents
 *
 * @param {string} baseDirectory - Base directory for files
 * @param {string} filePath - Path to file
 * @returns {Promise<string>} File contents
 */
export async function getFileContents(baseDirectory, filePath) {
  filePath = path.join(baseDirectory, filePath)

  return await fs.readFile(filePath, { encoding: 'utf8' })
}

/**
 * Get navigation key for page
 *
 * @param {object} data - Page data
 * @returns {string|undefined} Page navigation key
 */
export const getNavigationKey = (data) => {
  const { homepage, eleventyExcludeFromCollections, eleventyNavigation } = data

  if (homepage) {
    // Use explicit navigation `key`, or `homeKey` set in plugin options
    return eleventyNavigation.key || data.options.homeKey
  } else if (!eleventyExcludeFromCollections) {
    // Use explicit navigation `key`, or page title
    return eleventyNavigation.key || data.title
  }
}

/**
 * Get navigation parent for page
 *
 * @param {object} data - Page data
 * @returns {string|undefined} Parent page key
 */
export const getNavigationParent = (data) => {
  const { homepage, eleventyExcludeFromCollections, eleventyNavigation } = data

  if (homepage) {
    // The homepage has no parent
    return false
  } else if (!eleventyExcludeFromCollections) {
    // Use explicit navigation `parent`, or `homeKey` set in plugin options
    return eleventyNavigation.parent || data.options.homeKey
  }
}

/**
 * Get virtual templates for default layouts
 * Uses users own named layout if exists, else provides a virtual template
 *
 * @param {object} eleventyConfig - Eleventy config
 * @param {Array} layoutFiles - Layout files
 * @param {string} baseDirectory - Base directory
 * @returns {object} Template names and strings
 */
export async function getLayoutTemplates(
  eleventyConfig,
  layoutFiles,
  baseDirectory
) {
  const { includes, layouts, input } = eleventyConfig.dir
  const layoutDir = layouts || includes
  const templates = {}
  baseDirectory = baseDirectory || path.join(import.meta.dirname, '..')

  for (const filename of layoutFiles) {
    try {
      const templatePath = path.join(input, layoutDir, filename)
      await fs.stat(templatePath)
    } catch {
      const templateString = await getFileContents(
        baseDirectory,
        `src/layouts/${filename}`
      )
      templates[`${layoutDir}/${filename}`] = templateString
    }
  }

  return templates
}

/**
 * Get virtual templates for default pages
 * Uses users own named page if exists, else provides a virtual template
 *
 * @param {object} eleventyConfig - Eleventy config
 * @param {Array} pageFilenames - Page filenames
 * @param {string} baseDirectory - Base directory
 * @returns {object} Template names and strings
 */
export async function getPageTemplates(
  eleventyConfig,
  pageFilenames,
  baseDirectory
) {
  const { input } = eleventyConfig.dir
  const templates = {}
  baseDirectory = baseDirectory || path.join(import.meta.dirname, '..')

  for (const filename of pageFilenames) {
    try {
      const templatePath = path.join(input, filename)
      await fs.stat(templatePath)
    } catch {
      const templateString = await getFileContents(
        baseDirectory,
        `src/pages/${filename}`
      )
      templates[`${input}/${filename}`] = templateString
    }
  }

  return templates
}

/**
 * Normalise value provided to a filter. Checks that a given value exists
 * before performing a transformation.
 *
 * @param {*} value - Input value
 * @param {*} defaultValue - Value to fallback to if no value given
 * @returns {*} defaultValue
 */
export function normalise(value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue
  }

  return value
}

/**
 * Creates a new search index template.
 *
 * @class
 */
export class SearchIndexTemplate {
  /**
   * Get template data for search index
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: (data) => data.options.search.path
    }
  }

  /**
   * Render template string for search index
   *
   * @param {object} data - Eleventy data
   * @param {Array} data.collections - Eleventy collections
   * @param {object} data.options - Plugin options
   * @returns {string} Search index JSON
   */
  render({ collections, options }) {
    const index = collections.sitemap.map((item) => ({
      title: item.data.title,
      ...(item.data.description && { description: item.data.description }),
      ...(item.data.eleventyNavigation.parent &&
        item.data.eleventyNavigation.parent !== item.data.options.homeKey && {
          section: item.data.eleventyNavigation.parent
        }),
      ...(item.data.date && { date: govukDate(item.data.date) }),
      ...(item.url && { url: canonicalUrl(item.url, options) }),
      ...(item.templateContent && { tokens: tokenize(item.templateContent) })
    }))

    return JSON.stringify(index, null, 2)
  }
}
