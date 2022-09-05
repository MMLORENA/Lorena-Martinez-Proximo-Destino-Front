import { render, renderHook, screen, waitFor } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import NavigationMenu from "./NavigationMenu";
import * as router from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router-dom";

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a NavigationMenu Component", () => {
  describe("When it's render", () => {
    describe("And the path is different from '/register' or '/login'", () => {
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
      test("Then should change from page", async () => {
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

    describe("And the pathname is '/destinos'", () => {
      test("Then the pathname should be '/destinos'", async () => {
        const mockLocation = {
          pathname: "/destinos",
          Location: "",
          key: "",
          search: "",
          hash: "",
          state: "",
        };

        jest
          .spyOn(router, "useLocation")
          .mockImplementation(() => mockLocation);

        const expectedPath = "/destinos";
        render(
          <MemoryRouter initialEntries={["/destinos"]}>
            <NavigationMenu />
          </MemoryRouter>
        );
        const linkDestinos = screen.getByRole("link", { name: "Destinos" });
        await userEvent.click(linkDestinos);

        const {
          result: {
            current: { pathname },
          },
        } = renderHook(useLocation, { wrapper: MemoryRouter });

        expect(pathname).toBe(expectedPath);
      });
    });

    describe("And the pathname is '/registro'", () => {
      test("Then NavigationMenú shouldn't render'", async () => {
        const mockLocation = {
          pathname: "/registro",
          Location: "",
          key: "",
          search: "",
          hash: "",
          state: "",
        };

        jest
          .spyOn(router, "useLocation")
          .mockImplementation(() => mockLocation);
        render(<NavigationMenu />, { wrapper: Wrapper });

        const linkDestinos = screen.queryByRole("link", { name: "Destinos" });

        const {
          result: {
            current: { pathname },
          },
        } = renderHook(useLocation, { wrapper: MemoryRouter });

        expect(linkDestinos).not.toBeInTheDocument();
        expect(pathname).toBe("/registro");
      });
    });
  });
});
