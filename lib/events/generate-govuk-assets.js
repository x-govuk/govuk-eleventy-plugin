const path = require('node:path')
const fs = require('node:fs/promises')
const sass = require('sass')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { ensureSlash, kebabise } = require('../utils.js')

/**
 * @see {@link https://frontend.design-system.service.gov.uk/sass-api-reference/#settings}
 */
const settingKeys = [
  'brandColour',
  'textColour',
  'secondaryTextColour',
  'canvasBackgroundColour',
  'bodyBackgroundColour',
  'focusColour',
  'focusTextColour',
  'errorColour',
  'successColour',
  'borderColour',
  'linkColour',
  'linkVisitedColour',
  'linkHoverColour',
  'linkActiveColour',
  'pageWidth',
  'fontFamily'
]

/**
 * Generate GOV.UK Frontend assets
 *
 * @param {object} dir - Project directories
 * @param {object} pathPrefix - Path prefix
 * @param {object} options - Plugin options
 * @returns {function}
 */
module.exports = async function (dir, pathPrefix, options) {
  let { assetsPath, imagesPath, fontsPath } = options
  assetsPath = assetsPath || path.join(pathPrefix, 'assets')

  const settings = []
  for (const key of settingKeys) {
    if (options[key]) {
      settings.push(`$govuk-${kebabise(key)}: ${options[key]};`)
    }
  }

  // Get plugin options and set GOV.UK Frontend variables if provided
  const inputFilePath = path.join(__dirname, '../govuk.scss')
  const inputFile = await fs.readFile(inputFilePath)
  const source = [
    assetsPath ? `$govuk-assets-path: "${ensureSlash(assetsPath)}";` : [],
    fontsPath ? `$govuk-fonts-path: "${ensureSlash(fontsPath)}";` : [],
    imagesPath ? `$govuk-images-path: "${ensureSlash(imagesPath)}";` : [],
    ...settings,
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
