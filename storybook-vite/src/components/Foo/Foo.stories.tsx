import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Foo } from "."
import { Hoge } from "@/components/Hoge"

const Template: ComponentStory<typeof Foo> = (args) => (
  <div>
    <Hoge />
    <Foo {...args} />
  </div>
)

export const Primary = Template.bind({})

export default {
  component: Foo,
} as ComponentMeta<typeof Foo>
