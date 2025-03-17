export const appConfig = {
  apiBaseUrl: 'http://10.4.21.23:8002/api',
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
