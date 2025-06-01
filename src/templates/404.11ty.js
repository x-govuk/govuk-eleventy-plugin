const content = `If you typed the web address, check it is correct.

If you pasted the web address, check you copied the entire address.

You can browse from [the homepage](/) or use the [sitemap](/sitemap) to find the information you need.`

/**
 * Creates a new 404 page template
 *
 * @class
 */
export class PageNotFoundTemplate {
  constructor(options) {
    this.title = options?.title || 'Page not found'
    this.content = options?.content || content
    this.permalink = options?.permalink || '/404.html'
  }

  /**
   * Get template data for 404 page
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      layout: 'error',
      title: this.title,
      permalink: this.permalink
    }
  }

  render() {
    return this.markdown(this.content)
  }
}
