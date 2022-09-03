import { render, renderHook, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import PageNotFound from "./PageNotFound";
import { BrowserRouter, MemoryRouter, useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn().mockReturnThis();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PageNotFound component", () => {
  describe("When it's render", () => {
    test("It should show a 'Parece que la página no existe' text inside", () => {
      const expectedText = "Parece que la página no existe";
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <PageNotFound />
            </MemoryRouter>
          </Provider>
        </>
      );
      const resultText = screen.getByText(expectedText);

      expect(resultText).toBeInTheDocument();
    });
  });

  describe("And the user clicks on the button", () => {
    test("Then it shoul redirect to 'Registro' page", async () => {
      const expectedText = "Volver";
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <PageNotFound />
            </MemoryRouter>
          </Provider>
        </>
      );
      const button = screen.getByRole("button", { name: expectedText });
      await userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });

    test("Then should change the page", async () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <PageNotFound />
            </MemoryRouter>
          </Provider>
        </>
      );

      const button = screen.getByRole("button", { name: "Volver" });

      await userEvent.click(button);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(useLocation, { wrapper: BrowserRouter });
      expect(pathname).toBe("/");
    });
  });
});
