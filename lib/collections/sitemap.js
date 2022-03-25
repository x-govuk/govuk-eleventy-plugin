module.exports = (collection) => {
  return collection.getAllSorted().filter((item) => {
    // Only return content that was originally a Markdown file
    const extension = item.inputPath.split('.').pop()
    return extension === 'md'
  })
}
