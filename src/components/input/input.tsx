/** @jsxImportSource @emotion/react */
import { TextField, TextFieldProps } from "@mui/material";
import { inputStyles } from "./input.styles";

export type InputProps = TextFieldProps;

export const Input = ({ ...props }: InputProps) => {
  return (
    <TextField
      css={inputStyles.input}
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
};
