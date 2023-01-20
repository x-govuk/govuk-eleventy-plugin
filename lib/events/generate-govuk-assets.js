const path = require('node:path')
const fs = require('node:fs/promises')
const sass = require('sass')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { ensureSlash } = require('../utils.js')

/**
 * Generate GOV.UK Frontend assets
 *
 * @param {object} dir - Project directories
 * @param {object} pathPrefix - Path prefix
 * @param {object} options - Plugin options
 * @returns {function}
 */
module.exports = async function (dir, pathPrefix, options) {
  const { imagesPath, fontsPath, brandColour, fontFamily } = options
  const assetsPath = options.assetsPath || path.join(pathPrefix, 'assets')

  // Get plugin options and set GOV.UK Frontend variables if provided
  const inputFilePath = path.join(__dirname, '../govuk.scss')
  const inputFile = await fs.readFile(inputFilePath)
  const source = [
    assetsPath ? `$govuk-assets-path: "${ensureSlash(assetsPath)}";` : [],
    fontsPath ? `$govuk-fonts-path: "${ensureSlash(fontsPath)}";` : [],
    imagesPath ? `$govuk-images-path: "${ensureSlash(imagesPath)}";` : [],
    brandColour ? `$govuk-brand-colour: ${brandColour};` : [],
    fontFamily ? `$govuk-font-family: ${fontFamily};` : [],
    inputFile
  ].join('\n')

  // Generate CSS
  try {
    const outputFile = `${dir.output}/assets/govuk.css`
    const result = sass.compileString(source, {
      loadPaths: [
        path.join(__dirname, '../../'),
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
    const bundle = await rollup.rollup({
      input: path.join(__dirname, '../govuk.js'),
      context: 'window',
      plugins: [
        nodeResolve(),
        commonJs()
      ]
    })

    const { output } = await bundle.generate({ format: 'iife' })
    const { code } = output[0]
    fs.writeFile(jsFile, code)
  } catch (error) {
    console.error(error)
  }
}
