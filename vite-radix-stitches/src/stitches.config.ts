import { createStitches } from "@stitches/react"
import { OnlyStringNumeric } from "@stitches/react/types/css"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
  },
  media: {
    // from Tailwind CSS cf) https://tailwindcss.com/docs/screens
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
  utils: {
    marginX: (value: OnlyStringNumeric) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
})
