import React from "react";

interface Props {
  name: string;
}

const TextBox: React.FC<Props> = ({ name }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  );
};

export default TextBox;
