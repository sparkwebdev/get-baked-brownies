module.exports = function(eleventyConfig) {

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html');

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter('logme', function(label, item) {
    console.log(label, item);
  });

  // Assets
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/css/fonts');
  // Assets - Favicon, PWA, robots, etc
  eleventyConfig.addPassthroughCopy({'./src/assets/*.*': '/'});

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };


};