import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { colors } from '../constants/theme';

const Loading: FC<ActivityIndicatorProps> = ({ size = 'large', color = colors.primary }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
