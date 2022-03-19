const path = require('node:path')
const fs = require('node:fs/promises')
const sass = require('sass')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

module.exports = async function (eleventyConfig, options) {
  // Default value for dir.output is not provided by eleventyConfig
  const outputDir = eleventyConfig.dir.output || '_site'
  const govukBrandColour = options.brandColour ? options.brandColour : ''
  const govukFontFamily = options.fontFamily ? options.fontFamily : ''

  // Get plugin options and set GOV.UK Frontend variables if provided
  const inputFilePath = path.join(__dirname, '../../app/all.scss')
  const inputFile = await fs.readFile(inputFilePath)
  const source = [
    govukBrandColour ? `$govuk-brand-colour: ${govukBrandColour};` : [],
    govukFontFamily ? `$govuk-font-family: ${govukFontFamily};` : [],
    inputFile
  ].join('\n')

  // Generate CSS
  try {
    const outputFile = `${outputDir}/assets/govuk.css`
    const result = sass.compileString(source, {
      loadPaths: [
        path.join(__dirname, '../../'),
        './node_modules'
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
      input: path.join(__dirname, '../../app/all.js'),
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
