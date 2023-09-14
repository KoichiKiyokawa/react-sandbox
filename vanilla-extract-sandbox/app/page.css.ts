import { pxToRem, responsive } from "@/styles/utils";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  maxWidth: pxToRem(1080),
});

export const title = style({
  fontSize: pxToRem(24),
  fontWeight: 700,

  "@media": {
    [responsive.md]: {
      fontSize: pxToRem(80),
    },
  },
});
