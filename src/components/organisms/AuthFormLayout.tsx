import React, { useCallback } from "react";
import AuthForm from "./forms/Auth/AuthForm";
import { UserType, UserSignInType } from "./forms/Auth/util";
import { useUser } from "../../store/entities/user/hooks/useUser";
import { useNavigate } from "react-router-dom";

interface Props {
  label: string;
  signup: boolean;
}

const AuthFormLayout: React.FC<Props> = ({ label, signup }) => {
  const navigate = useNavigate();
  const { createUser } = useUser();
  const { setUser } = useUser();
  const handleAddUser = useCallback(
    (user: UserType) => {
      createUser({ user: user });
    },
    [createUser]
  );

  const handleSetUser = useCallback(
    async (user: UserSignInType) => {
      try {
        await setUser(user);

        navigate("/contact");
      } catch (error) {
        console.error("Error setting user:", error);
      }
    },
    [navigate, setUser]
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg border  border-gray-300">
        <h2 className="text-2xl font-bold mb-4">{label}</h2>
        <AuthForm
          label={label}
          signup={signup}
          handelSubmit={signup ? handleAddUser : handleSetUser}
        />
      </div>
    </div>
  );
};

export default AuthFormLayout;
