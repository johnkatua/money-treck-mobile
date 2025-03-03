import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { colors, radius } from '../constants/theme';
import { verticalScale } from '../utils/styling';
import { CustomButtonProps } from '../types';

const Button: FC<CustomButtonProps> = ({ style, onPress, children, loading = false }) => {
  if (loading) {
    return <View style={[styles.button, style, { backgroundColor: 'transparent' }]}></View>;
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._17,
    borderCurve: 'continuous',
    height: verticalScale(52),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
