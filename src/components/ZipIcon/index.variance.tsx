import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("fill-current", {
  variants: {
    icon: {
      circle: "aspect-square",
      square: "aspect-square",
      line: "w-auto max-w-full",
      filled: "w-auto max-w-full",
      plain_black: "w-auto max-w-full",
      plain_white: "w-auto max-w-full",
    },
    color: {
      yellow: "text-z-yellow",
      orange: "text-z-orange",
      lightblue: "text-z-lightblue",
      blue: "text-z-blue",
      darkblue: "text-z-darkblue",
      black: "text-z-black",
    },
    size: {
      xs: "h-14",
      sm: "h-19",
      md: "h-24",
      lg: "h-32",
      xl: "h-40",
      xl2: "h-50",
      xl3: "h-65",
    },
  },
  defaultVariants: {
    icon: "line",
    color: "yellow",
    size: "md",
  },
  compoundVariants: [
    {
      icon: "line",
      color: "black",
      className: "text-z-yellow",
    },
  ],
});

export type ZIconProps = ComponentProps<"svg"> &
  VariantProps<typeof iconVariants>;
