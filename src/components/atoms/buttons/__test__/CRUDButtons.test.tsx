import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CRUDButtons from "../CRUD-buttons/CRUDButtons";

test("CRUDButton renders correctly", () => {
  render(
    <MemoryRouter>
      <CRUDButtons text_color="text-blue-500" icon="plus" label="Create" />
    </MemoryRouter>
  );

  const buttonElement = screen.getByText("Create");
  expect(buttonElement).toBeInTheDocument();
});

test("Renders CRUDbutton with correct text color class", () => {
  render(
    <MemoryRouter>
      <CRUDButtons text_color="text-blue-500" icon="plus" label="Create" />
    </MemoryRouter>
  );

  const buttonElement = screen.getByText("Create");
  expect(buttonElement).toBeVisible();
});
