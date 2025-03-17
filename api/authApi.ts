import { api } from './rtkApi';
import { LoginResponse, RegisterProps } from '../types';
import { appConfig } from '../config/app-config';
import { loginUser } from '../features/auth/authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, void>({
      query: (body) => ({
        url: appConfig.auth.login,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(loginUser(data.token));
        } catch (error) {
          console.error('Login error:', error);
        }
      },
    }),
    register: builder.mutation<RegisterProps, void>({
      query: (body) => ({
        url: appConfig.auth.register,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation } = authApi;
