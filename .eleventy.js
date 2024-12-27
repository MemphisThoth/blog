const { DateTime } = require("luxon"); 
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    
    eleventyConfig.addFilter("customDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("MM-dd-yyyy");
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_templates",
            data: "_data",
            output: "dist"
        }
    }
}