const path = require("path");

module.exports = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-import": {
      path: [path.resolve(__dirname, "styles")],
    },
    "postcss-mixins": {},
    "postcss-pxtorem": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 2,
    },
  },
};
