import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../constants/theme';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/welcome'), 2000);
  }, []);
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
