export const appConfig = {
  apiBaseUrl: 'http://192.168.0.103:8002/api',
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
