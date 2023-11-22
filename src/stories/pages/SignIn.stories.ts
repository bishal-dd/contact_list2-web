import type { Meta, StoryObj } from "@storybook/react";
import SignIn from "../../pages/SignIn";

const meta: Meta<typeof SignIn> = {
  component: SignIn,
  title: "Pages/SignIn",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
