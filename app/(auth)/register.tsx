import { Formik } from 'formik';
import { At, Eye, EyeSlash, Phone, User } from 'phosphor-react-native';
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
import { registerSchema } from '../../utils/validation';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [secureText, setSecureText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={'800'}>
            Let's,
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            Get Started
          </Typo>
        </View>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <Typo size={16} color={colors.textLighter}>
                Create an account now to track all your finances.
              </Typo>
              <Input
                placeholder="Enter your name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.email}
                icon={<User size={verticalScale(26)} color={colors.neutral300} weight="fill" />}
              />
              {errors.name && (
                <HelperText type="error" visible={!!errors.name}>
                  * {errors.name}
                </HelperText>
              )}
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
              <Input
                placeholder="Enter your Phone Number"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                icon={<Phone size={verticalScale(26)} color={colors.neutral300} weight="fill" />}
              />
              {errors.phoneNumber && (
                <HelperText type="error" visible={!!errors.phoneNumber}>
                  * {errors.phoneNumber}
                </HelperText>
              )}
              <Button loading={isLoading} onPress={handleSubmit}>
                <Typo size={22} color={colors.neutral900} fontWeight={'600'}>
                  Register
                </Typo>
              </Button>
              <View style={styles.footer}>
                <Typo size={16} color={colors.textLight}>
                  Already have an account?
                </Typo>
                <TouchableOpacity onPress={() => router.navigate('/(auth)/login')}>
                  <Typo size={16} color={colors.primary} fontWeight={'600'}>
                    Login
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

export default Register;

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
    marginBottom: spacingY._20,
    backgroundColor: colors.primary,
    paddingVertical: spacingY._10,
  },
  footerText: {
    color: colors.textLight,
    fontSize: verticalScale(14),
    textAlign: 'center',
  },
});
