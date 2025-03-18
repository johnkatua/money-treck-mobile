import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Typo from './Typo';
import { HeaderProps } from '../types';

const Header: FC<HeaderProps> = ({ title = '', leftIcon, style }) => {
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
  leftIcon: {
    alignSelf: 'flex-start',
  },
});
