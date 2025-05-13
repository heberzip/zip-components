import { cn } from "../../utils/helpers";
import { buttonVariants, type ZButtonProps } from "./index.variance";

export const ZButton = ({
  variant,
  size,
  className,
  ...props
}: ZButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
