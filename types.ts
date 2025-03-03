import { ReactNode } from 'react';
import { TextProps, TextStyle, ViewStyle } from 'react-native';

type WrapperProps = {
  style?: ViewStyle;
  children: ReactNode;
  bg?: string;
};

export type ScreenWrapperProps = WrapperProps;

export type ModalWrapperProps = WrapperProps;

export type TypoProps = {
  size?: number;
  color?: string;
  fontWeight?: TextStyle['fontWeight'];
  children: any | null;
  style?: TextStyle;
  textProps?: TextProps;
};
