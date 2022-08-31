import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a RegistertPage component", () => {
  describe("When it's render", () => {
    test("It should show a 'Registro' heading", () => {
      render(<RegisterPage />);
      const resultTitle = screen.getByText("Registro");

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
