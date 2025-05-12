import type { Meta, StoryObj } from "@storybook/react";

import { ZInput } from "./index";

const meta = {
  title: "Components/ZInput",
  component: ZInput,
  tags: ["autodocs"],
} satisfies Meta<typeof ZInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
