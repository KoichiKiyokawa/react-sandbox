import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Popover, PopoverContent, PopoverTrigger } from "."

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <PopoverTrigger>open</PopoverTrigger>
    <PopoverContent>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </PopoverContent>
  </Popover>
)

export const Main = Template.bind({})

export default {
  component: Popover,
} as ComponentMeta<typeof Popover>
