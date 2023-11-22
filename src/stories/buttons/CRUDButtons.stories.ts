import type { Meta, StoryObj } from "@storybook/react";
import CRUDButtons from "../../components/atoms/buttons/CRUD-buttons/CRUDButtons";

const meta: Meta<typeof CRUDButtons> = {
  component: CRUDButtons,
  title: "Atoms/Buttons/CRUDButton",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    icon: "plus",
    label: "Create Contact",
    background: "bg-blue-500",
    text_color: "text-white",
  },
};

export const Edit: Story = {
  args: {
    icon: "edit",
    label: "",
    background: "",
    text_color: "text-blue-500",
  },
};

export const Delete: Story = {
  args: {
    icon: "delete",
    label: "",
    background: "",
    text_color: "text-red-500",
  },
};
