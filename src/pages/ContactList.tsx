import React, { useState } from "react";
import Table from "../components/molecules/table/Table";
import CRUDButtons from "../components/atoms/buttons/CRUD-buttons/CRUDButtons";
import Navbar from "../components/organisms/header/Navbar";
import CreateModal from "../components/organisms/modals/CreateModal";
import { modalState } from "../store/entities/modal/atom";
import { useRecoilState } from "recoil";

const ContactList: React.FC = () => {
  const [modalsState, setModalState] = useRecoilState(modalState);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
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
          <form onSubmit={openCreateModal}>
            <CRUDButtons
              label="Create Contact"
              icon="plus"
              text_color="text-white"
              background="bg-blue-500"
            />
          </form>
        </div>
        <div className="flex justify-center mb-4">
          <Table background="bg-blue-500" text_color="text-white" />
        </div>
      </div>

      {isCreateModalOpen && <CreateModal onClose={closeCreateModal} />}
    </>
  );
};

export default ContactList;
