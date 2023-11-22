import type { Meta, StoryObj } from "@storybook/react";
import AuthButton from "../../components/atoms/buttons/authentication-buttons/AuthButton";

const meta: Meta<typeof AuthButton> = {
  component: AuthButton,
  title: "Atoms/Buttons/AuthButton",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    text_color: "text-white",
    link: "/",
    label: "Login",
  },
};

export const Logout: Story = {
  args: {
    text_color: "text-white",
    link: "/",
    label: "Logout",
  },
};

export const Signup: Story = {
  args: {
    text_color: "text-white",
    link: "/",
    label: "Signup",
  },
};
