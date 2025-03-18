import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    authenticateUser(state, { payload }) {
      state.token = payload;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { authenticateUser, logout } = authSlice.actions;

export default authSlice.reducer;
