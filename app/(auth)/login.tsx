import { Formik } from 'formik';
import { At, Eye, EyeSlash } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { HelperText } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { verticalScale } from '../../utils/styling';
import { loginSchema } from '../../utils/validation';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '../../store/root';
import { loginUser } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../api/authApi';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [secureText, setSecureText] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();

  const handleLogin = async (values) => {
    try {
      const { data, error } = await login(values);
      console.log('data:', data, error);
      if (error) return;
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={'800'}>
            Hello,
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            Welcome Back
          </Typo>
        </View>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <Typo size={16} color={colors.textLighter}>
                Login now to track all your finances
              </Typo>
              <Input
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                icon={<At size={verticalScale(26)} color={colors.neutral300} weight="fill" />}
              />
              {errors.email && (
                <HelperText type="error" visible={!!errors.email}>
                  * {errors.email}
                </HelperText>
              )}
              <Input
                placeholder="Enter your password"
                secureTextEntry={secureText}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                icon={
                  <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    {secureText ? (
                      <Eye size={verticalScale(26)} color={colors.neutral300} weight="fill" />
                    ) : (
                      <EyeSlash size={verticalScale(26)} color={colors.neutral300} weight="fill" />
                    )}
                  </TouchableOpacity>
                }
              />
              {errors.password && (
                <HelperText type="error" visible={!!errors.password}>
                  * {errors.password}
                </HelperText>
              )}
              <Button loading={isLoggingIn} onPress={handleSubmit}>
                <Typo size={22} color={colors.neutral900} fontWeight={'600'}>
                  Login
                </Typo>
              </Button>
              <View style={styles.footer}>
                <Typo size={16} color={colors.textLight}>
                  Don't have an account?
                </Typo>
                <TouchableOpacity onPress={() => router.navigate('/(auth)/register')}>
                  <Typo size={16} color={colors.primary} fontWeight={'600'}>
                    Register
                  </Typo>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacingX._10,
  },
  footerText: {
    color: colors.textLight,
    fontSize: verticalScale(14),
    textAlign: 'center',
  },
});
