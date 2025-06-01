/**
 * Creates a new sitemap template
 *
 * @class
 */
export class SitemapTemplate {
  constructor(options) {
    this.title = options?.title || 'Sitemap'
    this.permalink = options?.permalink || '/sitemap/'
  }

  /**
   * Get template data for sitemap
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      layout: 'sitemap',
      title: this.title,
      permalink: this.permalink
    }
  }
}
