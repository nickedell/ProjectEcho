module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addNunjucksFilter("year", (date = new Date()) =>
	new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  );

  return {
	dir: { input: "src", includes: "_includes", output: "_site" },
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
  };
};
