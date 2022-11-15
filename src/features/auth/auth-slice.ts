// Dux pattern
// create Slice ->  for redux logic
// playloadAction -> TS Type of content one given action object
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthState {
  isLoggedIn: boolean;
}
const initialState: AuthState = {
  isLoggedIn: true,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      //   redux use immer so we can use mutable
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;
