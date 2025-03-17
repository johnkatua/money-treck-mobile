import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { MTSnackbarProps } from '../types';

const MTSnackbar: FC<MTSnackbarProps> = ({
  duration = 3000,
  message,
  visible,
  onDismissSnackBar,
}) => {
  console.log('MTSnackbar:', message);
  return (
    <View style={styles.container}>
      <Snackbar duration={duration} visible={visible} onDismiss={onDismissSnackBar}>
        <Text>{message}</Text>
      </Snackbar>
    </View>
  );
};

export default MTSnackbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
