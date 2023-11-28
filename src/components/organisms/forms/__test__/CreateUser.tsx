import { gql, useQuery } from "@apollo/client";

// Make sure that both the query and the component are exported
export const CREATE_USER_MUTATION = gql`
  mutation SignUp($user_name: String!, $email: String!, $password: String!) {
    createUser(user_name: $user_name, email: $email, password: $password) {
      id
      user_name
      email
    }
  }
`;

export function Dog({ name }) {
  const { loading, error, data } = useQuery(CREATE_USER_MUTATION, {
    variables: { name },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <p>
      {data.dog.name} is a {data.dog.breed}
    </p>
  );
}
