import React from "react";
import Navbar from "../components/organisms/header/Navbar";
import AuthForm from "../components/organisms/forms/AuthForm";

const SignUp: React.FC = () => {
  return (
    <>
      <Navbar
        background="bg-blue-500"
        text_color="text-white"
        isLoggedin={false}
      />
      <AuthForm label="Sign Up" signup={true} />
    </>
  );
};

export default SignUp;
