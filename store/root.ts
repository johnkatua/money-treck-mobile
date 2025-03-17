import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../api/rtkApi';
import authSlice from '../features/auth/authSlice';
import store from './store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default combineReducers({
  auth: authSlice,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector<T> = (state: RootState) => T;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: AppSelector<T>) => useSelector(selector);
