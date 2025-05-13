// Import storybook types and constructors
import type { Meta, StoryObj } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

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
    onClick: () => alert(`The button was clicked! 😄`),
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    onClick: () => alert(`The button was clicked! 😄`),
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    onClick: () => alert(`The button was clicked! 😄`),
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    onClick: () => alert(`The button was clicked! 😄`),
  },
};

export const Link: Story = {
  args: {
    children: <a href="#">Link</a>,
    variant: "link",
    onClick: () => alert(`The button was clicked! 😄`),
  },
};

export const Subtle: Story = {
  args: {
    children: "Subtle",
    variant: "subtle",
    onClick: () => alert(`The button was clicked! 😄`),
  },
};
