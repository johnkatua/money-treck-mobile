import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../constants/theme';

const Welcome = () => {
  return (
    <ScreenWrapper>
      <Text
        style={{
          color: colors.text,
        }}
      >
        Welcome
      </Text>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
