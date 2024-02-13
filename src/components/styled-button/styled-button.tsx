import { Button, ButtonProps } from "@mui/material";
import { StyledButtonVariants } from "./styled-button.types";

/** Default values:
 * variant = "primary",
 * contained = true
 */
export type StyledButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: StyledButtonVariants;
  contained?: boolean;
};

export const StyledButton = ({
  children,
  variant = "primary",
  contained = true,
  ...props
}: StyledButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
