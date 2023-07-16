import { styled } from "@/styled-system/jsx"

export const Button = styled("button", {
  base: {
    paddingX: 4,
    paddingY: 2,
    borderRadius: 4,
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: { bg: "blue.500", color: "white" },
      secondary: { bg: "gray.500", color: "white" },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})
