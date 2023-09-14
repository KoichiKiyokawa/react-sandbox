import { ComplexStyleRule, StyleRule } from "@vanilla-extract/css";

export const pxToRem = (px: number) => `${px / 16}rem`;

export const responsive = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const satisfies Record<string, `(min-width: ${number}px)`>;
