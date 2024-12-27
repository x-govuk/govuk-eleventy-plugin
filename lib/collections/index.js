module.exports = function (eleventyConfig) {
  if (!eleventyConfig.collections.all) {
    eleventyConfig.addCollection('all', require('./all.js'))
  }

  if (!eleventyConfig.collections.navigation) {
    eleventyConfig.addCollection('navigation', require('./navigation.js'))
  }

  if (!eleventyConfig.collections.sitemap) {
    eleventyConfig.addCollection('sitemap', require('./sitemap.js'))
  }

  if (!eleventyConfig.collections.tag) {
    eleventyConfig.addCollection('tags', require('./tags.js'))
  }
}
