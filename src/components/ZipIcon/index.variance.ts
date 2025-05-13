import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("h-6 w-6", {
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-zinc-900",
    },
  },
});

export type ZIconProps = ComponentProps<"svg"> &
  VariantProps<typeof iconVariants>;
