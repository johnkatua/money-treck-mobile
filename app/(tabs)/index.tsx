import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { useGetUserQuery } from '../../api/userApi';
import { colors, spacingX, spacingY } from '../../constants/theme';
import Header from '../../components/Header';

const Home = () => {
  const { data: user } = useGetUserQuery();
  console.log({ user });
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View
          style={{
            borderBottomColor: colors.neutral700,
            borderWidth: 1,
          }}
        >
          <Header
            title="Home"
            style={{
              marginBottom: spacingY._10,
            }}
          />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={{ height: 900 }}>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacingX._10,
    height: 'auto',
  },
});
