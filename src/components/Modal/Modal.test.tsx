import { fireEvent, render, screen } from "@testing-library/react";
import { closeModalActionCreator } from "../../store/reducer/uiSlice";
import Modal from "./Modal";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Modal component", () => {
  const modalType = "error";
  const modalText = "Error";

  describe("When its instanciated", () => {
    describe("And receives a type error & 'Error' text", () => {
      test("Then it should show 'Error' as text", () => {
        render(<Modal type={modalType} text={modalText}></Modal>);

        const title = screen.getByText(modalText);

        expect(title).toBeInTheDocument();
      });

      test("Then it should show an icon of a plane", () => {
        const iconId = "icon-plane";

        render(<Modal type={modalType} text={modalText}></Modal>);

        const icon = screen.getByTestId(iconId);

        expect(icon).toBeInTheDocument();
      });

      test("Then it should show a cross to close the modal", () => {
        const iconId = "icon-cross";

        render(<Modal type={modalType} text={modalText}></Modal>);

        const icon = screen.getByTestId(iconId);

        expect(icon).toBeInTheDocument();
      });
    });

    describe("And the user clicks on the cross", () => {
      test("Then it should close the modal", async () => {
        const iconId = "icon-cross";

        render(<Modal type={modalType} text={modalText}></Modal>);

        const icon = screen.getByTestId(iconId);
        await fireEvent.click(icon);

        expect(mockDispatch).toHaveBeenCalled();
      });

      test("Then after 5000 seconds, the feedback should be close", () => {
        jest.useFakeTimers();

        render(<Modal type={modalType} text={modalText} />);
        jest.advanceTimersByTime(5000);

        expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
      });
    });
  });
});
