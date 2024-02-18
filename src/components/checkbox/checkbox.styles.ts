import { css } from "@emotion/react";

const disabledUncheckedIcon = css({
  rect: { stroke: "#828282" },
});

const labelStyles = css({
  fontSize: "16px",
  fontWeight: "500",
  color: "#070739",
});

const disabledLabel = css({ color: "#828282" });

export const checkboxStyles = {
  disabledUncheckedIcon,
  labelStyles,
  disabledLabel,
};
