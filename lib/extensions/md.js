const { marked } = require('../marked.js')
const defaultConfig = require('../config/defaults.js')
const footnotes = require('../marked/footnotes.js')

module.exports = (nunjucks, config = {}) => ({
  getData: true,
  getInstanceFromInputPath: (inputPath) => {
    return {
      eleventyDataKey: ['config'],
      config: { ...defaultConfig, ...config }
    }
  },
  compile: async (inputContent, inputPath) => {
    return async (data) => {
      // Parse content for Nunjucks template strings and render them
      const string = nunjucks.renderString(inputContent, data)

      // Update markdown token tree to append footnotes list
      const tokens = footnotes(marked, string)

      // Render HTML
      return marked.parser(tokens)
    }
  }
})
