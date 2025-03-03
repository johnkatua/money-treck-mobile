import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/theme';

const Typo = ({
  size,
  children,
  style,
  color = colors.text,
  fontWeight = '400',
  textProps = {},
}) => {
  return (
    <View>
      <Text>Typo</Text>
    </View>
  );
};

export default Typo;

const styles = StyleSheet.create({});
