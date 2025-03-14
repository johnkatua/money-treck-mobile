import { appConfig } from '../config/app-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiBaseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = '';
      // const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  reducerPath: 'api',
  tagTypes: [],
});
