import type { Meta, StoryObj } from "@storybook/react";
import Table from "../../components/molecules/table/Table";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Molecules/Tables/Table",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    background: "bg-blue-500",
    text_color: "text-white",
  },
};
