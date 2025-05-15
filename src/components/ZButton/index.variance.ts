import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export const buttonVariants = cva(
  "rounded-md font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-z-yellow text-white hover:bg-z-yellow-600 active:bg-z-yellow-800",
        secondary:
          "bg-z-darkblue text-white hover:bg-z-darkblue-600 active:bg-z-darkblue-800",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        styled: "linear-gradient-primary tracking-wider",
        outline: "border border-zinc-200 text-gray-800 hover:bg-zinc-100",
        ghost: "text-gray-800 hover:bg-zinc-100 hover:text-white",
        link: "underline underline-offset-4 text-zinc-900 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8 text-lg",
      },
      style: {
        plain: "",
        decorated: "tracking-wider",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      style: "plain",
    },
    compoundVariants: [
      {
        style: "decorated",
        variant: "primary",
        class: "linear-gradient-primary",
      },
      {
        style: "decorated",
        variant: "secondary",
        class: "linear-gradient-secondary",
      },
    ],
  }
);

export type ZButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;
