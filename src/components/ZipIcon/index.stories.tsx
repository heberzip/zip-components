import type { Meta, StoryObj } from "@storybook/react";

import { ZipIcon } from "./index";

const meta = {
  title: "Components/ZipIcon",
  component: ZipIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof ZipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconRoundedYellow: Story = {
  args: {
    icon: "round",
    className: "text-z-yellow w-40 h-40",
  },
  parameters: {
    layout: "centered",
  },
};

export const IcoBlack: Story = {
  args: {
    icon: "round",
    className: "text-z-black w-40 h-40",
  },
  parameters: {
    layout: "centered",
  },
};

export const IconRoundedBlue: Story = {
  args: {
    icon: "round",
    className: "text-z-blue w-40 h-40",
  },
  parameters: {
    layout: "centered",
  },
};

export const IconSquare: Story = {
  args: {
    icon: "square",
    className: "text-z-yellow w-40 h-40",
  },
  parameters: {
    layout: "centered",
  },
};
