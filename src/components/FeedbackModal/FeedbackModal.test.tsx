import { fireEvent, render, screen } from "@testing-library/react";
import { closeFeedbackActionCreator } from "../../store/reducer/uiSlice/uiSlice";
import Wrapper from "../../test-utils/Wrapper";
import FeedbackModal from "./FeedbackModal";
import * as router from "react-router";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a Feedback component", () => {
  describe("When its instanciated", () => {
    afterEach(() => jest.resetAllMocks());

    const modalType = "welcome";
    const modalText = "Mar";

    describe("And receives a type 'welcome' & 'Mar' text", () => {
      test("Then it should show '¡Hola Mar' as text", () => {
        const expectedText = "¡Hola";
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

      test("Then after 5000 seconds, the feedback should be close", () => {
        jest.useFakeTimers();

        render(<FeedbackModal type={modalType} text={modalText} />);
        jest.advanceTimersByTime(5000);

        expect(mockDispatch).toHaveBeenCalledWith(closeFeedbackActionCreator());
      });
    });

    describe("And the user clicks on the cross icon", () => {
      test("Then it should close the feedback", async () => {
        const iconId = "icon-cross";

        render(<FeedbackModal type={modalType} text={modalText} />);

        const icon = screen.getByTestId(iconId);
        await fireEvent.click(icon);

        expect(mockDispatch).toHaveBeenCalled();
      });

      describe("And receives a type 'message' & 'ha sido creado' as text", () => {
        const modalType = "message";
        const modalText = "ha sido creado";

        test("Then it should show 'ha sido creado' as text inside", () => {
          render(<FeedbackModal type={modalType} text={modalText} />, {
            wrapper: Wrapper,
          });

          const text = screen.getByText(modalText);

          expect(text).toBeInTheDocument();
        });

        test("Then it should show the 'próximo Destino' logo inside with alt text 'logo próximo destino", () => {
          render(<FeedbackModal type={modalType} text={modalText} />);

          const logo = screen.getByRole("heading");

          expect(logo).toBeInTheDocument();
        });
      });
    });
  });
});
