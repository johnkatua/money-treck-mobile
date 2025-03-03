import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors, spacingX, spacingY } from '../../constants/theme';
import Typo from '../../components/Typo';
import { verticalScale } from '../../utils/styling';

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.contanier}>
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Typo fontWeight={'500'}>Login</Typo>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ alignItems: 'center' }}>
          <Typo size={30} fontWeight={'800'}>
            Always take control
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            of your finances
          </Typo>
        </View>
        <View style={{ alignItems: 'center', gap: 2 }}>
          <Typo size={18}>Finances must be arranged to set a better</Typo>
          <Typo size={18}>Lifestyle in future</Typo>
        </View>
        <View style={styles.buttonContainer}></View>
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
  },
  footer: {
    backgroundColor: colors.neutral800,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 12,
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
