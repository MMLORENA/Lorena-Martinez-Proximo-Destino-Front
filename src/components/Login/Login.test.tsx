import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Login from "./Login";

const mockLogin = jest.fn();

jest.mock("../../store/hooks/useUser", () => () => ({
  getLogin: mockLogin,
}));

describe("Given a Login component", () => {
  describe("When instantiated", () => {
    test("Then it should show a form with '¿Tu nombre de Usuario?' & 'Escribe tu contraseña' as placeholders & a button inside", async () => {
      const expectedUserText = "¿Tu nombre de Usuario?";
      const expectedPasswordText = "Escribe tu contraseña";
      const expectedButtonText = "Inicia Sesión";

      render(
        <>
          <Provider store={store}>
            <Login />
          </Provider>
        </>
      );

      const formTestPlaceHolders: Array<HTMLInputElement> = [
        screen.getByPlaceholderText(expectedUserText),
        screen.getByPlaceholderText(expectedPasswordText),
        screen.getByRole("button", {
          name: expectedButtonText,
        }),
      ];

      formTestPlaceHolders.forEach((placeholder) =>
        expect(placeholder).toBeInTheDocument()
      );
    });

    test("Then should show a form with 'Usuario', 'Contraseña' as inputs", () => {
      const expectedUserText = "Usuario";
      const expectedPasswordText = "Contraseña";

      render(
        <>
          <Provider store={store}>
            <Login />
          </Provider>
        </>
      );

      const formTestLabels: Array<HTMLInputElement> = [
        screen.getByText(expectedUserText),
        screen.getByText(expectedPasswordText),
      ];

      formTestLabels.forEach((label) => expect(label).toBeInTheDocument());
    });

    test("Then it should update the input value to what the user entered", async () => {
      const userName = "Admin";
      const userPassword = "Admin";

      render(
        <>
          <Provider store={store}>
            <Login />
          </Provider>
        </>
      );

      const nameInput: HTMLInputElement = screen.getByLabelText("Usuario");
      await userEvent.type(nameInput, userName);
      expect(nameInput.value).toBe(userName);

      const passwordInput: HTMLInputElement =
        screen.getByLabelText("Contraseña");
      await userEvent.type(passwordInput, userPassword);
      expect(passwordInput.value).toBe(userPassword);
    });
  });

  describe("And user types correctly in form and click on 'Inicia Sesión' button", () => {
    test("Then it should complet the login correctly", async () => {
      const userName = "MarZat";
      const userPassword = "12345";

      render(
        <>
          <Provider store={store}>
            <Login />
          </Provider>
        </>
      );

      const button = screen.getByRole("button", {
        name: "Inicia Sesión",
      });

      const userNameInput = screen.getByLabelText("Usuario");
      const passwordInput = screen.getByLabelText("Contraseña");

      await userEvent.type(userNameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.click(button);

      expect(mockLogin).toHaveBeenCalled();
    });
  });

  describe("And the user not types the password", () => {
    test("Then it couldn't be loged", async () => {
      const userName = "MarZat";

      render(
        <>
          <Provider store={store}>
            <Login />
          </Provider>
        </>
      );

      const button = screen.getByRole("button", {
        name: "Inicia Sesión",
      });

      const userNameInput = screen.getByLabelText("Usuario");

      await userEvent.type(userNameInput, userName);
      await userEvent.click(button);

      expect(mockLogin).not.toHaveBeenCalled();
    });
  });
});
