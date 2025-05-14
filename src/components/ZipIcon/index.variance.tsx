import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("h-24 w-24", {
  variants: {
    icon: {
      rounded: "",
      square: "",
    },
  },
});

export type ZIconProps = ComponentProps<"svg"> &
  VariantProps<typeof iconVariants>;
