import React from "react";
import Navbar from "../components/organisms/header/Navbar";
import AuthFormLayout from "../components/organisms/AuthFormLayout";

const SignUp: React.FC = () => {
  return (
    <>
      <Navbar
        background="bg-blue-500"
        text_color="text-white"
        isLoggedin={false}
      />
      <AuthFormLayout label="Sign Up" signup={true} />
    </>
  );
};

export default SignUp;
