import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import { store } from "./store/store";

const mockSelectorReturn = {
  modal: {
    isModalOpen: true,
    modalText: "Algo ha ido mal",
    modalType: "error",
  },
  feedback: {
    isFeedbackOpen: true,
    feedbackText: "Mar",
    feedbackType: "welcome",
  },
};

jest.mock("./store/hooks", () => ({
  ...jest.requireActual("./store/hooks"),
  useAppSelector: () => mockSelectorReturn,
  useAppDispatch: () => jest.fn(),
}));

describe("Given an App component", () => {
  describe("When modal is visible", () => {
    test("Then it should render the modal component with a plane-icon inside", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
      const modalText = screen.getByTestId("icon-plane");

      expect(modalText).toBeInTheDocument();
    });
  });

  describe("When feedback is true", () => {
    test("Then it should render the feedback component with a '¡Hola!' text inside", async () => {
      const expectedSalutation = "¡Hola";
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const feedbackSalutation = screen.getByText(expectedSalutation);

      expect(feedbackSalutation).toHaveTextContent(expectedSalutation);
    });
  });

  describe("When it's render", () => {
    test("Then it shoul render an App Component", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
      expect(expectedApp).toMatchSnapshot();
    });
  });
});
