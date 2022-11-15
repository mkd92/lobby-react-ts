import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/auth-slice";

export const store = configureStore({
  reducer: { auth: AuthReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
