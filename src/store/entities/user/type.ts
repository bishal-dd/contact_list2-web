import type {
  SignUpMutationVariables,
  UserResponse,
} from "../../../graphql/types/user";

export type {
  SignUpMutation,
  SignInUserQuery,
  SignUpMutationVariables,
  SignInUserQueryVariables,
} from "../../../graphql/types/user";

export type User = UserResponse;
export type UserSignInType = Omit<SignUpMutationVariables, "user_name">;
