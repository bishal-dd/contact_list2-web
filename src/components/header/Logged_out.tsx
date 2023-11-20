import React from "react";

const Logged_out: React.FC = () => {
  return (
    <div className="space-x-4">
      <a href="/" className="text-white">
        Sign in
      </a>
      <a href="/sign_up" className="text-white">
        Sign up
      </a>
    </div>
  );
};

export default Logged_out;
