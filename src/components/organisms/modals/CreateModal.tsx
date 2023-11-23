import React from "react";
import CrossButton from "../../atoms/buttons/CrossButton";
import CUForm from "../forms/CUForm";

const CreateModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white w-1/3 p-4 rounded-md shadow-lg">
        <div className="flex justify-end">
          <CrossButton />
        </div>
        <h2 className="text-xl font-bold mb-4">Create Contact</h2>
        <CUForm icon="plus" label="Create" />
      </div>
    </div>
  );
};

export default CreateModal;
