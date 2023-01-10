const path = require('node:path')
const fs = require('node:fs/promises')
const sass = require('sass')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

/**
 * Generate GOV.UK Frontend assets
 *
 * @param {object} eleventyConfig - Eleventy config
 * @param {object} options - Plugin options
 * @returns {function}
 */
module.exports = async function (eleventyConfig, options) {
  // eleventyConfig does not provide the default value for dir.output
  // https://github.com/11ty/eleventy/blob/36713b3af81b08530fac532ceef24f5dde8acb36/src/defaultConfig.js#L64
  const outputDir = eleventyConfig.dir.output || '_site'
  const { assetsPath, imagesPath, fontsPath, brandColour, fontFamily } = options

  // Get plugin options and set GOV.UK Frontend variables if provided
  const inputFilePath = path.join(__dirname, '../govuk.scss')
  const inputFile = await fs.readFile(inputFilePath)
  const source = [
    assetsPath ? `$govuk-assets-path: "${assetsPath}";` : [],
    fontsPath ? `$govuk-fonts-path: "${fontsPath}";` : [],
    imagesPath ? `$govuk-images-path: "${imagesPath}";` : [],
    brandColour ? `$govuk-brand-colour: ${brandColour};` : [],
    fontFamily ? `$govuk-font-family: ${fontFamily};` : [],
    inputFile
  ].join('\n')

  // Generate CSS
  try {
    const outputFile = `${outputDir}/assets/govuk.css`
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
    const jsFile = `${outputDir}/assets/govuk.js`
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
