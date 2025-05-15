import type { Meta, StoryObj } from "@storybook/react";

import { ZipIcon } from "./index";

const meta = {
  title: "Components/ZipIcon",
  component: ZipIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof ZipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconRoundYellow: Story = {
  args: {
    icon: "circle",
    color: "yellow",
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
};

export const IconBlack: Story = {
  args: {
    icon: "circle",
    color: "black",
  },
  parameters: {
    layout: "centered",
  },
};

export const IconRoundedBlue: Story = {
  args: {
    icon: "circle",
    color: "blue",
  },
  parameters: {
    layout: "centered",
  },
};

export const IconSquare: Story = {
  args: {
    icon: "square",
    color: "yellow",
  },
  parameters: {
    layout: "centered",
  },
};
