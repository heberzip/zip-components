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
    children: "Primary",
    variant: "primary",
    size: "lg",
    onClick: action("button primary clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    onClick: action("button secondary clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    onClick: action("btn destructive clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Styled: Story = {
  args: {
    children: "Styled",
    variant: "styled",
    onClick: action("btn styled clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    onClick: action("btn outline clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    onClick: action("btn ghost clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    variant: "rounded",
    onClick: action("btn rounded clicked"),
  },
  parameters: {
    layout: "centered",
  },
};

export const Link: Story = {
  args: {
    children: <a href="#">Link</a>,
    variant: "link",
    onClick: action("btn link clicked"),
  },
  parameters: {
    layout: "centered",
  },
};
