/** @jsxImportSource @emotion/react */
import {
  FormControlLabel,
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  Typography,
} from "@mui/material";
import { CheckedIcon, DisabledCheckedIcon, UncheckedIcon } from "../icons";
import { checkboxStyles } from "./checkbox.styles";

export type CheckboxProps = { label?: string } & MUICheckboxProps;

export const Checkbox = ({
  icon,
  checkedIcon,
  disabled,
  label,
  ...props
}: CheckboxProps) => {
  return (
    <FormControlLabel
      disabled
      control={
        <MUICheckbox
          icon={
            <UncheckedIcon
              css={disabled && checkboxStyles.disabledUncheckedIcon}
            />
          }
          checkedIcon={disabled ? <DisabledCheckedIcon /> : <CheckedIcon />}
          disabled
          {...props}
        />
      }
      label={
        <Typography
          css={
            disabled ? checkboxStyles.disabledLabel : checkboxStyles.labelStyles
          }
        >
          {label}
        </Typography>
      }
    />
  );
};
