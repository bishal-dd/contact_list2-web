import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../../components/organisms/header/Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Organisms/Header/Navbar",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Logged_in: Story = {
  args: {
    background: "bg-blue-500",
    text_color: "text-white",
    isLoggedin: true,
  },
};

export const Logged_out: Story = {
  args: {
    background: "bg-blue-500",
    text_color: "text-white",
    isLoggedin: false,
  },
};
