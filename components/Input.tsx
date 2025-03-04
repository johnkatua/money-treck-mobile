import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { FC } from 'react';
import { colors, radius, spacingX, spacingY } from '../constants/theme';
import { verticalScale } from '../utils/styling';
import { InputProps } from '../types';

const Input: FC<InputProps> = ({ containerStyle, inputStyle, inputRef, icon }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={colors.neutral400}
        ref={inputRef}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(64),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: radius._17,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._15,
    gap: spacingX._10,
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: verticalScale(14),
  },
});
