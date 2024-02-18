import { FC, HTMLProps } from "react";
import { ReactComponent as UncheckedIconComponent } from "../../core/icons/unchecked-icon.svg";
import { ReactComponent as CheckedIconComponent } from "../../core/icons/checked-icon.svg";
import { ReactComponent as CheckedDisabledIconComponent } from "../../core/icons/disabled-checked-icon.svg";

export type IconProps = Partial<HTMLProps<SVGElement>>;

const createIcon =
  (Icon: FC<IconProps>): FC<IconProps> =>
  (props: IconProps) =>
    <Icon {...props} />;

export const UncheckedIcon = createIcon(UncheckedIconComponent);
export const CheckedIcon = createIcon(CheckedIconComponent);
export const DisabledCheckedIcon = createIcon(CheckedDisabledIconComponent);
