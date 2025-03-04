import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { verticalScale } from '../../utils/styling';

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}></View>
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
});
