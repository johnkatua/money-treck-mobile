import { NetworkInfo } from 'react-native-network-info';

let ip = '';

NetworkInfo.getIPAddress().then((ip) => {
  ip = __DEV__ ? ip : 'localhost';
});

export const appConfig = {
  apiBaseUrl: `http://${ip}:8002/api}`,
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
