import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import {
  useSignInUserQuery,
  useSignUpMutation,
} from "../../../../graphql/types";
import { CurrentUser, SignUpMutationVariables, UserSignInType } from "../type";
import { decodeToken } from "react-jwt";

export const useUser = () => {
  const { upsert } = useUpsert();

  const { refetch: signInUserRefetch } = useSignInUserQuery();
  const [signUpMutation] = useSignUpMutation();

  const setUser = useRecoilCallback(
    () => async (input: Partial<UserSignInType>) => {
      try {
        const res = await signInUserRefetch({
          ...input,
        });

        const usertoken: string | null = res.data?.signInUser ?? null;

        if (usertoken) {
          localStorage.setItem("token", usertoken);

          try {
            const user: CurrentUser | null = decodeToken(usertoken);
            if (user) {
              upsert(user);
            }
          } catch (decodeError) {
            throw new Error(`Error decoding token: ${decodeError}`);
          }
        } else {
          throw new Error(`Error during sign-in:, ${res.errors}`);
        }
      } catch (fetchError) {
        throw new Error(`Error during sign-in fetch:, ${fetchError}`);
      }
    },
    [upsert, signInUserRefetch]
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
