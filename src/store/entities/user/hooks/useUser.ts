import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { initialState } from "..";
import { useSignUpMutation } from "../../../../graphql/types";

import { SignUpMutationVariables } from "../type";

export const useUser = () => {
  const { upsert } = useUpsert();

  // const [SignInUserQuery] = useSignInUserQuery();
  const [SignUpMutation] = useSignUpMutation();

  // const setUser = useRecoilCallback(
  //   () => async (input: Partial<User>) => {
  //     upsert({ ...input });

  //     const res = await SignInUserQuery({
  //       variables: {
  //         ...input,
  //       },
  //     });

  //     if (res.errors) {
  //       throw res.errors;
  //     }
  //   },
  //   [upsert, SignInUserQuery]
  // );

  const createUser = useRecoilCallback(
    () => async (input: { user: SignUpMutationVariables }) => {
      upsert({ ...initialState(), ...input.user });

      const res = await SignUpMutation({
        variables: {
          ...input.user,
        },
      });

      if (res.errors) {
        throw res.errors;
      }
    },
    [upsert, SignUpMutation]
  );

  return {
    createUser,
  };
};
