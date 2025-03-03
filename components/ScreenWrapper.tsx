import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { ScreenContainerProps } from 'react-native-screens';
import { SCREEN_HEIGHT } from '../utils/styling';

const ScreenWrapper: FC<ScreenContainerProps> = ({ style, children }) => {
  const paddingTop = Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.06 : 50;
  return (
    <View style={style}>
      <Text>ScreenWrapper</Text>
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
