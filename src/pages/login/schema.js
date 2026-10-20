import * as Yup from 'yup';

export const loginSchema = (t) =>
  Yup.object({
    email: Yup.string()
      .trim()
      .required(t('emailRequired'))
      .email(t('emailInvalid')),
    password: Yup.string()
      .required(t('passwordRequired'))
      .min(6, t('passwordMin')),
    rememberMe: Yup.boolean(),
  });