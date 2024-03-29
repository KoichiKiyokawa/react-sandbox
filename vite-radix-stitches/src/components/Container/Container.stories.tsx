import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Container } from "."

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Container>
)

export const Main = Template.bind({})

export default {
  component: Container,
} as ComponentMeta<typeof Container>
