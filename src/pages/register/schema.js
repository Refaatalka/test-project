import * as Yup from "yup";

export const registerSchema = (t) =>
  Yup.object({
    firstName: Yup.string()
      .min(2, t('firstNameMin'))
      .required(t('firstNameRequired')),
    lastName: Yup.string()
      .min(2, t('lastNameMin'))
      .required(t('lastNameRequired')),
    email: Yup.string()
      .email(t('emailInvalid'))
      .required(t('emailRequired')),
    password: Yup.string()
      .min(6, t('passwordMin'))
      .required(t('passwordRequired')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t('passwordsMustMatch'))
      .required(t('confirmPasswordRequired')),
    agreeTerms: Yup.boolean().oneOf([true], t('agreeTermsRequired')),
  });