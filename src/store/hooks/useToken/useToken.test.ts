import { renderHook } from "@testing-library/react";
import Wrapper from "../../../test-utils/Wrapper";
import useToken from "./useToken";

jest.mock("../../../utils/decodeToken", () => () => ({
  ...jest.requireActual("../../../utils/decodeToken"),
  decodeToken: jest.fn().mockReturnValue({
    id: "0",
    userName: "Admin",
    token: "dsf",
  }),
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a getInitialUser function", () => {
  describe("When getItem localStorage method returns a 'token", () => {
    test("Then it should dispatch an action to send the token to store", () => {
      const token = "#";

      Storage.prototype.getItem = jest.fn().mockReturnValue(token);

      const {
        result: {
          current: { isToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      isToken();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When getItem localStorage method not returns a 'token", () => {
    test("Then it should dispatch an action to send the token to store", () => {
      const token = "";

      Storage.prototype.getItem = jest.fn().mockReturnValue(token);

      const {
        result: {
          current: { isToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      isToken();

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
