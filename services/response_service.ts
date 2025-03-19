import { UserProfile, UserProfileResponse } from '../types';

export const extractUserProfile = (response: UserProfileResponse): UserProfile | null => {
  if (response && response.data && response.data.data && typeof response.data.data === 'object') {
    return response.data.data;
  }
  console.error('Invalid Response structure:', response);
  return null;
};
