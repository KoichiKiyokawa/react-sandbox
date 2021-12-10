/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          light: "rgba(0, 0, 0, 0.6)",
          DEFAULT: "#373a3c",
        },
        primary: {
          DEFAULT: "#5CB85C",
        },
        link: {
          DEFAULT: colors.blue["500"],
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
