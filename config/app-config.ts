import * as Network from 'expo-network';

export const appConfig = {
  apiBaseUrl: 'http://192.168.100.56:8002/api',
  auth: {
    login: '/users/login',
    register: '/users/register',
  },
  user: {
    profile: '/users/me',
    update: '/users',
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

initializeAppConfig();
