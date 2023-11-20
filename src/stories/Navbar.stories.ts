import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/header/Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Navbar",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Logged_in: Story = {
  args: {},
};

export const Logged_out: Story = {
  args: {},
};
