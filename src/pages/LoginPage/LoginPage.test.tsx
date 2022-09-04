import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginPage from "./LoginPage";

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
});
