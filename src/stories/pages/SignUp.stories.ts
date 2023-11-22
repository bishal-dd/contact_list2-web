import type { Meta, StoryObj } from "@storybook/react";
import SignUp from "../../pages/SignUp";

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  title: "Pages/SignUp",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
