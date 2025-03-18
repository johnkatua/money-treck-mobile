import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Typo from './Typo';
import { HeaderProps } from '../types';

const Header: FC<HeaderProps> = ({ title = '', leftIcon, style }) => {
  return (
    <View>
      <Typo>Header</Typo>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
