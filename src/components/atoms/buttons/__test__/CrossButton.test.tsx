import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CrossButton from "../CrossButton";

test("CRUDButton renders correctly", () => {
  render(
    <MemoryRouter>
      <CrossButton />
    </MemoryRouter>
  );

  const buttonElement = screen.getByRole("button"); // Get the button by its role
  expect(buttonElement).toBeInTheDocument();
});
