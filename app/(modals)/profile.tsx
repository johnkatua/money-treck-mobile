import { Image } from 'expo-image';
import { Pencil } from 'phosphor-react-native';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import ModalWrapper from '../../components/ModalWrapper';
import Typo from '../../components/Typo';
import { colors, spacingX, spacingY } from '../../constants/theme';
import { getProfileImage } from '../../services/image_services';
import { verticalScale } from '../../utils/styling';
import { Formik } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { updateUserSchema } from '../../utils/validation';
import { HelperText } from 'react-native-paper';

const profile = () => {
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <Header
          title="Update Profile"
          leftIcon={<BackButton />}
          style={{ marginBottom: spacingY._10 }}
        />
        <Formik
          initialValues={{
            name: '',
            phoneNumber: '',
            currency: '',
            avatar: null,
          }}
          validationSchema={updateUserSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <ScrollView contentContainerStyle={styles.formContainer}>
              <View style={styles.form}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={getProfileImage(values.avatar)}
                    style={styles.avatar}
                    contentFit="cover"
                    transition={100}
                  />
                  <TouchableOpacity style={styles.editIcon}>
                    <Pencil size={verticalScale(20)} color={colors.neutral800} />
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                  <Typo color={colors.neutral200}>Name *</Typo>
                  <Input
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {errors.name && <HelperText type="error">* {errors.name}</HelperText>}
                </View>
                <View style={styles.inputContainer}>
                  <Typo color={colors.neutral200}>Phone Number</Typo>
                  <Input
                    placeholder="Phone Number"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                  />
                  {errors.phoneNumber && (
                    <HelperText type="error">* {errors.phoneNumber}</HelperText>
                  )}
                </View>
                <View style={styles.inputContainer}>
                  <Typo color={colors.neutral200}>Currency</Typo>
                  <Input
                    placeholder="Currency"
                    onChangeText={handleChange('currency')}
                    onBlur={handleBlur('currency')}
                    value={values.currency}
                  />
                  {errors.currency && <HelperText type="error">* {errors.currency}</HelperText>}
                </View>
              </View>
              <View style={styles.footer}>
                <Button onPress={handleSubmit} loading={false} style={{ flex: 1 }}>
                  <Typo color={colors.black} fontWeight={'700'}>
                    Update
                  </Typo>
                </Button>
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    </ModalWrapper>
  );
};

export default profile;

const styles = StyleSheet.create({
  inputContainer: {
    gap: spacingY._10,
  },
  editIcon: {
    position: 'absolute',
    bottom: spacingY._5,
    right: spacingY._7,
    borderRadius: 100,
    backgroundColor: colors.neutral100,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: spacingY._7,
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: colors.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200,
    borderWidth: 1,
    borderColor: colors.neutral500,
  },
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  form: {
    gap: spacingY._30,
    marginTop: spacingY._15,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // paddingHorizontal: spacingX._20,
    gap: verticalScale(12),
    paddingTop: spacingY._15,
    // borderTopColor: colors.neutral700,
    marginBottom: spacingY._5,
    // borderTopWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacingX._20,
  },
});
