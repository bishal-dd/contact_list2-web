import React from "react";
import Navbar from "../components/organisms/header/Navbar";
import FormLayout from "../components/organisms/FormLayout";

const EditContact: React.FC = () => {
  return (
    <div>
      <Navbar
        background="bg-blue-500"
        text_color="text-white"
        isLoggedin={false}
      />
      <FormLayout label="Update" icon="edit" />
    </div>
  );
};

export default EditContact;
