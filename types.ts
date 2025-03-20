import { ReactNode, RefObject } from 'react';
import {
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

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

export type HeaderProps = {
  title?: string;
  leftIcon?: ReactNode;
  style?: ViewStyle;
};

export type AccountOptions = {
  title: string;
  icon: ReactNode;
  routeName?: string;
  bgColor: string;
};

export type UserProfile = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  currency: string;
};

export type UserProfileResponse = {
  data: {
    data: UserProfile;
  };
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

export interface InputProps extends TextInputProps {
  icon?: ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: RefObject<TextInput>;
}

export type LoginProps = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type AuthResponse = {
  token: string;
  msg: string;
};

export type ApiResponse = {
  msg: string;
  data: any;
};

export type RegisterProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type MTSnackbarProps = {
  message: string;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
  onDismissSnackBar: () => void;
  visible: boolean;
};
