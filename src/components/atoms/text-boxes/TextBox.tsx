import React from "react";

interface Props {
  name: string;
  handelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<Props> = ({ name, handelChange }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      className="w-full p-2 border border-gray-300 rounded-md"
      required
      onChange={handelChange}
    />
  );
};

export default TextBox;
