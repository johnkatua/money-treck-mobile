import React, { FC } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { colors, spacingY } from '../constants/theme';
import { ModalWrapperProps } from '../types';

const isIos = Platform.OS == 'ios';

const ModalWrapper: FC<ModalWrapperProps> = ({ style, children, bg = colors.neutral800 }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIos ? spacingY._15 : 50,
    paddingBottom: isIos ? spacingY._20 : spacingY._10,
  },
});
