import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Given a Logo component", () => {
  describe("When it's render", () => {
    test("Then should show a picture of logo alt text 'logo próximo destino' inside", () => {
      const expectedAltText = "logo próximo destino";

      render(<Logo />);

      const picture: HTMLImageElement = screen.getByAltText(expectedAltText);

      expect(picture.alt).toBe(expectedAltText);
    });
  });
});
