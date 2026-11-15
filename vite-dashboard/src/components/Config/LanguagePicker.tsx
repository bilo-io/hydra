import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
];

const LanguagePicker: React.FC = () => {
    const { i18n } = useTranslation();
    const { theme } = useTheme();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        backgroundColor: i18n.language === lang.code ? theme.primary : '#f0f0f0',
                        color: i18n.language === lang.code ? '#fff' : '#000',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};

export default LanguagePicker;
