import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When its instanciated", () => {
    describe("And receives a type error & 'Error' text", () => {
      const modalType = "error";
      const modalText = "Error";
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
    });
  });
});
