import { createSlice } from "@reduxjs/toolkit";

const userState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
