import type { Meta, StoryObj } from "@storybook/react";

import { ZipIcon } from "./index";
import type { ZipIconProps } from "./index.variance";

const meta = {
  title: "Components/ZipIcon",
  component: ZipIcon,
  parameters: {
    docs: {
      description: {
        component:
          "ZIcon es un componente SVG que renderiza diferentes tipos de íconos empresariales (circle, square, line, plain_black, plain_white) con soporte para varios colores y tamaños.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ZipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {
  args: {
    icon: "line",
    color: "yellow",
    size: "md",
  },
  parameters: {
    layout: "centered",
  },
};

export const LineIcons: Story = {
  render: (args: ZipIconProps) => (
    <div className="flex flex-wrap gap-8">
      <ZipIcon {...args} color="yellow" />
      <ZipIcon {...args} color="blue" />
    </div>
  ),
  args: {
    icon: "line",
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
};

export const FilledIcons: Story = {
  render: (args: ZipIconProps) => (
    <div className="flex flex-wrap gap-8">
      <ZipIcon {...args} color="yellow" />
      <ZipIcon {...args} color="blue" />
      <ZipIcon {...args} color="black" />
    </div>
  ),
  args: {
    icon: "filled",
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
};

export const PlainBlackIcons: Story = {
  render: (args: ZipIconProps) => (
    <div className="flex flex-wrap gap-8">
      <ZipIcon {...args} color="yellow" />
      <ZipIcon {...args} color="blue" />
      <ZipIcon {...args} color="black" />
    </div>
  ),
  args: {
    icon: "plain_black",
    size: "xs",
  },
  parameters: {
    layout: "centered",
  },
};

export const PlainWhiteIcons: Story = {
  render: (args: ZipIconProps) => (
    <div className="flex flex-wrap gap-8">
      <ZipIcon {...args} color="yellow" />
      <ZipIcon {...args} color="blue" />
      <ZipIcon {...args} color="black" />
    </div>
  ),
  args: {
    icon: "plain_white",
    size: "xs",
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        { name: "black", value: "#666666" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export const CircleIcons: Story = {
  render: (args: ZipIconProps) => (
    <div className="flex gap-2">
      <ZipIcon {...args} color="yellow" />
      <ZipIcon {...args} color="orange" />
      <ZipIcon {...args} color="blue" />
      <ZipIcon {...args} color="lightblue" />
      <ZipIcon {...args} color="darkblue" />
      <ZipIcon {...args} color="black" />
    </div>
  ),
  args: {
    icon: "circle",
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
};

export const SquareIcons: Story = {
  render: (args: ZipIconProps) => (
    <div className="flex gap-3">
      <ZipIcon {...args} color="yellow" />
      <ZipIcon {...args} color="orange" />
      <ZipIcon {...args} color="blue" />
      <ZipIcon {...args} color="lightblue" />
      <ZipIcon {...args} color="darkblue" />
      <ZipIcon {...args} color="black" />
    </div>
  ),
  args: {
    icon: "square",
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
};
