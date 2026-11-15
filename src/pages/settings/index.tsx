import React from 'react';
import FormSettings from './FormSettings';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../../components/Core';

export const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View isPage className="w-full space-y-6 p-6">
      <div>
        <span className="chip mb-2">Workspace Preferences</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <Text className="text-2xl font-bold">{t('settings')}</Text>
        </h1>
        <p className="text-sm text-muted-foreground">
          Configure base fiat currency, interface language, and Midnite theme mode.
        </p>
      </div>
      <div className="surface max-w-2xl p-6">
        <FormSettings />
      </div>
    </View>
  );
};

export default Settings;
