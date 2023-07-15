import { Meta, StoryObj } from "@storybook/react";
import page from "./page";

export default {
  component: page,
  args: {
    params: { id: "123" },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/user/123",
      },
    },
  },
} satisfies Meta<typeof page>;

export const Default: StoryObj<typeof page> = {};
