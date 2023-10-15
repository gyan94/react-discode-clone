import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../Types";

const initialState: initialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      /* 
      action.payloadとは：Dispatchで受け取った新しい値と古い値を比較して、
      Store内のReducerで状態を書き替える処理の事。
      */
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
