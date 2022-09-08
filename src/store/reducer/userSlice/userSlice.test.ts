import { User, UserState } from "../../models/User";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a function userSlice", () => {
  describe("When it's receives an initalState", () => {
    const initialState: UserState = {
      isLoged: false,
      userName: "",
      token: "",
      id: "",
    };

    describe("And an action 'user/loginUser'", () => {
      test("Then should return a user loged and 'Admin' as userName", () => {
        const expectedUser = {
          isLoged: true,
          userName: "Admin",
          id: "1",
          token: "#",
        };

        const userPayload: User = {
          userName: "Admin",
          id: "1",
          token: "#",
        };

        const userReducerTest = userReducer(
          initialState,
          loginUserActionCreator(userPayload)
        );

        expect(userReducerTest).toStrictEqual(expectedUser);
      });
    });

    describe("And an action 'user/logoutUser'", () => {
      test("Then should return a user not loged and an empty userName", () => {
        const expectedUser = {
          isLoged: false,
          userName: "",
          token: "",
          id: "",
        };

        const userReducerTest = userReducer(
          initialState,
          logoutUserActionCreator()
        );

        expect(userReducerTest).toStrictEqual(expectedUser);
      });
    });
  });
});
