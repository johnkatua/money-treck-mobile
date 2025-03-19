import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { colors } from '../constants/theme';
import { ModalWrapperProps } from '../types';

const ModalWrapper: FC<ModalWrapperProps> = ({ style, children, bg = colors.neutral800 }) => {
  return (
    <View>
      <Text>ModalWrapper</Text>
    </View>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({});
