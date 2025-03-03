import { horizontalScale, verticalScale } from '../utils/styling';

export const colors = {
  primary: '#a3e635',
  primaryLight: '#0ea5e9',
  primaryDark: 'oklch(50% 0.1193 242.75)',
  text: '#fff',
  textLight: 'oklch(92.19% 0 0)',
  textLighter: 'oklch(86.99% 0 0)',
  white: '#fff',
  black: 'oklch(0% 0 0)',
  rose: 'oklch(63.68% 0.2078 25.33)',
  green: 'oklch(62.71% 0.1699 149.21)',
  neutral50: 'oklch(0.985 0 0)',
  neutral100: 'oklch(0.97 0 0)',
  neutral200: 'oklch(0.922 0 0)',
  neutral300: 'oklch(0.87 0 0)',
  neutral400: 'oklch(0.708 0 0)',
  neutral500: 'oklch(0.556 0 0)',
  neutral600: 'oklch(0.439 0 0)',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
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
  _50: verticalScale(50),
  _60: verticalScale(60),
};

export const radius = {
  _3: verticalScale(3),
  _6: verticalScale(6),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _30: verticalScale(30),
};
