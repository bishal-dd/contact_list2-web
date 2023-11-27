import { useRecoilCallback } from "recoil";
import { contactState } from "../atom";
import { CreateContactMutationVariables } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: CreateContactMutationVariables) => {
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
