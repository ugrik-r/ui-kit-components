import React from "react";
import { StyledButton, StyledButtonProps } from "./styled-button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "components/styled-button",
  component: StyledButton,
} as Meta<StyledButtonProps>;

type StyledButtonStoriesProps = StyledButtonProps;

export const StyledButtonStoryTemplate: StoryFn<StyledButtonStoriesProps> = ({
  children,
  ...args
}) => <StyledButton {...args}>{children}</StyledButton>;

StyledButtonStoryTemplate.storyName = "Styled Button";
