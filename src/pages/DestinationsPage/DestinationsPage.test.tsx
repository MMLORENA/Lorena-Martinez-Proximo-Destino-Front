import { render, screen } from "@testing-library/react";
import { Destinations } from "../../store/models/Destinations";
import destinationsTest from "../../test-utils/mocksDestinations/mockDestinations";
import Wrapper from "../../test-utils/Wrapper";
import DestinationsPage from "./DestinationsPage";
import * as router from "react-router";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { store } from "../../store/store";

let mockSelectorReturn: Destinations;
jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockSelectorReturn,
}));

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

afterEach(() => jest.clearAllMocks());

describe("Given a DestinationsPage component", () => {
  describe("When it's render", () => {
    test("Then it should show a button with text 'Nuevo Destino'", () => {
      mockSelectorReturn = [];
      const expectedText = "Nuevo Destino";

      render(<DestinationsPage />, { wrapper: Wrapper });

      const resultButton = screen.getByRole("button", { name: expectedText });

      expect(resultButton).toBeInTheDocument();
    });

    describe("And the user clicks on the button", () => {
      test("Then it should change page to '/crear'", async () => {
        render(
          <>
            <Provider store={store}>
              <MemoryRouter>
                <DestinationsPage />
              </MemoryRouter>
            </Provider>
          </>
        );
        const button = screen.getByRole("button", { name: "Nuevo Destino" });
        await userEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith("/crear");
      });
    });

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
