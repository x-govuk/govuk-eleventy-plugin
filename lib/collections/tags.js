module.exports = (collection) => {
  const items = collection.getAll()
  let tags = []

  for (const item of items) {
    if ('tags' in item.data) {
      // Add any new tags from the post to the array
      for (const tag of item.data.tags) {
        // Skip if tag already added
        if (tags.includes(tag)) {
          continue
        }

        // Check there’s not a matching tag, except for capitalisation
        const existingTag = tags.find(
          (existingTag) => existingTag.toLowerCase() === tag.toLowerCase()
        )
        if (existingTag) {
          throw new Error(
            `The post ‘${item.data.title}’ contains tag ‘${tag}’ which matches ‘${existingTag}’, but the capitalisation is different.`
          )
        }

        // Otherwise add new tag
        tags.push(tag)
      }
    }
  }

  // Sort tags alphabetically
  tags = tags.sort((a, b) => a.localeCompare(b, 'en'))

  return tags
}
