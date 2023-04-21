import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import English from './locales/en/translation.json';
import Italian from './locales/it/translation.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                common: English
            },
            it : {
                common: Italian
            }
        },
    });

export default i18n;
