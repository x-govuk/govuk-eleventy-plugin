import { smart } from './smart.js'

/**
 * Transform list of posts in a collection to `items` array that can be
 * consumed by GOV.UK Frontend components
 * @param {Array} array - Eleventy collection data
 * @returns {Array} `items` array
 */
export function itemsFromCollection(array) {
  return array.map((item) => ({
    text: smart(item.data.title),
    href: item.data.url
  }))
}
