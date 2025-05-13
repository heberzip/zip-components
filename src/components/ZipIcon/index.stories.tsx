import type { Meta, StoryObj } from "@storybook/react";

import { ZipIcon } from "./index";

const meta = {
  title: "Components/ZipIcon",
  component: ZipIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof ZipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
