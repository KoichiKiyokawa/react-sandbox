import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  minify: true,

  // Where to look for your css declarations
  include: ["./{app,components}/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
})
