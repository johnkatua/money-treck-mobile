import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { useGetUserQuery } from '../../api/userApi';
import { colors, radius, spacingX, spacingY } from '../../constants/theme';
import Header from '../../components/Header';
import { verticalScale } from '../../utils/styling';
import { extractUserProfile } from '../../services/response_service';
import { CategoryOptions, TopExpenditureItems } from '../../types';
import { Calculator, CaretRight, CreditCard, CurrencyDollar, Money } from 'phosphor-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const categoryOptions: CategoryOptions[] = [
  {
    title: 'Revenue',
    icon: <Money size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    routeName: '',
    bgColor: '#6366f1',
  },
  {
    title: 'Expenses',
    icon: <CreditCard size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    routeName: '',
    bgColor: '#059669',
  },
  {
    title: 'Budget',
    icon: <Calculator size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    routeName: '',
    bgColor: '#e11d48',
  },
];

const topExpenditureItems: TopExpenditureItems[] = [
  {
    title: 'Food',
    icon: <CreditCard size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    value: 4500,
    bgColor: '#059669',
  },
  {
    title: 'Transport',
    icon: <CreditCard size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    value: 3000,
    bgColor: '#059669',
  },
  {
    title: 'Internet',
    icon: <CreditCard size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    value: 2000,
    bgColor: '#059669',
  },
];

const topRevenueItems: TopExpenditureItems[] = [
  {
    title: 'Salary',
    icon: <Money size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    value: 45000,
    bgColor: '#6366f1',
  },
  {
    title: 'Business',
    icon: <Money size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    value: 15000,
    bgColor: '#6366f1',
  },
  {
    title: 'Side Hustle',
    icon: <Money size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    value: 9000,
    bgColor: '#6366f1',
  },
];

const Home = () => {
  const { data: user } = useGetUserQuery();
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
              Ksh. 150,000
            </Typo>
          </View>
          <Typo
            size={18}
            fontWeight={'600'}
            color={colors.neutral100}
            style={{
              marginTop: verticalScale(30),
            }}
          >
            Categories
          </Typo>
          <View style={styles.categoryOptions}>
            {categoryOptions.map(({ title, icon, routeName, bgColor }, idx) => (
              <Animated.View
                entering={FadeInDown.delay(idx * 50)
                  .springify()
                  .damping(14)}
                style={styles.listItem}
                key={idx}
              >
                <TouchableOpacity
                  style={styles.flexRow}
                  // onPress={() => handlePress(title, routeName)}
                >
                  <View
                    style={[
                      styles.listIcon,
                      {
                        backgroundColor: bgColor,
                      },
                    ]}
                  >
                    {icon}
                  </View>
                  <Typo size={16} style={{ flex: 1 }} fontWeight={'500'}>
                    {title}
                  </Typo>
                  <CaretRight size={verticalScale(20)} weight="bold" color={colors.neutral100} />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
          <Typo
            size={18}
            fontWeight={'600'}
            color={colors.neutral100}
            style={{
              marginTop: verticalScale(30),
            }}
          >
            Top Revenue Items
          </Typo>
          <View style={styles.categoryOptions}>
            {topRevenueItems.map(({ title, icon, value, bgColor }, idx) => (
              <Animated.View
                entering={FadeInDown.delay(idx * 50)
                  .springify()
                  .damping(14)}
                style={styles.listItem}
                key={idx}
              >
                <TouchableOpacity
                  style={styles.flexRow}
                  // onPress={() => handlePress(title, routeName)}
                >
                  <View
                    style={[
                      styles.listIcon,
                      {
                        backgroundColor: bgColor,
                      },
                    ]}
                  >
                    {icon}
                  </View>
                  <Typo size={16} style={{ flex: 1 }} fontWeight={'500'}>
                    {title}
                  </Typo>
                  <Typo size={20} fontWeight={'bold'} color={colors.neutral100}>
                    Ksh. {value}
                  </Typo>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
          <Typo
            size={18}
            fontWeight={'600'}
            color={colors.neutral100}
            style={{
              marginTop: verticalScale(30),
            }}
          >
            Top Expenditure Items
          </Typo>
          <View style={styles.categoryOptions}>
            {topExpenditureItems.map(({ title, icon, value, bgColor }, idx) => (
              <Animated.View
                entering={FadeInDown.delay(idx * 50)
                  .springify()
                  .damping(14)}
                style={styles.listItem}
                key={idx}
              >
                <TouchableOpacity
                  style={styles.flexRow}
                  // onPress={() => handlePress(title, routeName)}
                >
                  <View
                    style={[
                      styles.listIcon,
                      {
                        backgroundColor: bgColor,
                      },
                    ]}
                  >
                    {icon}
                  </View>
                  <Typo size={16} style={{ flex: 1 }} fontWeight={'500'}>
                    {title}
                  </Typo>
                  <Typo size={20} fontWeight={'bold'} color={colors.neutral100}>
                    Ksh. {value}
                  </Typo>
                </TouchableOpacity>
              </Animated.View>
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
  categoryOptions: {
    marginTop: verticalScale(17),
  },
  listIcon: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: colors.neutral500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius._15,
    borderCurve: 'continuous',
  },
  listItem: {
    marginBottom: verticalScale(17),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10,
  },
});
