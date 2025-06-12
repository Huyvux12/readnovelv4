const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItToc = require('markdown-it-table-of-contents');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');

  // Markdown configuration
  const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
  .use(markdownItAnchor, {
    permalink: true,
    permalinkSymbol: '#'
  })
  .use(markdownItToc, {
    includeLevel: [2, 3]
  });

  eleventyConfig.setLibrary('md', markdownIt);

  // Date formatting
  eleventyConfig.addFilter('formatDate', (date) => {
    return DateTime.fromJSDate(date).toFormat('LLLL d, yyyy');
  });

  // Collection for stories
  eleventyConfig.addCollection('stories', function(collection) {
    return collection.getFilteredByGlob('src/stories/**/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_includes'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
}; 