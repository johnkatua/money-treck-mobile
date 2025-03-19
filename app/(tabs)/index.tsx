import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { useGetUserQuery } from '../../api/userApi';

const Home = () => {
  const { data: user } = useGetUserQuery();
  console.log({ user });
  return (
    <ScreenWrapper>
      <Typo>Home</Typo>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
