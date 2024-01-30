import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = { isLogin: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setlogout(state) {
      state.isLogin = false;
    },
    setLogin(state) {
      state.isLogin = true
    },
  }
})
export const {
  setlogout, setLogin
} = authSlice.actions;
export default authSlice.reducer;