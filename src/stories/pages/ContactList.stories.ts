import type { Meta, StoryObj } from "@storybook/react";
import ContactList from "../../pages/ContactList";

const meta: Meta<typeof ContactList> = {
  component: ContactList,
  title: "Pages/ContactList",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
