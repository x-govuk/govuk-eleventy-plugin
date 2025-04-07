import fs from 'node:fs/promises'
import path from 'node:path'

/**
 * Get file contents
 *
 * @param {string} filePath - Path to file
 * @returns {Promise<string>} File contents
 */
export async function getFileContents(filePath) {
  filePath = path.join(import.meta.dirname, '..', filePath)

  return await fs.readFile(filePath, { encoding: 'utf8' })
}

/**
 * Read contents of SCSS settings file
 *
 * @param {object} dir - Eleventy directories
 * @param {string} scssSettingsPath - SCSS settings file path
 * @returns {Promise<string>} SCSS file contents
 */
export async function getScssSettings(dir, scssSettingsPath) {
  let settings
  let settingsPath = path.join(dir.input, 'sass', '_settings.scss')

  if (scssSettingsPath) {
    settingsPath = path.join(dir.input, scssSettingsPath)
  }

  try {
    await fs.access(settingsPath, fs.constants.R_OK)
    settings = await fs.readFile(settingsPath, { encoding: 'utf8' })
  } catch (error) {
    if (error && scssSettingsPath) {
      console.error(`Could not find SCSS settings at ${error.path}`)
    }
  }

  return settings
}

export const layoutNames = [
  'base',
  'collection',
  'feed',
  'page',
  'post',
  'product',
  'search-index',
  'sitemap',
  'sub-navigation',
  'tag',
  'tags'
]

/**
 * Get virtual templates
 * Uses users own named layout if exists, else provides a virtual template
 *
 * @param {object} eleventyConfig - Eleventy config
 * @returns {object} Template names and strings
 */
export async function getTemplates(eleventyConfig) {
  const { includes, layouts, input } = eleventyConfig.dir
  const layoutDir = layouts || includes
  const templates = {}

  for (const name of layoutNames) {
    try {
      const templatePath = path.join(input, layoutDir, `${name}.njk`)
      await fs.stat(templatePath)
    } catch {
      const templateString = await getFileContents(`lib/layouts/${name}.njk`)
      templates[`${layoutDir}/${name}.njk`] = templateString
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
