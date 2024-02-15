/** @jsxImportSource @emotion/react */
import { Button, ButtonProps } from "@mui/material";
import { StyledButtonSize, StyledButtonVariants } from "./styled-button.types";
import { styles } from "./styled-button.styles";

/** Default values:
 * variant = "primary",
 * contained = true,
 * size = medium
 */
export type StyledButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: StyledButtonVariants;
  contained?: boolean;
  size?: StyledButtonSize;
};

export const StyledButton = ({
  children,
  variant = "primary",
  contained = true,
  size = "medium",
  ...props
}: StyledButtonProps) => {
  const stylesMapVariant = {
    primary: contained
      ? styles.primaryButton
      : styles.primaryNotContainedButton,
    error: contained ? styles.errorButton : styles.errorNotContainedButton,
  };

  return (
    <Button
      css={[
        styles.buttonStyles,
        stylesMapVariant[variant],
        size === "small" && styles.smallButton,
      ]}
      {...props}
    >
      {children}
    </Button>
  );
};
