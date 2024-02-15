import { css } from "@emotion/react";

const buttonStyles = css({
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
  padding: "12px 24px",
  borderRadius: "8px",
  border: "1.5px solid",
});

const primaryButton = css({
  backgroundColor: "#8B89FA",
  color: "#fff",
  ":hover": { backgroundColor: "#5048E5" },
});

const errorButton = css({
  backgroundColor: "#E70E4C",
  color: "#fff",
  ":hover": { backgroundColor: "#C60A52" },
});

const primaryNotContainedButton = css({
  backgroundColor: "inherit",
  color: "#8B89FA",
  borderColor: "#8B89FA",
  ":hover": { color: "#5048E5", borderColor: "#5048E5" },
});

export const errorNotContainedButton = css({
  borderColor: "#E70E4C",
  color: "#E70E4C",
  backgroundColor: "inherit",
  ":hover": {
    color: "#C60A52",
    borderColor: "#C60A52",
    backgroundColor: "inherit",
  },
});

export const smallButton = css({ padding: "2px 24px" });

export const styles = {
  buttonStyles,
  primaryButton,
  errorButton,
  primaryNotContainedButton,
  errorNotContainedButton,
  smallButton,
};
