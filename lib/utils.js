const fs = require('node:fs/promises')
const path = require('node:path')

/**
 * Read contents of SCSS settings file
 *
 * @param {object} dir - Eleventy directories
 * @param {string} scssSettingsPath - SCSS settings file path
 * @returns {Promise<string>} SCSS file contents
 */
const getScssSettings = async (dir, scssSettingsPath) => {
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

/**
 * Normalise value provided to a filter. Checks that a given value exists
 * before performing a transformation.
 *
 * @param {*} value - Input value
 * @param {*} defaultValue - Value to fallback to if no value given
 * @returns {*} defaultValue
 */
const normalise = (value, defaultValue) => {
  if (value === null || value === undefined || value === false) {
    return defaultValue
  }

  return value
}

module.exports = { getScssSettings, normalise }
