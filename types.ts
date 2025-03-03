import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

type WrapperProps = {
  style?: ViewStyle;
  children: ReactNode;
  bg?: string;
};

export type ScreenWrapperProps = WrapperProps;

export type ModalWrapperProps = WrapperProps;
