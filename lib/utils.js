const path = require('node:path')
const fs = require('node:fs/promises')

/**
 * Read contents of SCSS settings file
 * @param {object} dir - Eleventy directories
 * @param {object} options - Plugin options
 * @returns {Promise<string>} SCSS file contents
 */
const getScssSettings = async (dir, options) => {
  let settings
  let settingsPath = path.join(dir.input, 'sass', '_settings.scss')

  if (options.scssSettingsPath) {
    settingsPath = path.join(dir.input, options.scssSettingsPath)
  }

  try {
    await fs.access(settingsPath, fs.constants.R_OK | fs.constants.W_OK)
    settings = fs.readFile(settingsPath)
  } catch (error) {
    if (error && options.scssSettingsPath) {
      console.error('Could not find SCSS settings at', error.path)
    }
  }

  return settings
}

/**
 * Normalise value provided to a filter. Checks that a given value exists
 * before performing a transformation.
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

module.exports = {
  getScssSettings,
  normalise
}
