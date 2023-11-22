import React from "react";

interface Props {
  label: string;
  id: string;
}

const Label: React.FC<Props> = ({ label, id }) => {
  return (
    <label htmlFor={id} className="block text-gray-600 mb-2">
      {label}
    </label>
  );
};

export default Label;
