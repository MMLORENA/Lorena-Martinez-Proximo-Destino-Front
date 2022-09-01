import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { UIReducer } from "./reducer/uiSlice";
import { userReducer } from "./reducer/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: UIReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
