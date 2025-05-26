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
 * Get virtual templates
 * Uses users own named layout if exists, else provides a virtual template
 *
 * @param {object} eleventyConfig - Eleventy config
 * @param {Array} layoutNames - Layout names
 * @returns {object} Template names and strings
 */
export async function getTemplates(eleventyConfig, layoutNames) {
  const { includes, layouts, input } = eleventyConfig.dir
  const layoutDir = layouts || includes
  const templates = {}

  for (const name of layoutNames) {
    try {
      const templatePath = path.join(input, layoutDir, `${name}.njk`)
      await fs.stat(templatePath)
    } catch {
      const templateString = await getFileContents(`src/layouts/${name}.njk`)
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
