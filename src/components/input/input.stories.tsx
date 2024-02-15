import { Input, InputProps } from "./input";
import { Meta } from "@storybook/react";

const meta: Meta<InputProps> = {
  title: "components/input",
  component: Input,
  args: { placeholder: "Placeholder", label: "Label", disabled: false },
};

export default meta;

export const StyledButtonStoryTemplate = ({ ...args }: InputProps) => (
  <Input InputLabelProps={{ shrink: true }} {...args} />
);

StyledButtonStoryTemplate.storyName = "Input";
