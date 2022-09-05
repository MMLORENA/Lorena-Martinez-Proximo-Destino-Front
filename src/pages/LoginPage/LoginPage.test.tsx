import { render, renderHook, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, useLocation, BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginPage from "./LoginPage";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";

describe("Given a LoginPage component", () => {
  describe("When it's render", () => {
    test("It should show a 'Acceso a tu' heading", () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <LoginPage />
            </MemoryRouter>
          </Provider>
        </>
      );
      const resultTitle = screen.getByText("Acceso a tu");

      expect(resultTitle).toBeInTheDocument();
    });

    test("Then it should have a form  with 'Usuario' label inside", () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <LoginPage />
            </MemoryRouter>
          </Provider>
        </>
      );
      const label = screen.getByText("Usuario");

      expect(label).toBeInTheDocument();
    });

    test("Then it should show a button with a text 'Inicia Sesión' inside", () => {
      const expectedText = "Inicia Sesión";
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <LoginPage />
            </MemoryRouter>
          </Provider>
        </>
      );

      const resultText = screen.getByRole("button", { name: expectedText });

      expect(resultText).toHaveTextContent(expectedText);
    });
  });

  describe("And the user clicks on 'Registrate' link", () => {
    test("Then should change the page '/registro'", async () => {
      const mockLocation = {
        pathname: "/registro",
        Location: "",
        key: "",
        search: "",
        hash: "",
        state: "",
      };

      jest.spyOn(router, "useLocation").mockImplementation(() => mockLocation);

      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <LoginPage />
            </MemoryRouter>
          </Provider>
        </>
      );

      const link = screen.getByRole("link", { name: "Registrate" });

      await userEvent.click(link);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(useLocation, { wrapper: BrowserRouter });
      expect(pathname).toBe("/registro");
    });
  });
});
