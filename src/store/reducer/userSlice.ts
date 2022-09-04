import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

const userInitialState: User = { id: "", userName: "", token: "" };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (_previousUser, action: PayloadAction<User>) => action.payload,
  },
});

export const { reducer: userReducer } = userSlice;
export const {
  actions: { loginUser: loginUserActionCreator },
} = userSlice;
