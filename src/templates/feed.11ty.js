/**
 * Creates a new sitemap template
 *
 * @class
 */
export class FeedTemplate {
  constructor(options) {
    this.title = options?.title || 'Feed'
    this.collection = options?.collection || 'feed'
    this.size = options?.size || 20
    this.url = options?.url || ''
    this.permalink = options?.permalink || '/feed.xml'
  }

  /**
   * Get template data for sitemap
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      layout: 'feed',
      title: this.title,
      collection: {
        // Map collection options to values used in feed template
        // TODO: Remove this mapping in next major release
        name: this.collection,
        limit: this.size
      },
      url: this.url,
      permalink: this.permalink
    }
  }
}
