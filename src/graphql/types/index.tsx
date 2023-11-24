import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Contact = {
  __typename?: 'Contact';
  contact_email?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_number?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createContact?: Maybe<Contact>;
  createUser?: Maybe<User>;
  deleteContact?: Maybe<Contact>;
  updateContact?: Maybe<Contact>;
};


export type MutationCreateContactArgs = {
  contact_email?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_number?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteContactArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateContactArgs = {
  contact_email?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_number?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  getAllContact?: Maybe<Array<Maybe<Contact>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  signInUser?: Maybe<Scalars['String']['output']>;
};


export type RootQueryTypeGetAllContactArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryTypeSignInUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};

export type ContactFragmentFragment = { __typename?: 'Contact', id?: string | null, contact_name?: string | null, contact_number?: number | null, contact_email?: string | null, userId?: number | null, isActive?: boolean | null };

export type UserFragmentFragment = { __typename?: 'User', id?: string | null, user_name?: string | null, email?: string | null, password?: string | null };

export type CreateContactMutationVariables = Exact<{
  contact_name: Scalars['String']['input'];
  contact_email: Scalars['String']['input'];
  contact_number: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type CreateContactMutation = { __typename?: 'Mutation', createContact?: { __typename?: 'Contact', id?: string | null, contact_name?: string | null, contact_number?: number | null, contact_email?: string | null, userId?: number | null, isActive?: boolean | null } | null };

export type DeleteContactMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteContactMutation = { __typename?: 'Mutation', deleteContact?: { __typename?: 'Contact', id?: string | null } | null };

export type UpdateContactMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  contact_name: Scalars['String']['input'];
  contact_email: Scalars['String']['input'];
  contact_number: Scalars['Int']['input'];
}>;


export type UpdateContactMutation = { __typename?: 'Mutation', updateContact?: { __typename?: 'Contact', id?: string | null, contact_name?: string | null, contact_number?: number | null, contact_email?: string | null, userId?: number | null, isActive?: boolean | null } | null };

export type SignUpMutationVariables = Exact<{
  user_name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: string | null, user_name?: string | null, email?: string | null, password?: string | null } | null };

export type GetAllContactQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetAllContactQuery = { __typename?: 'RootQueryType', getAllContact?: Array<{ __typename?: 'Contact', id?: string | null, contact_name?: string | null, contact_number?: number | null, contact_email?: string | null, userId?: number | null, isActive?: boolean | null } | null> | null };

export type SignInUserQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type SignInUserQuery = { __typename?: 'RootQueryType', signInUser?: string | null };

export const ContactFragmentFragmentDoc = gql`
    fragment ContactFragment on Contact {
  id
  contact_name
  contact_number
  contact_email
  userId
  isActive
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  user_name
  email
  password
}
    `;
export const CreateContactDocument = gql`
    mutation CreateContact($contact_name: String!, $contact_email: String!, $contact_number: Int!, $userId: Int!) {
  createContact(
    contact_name: $contact_name
    contact_email: $contact_email
    contact_number: $contact_number
    userId: $userId
  ) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type CreateContactMutationFn = Apollo.MutationFunction<CreateContactMutation, CreateContactMutationVariables>;

/**
 * __useCreateContactMutation__
 *
 * To run a mutation, you first call `useCreateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactMutation, { data, loading, error }] = useCreateContactMutation({
 *   variables: {
 *      contact_name: // value for 'contact_name'
 *      contact_email: // value for 'contact_email'
 *      contact_number: // value for 'contact_number'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateContactMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactMutation, CreateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactMutation, CreateContactMutationVariables>(CreateContactDocument, options);
      }
export type CreateContactMutationHookResult = ReturnType<typeof useCreateContactMutation>;
export type CreateContactMutationResult = Apollo.MutationResult<CreateContactMutation>;
export type CreateContactMutationOptions = Apollo.BaseMutationOptions<CreateContactMutation, CreateContactMutationVariables>;
export const DeleteContactDocument = gql`
    mutation DeleteContact($id: ID!) {
  deleteContact(id: $id) {
    id
  }
}
    `;
export type DeleteContactMutationFn = Apollo.MutationFunction<DeleteContactMutation, DeleteContactMutationVariables>;

/**
 * __useDeleteContactMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutation, { data, loading, error }] = useDeleteContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContactMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactMutation, DeleteContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactMutation, DeleteContactMutationVariables>(DeleteContactDocument, options);
      }
export type DeleteContactMutationHookResult = ReturnType<typeof useDeleteContactMutation>;
export type DeleteContactMutationResult = Apollo.MutationResult<DeleteContactMutation>;
export type DeleteContactMutationOptions = Apollo.BaseMutationOptions<DeleteContactMutation, DeleteContactMutationVariables>;
export const UpdateContactDocument = gql`
    mutation UpdateContact($id: ID!, $contact_name: String!, $contact_email: String!, $contact_number: Int!) {
  updateContact(
    id: $id
    contact_name: $contact_name
    contact_email: $contact_email
    contact_number: $contact_number
  ) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;
export type UpdateContactMutationFn = Apollo.MutationFunction<UpdateContactMutation, UpdateContactMutationVariables>;

/**
 * __useUpdateContactMutation__
 *
 * To run a mutation, you first call `useUpdateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactMutation, { data, loading, error }] = useUpdateContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *      contact_name: // value for 'contact_name'
 *      contact_email: // value for 'contact_email'
 *      contact_number: // value for 'contact_number'
 *   },
 * });
 */
export function useUpdateContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactMutation, UpdateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactMutation, UpdateContactMutationVariables>(UpdateContactDocument, options);
      }
export type UpdateContactMutationHookResult = ReturnType<typeof useUpdateContactMutation>;
export type UpdateContactMutationResult = Apollo.MutationResult<UpdateContactMutation>;
export type UpdateContactMutationOptions = Apollo.BaseMutationOptions<UpdateContactMutation, UpdateContactMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($user_name: String!, $email: String!, $password: String!) {
  createUser(user_name: $user_name, email: $email, password: $password) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      user_name: // value for 'user_name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const GetAllContactDocument = gql`
    query GetAllContact($userId: Int!) {
  getAllContact(userId: $userId) {
    ...ContactFragment
  }
}
    ${ContactFragmentFragmentDoc}`;

/**
 * __useGetAllContactQuery__
 *
 * To run a query within a React component, call `useGetAllContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContactQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAllContactQuery(baseOptions: Apollo.QueryHookOptions<GetAllContactQuery, GetAllContactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContactQuery, GetAllContactQueryVariables>(GetAllContactDocument, options);
      }
export function useGetAllContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContactQuery, GetAllContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContactQuery, GetAllContactQueryVariables>(GetAllContactDocument, options);
        }
export function useGetAllContactSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllContactQuery, GetAllContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllContactQuery, GetAllContactQueryVariables>(GetAllContactDocument, options);
        }
export type GetAllContactQueryHookResult = ReturnType<typeof useGetAllContactQuery>;
export type GetAllContactLazyQueryHookResult = ReturnType<typeof useGetAllContactLazyQuery>;
export type GetAllContactSuspenseQueryHookResult = ReturnType<typeof useGetAllContactSuspenseQuery>;
export type GetAllContactQueryResult = Apollo.QueryResult<GetAllContactQuery, GetAllContactQueryVariables>;
export const SignInUserDocument = gql`
    query SignInUser($email: String, $password: String) {
  signInUser(email: $email, password: $password)
}
    `;

/**
 * __useSignInUserQuery__
 *
 * To run a query within a React component, call `useSignInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignInUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInUserQuery(baseOptions?: Apollo.QueryHookOptions<SignInUserQuery, SignInUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SignInUserQuery, SignInUserQueryVariables>(SignInUserDocument, options);
      }
export function useSignInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SignInUserQuery, SignInUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SignInUserQuery, SignInUserQueryVariables>(SignInUserDocument, options);
        }
export function useSignInUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SignInUserQuery, SignInUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SignInUserQuery, SignInUserQueryVariables>(SignInUserDocument, options);
        }
export type SignInUserQueryHookResult = ReturnType<typeof useSignInUserQuery>;
export type SignInUserLazyQueryHookResult = ReturnType<typeof useSignInUserLazyQuery>;
export type SignInUserSuspenseQueryHookResult = ReturnType<typeof useSignInUserSuspenseQuery>;
export type SignInUserQueryResult = Apollo.QueryResult<SignInUserQuery, SignInUserQueryVariables>;