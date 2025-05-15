import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("fill-current", {
  variants: {
    icon: {
      round: "",
      square: "",
    },
    color: {
      yellow: "text-z-yellow",
      lightblue: "text-z-lightblue",
      blue: "text-z-blue",
      darkblue: "text-z-darkblue",
      black: "text-z-black",
    },
    size: {
      xs: "h-14 w-14",
      sm: "h-19 w-19",
      md: "h-24 w-24",
      lg: "h-32 w-32",
      xl: "h-40 w-40",
    },
  },
  defaultVariants: {
    icon: "round",
    color: "yellow",
    size: "lg",
  },
});

export type ZIconProps = ComponentProps<"svg"> &
  VariantProps<typeof iconVariants>;
