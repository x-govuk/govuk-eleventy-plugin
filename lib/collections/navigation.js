export const navigation = (collection) =>
  collection
    .getFilteredByGlob(['**/*.md', '**/*.njk'])
    .filter((item) => !/^tag/.test(item.data.layout))
    .sort((a, b) => {
      if (
        typeof a.data.order !== 'undefined' &&
        typeof b.data.order !== 'undefined'
      ) {
        // Sort by order value, if given
        return (a.data.order || 0) - (b.data.order || 0)
      }

      // Sort by title
      if (a.data.title < b.data.title) {
        return -1
      } else if (a.data.title > b.data.title) {
        return 1
      }

      return 0
    })
