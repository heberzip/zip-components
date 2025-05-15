import { cn } from "../../utils/helpers";
import { iconVariants, type ZIconProps } from "./index.variance";

import ZCircleIcon from "../icons/ZCircleIcon";
import ZSquareIcon from "../icons/ZSquareIcon";
import ZFullLineIcon from "../icons/ZFullLineIcon";
import ZFullColorIcon from "../icons/ZFullColorIcon";
import ZPlainBlackIcon from "../icons/ZPlainBlackIcon";
import ZPlainWhiteIcon from "../icons/ZPlainWhiteIcon";

const ICON_MAP = {
  circle: ZCircleIcon,
  square: ZSquareIcon,
  line: ZFullLineIcon,
  filled: ZFullColorIcon,
  plain_black: ZPlainBlackIcon,
  plain_white: ZPlainWhiteIcon,
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
