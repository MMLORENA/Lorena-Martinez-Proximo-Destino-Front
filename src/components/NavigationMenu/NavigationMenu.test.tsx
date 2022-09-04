import { render, screen } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import NavigationMenu from "./NavigationMenu";
import * as router from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a NavigationMenu Component", () => {
  describe("When it's render", () => {
    test("Then it should show a navigation menú", () => {
      render(<NavigationMenu />, { wrapper: Wrapper });

      const resultNav = screen.getByRole("navigation");

      expect(resultNav).toBeInTheDocument();
    });

    test("Then it shoul show 'Destinos' & 'Logout' as text", async () => {
      const expectTextDestinos = "Destinos";
      const expectTextLogout = "Logout";

      render(<NavigationMenu />, { wrapper: Wrapper });

      const resultDestinos = screen.getByText(expectTextDestinos);
      const resultLogout = screen.getByText(expectTextLogout);

      expect(resultLogout).toHaveTextContent(expectTextLogout);
      expect(resultDestinos).toHaveTextContent(expectTextDestinos);
    });

    test("Then it shoul show a house icon & a user icon inside", async () => {
      const expectDestinos = "house__icon";
      const expectLogout = "user__icon";

      render(<NavigationMenu />, { wrapper: Wrapper });

      const resultDestinos = screen.getByTestId(expectDestinos);
      const resultLogout = screen.getByTestId(expectLogout);

      expect(resultDestinos).toBeInTheDocument();
      expect(resultLogout).toBeInTheDocument();
    });
  });

  describe("And the user clicks on Destinos link", () => {
    test("Then should change to '/desino'", async () => {
      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <NavigationMenu />
            </BrowserRouter>
          </Provider>
        </>
      );

      const linkDestinos = screen.getByRole("link", { name: "Logout" });

      await userEvent.click(linkDestinos);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
