import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { CaretRight, GearSix, Lock, Power, User } from 'phosphor-react-native';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { colors, radius, spacingX, spacingY } from '../../constants/theme';
import { logout } from '../../features/auth/authSlice';
import { getProfileImage } from '../../services/image_services';
import { useAppDispatch } from '../../store/root';
import { AccountOptions } from '../../types';
import { verticalScale } from '../../utils/styling';

const accountOptions: AccountOptions[] = [
  {
    title: 'Edit Profile',
    icon: <User size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    routeName: '/(modals)/profile',
    bgColor: '#6366f1',
  },
  {
    title: 'Settings',
    icon: <GearSix size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    // routeName: 'Notifications',
    bgColor: '#059669',
  },
  {
    title: 'Security',
    icon: <Lock size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    // routeName: 'Security',
    bgColor: colors.neutral600,
  },
  {
    title: 'Logout',
    icon: <Power size={verticalScale(26)} color={colors.neutral100} weight="fill" />,
    // routeName: 'Help',
    bgColor: '#e11d48',
  },
  // {
  //   title: 'About',
  //   icon: <View style={styles.listIcon} />,
  //   routeName: 'About',
  //   bgColor: colors.neutral600,
  // },
];
const Settings = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/(auth)/welcome');
  };

  const showLogoutAlert = () =>
    Alert.alert('Confirm', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Logout'),
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: () => handleLogout(),
        style: 'destructive',
      },
    ]);

  const handlePress = async (title, routeName) => {
    if (title === 'Logout') showLogoutAlert();
    if (routeName) router.push(routeName);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Profile" style={{ marginVertical: spacingY._10 }} />
        <View style={styles.userInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={getProfileImage(null)}
              style={styles.avatar}
              contentFit="cover"
              transition={100}
            />
            <View style={styles.editIcon}>
              <Text>Edit</Text>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Typo size={24} fontWeight={'600'} color={colors.neutral100}>
              John Doe
            </Typo>
            <Typo size={18} color={colors.neutral400}>
              JohnDoe@gmail.com
            </Typo>
          </View>
        </View>
        <View style={styles.accountOptions}>
          {accountOptions.map(({ title, icon, routeName, bgColor }, idx) => (
            <Animated.View
              entering={FadeInDown.delay(idx * 50)
                .springify()
                .damping(14)}
              style={styles.listItem}
              key={idx}
            >
              <TouchableOpacity
                style={styles.flexRow}
                onPress={() => handlePress(title, routeName)}
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
      </View>
    </ScreenWrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: 'center',
    gap: spacingY._15,
  },
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: colors.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: verticalScale(135) / 2,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.neutral100,
    borderRadius: verticalScale(20),
    padding: verticalScale(5),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameContainer: {
    alignItems: 'center',
    gap: verticalScale(5),
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
  accountOptions: {
    marginTop: verticalScale(30),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10,
  },
});
