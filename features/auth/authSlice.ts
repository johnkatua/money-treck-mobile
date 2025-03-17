import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: 'mockToken',
  },
  reducers: {
    loginUser(state, { payload }) {
      state.token = payload;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { loginUser, logout } = authSlice.actions;

export default authSlice.reducer;
