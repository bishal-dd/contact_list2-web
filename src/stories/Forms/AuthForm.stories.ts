import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "../../components/organisms/forms/AuthForm";

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
  title: "Molecules/Forms/AuthForm",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    label: "Sign In",
    signup: false,
  },
};

export const SignUP: Story = {
  args: {
    label: "Sign Up",
    signup: true,
  },
};
