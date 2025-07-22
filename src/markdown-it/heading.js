/**
 * Heading rules for markdown-it
 * 
 * @param {Function} md - markdown-it instance
 */
export function headingRules(md) {
  const { rules } = md.renderer
  const defaultOpenRenderer =
    rules.heading_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }
  const defaultCloseRenderer =
    rules.heading_close ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  rules.heading_open = (tokens, idx, options, env, self) => {
    const useMarkdownHeaderAsTitle
      = env.useMarkdownHeaderAsTitle // page front matter
      ?? env?.options?.useMarkdownHeaderAsTitle // global options
      ?? false; // default to false

    if (tokens[idx].tag === 'h1' && useMarkdownHeaderAsTitle === true) {
      tokens[idx + 1].children = []
      return '';
    }

    return defaultOpenRenderer(tokens, idx, options, env, self)
  }

  // Also override heading_close to skip closing tag if we skipped opening
  rules.heading_close = function (tokens, idx, options, env, self) {
    const useMarkdownHeaderAsTitle
      = env.useMarkdownHeaderAsTitle // page front matter
      ?? env?.options?.useMarkdownHeaderAsTitle // global options
      ?? false; // default to false

    if (tokens[idx].tag === 'h1' && useMarkdownHeaderAsTitle === true) {
      return '';
    }

    return defaultCloseRenderer(tokens, idx, options, env, self)
  };
}