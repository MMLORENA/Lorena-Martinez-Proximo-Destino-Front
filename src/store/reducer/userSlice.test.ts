import { User } from "../models/User";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a function userSlice", () => {
  describe("When it's receives an initalState", () => {
    describe("And an action 'user/loginUser'", () => {
      test("Then should return a user loged", () => {
        const initialState: User = { id: "", userName: "", token: "" };
        const expectedUser: User = {
          id: "0",
          userName: "Mar",
          token: "#",
        };

        const userReducerTest = userReducer(
          initialState,
          loginUserActionCreator(expectedUser)
        );

        expect(userReducerTest).toStrictEqual(expectedUser);
      });
    });
  });
});
