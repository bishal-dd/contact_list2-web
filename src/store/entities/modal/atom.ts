// atoms/modalState.ts
import { atom } from "recoil";

export const modalState = atom({
  key: "modalState", // Update the key to avoid conflicts
  default: {
    isCreateModalOpen: false,
  },
});
