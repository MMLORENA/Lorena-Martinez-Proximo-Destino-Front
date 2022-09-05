import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter, useLocation } from "react-router-dom";
import { store } from "../../store/store";
import RegisterPage from "./RegisterPage";
import * as router from "react-router";

describe("Given a RegistertPage component", () => {
  describe("When it's render", () => {
    test("It should show a 'Registro' heading", () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <RegisterPage />
            </MemoryRouter>
          </Provider>
        </>
      );
      const resultTitle = screen.getByText("Registro");

      expect(resultTitle).toBeInTheDocument();
    });

    test("Then it should have a form  inside with 6 inputs", () => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <RegisterPage />
            </MemoryRouter>
          </Provider>
        </>
      );
      const form = screen.getByText("Usuario");

      expect(form).toBeInTheDocument();
    });

    test("Then it should show a text 'Acceder' inside", () => {
      const expectedText = "Acceder";
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <RegisterPage />
            </MemoryRouter>
          </Provider>
        </>
      );

      const resultText = screen.getByText(expectedText);

      expect(resultText).toHaveTextContent(expectedText);
    });
  });

  describe("And the user clicks on 'Acces' link", () => {
    test("Then should change the page", async () => {
      const mockLocation = {
        pathname: "/login",
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
              <RegisterPage />
            </MemoryRouter>
          </Provider>
        </>
      );

      const link = screen.getByRole("link", { name: "Acceder" });

      await userEvent.click(link);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(useLocation, { wrapper: BrowserRouter });
      expect(pathname).toBe("/login");
    });
  });
});
