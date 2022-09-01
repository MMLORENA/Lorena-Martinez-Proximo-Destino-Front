import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a RegistertPage component", () => {
  describe("When it's render", () => {
    test("It should show a 'Registro' heading", () => {
      render(<RegisterPage />);
      const resultTitle = screen.getByText("Registro");

      expect(resultTitle).toBeInTheDocument();
    });

    test("It should have a form  inside with 6 inputs", () => {
      render(<RegisterPage />);
      const form = screen.getByText("Usuario");

      expect(form).toBeInTheDocument();
    });
  });
});
