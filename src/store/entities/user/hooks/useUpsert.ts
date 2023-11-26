import { useRecoilCallback } from "recoil";
import { userState } from "../atom";
import { CurrentUser } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: CurrentUser) => {
        if (input != null && input.id != null) {
          set(userState(input.id), input);
        } else {
          console.warn("Attempted to upsert a null or undefined user.");
        }
      },
    []
  );

  return {
    upsert,
  };
};
