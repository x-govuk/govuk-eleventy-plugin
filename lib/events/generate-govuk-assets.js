import fs from 'node:fs/promises'
import path from 'node:path'

import commonJs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import * as sass from 'sass'

import { getScssSettings } from '../utils.js'

/**
 * Generate GOV.UK Frontend assets
 *
 * @param {object} dir - Project directories
 * @param {object} options - Plugin options
 * @returns {Function} Eleventy event
 */
export async function generateAssets(dir, options) {
  const inputFilePath = path.join(import.meta.dirname, '../govuk.scss')
  const inputFile = await fs.readFile(inputFilePath)

  // Prepend contents from GOV.UK Frontend settings file, if provided
  const settingsFile = await getScssSettings(dir, options.scssSettingsPath)
  const source = [settingsFile, inputFile].join('\n')

  // Generate CSS
  try {
    const outputFile = `${dir.output}/assets/govuk.css`
    const result = sass.compileString(source, {
      loadPaths: [
        path.join(import.meta.dirname, '../../'),
        './node_modules',
        './'
      ],
      quietDeps: true
    })
    fs.writeFile(outputFile, result.css)
  } catch (error) {
    console.error(error)
  }

  // Bundle JavaScript
  try {
    const jsFile = `${dir.output}/assets/govuk.js`
    const bundle = await rollup({
      input: path.join(import.meta.dirname, '../govuk.js'),
      context: 'window',
      plugins: [nodeResolve(), commonJs()]
    })

    const { output } = await bundle.generate({ format: 'iife' })
    const { code } = output[0]
    fs.writeFile(jsFile, code)
  } catch (error) {
    console.error(error)
  }
}
