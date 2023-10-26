import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App"; // Update the import path as needed

describe("App Component", () => {
  test("renders the Home component by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Welcome to the Home Page")).toBeInTheDocument();
  });

  test("navigates to the Login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  test("navigates to the Catalog page", () => {
    render(
      <MemoryRouter initialEntries={["/catalog"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Catalog Page")).toBeInTheDocument();
  });

  // Add more test cases for other routes in a similar manner
});
