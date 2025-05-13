import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        destructive:
          "bg-red-500 hover:bg-red-600 dark:hover:bg-red-600 dark:bg-red-600",
        outline:
          "border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800",
        subtle:
          "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600",
        ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
        link: "underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 dark:hover:text-zinc-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ZButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;
