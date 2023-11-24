import React, { useCallback } from "react";
import AuthForm from "./forms/Auth/AuthForm";
import { UserType } from "./forms/Auth/util";
import { useUser } from "../../store/entities/user/hooks/useUser";

interface Props {
  label: string;
  signup: boolean;
}

const AuthFormLayout: React.FC<Props> = ({ label, signup }) => {
  const { createUser } = useUser();
  const handleAddUser = useCallback((user: UserType) => {
    createUser({ user: user });
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg border  border-gray-300">
        <h2 className="text-2xl font-bold mb-4">{label}</h2>
        <AuthForm label={label} signup={signup} handelSubmit={handleAddUser} />
      </div>
    </div>
  );
};

export default AuthFormLayout;
