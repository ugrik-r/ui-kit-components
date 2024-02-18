import { Checkbox, CheckboxProps } from "./checkbox";
import { Meta } from "@storybook/react";

const meta: Meta<CheckboxProps> = {
  title: "components/checkbox",
  component: Checkbox,
  args: { checked: false, disabled: false, label: "" },
};

export default meta;

export const CheckboxStoryTemplate = ({ ...args }: CheckboxProps) => (
  <Checkbox {...args} />
);

CheckboxStoryTemplate.storyName = "Checkbox";
