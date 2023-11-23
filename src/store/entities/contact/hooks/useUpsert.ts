import { useRecoilCallback } from "recoil";
import { contactState } from "../atom";
import { Contact } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: Contact) => {
        set(contactState(input.id), input);
      },
    []
  );

  return {
    upsert,
  };
};
