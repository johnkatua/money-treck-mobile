import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, radius, spacingX } from '../constants/theme';
import { InputProps } from '../types';
import { verticalScale } from '../utils/styling';

const Input: FC<InputProps> = ({ containerStyle, inputStyle, inputRef, icon, ...props }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={colors.neutral400}
        ref={inputRef}
        {...props}
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
