import React from 'react';
import FormSettings from './FormSettings';
import { useTranslation } from 'react-i18next';

type SettingsProps = object

export const Settings: React.FC<SettingsProps> = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div>{t('settings')}</div>
            <FormSettings />
        </>
    );
};

export default Settings;