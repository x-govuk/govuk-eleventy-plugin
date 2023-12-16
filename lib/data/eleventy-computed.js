/**
 * Get navigation key for page
 * @param {object} data Page data
 * @returns {string|undefined} Page navigation key
 */
const getKey = (data) => {
  const { homepage, eleventyExcludeFromCollections, eleventyNavigation } = data

  if (homepage) {
    // Use explicit navigation `key`, or `homeKey` set in plugin options
    return eleventyNavigation.key || data.options.homeKey
  } else if (!eleventyExcludeFromCollections) {
    // Use explicit navigation `key`, or page title
    return eleventyNavigation.key || data.title
  }
}

/**
 * Get navigation parent for page
 * @param {object} data Page data
 * @returns {string|undefined} Parent page key
 */
const getParent = (data) => {
  const { homepage, eleventyExcludeFromCollections, eleventyNavigation } = data

  if (homepage) {
    // The homepage has no parent
    return false
  } else if (!eleventyExcludeFromCollections) {
    // Use explicit navigation `parent`, or `homeKey` set in plugin options
    return eleventyNavigation.parent || data.options.homeKey
  }
}

/**
 * Set sensible defaults for eleventyNavigation
 * @see {@link https://www.11ty.dev/docs/plugins/navigation/}
 */
module.exports = {
  eleventyNavigation: {
    key: (data) => getKey(data),
    parent: (data) => getParent(data),
    excerpt: (data) => data.eleventyNavigation.excerpt || data.description
  }
}
