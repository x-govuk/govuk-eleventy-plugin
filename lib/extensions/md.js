const { marked } = require('../marked.js')
const footnotes = require('../marked/footnotes.js')

module.exports = (nunjucks, options = {}) => ({
  getData: true,
  getInstanceFromInputPath: (inputPath) => {
    return {
      eleventyDataKey: ['options'],
      options: {
        homepageUrl: options.homepageUrl || '/',
        organisationLogo: options.organisationLogo || false,
        organisationName: options.organisationName || 'GOV.UK',
        productName: options.productName || false,
        serviceName: options.serviceName || false,
        serviceUrl: options.serviceUrl || '/',
        homeKey: options.homeKey || 'Home',
        searchIndex: options.searchIndex || false
      }
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
