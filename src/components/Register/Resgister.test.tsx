import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Given a Register component", () => {
  describe("When instantiated", () => {
    test("Then it should show a form with Name,User,Password, First Name placeholders & a button inside", () => {
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
        screen.getByLabelText(expectedUserText),
        screen.getByLabelText(expectedNameText),
        screen.getByLabelText(expectedPasswordText),
        screen.getByLabelText(expectedfirstNameText),
      ];

      formTestLabels.forEach((label) => expect(label).toBeInTheDocument());
    });
  });
});
