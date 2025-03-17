import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Snackbar } from 'react-native-paper';

const MTSnackbar = ({ message, visible, onDismissSnackBar }) => {
  return (
    <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
      <Text>{message}</Text>
    </Snackbar>
  );
};

export default MTSnackbar;

const styles = StyleSheet.create({});
