import { cn } from "../../utils/helpers";
import { iconVariants, type ZIconProps } from "./index.variance";

import ZCircleIcon from "../icons/ZCircleIcon";
import ZSquareIcon from "../icons/ZSquareIcon";

const ICON_MAP = {
  circle: ZCircleIcon,
  square: ZSquareIcon,
};

export const ZipIcon = ({
  icon,
  color,
  size,
  className,
  ...props
}: ZIconProps) => {
  const IconComponent = ICON_MAP[icon!];
  if (!IconComponent) return null;

  return (
    <IconComponent
      className={cn(iconVariants({ icon, color, size, className }))}
      {...props}
    />
  );
};
