import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import { PageWrapper, Main, BackHome } from "./styles";

function LoginPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Header />
      <Main>
        <LoginForm />
        <BackHome href="/">{t("backToHome")}</BackHome>
      </Main>
      <Footer />
    </PageWrapper>
  );
}

export default LoginPage;
