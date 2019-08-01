let Nunjucks = require('nunjucks');
let markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Templates: Nunjucks
  let nunjucksEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader([
      'app/_includes',
      'app/_layouts',
      'node_modules/govuk-frontend'
    ]), {
      lstripBlocks: true,
      trimBlocks: true
    }
  );
  eleventyConfig.setLibrary('njk', nunjucksEnv);

  // Templates: Markdown
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  let markdownLib = markdownIt(options)
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
  eleventyConfig.setLibrary("md", markdownLib);

  // Filters

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Transforms

  // Collections

  // Passthrough

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
      // Overriden by nunjucksEnv but prevents copying to public
      layouts: '_layouts',
      includes: '_includes'
    },
    templateFormats: ['njk', 'md'],
    passthroughFileCopy: true
  };
};
