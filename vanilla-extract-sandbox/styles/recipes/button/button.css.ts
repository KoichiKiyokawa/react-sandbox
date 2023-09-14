import { pxToRem } from "@/styles/utils";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: `${pxToRem(8)} ${pxToRem(16)}`,
    color: "white",
  },
  variants: {
    variant: {
      primary: { backgroundColor: "blue" },
      secondary: { backgroundColor: "skyblue" },
    },
  },
});
