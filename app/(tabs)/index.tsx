import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { useGetUserQuery } from '../../api/userApi';
import { spacingX, spacingY } from '../../constants/theme';
import Header from '../../components/Header';

const Home = () => {
  const { data: user } = useGetUserQuery();
  console.log({ user });
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View
          style={{
            position: 'fixed',
            backgroundColor: 'green',
          }}
        >
          <Header
            title="Home"
            style={{
              marginBottom: spacingY._10,
            }}
          />
        </View>
        <View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{ height: 900 }}>
              <Text>Hello</Text>
            </View>
          </ScrollView>
        </View>
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
  contentContainer: {
    height: 'auto',
    backgroundColor: 'red',
    flex: 1,
  },
});
