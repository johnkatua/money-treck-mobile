import { green } from 'react-native-reanimated/lib/typescript/Colors';
import { horizontalScale, verticalScale } from '../utils/styling';

export const colors = {
  primary: '#a3e635',
  primaryLight: '#0ea5e9',
  primaryDark: '#0369a1',
  text: '#fff',
  textLight: '#e5e5e5',
  textLighter: '#d4d4d4',
  white: '#fff',
  black: '#000',
  rose: '#ef4444',
  green: '#16a34a',
};

export const spacingX = {
  _3: horizontalScale(3),
  _5: horizontalScale(5),
  _7: horizontalScale(7),
  _10: horizontalScale(10),
  _12: horizontalScale(12),
  _15: horizontalScale(15),
  _20: horizontalScale(20),
  _25: horizontalScale(25),
  _30: horizontalScale(30),
  _35: horizontalScale(35),
  _40: horizontalScale(40),
};

export const spacingY = {
  _3: verticalScale(3),
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
};
