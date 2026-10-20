import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './assets/locals';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('_lang') || 'en', // اللغة الافتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;