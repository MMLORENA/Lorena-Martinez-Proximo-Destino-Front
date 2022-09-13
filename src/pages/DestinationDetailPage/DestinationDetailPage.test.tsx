import { render, screen } from "@testing-library/react";
import DestinationDetailPage from "./DestinationDetailPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { store } from "../../store/store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => "1",
}));

const mockDestination = {
  destination: {
    destination: "Nepal",
    image:
      "https://elviajerofeliz.com/wp-content/uploads/2019/12/Que-ver-en-Nepal-_-10-Lugares-Imprescindibles.jpg",
    latitude: 200,
    longitude: 1000,
    category: "adventure",
    firstPlan: "Himalaya",
    descriptionFirstPlan: "trekking",
    id: "63175bcd3349cd8da4ca9dbd",
    backupImage: "A",
  },
};

const mockDelete = jest.fn();

jest.mock("../../store/hooks/useDestinations/useDestinations", () => () => ({
  ...jest.requireActual("../../store/hooks/useDestinations/useDestinations"),
  deleteDestinations: mockDelete,
  getByIdDestination: jest.fn().mockResolvedValue(mockDestination),
}));

describe("Given a DestinationDetailPage", () => {
  describe("When it's render", () => {
    test("Then should show a button with text 'Eliminar'", () => {
      const expectText = "Eliminar";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/destinos/1"]}>
            <DestinationDetailPage />
          </MemoryRouter>
        </Provider>
      );

      const resultTitle = screen.getByRole("button", {
        name: expectText,
      });

      expect(resultTitle).toBeInTheDocument();
    });

    describe("And the user clicks on the button", () => {
      test("Then it should be invoke delete function", async () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={["/destinos/1"]}>
              <DestinationDetailPage />
            </MemoryRouter>
          </Provider>
        );

        const button = screen.getByRole("button", {
          name: "Eliminar",
        });

        await userEvent.click(button);

        expect(mockDelete).toHaveBeenCalled();
      });
    });
  });
});
