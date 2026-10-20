import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import InputProvider from "../../components/common/input-provider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { InputTypes } from "../../constants/enums";
import { registerSchema } from "./schema";
import {
  PageWrapper,
  Main,
  Card,
  Title,
  Subtitle,
  Row,
  Divider,
  SocialRow,
  FooterText,
  BackHome,
  SubmitButton,
  SocialButton,
} from "./styles";

function Register() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema: registerSchema(t),
    onSubmit: (values) => {
      console.log(values);
    },
  });

 const connectField = (name) => ({
  name,
  fieldValue: formik.values[name],
  onChangeFunction: (value) => formik.setFieldValue(name, value),
  onBlurFunction: () => formik.setFieldTouched(name, true),
  error: formik.errors[name],
  touched: formik.touched[name],
});

  const fields = [
    {
      type: InputTypes.TEXT,
      fieldLabel: t('firstName'),
      placeholder: "leo",
      ...connectField("firstName"),
    },
    {
      type: InputTypes.TEXT,
      fieldLabel: t('lastName'),
      placeholder: "Messi",
      ...connectField("lastName"),
    },
    {
      type: InputTypes.EMAIL,
      fieldLabel: t('emailAddress'),
      placeholder: "you@example.com",
      ...connectField("email"),
    },
    {
      type: InputTypes.PASSWORD,
      fieldLabel: t('password'),
      placeholder: "••••••••",
      ...connectField("password"),
    },
    {
      type: InputTypes.PASSWORD,
      fieldLabel: t('confirmPassword'),
      placeholder: "••••••••",
      ...connectField("confirmPassword"),
    },
    {
      type: InputTypes.CHECKBOX,
      fieldLabel: (
        <>
          {t('agreeTerms')}
        </>
      ),
      ...connectField("agreeTerms"),
    },
  ];

  const nameFields = fields.slice(0, 2);
  const restFields = fields.slice(2);

  return (
    <PageWrapper>
      <Header />
      <Main>
        <Card>
          <Title>{t('createAccount')}</Title>
          <Subtitle>{t('signUpSubtitle')}</Subtitle>

          <form onSubmit={formik.handleSubmit} noValidate>
            <Row>
              {nameFields.map((item) => (
                <InputProvider key={item.name} itemObject={item} />
              ))}
            </Row>

            {restFields.map((item) => (
              <InputProvider key={item.name} itemObject={item} />
            ))}

            <SubmitButton type="submit">{t('createAccountBtn')}</SubmitButton>
          </form>

          <Divider>
            <span>{t('orContinueWith')}</span>
          </Divider>

          <SocialRow>
            <SocialButton
              type="button"
              onClick={() => console.log("Sign in with Google")}
            >
              Google
            </SocialButton>
            <SocialButton
              type="button"
              onClick={() => console.log("Sign in with Facebook")}
            >
              Facebook
            </SocialButton>
          </SocialRow>

          <FooterText>
            {t('haveAccount')} <a href="/login">{t('signIn')}</a>
          </FooterText>
        </Card>

        <BackHome href="/">{t('backToHome')}</BackHome>
      </Main>
      <Footer />
    </PageWrapper>
  );
}

export default Register;