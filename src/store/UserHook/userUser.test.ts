import { renderHook } from "@testing-library/react";

import useUser from "./useUser";

describe("Given a function getRegister inside useUser function", () => {
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

        const { result } = renderHook(() => useUser());

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

        const { result } = renderHook(() => useUser());

        const resultRegister = await result.current.getRegister({
          ...mockUser,
          userName: "",
        });

        expect(resultRegister).toBe(false);
      });
    });
  });
});
