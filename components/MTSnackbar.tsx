import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { MTSnackbarProps } from '../types';

const MTSnackbar: FC<MTSnackbarProps> = ({
  duration = 3000,
  message,
  visible,
  onDismissSnackBar,
}) => {
  return (
    <Snackbar duration={duration} visible={visible} onDismiss={onDismissSnackBar}>
      <Text>{message}</Text>
    </Snackbar>
  );
};

export default MTSnackbar;

const styles = StyleSheet.create({});
