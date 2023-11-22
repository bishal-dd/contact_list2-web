import type { Meta, StoryObj } from "@storybook/react";
import CreateModal from "../../components/organisms/modals/CreateModal";

const meta: Meta<typeof CreateModal> = {
  component: CreateModal,
  title: "Organisms/Modal/CreateModal",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
