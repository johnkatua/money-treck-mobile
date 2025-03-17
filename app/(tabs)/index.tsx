import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import Typo from '../../components/Typo';
import { logout } from '../../features/auth/authSlice';
import { useAppDispatch } from '../../store/root';

const Home = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.replace('/(auth)/welcome');
    console.log('logout');
  };
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={handleLogout}>
        <Typo>Logout</Typo>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
