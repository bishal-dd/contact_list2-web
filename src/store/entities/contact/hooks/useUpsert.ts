import { useRecoilCallback } from "recoil";
import { contactState, contactsState } from "../atom";
import { Contact } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: Contact) => {
        if (input != null && input.id != null) {
          console.log(input);
          set(contactState(input.id), input);
          // Use set directly on the contactsState atom
          set(contactsState, (prevContacts) => {
            // Assuming input.id is unique identifier for contacts
            const updatedContacts = prevContacts.map((contact) =>
              contact.id === input.id ? input : contact
            );
            return updatedContacts;
          });
        }
      },
    []
  );

  return {
    upsert,
  };
};
