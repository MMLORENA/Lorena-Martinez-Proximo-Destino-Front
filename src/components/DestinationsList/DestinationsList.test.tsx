import { render, screen } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import DestinationsList from "./DestinationsList";

describe("Given a DestinationsList component", () => {
  describe("When it's render", () => {
    describe("And there is any destination availability", () => {
      test("Then it should show '¿Tú Próximo Destino?'", () => {
        const expectedText = "¿Tú Próximo Destino?";

        render(<DestinationsList />, { wrapper: Wrapper });

        const resultText = screen.getByText(expectedText);

        expect(resultText).toHaveTextContent(expectedText);
      });

      test("Then it should show an image with alt text 'icono mundo con un avión a su alrededo'", () => {
        const expectedAltText = "icono mundo con un avión a su alrededo";

        render(<DestinationsList />, { wrapper: Wrapper });

        const resultImage: HTMLImageElement = screen.getByRole("img");

        expect(resultImage.alt).toContain(expectedAltText);
      });
    });
  });
});
