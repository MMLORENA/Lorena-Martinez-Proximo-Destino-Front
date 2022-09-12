import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import NewDestinationPage from "./NewDestinationPage";

describe("Given a NewDestinationPage component", () => {
  describe("When it's render", () => {
    test("It should show a 'Crea tu' heading inside", () => {
      const expectText = "Crea tu";
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <NewDestinationPage />
            </MemoryRouter>
          </Provider>
        </>
      );
      const resultTitle = screen.getByRole("heading", { name: expectText });

      expect(resultTitle).toBeInTheDocument();
    });

    test("Then it should have text 'Destino' inside", () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <NewDestinationPage />
            </MemoryRouter>
          </Provider>
        </>
      );
      const form = screen.getByText("Destino");

      expect(form).toBeInTheDocument();
    });
  });
});
