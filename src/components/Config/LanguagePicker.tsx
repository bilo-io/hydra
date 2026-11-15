import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
];

const LanguagePicker: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => {
        const active = i18n.language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`inline-flex items-center rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
              active
                ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                : 'border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguagePicker;
