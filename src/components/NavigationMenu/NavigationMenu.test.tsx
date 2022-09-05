import { render, renderHook, screen, waitFor } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import NavigationMenu from "./NavigationMenu";
import * as router from "react-router";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router-dom";

const mockLogout = jest.fn();

jest.mock("../../store/hooks/useUser", () => () => ({
  getLogout: mockLogout,
}));

describe("Given a NavigationMenu Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  afterEach(() => jest.resetAllMocks());

  describe("When it's render", () => {
    describe("And the path is '/destinos''", () => {
      beforeEach(() => {
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
      });

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

    describe("And the user clicks on Logout link", () => {
      test("Then should change from page and be on 'login' page", async () => {
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

        render(
          <>
            <Provider store={store}>
              <MemoryRouter initialEntries={["/destinos"]}>
                <NavigationMenu />
              </MemoryRouter>
            </Provider>
          </>
        );

        const linkLogout = screen.getByRole("link", { name: "Logout" });
        await userEvent.click(linkLogout);

        expect(mockNavigate).toHaveBeenCalled();
      });

      test("Then the user should invoke the logout function", async () => {
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

        render(
          <>
            <Provider store={store}>
              <MemoryRouter initialEntries={["/destinos"]}>
                <NavigationMenu />
              </MemoryRouter>
            </Provider>
          </>
        );

        const linkLogout = screen.getByRole("link", { name: "Logout" });
        await userEvent.click(linkLogout);

        await waitFor(() => expect(mockLogout).toHaveBeenCalled());
      });

      describe("And the pathname is '/destinos'", () => {
        test("Then the pathname should be '/destinos'", async () => {
          const expectedPath = "/destinos";
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

          render(
            <MemoryRouter initialEntries={["/destinos"]}>
              <NavigationMenu />
            </MemoryRouter>
          );
          const linkLogout = screen.getByRole("link", { name: "Logout" });
          await userEvent.click(linkLogout);

          const {
            result: {
              current: { pathname },
            },
          } = renderHook(useLocation, { wrapper: MemoryRouter });

          expect(pathname).toBe(expectedPath);
        });
      });

      describe("And the pathname is '/destino'", () => {
        test("Then the pathname should be '/destinos'", async () => {
          const expectedPath = "/destino";
          const mockLocation = {
            pathname: "/destino",
            Location: "",
            key: "",
            search: "",
            hash: "",
            state: "",
          };

          jest
            .spyOn(router, "useLocation")
            .mockImplementation(() => mockLocation);

          render(
            <MemoryRouter initialEntries={["/destinos"]}>
              <NavigationMenu />
            </MemoryRouter>
          );
          const linkLogout = screen.getByRole("link", { name: "Logout" });
          await userEvent.click(linkLogout);

          const {
            result: {
              current: { pathname },
            },
          } = renderHook(useLocation, { wrapper: MemoryRouter });

          expect(pathname).toBe(expectedPath);
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

            const linkDestinos = screen.queryByRole("link", {
              name: "Destinos",
            });

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
  });
});
