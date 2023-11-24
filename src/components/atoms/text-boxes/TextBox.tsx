import React from "react";
import { Field } from "formik";

interface Props {
  name: string;
  type: string;
}

const TextBox: React.FC<Props> = ({ name, type }) => {
  return (
    <Field
      id={name}
      name={name}
      className="w-full p-2 border border-gray-300 rounded-md"
      type={type}
    />
  );
};

export default TextBox;
