import type { Meta, StoryObj } from "@storybook/react";
import CUForm from "../../components/organisms/forms/CRUD/CUForm";

const meta: Meta<typeof CUForm> = {
  component: CUForm,
  title: "Molecules/Forms/CUForm",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    label: "Create Contact",
  },
};

export const Update: Story = {
  args: {
    label: "Update Contact",
    icon: "edit",
  },
};
