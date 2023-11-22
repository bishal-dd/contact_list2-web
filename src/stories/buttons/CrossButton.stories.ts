import type { Meta, StoryObj } from "@storybook/react";
import CrossButton from "../../components/atoms/buttons/CrossButton";

const meta: Meta<typeof CrossButton> = {
  component: CrossButton,
  title: "Atoms/Buttons/CrossButton",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
