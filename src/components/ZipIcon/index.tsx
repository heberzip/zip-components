import { cn } from "../../utils/helpers";
import { iconVariants, type ZIconProps } from "./index.variance";

import ZRoundedIcon from "../icons/ZRoundedIcon";
import ZSquareIcon from "../icons/ZSquareIcon";

const ICON_MAP = {
  round: ZRoundedIcon,
  square: ZSquareIcon,
};

export const ZipIcon = ({ icon, className, ...props }: ZIconProps) => {
  const IconComponent = ICON_MAP[icon!];
  if (!IconComponent) return null;
  return (
    <IconComponent
      className={cn(iconVariants({ icon, className }))}
      {...props}
    />
  );
};
