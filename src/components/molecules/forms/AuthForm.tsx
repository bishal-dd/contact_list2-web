import React, { useState } from "react";
import TextBox from "../../atoms/text-boxes/TextBox";
import CRUDButtons from "../../atoms/buttons/CRUD-buttons/CRUDButtons";
import Label from "../../atoms/labels/Label";
import { useUser } from "../../../store/entities/user/hooks/useUser";

interface Props {
  label: string;
  signup: boolean;
}

const AuthForm: React.FC<Props> = ({ label, signup }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg border  border-gray-300">
        <h2 className="text-2xl font-bold mb-4">{label}</h2>
        <form onSubmit={handleSubmit}>
          {signup ? (
            <div className="mb-4">
              <Label label="Name" id="name" />
              <TextBox name="name" />
            </div>
          ) : null}
          <div className="mb-4">
            <Label label="Email" id="email" />
            <TextBox name="email" />
          </div>
          <div className="mb-4">
            <Label label="Password" id="password" />
            <TextBox name="password" />
          </div>
          <CRUDButtons
            icon=""
            label={label}
            text_color="text-white"
            background="bg-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
