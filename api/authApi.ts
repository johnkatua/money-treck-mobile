import { api } from './rtkApi';
import { LoginProps, RegisterProps } from '../types';
import { appConfig } from '../config/app-config';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginProps, void>({
      query: (body) => ({
        url: appConfig.auth.login,
        method: 'POST',
        body,
      }),
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
