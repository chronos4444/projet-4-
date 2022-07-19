const purgecss = require("@fullhuman/postcss-purgecss");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssImport,
    purgecss({
      content: ["./*.html"],
    }),
  ],
};
