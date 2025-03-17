export const appConfig = {
  apiBaseUrl: 'http://localhost:3000/api',
  auth: {
    login: '/users/login',
    register: '/users/register',
  },
  user: {
    profile: '/user/me',
  },
  transaction: {
    create: '/transaction/create',
    list: '/transaction/list',
  },
};
