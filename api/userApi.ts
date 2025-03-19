import { appConfig } from '../config/app-config';
import { api } from './rtkApi';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<void, void>({
      query: () => ({
        url: appConfig.user.profile,
      }),
      providesTags: () => [{ type: 'User' }],
    }),
  }),
});

export const {} = userApi;
