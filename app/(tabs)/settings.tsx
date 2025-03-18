import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { verticalScale } from '../../utils/styling';
import Header from '../../components/Header';

const Settings = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Profile" />
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
    borderRadius: verticalScale(44) / 2,
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
    justifyContent: 'space-between',
    gap: spacingX._10,
  },
});
