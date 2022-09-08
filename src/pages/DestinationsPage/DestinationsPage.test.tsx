import { render, screen } from "@testing-library/react";
import { Destinations } from "../../store/models/Destinations";
import destinationsTest from "../../test-utils/mocksDestinations/mockDestinations";
import Wrapper from "../../test-utils/Wrapper";
import DestinationsPage from "./DestinationsPage";

let mockSelectorReturn: Destinations;
jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockSelectorReturn,
}));

afterEach(() => jest.clearAllMocks());

describe("Given a DestinationsPage component", () => {
  describe("When it's render", () => {
    describe("And there is user destinations", () => {
      test("It should show a picture with alt text 'Nepal'", () => {
        mockSelectorReturn = destinationsTest;
        const expectedAltText = "Nepal";
        render(<DestinationsPage />, { wrapper: Wrapper });

        const resultImage = screen.getByAltText(expectedAltText);

        expect(resultImage).toBeInTheDocument();
      });
    });
  });

  describe("And there is no user destinations", () => {
    test("It should show a picture with alt text 'icono mundo con un avión a su alrededor' inside", () => {
      mockSelectorReturn = [];
      const expectedAltText = "icono mundo con un avión a su alrededor";

      render(<DestinationsPage />, { wrapper: Wrapper });

      const resultImage = screen.getByAltText(expectedAltText);

      expect(resultImage).toBeInTheDocument();
    });
  });
});
