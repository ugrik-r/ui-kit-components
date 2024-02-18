/** @jsxImportSource @emotion/react */
import {
  FormControlLabel,
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  Typography,
} from "@mui/material";
import { CheckedIcon, DisabledCheckedIcon, UncheckedIcon } from "../icons";
import { checkboxStyles } from "./checkbox.styles";
import { ChangeEvent, useEffect, useState } from "react";

export type CheckboxProps = {
  label?: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
} & MUICheckboxProps;

export const Checkbox = ({
  icon,
  checkedIcon,
  disabled,
  label,
  onChange,
  handleChange,
  checked,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChangeCheckbox = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    handleChange?.(event, checked);
    setIsChecked(checked);
  };
  return (
    <FormControlLabel
      disabled={disabled}
      control={
        <MUICheckbox
          icon={
            <UncheckedIcon
              css={disabled && checkboxStyles.disabledUncheckedIcon}
            />
          }
          checkedIcon={disabled ? <DisabledCheckedIcon /> : <CheckedIcon />}
          onChange={handleChangeCheckbox}
          checked={isChecked}
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
