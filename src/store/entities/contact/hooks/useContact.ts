import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { contactState } from "../atom";
import { Contact } from "../type";
import {
  useUpdateContactMutation,
  useCreateContactMutation,
} from "../../../../graphql/types";

import { CreateContactMutationVariables } from "../type";

export const useContact = (contactId: string) => {
  const { upsert } = useUpsert();

  const [updateContactMutation] = useUpdateContactMutation();
  const [createContactMutation] = useCreateContactMutation();

  const setContact = useRecoilCallback(
    ({ snapshot }) =>
      async (input: Partial<Contact>) => {
        const prev = await snapshot.getPromise(contactState(contactId));
        upsert({ ...prev, ...input });

        const res = await updateContactMutation({
          variables: {
            id: contactId,
            ...input,
          },
        });
        if (res.errors) {
          upsert(prev);
        }
      },
    [upsert, updateContactMutation, contactId]
  );

  return {
    setContact,
  };
};
