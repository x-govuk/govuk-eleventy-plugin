const rollup = require('rollup')

module.exports = class {
  data () {
    return {
      permalink: '/javascripts/application.js',
      eleventyExcludeFromCollections: true
    }
  }

  async render () {
    const bundle = await rollup.rollup({
      input: 'app/_javascripts/application.js',
      context: 'window'
    })
    const { output } = await bundle.generate({
      format: 'iife'
    })
    const { code } = output[0]
    return code
  }
}
