import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text_color: string;
  link: string;
  label: string;
}

const AuthButton: React.FC<Props> = ({ text_color, link, label }) => {
  return (
    <Link to={link} className={`${text_color}`}>
      {label}
    </Link>
  );
};

export default AuthButton;
