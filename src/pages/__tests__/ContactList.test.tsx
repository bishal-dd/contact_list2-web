import { render, screen } from "@testing-library/react";
import ContactList from "../ContactList";

test("ContactList renders correctly", () => {
  render(<ContactList />);

  const buttonElement = screen.getByRole("button"); // Get the button by its role
  expect(buttonElement).toBeInTheDocument();
});
