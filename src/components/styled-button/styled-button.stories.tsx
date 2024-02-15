import { StyledButton, StyledButtonProps } from "./styled-button";
import { Meta } from "@storybook/react";

const meta: Meta<StyledButtonProps> = {
  title: "components/styled-button",
  component: StyledButton,
  args: {
    children: "Button Text",
    variant: "primary",
    contained: true,
    size: "medium",
  },
};

export default meta;

export const StyledButtonStoryTemplate = ({
  children,
  ...args
}: StyledButtonProps) => <StyledButton {...args}>{children}</StyledButton>;

StyledButtonStoryTemplate.storyName = "Styled Button";
