/**
 * Creates a new search index template
 *
 * @class
 */
export class SearchIndexTemplate {
  constructor(options) {
    this.permalink = options?.permalink || '/search-index.json'
  }

  /**
   * Get template data for search index
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: this.permalink
    }
  }

  /**
   * Render template string for search index
   *
   * @param {object} data - Eleventy data
   * @param {Array} data.collections - Eleventy collections
   * @param {object} data.options - Plugin options
   * @returns {string} Search index JSON
   */
  render({ collections, options }) {
    const index = collections.sitemap.map((item) => ({
      title: item.data.title,
      ...(item.data.description && { description: item.data.description }),
      ...(item.data.eleventyNavigation.parent &&
        item.data.eleventyNavigation.parent !== item.data.options.homeKey && {
          section: item.data.eleventyNavigation.parent
        }),
      ...(item.data.date && { date: this.govukDate(item.data.date) }),
      ...(item.url && { url: this.htmlBaseUrl(item.url, options.url) }),
      ...(item.templateContent && {
        tokens: this.tokenize(item.templateContent)
      })
    }))

    return JSON.stringify(index, null, 2)
  }
}
