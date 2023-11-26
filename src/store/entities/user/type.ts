import type {
  SignInUserQueryVariables,
  UserResponse,
} from "../../../graphql/types/user";

export type {
  SignUpMutation,
  SignInUserQuery,
  SignUpMutationVariables,
  SignInUserQueryVariables,
} from "../../../graphql/types/user";

export type User = UserResponse;
export type UserSignInType = SignInUserQueryVariables;
export type CurrentUser = Omit<User, "password"> & {
  userId: string;
  iat?: number;
};
