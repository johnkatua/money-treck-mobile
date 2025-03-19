import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
});

export const updateUserSchema = Yup.object().shape({
  name: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  currency: Yup.string().required(),
});
