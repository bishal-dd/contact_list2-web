import React from "react";
import AuthButton from "../../atoms/buttons/authentication-buttons/AuthButton";

interface Props {
  background: string;
  text_color: string;
  isLoggedin: boolean;
}

const Navbar: React.FC<Props> = ({ background, text_color, isLoggedin }) => {
  return (
    <nav className={`${background} p-4 fixed inset-x-0`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className={`${text_color} font-bold text-2xl`}>Your Logo</div>
          <div className="space-x-4">
            {isLoggedin ? (
              <>
                <AuthButton
                  text_color={text_color}
                  link="#"
                  label="Contact List"
                />
                <AuthButton text_color={text_color} link="#" label="Logout" />
              </>
            ) : (
              <>
                <AuthButton text_color={text_color} link="#" label="Login" />
                <AuthButton text_color={text_color} link="#" label="Signup" />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
