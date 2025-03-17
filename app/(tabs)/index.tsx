import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import Typo from '../../components/Typo';
import { useAppDispatch } from '../../store/root';
import { logout } from '../../features/auth/authSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => dispatch(logout())}>
        <Typo>Logout</Typo>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
