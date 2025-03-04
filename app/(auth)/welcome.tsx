import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors, radius, spacingX, spacingY } from '../../constants/theme';
import Typo from '../../components/Typo';
import { horizontalScale, verticalScale } from '../../utils/styling';
import Button from '../../components/Button';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.contanier}>
        <View>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')} style={styles.loginButton}>
            <Typo fontWeight={'500'} color={colors.neutral900}>
              Login
            </Typo>
          </TouchableOpacity>
          <Animated.Image
            entering={FadeIn.duration(500)}
            source={require('../../assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.footer}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(12)}
            style={{ alignItems: 'center' }}
          >
            <Typo size={30} fontWeight={'800'}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight={'800'}>
              of your finances
            </Typo>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(100).springify().damping(12)}
            style={{ alignItems: 'center' }}
          >
            <Typo size={18}>Finances must be arranged to set a better</Typo>
            <Typo size={18}>Lifestyle in future</Typo>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(12)}
            style={styles.buttonContainer}
          >
            <Button onPress={() => router.push('/(auth)/register')}>
              <Typo size={22} color={colors.neutral900} fontWeight={'600'}>
                Get Started
              </Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: 'flex-end',
    marginRight: spacingX._20,
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(7),
    paddingHorizontal: horizontalScale(15),
    borderRadius: radius._10,
    borderCurve: 'continuous',
  },
  footer: {
    backgroundColor: colors.black,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  },
});
