import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Register from "./Register";

let mockRegister: () => {};

jest.mock("../../store/hooks/useUser", () => () => ({
  getRegister: mockRegister,
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Register component", () => {
  describe("When instantiated", () => {
    test("Then it should show a form with Name, User, Password, First Name placeholders & a button inside", async () => {
      const expectedUserText = "¿Tu nombre de usuario?";
      const expectedNameText = "¿Cómo te llamas?";
      const expectedfirstNameText = "1º Apellido";
      const expectedPasswordText = "Escribe tu contraseña";
      const expectedButtonText = "Registrarme";

      render(
        <>
          <Provider store={store}>
            <Register />
          </Provider>
        </>
      );

      const formTestPlaceHolders: Array<HTMLInputElement> = [
        screen.getByPlaceholderText(expectedUserText),
        screen.getByPlaceholderText(expectedNameText),
        screen.getByPlaceholderText(expectedPasswordText),
        screen.getByPlaceholderText(expectedfirstNameText),
        screen.getByRole("button", {
          name: expectedButtonText,
        }),
      ];

      formTestPlaceHolders.forEach((placeholder) =>
        expect(placeholder).toBeInTheDocument()
      );
    });

    test("Then should show a form with 'Usuario', 'Contraseña', 'Nombre', '1º Apellido' inputs", () => {
      const expectedUserText = "Usuario";
      const expectedNameText = "Nombre";
      const expectedfirstNameText = "1º Apellido";
      const expectedPasswordText = "Contraseña";

      render(
        <>
          <Provider store={store}>
            <Register />
          </Provider>
        </>
      );

      const formTestLabels: Array<HTMLInputElement> = [
        screen.getByText(expectedUserText),
        screen.getByText(expectedNameText),
        screen.getByText(expectedPasswordText),
        screen.getByText(expectedfirstNameText),
      ];

      formTestLabels.forEach((label) => expect(label).toBeInTheDocument());
    });

    test("Then it should update the input value to what the user entered", async () => {
      const userName = "Mar";
      const userPassword = "12345";
      const userFirstName = "a";

      render(
        <>
          <Provider store={store}>
            <Register />
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

      const userFirstNameInput: HTMLInputElement =
        screen.getByLabelText("1º Apellido");
      await userEvent.type(userFirstNameInput, userFirstName);
      expect(userFirstNameInput.value).toBe(userFirstName);
    });
  });

  describe("And user types correctly in form and click on register button", () => {
    test("Then it should complet the register correctly", async () => {
      mockRegister = jest.fn();
      const userName = "MarZat";
      const nameUser = "Mar";
      const userPassword = "12345";
      const userFirstName = "Zas";
      const userRepeatPassword = "12345";

      render(
        <>
          <Provider store={store}>
            <Register />
          </Provider>
        </>
      );

      const button = screen.getByRole("button", {
        name: "Registrarme",
      });

      const userNameInput = screen.getByLabelText("Usuario");
      const firstNameInput = screen.getByLabelText("1º Apellido");
      const nameInput = screen.getByLabelText("Nombre");
      const passwordInput = screen.getByLabelText("Contraseña");
      const passwordRepeatedInput = screen.getByLabelText("Repite Contraseña");

      await userEvent.type(nameInput, nameUser);
      await userEvent.type(firstNameInput, userFirstName);
      await userEvent.type(userNameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.type(passwordRepeatedInput, userRepeatPassword);
      await userEvent.click(button);

      expect(mockRegister).toHaveBeenCalled();
    });

    test("Then it shouldn't show an error message", async () => {
      mockRegister = jest.fn().mockResolvedValue(true);
      const userName = "MarZat";
      const nameUser = "Mar";
      const userPassword = "12345";
      const userFirstName = "Zas";
      const userRepeatPassword = "12345";

      render(
        <>
          <Provider store={store}>
            <Register />
          </Provider>
        </>
      );

      const button = screen.getByRole("button", {
        name: "Registrarme",
      });

      const userNameInput = screen.getByLabelText("Usuario");
      const firstNameInput = screen.getByLabelText("1º Apellido");
      const nameInput = screen.getByLabelText("Nombre");
      const passwordInput = screen.getByLabelText("Contraseña");
      const passwordRepeatedInput = screen.getByLabelText("Repite Contraseña");

      await userEvent.type(nameInput, nameUser);
      await userEvent.type(firstNameInput, userFirstName);
      await userEvent.type(userNameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.type(passwordRepeatedInput, userRepeatPassword);
      await userEvent.click(button);

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });

  describe("And the user types all the files but the register fails", () => {
    test("Then it should show an error message", async () => {
      mockRegister = jest.fn().mockResolvedValue(false);
      const userName = "MarZat";
      const nameUser = "Mar";
      const userPassword = "12345";
      const userFirstName = "Zas";
      const userRepeatPassword = "12345";

      render(
        <>
          <Provider store={store}>
            <Register />
          </Provider>
        </>
      );

      const button = screen.getByRole("button", {
        name: "Registrarme",
      });

      const userNameInput = screen.getByLabelText("Usuario");
      const firstNameInput = screen.getByLabelText("1º Apellido");
      const nameInput = screen.getByLabelText("Nombre");
      const passwordInput = screen.getByLabelText("Contraseña");
      const passwordRepeatedInput = screen.getByLabelText("Repite Contraseña");

      await userEvent.type(nameInput, nameUser);
      await userEvent.type(firstNameInput, userFirstName);
      await userEvent.type(userNameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.type(passwordRepeatedInput, userRepeatPassword);
      await userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
