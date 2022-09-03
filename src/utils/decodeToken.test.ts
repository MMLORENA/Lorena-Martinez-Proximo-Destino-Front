import jwt from "jwt-decode";
import decodeToken from "./decodeToken";

jest.mock("jwt-decode", () => jest.fn());

describe("Given the decodeToken function", () => {
  describe("When it's invoke with a '#' token", () => {
    test("Then should return username, an id and token", () => {
      const mockToken = "#";
      (jwt as jest.Mock).mockImplementation(() => ({ user: { mockToken } }));
      decodeToken(mockToken);

      expect(jwt).toHaveBeenCalledWith(mockToken);
    });
  });
});
