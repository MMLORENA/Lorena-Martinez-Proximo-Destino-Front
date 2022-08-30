import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

describe("Given a Register component", () => {
  describe("When instantiated", () => {
    test("Then it should show a form with Name,User,Password, First Name placeholders & a button inside", async () => {
      const expectedUserText = "¿Tu nombre de usuario?";
      const expectedNameText = "¿Cómo te llamas?";
      const expectedfirstNameText = "1º Apellido";
      const expectedPasswordText = "Escribe tu contraseña";
      const expectedButtonText = "Registrarme";

      render(<Register />);

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

      render(<Register />);

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

      render(<Register />);

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
});
