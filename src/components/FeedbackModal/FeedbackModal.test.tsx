import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackModal from "./FeedbackModal";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Feedback component", () => {
  describe("When its instanciated", () => {
    describe("And receives a type 'welcome' & 'Mar' text", () => {
      const modalType = "welcome";
      const modalText = "Mar";

      test("Then it should show '¡Hola! Mar' as text", () => {
        const expectedText = "¡Hola!";
        render(<FeedbackModal type={modalType} text={modalText} />);

        const name = screen.getByText(modalText);
        const salutation = screen.getByText(expectedText);

        expect(name).toBeInTheDocument();
        expect(salutation).toBeInTheDocument();
      });

      test("Then it should show an 🤗 inside", () => {
        const expectedText = "🤗";

        render(<FeedbackModal type={modalType} text={modalText} />);

        const emoji = screen.getByText(expectedText);

        expect(emoji).toBeInTheDocument();
      });

      test("Then it should show a cross to close the modal", () => {
        const iconId = "icon-cross";

        render(<FeedbackModal type={modalType} text={modalText} />);

        const icon = screen.getByTestId(iconId);

        expect(icon).toBeInTheDocument();
      });

      test("Then it should close the feedback", async () => {
        const iconId = "icon-cross";

        render(<FeedbackModal type={modalType} text={modalText} />);

        const icon = screen.getByTestId(iconId);
        await userEvent.click(icon);

        expect(mockDispatch).toHaveBeenCalled();
      });
    });

    describe("And receives a type 'message' & 'ha sido creado' as text", () => {
      const modalType = "message";
      const modalText = "ha sido creado";

      test("Then it should show 'ha sido creado' as text inside", () => {
        render(<FeedbackModal type={modalType} text={modalText} />);

        const text = screen.getByText(modalText);

        expect(text).toBeInTheDocument();
      });

      test("Then it should show the 'próximo Destino' logo inside with alt text 'logo próximo destino", () => {
        const expectAltText = "logo próximo destino";
        render(<FeedbackModal type={modalType} text={modalText} />);

        const image = screen.getByAltText(expectAltText);

        expect(image).toBeInTheDocument();
      });
    });
  });
});