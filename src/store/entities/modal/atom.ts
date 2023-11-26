import { createState } from "../../util/createState";

const key = (str: string) => `src/store/entities/modal/${str}`;

export const initialState = () => ({
  isCreateModalOpen: false,
});

export const { state: modalState } = createState({
  key,
  initialState,
});
