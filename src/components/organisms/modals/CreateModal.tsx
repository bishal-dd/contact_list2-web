import React, { useCallback } from "react";
import CrossButton from "../../atoms/buttons/CrossButton";
import CUForm from "../forms/CRUD/CUForm";
import { ContactType } from "../forms/CRUD/util";
import { useCreateContact } from "../../../store/entities/contact/hooks/useCreateContact";
import { useUser } from "../../../store/entities/user/hooks/useUser";
// import { userState } from "../../../store/entities/user";
// import { useRecoilValue } from "recoil";

const CreateModal: React.FC = () => {
  const { createContact } = useCreateContact();
  const { getCurrentUser } = useUser();

  const currentUserID = getCurrentUser()?.id;

  // // Assuming userState is an atom
  // const currentUserAtom = useRecoilValue(userState(currentUserID || ""));
  // console.log(currentUserAtom);
  const handleAddContact = useCallback(
    async (contact: ContactType) => {
      try {
        const contactWithUserId = {
          ...contact,
          userId: currentUserID || "", // Assuming userId is a string
        };

        await createContact({ contact: contactWithUserId });
      } catch (error) {
        console.error("Error setting contact:", error);
      }
    },
    [createContact]
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white w-1/3 p-4 rounded-md shadow-lg">
        <div className="flex justify-end">
          <CrossButton />
        </div>
        <h2 className="text-xl font-bold mb-4">Create Contact</h2>
        <CUForm icon="plus" label="Create" handleSubmit={handleAddContact} />
      </div>
    </div>
  );
};

export default CreateModal;
