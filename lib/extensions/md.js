const { marked } = require('../marked.js')

module.exports = (nunjucks, options = {}) => ({
  getData: true,
  getInstanceFromInputPath: (inputPath) => {
    return {
      eleventyDataKey: ['options'],
      options: {
        homepageUrl: options.homepageUrl || '/',
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
      const html = nunjucks.renderString(inputContent, data)

      return marked.parse(html)
    }
  }
})
