import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../api/rtkApi';

export default combineReducers({
  [api.reducerPath]: api.reducer,
});
