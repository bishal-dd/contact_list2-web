import React from "react";
import Navbar from "../components/organisms/header/Navbar";
import AuthForm from "../components/molecules/forms/AuthForm";

const SignIn: React.FC = () => {
  return (
    <>
      <Navbar
        background="bg-blue-500"
        text_color="text-white"
        isLoggedin={false}
      />
      <AuthForm label="Sign In" signup={false} />
    </>
  );
};

export default SignIn;
