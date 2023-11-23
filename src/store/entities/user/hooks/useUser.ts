import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { User } from "../type";
import { useSignInUserQuery } from "../../../../graphql/types";

export const useUser = () => {
  const { upsert } = useUpsert();

  const [SignInUserQuery] = useSignInUserQuery();

  const setUser = useRecoilCallback(
    () => async (input: Partial<User>) => {
      upsert({ ...input });

      const res = await SignInUserQuery({
        variables: {
          ...input,
        },
      });

      if (res.errors) {
        throw res.errors;
      }
    },
    [upsert, SignInUserQuery]
  );

  return {
    setUser,
  };
};
