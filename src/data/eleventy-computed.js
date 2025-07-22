import { getTitle, getNavigationKey, getNavigationParent } from '../utils.js'

/**
 * Set sensible defaults for eleventyNavigation
 *
 * @see {@link https://www.11ty.dev/docs/plugins/navigation/}
 */
export const eleventyComputed = {
  title: (data) => getTitle(data),
  eleventyNavigation: {
    key: (data) => getNavigationKey(data),
    parent: (data) => getNavigationParent(data),
    excerpt: (data) => data.eleventyNavigation.excerpt || data.description
  }
}
