import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../constants/theme';
import { useRouter } from 'expo-router';
import { useAppSelector } from '../store/root';

const index = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log('token', token);
    if (token) {
      setTimeout(() => router.replace('/(tabs)'), 2000);
    } else {
      setTimeout(() => router.replace('/(auth)/welcome'), 2000);
    }
  }, [token]);

  console.log('token1', token);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/images/splash-icon.png')}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: '70%',
    aspectRatio: 1,
  },
});
