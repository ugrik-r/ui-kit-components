import { Button, ButtonProps } from "@mui/material";

type StyledButtonProps = {} & ButtonProps;

export const StyledButton = ({ children, ...props }: StyledButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
