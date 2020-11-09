/**
 *
 * i18n
 * Main configuration related to INTERNATIONALIZATION file to display the
 * languages we required in the application
 *
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import file from './assets/en-Us.json';

const DEFAULTLANG = 'en-US';

// Languages files
const resources = {
  en: {
    translation: file,
  },
};

// Main config
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULTLANG,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
