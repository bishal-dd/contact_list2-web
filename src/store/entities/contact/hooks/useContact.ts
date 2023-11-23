import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { contactState } from "../atom";
import { Contact } from "../type";
import { useUpdateContactMutation } from "../../../../graphql/types";

export const useContact = (contactId: string) => {
  const { upsert } = useUpsert();

  const [UpdateContactMutation] = useUpdateContactMutation();

  const setContact = useRecoilCallback(
    ({ snapshot }) =>
      async (input: Partial<Contact>) => {
        const prev = await snapshot.getPromise(contactState(contactId));
        upsert({ ...prev, ...input });

        const res = await UpdateContactMutation({
          variables: {
            id: contactId,
            ...input,
          },
        });
        if (res.errors) {
          upsert(prev);
        }
      },
    [upsert, UpdateContactMutation, contactId]
  );

  return {
    setContact,
  };
};
