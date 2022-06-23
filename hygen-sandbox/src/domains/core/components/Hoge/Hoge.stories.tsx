import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Hoge } from "."

const Template: ComponentStory<typeof Hoge> = (arg) => (
  <Hoge {...arg} variant="primary">
    Hoge
  </Hoge>
)

export const Main = Template.bind({})
Main.args = { variant: "primary" }

export default {
  component: Hoge,
} as ComponentMeta<typeof Hoge>
