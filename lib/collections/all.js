module.exports = (collection) =>
  collection.getAll().filter((item) => !item.inputPath.includes('.scss'))
