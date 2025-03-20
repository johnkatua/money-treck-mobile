import { appConfig } from '../config/app-config';
import { ApiResponse, UserProfile, UserProfileResponse } from '../types';
import { api } from './rtkApi';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserProfileResponse, void>({
      query: () => ({
        url: appConfig.user.profile,
      }),
      providesTags: () => [{ type: 'User' }],
    }),
    updateUser: builder.mutation<ApiResponse, UserProfile>({
      query: (body) => {
        let formData = new FormData();
        formData.append('name', body.name);
        formData.append('phoneNumber', body.phoneNumber);
        formData.append('currency', body.currency);
        formData.append('avatar', body.avatar);
        return {
          url: appConfig.user.update,
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data;',
          },
          body: { formData },
          formData: true,
        };
      },
      invalidatesTags: () => [
        {
          type: 'User',
        },
      ],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
