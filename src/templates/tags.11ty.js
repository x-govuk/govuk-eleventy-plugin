import { checkPermalink } from '../utils.js'

/**
 * Creates a new tags template
 *
 * @class
 */
export class TagsTemplate {
  constructor(options) {
    this.title = options?.title || 'Tags'
    this.permalink = options?.permalink || '/tags/'
  }

  /**
   * Get template data for tags
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      eleventyNavigation: { key: '_tags' },
      layout: 'tags',
      title: this.title,
      permalink: (data) => checkPermalink(data, this.permalink)
    }
  }
}

/**
 * Creates a new tag template
 *
 * @class
 */
export class TagTemplate {
  constructor(options) {
    this.slugify = options?.slugify || ((string) => string)
    this.permalink = options?.permalink || '/tags/'
    this.eleventyComputed = {
      title: options?.tagTitle || 'Posts tagged ‘{{ tag }}’'
    }
  }

  /**
   * Get template data for tag
   *
   * @returns {object} Template data
   */
  data() {
    return {
      eleventyExcludeFromCollections: true,
      eleventyNavigation: { parent: '_tags' },
      layout: 'tag',
      title: this.title,
      pagination: {
        alias: 'tag',
        data: 'collections.tags',
        size: 1
      },
      permalink: (data) =>
        checkPermalink(data, `${this.permalink}${this.slugify(data.tag)}/`)
    }
  }
}
