import React from "react";

const Logged_in: React.FC = () => {
  return (
    <div className="space-x-4">
      <a href="/" className="text-white">
        Logout
      </a>
      <a href="/sign_up" className="text-white">
        Sign up
      </a>
    </div>
  );
};

export default Logged_in;
