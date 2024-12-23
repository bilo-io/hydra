import React from 'react';
import FormSettings from './FormSettings';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../../components/Core'

type SettingsProps = object

export const Settings: React.FC<SettingsProps> = () => {
    const { t } = useTranslation();

    return (
        <View isPage className='w-full'>
            <Text className='text-xl font-semibold'>
                {t('settings')}
            </Text>
            <FormSettings />
        </View>
    );
};

export default Settings;