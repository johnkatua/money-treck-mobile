import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { verticalScale } from '../../utils/styling';
import ScreenWrapper from '../../components/ScreenWrapper';

const profile = () => {
  return (
    <ScreenWrapper>
      <Text>profile</Text>
    </ScreenWrapper>
  );
};

export default profile;

const styles = StyleSheet.create({
  inputContainer: {
    gap: spacingY._10,
  },
  editIcon: {
    position: 'absolute',
    bottom: spacingY._5,
    right: spacingY._7,
    borderRadius: 100,
    backgroundColor: colors.neutral100,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: spacingY._7,
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: colors.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200,
    borderWidth: 1,
    borderColor: colors.neutral500,
  },
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  form: {
    gap: spacingY._30,
    marginTop: spacingY._15,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacingX._20,
    gap: verticalScale(12),
    paddingTop: spacingY._15,
    borderTopColor: colors.neutral700,
    marginBottom: spacingY._5,
    borderTopWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacingY._20,
  },
});
