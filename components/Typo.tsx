import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React, { FC } from 'react';
import { colors } from '../constants/theme';
import { TypoProps } from '../types';
import { verticalScale } from '../utils/styling';

const Typo: FC<TypoProps> = ({
  size,
  children,
  style,
  color = colors.text,
  fontWeight = '400',
  textProps = {},
}) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});
