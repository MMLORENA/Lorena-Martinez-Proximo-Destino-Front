import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewDestination from "./NewDestination";
import Wrapper from "../../test-utils/Wrapper";

const mockCreate = jest.fn();
jest.mock("../../store/hooks/useDestinations/useDestinations", () => () => ({
  createDestination: mockCreate,
}));

describe("Given a RegistertPage component", () => {
  describe("When it's render", () => {
    test("Then it should show a form with placeholder '¿Dónde quieres ir?' & 'Destino' as input", async () => {
      const expectedPlaceHolderText = "¿Dónde quieres ir?";
      const expectedInputText = "Destino";

      render(<NewDestination />, { wrapper: Wrapper });

      const resultPlaceHolder = screen.getByPlaceholderText(
        expectedPlaceHolderText
      );
      const resultInputText = screen.getByLabelText(expectedInputText);

      expect(resultPlaceHolder).toBeInTheDocument();
      expect(resultInputText).toBeInTheDocument();
    });

    test("Then it should show a form with 7 inputs", () => {
      const expectedLength = 7;

      render(<NewDestination />);
      const inputsText = screen.getAllByRole("textbox");

      expect(inputsText).toHaveLength(expectedLength);
    });

    test("Then it should show a form with thre text area inputs with 'Breve desciprción plan 1,2,3", () => {
      const textareaTextPlan1 = "Breve descripción plan 1";
      const textareaTextPlan2 = "Breve descripción plan 2";
      const textareaTextPlan3 = "Plan 3";

      render(<NewDestination />);
      const textAreaPlan1 = screen.getByRole("textbox", {
        name: textareaTextPlan1,
      });
      const textAreaPlan2 = screen.getByRole("textbox", {
        name: textareaTextPlan2,
      });
      const textAreaPlan3 = screen.getByRole("textbox", {
        name: textareaTextPlan3,
      });

      expect(textAreaPlan1).toBeInTheDocument();
      expect(textAreaPlan2).toBeInTheDocument();
      expect(textAreaPlan3).toBeInTheDocument();
    });

    test("Then it should show a form with one select", () => {
      const expectedLength = 1;

      render(<NewDestination />);
      const inputOption = screen.getAllByRole("combobox");

      expect(inputOption).toHaveLength(expectedLength);
    });

    test("And it should show a form with a button with text 'Crear'", () => {
      const textButton = "Crear";

      render(<NewDestination />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    describe("And if the user don't type nothing", () => {
      test("Then createDestination haven't to be called", async () => {
        const textButton = "Crear";

        render(<NewDestination />);
        const button = screen.getByRole("button", { name: textButton });
        await userEvent.click(button);

        expect(mockCreate).not.toHaveBeenCalled();
      });
    });

    describe("And users type in all required inputs", () => {
      test("Then it should be created a new Destination", async () => {
        const descriptionText = "Roma";
        const categoryText = "Urbano";
        const longitude = "3";
        const latitude = "4";
        const firstPlanText = "Coliseo";
        const descriptionFirstPlanText = "Visit Coliseum";
        const fakeImage = new File(["Rome"], "rome.png", {
          type: "image/png",
        });
        const textButton = "Crear";

        render(<NewDestination />);

        const resultDestino = screen.getByLabelText("Destino");
        const resultLatitude = screen.getByLabelText("Latitud");
        const resultLongitude = screen.getByLabelText("Longitud");
        const resultCategory = screen.getByLabelText("Categoría Destino");
        const resultFirstPlan = screen.getByLabelText("Plan 1");
        const descriptionFirstPlan = screen.getByLabelText(
          "Breve descripción plan 1"
        );
        const fileImage = screen.getByLabelText("Añadir Foto");
        const button = screen.getByRole("button", { name: textButton });

        await userEvent.type(resultDestino, descriptionText);
        await userEvent.selectOptions(resultCategory, categoryText);
        await userEvent.type(resultLatitude, longitude);
        await userEvent.type(resultLongitude, latitude);
        await userEvent.type(resultFirstPlan, firstPlanText);
        await userEvent.type(descriptionFirstPlan, descriptionFirstPlanText);
        await userEvent.upload(fileImage, fakeImage);
        await userEvent.click(button);

        expect(mockCreate).toHaveBeenCalled();
      });
    });
  });
});
