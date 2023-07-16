import { Meta, StoryObj } from "@storybook/react"
import { Button } from "."

type PropKeys = keyof React.ComponentProps<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me",
  },
  argTypes: {
    children: { description: "ボタン内に表示したいテキスト" },
    variant: { description: "ボタンの種類を指定します" },
  } satisfies { [key in PropKeys]?: { description: string } },
  parameters: {
    controls: { include: ["children", "variant"] satisfies PropKeys[] },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { variant: "primary" } }
export const Secondary: Story = { args: { variant: "secondary" } }
