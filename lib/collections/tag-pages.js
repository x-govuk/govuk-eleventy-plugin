module.exports = (collection) =>
  collection.getAllSorted().filter((item) => item.data.layout === 'tag')
