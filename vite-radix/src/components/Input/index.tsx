import { styled } from "@stitches/react"
import { ComponentPropsWithRef, forwardRef } from "react"

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<typeof StyledIndex>
>((props, ref) => {
  return <StyledIndex ref={ref} {...props} />
})

const StyledIndex = styled("input", {
  border: "1px solid #ccc",
  borderRadius: 4,
  padding: 4,
  width: "100%",
})
