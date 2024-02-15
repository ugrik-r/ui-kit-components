import { css } from "@emotion/react";

const input = css({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": { border: "1.5px solid #E8E7FE" },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& fieldset": { border: "1.5px solid #6160AF" },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& fieldset": { border: "1.5px solid #8B89FA" },
  },
  "& .MuiOutlinedInput-root.Mui-disabled:hover": {
    "& fieldset": { borderColor: "#cdcdcd" },
  },
  "& label.Mui-focused": {
    color: "rgb(97, 96, 175)",
  },
  label: { color: "rgb(97, 96, 175)" },
  "& input::placeholder": {
    fontSize: "14px",
    fontWeight: 500,
  },
});

export const inputStyles = { input };
