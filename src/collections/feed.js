export const feed = (collection) => {
  return collection
    .getAllSorted()
    .filter((item) => item.data?.layout === 'post')
    .reverse()
}
