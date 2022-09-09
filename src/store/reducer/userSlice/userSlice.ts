import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../models/User";

const userInitialState: UserState = {
  isLoged: false,
  userName: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLoged: true,
    }),
    logoutUser: (previousUser) => ({
      ...previousUser,
      isLoged: false,
      userName: "",
      token: "",
      id: "",
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
