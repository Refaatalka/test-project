import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login } from '../store/authSlice';
import Cookies from 'js-cookie';
import environment from '../environment';
import {
  Card,
  Title,
  Subtitle,
  Form,
  Field,
  Label,
  PasswordLabelRow,
  ForgotLink,
  InputWrapper,
  InputIcon,
  Input,
  EyeBtn,
  ErrorText,
  RememberRow,
  RememberLabel,
  SubmitBtn,
  Divider,
  SocialRow,
  SocialBtn,
  FooterText,
} from './LoginForm.style';

function LoginForm() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email(t('emailInvalid'))
      .required(t('emailRequired')),
    password: Yup.string()
      .min(6, t('passwordMin'))
      .required(t('passwordRequired')),
    rememberMe: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log('Login values:', values);
      Cookies.set(environment.TOKEN_KEY, 'logged-in', { expires: 7 });
      dispatch(
        login({
          email: values.email,
          name: values.email.split('@')[0],
        })
      );
    },
  });

  return (
    <Card>
      <Title>{t('welcomeBack')}</Title>
      <Subtitle>{t('signInSubtitle')}</Subtitle>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <Field>
          <Label htmlFor="email">{t('emailAddress')}</Label>
          <InputWrapper>
            <InputIcon>✉</InputIcon>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              $hasError={formik.touched.email && formik.errors.email}
            />
          </InputWrapper>
          {formik.touched.email && formik.errors.email && (
            <ErrorText>{formik.errors.email}</ErrorText>
          )}
        </Field>

        <Field>
          <PasswordLabelRow>
            <Label htmlFor="password" style={{ marginBottom: 0 }}>
              {t('password')}
            </Label>
            <ForgotLink
              type="button"
              onClick={() => console.log('Forgot password')}
            >
              {t('forgotPassword')}
            </ForgotLink>
          </PasswordLabelRow>
          <InputWrapper>
            <InputIcon>🔒</InputIcon>
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              $hasError={formik.touched.password && formik.errors.password}
              style={{ paddingRight: 42 }}
            />
            <EyeBtn
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? t('hidePassword') : t('showPassword')}
            >
              {showPassword ? '🙈' : '👁'}
            </EyeBtn>
          </InputWrapper>
          {formik.touched.password && formik.errors.password && (
            <ErrorText>{formik.errors.password}</ErrorText>
          )}
        </Field>

        <RememberRow>
          <RememberLabel>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
            {t('rememberMe')}
          </RememberLabel>
        </RememberRow>

        <SubmitBtn type="submit">{t('signIn')}</SubmitBtn>
      </Form>

      <Divider>
        <span>{t('orContinueWith')}</span>
      </Divider>

      <SocialRow>
        <SocialBtn
          type="button"
          onClick={() => console.log('Sign in with Google')}
        >
          <span style={{ fontWeight: 700, color: '#4285F4' }}>G</span>
          Google
        </SocialBtn>
        <SocialBtn
          type="button"
          onClick={() => console.log('Sign in with Facebook')}
        >
          <span style={{ fontWeight: 700, color: '#1877F2' }}>f</span>
          Facebook
        </SocialBtn>
      </SocialRow>

      <FooterText>
        {t('noAccount')} <Link to="/register">{t('signUp')}</Link>
      </FooterText>
    </Card>
  );
}

export default LoginForm;