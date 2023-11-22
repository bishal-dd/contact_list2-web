import type { Meta, StoryObj } from "@storybook/react";
import FormLayout from "../components/organisms/FormLayout";

const meta: Meta<typeof FormLayout> = {
  component: FormLayout,
  title: "Organisms/Forms/FormLayout",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateForm: Story = {
  args: {
    label: "Create",
    icon: "plus",
  },
};

export const EditForm: Story = {
  args: {
    label: "Update",
    icon: "edit",
  },
};
