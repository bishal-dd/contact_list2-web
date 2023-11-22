import React from "react";
import Table from "../components/molecules/table/Table";
import CRUDButtons from "../components/atoms/buttons/CRUD-buttons/CRUDButtons";
import Navbar from "../components/organisms/header/Navbar";

const ContactList: React.FC = () => {
  return (
    <>
      <Navbar
        background="bg-blue-500"
        text_color="text-white"
        isLoggedin={true}
      />

      <div className="container mx-auto py-20">
        <h1 className="text-2xl font-bold mb-4">Contact List</h1>
        <div className="flex justify-center mb-4">
          <CRUDButtons
            label="Create Contact"
            icon="plus"
            text_color="text-white"
            background="bg-blue-500"
          />
        </div>
        <div className="flex justify-center mb-4">
          <Table background="bg-blue-500" text_color="text-white" />
        </div>
      </div>
    </>
  );
};

export default ContactList;
