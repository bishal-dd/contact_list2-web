import { act, render, screen, waitFor } from "@testing-library/react";
import AuthForm from "../Auth/AuthForm";
import { vi } from "vitest";
import { gql } from "@apollo/client";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/client/testing";

vi.mock("../Auth/util", () => ({
  initialValues: {
    user_name: "",
    email: "",
    password: "",
  },
  AuthSchema: {},
  UserType: {},
}));

const mockHandelSubmit = vi.fn();

// Mock the GraphQL mutation
const mocks = [
  {
    request: {
      query: `
        mutation SignUp(
          $user_name: String!
          $email: String!
          $password: String!
        ) {
          createUser(
            user_name: $user_name
            email: $email
            password: $password
          ) {
            id
            user_name
            email
          }
        }
      `,
      variables: {
        user_name: "Bishal",
        email: "test@example.com",
        password: "password123",
      },
    },
    result: {
      data: {
        createUser: {
          id: "123",
          user_name: "Bishal",
          email: "test@example.com",
        },
      },
    },
  },
];

test("AuthForm renders correctly for signup", () => {
  render(
    <AuthForm label="Sign Up" signup={true} handelSubmit={mockHandelSubmit} />
  );

  const userNameLabel = screen.getByLabelText("Name");
  expect(userNameLabel).toBeInTheDocument();

  const userNameInput = screen.getByTestId("textbox-user_name");
  expect(userNameInput).toBeInTheDocument();

  const emailLabel = screen.getByLabelText("Email");
  expect(emailLabel).toBeInTheDocument();

  const emailInput = screen.getByTestId("textbox-email");
  expect(emailInput).toBeInTheDocument();

  const passwordLabel = screen.getByLabelText("Password");
  expect(passwordLabel).toBeInTheDocument();

  const passwordInput = screen.getByTestId("textbox-password");
  expect(passwordInput).toBeInTheDocument();

  const submitButton = screen.getByText("Sign Up");
  expect(submitButton).toBeInTheDocument();
});

test("AuthForm renders correctly for login", () => {
  render(
    <AuthForm label="Login" signup={false} handelSubmit={mockHandelSubmit} />
  );

  const emailLabel = screen.getByLabelText("Email");
  expect(emailLabel).toBeInTheDocument();

  const emailInput = screen.getByTestId("textbox-email");
  expect(emailInput).toBeInTheDocument();

  const passwordLabel = screen.getByLabelText("Password");
  expect(passwordLabel).toBeInTheDocument();

  const passwordInput = screen.getByTestId("textbox-password");
  expect(passwordInput).toBeInTheDocument();

  const submitButton = screen.getByText("Login");
  expect(submitButton).toBeInTheDocument();
});

test("AuthForm submits form data when form is valid", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AuthForm
        label="Sign Up"
        signup={true}
        handelSubmit={(data) => {
          mockHandelSubmit(data); // Call the mock function with form data
        }}
      />
    </MockedProvider>
  );

  const userNameInput = screen.getByTestId("textbox-user_name");
  expect(userNameInput).toBeInTheDocument();

  const emailInput = screen.getByTestId("textbox-email");
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByTestId("textbox-password");
  expect(passwordInput).toBeInTheDocument();

  const submitButton = screen.getByText("Sign Up");
  userEvent.click(submitButton);

  await act(async () => {
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(mockHandelSubmit).toHaveBeenCalledWith({
        user_name: "Bishal",
        email: "test@example.com",
        password: "password123",
      });
    });
  });
});
