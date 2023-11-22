import type { Meta, StoryObj } from "@storybook/react";
import TextBox from "../components/atoms/text-boxes/TextBox";

const meta: Meta<typeof TextBox> = {
  component: TextBox,
  title: "Atoms/Input/TextBox",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name: "contact",
  },
};
