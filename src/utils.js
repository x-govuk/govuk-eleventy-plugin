import fs from 'node:fs/promises'
import path from 'node:path'
import markdownit from 'markdown-it';

// avoid new instance of MarkdownIt for each call
const md = new markdownit();

/**
 * Get file contents
 *
 * @param {string} filePath - Path to file
 * @returns {Promise<string>} File contents
 */
export async function getFileContents(filePath) {
  filePath = path.join(import.meta.dirname, '..', filePath)

  return await fs.readFile(filePath, { encoding: 'utf8' })
}

export const layoutNames = [
  'base',
  'collection',
  'feed',
  'page',
  'post',
  'product',
  'search-index',
  'sitemap',
  'sub-navigation',
  'tag',
  'tags'
]

/**
 * Get navigation key for page
 *
 * @param {object} data - Page data
 * @returns {string|undefined} Page navigation key
 */
export const getNavigationKey = (data) => {
  const { homepage, eleventyExcludeFromCollections, eleventyNavigation } = data

  if (homepage) {
    // Use explicit navigation `key`, or `homeKey` set in plugin options
    return eleventyNavigation.key || data.options.homeKey
  } else if (!eleventyExcludeFromCollections) {
    // Use explicit navigation `key`, or page title
    return eleventyNavigation.key || data.title
  }
}

/**
 * Get navigation parent for page
 *
 * @param {object} data - Page data
 * @returns {string|undefined} Parent page key
 */
export const getNavigationParent = (data) => {
  const { homepage, eleventyExcludeFromCollections, eleventyNavigation } = data

  if (homepage) {
    // The homepage has no parent
    return false
  } else if (!eleventyExcludeFromCollections) {
    // Use explicit navigation `parent`, or `homeKey` set in plugin options
    return eleventyNavigation.parent || data.options.homeKey
  }
}

/**
 * Get virtual templates
 * Uses users own named layout if exists, else provides a virtual template
 *
 * @param {object} eleventyConfig - Eleventy config
 * @returns {object} Template names and strings
 */
export async function getTemplates(eleventyConfig) {
  const { includes, layouts, input } = eleventyConfig.dir
  const layoutDir = layouts || includes
  const templates = {}

  for (const name of layoutNames) {
    try {
      const templatePath = path.join(input, layoutDir, `${name}.njk`)
      await fs.stat(templatePath)
    } catch {
      const templateString = await getFileContents(`src/layouts/${name}.njk`)
      templates[`${layoutDir}/${name}.njk`] = templateString
    }
  }

  return templates
}

/**
 * Normalise value provided to a filter. Checks that a given value exists
 * before performing a transformation.
 *
 * @param {*} value - Input value
 * @param {*} defaultValue - Value to fallback to if no value given
 * @returns {*} defaultValue
 */
export function normalise(value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue
  }

  return value
}

/**
 * Extract the title from the page markdown h1.
 * 
 * @param {string} markdown - The page markdown content.
 * @returns {string|null} - The extracted title or null.
 */
const extractTitleFromMarkdown = (markdown) => {
  const tokens = md.parse(markdown, {});

  for (const [i, { type, tag }] of tokens.entries()) {
    if (type === 'heading_open' && tag === 'h1') {
      // The next token should be the inline content of the heading
      const contentTokens = tokens[i + 1];

      let title = contentTokens.content

      if (contentTokens.children) {
        // Children array: filter for text and code_inline only
        title = contentTokens.children
          .filter(t => t.type === 'text' || t.type === 'code_inline')
          .map(t => t.content)
          .join('');
      }

      return title;
    }
  }

  return null;
}

/**
 * Get the page title from markdown h1 if configured and
 * no explicit front matter title if provided.
 * 
 * @param {object} data - Page data
 * @returns {string|null} - The default title or null.
 */
export const getTitle = (data) => {
  const { eleventyExcludeFromCollections, options, title, page } = data;

  const useMarkdownHeaderAsTitle
    = data.useMarkdownHeaderAsTitle // page front matter
    ?? options?.useMarkdownHeaderAsTitle // global options
    ?? false;

  if (!eleventyExcludeFromCollections) {

    if (!useMarkdownHeaderAsTitle) {
      return title;
    }

    // If title has explicitly set, regardless of useMarkdownHeaderAsTitle == true
    // return it, enables pages to have a title explicitly set in front matter
    if (![null, "", undefined].includes(title?.trim())) {
      return title;
    }

    return extractTitleFromMarkdown(page?.rawInput);
  }
}
