import React from "react";
import Table from "../components/molecules/table/Table";
import CRUDButtons from "../components/atoms/buttons/CRUD-buttons/CRUDButtons";
import Navbar from "../components/organisms/header/Navbar";
import CreateModal from "../components/organisms/modals/CreateModal";
import { modalState } from "../store/entities/modal/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const ContactList: React.FC = () => {
  const isCreateModalOpen = useRecoilValue(modalState);
  const setModalState = useSetRecoilState(modalState);

  const openCreateModal = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the Recoil state to open the modal
    setModalState((prevState) => ({
      ...prevState,
      isCreateModalOpen: !prevState.isCreateModalOpen, // Toggle the value
    }));
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

      {isCreateModalOpen.isCreateModalOpen && <CreateModal />}
    </>
  );
};

export default ContactList;
