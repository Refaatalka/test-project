import React from 'react';
import { useTranslation } from 'react-i18next';
import AppTemplate from '../../components/app-template';
import PathConstants from '../../routes/pathConstants';
import CustomButton from '../../components/common/custom-button';

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <AppTemplate
      pageTitle={t('pageNotFound')}
      pageDescription={t('pageNotFoundDescription')}
      robots="noindex, nofollow"
      navbar
      footer
    >
      <section className="page-card">
        <h1>404</h1>
        <h2>{t('pageNotFound')}</h2>
        <p>{t('pageNotFoundDescription')}</p>
        <div className="page-actions">
          <CustomButton
            text={t('goToHome')}
            link={PathConstants.HOME}
            color="var(--main-color)"
            textColor="var(--white)"
          />
        </div>
      </section>
    </AppTemplate>
  );
};

export default PageNotFound;