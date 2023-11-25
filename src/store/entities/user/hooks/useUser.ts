import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { initialState } from "..";
import {
  useSignInUserQuery,
  useSignUpMutation,
} from "../../../../graphql/types";

import { SignUpMutationVariables, User } from "../type";

export const useUser = () => {
  const { upsert } = useUpsert();

  const { refetch: signInUserQuery } = useSignInUserQuery();
  const [signUpMutation] = useSignUpMutation();

  const setUser = useRecoilCallback(
    () => async (input: { user: User }) => {
      const res = await signInUserQuery({
        
        variables: {
          ...input,
        },
      });

      if (res.errors) {
        throw res.errors;
      }
    },
    [upsert, signInUserQuery]
  );

  const createUser = useRecoilCallback(
    () => async (input: { user: SignUpMutationVariables }) => {
      const res = await signUpMutation({
        variables: {
          ...input.user,
        },
      });

      if (res.errors) {
        throw res.errors;
      }
    },
    [signUpMutation]
  );

  return {
    setUser,
    createUser,
  };
};
