import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { useGetUserQuery } from '../../api/userApi';
import { colors, spacingX, spacingY } from '../../constants/theme';
import Header from '../../components/Header';
import { verticalScale } from '../../utils/styling';
import { extractUserProfile } from '../../services/response_service';

const Home = () => {
  const { data: user } = useGetUserQuery();
  console.log({ user });
  const userProfile = extractUserProfile(user);
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
          <View
            style={{
              marginTop: spacingY._20,
            }}
          >
            <Typo size={18} fontWeight={'600'} color={colors.neutral100}>
              Welcome, {userProfile?.name.split(' ')[0]}
            </Typo>
          </View>
          <View style={styles.metricsCard}>
            <Typo
              size={20}
              fontWeight={'600'}
              style={{
                marginBottom: spacingY._20,
              }}
            >
              Total Revenue
            </Typo>
            <Typo size={24} fontWeight={'bold'}>
              Ksh. 15,000
            </Typo>
          </View>
          <Typo size={18} fontWeight={'600'} color={colors.neutral100}>
            Categories
          </Typo>
          <View>
            {['Revenue', 'Expenses', 'Budget'].map((item) => (
              <TouchableOpacity>
                <View></View>
              </TouchableOpacity>
            ))}
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
    gap: verticalScale(20),
  },
  metricsCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral800,
    padding: 20,
  },
});
