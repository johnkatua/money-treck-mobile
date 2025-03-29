import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { ScreenContainerProps } from 'react-native-screens';
import { SCREEN_HEIGHT } from '../utils/styling';
import { colors } from '../constants/theme';

const ScreenWrapper: FC<ScreenContainerProps> = ({ style, children }) => {
  const paddingTop = Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.06 : 50;
  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: colors.neutral900,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
