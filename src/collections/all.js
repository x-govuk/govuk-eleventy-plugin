export const all = (collection) =>
  collection.getAllSorted().filter((item) => !item.inputPath.includes('.scss'))
