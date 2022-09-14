import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Given a Logo component", () => {
  describe("When it's render", () => {
    test("Then should show a image with the'logo próximo destino' inside", () => {
      render(<Logo />);

      const picture = screen.getByRole("heading");

      expect(picture).toBeInTheDocument();
    });
  });
});
