import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import {
  CreateContactMutationVariables,
  useCreateContactMutation,
} from "../../../../graphql/types";

export const useCreateContact = () => {
  const [createContactMutation] = useCreateContactMutation();
  const { upsert } = useUpsert();

  const createContact = useRecoilCallback(
    () => async (input: { contact: CreateContactMutationVariables }) => {
      const res = await createContactMutation({
        variables: {
          ...input.contact,
        },
      });

      if (res.errors) {
        throw res.errors;
      } else {
        upsert({ ...input.contact });
      }
    },
    [createContactMutation]
  );

  return {
    createContact,
  };
};
