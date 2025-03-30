import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Typo from './Typo';
import { HeaderProps } from '../types';
import { spacingY } from '../constants/theme';

const Header: FC<HeaderProps> = ({ title = '', leftIcon, style, rightIcon }) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      {title && (
        <Typo
          size={22}
          fontWeight={'600'}
          style={{ width: leftIcon ? '80%' : '100%', textAlign: 'center' }}
        >
          {title}
        </Typo>
      )}
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacingY._20,
  },
  title: {
    textAlign: 'center',
  },
  leftIcon: {
    alignSelf: 'flex-start',
  },
  rightIcon: {
    alignSelf: 'flex-end',
  },
});
