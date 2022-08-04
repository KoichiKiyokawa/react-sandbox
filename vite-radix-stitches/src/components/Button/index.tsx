import { styled } from "@/stitches.config"
import { ComponentPropsWithRef, forwardRef, ReactNode } from "react"

type Props = {
  children: ReactNode
} & ComponentPropsWithRef<typeof StyledButton>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton type="button" variant="primary" ref={ref} {...props}>
        {children}
      </StyledButton>
    )
  }
)

const StyledButton = styled("button", {
  padding: 8,
  border: 0,
  borderRadius: 4,
  cursor: "pointer",
  "&:disabled": {
    backgroundColor: "Gray",
    cursor: "not-allowed",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "RoyalBlue",
        color: "White",
      },
      secondary: {
        backgroundColor: "PaleGreen",
        color: "White",
      },
    },
  },
})
