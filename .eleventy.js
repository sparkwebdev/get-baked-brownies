module.exports = function(eleventyConfig) {

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter('logme', function(label, item) {
    console.log(label, item);
  });

  // Assets
  eleventyConfig.addPassthroughCopy("./src/assets/img");

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