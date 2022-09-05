import { renderHook } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper";
import { Feedback, Modal } from "../interfaces/interfaces";
import {
  openFeedbackActionCreator,
  openModalActionCreator,
} from "../reducer/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../reducer/userSlice";
import useUser from "./useUser";
import * as router from "react-router";

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

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
    test("Then it should dispatch a user correctly loged adn call dispatch", async () => {
      const { result } = renderHook(useUser, { wrapper: Wrapper });

      await result.current.getLogin(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockDataToken.userName)
      );
    });

    test("Then should change the page to '/destinos'", async () => {
      const { result } = renderHook(useUser, { wrapper: Wrapper });

      await result.current.getLogin(mockUser);

      expect(mockNavigate).toHaveBeenCalledWith("/destinos");
    });

    test("Then should invoke the dispatch with openFeedbackActionCreator", async () => {
      const mockFeedaback: Feedback = {
        isFeedbackOpen: true,
        feedbackText: `${mockUser.userName}`,
        feedbackType: "welcome",
      };
      const { result } = renderHook(useUser, { wrapper: Wrapper });

      await result.current.getLogin(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(
        openFeedbackActionCreator(mockFeedaback)
      );
    });
  });

  describe("When it's invoke with an invalid user", () => {
    test("Then dispatch has been called with openModal action with message 'Usuario o contraseña no válidos'", async () => {
      const mockErrorModal: Modal = {
        modalText: "Usuario o Contraseña no válidos",
        modalType: "error",
        isModalOpen: true,
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

describe("Given a function getLogout inside useUser hook", () => {
  describe("When it's invoke", () => {
    test("Then it should invoke the dispatch with 'logoutUserActionCreator'", async () => {
      const { result } = renderHook(() => useUser(), { wrapper: Wrapper });

      await result.current.getLogout();

      expect(mockDispatch).toHaveBeenCalledWith(logoutUserActionCreator());
    });

    test("Then localStorage with removeItem method to have been called with key 'token'", async () => {
      jest.spyOn(Storage.prototype, "removeItem");
      Storage.prototype.removeItem = jest.fn();
      const localStorageKey = "token";

      const { result } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await result.current.getLogout();

      expect(localStorage.removeItem).toHaveBeenCalledWith(localStorageKey);
    });
  });
});
