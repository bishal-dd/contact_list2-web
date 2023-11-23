import { useRecoilCallback } from "recoil";
import { userState } from "../atom";
import { User } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: User) => {
        set(userState(input.id), input);
      },
    []
  );

  return {
    upsert,
  };
};
