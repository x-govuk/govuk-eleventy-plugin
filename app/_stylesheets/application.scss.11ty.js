const sass = require('sass')

module.exports = class {
  data () {
    return {
      permalink: '/stylesheets/application.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render () {
    const result = sass.renderSync({
      file: 'app/_stylesheets/application.scss',
      includePaths: [
        'node_modules/govuk-frontend',
        'app'
      ],
      quietDeps: true
    })
    const { css } = result
    return css.toString()
  }
}
