import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/atoms/labels/Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Atoms/Input/Label",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    label: "Name",
    id: "contact_name",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    id: "contact_email",
  },
};

export const Phone: Story = {
  args: {
    label: "Phone",
    id: "contact_phone",
  },
};
