import { render, screen } from "@testing-library/react";
import { Destinations } from "../../store/models/Destinations";
import destinationsTest from "../../test-utils/mocksDestinations/mockDestinations";
import Wrapper from "../../test-utils/Wrapper";
import DestinationsList from "./DestinationsList";

let mockSelectorReturn: Destinations = [];

let mockDestinations: Destinations = [];

jest.mock("../../store/hooks/useDestinations/useDestinations", () => () => ({
  getUserDestinations: jest.fn().mockReturnValue(mockDestinations),
}));

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockSelectorReturn,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a DestinationsList component", () => {
  describe("When it's render", () => {
    describe("And there is any destination availability", () => {
      test("Then it should show '¿Tú Próximo Destino?'", () => {
        const expectedText = "¿Tú Próximo Destino?";

        mockDestinations = [];
        mockSelectorReturn = [];
        render(<DestinationsList />, { wrapper: Wrapper });

        const resultText = screen.getByText(expectedText);

        expect(resultText).toHaveTextContent(expectedText);
      });

      test("Then it should show an image with alt text 'icono mundo con un avión a su alrededo'", () => {
        const expectedAltText = "icono mundo con un avión a su alrededo";
        mockDestinations = [];
        mockSelectorReturn = [];

        render(<DestinationsList />, { wrapper: Wrapper });

        const resultImage: HTMLImageElement = screen.getByRole("img");

        expect(resultImage.alt).toContain(expectedAltText);
      });
    });

    describe("And there is destination availability", () => {
      test("Then it should show a Destination with title 'Nepal' inside'", () => {
        const expectedText = "Nepal";
        mockDestinations = destinationsTest;

        mockSelectorReturn = destinationsTest;
        render(<DestinationsList />, { wrapper: Wrapper });

        const resultText = screen.getByRole("heading", { name: expectedText });

        expect(resultText).toBeInTheDocument();
      });

      test("Then it should show an image with alt text 'icono mundo con un avión a su alrededo'", () => {
        const expectedAltText = "Nepal";
        mockDestinations = destinationsTest;

        mockSelectorReturn = destinationsTest;
        render(<DestinationsList />, { wrapper: Wrapper });

        const resultImage: HTMLImageElement =
          screen.getByAltText(expectedAltText);

        expect(resultImage.alt).toBe(expectedAltText);
      });
    });
  });
});
