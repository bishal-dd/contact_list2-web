import type { Meta, StoryObj } from "@storybook/react";
import EditContact from "../../pages/EditContact";

const meta: Meta<typeof EditContact> = {
  component: EditContact,
  title: "Pages/EditContact",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
