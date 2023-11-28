import { useRecoilCallback } from "recoil";
import { contactState, contactsState } from "../atom";
import { Contact } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: Contact) => {
        if (input != null && input.id != null) {
          set(contactState(input.id), input);
        }
      },
    []
  );

  return {
    upsert,
  };
};
