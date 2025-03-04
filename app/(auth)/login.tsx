import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { verticalScale } from '../../utils/styling';

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={'800'}>
            Hello,
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            Welcome Back
          </Typo>
        </View>
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login now to track all your finances
          </Typo>
          <Input placeholder="Enter your email" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
});
