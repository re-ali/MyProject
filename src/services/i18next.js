import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import hn from '../locales/hn.json';

export const languageResources = {
  en: {translation: en},
  fr: {translation: fr},
  hn: {translation: hn},
};

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: languageResources,
});

export default i18next;
