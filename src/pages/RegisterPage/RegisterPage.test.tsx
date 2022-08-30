import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given a RegistertPage component", () => {
  describe("When it's render", () => {
    test("It should have a form  inside", () => {
      render(<RegisterPage />);
      const form = screen.getByText("Usuario");

      expect(form).toBeInTheDocument();
    });
  });
});
