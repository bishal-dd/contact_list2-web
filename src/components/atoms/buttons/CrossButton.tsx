import React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../store/entities/modal/atom";

const CrossButton: React.FC = () => {
  const setModalState = useSetRecoilState(modalState);

  const closeCreateModal = () => {
    // Update the Recoil state to close the modal
    setModalState((prevState) => ({
      ...prevState,
      isCreateModalOpen: false,
    }));
  };

  return (
    <button
      className="text-gray-600 hover:text-red-600"
      onClick={closeCreateModal}
    >
      <span className="text-2xl">&times;</span>
    </button>
  );
};

export default CrossButton;
