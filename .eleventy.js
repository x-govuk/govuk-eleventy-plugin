let Nunjucks = require('nunjucks');
let markdown = require('./lib/markdown');

module.exports = function (eleventyConfig) {
  // Templates: Nunjucks and Markdown
  let nunjucksEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader([
      'app/_components',
      'app/_layouts',
      'node_modules/govuk-frontend'
    ]), {
      lstripBlocks: true,
      trimBlocks: true
    }
  );
  eleventyConfig.setLibrary('njk', nunjucksEnv);
  eleventyConfig.setLibrary('md', markdown);

  // Filters
  eleventyConfig.addFilter('case', require('./lib/filters/change-case'));
  eleventyConfig.addFilter('date', require('./lib/filters/date'));
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'));
  eleventyConfig.addFilter('slug', require('./lib/filters/slug'));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Transforms

  // Collections

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/images');

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true);

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['njk', 'md'],
    passthroughFileCopy: true
  };
};
