import React from "react";
import CUForm from "./forms/CRUD/CUForm";

interface Props {
  label: string;
  icon: string;
}

const FormLayout: React.FC<Props> = ({ label, icon }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg border  border-gray-300">
        <h2 className="text-xl font-bold mb-4">{label}</h2>
        <CUForm icon={icon} label={label} />
      </div>
    </div>
  );
};

export default FormLayout;
