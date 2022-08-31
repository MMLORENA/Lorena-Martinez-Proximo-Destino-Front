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

    test("It should have a image with alt text  with 'estrellas Via Lactea'", () => {
      const expectedAltText = "estrellas Via Lactea";
      render(<RegisterPage />);
      const resultImage: HTMLImageElement =
        screen.getByAltText(expectedAltText);

      expect(resultImage).toHaveProperty("alt");
    });
  });
});
