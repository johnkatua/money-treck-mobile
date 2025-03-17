import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../api/rtkApi';
import authSlice from '../features/auth/authSlice';

export default combineReducers({
  auth: authSlice,
  [api.reducerPath]: api.reducer,
});
