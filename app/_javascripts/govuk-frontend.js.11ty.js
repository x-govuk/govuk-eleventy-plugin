const rollup = require('rollup')

module.exports = class {
  data () {
    return {
      permalink: '/javascripts/govuk-frontend.js',
      eleventyExcludeFromCollections: true
    }
  }

  async render () {
    const bundle = await rollup.rollup({
      input: 'node_modules/govuk-frontend/govuk/all.js',
      context: 'window'
    })
    const { output } = await bundle.generate({
      format: 'iife'
    })
    const { code } = output[0]
    return code
  }
}
