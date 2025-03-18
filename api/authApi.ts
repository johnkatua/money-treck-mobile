import { api } from './rtkApi';
import { AuthResponse } from '../types';
import { appConfig } from '../config/app-config';
import { authenticateUser } from '../features/auth/authSlice';

const handleAuthResponse = async (queryFulfilled: any, dispatch: any) => {
  try {
    const { data } = await queryFulfilled;
    if (data?.token) {
      dispatch(authenticateUser(data.token));
    }
  } catch (error) {
    console.error('Authentication error:', error);
  }
};

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, void>({
      query: (body) => ({
        url: appConfig.auth.login,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await handleAuthResponse(queryFulfilled, dispatch);
      },
    }),
    register: builder.mutation<AuthResponse, void>({
      query: (body) => ({
        url: appConfig.auth.register,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await handleAuthResponse(queryFulfilled, dispatch);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation } = authApi;
