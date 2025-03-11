import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const _layout = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
          headerTintColor: '#000',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      ></Stack>
    </PaperProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
