import type { UserResponse } from "../../../graphql/types/user";

export type {
  SignUpMutation,
  SignInUserQuery,
  SignUpMutationVariables,
} from "../../../graphql/types/user";

export type User = UserResponse;
