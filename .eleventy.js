module.exports = function(eleventyConfig) {
  // copy /src/assets to /_site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
	dir: {
	  input: "src",        // your source folder
	  includes: "_includes",
	  output: "_site"      // build output
	},
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk"
  };
};
