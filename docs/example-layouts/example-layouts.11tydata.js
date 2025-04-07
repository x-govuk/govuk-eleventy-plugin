export default {
  eleventyComputed: {
    viewSource: (data) =>
      `https://github.com/x-govuk/govuk-eleventy-plugin/blob/main/docs${data.page.filePathStem}.md?plain=1`
  },
  eleventyExcludeFromCollections: true
}
