import { ReactNode } from 'react';
import { TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

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

export interface CustomButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  loading?: boolean;
  children: ReactNode;
  onPress?: () => void;
}

export type BackButtonProps = {
  style?: ViewStyle;
  iconSize?: number;
};
