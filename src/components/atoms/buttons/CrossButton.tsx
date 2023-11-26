import React from "react";

interface Props {
  onClose: () => void;
}
const CrossButton: React.FC<Props> = ({ onClose }) => {
  return (
    <button className="text-gray-600 hover:text-red-600" onClick={onClose}>
      <span className="text-2xl">&times;</span>
    </button>
  );
};

export default CrossButton;
