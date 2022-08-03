import { ComponentMeta } from "@storybook/react"
import { Box } from "."

export const Main = () => <Box>Box</Box>

export const WithStyled = () => (
  <Box css={{ border: "1px solid red", padding: 4 }}>Box</Box>
)

export const ChangeTag = () => (
  <Box as="a" href="#">
    Link
  </Box>
)

export default {
  component: Box,
} as ComponentMeta<typeof Box>
