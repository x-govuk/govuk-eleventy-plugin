let Nunjucks = require('nunjucks');
let markdown = require('./lib/markdown');

module.exports = function (eleventyConfig) {
  // Browser Sync
  eleventyConfig.setBrowserSyncConfig({
    serveStatic: ['public'],
    serveStaticOptions: {
      extensions: ['html']
    }
  });

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
  eleventyConfig.addFilter('breadcrumbs', require('./lib/filters/breadcrumbs'))
  eleventyConfig.addFilter('date', require('./lib/filters/date'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'))

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Transforms

  // Collections

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/images');
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })

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
    templateFormats: ['njk', 'md', '11ty.js']
  };
};
