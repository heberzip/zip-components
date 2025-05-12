// Import storybook types and constructors
import type { Meta, StoryObj } from "@storybook/react";

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
  args: {},
};
