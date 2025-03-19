import { appConfig } from '../config/app-config';
import { UserProfileResponse } from '../types';
import { api } from './rtkApi';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserProfileResponse, void>({
      query: () => ({
        url: appConfig.user.profile,
      }),
      providesTags: () => [{ type: 'User' }],
    }),
    updateUser: builder.mutation<void, void>({
      query: (body) => ({
        url: appConfig.user.profile,
        method: 'PUT',
        body,
      }),
      invalidatesTags: () => [
        {
          type: 'User',
        },
      ],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
