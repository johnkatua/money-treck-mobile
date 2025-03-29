import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { useGetUserQuery } from '../../api/userApi';
import { spacingX } from '../../constants/theme';
import Header from '../../components/Header';

const Home = () => {
  const { data: user } = useGetUserQuery();
  console.log({ user });
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Home" />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
});
