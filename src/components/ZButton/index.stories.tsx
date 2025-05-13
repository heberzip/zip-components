// Import storybook types and constructors
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// Import component for the story
import { ZButton } from "./index";

const meta = {
  title: "Components/ZButton",
  component: ZButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ZButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "PRIMARY",
    variant: "primary",
    size: "default",
    style: "plain",
    onClick: action("button primary clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Secondary: Story = {
  args: {
    children: "SECONDARY",
    variant: "secondary",
    onClick: action("button secondary clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Destructive: Story = {
  args: {
    children: "DESTRUCTIVE",
    variant: "destructive",
    onClick: action("btn destructive clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Styled: Story = {
  args: {
    children: "STYLED",
    variant: "primary",
    style: "decorated",
    onClick: action("btn styled clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Decorated: Story = {
  args: {
    children: "DECORATED",
    variant: "secondary",
    style: "decorated",
    onClick: action("btn decorated clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Outline: Story = {
  args: {
    children: "OUTLINE",
    variant: "outline",
    onClick: action("btn outline clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Ghost: Story = {
  args: {
    children: "GHOST",
    variant: "ghost",
    onClick: action("btn ghost clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Rounded: Story = {
  args: {
    children: "ROUNDED",
    onClick: action("btn rounded clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Link: Story = {
  args: {
    children: <a href="#">LINK</a>,
    variant: "link",
    onClick: action("btn link clicked"),
  },
  parameters: {
    layout: "centered",
  },
};
