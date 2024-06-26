module.exports = (collection) =>
  collection.getAllSorted().filter((item) => !item.inputPath.includes('.scss'))
