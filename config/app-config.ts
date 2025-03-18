import * as Network from 'expo-network';

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

export const initializeAppConfig = async () => {
  try {
    const ip = await Network.getIpAddressAsync();
    appConfig.apiBaseUrl = `http://${ip}:8002/api}`;
    console.log('IP:', ip);
    console.log('API Base URL:', appConfig.apiBaseUrl);
  } catch (error) {
    console.error('Error:', error);
  }
};
