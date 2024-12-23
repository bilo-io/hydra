import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './en.json';
import de from './de.json';
import fr from './fr.json';

// Initialize i18n
i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
        fr: { translation: fr },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
        escapeValue: false, // React already escapes content by default
    },
});

export default i18n;
