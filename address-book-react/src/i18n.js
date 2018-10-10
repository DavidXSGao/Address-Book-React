import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from './locales/en/translations.json';
import de from './locales/de/translations.json';

i18n
  .use(reactI18nextModule)
  .init({

    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,
    resources: {
      en: {
        translations: en
      },
      de: {
        translations: de
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true
    }
  });


export default i18n;