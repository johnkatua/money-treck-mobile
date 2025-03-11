import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import Typo from '../../components/Typo';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { verticalScale } from '../../utils/styling';
import { At } from 'phosphor-react-native';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/validation';
import Button from '../../components/Button';

const Login = () => {
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
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <Typo size={16} color={colors.textLighter}>
                Login now to track all your finances
              </Typo>
              <Input
                placeholder="Enter your email"
                icon={<At size={verticalScale(26)} />}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && <Typo color={colors.error}>{errors.email}</Typo>}
              <Input
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.email && errors.email && <Typo color={colors.error}>{errors.email}</Typo>}
              <Button onPress={handleSubmit}>
                <Typo size={22} color={colors.neutral900} fontWeight={'600'}>
                  Login
                </Typo>
              </Button>
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
});
