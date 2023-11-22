import React from "react";

interface Props {
  text_color: string;
  link: string;
  label: string;
}

const AuthButton: React.FC<Props> = ({ text_color, link, label }) => {
  return (
    <a href={link} className={`${text_color}`}>
      {label}
    </a>
  );
};

export default AuthButton;
