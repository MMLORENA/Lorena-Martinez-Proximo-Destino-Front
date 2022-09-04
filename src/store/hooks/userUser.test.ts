import { renderHook } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import { Modal } from "../interfaces/interfaces";
import { openModalActionCreator } from "../reducer/uiSlice";
import { loginUserActionCreator } from "../reducer/userSlice";
import useUser from "./useUser";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockDataToken = {
  id: "01",
  userName: "Admin",
  token: "#",
};

jest.mock("../../utils/decodeToken", () => () => mockDataToken);
describe("Given a function getRegister inside useUser hook", () => {
  describe("When its sends to a valid api url", () => {
    describe("And a correct userData", () => {
      test("Then it should return true", async () => {
        const mockUser = {
          name: "Mery",
          firstName: "zas",
          userName: "MeryZas",
          password: "MeryZas",
          repeatedPassword: "MeryZas",
        };

        const { result } = renderHook(useUser, { wrapper: Wrapper });

        const resultRegister = await result.current.getRegister(mockUser);

        expect(resultRegister).toBe(true);
      });
    });

    describe("And a userData without name", () => {
      test("Then it should return false", async () => {
        const mockUser = {
          name: "Mar",
          firstName: "zas",
          userName: "MeryZas",
          password: "Mer",
          repeatedPassword: "MeryZas",
        };

        const { result } = renderHook(useUser, { wrapper: Wrapper });

        const resultRegister = await result.current.getRegister({
          ...mockUser,
          userName: "",
        });

        expect(resultRegister).toBe(false);
      });
    });
  });
});

describe("Given a function getLogin inside useUser hook", () => {
  const mockUser = {
    userName: "Admin",
    password: "Admin",
  };
  describe("When it's invoke with a valid user", () => {
    test("Then it should dispatch a user correctly loged", async () => {
      const { result } = renderHook(useUser, { wrapper: Wrapper });

      await result.current.getLogin(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockDataToken.userName)
      );
    });
  });

  describe("When it's invoke with an invalid user", () => {
    test("Then dispatch has been called with openModal action with message 'Usuario o contraseña incorrecta'", async () => {
      const mockErrorModal: Modal = {
        text: "Usuario o Contraseña no válidos",
        type: "error",
        isOpen: true,
      };

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await result.current.getLogin({ ...mockUser, userName: "" });

      expect(mockDispatch).toHaveBeenCalledWith(
        openModalActionCreator(mockErrorModal)
      );
    });
  });
});
