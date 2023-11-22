import React from "react";

const CrossButton: React.FC = () => {
  return (
    <button className="text-gray-600 hover:text-red-600">
      <span className="text-2xl">&times;</span>
    </button>
  );
};

export default CrossButton;
