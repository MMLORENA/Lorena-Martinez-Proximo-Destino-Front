import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../interfaces/interfaces";

const userInitialState: UserState = { isLoged: false, userName: "" };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<string>) => ({
      ...previousUser,
      isLoged: true,
      userName: action.payload,
    }),
    logoutUser: (previousUser) => ({
      ...previousUser,
      isLoged: false,
      userName: "",
    }),
  },
});

export const { reducer: userReducer } = userSlice;
export const {
  actions: {
    loginUser: loginUserActionCreator,
    logoutUser: logoutUserActionCreator,
  },
} = userSlice;
