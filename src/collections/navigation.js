import { sortCollection } from '../filters/collection.js'

export const navigation = (collection) => {
  collection = collection
    .getFilteredByGlob(['**/*.md', '**/*.njk'])
    .filter((item) => !/^tag/.test(item.data.layout))

  return sortCollection(collection, true)
}
