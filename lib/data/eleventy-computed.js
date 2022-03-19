/**
 * Set sensible defaults for eleventyNavigation
 *
 * @see {@link https://www.11ty.dev/docs/plugins/navigation/}
 */
module.exports = {
  eleventyNavigation: {
    // Key: Use `config.homeKey` if home page, else navigation key or title
    key: data => (data.homepage)
      ? data.config.homeKey
      : data.eleventyNavigation.key || data.title,
    // Parent: If homepage `false`, else if page not excluded from collections, navigation parent or `config.homeKey`
    parent: data => (data.homepage)
      ? false
      : (!data.eleventyExcludeFromCollections)
          ? data.eleventyNavigation.parent || data.config.homeKey
          : false,
    // Excerpt: Defined navigation excerpt or page description
    excerpt: data => data.eleventyNavigation.excerpt || data.description
  }
}
