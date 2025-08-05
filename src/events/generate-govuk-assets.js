import fs from 'node:fs/promises'
import path from 'node:path'

import commonJs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { rollup } from 'rollup'
import * as sass from 'sass'

/**
 * Generate GOV.UK Frontend assets
 *
 * @param {object} dir - Project directories
 * @param {object} options - Plugin options
 * @returns {Function} Eleventy event
 */
export async function generateAssets(dir, options) {
  // Generate default CSS
  // Ignored if custom stylesheets are used
  if (options.stylesheets.length === 0) {
    const inputFilePath = path.join(import.meta.dirname, '../application.scss')
    let inputFile = await fs.readFile(inputFilePath)

    // Update asset path to use configured path prefix
    const assetPath = path.join(options.pathPrefix, '/assets/')
    inputFile = inputFile
      .toString()
      .replace(
        `$govuk-assets-path: "/assets/"`,
        `$govuk-assets-path: "${assetPath}"`
      )

    const outputFile = `${dir.output}/assets/application.css`

    try {
      const result = sass.compileString(inputFile, {
        importers: [new sass.NodePackageImporter()], // Imports with `pkg:`
        loadPaths: ['./node_modules', '.'], // Imports without `pkg:`
        quietDeps: true,
        style: 'compressed'
      })
      fs.writeFile(outputFile, result.css)
    } catch (error) {
      console.error(error)
    }
  }

  // Bundle JavaScript
  try {
    const jsFile = `${dir.output}/assets/application.js`
    const bundle = await rollup({
      input: path.join(import.meta.dirname, '../application.js'),
      context: 'window',
      plugins: [
        nodeResolve(),
        commonJs(),
        terser({ format: { comments: false } })
      ]
    })

    const { output } = await bundle.generate({ format: 'es' })
    const { code } = output[0]
    fs.writeFile(jsFile, code)
  } catch (error) {
    console.error(error)
  }
}
