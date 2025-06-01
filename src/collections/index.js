export async function addCollections(eleventyConfig) {
  if (!eleventyConfig.collections.all) {
    const { all } = await import('./all.js')
    eleventyConfig.addCollection('all', all)
  }

  if (!eleventyConfig.collections.feed) {
    const { feed } = await import('./feed.js')
    eleventyConfig.addCollection('feed', feed)
  }

  if (!eleventyConfig.collections.navigation) {
    const { navigation } = await import('./navigation.js')
    eleventyConfig.addCollection('navigation', navigation)
  }

  if (!eleventyConfig.collections.sitemap) {
    const { sitemap } = await import('./sitemap.js')
    eleventyConfig.addCollection('sitemap', sitemap)
  }

  if (!eleventyConfig.collections.tag) {
    const { tags } = await import('./tags.js')
    eleventyConfig.addCollection('tags', tags)
  }
}
