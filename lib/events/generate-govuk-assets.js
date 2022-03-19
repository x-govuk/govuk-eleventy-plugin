const path = require('node:path')
const fs = require('node:fs/promises')
const sass = require('sass')
const rollup = require('rollup')
const commonJs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

module.exports = async function (eleventyConfig) {
  // Default value for dir.output is not provided by eleventyConfig
  const outputDir = eleventyConfig.dir.output || '_site'

  // Generate CSS
  try {
    const cssFile = `${outputDir}/assets/govuk.css`
    const result = sass.compile(path.join(__dirname, '../../app/all.scss'), {
      loadPaths: [
        path.join(__dirname, '../../'),
        './node_modules'
      ],
      quietDeps: true
    })
    fs.writeFile(cssFile, result.css)
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
