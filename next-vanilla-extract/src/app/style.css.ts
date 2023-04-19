import { mediaQueries } from "@/styles/constants"
import { globalStyle, style } from "@vanilla-extract/css"

export const main = style({
  maxWidth: 640,
  "@media": {
    [mediaQueries.sm]: {
      background: "red",
    },
  },
})

globalStyle(`${main} button`, {
  background: "blue",
})

export const button = style({
  padding: 4,
})

export const extendButton = style([
  button,
  {
    padding: 16,
  },
])
