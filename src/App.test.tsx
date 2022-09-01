import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const mockSelectorReturn = {
  isLoged: false,
  isLoading: false,
  modal: {
    isOpen: true,
    text: "Algo ha ido mal",
    type: "error",
  },
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
}));

describe("Given an App component", () => {
  describe("When isOpen is true", () => {
    test("Then it should render the modal component", () => {
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
});
