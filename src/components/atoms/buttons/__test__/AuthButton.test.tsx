import { render, screen } from "@testing-library/react";
import AuthButton from "../authentication-buttons/AuthButton";
import { MemoryRouter } from "react-router-dom";

test("Button renders correctly", () => {
  render(
    <MemoryRouter>
      <AuthButton text_color="text-blue-500" link="/" label="Login" />
    </MemoryRouter>
  );

  const buttonElement = screen.getByText("Login");
  expect(buttonElement).toBeInTheDocument();
});

test("Renders button with correct text color class", () => {
  render(
    <MemoryRouter>
      <AuthButton text_color="text-blue-500" link="/" label="Login" />
    </MemoryRouter>
  );

  const buttonElement = screen.getByText("Login");
  expect(buttonElement).toHaveClass("text-blue-500");
});
