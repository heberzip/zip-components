import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("text-white rounded-md", {
  variants: {
    variant: {
      primary:
        "bg-zip-blue2-500 hover:bg-zip-blue2-600 active:bg-zip-blue2-700",
      secondary: "bg-white hover:bg-zinc-100 active:bg-zinc-200",
      destructive:
        "bg-red-500 hover:bg-red-600 dark:hover:bg-red-600 dark:bg-red-600",
      styled:
        "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600",
      outline:
        "border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800",
      ghost:
        "text-gray-800 hover:bg-zinc-100 hover:text-white dark:hover:bg-zinc-800",
      rounded: "rounded-full",
      link: "underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 dark:hover:text-zinc-200",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export type ZButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;
