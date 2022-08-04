import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from "."

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>click me</Button>
)

export const Main = Template.bind({})
Main.args = {
  variant: "primary",
}
Main.argTypes = {
  variant: { control: { type: "select", options: ["primary", "secondary"] } },
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export default {
  component: Button,
} as ComponentMeta<typeof Button>
