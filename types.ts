import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: ReactNode;
  bg?: string;
};

export type ModalWrapperProps = {
  style?: ViewStyle;
  children: ReactNode;
  bg?: string;
};
