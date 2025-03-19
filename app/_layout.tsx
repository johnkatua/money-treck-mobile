import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rtkStore, { persistor } from '../store/store';

const _layout = () => {
  return (
    <PaperProvider>
      <Provider store={rtkStore}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content" />
          <Stack
            screenOptions={{
              headerShown: false,
              headerTintColor: '#000',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          >
            <Stack.Screen
              name="(modals)/profile"
              options={{
                presentation: 'modal',
              }}
            />
          </Stack>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
