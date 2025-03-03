import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

const _layout = () => {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
          headerTintColor: '#000',
        }}
      ></Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
