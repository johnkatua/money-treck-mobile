import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../api/rtkApi';
import authSlice from '../features/auth/authSlice';
import store from './store';

export default combineReducers({
  auth: authSlice,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
